<template>
  <div>
    <div class="mobile-menu">
      <font-awesome-icon class="icon fa-xl" icon="fa-solid fa-p" @click="openRoute('/')"/>
      <div class="hamburger" @click="openMenu">
        <div class="hamburger-icon" :class="{open: mobileMenu}" >
          <span/>
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </div>

    <div v-if="open" class="mobile-menu__opened">
      heee
    </div>
  </div>

</template>

<script>

export default {
  name: "MobileMenu",
  computed: {
    mobileMenu: function () {
      return this.$store.getters.mobileMenu;
    },
  },
  data: function () {
    return {
      open: false
    }
  },
  methods:{
    openMenu(){
      this.open = !this.open;
      this.$store.commit('setMobileMenu', this.open);
    },
    openRoute(route){
      if(this.$router.currentRoute.path !== route){
        this.$router.push(route);
      }
      this.open = false;
      this.$store.commit('setMobileMenu', this.open);
    }
  }
}
</script>

<style scoped>

  .hamburger {
    position: absolute;
    right: 30px;
    top: 23px;
    z-index: 2;
  }

  .hamburger-icon {
    width: 25px;
    height: 5px;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;

  }


  .hamburger-icon span {
    background: var(--color_secondary);
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  .hamburger-icon span:nth-child(1) {
    top: 0px;
  }

  .hamburger-icon span:nth-child(2), .hamburger-icon span:nth-child(3) {
    top: 7px;
  }

  .hamburger-icon span:nth-child(4) {
    top: 14px;
  }

  .hamburger-icon.open span{
    background: var(--color_primary-content);
  }

  .hamburger-icon.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .hamburger-icon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .hamburger-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .hamburger-icon.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .mobile-menu{
    height: 60px;
    background-color: var(--color_primary-focus);
    display: none;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    padding-left: 30px;
    padding-top: 18px;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    .mobile-menu {
      display: block;
    }
  }
</style>