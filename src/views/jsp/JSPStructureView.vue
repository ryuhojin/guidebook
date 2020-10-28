<template>
     <v-container style="max-width:740px;">
       <v-col>
            <v-row style="align-items:center; justify-content:flex-start">
                <v-btn text link :to="'/jsp/about'"> &lt; 이전 페이지</v-btn>
                <v-subheader>그럼 본격적인 코딩을 위해서 코드 구조를 설계 작성하여 봅시다.</v-subheader>
            </v-row>
           <h1>코드 구조</h1>
       </v-col>
    </v-container>
</template>
<script>
export default {
    name:'JSPStructureView'
}
</script>
<style scoped>
    .codeSnippet {
    color: #a9b7c6 !important;
    background: #282b2e !important;
    display: block !important;
    overflow-x: auto !important;
    padding: 0.5em !important;
    }
</style>