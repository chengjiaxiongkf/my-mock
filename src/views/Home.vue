<template>
    <div class="home">
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
<style lang="less">
    .home{
        height: 50rem;
        width: 100%;
        background-color: aqua;
    }
</style>
