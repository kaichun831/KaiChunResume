<template>
  <card-widget style="background: grey; margin-top: 10px; margin-bottom: 10px">
    <p class="p-title">{{ title }}</p>
    <p class="p-subtitle">SINCE {{ startDateTime }} - {{ endDateTime }}</p>
    <p class="p-subtitle">{{ companyName }}</p>
    <p class="p-content">{{ content }}</p>
  </card-widget>
</template>

<script>
import cardWidgetVue from "./CardWidget.vue";

export default {
  components: { cardWidgetVue },
  props: {
    title: String,
    startDateTime: String,
    endDateTime: String,
    companyName: String,
    content: String,
  },
};
</script>
<style lang="scss" scoped>
p {
  white-space: pre-wrap;
  font-size: 12px;
  color: rgb(255, 255, 255);
}
.box-hr {
  height: 10px;
  background: black;
}
.p-title {
  font-family: "OpenFenYuan";
  white-space: nowrap;
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: wheat;
}
.p-subtitle {
  font-size: 12px;
  color: rgb(190, 188, 184);
  white-space: nowrap;
}
.p-content {
  color: white;
}
</style>