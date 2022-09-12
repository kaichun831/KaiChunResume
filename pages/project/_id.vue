<template>
  <h1>{{ paramID }}</h1>
</template>

<script>
export default {
  data() {
    return {
      paramID: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>