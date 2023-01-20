<template>
  <v-card :style="cardStyle">
    <v-row :style="rowStyle">
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
            @click="routerToPage()"
            >MORE</v-btn
          >
          <v-chip
            :color="chipStyle.app"
            :style="{ marginLeft: 10 + 'px', color: 'white' }"
            v-if="type === 'APP'"
            >{{ type }}</v-chip
          >
          <v-chip
            :color="chipStyle.web"
            :style="{ marginLeft: 10 + 'px', color: 'white' }"
            v-else
            >{{ type }}</v-chip
          >
        </v-row>
        <p class="description">{{ description }}</p>
      </v-col>
      <v-img
        class="icon-type"
        :src="picPath"
        @click="routerToPage()"
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
    screenShot: Array,
  },
  data() {
    console.log(this.picPath);
    return {
      cardStyle: {
        marginTop: 20 + "px",
        marginBottom: 20 + "px",
      },
      rowStyle: {
        paddingLeft: 30 + "px",
        align: "center",
      },
      chipStyle: {
        app: "#85D039",
        web: "#0055A7",
      },
    };
  },
  methods: {
    routerToPage() {
      if (this.type == "APP") {
        this.$router.push({
          path: "/project/" + this.title,
          query: {
            id: this.id,
            title: this.title,
            type: this.type,
            picPath: this.picPath,
            description: this.description,
            webUrl: this.webUrl,
            screen: this.screenShot,
          },
        });
      } else {
        window.open(this.webUrl);
      }
    },
  },
};
</script>
<style lang="scss">
.icon-type {
  margin: 10px 30px 10px 10px;
  border-radius: 12px;
  box-shadow: -1px 0 3px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
