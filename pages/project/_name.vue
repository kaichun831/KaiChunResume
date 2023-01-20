<template>
  <div class="div-container">
    <v-col>
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
            <v-card-text>{{ description }}</v-card-text>
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
      picPath: this.$route.query.picPath,
      description: this.$route.query.description,
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
      .img-style {
        padding: 5px;
        margin: 10px 5px 10px 0px;
        border-radius: 4px;
        box-shadow: -1px 0 3px 3px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
