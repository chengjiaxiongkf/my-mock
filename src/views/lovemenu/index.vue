<template>
    <div class="love-menu">
        <div class="menu-item" v-for="(item,index) in menuData" :key="index" tabindex="index">
            <el-image :src="require('@/assets'+item.imgUrl)" style="height: 100px;width: 100px"
                      :preview-src-list="previewList"
                      lazy>
                <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                </div>
                <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                </div>
            </el-image>
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        menuData:[
          {
            name: '三丝炒肉',
            imgUrl: '/love-menu/三丝炒肉.jpg',
          },
          {
            name: '三粒',
            imgUrl: '/love-menu/三粒.jpg',
          },
          {
            name: '冬瓜肉汤',
            imgUrl: '/love-menu/冬瓜肉汤.jpg',
          },
          {
            name: '剁辣椒拌卤猪脚',
            imgUrl: '/love-menu/剁辣椒拌卤猪脚.jpg',
          },
          {
            name: '剁辣椒拌生菜',
            imgUrl: '/love-menu/剁辣椒拌生菜.jpg',
          },
          {
            name: '剁辣椒香肠蛋炒饭',
            imgUrl: '/love-menu/剁辣椒香肠蛋炒饭.jpg',
          },
          {
            name: '吃个果冻都是爱你的形状',
            imgUrl: '/love-menu/吃个果冻都是爱你的形状.jpg',
          },
          {
            name: '土豆丝炒肉',
            imgUrl: '/love-menu/土豆丝炒肉.jpg',
          },
          {
            name: '土豆丝炒香肠',
            imgUrl: '/love-menu/土豆丝炒香肠.jpg',
          },
          {
            name: '土豆排骨',
            imgUrl: '/love-menu/土豆排骨.jpg',
          },
          {
            name: '土豆火腿焖饭',
            imgUrl: '/love-menu/土豆火腿焖饭.jpg',
          },
          {
            name: '土豆红烧肉',
            imgUrl: '/love-menu/土豆红烧肉.jpg',
          },
          {
            name: '峨眉豆炒香肠',
            imgUrl: '/love-menu/峨眉豆炒香肠.jpg',
          },
          {
            name: '手撕鸡胸肉-水蒸蛋',
            imgUrl: '/love-menu/手撕鸡胸肉-水蒸蛋.jpg',
          },
          {
            name: '春笋蛋饼',
            imgUrl: '/love-menu/春笋蛋饼.jpg',
          },
          {
            name: '木耳炒蛋',
            imgUrl: '/love-menu/木耳炒蛋.jpg',
          },
          {
            name: '杏鲍菇炒肉',
            imgUrl: '/love-menu/杏鲍菇炒肉.jpg',
          },
          {
            name: '杏鲍菇炒香肠',
            imgUrl: '/love-menu/杏鲍菇炒香肠.jpg',
          },
          {
            name: '毛豆炒火腿',
            imgUrl: '/love-menu/毛豆炒火腿.jpg',
          },
          {
            name: '毛豆炒肉',
            imgUrl: '/love-menu/毛豆炒肉.jpg',
          },
          {
            name: '毛豆炒香肠',
            imgUrl: '/love-menu/毛豆炒香肠.jpg',
          },
          {
            name: '河粉炒香肠',
            imgUrl: '/love-menu/河粉炒香肠.jpg',
          },
          {
            name: '油豆腐炒香肠',
            imgUrl: '/love-menu/油豆腐炒香肠.jpg',
          },
          {
            name: '清炒土豆丝',
            imgUrl: '/love-menu/清炒土豆丝.jpg',
          },
          {
            name: '火腿蒜苔玉米粒鸡蛋',
            imgUrl: '/love-menu/火腿蒜苔玉米粒鸡蛋.jpg',
          },
          {
            name: '火腿蛋剁辣椒拌面',
            imgUrl: '/love-menu/火腿蛋剁辣椒拌面.jpg',
          },
          {
            name: '火腿蛋包饭',
            imgUrl: '/love-menu/火腿蛋包饭.jpg',
          },
          {
            name: '火腿蛋炒饭',
            imgUrl: '/love-menu/火腿蛋炒饭.jpg',
          },
          {
            name: '火腿鸡蛋白菜面',
            imgUrl: '/love-menu/火腿鸡蛋白菜面.jpg',
          },
          {
            name: '煮水饺',
            imgUrl: '/love-menu/煮水饺.jpg',
          },
          {
            name: '爱心火腿土豆饼',
            imgUrl: '/love-menu/1.jpg',
          },
          {
            name: '牛扒面',
            imgUrl: '/love-menu/牛扒面.jpg',
          },
          {
            name: '牛排玉米鸡蛋',
            imgUrl: '/love-menu/牛排玉米鸡蛋.jpg',
          },
          {
            name: '牛排糖心蛋',
            imgUrl: '/love-menu/牛排糖心蛋.jpg',
          },
          {
            name: '牛排韭菜香肠火腿糖心蛋',
            imgUrl: '/love-menu/牛排韭菜香肠火腿糖心蛋.jpg',
          },
          {
            name: '猪脚焖饭',
            imgUrl: '/love-menu/猪脚焖饭.jpg',
          },
          {
            name: '玉米排骨汤',
            imgUrl: '/love-menu/玉米排骨汤.jpg',
          },
          {
            name: '生菜干煎带鱼',
            imgUrl: '/love-menu/生菜干煎带鱼.jpg',
          },
          {
            name: '番茄炒蛋',
            imgUrl: '/love-menu/番茄炒蛋.jpg',
          },
          {
            name: '红烧茄子',
            imgUrl: '/love-menu/红烧茄子.jpg',
          },
          {
            name: '老干妈火腿炒蛋',
            imgUrl: '/love-menu/老干妈火腿炒蛋.jpg',
          },
          {
            name: '老干妈火腿蛋炒饭',
            imgUrl: '/love-menu/老干妈火腿蛋炒饭.jpg',
          },
          {
            name: '胡罗卜炒肉',
            imgUrl: '/love-menu/胡罗卜炒肉.jpg',
          },
          {
            name: '腐竹炒香肠',
            imgUrl: '/love-menu/腐竹炒香肠.jpg',
          },
          {
            name: '芹菜炒牛肉',
            imgUrl: '/love-menu/芹菜炒牛肉.jpg',
          },
          {
            name: '芹菜香干',
            imgUrl: '/love-menu/芹菜香干.jpg',
          },
          {
            name: '菜心',
            imgUrl: '/love-menu/菜心.jpg',
          },
          {
            name: '菠菜炒油渣',
            imgUrl: '/love-menu/菠菜炒油渣.jpg',
          },
          {
            name: '蒜苔炒肉',
            imgUrl: '/love-menu/蒜苔炒肉.jpg',
          },
          {
            name: '虾仁韭菜炒蛋',
            imgUrl: '/love-menu/虾仁韭菜炒蛋.jpg',
          },
          {
            name: '西兰花炒香肠',
            imgUrl: '/love-menu/西兰花炒香肠.jpg',
          },
          {
            name: '豆腐鱼片汤',
            imgUrl: '/love-menu/豆腐鱼片汤.jpg',
          },
          {
            name: '辣椒炒肉',
            imgUrl: '/love-menu/辣椒炒肉.jpg',
          },
          {
            name: '辣椒炒蛋',
            imgUrl: '/love-menu/辣椒炒蛋.jpg',
          },
          {
            name: '韭菜炒蛋',
            imgUrl: '/love-menu/韭菜炒蛋.jpg',
          },
          {
            name: '韭黄炒蛋',
            imgUrl: '/love-menu/韭黄炒蛋.jpg',
          },
          {
            name: '香肠蛋饼',
            imgUrl: '/love-menu/香肠蛋饼.jpg',
          },
          {
            name: '香菇炒肉',
            imgUrl: '/love-menu/香菇炒肉.jpg',
          },
          {
            name: '香菇炒鸡肉',
            imgUrl: '/love-menu/香菇炒鸡肉.jpg',
          },
          {
            name: '香菜煮牛肉',
            imgUrl: '/love-menu/香菜煮牛肉.jpg',
          },
          {
            name: '香菜爆炒牛肉',
            imgUrl: '/love-menu/香菜爆炒牛肉.jpg',
          }
        ],
        previewList:[]
      }
    },
    created(){
        this.initPreviewList()
    },
    methods:{
      initPreviewList(){
        this.previewList = this.menuData.map(obj=>require('@/assets'+obj.imgUrl));
      }
    }
  }
</script>

<style lang="less" scoped>
    .love-menu{
        margin: 1rem;
        background-color: #e27272;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 2rem;
    }
    .menu-item{
        margin: 1.5rem 0 0 0;
        flex: 0 0 24%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        span{

        }
    }
</style>
