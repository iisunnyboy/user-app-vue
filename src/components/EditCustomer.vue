<template>
    <div class="editUser container">
        <alert v-if="alert" :message="alert"></alert>
        <h1>编辑用户</h1>
        <form @submit="editUser">
            <div class="form-group">
                <label>name:</label>
                <input type="text" class="form-control" placeholder="name" v-model="customer.name">
            </div>
            <div class="form-group">
                <label>email:</label>
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
                <button type="submit">Save</button>
        </form>
    </div>
</template>

<script>
import Alert from "./Alert"
export default {
    data(){
        return{
            customer: {},
            alert: ""
        }
    },
    components: {
        alert: Alert
    },
    methods:{
        fetchCustomer(id){
            // this.$http.get("http://localhost:3001/users/" + id) //vue-resource axios
            this.$http.get("/" + id)  // axios
                .then(reponse => {
                    this.customer = reponse.data
                })
        },
        editUser(e){
            if(!this.customer.name || !this.customer.email || !this.customer.phone){
                console.log("请添加对应的信息！");
                this.alert ="请添加对应的信息！"    
            }else{
                const userEdit = {
                    name: this.customer.name,
                    email: this.customer.email,
                    phone: this.customer.phone,
                    education: this.customer.education,
                    graduation: this.customer.graduation,
                    profession: this.customer.profession,
                    profile: this.customer.profile
                }
                // this.$http.put("http://localhost:3001/users/" + this.$route.params.id, userEdit)
                // this.$http.put("http://localhost:3001/users/" + this.customer.id, userEdit)  //vue-resource axios
                this.$http.put("/" + this.customer.id, userEdit) //axios
                    .then(response => {
                        this.$router.push({path: '/', query: {alert: userEdit.name + "用户修改成功！"}})
                    })
            }
            e.preventDefault()
        }
    },
    created(){
        this.fetchCustomer(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>
