<template>
  <div>
    <loader v-if="loading"/>
    <div v-else class="app-main-layout">
      <navbar @click="isOpen=!isOpen"/>
      <sidebar @close="closeSidebar" v-model="isOpen" :key="locale"/>
      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view/>
        </div>
      </main>
      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'CreateNewRecord'">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
  import messages from '@/utils/messages'

  export default {
    name: "MainLayout",
    data() {
      return {
        isOpen: false,
        loading: true,
      }
    },
    components: {
      Navbar: () => import('@/components/app/Navbar'),
      Sidebar: () => import('@/components/app/Sidebar'),
    },
    computed: {
      error() {
        return this.$store.getters.error;
      },
      locale() {
        return this.$store.getters.info.locale || 'ru-RU';
      }
    },
    watch: {
      error(fbError) {
        this.$error(messages[fbError.code] || 'Что-то пошло не так')
      }
    },
    methods: {
      closeSidebar() {
        if (document.documentElement.clientWidth < 600) this.isOpen = false;
      }
    },
    async mounted() {
      this.isOpen = document.documentElement.clientWidth > 600;
      if (!Object.keys(this.$store.getters.info).length) {
        await this.$store.dispatch('fetchInfo')
      }
      this.loading = false;
    }

  }
</script>

<style scoped>

</style>