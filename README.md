# IMDB Movie Website

> Vue3을 사용하여 만든 영화 검색 사이트입니다.

![메인](./img/imdb.png)

## 주요 기능

- 실시간 영화 검색
- 검색 필터 제공
- 자세한 영화 정보 보기

## 기술 스택

- **Frontend:** `Vue3`, `SCSS` ,`Babel`, `Webpack`

## 설치 방법

**1. 사전 요구사항**

- Node.js 16 이상

**2. 설치 과정**

```bash
# 1. 저장소 복제
git clone [https://github.com/twothreezero/vue3-movie-app.git](https://github.com/twothreezero/vue3-movie-app)
cd your-projcet

# 2. 설정
npm install
```

## 사용법

프로젝트를 설치한 후, 아래 명령어를 실행하여 서버를 시작할 수 있습니다.

```bash
# 서버 실행
npm run dev
```

이후 브라우저에서 http://localhost:8000으로 접속하세요.

## 연락처

[twothreezero](https://github.com/twothreezero)

GitHub: @realtwothreezero

Email: realtwothreezero@gmail.com

### 이슈

> scss 버전때문에 컴파일 오류가 떠서 1.62.1 으로 다운그레이드

```bash
npm install sass@1.62.1
```

> App.vue 내용 중 아래의 내용을 지울 시 스타일 없어져서 남겨둠

```CSS
<style lang="scss">
@import "~/scss/main";
</style>
```
