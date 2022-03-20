<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="app__shell">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "AppShell"
}
</script>

<style scoped>
.app__shell{
  width: 1280px;
  height: 90vh;
  border-radius: 40px;
  /*background-color: var(--color_secondary);*/
  background-color: white;
  -webkit-box-shadow: 10px 21px 80px -27px rgba(0,0,0,0.32);
  -moz-box-shadow: 10px 21px 80px -27px rgba(0,0,0,0.32);
  box-shadow: 10px 21px 80px -27px rgba(0,0,0,0.32);
  position: relative;
  /*border: 1px solid var(--color_primary-content);*/
  margin-left: 20px;
  margin-right: 20px;
}

.d-flex{
  min-height: 100vh;
}

@media screen and (max-width: 768px) {
  .app__shell {
    height: 100vh;
    align-items: normal;
    margin: 10px;
  }

  .d-flex{
    min-height: 0;
  }
}
</style>