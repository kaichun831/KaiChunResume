<template>
  <div class="div-container">
    <!-- <v-carousel class="div-imgWall" height="450" :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel> -->
    <v-row class="div-content" justify="center">
      <v-col class="div-text-area">
        <v-card style="height: 100%">
          <v-card-title> {{ title }} </v-card-title>
          <v-card-text>{{}}</v-card-text>
        </v-card>
      </v-col>
      <v-col class="div-img-area">
        <v-row>
          <v-img
            v-for="i in 9"
            :key="i"
            max-width="300"
            max-height="300"
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
    <v-img
      class="img-under"
      style="position: absolute"
      src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ></v-img>
    <div class="div-grey"></div>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
const exhale = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export default {
  data() {
    console.log(this.$route.params);
    return {
      checking: false,
      heartbeats: [],
      title: this.$route.params.name,

      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
.div-container {
  height: 100vh;
  position: relative;
  .img-under {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .div-content {
    position: absolute;
    width: 100%;
    bottom: 20%;
    z-index: 1;
  }
  .div-grey {
    height: 100%;
    opacity: 0.6;
    z-index: -1;
    background: #424242;
  }
}
</style>>
