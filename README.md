# Svelte+Amis
这是一个Svelte+Amis结合的最小化demo，演示了Svelte如何调用Amis并传入JSON配置渲染页面。

This is a minimal demo combining Svelte and Amis, demonstrating how Svelte can invoke Amis and pass JSON configuration to render the page.
## 什么是Svelte(What's Svelte)

Svelte 是一个现代的前端框架，用于构建用户界面。与其他前端框架（如 React 和 Vue）不同，Svelte 通过在构建时将应用程序编译成高效的原生 JavaScript，而不是在运行时使用虚拟 DOM。这使得 Svelte 的应用程序在性能上更具优势，并且可以更快地加载和执行。

Svelte is a modern front-end framework for building user interfaces. Unlike other front-end frameworks like React and Vue, Svelte compiles applications into efficient native JavaScript at build time, rather than using a virtual DOM at runtime. This gives Svelte applications a performance advantage, allowing them to load and execute more quickly.

## 什么是Amis(What's Svelte)
AMIS 是由百度开发的一个前端框架，旨在帮助开发者快速构建中后台应用。它提供了一套灵活的组件和可视化配置的方法，使得创建复杂的用户界面变得更加简便和高效。

AMIS 允许通过 JSON 配置来描述 UI 组件，开发者无需手动编写 HTML 和 CSS，这大大提高了开发效率。

AMIS 提供了大量的组件，包括表单、表格、图表等，适用于各种业务场景。

AMIS is a front-end framework developed by Baidu, designed to help developers quickly build back-end applications. It provides a flexible set of components and a visual configuration method, making it easier and more efficient to create complex user interfaces.

AMIS allows developers to describe UI components using JSON configuration, eliminating the need to manually write HTML and CSS, which significantly improves development efficiency.

AMIS offers a wide range of components, including forms, tables, charts, and more, suitable for various business scenarios.
## 如何运行(How run)
Git拉取到本地后启动执行以下命令启动。需安装有node.js与pnpm,node.js版本不得低于18,因为演示demo采用vite打包。

After pulling the Git repository to your local machine, execute the following command to start it. Make sure you have Node.js and pnpm installed, with Node.js version 18 or higher, as this demo uses Vite for packaging.


```shell
pnpm install
pnpm run dev
```

## 实现方式(Implementation Method)
通过在 Svelte 组件中导入 AMIS 的 JavaScript 和 CSS 文件，利用 onMount 钩子，在组件挂载后将 AMIS 组件嵌入到指定的 DOM 元素中，最终实现了动态渲染 AMIS 组件的效果。

By importing AMIS's JavaScript and CSS files in the Svelte component and using the onMount hook, the AMIS components are embedded into a specified DOM element after the component mounts, achieving dynamic rendering of AMIS components.