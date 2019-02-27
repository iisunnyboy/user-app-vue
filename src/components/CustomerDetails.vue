<template>
    <div class="details container">
        
        <h1 class="page-heade">
            {{customer.name}}
            <span class="float-right">
                <router-link to="/" class="btn btn-info">返回</router-link>
                <router-link class="btn btn-primary" :to="'/edituser/' + customer.id">
                    <span>编辑</span>
                </router-link>
                <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk">{{customer.email}}</span>
            </li>
            <li class="list-group-item">{{customer.phone}}</li>
            <li class="list-group-item">{{customer.education}}</li>
            <li class="list-group-item">{{customer.graduation}}</li>
            <li class="list-group-item">{{customer.profession}}</li>
            <li class="list-group-item">{{customer.profile}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            customer:{}
        }
    },

    methods: {
        fetchCustomerInfo(id){
            // this.$http.get("http://localhost:3001/users/"+id) //vue-resource axios
            this.$http.get("/"+id) //axios
                .then(response => {
                    // this.customer = response.body   //vue-resource
                    this.customer = response.data   //axios
                })
        },

        deleteCustomer(id){
            // this.$http.delete("http://localhost:3001/users/"+id)  //vue-resource axios
            this.$http.delete("/"+id) //axios
                .then(response => {
                    this.$router.push({path: '/', query: {alert: this.customer.name + '用户删除成功！'}})
                })
        }
    },

    created(){
        let id = this.$route.params.id
        this.fetchCustomerInfo(id)
    }
}
</script>

<style scoped>

</style>
