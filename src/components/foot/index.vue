<template>
    <div class="foot-body">
        <img src="../../assets/head/head.png"/>
        <div class="infomation">
            <div v-for="(item,index) in infos" :key="index">
                <label>{{item.label}}</label>
                <span>{{item.info}}</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "foot",
    data() {
      return {
        infos: [{
          label: '联系站长:',
          info: '514471552@qq.com'
        }, {
          label: '更新时间:',
          info: '2021-01-15 23:30:23'
        }]
      }
    }
  }
</script>

<style lang="less" scoped>
    .foot-body {
        height: 5rem;
        width: 100%;
        color: white;
        background-color: #304455;
        display: flex;
        flex-flow: column;
        align-items: center;
        img{
            height: 32px;
            width: 48px;
        }
        .infomation{
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
