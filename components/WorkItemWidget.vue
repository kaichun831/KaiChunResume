<template>
  <div class="work-box">
    <div class="work-box-left">
      <div class="content">
        <img src="../assets/images/right-arrow.png" class="title-icon" />
        <p class="title-text">{{ title }}</p>
      </div>
      <p class="description">{{ description }}</p>
      <div class="div-more">
        <p>MORE</p>
      </div>
    </div>
    <div class="work-box-right">
      <div class="img-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>
<style lang="scss" >
.work-box {
  display: flex;
  height: 350px;
  width: 100%;

  .work-box-left {
    width: 80%;
    padding-left: 10%;
    padding-top: 30px;
    position: relative;
    .content {
      display: flex;
      align-items: center;
      .title-icon {
        width: 15px;
        height: 15px;
        rotate: -45deg;
      }
      .title-text {
        padding-left: 5px;
        font-size: 30px;
      }
    }
    .description {
      font-size: 20px;
      padding-top: 15px;
    }
    .div-more {
      width: 120px;
      text-align: center;
      background: #7c7c7c;
      position: absolute;
      right: 50px;
      bottom: 50px;
      p {
        font-size: 25px;
        font-family: "Times New Roman", Times, serif;
      }
    }
  }
  .work-box-right {
    text-align: center;
    padding: 20px;
    .img-container {
      width: 600px;
      height: 300px;
      background: #7c7c7c;
      //border-radius: 10px;
    }
  }
}
</style>
