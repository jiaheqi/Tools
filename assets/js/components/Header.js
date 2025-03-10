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
      this.$emit('search', this.searchValue);
    }
  }
}); 