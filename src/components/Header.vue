<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">用户管理系统</a>
            <ul class="navbar-nav">
                <li class="nav-item"><router-link class="nav-link" :to="{name:'customerLink'}">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link" :to="{name:'aboutLink'}">About</router-link></li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><router-link class="nav-link" :to="{name:'addUserLink'}">Add User</router-link></li>
            </ul>
        </nav>
        <div>
            <!-- <router-view></router-view> -->
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
