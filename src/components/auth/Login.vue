<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="https://productimages.etrusted.com/products/prt-5298984f-9642-4a02-ab96-52b61a7cc342/2/original.jpg" class="img-fluid">
    </div>

    <div class="text-center">
      <h2>Jetzt Anmeldung</h2>
      <p>oder <a class="text-vue2" role="button" @click="changeComponent('UserRegister')">Erstellen Sie ein Konto.</a></p>
    </div>
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>E-Mail-Adresse</strong></label>
          <Field as="input" name="email" type="email" class="form-control" id="email" />
          <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Password</strong></label>
          <Field as="input" name="password" type="password" class="form-control" id="password" />
          <small class="text-danger" v-if="errors.password">{{ errors.password }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Einloggen</span>
              <span v-else class="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: 'Login',
  components: {
    Form,
    Field,
  },
  emits: ["changeComponent"],
  data() {
    const schema = yup.object().shape({
      email: yup
          .string()
          .required("E-Mail Adresse wird benötigt")
          .trim()
          .email("Das ist keine gültige E-Mail Adresse"),
      password: yup
          .string()
          .required("Ein Password wird benötigt")
          .min(6, "Das Password muss mindestens sechs Zeichen lang sein."),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
    errorDisplayText() {
      if (this.error) {
        if (this.error.includes("INVALID_PASSWORD")) {
          return "Das Password ist nicht gültig";
        } else if (this.error.includes("EMAIL_NOT_FOUND")) {
          return "E-Mail Adresse konnte nicht gefunden werden.";
        }
        return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es noch einmal.";
      }
      return "";
    }
  },
  methods: {
    async submitData(values) {
      this.isLoading = true;
      this.error = "";
      //console.log(values);
      this.$store.dispatch("signin",{
        email: values.email,
        password : values.password,
      }).then(() => {
        this.isLoading = false;
        console.log("sehr gut");
        //this.changeComponent("login");
        this.$router.push({path: "/shop"});
      })
          .catch((error) => {
            this.error = error.message;
            this.isLoading = false;
          })
    },
    changeComponent(componentName) {
      this.$emit("changeComponent", {componentName});
    },
  },
};
</script>

<style scoped>
</style>
