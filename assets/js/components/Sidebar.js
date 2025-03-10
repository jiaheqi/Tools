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
        { key: 'forum', name: '论坛网站', icon: 'fas fa-globe' },
        { key: 'utility', name: '实用工具', icon: 'fas fa-tools' },
        { key: 'mobile', name: '移动设备', icon: 'fas fa-mobile-screen-button' },
        { key: 'download', name: '软件下载', icon: 'fas fa-download' },
        { key: 'third-party', name: '开发文档', icon: 'fas fa-file-code' },
        { key: 'ai', name: 'AI工具', icon: 'fas fa-robot' },
        { key: 'tutorial', name: '教程汇总', icon: 'fas fa-book' }
      ]
    };
  },
  methods: {
    handleSelect(key) {
      this.$emit('category-change', key);
    }
  }
}); 