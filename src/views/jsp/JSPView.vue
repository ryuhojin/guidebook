<template>
    <div style="height:100%; display:flex;flex-direction:row;">
        <v-navigation-drawer permanent app clipped  style="height:100%;" v-if="this.$vuetify.breakpoint.mdAndUp">
        <v-list-item style="background-color:#0092ff;" dark>
          <v-list-item-content>
            <v-list-item-title class="title" style="color:#ffd95f">
              FRONT-END
            </v-list-item-title>
            <v-list-item-subtitle>
              All about JSP
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="menu in menus"
            :key="menu.title"
            link
            :to="menu.link"
            active-class="yellow--text text--accent-4"
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view></router-view>
    </div>
</template>
<script>
  export default {
    name:'JSPView',
    data () {
      return {
        menus: [
          { title: 'ABOUT', icon: 'mdi-information-variant', link:'about'},
          { title: 'STRUCUTRE', icon: 'mdi-manjaro', link:"structure"},
          { title: 'UTIL', icon: 'mdi-alpha-u', link:"util"},
          { title: 'SECURITY', icon: 'mdi-alpha-s', link:"security"},
        ],
        right: null,
      }
    },
  }
</script>
<style scoped>
.v-list-item--active{
  background-color: #0092ff;
}
</style>