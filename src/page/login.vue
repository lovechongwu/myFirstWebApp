<template>
  <div class="loginDiv">
    <div class="logo"></div>
    <form class="loginContent">
      <div class="mb20">
        <input type="text" placeholder="请输入用户名"/>
      </div>
      <div class="mb20">
        <input type="text" placeholder="请输入密码"/>
      </div>
      <div>
        <button>登&emsp;录</button>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<style lang="scss" scope>
  .loginDiv{
    width: 100%;
    height: 100%;
    padding: 0 20px;
    overflow: hidden;
    .logo{
      width: 2rem;
      height: 2rem;
      margin: 1.5rem auto 1rem;
      background: #ccc;
      -webkit-border-radius: 2rem;
      -moz-border-radius: 2rem;
      border-radius: 2rem;
    }
    .mb20{
      margin-bottom: 20px;
    }
    .loginContent input{
      width: 100%;
      height: 1rem;
      border-bottom: 1px solid #ff6528;
      padding-left: 0.125rem;
    }
    .loginContent button{
      width: 100%;
      height: 1rem;
      background: #ff6528;
      color: #fff;
      -webkit-border-radius: 0.125rem;
      -moz-border-radius: .125rem;
      border-radius: .125rem;
      margin-top: 1rem;
    }
  }
</style>
