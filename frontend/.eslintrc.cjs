let classMembersOrder = [
  "public-static-field",
  "protected-static-field",
  "private-static-field",
  "public-instance-field",
  "public-decorated-field",
  "public-abstract-field",
  "protected-instance-field",
  "protected-decorated-field",
  "protected-abstract-field",
  "private-instance-field",
  "private-decorated-field",
  "static-field",
  "public-field",
  "instance-field",
  "protected-field",
  "private-field",
  "abstract-field",
  "constructor",
  "public-static-method",
  "protected-static-method",
  "private-static-method",
  "public-method",
  "protected-method",
  "private-method",
]

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "import", "simple-import-sort"],
  extends: ["plugin:@typescript-eslint/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: {
          memberTypes: classMembersOrder,
          order: "as-written",
        },
      },
    ],
    "arrow-body-style": ["warn", "as-needed", { requireReturnForObjectLiteral: false }],
    "simple-import-sort/imports": "error",
    "sort-imports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-console": "warn",
    "no-debugger": "error",
  },
}