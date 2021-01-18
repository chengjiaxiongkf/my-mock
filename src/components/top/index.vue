<template>
    <div class="top-body">
        <div class="top-log">
            <img src="@/assets/log.png"/>
            <label><b>WEB</b></label>
        </div>
        <div class="nav">
            <span v-for="(item,index) in navs" :key="index" tabIndex="index">
                <router-link :to="{name:'lovemenu'}">
                    <img :src="item.imgSrc" alt="图片加载失败"/>
                    <label>{{item.name}}</label>
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {
        navs: [{
          name: 'Kubernates',
          url: '',
          imgSrc: require('@/assets/menu-icon/k8s.png'),
        }, {
          name: 'Docker',
          url: '',
          imgSrc: require('@/assets/menu-icon/docker.png'),
        }, {
          name: 'Java',
          url: '',
          imgSrc: require('@/assets/menu-icon/java.png'),
        }, {
          name: 'Redis',
          url: '',
          imgSrc: require('@/assets/menu-icon/redis.png'),
        }, {
          name: 'Kafka',
          url: '',
          imgSrc: require('@/assets/menu-icon/kafka.png'),
        }, {
          name: 'Mysql',
          url: '',
          imgSrc: require('@/assets/menu-icon/mysql.png'),
        }, {
          name: 'DeveloperTools',
          url: '',
          imgSrc: require('@/assets/menu-icon/devTool.png'),
        }, {
          name: 'Love menu',
          url: '/lovemenu',
          imgSrc: require('@/assets/menu-icon/loveMenu.png'),
        }
        ]
      }
    },
    method: {}
  }
</script>

<style lang="less" scoped>
    .top-body {
        border-bottom: gainsboro 1px solid;
        display: flex;
        align-items: center;
        height: 6.2rem;
        width: 100%;

        .top-log {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-content: center;
            font-size: 16px;
            color: #d4237a;
            margin: 0 0 0 2rem;
            img{
                height: 64px;
                width: 64px;
            }
            label {
                display: flex;
                justify-content: center;
            }
        }

        .nav {
            display: flex;
            align-items: flex-end;
            align-content: space-between;
            justify-content: space-evenly;
            height: 100%;
            width: 100%;

            span {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: flex-end;
                height: 100%;
                width: 100%;
                img{
                    height: 32px;
                    width: 32px;
                }
                img,label {
                    display: flex;
                }
            }

            span:hover {
                background-color: gainsboro;
            }
        }
    }
</style>
