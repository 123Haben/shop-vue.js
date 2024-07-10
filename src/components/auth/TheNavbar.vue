<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
      <router-link to="/shop" class="navbar-brand">Der Shop</router-link>
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
          <router-link to="/shop" class="nav-link">Startzeite</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/shop/create/product" class="nav-link">Neuer Artikel</router-link>
        </li>
      </ul>
      <button class="btn bg-vue me-3">
        <i class="fas fa-shopping-card"></i> Warenkorb ({{ cartTotal }} €)
      </button>
      <button class="btn bg-vue2" @click="signout()">
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </nav>
</template>

<script>
//import { mapGetters } from "vuex";

export default {
  name: "TheNavbar",
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    signout() {
      this.$store.dispatch("signout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

</style>