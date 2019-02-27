<template>
    <div class="add container">
        <alert v-if="alert" :message="alert"></alert>
        <h1 class="page-header">添加用户</h1>
        <form  @submit="addUser">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                     <label >name:</label>
                     <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>

                <div class="form-group">
                     <label >email:</label>
                     <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>

                <div class="form-group">
                     <label >phone:</label>
                     <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                     <label >education:</label>
                     <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                     <label >graduation:</label>
                     <input type="text" class="form-control" placeholder="graduation" v-model="customer.graduation">
                </div>
                <div class="form-group">
                     <label >profession:</label>
                     <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                     <label >profile:</label>
                     <input type="text" class="form-control" placeholder="profile" v-model="customer.profile">
                </div>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import Alert from "./Alert"
export default {
    name: "addUser",
    data(){
        return{
            customer: {},
            alert:""
        }
    },
    components:{
        alert: Alert
    },
    methods:{
        addUser(e){
            // console.log(this.customer.email.trim())
            if(!this.customer.name || !this.customer.email || !this.customer.phone){
                // console.log("请添加对应的信息！");
                this.alert = "请添加对应的信息！"
            }else{
                const newCustomer = {
                    name: this.customer.name,
                    email: this.customer.email,
                    phone: this.customer.phone,
                    education: this.customer.education,
                    graduation: this.customer.graduation,
                    profession: this.customer.profession,
                    profile: this.customer.profile
                }

                // this.$http.post("http://localhost:3001/users", newCustomer)  //vue-resource axios

                // 
                // this.$http.post("/", newCustomer)  //axios   
                //     .then(function(reponse){
                //         // console.log(reponse)
                //         let info = newCustomer.name + "用户添加成功!"
                //         this.$router.push({path:"/",query: {alert: info}})
                //     }.bind(this))

                this.$http.post("/", newCustomer)  //axios
                    .then(reponse => {
                        // console.log(reponse)
                        let info = newCustomer.name + "用户添加成功!"
                        this.$router.push({path:"/",query: {alert: info}})
                    })
                // e.preventDefault()    
            }
            // console.log(e)
            e.preventDefault()
        }
    }

}
</script scoped>

<style>

</style>
