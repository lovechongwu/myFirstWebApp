<template>
  <div class="register">
    <headTop head-title="注册" goBack="true"></headTop>
    <form class="registerForm">
      <div class="registerContent">
        <div>
          <input type="text" placeholder="请输入用户名（4-20位字符）" v-model="userName"/>
        </div>
        <div>
          <input type="text" placeholder="请输入手机号" v-model="phoneNumber"/>
        </div>
        <div>
          <input type="text" placeholder="请输入验证码" style="width: 50%;"/>
          <button @click.prevent="isExistUser" class="codeBtn pull-right" :class="{right_phone_number:rightPhoneNumber}" :disabled="isDisabled" v-show="!computedTime">获取验证码</button>
          <button class="codeBtn" @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
        </div>
        <div style="border: none;">
          <input type="text" placeholder="设置密码（6-16位字符）"/>
        </div>
      </div>
      <div style="margin: .4rem .2rem;">
        <input type="checkbox" class="pull-left" v-model="isChecked"/>
        <span class="pull-left" style="font-size: .3rem;margin-top: -1px;">我已阅读并同意<span style="color:#04b3fc;">《用户协议》</span></span>
      </div>
      <div class="clear"></div>
      <div style="margin: .4rem .2rem;">
        <button class="registerBtn" :disabled="reagisterBtnDisabled" :class="[isChecked == true ? 'active' : '']">立即注册</button>
      </div>
    </form>
  </div>
</template>

<script>
  import headTop from '../components/headTop'
  export default({
    name: 'register',
    data () {
      return {
        userName:'',
        phoneNumber: '',
        computedTime: 0,
        isDisabled: true,
        reagisterBtnDisabled: true,
        isChecked:false,
      }
    },
    computed: {
    //判断手机号码
      rightPhoneNumber: function (){
        return /^1\d{10}$/gi.test(this.phoneNumber)
      }
    },
    methods: {
      isExistUser () {
          let that = this
          let phone = that.phoneNumber
        $.ajax({  //判断用户是否存在
          type: 'GET',
          url: 'api/register/existEmailPhone',
          dataType: 'json',
          data:{"subject":that.phoneNumber},
          success (d) {
            if(d.error && d.error.code < 300){
              alert('该用户已注册!')
              return
            }else{
              if(that.rightPhoneNumber) {
                that.computedTime = 60
                that.timer = setInterval(() => {
                  that.computedTime--
                  if (that.computedTime === 0) {
                    clearInterval(that.timer)
                  }
                }, 1000)
              }
              $.ajax({ //获取验证码
                type:'POST',
                url: 'api/register/msgCode?subject='+phone,
                contentType : 'application/json;charset=utf-8', //设置请求头信息
                dataType: 'json',
                success (d) {

                }
              })
            }
          }
        })
      },
    },
    watch:{
      'phoneNumber' (newVlaue){
        if( /^1\d{10}$/gi.test(newVlaue)){
          this.isDisabled = false
        }else{
          this.isDisabled = true
        }
      },
      'isChecked' (newValue){
        if(newValue){
          this.reagisterBtnDisabled = false
        }else{
          this.reagisterBtnDisabled = true
        }
      }
    },
    components:{
      headTop
    }
  })
</script>

<style lang="scss" scope>
  .register{
    width: 100%;
    background: #f1f1f1;
    height: 100%;
    box-sizing: border-box;
    padding-top: 1.2rem;
    .registerForm{
      margin-top: .2rem;
      .registerContent{
        padding: 0 .2rem;
        background: #fff;
        div{
          border-bottom: 1px solid #ccc;
          input[type=text]{
            width: 100%;
            height: 1rem;
            padding-left: .1rem;

          }
        }
      }
      .codeBtn{
        width: 2.5rem;
        border-radius: 2rem;
        height: .8rem;
        background: #fff;
        border: 1px solid #ccc;
        margin-top: .1rem;
      }
      .right_phone_number{
        background-color: #04b3fc;
        color: #fff;
      }
      input[type=checkbox]{
        width: .35rem;
        height: .35rem;
        margin-right: 10px;
      }
      .registerBtn{
        width: 100%;
        height: 1rem;
        background: #ccc;
        color: #fff;
        border-radius: .5rem;
      }
      .active{
        background: #04b3fc;
      }
    }
  }
</style>
