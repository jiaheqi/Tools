Vue.component('site-header', {
  template: '#header-template',
  data() {
    return {
      searchValue: ''
    };
  },
  methods: {
    handleSearch() {
      console.log('搜索:', this.searchValue);
      this.$root.$emit('global-search', this.searchValue);
    },
    clearSearch() {
      this.searchValue = '';
      this.$root.$emit('global-search', '');
    }
  }
}); 