module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
        "no-console": "off",
        "prefer-const": "error",
        "no-var": "error",
        "arrow-spacing": "error",
        "prefer-arrow-callback": "error",
        "prefer-template": "error",
        "no-useless-escape": "error",
        "no-useless-concat": "error",
        "require-await": "error",
        "no-return-await": "error"
    }
}
