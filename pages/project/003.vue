<template>
  <div style="padding: 10px">
    <card-widget-vue>
      <div style="display: flex; padding: 10px">
        <img :src="picPath" class="logo-img-style" />
        <div style="margin-top: 20px; margin-left: 20px">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
          <div class="more-container">
            <a :href="webUrl" class="link-style" target="_blank">前往連結</a>
          </div>
        </div>
      </div>
    </card-widget-vue>

    <div style="display: flex; flex-wrap: wrap; justify-content: center">
      <img
        :src="item"
        class="wrap-img-style"
        v-for="item in screenshot"
        :key="item"
      />
    </div>
  </div>
</template>

<script>
import CardWidgetVue from "../../components/CardWidget.vue";

//迷途狗Project
export default {
  components: { CardWidgetVue },
  data() {
    return {
      id: "003",
      type: "APP",
      title: "承穎派車系統",
      link: "./project/003",
      webUrl:
        "https://apps.apple.com/tw/app/%E6%89%BF%E7%A9%8E%E6%B4%BE%E8%BB%8A%E7%B3%BB%E7%B5%B1/id1622515145",
      picPath: "https://i.imgur.com/LF1zkEh.png",
      description:
        "提供貨運人員使用，在管理訂單配達等等能有效的提供即時狀態回報，包含照片上傳、客戶簽名、客戶約配、單據查詢等等。\n\n 2022已上架於IOS AppStore",
      screenshot: [
        "https://i.imgur.com/X5lXPNm.png",
        "https://i.imgur.com/Q0KvrL7.png",
        "https://i.imgur.com/AL05D2K.png",
        "https://i.imgur.com/6XzWeje.png",
        "https://i.imgur.com/nQMU1I6.png",
        "https://i.imgur.com/137wvLA.png",
        "https://i.imgur.com/ZyAtEti.png",
        "https://i.imgur.com/rwTf1KO.png",
      ],
    };
  },
};
</script>

<style lang='scss'>
.more-container {
  margin-top: 20px;
  padding-bottom: 20px;
  .link-style {
    text-decoration: none;
    font-weight: bold;
    background: rgb(35, 157, 206);
    border: 1px rgb(35, 157, 206) solid;
    color: white;
    padding: 5px;
    border-radius: 4px;
    font-size: 20px;

    &:hover {
      background: rgb(26, 117, 236);
      border: 1px rgb(26, 117, 236) solid;
      color: white;
    }
  }
}

.logo-img-style {
  max-height: 100px;
  max-width: 100px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 5px;
  padding: 20px;
}
.wrap-img-style {
  height: auto;
  margin: 10px;
  width: 16%;
}

@media screen and (max-width: 900px) {
  .wrap-img-style {
    width: 30%;
  }
}
@media screen and (max-width: 500px) {
  .wrap-img-style {
    width: 40%;
  }
}
</style>