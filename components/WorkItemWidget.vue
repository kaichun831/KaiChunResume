<template>
  <v-card class="card-style">
    <v-row style="padding-left: 30px" align="center">
      <v-col>
        <v-row align="baseline">
          <!-- <v-icon
            x-large
            color="black"
            src="../assets/images/right-arrow.png"
            max-width="100"
            max-height="100"
            >mdi-donkey</v-icon
          > -->
          <p style="font-size: 50px">{{ title }}</p>
          <v-btn
            x-small
            style="margin-left: 10px; margin-bottom: 20px"
            @click="routerToPage(id, type, webUrl)"
            >MORE</v-btn
          >
          <div>
            <p>　# {{ type }}</p>
          </div>
        </v-row>
        <p class="description">{{ description }}</p>
      </v-col>
      <v-img
        style="
          margin: 10px 30px 10px 10px;
          border-radius: 12px;
          box-shadow: -1px 0 3px 3px rgba(0, 0, 0, 0.1);
        "
        :src="picPath"
        max-width="200"
        max-height="200"
        aspect-ratio="1"
      />
    </v-row>
  </v-card>
</template>

<script>
export default {
  /**
   * {id:String,title:String,description:String}
   */
  props: {
    id: String,
    title: String,
    type: String,
    picPath: String,
    description: String,
    webUrl: String,
  },
  data() {
    return {
      bgPicPath: this.picPath,
    };
  },
  methods: {
    routerToPage(id, type, webUrl) {
      if (type == "APP") {
        this.$router.push("/project/" + id);
      } else {
        window.open(webUrl);
      }
    },
  },
};
</script>
<style lang="scss" >
.card-style {
  margin-top: 20px;
  margin-bottom: 20px;
  background: v-bind("bgPicPath");
}
</style>
