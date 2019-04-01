/*jshint esversion: 6 */
/*jshint esversion: 8 */
/*jshint esversion: 9 */
const http = require('http');

http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(8080);

console.log('Listening on port: 8080');


