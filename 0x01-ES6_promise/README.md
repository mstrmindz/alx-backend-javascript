# 0x01. ES6 Promises
## Javascript ES6

![ES6 Promises](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230726%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230726T184007Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=28e6220f0ea91a257a9da9a974f89e09d0067e3dabbcf4fde5115994f193195e)

## Resources
Read or watch:
- [Promise](https://intranet.alxswe.com/rltoken/j_0FTFbkTg42JMcAbNPOVQ)
- [JavaScript Promise: An introduction](https://intranet.alxswe.com/rltoken/2Q2LzNFokcUwpA2u3FKG6Q)
- [Await](https://intranet.alxswe.com/rltoken/UXb3S2PMBe-SLJ55isMcow)
- [Async](https://intranet.alxswe.com/rltoken/_K0C7pgEjwaIzU9RpwCb8g)
- [Throw / Try](https://intranet.alxswe.com/rltoken/_K0C7pgEjwaIzU9RpwCb8g)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

### Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported

### Setup
Install NodeJS 12.11.x (in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

Install Jest, Babel, and ESLint in your project directory:

```
Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
Install ESLint using: npm install --save-dev eslint
```

### Files
- package.json (Click to show/hide file contents)
- babel.config.js (Click to show/hide file contents)
- utils.js (Use when you get to tasks requiring uploadPhoto and createUser. Click to show/hide file contents)
- .eslintrc.js (Click to show/hide file contents)

And don’t forget to run $ npm install when you have the package.json.

### Response Data Format
`uploadPhoto` returns a response with the format:

```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

`createUser` returns a response with the format:

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```
