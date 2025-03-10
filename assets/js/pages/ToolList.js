const ToolList = {
  template: '#tool-list-template',
  data() {
    return {
      category: 'all',
      currentPage: 1,
      pageSize: 12,
      allTools: toolsData // 使用从 Home.js 导入的工具数据
    };
  },
  computed: {
    filteredTools() {
      return this.category === 'all'
        ? this.allTools
        : this.allTools.filter(tool => tool.category === this.category);
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
    }
  }
}; 