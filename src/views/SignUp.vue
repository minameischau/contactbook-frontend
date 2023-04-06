<template>
    <div class="page">
        <h4>Đăng ký</h4>
        <SignUpForm :user="user" @submit:user="submitRegister" />
        <p>{{ message }}</p>
        <router-link to="/login">
            <i class="mt-2"></i>Đã có tài khoản? Đăng nhập
        </router-link>

        <!-- <button class="btn btn-sm btn-primary" @click="goToLogin()">
            <i class="fas fa-sign-in"></i> Đăng nhập
        </button> -->
    </div>
</template>
    
<script>
import UserService from "@/services/user.service";
import SignUpForm from "@/components/SignUpForm.vue";

export default {
    components: {
        SignUpForm,
    },
    data() {
        return {
            message: "",
            user: {},
        };
    },
    methods: {
        async submitRegister(data) {
            this.message = data;
            try {
                await UserService.register(data);
                this.message = "Đăng ký thành công.";
                this.$router.push({ name: 'login' });
            } catch (error) {
                console.log(error);
                // this.message = "Sai email hoặc mật khẩu. Vui lòng thử lại.";

            }
        },
    },
};
</script>