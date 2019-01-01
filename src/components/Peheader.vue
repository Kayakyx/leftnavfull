<template>
    <div class="header">
      <span :class="['menuBtn',{ rotate: isShow }]" @click="changeIs" ><i class="fa fa-bars" aria-hidden="true"></i></span>
      <span class="title">{{title}}</span>
      <span class="address">青岛<i class="fa fa-angle-down" aria-hidden="true"></i></span>
      <span class="user" @click="goMine"><i class="fa fa-user-o" aria-hidden="true"></i></span>
    </div>
</template>

<script>
    export default {
        name: "Peheader",
      /*
        data(){
          return{
            watchIsShow: this.isShow //方法二：利用 watch监听  props  需要配合data里的 watchIsShow 使用
          }
        },
      */

        // props: ['isShow'],

      props: {
        isShow: {
          type: Boolean,
          required: true, //必须传吗
        },
        title: {
          type: String,
          required: false, //必须传吗
          default: '首页'
        },



      },


      //直接修改props的值，会报红色警告  ，所以我们要通过 新建变量来转一下（新建变量current），就可以解决了。经过测试这样也会有问题，
      //因为props 里的值变化时 data里面的数据不能 及时的跟着变化， 所以可以改用  computed计算属性和watch 监听属性来解决，当props变化的时候
      //立马改变 currentIsShow  的值。

        //方法一: 利用计算属性监听
       /* computed: {
          currentIsShow: {
            get: function () {   //实时获取props的值
              return this.isShow;
            },

            // set: function (value) {  //不用用set
            //     console.log(value);
            // }

          }
        },*/

       //方法二：利用 watch监听  props  需要配合data里的 watchIsShow 使用
     /*
      watch: {
        isShow: function (value,oldValue) {
          // console.log(value,oldValue);
          this.watchIsShow = value;
        }
      },
      */
      //方法三： 最原始有效， 直接使用  this.$emit('update:isShow', !this.isShow);  因为！this.isShow 并没有在子组件里改变 isShow的是


        methods : {
          //点击事件
          changeIs(){
/*
            //直接修改props的值，会报红色警告  ，所以我们要通过 新建变量来转一下（新建变量current），就可以解决了。经过测试这样也会有问题，
            //因为props 里的值变化时 data里面的数据不能 及时的跟着变化， 所以可以改用  computed计算属性和watch 监听属性来解决，当props变化的时候
            //立马改变 currentIsShow  的值。

            //bug 代码：
            // console.log(this.isShow);
            //显示遮罩层
            this.isShow = !this.isShow;
            // console.log(this.isShow);
            //把修改后的数据传出去
            this.$emit('update:isShow', this.isShow);

     */
            //方法一：
            //把修改后的数据传出去   取反
            // this.$emit('update:isShow', !this.currentIsShow);

            //方法二： 代码
            // this.$emit('update:isShow', !this.watchIsShow);
            //方法三： 直接有效
            this.$emit('update:isShow', !this.isShow);  //经过测试发现 其实不有computed 和 watch 也行 ，兜了一大圈，不过 更深刻的理解了 computed 和 watch了。



          },

          goMine(){

            //跳转到mine ,修改 title 值
            this.$emit('update:title', '我的' );
            this.$router.push('/mine');

          }


        }

    }
</script>

<style scoped>

  .header{
    line-height: 1rem;
    width: 100%;
    height: 1rem;
    background-color: #282828;
    position: fixed;
    left: 0;
    top: 0;
    color: #999;
    overflow: hidden;
  }

  .rotate{
    transform: rotateZ(-90deg);
    /*box-shadow: none;*/
    /*transition: transform .5s;*/
    transition: transform .3s;
  }

  .menuBtn{
    display: inline-block;
    width: 1rem;
    line-height: 1rem;
    font-weight: 100;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 1px -1px 1px #363636;
  }
  .title{
    display: inline-block;
    width: calc(100% - 3.33rem);
    line-height: 1rem;
    text-indent: .2rem;
  }
  .address{
    display: inline-block;
    width: 1rem;
    line-height: 1rem;

  }
  .user{
    display: inline-block;
    width: 1rem;
    line-height: 1rem;
    text-align: center;
  }

</style>
