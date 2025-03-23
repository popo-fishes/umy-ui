<template>
  <div v-html="md"></div>
</template>
<script>
  import updateLog from '../../components/startComponentPage/updateLog.md'
  export default {
    computed: {
      md () {
        return updateLog
      }
    }
  };
</script>
