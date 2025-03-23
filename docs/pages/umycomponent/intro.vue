<template>
  <div v-html="md"></div>
</template>
<script>
  import intro from '../../components/startComponentPage/intro.md'
  export default {
    computed: {
      md () {
        return intro
      }
    }
  };
</script>
