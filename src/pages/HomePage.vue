<template>
  <TheTwoColumnsLayout
      :leftColumnClass="'col-md-8 bg-vue'"
      :rightColumnClass="'col-md-4'"
      :fullsize="true">
    <template #leftcol>
      <div class="mt-5 text-center">
        <div class="display-1 my-5">Der Shop</div>
          <div class="display-4 my-5">
            fdsdsddddvdsdcerrbidfbisdfekfe8zd
          </div>
        <div class="my-5 offset-4 col-4">
          <img src="https://cdn.pixabay.com/photo/2021/05/27/18/55/woman-6289052_1280.png" class="img-fluid">
      </div>
      </div>
    </template>
    <template #rightcol><transition enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__bounceOutRight"
    mode="out-in"><component :is="componentName" @change-component="changeComponent"></component></transition></template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout";
import UserRegister from "@/components/auth/UserRegister";
import Login from "@/components/auth/Login";
export default  {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    UserRegister,
    Login
  },
  data() {
    return {
      componentName: "UserRegister"
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    }
  }
};
</script>

<style scoped>

</style>