<template>
  <div v-html="md"></div>
</template>
<script>
  import i18n from '../../components/startComponentPage/i18n.md'
  export default {
    computed: {
      md () {
        return i18n
      }
    }
  };
</script>
