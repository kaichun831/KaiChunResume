<template>
  <div class="theme-card-style">
    <div class="wrap">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.theme-card-style {
  width: 100%;
  background: white;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  .wrap {
    margin: 10px;
  }
}
</style>