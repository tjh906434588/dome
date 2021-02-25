<template>
  <div class="navigation">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  name: "Navigation",
  components: {
    [NavBar.name]: NavBar,
  },
  props: {
    leftText: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "登录",
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  created() {
    var _this = this;
    // 只有5+APP 才会执行这段代码
    document.addEventListener(
      "plusready",
      function () {
        plus.navigator.setStatusBarStyle("dark"); //状态栏文字颜色全局默认为黑色，如需单独设置复制进独立的vue页面中
        _this.statusBarHeight = Number.isFinite(
          plus.navigator.getStatusbarHeight()
        )
          ? plus.navigator.getStatusbarHeight()
          : 28; //状态栏高度,判断是否是数字，不是使用默认高度28
        _this.isImmersedStatusbar = plus.navigator.isImmersedStatusbar(); //是否为沉浸式
        _this.addStyleElement();
      },
      false
    );
  },
  methods: {
    onClickLeft() {
      this.$emit("getBack");
    },
    //存储手机状态栏高度;
    getStatusBarHeight() {
      if (this.isImmersedStatusbar) {
        this.$store.commit("setStatusBarHeight", this.statusBarHeight);
        return this.statusBarHeight;
      } else {
        let statusBarHeight = 0;
        this.$store.commit("setStatusBarHeight", statusBarHeight);
        return statusBarHeight;
      }
    },
    //添加样式
    addStyleElement() {
      let statusBarHeight = this.getStatusBarHeight();
      document.documentElement.style.setProperty('--statusBarHeight', statusBarHeight + 46 + "px")
      let head = document.head || document.getElementsByTagName("head")[0];
      let styleElement = document.createElement("style");
      styleElement.type = "text/css"
      let css = `.navigation{padding-top:${statusBarHeight}px}`;
      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
      } else {
        styleElement.appendChild(document.createTextNode(css));
      }
      head.appendChild(styleElement);
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  box-shadow: 0px 2px 4px 0px rgba(216, 216, 216, 0.5);
  /deep/.van-nav-bar__left {
    .van-icon {
      color: #666666;
    }
  }
  /deep/.van-nav-bar__title {
    font-size: 18px;
    font-weight: 500;
    color: #333333;
  }
}
</style>
