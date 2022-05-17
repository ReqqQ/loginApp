<script lang="ts" setup></script>

<template>
    <div>
        <form>
            <div class="mb-3  w-75 d-flex ">
                <div class="flex-column border-2 flex-grow-1 form border-top border-bottom border-end login-radius">
                    <input type="email" class="form-control shadow-none border-bottom p-2" id="exampleInputEmail1" placeholder="Email">
                    <input type="password" class="form-control shadow-none p-2" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="d-flex align-items-center login-button">
                    <input type="image" src="./assets/images/login-button.png" alt="Submit" width="35" height="35">
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.login-button{
    margin-left: -1em;
}
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
