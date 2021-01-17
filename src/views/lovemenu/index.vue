<template>
    <div class="love-menu">
        <div v-for="(item,index) in menuData" :key="index" tabindex="index">
            <el-image :src="item.imgUrl"
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
            name: '蛋炒饭',
            imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          }
        ],
        previewList:[
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
        ]
      }
    }
  }
</script>

<style scoped>

</style>
