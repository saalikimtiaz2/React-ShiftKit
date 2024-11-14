/* This line of code is exporting all named exports from the `index.ts` file located in the
`src/components` directory. By using `export *`, it allows you to re-export all named exports from
another module or file, making them available for import from the current module. This can be useful
for creating a single entry point for multiple components or utilities located in different files
within a directory. */
import './src/styles/global.css';


import { default as useDarkSide } from './src/hooks/useDarkSide';
export default useDarkSide;
export * from './src/components/index';


