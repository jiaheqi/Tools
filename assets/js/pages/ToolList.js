const ToolList = {
  template: '#tool-list-template',
  data() {
    return {
      category: 'all',
      currentPage: 1,
      pageSize: 12,
      allTools: toolsData, // 使用从 Home.js 导入的工具数据
      searchValue: '' // 搜索值
    };
  },
  computed: {
    filteredTools() {
      let tools = this.category === 'all' ? this.allTools : this.allTools.filter(tool => tool.category === this.category);
      // 根据搜索值过滤工具
      if (this.searchValue) {
        tools = tools.filter(tool => 
          tool.name.toLowerCase().includes(this.searchValue.toLowerCase()) || 
          tool.description.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }
      return tools;
    },
    displayTools() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.filteredTools.slice(startIndex, startIndex + this.pageSize);
    }
  },
  methods: {
    setCategory(category) {
      this.category = category;
      this.currentPage = 1;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    handleSearch(searchValue) {
      console.log('ToolList 接收到搜索:', searchValue);
      this.searchValue = searchValue; // 更新搜索值
      this.currentPage = 1; // 重置当前页为 1
    }
  },
  created() {
    // 使用全局事件总线监听搜索事件
    this.$root.$on('global-search', this.handleSearch);
  },
  beforeDestroy() {
    // 组件销毁前移除事件监听
    this.$root.$off('global-search', this.handleSearch);
  }
}; 