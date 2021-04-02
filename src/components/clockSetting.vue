<template>
  <v-app>
    <v-container class="text-center">
      <v-simple-table >
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-center">
              昵称
            </th>
            <th class="text-center">
              是否订阅WxPusher公众号和小程序
            </th>
            <th class="text-center">
              是否打卡
            </th>
            <th class="text-center">
              操作
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="person in persons"
              :key="person.name"
          >
            <td>{{ person.name }}</td>
            <td>
              <v-icon>{{ person.followed ? "mdi-check-bold" : "mdi-close-thick" }}</v-icon>
            </td>
            <td>
              <v-switch
                  style="display: inline-block;margin-bottom: 20px"
                  v-model="clockedChange"
                  :input-value="person.clocked"
                  color="orange darken-3"
                  hide-details
              >
              </v-switch>

            </td>
            <td>
              <v-btn
                  class="primary"
                  max-width="30px"
              >提交
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>

    <v-alert
        border="left"
        color="blue-grey"
        dark
        style="margin-top: 30px;font-size: 20px"


    >
      1.关注微信公众号<span style="font-weight: bold">wxpusher</span>，以便在打卡后告知打卡结果
    </v-alert>
    <v-alert
        border="left"
        color="blue-grey"
        dark
        style="margin-top: 30px;font-size: 20px"


    >
      2.微信打开下面链接关注打卡小程序
      <a href="//wxpusher.zjiecode.com/wxuser/?type=2&id=1213#/follow" style="font-size: 20px">链接</a>
    </v-alert>

    <v-content>


    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "clockSetting",
  data() {
    return {
      clockedChange: null,
      persons: [{name: 'a', followed: false, clocked: true}]

      // {name:'b',followed:0,clocked:true},
      // {name:'c',followed:1,clocked:false},
    }
  },
  mounted() {
    //获取用户数据
    this.$axios.get('/getUserInfo', {
      params: {
        username: "a",
        password: "xx"
      }
    }).then((res) => {
      console.log(res.data)
      this.persons = [{name: 'a', followed: true, clocked: true}]
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
