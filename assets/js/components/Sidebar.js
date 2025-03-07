Vue.component('sidebar', {
  template: '#sidebar-template',
  props: {
    activeCategory: {
      type: String,
      default: 'all'
    }
  },
  data() {
    return {
      categories: [
        { key: 'all', name: '全部工具', icon: 'fas fa-th-large' },
        { key: 'development', name: '开发工具', icon: 'fas fa-code' },
        { key: 'calculation', name: '计算工具', icon: 'fas fa-calculator' },
        { key: 'utility', name: '实用工具', icon: 'fas fa-tools' },
        { key: 'mobile', name: '移动设备', icon: 'fas fa-mobile-screen-button' }
      ]
    };
  },
  methods: {
    handleSelect(key) {
      this.$emit('category-change', key);
    }
  }
}); 