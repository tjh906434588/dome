<template>
  <div class="login">
    <div class="login_form">
      <van-uploader
        v-model="fileListBack" 
        :max-count="1"
        @oversize="onOversize"
        class="uploader"
        capture="camera"
        accept="image/*"
      />
      <input type="file" accept="video/*" capture="camcorder">
<input type="file" accept="video/*">
<input type="file" accept="video/mp4" capture="camcorder">
<input type="file" accept="video/mp4">
<input type="file" accept="audio/*" capture="microphone">
<input type="file" accept="audio/*"> 
<input type="file" accept="audio/mp3" capture="microphone">
<input type="file" accept="audio/mp3">
<input type="file" accept="image/*" capture="camera">
<input type="file" accept="image/*">
<input type="file" accept="image/jpeg" capture="camera">
<input type="file" accept="image/jpeg">
<input type="file" accept="image/jpeg,image/png" capture="camera">
<input type="file" accept="image/jpeg,image/png">
<input type="file" capture="camera">
<input type="file" capture="camcorder">
<input type="file" capture="microphone">
<input type="file" multiple />
    </div>
  </div>
</template>

<script>
import {
  uploader,
} from "vant";
import Api from "@/api/index";

export default {
  name: "Login",
  components: {
    [uploader.name]: uploader
  },
  data() {
    return {
      file: "",
      fileListBack: [],
      capture: ['camera'],
      http: new Api(),
      user: {
        account: "",
        password: "",
        productionLineId: "",
      },
      production: "",
      show: false,
      actions: [],
      remember: false,
      loading: false,
    };
  },
  created() {},
  methods: {
    beforeRead(){
      
    },
    onOversize(){
      console.log(1234)
    },
    getBack() {
      if (window.plus) {
        plus.runtime.quit();
      }
    },
    onSelect(item) {
      this.production = item.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.login_form {
  padding: 15px;
  box-sizing: border-box;
  .welcome {
    margin-top: 20px;
    font-size: 28px;
    font-weight: bold;
    color: #333333;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 50px;
    font-size: 21px;
    color: #333333;
    font-weight: bold;
  }
  .login_content {
    padding: 0 20px;
    box-sizing: border-box;
    // /deep/.user {
    //   margin-right: 16px;
    //   font-size: 16px;
    //   font-weight: 400;
    //   color: #999999;
    //   text-align: justify;
    //   &::after {
    //     content: "";
    //     display: inline-block;
    //     width: 100%;
    //     height: 0;
    //   }
    // }
    .label-flex {
      display: flex;
      font-size: 16px;
      font-weight: 400;
      color: #999999;
      height: 20px; //高度必须设置
      overflow: hidden;
      .label-justify {
        flex: 1;
        text-align: justify;
        text-align-last: justify;
        &::after {
          content: "";
          width: 100%;
          display: inline-block;
          height: 0;
        }
      }
    }
    /deep/.van-cell__value {
      border-bottom: 1px solid #9ea2ad;
      .van-field__body {
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        padding: 0 10px;
        box-sizing: border-box;
      }
      ::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #cdd0d7;
      }
    }
  }
  .van-cell {
    margin-bottom: 10px;
  }
  .btn_form {
    margin-top: 50px;
    margin-bottom: 15px;
    width: 100%;
    .van-button {
      width: 100%;
      background-color: #0096ff;
      border: 1px solid #0096ff;
      .van-button__text {
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
  .checkbox_form {
    display: flex;
    align-items: center;
    .password {
      margin-right: 10px;
      font-size: 16px;
      font-weight: 400;
      color: #333333;
    }
  }
}
</style>
