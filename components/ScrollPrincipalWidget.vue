<template>
  <div class="principal-box">
    <div class="box-title-container">
      <p class="box-title">{{ title }}</p>
      <div class="box-hr" />
    </div>
    <div class="box-subtitle-container">
      <p class="p-subtitle">SINCE {{ startDateTime }} - {{ endDateTime }}</p>
      <p>{{ companyName }}</p>
    </div>
    <div class="box-content-container">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    startDateTime: String,
    endDateTime: String,
    companyName: String,
    content: String,
  },
};
</script>
<style lang="scss" >
.principal-box {
  margin: 15px;
  padding-bottom: 50px;
  .box-title-container {
    width: 100%;
    display: flex;
    align-items: center;
    .box-title {
      font-family: "OpenFenYuan";
      white-space: nowrap;
      display: block;
      font-size: 18px;
    }
    .box-hr {
      width: 100%;
      height: 2px;
      margin-left: 20px;
      background: rgb(92, 92, 92);
    }
  }

  .box-subtitle-container {
    display: flex;
    justify-content: space-between;
    .p-subtitle {
      font-size: 12px;
    }
  }
  .box-content-container {
    white-space: pre-wrap;
    p {
      font-size: 12px;
    }
  }
}
</style>
