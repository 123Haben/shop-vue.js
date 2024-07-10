<template>
  <TheShopayout>
    <template #default>
      <div class="row">
        <div class="col-12">
          <h1 class="mt-4">
            Neuer Artikel
            <button class="btn btn-lg bg-vue float-end" @click="createProduct()">Speichern</button>
          </h1>
          <div class="card mt-4">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://dummyimage.com/600x400/34495e/fff" class="card-img" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                  <div class="col-9">
                    <h5 class="card-title mb-4">{{ product.title }}</h5>
                  </div>
                  <div class="col-3">
                    <div class="d-grid">
                      <button class="btn bg-vue2">{{ product.price }} €</button>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    {{ product.description }}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheShopayout>
</template>

<script>
import TheShopayout from "@/layouts/TheShopLayout.vue";
export default {
  name: "CreateProductPage",
  components: {
    TheShopayout,
  },
  data() {
    return {
      product: {
        title: "Product " + Math.ceil(Math.random() * 10000),
        description: `„Ein Text ist ein thematisch und/oder
        funktional orientierter, kohärenter sprachlicher oder
        sprachlich-figürlicher Komplex, der mit einer bestimmten […]
        Kommunikationsabsicht […] geschaffen wurde, eine erkennbare k
        ommunikative Funktion […] erfüllt und eine inhaltlich und
        funktional abgeschlossene Einheit bildet.`,

        price: Math.ceil(Math.random() * 10000),
      },
    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch("storeProduct", this.product);
    },
  },
};
</script>

<style scoped>

</style>