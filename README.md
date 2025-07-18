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
