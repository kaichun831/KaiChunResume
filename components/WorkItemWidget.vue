<template>
  <div class="work-box">
    <img src="" class="work-box-left" />
    <div class="work-box-center">
      <div class="center-title"></div>
      <p class="center-content"></p>
    </div>
    <div class="work-box-right">
      <div class="img-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     title: String,
  //     startDateTime: String,
  //     endDateTime: String,
  //     companyName: String,
  //     content: String,
  //   },
};
</script>
<style lang="scss" >
.work-box {
  display: flex;
  height: 350px;
  width: 100%;
  .work-box-left {
    width: 50;
  }
  .work-box-center {
    width: 60%;
  }
  .work-box-right {
    width: 40%;
    text-align: center;
    .img-container {
      width: 400px;
      height: 300px;
      background: #7c7c7c;
      border-radius: 30px;
    }
  }
}
</style>
