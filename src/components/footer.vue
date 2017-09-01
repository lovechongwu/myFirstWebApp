<template>
  <section class="foot">
    <ul>
      <li class="active">
        <router-link to="/">
          <i class="icon home"></i>
          <span>工作</span>
        </router-link>
      </li>
      <li>
        <router-link to="/message">
          <i class="icon message"></i>
          <span>消息</span>
        </router-link>
      </li>
      <li>
        <router-link to="/search">
          <i class="icon search"></i>
          <span>搜索</span>
        </router-link>
      </li>
      <li>
        <router-link to="/my">
          <i class="icon me"></i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="scss" scope>
  .foot{
    width: 100%;
    height: 1.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    ul{
      border-top: 1px solid #f1f1f1;
      width: 100%;
      height: 1.2rem;
      li{
        width: 25%;
        float: left;
        text-align: center;
        color: #999999;
        height: inherit;
        font-size: .325rem;
        a{
          display: inline-block;
          width: 100%;
          height: 1.2rem;
          text-decoration: none;
          position: relative;
          .icon{
            width: 100%;
            height: 0.8rem;
          }
          .home{
            background: url("../assets/images/footer/work1.png") center center no-repeat;
            background-size: .6rem .6rem;
          }
          .message{
            background: url("../assets/images/footer/message1.png") center center no-repeat;
            background-size: .6rem .6rem;
          }
          .search{
            background: url("../assets/images/footer/search1.png") center center no-repeat;
            background-size: .7rem .7rem;
          }
          .me{
            background: url("../assets/images/footer/my1.png") center center no-repeat;
            background-size: .6rem .6rem;
          }
          i{
            position: absolute;
            left: 0;
          }
          span{
            padding-top: .7rem;
            line-height: .4rem;
            height: .4rem;
            font-size: 0.3rem;
            display: inline-block;
            color: #bfbfbf;
          }
        }
      }
      .router-link-exact-active .home{
        background: url("../assets/images/footer/work2.png") center center no-repeat;
        background-size: .6rem .6rem;
      }
      .router-link-exact-active .message{
        background: url("../assets/images/footer/message2.png") center center no-repeat;
        background-size: .6rem .6rem;
      }
      .router-link-exact-active .search{
        background: url("../assets/images/footer/search2.png") center center no-repeat;
        background-size: .7rem .7rem;
      }
      .router-link-exact-active .me{
        background: url("../assets/images/footer/my2.png") center center no-repeat;
        background-size: .6rem .6rem;
      }
      .router-link-exact-active span{
        color: #1296db;
      }
    }
  }
</style>
