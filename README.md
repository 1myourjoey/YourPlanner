### 🔗Link

---

협업기록

[Team API Project | Notion](https://midnight-traffic-dac.notion.site/Team-API-Project-0699a0511fd94638942adcfbb1b40314?pvs=4)

GitHub Code

[GitHub - 1myourjoey/YourPlanner](https://github.com/1myourjoey/YourPlanner)

---

## 📖 “Your Planner“상세 내용

<aside>
🛫 COVID-19 팬데믹 이후 여행 수요가 급증하고 원격 근무와 디지털 노마드 라이프스타일의 확산으로 인해, 효율적이고 사용자 친화적인 여행 일정 관리 도구의 필요성이 높아졌습니다. 기존의 여행 계획 서비스들이 사용자 맞춤형 일정 관리와 실시간 업데이트 기능이 부족하여 이를 개선하기 위해 프로젝트를 시작하게 되었습니다.
**주요 기능** : 메인페이지, 로그인/회원가입, 여행 플랜 서비스, AI비서, 마이페이지 및 여행플랜 공유, 마이크로 서비스 구성

</aside>

[api 프로젝트 (4.4mb).mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/db257cdd-fce2-46bc-a699-339a83e26b37/3579374c-0785-4435-8198-6c3826f0fb31/api_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_(4.4mb).mp4)

## 🛠️ 사용 기술 및 라이브러리

- 언어 : `Java (11)`, `React(18.3.1)`
서버 : `Apache Tomcat 9.0`
프레임 워크 :`Spring Boot 2.7.18`, `MyBatis 2.2.0`
DB : `H2` / `MariaDB 10.5.24`  / `AWS RDS`
IDE : `IntelliJ`
프론트엔드 템플릿 : `JSX`
사용된 CSS 라이브러리: `부트스트랩`
협업 툴: `Notion`, `GitHub`

## 📱 담당한 기능 (Frontend & Backend)

- 프로젝트 총괄
- 메인페이지(프론트)
    
    - 대한민국 지도 부분 구현 및 지역별 툴팁 구현
    
    - 플랜용 날짜 및 출발 목적지 구현
    
    - 실시간 날씨를 OpenWeather API를 활용하여 메인 페이지 하단에 표시
    
    - 동적 페이지를 위해 백그라운드 배경 및 비행기 모션 구현
    
- 백엔드
    
    - OpenWeather API를 활용하여 날씨 데이터를 수집하고 REST API를 통해 프론트엔드로 전송
    
    - 프로젝트의 교통파트 MSA 모듈화 구현
    

## 💡 Trouble Shooting

- **API** 
본 프로젝트는 API를 기반으로 진행되었습니다. 이로 인해 발생한 문제점들은 주로 API에서 비롯되었습니다. 각 API마다 고유의 사용법이 존재하며, 이를 정확히 따르지 않으면 데이터를 올바르게 받아올 수 없었습니다. 또한, 백엔드에서 데이터를 호출하더라도 프론트엔드에서 값이 정상적으로 나타나지 않는 문제가 발생하여 많은 어려움을 겪었습니다.
- **REACT**
이번 프로젝트의 프론트엔드는 리액트를 사용하였습니다. 리액트를 처음 접하다 보니 기본적인 구조를 이해하고 익히는 데 시간이 필요했습니다. 기존에 사용하던 CSS, HTML, JSP 등에 익숙해져 있었기 때문에 새로운 문법을 배우면서 잦은 실수가 발생하였습니다.
- **MSA 도입**
본 프로젝트는 초기에는 H2 DB를 사용하는 모놀리식 구조로 시작되었습니다. 이를 MSA로 전환하려는 시도를 하였으나, 모듈화 과정에서 많은 어려움을 겪었습니다. 각 서비스를 분리하는 과정에서 여러 오류가 발생하였고, 이를 해결하기 위해 개념적인 요소부터 다시 점검해야 했습니다.
