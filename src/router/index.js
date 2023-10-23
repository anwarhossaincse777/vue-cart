import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/Login.vue";
import Sidebar from "@/components/Sidebar.vue";
import Products from "@/components/Products.vue";
import Product from "@/components/product.vue";
import Cart from "@/components/Cart.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login', components: {
        default: Login,
        LeftSideBar: Sidebar
      }
    },

    {
      path: '/products', components: {
        default: Products,
        LeftSideBar: Sidebar
      }
    },

    {
      path: '/products/:id', components: {
        default: Product,
        LeftSideBar: Sidebar
      },
      name: 'product',
    },

    {
      path: '/cart', components: {
        default: Cart,
        LeftSideBar: Sidebar
      }
    },
  ]
})

export default router
