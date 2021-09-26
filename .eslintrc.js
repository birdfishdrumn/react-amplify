// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "plugin:react/recommended",
//         "airbnb",
//         'plugin:react/recommended',
//         // 各プラグイン推奨共有設定
//         'airbnb/hooks',
//         'plugin:import/errors',
//         'plugin:import/warnings',
//         'plugin:import/typescript',
//         'plugin:@typescript-eslint/eslint-recommended',
//         'plugin:@typescript-eslint/recommended'
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {

//         "ecmaVersion": 12,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "@typescript-eslint",

//         'import',
//         'jsx-a11y',
//         'react-hooks',
//     ],
//     "rules": {
//         quotes: ["error", "single"],
//         // semi: ["error", "always"],
//     }
// };
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        React: "writable",
    },
    ignorePatterns: ["build"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "react", 'react-hooks', ],
    rules: {
        quotes: ["error", "single"],
        "no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "none",
            },
        ],
        "no-console": ["off"]
    },
    settings: { react: { version: "detect" } },
};