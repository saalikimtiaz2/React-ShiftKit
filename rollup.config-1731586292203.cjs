'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjs = require('@rollup/plugin-commonjs');
var resolve = require('@rollup/plugin-node-resolve');
var terser = require('@rollup/plugin-terser');
var typescript = require('@rollup/plugin-typescript');
var dts = require('rollup-plugin-dts');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');

const packageJson = require("./package.json");

var rollup_config = [
    {
        input: './index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            postcss(),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: './index.ts',
        output: {
            file: packageJson.types,
        },
        plugins: [dts.default()],
        external: [/\.css$/], // Use /\.css$/ to correctly define a regex pattern
    },
];

exports.default = rollup_config;
