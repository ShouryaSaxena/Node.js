import url from 'url';

const myURL = new URL('http://example.org:5000');

myURL.pathname = 'a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);