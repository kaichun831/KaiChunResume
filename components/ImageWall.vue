<template>
  <v-col>
    <v-row justify="center">
      <v-img
        v-for="item in 3"
        :key="item"
        :max-height="520"
        :max-width="520"
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      ></v-img>
    </v-row>
  </v-col>
</template>

<script>
export default {};
</script>

<style>
</style>