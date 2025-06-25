# @faktion-com/prettier-config

A shared Prettier configuration package for Faktion projects. This package provides consistent code formatting rules across all Faktion repositories and projects.

## Features

- **Consistent formatting**: Ensures all code follows the same formatting standards
- **Tailwind CSS support**: Includes `prettier-plugin-tailwindcss` for optimal Tailwind class sorting
- **Modern defaults**: Configured with sensible defaults for modern JavaScript/TypeScript development
- **Easy integration**: Simple setup process for any project

## Installation

Install the package as a dev dependency:

```bash
npm install --save-dev @faktion-com/prettier-config
# or
yarn add --dev @faktion-com/prettier-config
# or
pnpm add --save-dev @faktion-com/prettier-config
```

## Usage

### Basic Setup

Create a `.prettierrc.js` file in your project root:

```javascript
module.exports = require("@faktion-com/prettier-config/base");
```

Or if you're using ES modules, create a `.prettierrc.mjs`:

```javascript
import baseConfig from "@faktion-com/prettier-config/base";
export default baseConfig;
```

### Package.json Configuration

Alternatively, you can add the configuration directly to your `package.json`:

```json
{
  "prettier": "@faktion-com/prettier-config/base"
}
```

## Configuration

The base configuration includes the following settings:

- **Trailing comma**: ES5 style
- **Tab width**: 2 spaces
- **Semicolons**: Always
- **Quotes**: Single quotes
- **JSX quotes**: Single quotes
- **Tabs**: Spaces only
- **Print width**: 80 characters
- **Bracket spacing**: Enabled
- **Bracket same line**: Enabled
- **Arrow function parentheses**: Always
- **Single attribute per line**: Enabled
- **End of line**: LF (Unix style)
- **Plugins**: Tailwind CSS plugin included

## IDE Integration

### VS Code

1. Install the Prettier extension
2. Set Prettier as the default formatter
3. Enable format on save (optional)

Add to your VS Code settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Other Editors

Most modern editors support Prettier configuration files automatically. The configuration will be picked up when you have a `.prettierrc.js` or `package.json` configuration in your project.

## Scripts

Add these scripts to your `package.json` for convenient formatting:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## Ignoring Files

Create a `.prettierignore` file to exclude files from formatting:

```
node_modules
dist
build
```
