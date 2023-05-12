This project was created with [VITE](https://vitejs.dev/).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  package-lock.json
  .eslintrc.cjs
  .gitignore
  .prettierrc.cjs
  index.html
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
  src/
    components/
      form
      nav
      ui
    context
      _test_
      index.ts
    data/
      dummy.json
    hooks/
      dummy.ts
    pages/
        Home.tsx
        NotFound.tsx
    scss/
        abstracts
        base
        components
        layouts
        pages
        vendor
    App.tsx
    App.test.tsx
    setupTests.ts
    index.css
    main.tsx
    vite-env.d.ts
```

For the project to build, **these files must exist with exact filenames**:
* `src/main.tsx` is the TypeScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

