<template>
  <div class="sidemenu">

    <div class="d-flex" @click="openRoute('/', 0)">
      <font-awesome-icon
          class="icon fa-xl icon__piktura"
          :icon="`fa-solid fa-p`"
          :class="{'sidemenu__entry-active': active === 0}"
      />
      <div class="sidemenu__entry" >
        <p>piktura.hu</p>
      </div>
    </div>

    <div class="sidemenu__elem" v-for="(item, index) in entries" v-bind:key="`menu-${index}`">
      <div class="d-flex" :style="item.style" @click="openRoute(item.route, index + 1)">
        <font-awesome-icon
            class="icon fa-xl"
            :icon="`fa-solid ${item.icon}`"
            :class="{'sidemenu__entry-active': active === index + 1}"
        />
        <div class="sidemenu__entry" :style="item.entryStyle">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { menuEntries } from "@/components/App/menu-entries";
export default {
  name: "SideMenu",
  computed: {
    entries: function () {
      return menuEntries;
    },
  },
  data: function () {
    return {
      active: 0,
    }
  },
  methods:{
    openRoute(route, index){
      this.active = index;
      if(this.$router.currentRoute.path !== route){
        this.$router.push(route);
      }
    }
  }
}
</script>

<style scoped>

  .sidemenu{
    width: 60px;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
    height: 100%;
    background-color: var(--color_primary-focus);
    position: absolute;
    left: 0;
    padding-top: 30px;
    padding-left: 19px;
  }

  .sidemenu__elem{
    margin-bottom: 15px;
  }
  .sidemenu__entry{
    margin-left: 17px;
    margin-top: -10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 10px 30px 10px 20px;
    background-color: var(--color_primary-focus);
    color: var(--color_primary-content);
    height: 45px;
    transition: ease all 0.25s;
    opacity: 0;
    -webkit-box-shadow: 21px 13px 31px -18px rgba(0,0,0,0.84);
    -moz-box-shadow: 21px 13px 31px -18px rgba(0,0,0,0.84);
    box-shadow: 21px 13px 31px -18px rgba(0,0,0,0.84);
  }

  .sidemenu__entry-active{
    color: var(--color_secondary-focus) !important;
  }
  .sidemenu__entry p{
    white-space: nowrap;
  }

  .icon:hover + .sidemenu__entry{

    opacity: 1;
  }

  .icon__piktura{
    color: var(--color_secondary);
    margin-bottom: 60px;
    margin-left: 6px;
  }

  .icon:hover{
    transform: rotate(-45deg) scale(1.3);
    color: var(--color_primary-content)
  }

  @media screen and (max-width: 768px) {
    .sidemenu {
      display: none;
    }
  }
</style>