<template>
  <div class="loginDiv">
    <headTop head-title="登录" goBack="true"></headTop>
    <form class="loginContent">
      <div style="background: #fff;padding: 0 0.2rem;">
        <input type="text" placeholder="请输入用户名"/>
        <input style="border: none;" type="password" placeholder="请输入密码"/>
      </div>
      <div style="margin: .4rem .2rem;">
        <button>登&emsp;录</button>
      </div>
      <div class="remember">
        <router-link to="/register">免费注册</router-link>
        <a class="pull-right">忘记密码？</a>
      </div>
      <div class="registerText">

      </div>
    </form>
  </div>
</template>

<script>
  import headTop from '../components/headTop'
  export default ({
    data () {
      return {
      }
    },
    methods: {

    },
    components: {
      headTop
    }
  })
</script>

<style lang="scss" scope>
  @import "../style/mixin.scss";
  .loginDiv{
    width: 100%;
    height: 100%;
    padding: 1.2rem 0;
    box-sizing: border-box;
    background: #f1f1f1;
    .loginContent{
      margin-top: 0.2rem;
    }
    .loginContent input[type=text],input[type=password]{
      width: 100%;
      height: 1rem;
      border-bottom: 1px solid #ccc;
      padding-left: 0.125rem;
    }
    .loginContent button{
      width: 100%;
      height: 1rem;
      color: #fff;
      -webkit-border-radius: 0.5rem;
      -moz-border-radius: .5rem;
      @inclued borderRadius(.5rem);
      background: -webkit-linear-gradient(left,#04b3fc,#0485fd) no-repeat;
      color: #fff;
      box-shadow: 0 0.08rem 0.16rem #90c7fa;
    }
    .remember{
      font-size: .3rem;
      margin: .2rem .3rem;
      input[type=checkbox]{
        width: .35rem;
        height: .35rem;
      }
    }
    .registerText{
      font-size: 0.3rem;
      text-align: center;
      text-decoration: none;
    }
    a{
      color: #04b3fc;
    }
  }
</style>
