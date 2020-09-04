<template>
  <div v-html="md"></div>
</template>
<script>
  import quickstart from '../../components/startComponentPage/quickstart.md'
  export default {
    computed: {
      md () {
        return quickstart
      }
    }
  };
</script>
