<template>
  <v-card style="padding-top: 10px; padding-bottom: 10px">
    <v-col>
      <v-row>
        <p class="box-title">{{ title }}</p>
        <div class="box-hr" />
      </v-row>
      <v-row>
        <p class="p-subtitle">SINCE {{ startDateTime }} - {{ endDateTime }}</p>
        <p>{{ companyName }}</p>
      </v-row>
      <p>{{ content }}</p>
    </v-col>
  </v-card>
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
p {
  white-space: pre-wrap;
  font-size: 12px;
}
.box-title {
  font-family: "OpenFenYuan";
  white-space: nowrap;
  display: block;
  font-size: 18px;
}
.box-subtitle-container {
  display: flex;
  justify-content: space-between;
  .p-subtitle {
    font-size: 12px;
  }
}
</style>
