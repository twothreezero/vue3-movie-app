# Vue3 Movie App

### 이슈

> scss 버전때문에 컴파일 오류가 떠서 1.62.1 으로 다운그레이드

```
npm install sass@1.62.1
```

> App.vue 내용 중 아래의 내용을 지울 시 스타일 없어져서 남겨둠

```
<style lang="scss">
@import "~/scss/main";
</style>
```
