<script lang="ts" setup></script>

<template>
    <div>
        <form>
            <div class="mb-3 border-2 form border-top border-bottom border-end w-75 login-radius">
                <input type="email" class="form-control shadow-none border-bottom p-2" id="exampleInputEmail1" placeholder="Email">
                <input type="password" class="form-control shadow-none p-2" id="exampleInputPassword1" placeholder="Password">
            </div>
        </form>
    </div>
</template>

<style scoped>
*{
    transition: .5s;
}
.form{
    background-color: #ffffffa1;
}
.login-radius{
    border-top-right-radius: 25px 25px;
    border-bottom-right-radius: 25px 25px;
}
.form-control{
    background-color: transparent;
    padding: 0;
    border:none;
    width: auto;
}
input:focus{
    transition: .5s;
    color: white;
    background-color: transparent;
}
input::placeholder{
    color: gray;
}
input{
    font-size: small;
}
</style>
