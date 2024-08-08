<script>
  import { onMount } from "svelte";
  import "./sdk/sdk.js"; // 直接导入 AMIS 的 JS 文件
  import "./sdk/sdk.css"; // 直接导入 AMIS 的 CSS 文件
  export let renderJson = {};
  let box; // 定义一个变量用于引用 DOM 元素

  // 由于 SDK 已经通过 import 加载，可以直接嵌入 AMIS 组件
  const loadAmis = () => {
    // @ts-ignore
    const amis = amisRequire("amis/embed"); // 引入 AMIS 的 embed 方法
    const amisJSON = renderJson;
    amis.embed(box, amisJSON); // 嵌入 AMIS 组件到 box 中
  };

  onMount(() => {
    loadAmis(); // 组件挂载后加载 AMIS
  });
</script>

<div bind:this={box} class="app-amis-wrapper"></div>
