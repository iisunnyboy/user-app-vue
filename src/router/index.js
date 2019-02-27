import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import Customers from "../components/Customers.vue"
import AddUser from "../components/Add.vue"
import CustomerDetails from "../components/CustomerDetails.vue"
import EditCustomer from "../components/EditCustomer.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'customerLink',
      component: Customers,
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: About
    },
    {
      path: '/adduser',
      name: 'addUserLink',
      component: AddUser
    },
    {
      path: "/customer/:id",
      name: "customerDetailLink",
      component: CustomerDetails
    },
    {
      path: "/edituser/:id",
      name: "editUserLink",
      component: EditCustomer
    }
  ]
})
