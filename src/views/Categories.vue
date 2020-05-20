<template>
  <div>
    <div class="page-title">
      <h3>{{'Menu_Categories' | localize}}</h3>
    </div>
    <section>
      <loader v-if="loading"/>
      <div v-else class="row">
        <category-create @created="addNewCategory" class="row"/>
        <category-edit v-if="categories.length"
                       :categories="categories"
                       :key="categories.length + updateCount"
                       @update="updateCategories"
                       @delete="deleteCategories"/>
        <p v-else class="center">{{'Categories_NoCat' | localize}}</p>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    name: "Categories",
    components: {
      CategoryCreate: () => import('@/components/CategoryCreate'),
      CategoryEdit: () => import('@/components/CategoryEdit')
    },
    metaInfo() {
      return {title: this.$title('Menu_Categories')}
    },
    data() {
      return {
        categories: [],
        loading: true,
        updateCount: 0
      }
    },
    methods: {
      addNewCategory(category) {
        this.categories.push(category);
      },
      updateCategories(category) {
        const idx = this.categories.findIndex(c => c.id === category.id);
        this.categories[idx].title = category.title;
        this.categories[idx].limit = category.limit;
        this.updateCount++;
      },
      deleteCategories(categoryId) {
        this.categories = this.categories.filter(cat => cat.id !== categoryId);
      }
    },
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories');
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>