## 🚀 Overview

> ✔ 저기요! 안 쓰는 티켓 있어요?👀 그럼 넘겨요! = Hey! Toss me!🙋‍♀️

❓ 전국구의 못쓰게 된 서비스 거래만 모아둔 곳 없을까?

🙏 취소 수수료 물지 말고 간단하게 거래해요!

💪 미용실도! 뮤지컬도! 어떤 예약 서비스라도 좋아요!


## 🚀 Project

### 🛠️ 프로젝트 아키텍쳐
<img src="https://user-images.githubusercontent.com/111720709/230279082-89baffac-003d-46e7-bbf9-a00c17caac1e.png"/>

#### 🛠️ 기술 스택
**FE**


<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Redux Persist-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/Stomp JS-EF5C55?style=for-the-badge&logoColor=white"/> <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/>


**BE**

<img src="https://img.shields.io/badge/JAVA-FBBA00?style=for-the-badge&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/> <img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"/> <img src="https://img.shields.io/badge/MYSQL-892CA0?style=for-the-badge&logo=mysql&logoColor=white"/> <img src="https://img.shields.io/badge/Junit-FFDF18?style=for-the-badge&logoColor=white"/> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/> <img src="https://img.shields.io/badge/JPA-4479A1?style=for-the-badge&logoColor=white"/> <img src="https://img.shields.io/badge/JPA Sepcification-4479A1?style=for-the-badge&logoColor=white"/> <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/> <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"/> <img src="https://img.shields.io/badge/STOMP-3B5526?style=for-the-badge&logoColor=white"/> <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"/>


**CI / CD**

<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/> <img src="https://img.shields.io/badge/Github Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/> <img src="https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/> <img src="https://img.shields.io/badge/GitBook-3884FF?style=for-the-badge&logo=gitbook&logoColor=white"/>

#### 🛠️ ERD
<img src="https://user-images.githubusercontent.com/111720709/230284753-7361a25d-ea91-409e-9f16-ca1df75f7910.png"/>


## 🚀 주요 기능


|<img src="https://user-images.githubusercontent.com/111720709/230289866-7b7fba11-2deb-4632-b506-fb2f54190525.gif" width="100%"/>|<img src="https://user-images.githubusercontent.com/111720709/230307621-1245963f-4a4d-445e-b52a-1b73aeaa44db.gif" width="100%"/>|
|:---:|:---:|
|유저 간 실시간 채팅|이미지 업로드|


|<img src="https://user-images.githubusercontent.com/111720709/230308302-87979359-2732-4266-9667-436bfa233199.gif" width="100%"/>|<img src="https://user-images.githubusercontent.com/111720709/230308481-72b64222-7a7b-4d8e-86e8-081cb6c88abb.gif" width="100%"/> |
|:---:|:---:|
|실시간 알림 기능|카카오 소셜 로그인|

|<img src="https://user-images.githubusercontent.com/111720709/230308475-65e4e2ae-c60b-424e-ae24-5e0d98a4ca33.gif" width="100%"/>|<img src="https://user-images.githubusercontent.com/111720709/230308486-b298593c-bb17-48d9-8595-7d9ff451b882.gif" width="100%"/>|
|:---:|:---:|
|JWT를 이용한 유저 정보 활용|검색 및 필터 기능|


## 🚀 트러블 슈팅

|**Problem**|CORS (Cross Origin Resource Sharing)|
|---|---|
|**Try to solve**|클라이언트에서 오는 모든 요청에 대한 허용, header에 토큰이 담겨 있을 땐 interceptor를 지나게 하여 CORS 에러를 방지|
||서버 측에서 Config 설정 이후에도 해결이 안 되는 경우, 클라이언트 측에서 프록시 서버를 설정|

<pre><code>@Override
public void addCorsMappings(CorsRegistry registry) {
    WebMvcConfigurer.super.addCorsMappings(registry);
    registry.addMapping("/**")
            .allowedOriginPatterns("*")
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(MAX_AGE);
}</code></pre>

<pre><code>server: {
            proxy: {
                "/api": {
                    target: "http://20.214.139.103:8080",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                    secure: false,
                    ws: true,
                },
            },
        },
</code></pre>

|**Problem**|컨테이너 서버 localhost 사용 불가|
|---|---|
|**Try to solve**|위 현상을 해결해 주기 위해 3개의 컨테이너를 같은 네트워크 상에서 실행시킨다|
||해당 앱의 host를 container name으로 대체한다|

<pre><code>version: '3'
service:
  app_name1:
    ...
    networks:
      - network_name
  app_name2:
    ...
    networks:
      - network_name

networks:
  network_name:
    driver: bridge
</code></pre>

<pre><code>spring.datasource.url: jdbc:mysql://app_name1:3306/{database_name}
...
spring.rabbitmq.host: app_name2
</code></pre>


|**Problem**|Cloud에서 다수의 이미지 실행|
|---|---|
|**Try to solve**|Docker compose를 활용하지 않은 개별 Comtainer run|
||Docker compose의 depends_on 설정|
||Docker image의 용량 Downgrade|
||Memory swap을 이용한 가상 메모리 확보|


|**Problem**|FCM 알림 발송 에러 및 배포 에러|
|---|---|
|**Try to solve**|fcm 서버로의 모든 요청에는 예외 처리|
||하나의 FCM프로젝트에는 하나의 private key파일과, 기기별로 발급되는 fcm토큰을 사용하여 통신함을 숙지|
||FCM 초기화에 필요한 private파일을 불러오는 경로를 수정|


## 🚀 Team 흑염룡🐲🔥


<a href="https://www.notion.so/trustmitt/Hey-Toss-me-8f477431f2ee42dcb7d34e70dd41cedb"><img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/></a>


|<img src="https://user-images.githubusercontent.com/111720709/230309092-b2850872-eed5-4220-b8ef-5418819b0b8d.jpg" width="120"/><br/>BE 이보미 <a href="https://github.com/lee-bomi">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309112-e1625d7f-16b3-49d6-8bb3-a18ff75f7b0a.png" width="120"/><br/>BE 최웅준 <a href="https://github.com/bearjun05">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309107-9b78021f-41ed-4aeb-b169-c3c8200d1e1e.jpg" width="120"/><br/>BE 허진혁 <a href="https://github.com/Jin-hyeok2">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309102-14c56a20-cb52-4da4-a463-fd678865a090.jpg" width="120"/><br/>FE 박주경 <a href="https://github.com/trustmitt">GitHub</a>|<img src="https://user-images.githubusercontent.com/111720709/230309098-a2c05a53-753f-424d-b1a6-5e53a1b0cb87.jpg" width="120"/><br/>FE 김규리 <a href="https://github.com/rangggu">GitHub</a>|
|:---:|:---:|:---:|:---:|:---:|


## 🚀 파트 배분

> BE

**보미** 토큰 인증, FCM 알림, 북마크, 키워드, 알림 기능

**웅준** 소셜 로그인, 이미지 업로드, 회원가입, 로그인

**진혁** 채팅 기능, 상품 및 거래 내역 관리, 배포

> FE

**주경** 회원가입, 로그인, 비밀번호 찾기, 마이페이지, 메인 컴포넌트, 채팅 컴포넌트 UI 구현 및 기능 연동, 이미지 최적화, PWA 적용, 프론트 배포

**규리** 헤더 컴포넌트, 카테고리 페이지, 상품 디테일, 글쓰기 페이지 UI 구현 및 기능 연동
