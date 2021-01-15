<template>
    <div class="top-body">
        <div>
            <img src="../../assets/log.png" width="64" height="64"/>
        </div>
        <div>
            <nav>
                <span v-for="item in navs" :key="item.name">{{item.name}}</span>
            </nav>
        </div>
    </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {
        navs: [{
          name: '尼玛'
        },{
          name: '尼玛'
        },{
          name: '尼玛'
        },{
          name: '尼玛'
        }]
      }
    }
  }
</script>

<style lang="less">
    .top-body {
        flex-direction:row;
        flex-wrap: nowrap;
        height: 6.2rem;
        width: 100%;
        background-color: black;
        /*margin: 0 87rem 0 0;*/
        nav {
            background-color: red;
            /*height: 100%;*/
            /*text-align: center;*/
            span{
            }
        }
        /*.log {*/
        /*    padding: 0.5rem 0.5rem 0.5rem 0.5rem;*/
        /*}*/
    }
</style>
