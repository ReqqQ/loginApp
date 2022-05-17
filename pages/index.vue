<template>
    <div class="container d-flex vh-100 align-items-center justify-content-center">
        <div class="login d-flex login-radius-top-image login-radius-bottom-image flex-column border position-relative">
                <div class="login-radius-top-image" style="background-image: url('./assets/images/top-background.png');background-size: cover;height: 50%"/>
                <LoginText/>
                <FormLogin />
            <div class="login-radius-bottom-image" style="background-image: url('./assets/images/bottom-background.png');background-size: cover;height: 40%"/>
        </div>
    </div>
</template>
<style scoped>
.login-radius-top-image{
    border-top-right-radius: 3em;
    border-top-left-radius: 3em;
}
.login-radius-bottom-image{
    border-bottom-right-radius: 3em;
    border-bottom-left-radius: 3em;
}
.login{
    width: 300px;
    height: 500px;
    background-color: #639947d9;
    border-color: transparent!important;
}

</style>
<script>
import LoginText from "../components/text/loginText";
import FormLogin from "../components/form/formLogin";
export default {
    components: {FormLogin, LoginText}
}
</script>