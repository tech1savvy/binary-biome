---
tags:
  - course
created_time: "[[2024-03-23 18:01]]"
modified_time: 2024-03-28, 01:33
forward: 
backward: 
---
# to Course
- Contents 
	- Node.js 
	- Express.js 
	- Rest API
	- MongoDB, Mongoose
	- Website Deployment
- Course Requirements
	- HTML, CSS, JS, ES6
	- Callbacks, Promises, Async-Await
[[JavaScript Nuggets by Coding Addict]]
# Introduction to NodeJS
> What is nodeJS?
- It is an ==environment== to run JS outside browser.
- It is built based on Chrome's ==V8== JS Engine.

> What is the difference between browser and nodeJS?
- There is ==no DOM== structure in nodeJS which implies we cannot use `doument.` methods.
- ==No GUI== in node, only CLI. Thus, we cannot have interactive apps in nodeJS unlike a browser, only server side apps.
- There is support for ==filesystem== in node while it is absent in browsers.
- Unlike browsers which are prone to [fragmentation](https://www.headspin.io/blog/fundamentals-of-browser-os-and-device-fragmentation#:~:text=Fragmentation%20is%20the%20diversity%20of%20browsers%2C%20devices%2C%20and%20platform%20versions%20in%20use%20at%20any%20given%20point%20in%20time.%20This%20phenomenon%20occurs%20when%20some%20mobile%20users%20use%20older%20versions%20of%20an%20operating%20system%2C%20browser%2C%20or%20device%2C%20while%20others%20use%20newer%20versions.) because of users having different versions of os and browsers, nodeJS versions are based on the configuration of server which will be same for all users.
- ! Browsers use ES6 Modules where as Node uses CommonJS

> How to check which version of node you are using?
- `node --version`

> Command to run JS code line:
- `node fieName.js` or just `node fileName`

> What does it mean by REPL? 
![[Pasted image 20240327225341.png | 500]]
```node
$ node
> 
```
- It stands for Read Evaluate Print Loop.
- To start a REPL, type `node` and press enter, (just like we write `py` in terminal).
- `Ctrl + C` twice or `Ctrl + D` is used to exit REPL.

> Ways to use strings in node.
- between single quotes, double quotes, or backticks `(``)

# Global Variables
Accessible anywhere in the code.
- `__dirname`: path to current directory
- `__filename`: file name
- ! `process`: info about environment where the program is being executed
	- environment as in the service that is hosting out nodeJS server like `digital ocean` , like type of virtual machine on the cloud.
- `require`: function to use modules (CommonJS)
- `module`: info about current modules (file)
- `setInterval()`:
```js
serInterval(() => {
	console.log('hello world)
}, 1000) // keep executing the function every 1000 milliseonds (1 second)
```

# Modules
- every file is a module by default
## Export Single Value
```js sayHi
const sayHi = (name) => {  
    console.log(`Hello there ${some}`)  
}  
module.exports = sayHi // export single value
```
## Export Multiple Values
```js names
// local  
const secret = 'super secret'  
// shareable  
const a = 'akon'  
const b = 'bkon'  
  
// console.log(module) // displays properties of the file as am object  
  
module.exports = {a, b} // export multiple values
```

## Export as properties
```js
// const items = ['item1', 'item2']  
module.exports.items = ['item1', 'item2'] // items is the property of this module with value as an array  
  
const person = {  
    name: 'bob'  
}  
  
module.exports.singlePerson = person // singlePerson is an property of this module object and person is the object as value of the singlePerson property
```

> app.js
```js app
// console.log(a) // error 'a' does not exist yet or in this file  
  
// importing another module/file  
const names = require('./names');  
const sayHi = require('./sayHi')  
// console.log(names) // displays the exports called from the anotherFile  
  
// console.log(a) // error  
console.log(names.a)  
console.log(names.b)  
  
// or  
// const {a,b} = require('./names')  
// console.log(a) // no error  
// console.log(b)  
  
const data = require('./export-as-you-go')  
console.log(data)

require('./mind-grenade') // when we import a module, behind the screen we actually invoke it

```

```js mind breaker
const num1 = 5
const num2 == 10

function addValue(){
	console.log(`the sum is : ${num1 + num2}`)
}

addValues()
```

<iframe src="https://replit.com/@AmanKumar38/modules?embed=true" width="600" height="400"></iframe>

- @ https://youtu.be/Oe421EPjeBE?t=3228