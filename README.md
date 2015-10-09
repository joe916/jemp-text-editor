## Introduction
This is a simple text editor created using **node-webkit** that will allow you to create/open, edit and save files. Initially tarted with the help of instructions provided [here](http://code.tutsplus.com/tutorials/introduction-to-html5-desktop-apps-with-node-webkit--net-36296), it has been further enhanced. 

This project can be built to work on Windows, Mac or Linux.

## Preparation

1. Download [Node Webkit](https://github.com/nwjs/nw.js/)
2. Copy the **nw** executable to the root directory

## Running the application

1. Run the **nw** executable

## Options

1. Disable the browser toolbar by setting the following in `package.json`
   - `"window": { "toolbar": false }`


## Building an executable (Windows, Mac, Linux)

Executable = Your app + Node webkit executable (unique to each platform).

Manual steps to create an executable can be found on [Node WebKit Wiki](https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps).

If you would like to do it all in one step,

- Try using [Web2Executable](https://github.com/jyapayne/Web2Executable)

**Web2Executable** will let you create executable for multiple platforms (Windows, Mac & Linux) in a single step.
