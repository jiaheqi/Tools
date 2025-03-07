Vue.component('tool-card', {
  template: '#tool-card-template',
  props: {
    tool: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      const url = this.tool.url; // 获取对应的 URL
      if (url) {
        window.open(url, '_self'); // 在当前页面打开 URL
      } else if (this.tool.externalLink) {
        window.open(this.tool.externalLink, '_blank');
      } else {
        this.$router.push(`/tool/${this.tool.id}`);
      }
    }
  },
  computed: {
    iconHtml() {
      return `<i class="iconfont ${this.tool.icon}"></i>`; // 使用 Iconfont 图标类名
    }
  }
}); 