<template>
  <div v-html="md" style="margin-top: 30px" class="width100"></div>
</template>

<script>
  import md2 from '../../components/u-table-component/apiPage/paginationAndSideslipFrame.md'
  export default {
    computed: {
      md () {
        return md2
      }
    },
  }
</script>
