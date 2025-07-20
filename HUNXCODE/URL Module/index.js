// The url module in Node.js helps you work with URLs —
//  parsing, formatting, resolving, and manipulating them easily.
import { url } from 'inspector';
import {URL} from 'url'

const myUrl = new URL('https://example.com:8080/path?query=1#hash');

console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.origin);
console.log(myUrl.password);
console.log(myUrl.pathname);
console.log(myUrl.port);
console.log(myUrl.protocol);
console.log(myUrl.searchParams);
console.log(myUrl.search);
console.log(myUrl.toJSON());
console.log(myUrl.toString());
console.log(myUrl.hash);