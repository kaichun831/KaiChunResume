<template>
  <div class="div-container">
    <v-col>
      <v-icon large color="black" @click="back()">mdi-arrow-left</v-icon>
      <v-row>
        <v-container>
          <v-card>
            <v-card-title>
              <v-img
                class="icon-type"
                :src="picPath"
                max-width="100"
                max-height="100"
                aspect-ratio="1"
              ></v-img>
              <h1 :style="{ fontSize: 50 + 'px' }">{{ title }}</h1>
            </v-card-title>
            <v-col>
              <v-card-text>{{ description }}</v-card-text>
              <a
                style="margin-left: 15px"
                :href="webUrl"
                v-if="webUrl != ''"
                name="迷途狗PlayStore網址"
                target="_blank"
                >前往下載</a
              >
            </v-col>
          </v-card>
        </v-container>
      </v-row>
      <v-row class="scroll">
        <v-container>
          <ul class="img-row">
            <li v-for="(item, index) in screenshot" :key="index">
              <v-img
                class="img-style"
                :src="screenshot[index]"
                max-width="275"
              ></v-img>
            </li>
          </ul>
        </v-container>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    console.log(this.$route.query);
    return {
      heartbeats: [],
      title: this.$route.query.title,
      webUrl: this.$route.query.webUrl,
      picPath: this.$route.query.picPath,
      description: this.$route.query.description,
      screenshot: this.$route.query.screenshot,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
.div-container {
  margin: 10px;
  .icon-type {
    margin: 10px 30px 10px 10px;
    border-radius: 12px;
    box-shadow: -1px 0 3px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-left: 5px;
      margin-right: 5px;
      list-style-type: none;
      .img-style {
        // padding: -15px;
        margin: 10px 5px 10px 0px;
        border-radius: 4px;
        box-shadow: -1px 0 3px 3px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
