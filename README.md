# 📦 CommonJS vs ES Modules in Node.js

A clear comparison of how to use `require()` (CommonJS) versus `import`/`export` (ES Modules) in Node.js projects.

---

## 🔍 Overview

Node.js supports two main module systems:

- **CommonJS (CJS)**  
  - Uses `require()` and `module.exports`  
  - Synchronous loading at runtime  
  - Default for most `.js` files unless `"type": "module"` is set

- **ECMAScript Modules (ESM)**  
  - Uses `import` and `export` syntax  
  - Asynchronous, static loading (evaluated before execution)  
  - Requires `.mjs` extension or `"type": "module"` in `package.json`

---

## 🔧 When to Use Each

| Use Case                           | CommonJS (`require`)             | ESM (`import`)                          |
|------------------------------------|----------------------------------|-----------------------------------------|
| Quick scripts or legacy projects   | ✅ Native support in Node         | ⚠️ Requires config or `.mjs`            |
| Dynamic imports (conditional)      | ✅ Supported anywhere            | ⚠️ Use dynamic `import()` as Promise    |
| Bundling & tree-shaking            | ❌ Not supported                 | ✅ Static imports enable tree-shaking   |
| Built-in globals (`__filename`)    | ✅ Available                     | ⚠️ Use `import.meta.url`                |
| Mixing CJS & ESM                   | ❌ Cannot import ESM directly    | ✅ Can import CommonJS modules          |

---

## 🧭 Migration Tips

To move from CommonJS to ESM:

1. Add `"type": "module"` to `package.json`  
2. Rename modules to `.mjs` (or use `.js` with the new type)  
3. Convert:
   ```diff
   - const fs = require('fs');
   - module.exports = ...
   + import fs from 'fs';
   + export ...

# Module Wrapper in Node.js

## Overview

In Node.js, every file (module) is wrapped in a special function known as the **Module Wrapper Function**.  
This is a core part of how Node’s module system works under the hood.

---

## Why It Matters

- **Encapsulation**: Variables inside a module don’t leak into the global scope.
- **Module System**: Each file gets its own `exports`, `require`, `module`, etc.
- **Performance**: Node caches modules after the first load using this system.

---

## Module Wrapper Function

The actual wrapper looks something like this:

```js
(function (exports, require, module, __filename, __dirname) {
  console.log("HI I am Module wrapper");
})();


## URL Module

| Property / Method    | Description                                    | Example Output                                        |
|----------------------|------------------------------------------------|--------------------------------------------------------|
| `myUrl.host`         | Hostname + port                                | `example.com:8080`                                     |
| `myUrl.hostname`     | Hostname only                                  | `example.com`                                          |
| `myUrl.href`         | Full URL string                                | `https://example.com:8080/path?query=1#hash`           |
| `myUrl.origin`       | Protocol + host                                | `https://example.com:8080`                             |
| `myUrl.password`     | Password, if present in the URL                | `` (empty string)                                      |
| `myUrl.pathname`     | Path after the domain                          | `/path`                                                |
| `myUrl.port`         | Port number                                    | `8080`                                                 |
| `myUrl.protocol`     | Protocol used                                  | `https:`                                               |
| `myUrl.searchParams` | Parsed query parameters                        | `URLSearchParams { 'query' => '1' }`                   |
| `myUrl.search`       | Raw query string (including `?`)              | `?query=1`                                             |
| `myUrl.toJSON()`     | Serialized JSON representation of the URL      | `"https://example.com:8080/path?query=1#hash"`         |
| `myUrl.toString()`   | URL as a string                                | `https://example.com:8080/path?query=1#hash`           |
| `myUrl.hash`         | Fragment identifier (after `#`)               | `#hash`                                                |

## PAth module

| Method / Property         | Description                      | Example Output                                  |
|---------------------------|---------------------------------|------------------------------------------------|
| `path.basename(p)`        | Gets the file name              | `'file.txt'`                                   |
| `path.dirname(p)`         | Gets the directory path         | `'C:/Users/John'`                              |
| `path.extname(p)`         | Gets file extension             | `'.txt'`                                       |
| `path.join(...paths)`     | Joins path segments             | `'C:/Users/John/file.txt'`                     |
| `path.resolve(...paths)`  | Resolves to an absolute path    | `'C:/Users/John/file.txt'`                     |
| `path.normalize(p)`       | Normalizes a path               | `'C:/Users/John/file.txt'`                     |
| `path.isAbsolute(p)`      | Checks if path is absolute      | `true`                                         |
| `path.relative(from, to)` | Gets relative path              | `'../Pictures'`                                |
| `path.parse(p)`           | Parses path into parts          | `{ root: 'C:/', dir: 'C:/Users/John', base: 'file.txt', ext: '.txt', name: 'file' }` |
| `path.format(obj)`        | Builds path string from object  | `'C:/Users/John/file.txt'`                     |
| `path.sep`                | Path segment separator          | `'\\'` (Windows), `'/'` (POSIX)                |
| `path.delimiter`          | Path list delimiter             | `';'` (Windows), `':'` (POSIX)                 |


# 🌐 Node.js `http` Module

The built-in `http` module allows Node.js to transfer data over HTTP, enabling the creation of web servers and clients.

---------------------------------------------------------------------------------------------------------------------
| Method / Property         | Description                              | Example / Notes                             |
|---------------------------|------------------------------------------|---------------------------------------------|
| `http.createServer()`     | Creates a new HTTP server                | `(req, res) => { ... }`                     |
| `server.listen(port)`     | Starts server listening on given port    | `server.listen(3000)`                       |
| `http.request(options, callback)` | Makes an HTTP request            | Used for client requests                    |
| `http.get(options, callback)`     | Shortcut for GET requests        | Calls `http.request` with method GET        |
| `req.method`              | HTTP method of incoming request          | `'GET'`, `'POST'`, etc.                     |
| `req.url`                 | URL of the incoming request              | `'/path?query=1'`                           |
| `req.headers`             | Headers sent by the client               | `{ host: 'example.com', ... }`              |
| `res.writeHead(statusCode, headers)` | Sends response status & headers | `res.writeHead(200, { 'Content-Type': 'text/html' })` |
| `res.write(data)`         | Sends a chunk of the response body       | `res.write('Hello world!')`                 |
| `res.end()`               | Ends the response                        | `res.end()`                                 |
| `http.STATUS_CODES`       | Object mapping status codes to messages  | `http.STATUS_CODES[404] === 'Not Found'`    |
----------------------------------------------------------------------------------------------------------------------

## Example Usage

```js
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});


