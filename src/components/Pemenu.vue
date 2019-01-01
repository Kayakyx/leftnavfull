<template>
  <div class="menu">
    <ul>
<!--
      <li @click="go('/home')">home</li>
      <li @click="go('/classify')">classify</li>
      <li @click="go('/cart')">cart</li>
      <li @click="go('/mine')">mine</li>
  -->
      <!--改用数据循环形式-->

      <li v-for="item,index in navArr" @click="go(index)">{{item.name}}</li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "Pemenu",
        data(){
          return {
            navArr: [
              {name: '首页', path: '/home'},
              {name: '分类', path: '/classify'},
              {name: '购物车', path: '/cart'},
              {name: '我的', path: '/mine'}
            ]
          }
        },
        // props: ['isShow']
        props: ['isShow', 'title'],

        methods:{
          go(index){


            //修改值 传给父组件
            this.$emit('update:isShow', false);
            // console.log(this.isShow);
            //更改父组件的 title
            let name = this.navArr[index].name;
            this.$emit('update:title', name);



            //路由跳转
            let path = this.navArr[index].path;
            this.$router.push(path);


          }
        },

        mounted(){
          console.log(this.isShow);
        }

    }
</script>

<style scoped>
  .menu{
    display: block;
    position: fixed;
    top: 1rem;

    left: -5.3rem;

    width: 5.3rem;
    transition: all 0.3s;
    height: calc(100vh - 1rem);
    background: #282828;
    z-index: 2;
  }
  .menu ul li{
    display: block;
    line-height: 1rem;
    color: white;
    text-indent: .3rem;
  }
  .menu.current{
    left: 0;
  }
</style>
