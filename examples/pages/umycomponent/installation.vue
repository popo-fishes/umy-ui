<template>
  <div v-html="md"></div>
</template>
<script>
  import installation from '../../components/startComponentPage/installation.md'
  export default {
    computed: {
      md () {
        return installation
      }
    }
  };
</script>
