<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="https://productimages.etrusted.com/products/prt-5298984f-9642-4a02-ab96-52b61a7cc342/2/original.jpg" class="img-fluid">
    </div>

    <div class="text-center">
      <h2>Jetzt Registrirungen</h2>
      <p>oder <a class="text-vue2" role="button" @click="changeComponent('Login')">melden Sie sich mit Ihrem Konto an</a></p>
    </div>
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplaytext }}
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
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="confirmPassword"><strong>Password wiederholen</strong></label>
          <Field as="input" name="confirmPassword" class="form-control" id="confirmPassword" />
          <small class="text-danger" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</small>
        </div>
      </div>
      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-vue">
              <span v-if="!isLoading">Registrieren</span>
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
//import { FIREBASE_API_KEY } from "@/config/firebase";

export default {
  name: 'UserRegister',
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
          .email("Das ist nicht gültige E-Mail Adresse"),
      password: yup
          .string()
          .required("Ein Password wird benötigt")
          .min(6, "Das Password muss mindestens sechs Zeichen sein."),
      confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwörter stimmen nicht überein."),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
    errorDisplaytext() {
      if (this.error) {
        if (this.error.includes("EMAIL_EXISTS")) {
          return "Die Email Adresse existiert bereits"
        }
        return "Es ist ein unbekannter fehler ausgetreten. bitte versuchen Sie es noch ein mal."
      }
      return "";
    }
  },
  methods: {
    submitData(values) {
      this.isLoading = true;
      this.error = "";
      //console.log(values);
this.$store.dispatch("signup",{
  email: values.email,
  password : values.password,
}).then(() => {
  this.isLoading = false;
  this.changeComponent("login");
})
.catch((error) => {
  this.error = error.message;
  this.isLoading = false;
})

    },
    changeComponent(componentName) {
      this.$emit("changeComponent", { componentName });
    },
  },
};
</script>

<style scoped>
</style>
