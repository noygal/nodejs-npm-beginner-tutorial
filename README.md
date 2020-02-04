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
