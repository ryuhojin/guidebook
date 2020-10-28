<template>
    <div>
        <v-app-bar
                app
                dense
            >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>PORTFOLIO</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import nav from '@/mixins/nav'
export default {
    mixins:[nav]
}
</script>