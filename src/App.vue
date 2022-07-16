<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <files-list :filesPriority="filesPriority" :filesActive="filesActive"></files-list>
</template>

<script>

import FilesList from '@/components/FilesList'

export default {
  components: {
    FilesList
  },
  data: function() {
    return {
      filesPriority : {
          fileA: 20,
          fileB: 10,
          fileC: 0,
        },
      filesActive: [
          'fileA', 
          'fileB',
      ],
    }
  }
}
</script>

<style>

</style>
