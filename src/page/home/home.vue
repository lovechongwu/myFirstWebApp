<template>
  <article class="main">
    <headTop headTitle="南京从容信息科技有限公司"></headTop>
    <section>
      <div class="banner">

      </div>
      <div class="task">

      </div>
    </section>
    <foot></foot>
  </article>
</template>

<script>
  import headTop from '../../components/headTop'
  import foot from '../../components/footer'
  export default({
    data () {
      return {

      }
    },
    components:{
      headTop,
      foot
    }
  })
</script>

<style>
  .banner{
    width: 100%;
    height: 4rem;
    background: #ccc;
  }
</style>
