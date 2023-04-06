<template>
  <div class="page">
    <h4>Đăng nhập</h4>
    <SignInForm :login="login" @submit:login="submitLogIn" />
    <p>{{ message }}</p>
    <router-link to="/register">
      <i class="mt-2"></i> Chưa có tài khoản? Đăng ký
    </router-link>
    <!-- <button class="btn btn-sm btn-success" @click="goToRegister()">
      <i class="fas fa-user-tag"></i> Đăng ký
    </button> -->
  </div>
</template>
  
<script>
import UserService from "@/services/user.service";
import SignInForm from "@/components/SignInForm.vue";
import { useAccountStore } from "@/stores/AccountStore";

export default {
  components: {
    SignInForm,
  },
  data() {
    const userStore = useAccountStore();
    return {
      message: "",
      userStore,
      login: {}
    };
  },
  methods: {
    async submitLogIn(data) {
      // alert('Hiii');
      try {
        this.login = await UserService.login(data);
        this.userStore.user = this.login;
        this.userStore.isLogin = true;
        this.message = this.login;
        this.$router.push({ name: 'contactbook' });
      } catch (error) {
        console.log(error);
        this.message = "Sai email hoặc mật khẩu. Vui lòng thử lại.";
      }
    },
    // goToRegister() {
    //   this.$router.push({ name: "register" });
    // },
  },
};
</script>