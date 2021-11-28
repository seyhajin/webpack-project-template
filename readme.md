# Webpack project template

## Setup

[Node.js](https://nodejs.org/) must be installed on your computer, otherwise [download](https://nodejs.org/en/download/) and install it. 

Run this followed commands in Terminal :

- Clone this repository, you can specified your project name (optional)

```bash
git clone https://github.com/seyhajin/webpack-project-template <project_name>
```

- Install project dependencies (only for first time)

```bash
npm install
```

## Get started

Edit **title** in *index.html*.

Your code must be placed in the *src/* directory.

All public resources must be placed in the *static/* directory.

Application entry point for javascript is in *src/index.js*.

## Development

Run development server in Terminal:

```bash
npm run dev
```

Your browser will open automatically on http://localhost:8080.

When you modify your code, the server refresh your browser.

## Production

When your project was ready for exporting to production, run the following command in Terminal :

```bash
npm run build
```

This command was generated optimised files on *build/* directory.

Push them into your production server and enjoy 😀

## Notes

```bash
mkdir <project_name> && cd <project_name>
mkdir src && mkdir static
npm init -y
npm install --save-dev @babel/core @babel/preset-env portfinder-sync internal-ip@6.2.0 webpack webpack-cli webpack-merge webpack-dev-server babel-loader css-loader file-loader html-loader raw-loader style-loader clean-webpack-plugin html-webpack-plugin copy-webpack-plugin mini-css-extract-plugin terser-webpack-plugin javascript-obfuscator webpack-obfuscator
```

Update `package.json`, `bundler/common.js`, `bundler/dev.js`, `bundler/prod.js` files.

Create `.gitignore` in root directory and `.gitkeep` in *static* directory.
