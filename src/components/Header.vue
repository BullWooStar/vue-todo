<template>
  <h1>{{ time }}</h1>
</template>

<script>
export default {
  data() {
    return {
      time: `${new Date().getFullYear()}년 ${
        new Date().getMonth() + 1
      }월 ${new Date().getDate()}일`,
    };
  },
};
</script>

<style>
h1 {
  font-weight: 900;
  font-size: 70px;
}
</style>
