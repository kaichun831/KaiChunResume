<template>
  <!-- <v-hover v-slot="{ hover }"> -->
  <v-card class="card-style" color="rgb(100, 100, 100)">
    <v-col style="margin: 5px">
      <p class="box-title">{{ title }}</p>
      <p class="p-subtitle">
        SINCE {{ startDateTime }} - {{ endDateTime }} {{ companyName }}
      </p>

      <p class="p-content">{{ content }}</p>
    </v-col>
  </v-card>
  <!-- </v-hover> -->
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
<style  lang="scss">
* {
  padding: 0;
  margin: 0;
}
p {
  white-space: pre-wrap;
  font-size: 12px;
  color: rgb(255, 255, 255);
}
.box-hr {
  height: 10px;
  background: black;
}
.box-title {
  font-family: "OpenFenYuan";
  white-space: nowrap;
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: wheat;
}

.p-subtitle {
  font-size: 12px;
  color: rgb(165, 157, 141);
  margin-top: -20px;
  white-space: nowrap;
}
.p-content {
  color: white;
}
.card-style {
  margin: 10px;
  //   :hover {
  //     border-color: rgb(100, 100, 100);
  //     background-color: rgb(100, 100, 100);
  //   }
}
</style>

