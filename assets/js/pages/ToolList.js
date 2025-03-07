const ToolList = {
  template: '#tool-list-template',
  data() {
    return {
      category: 'all',
      currentPage: 1,
      pageSize: 12,
      allTools: Array(30).fill(null).map((_, index) => ({
        id: `${index + 1}`,
        name: `工具 ${index + 1}`,
        description: `这是工具 ${index + 1} 的描述，简单介绍工具的功能和用途。`,
        icon: `assets/images/tool-icons/tool-${index % 8 + 1}.png`,
        category: index < 8 ? ['development', 'utility', 'calculation'][index % 3] : 'new-tools'
      }))
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