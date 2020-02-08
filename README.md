# nodejs-npm-beginner-tutorial

A step by step beginner tutorial.

## Setting up git repository #step-1

- ### Git repo initialization

  ```bash
  git init
  # or
  # git clone <git repository url>
  ```

- ### Adding git ignore file

  [gitignore.io](http://gitignore.io/) is a great tool to generate custom `.gitignore` files that follows the community best practices.

  Just select your OS, IDE and language (or combination of those) and save the output as your `.gitignore` file.

  ```bash
  npx gitignore-dot-io node macos visualstudiocode
  # or use http://gitignore.io/ to create the file
  ```

## Running Node.js scripts #step-2

- ### Create script

  ```bash
  echo "console.log('hello world 👋 👋 👋')" > index.js
  ```

- ### Run the script
  
  ```bash
  node index.js
  ```

## Building HTTP server #step-3

- ### Using native `http` module

  Node.js native `http`

- ### RequestListener - using request and response

  Request API - https://nodejs.org/api/http.html#http_class_http_clientrequest

  Response API - https://nodejs.org/api/http.html#http_class_http_serverresponse

## Working with join #step-4

- ### Resolving file path location by url

  `path` native module - https://nodejs.org/api/path.html

- ### 404 handling

  use `fs` module to find file existence

- ### File stream

  use `fs` module to open a file stream and pipe it to the http response object

## Environment variables #step-5

- ### Using environment variable

## Writing modules #step-6

- CommonJS - exporting

- CommonJS - consumption

## Working with npm cli tool #step-7

- ### Initiating npm

  ```bash
  npm init
  # or 'npm init -y' for skipping interactive init (replay yes to all)
  ```

- ### Installing dependencies

  [ESLint](https://eslint.org/docs/user-guide/getting-started) is highly recommend on every JavaScript project we will add it to our project as a development dependency.

  ```bash
  npm install eslint --save-dev
  ```

  Notice the `package.json` has been updated with a `"devDependencies"` field, `package-lock.json` file been created, and lastly the `node_module` folder (should be greyed out on the IDE and SHOULD NOT be committed to the repo).

- ### Using cli tools (npx)

  The `package.json` can describe [bin files](https://docs.npmjs.com/files/package.json#bin), those are mounted by npm for use as cli tools.

  ```bash
  npx eslint --init
  ##### Those are the answers given in this tutorial
  # ? How would you like to use ESLint? To check syntax and find problems
  # ? What type of modules does your project use? CommonJS (require/exports)
  # ? Which framework does your project use? None of these
  # ? Does your project use TypeScript? No
  # ? Where does your code run? Node
  # ? What format do you want your config file to be in? JavaScript
  ```

  `npx` is a npm package runner command, it looks for bin file on `./node_modules/.bin/` folder, if none is found then npm downloads it and run a package temporarily.

  Now we can run eslint on our project.

  ```bash
  npx eslint
  ```

- ### Installing global tool (not recommended)

  npm accept `-g` flag for managing global dependencies, this is not recommended as at not reflected as a dependency on the `package.json` file, the following examples are for educational purposes.

  ```bash
  npm install -g eslint
  ```

  Now `eslint` is available on our terminal

  ```bash
  eslint .
  ```

  And and don't forget to uninstall it

  ```bash
  npm remove -g eslint
  ```

## npm scripts #step-8

  We can add scripts to our `package.json` file under the `"scripts"` section.

- ### Adding lint script

  By default we have the `"test"` script but we can add any script, npm also support `pre` and `post` prefix for running scripts preceding or following scripts.

- ### Running scripts

  ```bash
  npm run lint
  ```
