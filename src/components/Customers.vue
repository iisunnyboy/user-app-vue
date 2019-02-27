<template>
    <div class="customers container">
        <alert v-if="alert" :message="alert"></alert>
        <h1 class="page-header">用户管理系统</h1>
        <!-- <div class="col-sm-12 col-md-12"> -->
        <input type="text" class="form-control" v-model="search" placeholder="search">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">phone</th>
                    <th scope="col">email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(customer,index) in searchCustomer(customers, search)" :key="index"> -->
                <!-- <tr v-for="(customer,index) in searchCustomer2()" :key="index"> -->
                <tr v-for="(customer,index) in searchCustomer" :key="index">    
                    <td>{{customer.name}}</td>
                    <td>{{customer.phone}}</td>
                    <td>{{customer.email}}</td>
                    <td>
                        <router-link class="btn btn-default" :to="'/customer/' + customer.id">详情</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- </div> -->
    </div>
</template>

<script>
import Alert from "./Alert"
export default {
    name:"customers",
    components:{
        alert: Alert
    },
    data(){
        return {
            customers: [],
            alert: "",
            search: ""
        }
    },
    computed: {
        searchCustomer: {
            get: function(){
                return this.customers.filter(customer => {
                    return customer.name.match(this.search)
                })
            },
            set: function(){
                
            }
        },
        // searchCustomer(){
        //     return this.customers.filter(customer => {
        //         return customer.name.match(this.search)
        //     })
        // }
    },
    methods:{
        fetchCustomer(){
            // this.$http.get("http://localhost:3001/users")  //vue-resource
            // this.$http.get("http://localhost:3001/users")  //axios
            this.$http.get("/")  //axios
                .then(response=>{
                    // this.customers = response.body  //vue-resource 
                    this.customers = response.data  //axios
                })
        },
        searchCustomer(customers, search){
            return customers.filter(customer => {
                return customer.name.match(search)
            })
        },
        searchCustomer2(){
            return this.customers.filter(customer => {
                return customer.name.match(this.search)
            })
        }
    },

    created(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }

        this.fetchCustomer()
    },

    updated(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }else{
            this.alert = ""
        }
        this.fetchCustomer()
    }
}
</script>

<style scoped>

</style>
