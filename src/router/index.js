import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Admin from '@/pages/Admin';
import Home from '@/pages/Home';
import Classify from '@/pages/Classify';
import Cart from '@/pages/Cart';
import Mine from '@/pages/Mine';
import Login from '@/pages/Login';
import Error from '@/pages/Error';


Vue.use(Router)

const router =  new Router({
  routes: [

/*
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  */

    {
      path: '/',
      redirect: '/admin'
    },
    {
      path: '/admin',
      // '/admin' 可以加 name ,加了会报警告，因为 访问 '/admin' 是 还需要继续往下匹配，所以不用加。当你 this.$router.push({name: 'Admin'})时肯定，也要显示出 Home;
      //想去 Home 不如直接 写
      // name: 'Admin',  this.$router.push({name: 'Home'}) ，多所以这边的 name多余。
      component: Admin,
      children: [
        {path: '/', component: Home},
        {path: '/home', component: Home},
        {path: '/classify', component: Classify},
        {path: '/cart', component: Cart},
        {
          path: '/mine',
          component: Mine,
          meta: {
            isRequired: '1'
          }
        },
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    //处理错误路由，未定义路由
    {path: '*', component: Error},

  ]
});
//全局拦截 路由守卫
router.beforeEach( (to, from, next )=>{
  // console.log(to, from, next);
  //全局实现  只拦 mine

  // console.log(to);  //meta: {x: "xxx"}
  // 判断是否拦截这个路径、接口
  if(to.meta.isRequired){

    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'));

    if( isLogin || to.path === '/login'){ //如果已经登录 或者 直接去登录页
      next();  //放行
    }else{  //未登录
      // router.push({path: '/login', params: {to: to}});  // 不用用this了
      router.push({name: 'Login', query: {path: to.path}});  // 不用用this了
    }


  }else{
    next(); //不是要拦截的 '/mine'接口  放行
  }

} );



export default router;
