//Storing JSON file in Server

// Include File system module
// fs = file system
// readFile - works asynchronous
// readFileSync -works synchronous
const {readFileSync} = require('fs');
/* JSON.parse 

stringfy : Serialisation
- 1st it will be encrypted
- when server is sending it will call stringfy
- when it reaches to the client, client starts excecuting the parse
(Just reads the content , which is stored in the 'load')
parse : De-serialisation

*/

var load = ()=> JSON.parse(readFileSync('student.json'))
// exporting this program to another
module.exports = {load};