<template>
    <div id="app">
        <top></top>
        <router-view/>
        <foot></foot>
    </div>
</template>

<script>
  import top from "@/components/top/index";
  import foot from "@/components/foot/index";
  export default {
    name: "app",
    components: {
      top,
      foot,
    }
  }
</script>

<style lang="less">
    body{
        display: flex;
        flex-direction: column;
        font-size: 14px;
        margin:0;padding:0;
        height: auto;
        width: auto;
    }
</style>
