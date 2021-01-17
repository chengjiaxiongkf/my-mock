<template>
    <div class="home">
        <div class="line">小小分隔线</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div>************************************************************************************</div>
        <div class="line">小小分隔线</div>
    </div>
</template>

<script>
  import {login} from "@/api/login/index";
  export default {
    name: 'Home',
    data() {
      return {
        userName: '',
        password: '',
      }
    },
    components: {
    },
    methods: {
      loginCheck(){
        return true;
      },
      submitData() {
        if(!this.loginCheck()) return;
        console.log("submitData request")
        login({userName:this.userName,password:this.password})
      }
    }
  }
</script>
<style lang="less" scoped>
    .home{
        height: 40rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }
</style>
