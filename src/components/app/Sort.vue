<template>
  <span class="sort-content">
     <i v-if="isAscend" class="sort material-icons"
        @click="sort('down-up')">
       arrow_upward
     </i>
     <i v-else class="sort material-icons"
        @click="sort('up-down')">
       arrow_downward
     </i>
  </span>
</template>

<script>
  export default {
    name: "Sort",
    props: ['name', 'type'],
    data() {
      return {
        isAscend: true,
      }
    },
    methods: {
      sort(sortType) {
        this.isAscend = !this.isAscend;
        const options = {
          key: this.name,
          type: this.type,
          sort: sortType
        };
        this.$emit('sort', options)
      },
    }
  }
</script>

<style scoped>
  .sort-content {
    position: relative;
  }

  .sort {
    position: absolute;
    cursor: pointer;
  }

</style>