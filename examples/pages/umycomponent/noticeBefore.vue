<template>
  <div v-html="md"></div>
</template>
<script>
  import noticeBefore from '../../components/startComponentPage/noticeBefore.md'
  export default {
    computed: {
      md () {
        return noticeBefore
      }
    }
  };
</script>
