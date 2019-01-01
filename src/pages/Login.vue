<template>
    <div class="login">
      <div class="head"><span class="back" @click="back"><i class="fa fa-angle-left" aria-hidden="true"></i></span><h6>Login自己的头部</h6></div>
      <button @click="loginYes">点击登录</button>

    </div>
</template>

<script>
    export default {
        name: "Login",
        //在 router-view 上传过来的 title
        props: ['title'],
        methods: {
          loginYes(){
            sessionStorage.setItem('isLogin',1);
            this.$router.push({path: '/mine'});
          },
          back(){
            this.$router.back();
          }
        },








      //下面是 leftnavmz项目 中遇到的问题
        /*
        //有bug 这里如果已经在登录页了 再点击 我的  这里就不会执行了， 所以title会乱掉（在登录页也会显示 ‘我的’）。
        //改用 局部路由拦截   的  j进入钩子
        */

/*
        //最终解决方案为 created 配合 watch监听 解决了。
        created(){
          this.$emit('update:title', '登录');
        },

        watch: {
          title: function (val, oldval) {
            console.log(val, oldval);
            this.$emit('update:title', '登录');
          }
        },
      */


        // mounted(){
        //   // console.log(this.title);
        // }
/*

      //进过一番测试发现这样还是不行  (；′⌒`)
      beforeRouteEnter(to, from, next){
        // console.log(this);  //注意所有的路由钩子 ，只有 beforeRouteEenter 内 this 是undefined
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        //不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
/!*
        // console.log(to,from , next);
        this.$emit('update:title', '登录'); //  这种写法会 失败。错误代码
        next();//放行
        *!/

        //经过测试这样还是失败了。
        next(vm => {
          // 通过 `vm` 访问组件实例
          // console.log(vm);
          let title = vm.title;

          // console.log(title);
            vm.$emit('update: title', '登录');
            console.log(vm.title);
        })


      }
*/




    }
</script>

<style scoped>
    .login{

      width: 100%;
      height: 100%;
      background-color: antiquewhite;
      text-align: center;
    }
    .login .head{
      height: 1rem;
      background-color: blueviolet;
      line-height: 1rem;
      display: flex;
    }

    .back{
      font-size: .64rem;
      width: 1rem;
      height: 100%;
    }

    .login h6 {
      font-size: .4rem;
      padding-right: 1rem;
      flex: 1;
    }

    .login button{
      margin-top: 1rem;
      font-size: .6rem;
    }

</style>
