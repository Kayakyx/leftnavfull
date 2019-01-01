<template>
    <div class="admin">

      <!--附录： 一般自组件要修改附组件达到值时， 通过标签属性传数据时，要加上修饰符 .sync-->
      <!--头部组件-->
      <Peheader :is-show.sync="isShow" :title.sync="title"/>

      <!--遮罩组件-->
      <Modal v-show="isShow" :is-show.sync="isShow"/>

      <!--<img src="./assets/logo.png">-->
      <!--<router-view/>-->

      <!--直接在组件上添加 class 样式 会添加到这个组件的跟标签上 像这样 <div class="menu current"></div>-->
      <Pemenu :class="{ current: isShow }" :is-show.sync="isShow" :title.sync="title"/>


      <!--主体内容区域-->
      <div class="container">
        <!--路由占位标签 -->
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view :title.sync="title" />

      </div>

    </div>
</template>

<script>

    import Peheader from '../components/Peheader';
    import Modal from '../components/Modal';
    import Pemenu from "../components/Pemenu";

    export default {
        name: "Admin",
        components: { Peheader, Modal, Pemenu },
        data(){
          return{
            isShow: false,
            title: '首页'
          }
        },
      created(){
        if(this.$route.path === '/home') this.title = '首页';
        if(this.$route.path === '/classify') this.title = '分类';
        if(this.$route.path === '/cart') this.title = '购物车';
        if(this.$route.path === '/mine') this.title = '我的';
      }
    }
</script>

<style scoped>
  .admin{
    width: 100%;
    height: 100%;
  }

  .container{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
  }


</style>
