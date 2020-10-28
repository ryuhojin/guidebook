<template>
    <v-container style="max-width:740px;">
       <v-col>
            <h1>프로젝트 준비</h1>
            <br>
            <p>
                해당 가이드는 <strong><strong style="color:rgb(0, 146, 255)">신입개발자</strong>분들이 해당 가이드 작성자가 겪었던 문제점들을 겪지 않았으면 하는 마음에 작성하게 된 가이드</strong>입니다.
            </p>
            <p>
                해당 가이드는 Spring Boot와 JSP를 이용한 프로젝트 구성방식으로, Spring Boot에서 컨트롤러를 통하여 직접적으로 jsp페이지를 읽어 화면에 뿌려주는 프로젝트로 구성되어 있습니다.
            </p>
            <br>
            <p>
                해당 Front가이드를 설명하기에 앞서 Spring Boot 프로젝트의 설정파일 <code>application.yml</code> 또는 <code>application.properties</code>에 Jsp를 호출하기 위한 설정을 하여야 합니다. <strong>application.yml</strong>을 사용시 한 페이지 내에서 빌드 분기가 가능하기 때문에 <strong>권장 합니다.</strong>
            </p>
            <v-subheader style="background-color:#f6f6f6; color:#000; font-weight:bold">application.yml</v-subheader>
            <pre v-highlightjs>
                <code class="YAML codeSnippet">
        spring:
            mvc:
                view:
                    prefix: /WEB-INF/views/
                    suffix: .jsp
                </code>
            </pre>
            <v-subheader style="background-color:#f6f6f6; color:#000; font-weight:bold">application.properties</v-subheader>
            <pre v-highlightjs>
                <code class="properties codeSnippet">
        spring.mvc.view.prefix: /WEB-INF/views/
        spring.mvc.view.suffix: .jsp
                </code>
            </pre>
            <p>위 작업이 완료 되었으면 <strong>src/main</strong> 하위에 <strong>webapp</strong>이라는 폴더를 생성합니다. 아래와 같은 형식으로 디렉토리 구조를 형성합니다.</p>
            <v-subheader style="background-color:#f6f6f6; color:#000; font-weight:bold">디렉토리 구조</v-subheader>
            <pre v-highlightjs>
                <div class="codeSnippet">
        webapp
        ├─ resources
        └─ WEB-INF
            ├─ tags
            └─ views
                </div>
            </pre>

            <p>위의 구조에서 <strong>tags</strong>에는 공통으로 사용 할 JSTL Tag를 정의해야되고, <strong>views</strong>에는 화면들을 코딩 하면 됩니다.</p>
            
            <v-row style="align-items:center; justify-content:flex-end">
                <v-subheader>그럼 본격적인 코딩을 위해서 코드 구조를 설계 작성하여 봅시다.</v-subheader>
                <v-btn text link :to="'/jsp/structure'">다음 페이지 ></v-btn>
            </v-row>

       </v-col>
    </v-container>
</template>
<script>
export default {
    name:'JSPAboutView'
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