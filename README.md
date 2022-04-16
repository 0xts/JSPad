# JSPad

![](https://github.com/0xts/JSPad/raw/master/screenshots/jspad.gif)

## Introduction
JSPad is an application that is targetted to solve the problem of building Javascript + Markdown notebooks for various purposes such as writing tutorials, teaching, concept illustration and just fiddling with the language for fun, learning all the quirks of it.

The application is still a work in progress and the end product is going to be, more or less like, [Jupyter](https://jupyter.org/) notebooks.

For now, JSPad is a simple react application with normal functionality of adding code blocks and markdown blocks.

Get started by cloning the repo: 

```
git clone https://github.com/0xts/JSPad
cd JSPad
npm start
```
Any feedbacks and PRs are welcome.

## Tech Stack
The JSPad uses __ReactJS, ReduxJS, Axios, ESBuild, Monaco Editor, Markdown Editor__ under the hood, and is written in TypeScript.

## Features

* On-the-fly code bundling and compiling for execution.
* Import any module from npm registry for use (internet connection required).
* Write multiple code and markdown blocks to build a notebook.
* Export and share notebooks (to be implemented).
* Execute from commandline or desktop (to be implemented).
