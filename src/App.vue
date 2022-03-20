<template>
  <div id="app">
    <AppShell>
      <SideMenu />
      <MobileMenu/>

      <div v-if="!mobileMenu">
        <div class="router-view">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>

      <div v-else>
      </div>


    </AppShell>

  </div>
</template>

<script>
  import AppShell from "@/components/App/AppShell";
  import SideMenu from "@/components/App/SideMenu";
  import MobileMenu from "@/components/App/MobileMenu";
  export default {
    name: 'App',
    components: {
      AppShell,
      SideMenu,
      MobileMenu,
    },
    computed: {
      mobileMenu: function () {
        return this.$store.getters.mobileMenu;
      },
    },
  }
</script>
<style>
.router-view{
  padding: 30px 100px;
}
</style>
