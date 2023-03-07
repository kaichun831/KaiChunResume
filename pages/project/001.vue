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
      id: "001",
      type: "APP",
      title: "迷途狗",
      link: "./project/001",
      webUrl:
        "https://play.google.com/store/apps/details?id=com.dylanwalkha.asuscomm.app.twudingmap&hl=zh-TW",
      picPath: "https://i.imgur.com/9hXYeXG.png",
      description:
        "為了方便家人，因此誕生了圖像記錄通訊錄，希望在這方面能夠幫到更多人。\n\n 2020已上架於Android PlayStore ",
      screenshot: [
        "https://i.imgur.com/qu59buZ.png",
        "https://i.imgur.com/otilftA.png",
        "https://i.imgur.com/H92MTVt.png",
        "https://i.imgur.com/RE5RytO.png",
        "https://i.imgur.com/XwSf5R2.png",
        "https://i.imgur.com/SwW9ham.png",
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