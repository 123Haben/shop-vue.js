import { createStore } from "vuex";
import authModule from "@/store/modules/auth";
import shopModule from "@/store/modules/shop";
import cartModule from "@/store/modules/cart";

const store = createStore({
    modules: {
        auth: authModule,
        shop: shopModule,
        cart: cartModule,
        }

});

export default store;