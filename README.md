<h1 align="center">SihRong-package-demo</h1>

<p align="center">
SihRong package demo for vue conf workshop.
</p>

<p align="center">
  <a target="_blank" href="https://www.npmjs.com/package/sihrong-package-demo">
    <img src="https://img.shields.io/npm/v/mike-vue-ui?color=c95f8b&amp;label=" alt="NPM version">
  </a>
  <a target="_blank" href="https://vuejs.org/" title="vue">
      <img src="https://img.shields.io/badge/vue-%3E%203.0.0-brightgreen.svg">
  </a>
  <a target="_blank" href="http://nodejs.org/download/" title="Node version">
      <img src="https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen.svg">
  </a>
  <a target="_blank" href="https://github.com/MikeCheng1208/vue-metamask/pulls" title="PRs Welcome">
      <img src="https://img.shields.io/badge/PRs-welcome-blue.svg">
  </a>
</p>

<p align="center">
<a target="_blank" href="https://www.npmjs.com/package/sihrong-package-demo">
  <img src="https://nodei.co/npm-dl/mike-vue-ui.png?months=6" alt="NPM version">
</a>
</p>


## 🚀 Features

- 🎪 **Support for Vue 3** 
- 🦾 **Simple and user-friendly UI components**
- 🔋 **Develop the integration of UnoCSS (optional)**
- 🔩 **Compatible with cjs, es, and iife versions**
- 🌎 **Documentation available：** [中文](./zh-tw/README.md) | English


### 📦 Installation
```
npm install sihrong-package-demo -S
```


### 🕶 Style
```javascript
import 'mike-vue-ui/dist/index.css';
```

## ⚡ Components

<!-- <details> -->
  <h5> password Input</h5>

  ## password input
  - Specialized input for password, provide display password switching  .

  <img src="./assets/password-input.jpg" />
  <br/>

```javascript
import { PasswordInput } from "sihrong-package-demo";

const message = ref("");

  // 非必要,string
const width = ref('100px');
```

```html
   <password-input v-model="message" width="width"></password-input>
```
<!-- </details> -->




## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Cheng-sih-rong](https://github.com/Cheng-sih-rong)
