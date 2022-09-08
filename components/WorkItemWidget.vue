<template>
  <v-card class="card-style">
    <v-row style="padding-left: 30px" align="center">
      <v-col>
        <v-row align="baseline">
          <v-icon
            x-large
            color="black"
            src="../assets/images/right-arrow.png"
            max-width="100"
            max-height="100"
            >mdi-donkey</v-icon
          >
          <p style="font-size: 50px">{{ title }}</p>
          <v-btn x-small style="margin-left: 10px">MORE</v-btn>
        </v-row>
        <p class="description">{{ description }}</p>
      </v-col>
      <v-img
        style="margin-right: 20px"
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        max-width="400"
        max-height="150"
        aspect-ratio="1.7778"
      />
    </v-row>
  </v-card>
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
.card-style {
  margin-top: 20px;
  margin-bottom: 20px;
}
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
