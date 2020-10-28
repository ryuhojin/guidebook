<template>
    <v-app-bar
        app
        flat
        dark
        color="#0092ff"
        clipped-left
    >
        <v-toolbar-title style="cursor:pointer;" @click="$router.push('/')" class="font-weight-bold">B-OFFICIAL GUIDE</v-toolbar-title>
        <v-spacer/>
        <div  v-for="menu in menus" :key="menu.title" >
            <v-menu offset-y v-if="menu.submenus">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                        {{menu.title}}
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="submenu in menu.submenus"
                    :key="submenu.title"
                    link
                    :to="submenu.link"
                    active-class="blue--text text--accent-4"
                    >
                        <v-list-item-title>{{ submenu.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text v-else link :to="menu.link">
                {{menu.title}}
            </v-btn>
        </div>
    </v-app-bar>
</template>
<script>
import nav from '@/mixins/nav'
export default {
    mixins:[nav]
}
</script>