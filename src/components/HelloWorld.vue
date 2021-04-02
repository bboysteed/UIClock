<template>


  <v-container>
    <v-row justify="center" style="margin-bottom: 15px">
      <v-col md="4">
        <v-img
            src="../assets/beihang.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col md="4">
        <v-text-field
            v-model="account"
            prepend-inner-icon="mdi-account-box-outline"
            label="学号/工号"
            autofocus
            outlined
            clearable
            class="font-weight-bold"
            :rules="[rules.counter,rules.required]"
            counter
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col md="4">
        <v-text-field
            v-model="pwd"
            prepend-inner-icon="mdi-lock"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="密码"
            outlined
            class="font-weight-bold"
            clearable
            @click:append="show=!show"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col md="4">
        <v-btn
            :loading="loading"
            :disabled="loading"
            height="50"
            block
            color="primary"
            rounded
            elevation="4"
            @click="login"
        >
          登录
          <v-icon>
            mdi-check-bold
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        absolute
        :color="snackerbarcolor"
        top
    >
      {{ snackbarMsg }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="orange"
            test
            v-bind="attrs"
            @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
// import router from "@/router";

export default {
  name: 'HelloWorld',
  data() {
    return {
      account: '',
      pwd: '',
      show: false,
      loading: false,
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 10 || 'Max 10 characters',
        // email: value => {
        //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //   return pattern.test(value) || 'Invalid e-mail.'
        // },
      },
      snackbar:false,
      snackbarMsg:'',
      snackerbarcolor:'success',

    }
  },
  methods: {
    login() {
      this.loading = true
      console.log("start axios...", this.account, this.pwd)
      this.$axios
          .get('/SpringMVC_war/login', {
            params: {
              username: this.account,
              password: this.pwd,
            }
          })
          .then((res) => {
            console.log(res.data)
            let status = res.data.loginStatus
            if (status === "true") {
              this.snackbarMsg="登录成功"
              this.snackerbarcolor='success'
              this.snackbar = true

              this.$router.push('/personPage')
            } else {
              this.snackbarMsg="帐号或密码错误"
              this.snackerbarcolor='error'
              this.snackbar = true
            }

          })
          .catch((err) => {
            console.log(err)
          })
      this.loading = false

      },
    test(){
      this.snackbarMsg="帐号或密码错误"
      this.snackbar = true

    }
  }

  // mounted() {
  //   console.log("hellowprld")
  // }


}
</script>
