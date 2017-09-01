<template>
  <div class="headTop">
    <span class="title_text" v-if="headTitle">{{headTitle}}</span>
    <span v-if="goBack" @click="$router.go(-1)">
      <i class="icon back"></i>
    </span>
    <slot name=""></slot>
  </div>
</template>

<script>
  export default({
    data () {
      return {

      }
    },
    props: ['headTitle', 'goBack'],
  })
</script>

<style lang="scss" scope>
  .headTop{
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    height: 1.2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #fff;
    text-align: center;
    line-height: 1.2rem;
    .title_text{
      font-weight: bold;
      font-size: 0.4rem;
      color: #333;
    }
    .back{
      display: inline-block;
      background:  url('../assets/images/input-back@2x.png') no-repeat;
      left: 0rem;
      top: 0rem;
      position: absolute;
      width: 40%;
      height: 100%;
      background-size: 0.2rem 0.4rem!important;
      background-position: .25rem center!important;
    }
  }
</style>
