<template>
  <div>
    <div class="page-title">
      <h3>{{'Bill'|localize}}</h3>
      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <loader v-if="loading"/>
    <div v-else class="row">
      <home-bill :rates="currency.rates"/>
      <home-currency :rates="currency.rates"
                     :date="currency.date"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    metaInfo() {
      return {title: this.$title('Menu_Bill')}
    },
    data() {
      return {
        loading: true,
        currency: null,
      }
    },
    components: {
      HomeBill: () => import('@/components/HomeBill'),
      HomeCurrency: () => import('@/components/HomeCurrency')
    },
    methods: {
      async refresh() {
        this.loading = true;
        this.currency = await this.$store.dispatch('fetchCurrency');
        this.loading = false;
      }
    },
    async mounted() {
      this.currency = await this.$store.dispatch('fetchCurrency');
      this.loading = false;
    }
  }
</script>
