<template>
  <div>
    <ul>
      <li v-for="file in this.files" :key="file.id">
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    filesPriority: {
        type: Object,
        required: true
    },
    filesActive: {
        type: Object,
        required: true
    }
  },
  data: function () {
    return {
      files: this.$store.state.files,
    };
  },
  mounted() {
    this.files = this.sortFilesByPriority();
  },
  methods: {
    isActive(file) {
      return file.includes(this.filesActive);
    },

    sortFilesByPriority() {
        return this.files.sort((a, b) =>  this.filesPriority[b.name] - this.filesPriority[a.name]);
    },
  },
};
</script>

<style>
</style>