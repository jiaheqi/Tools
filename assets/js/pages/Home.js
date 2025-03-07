const toolUrls = {
  '1': 'https://www.sojson.com/', // JSON格式化工具的 URL
  // 其他工具的 URL 配置
};

const Home = {
  template: '#home-template',
  data() {
    return {
      category: 'all',
      tools: [
        {
          id: '1',
          name: 'JSON格式化',
          description: '在线JSON格式化工具，支持JSON压缩、美化等功能',
          icon: 'fas fa-code',
          category: 'development',
          url: 'https://www.sojson.com/'
        },
        {
          id: '2',
          name: 'Markdown 语法',
          description: '在线Markdown语法工具，支持Markdown格式化、预览等功能',
          icon: 'fas fa-pen-to-square',
          category: 'utility',
          url: 'https://markdown.com.cn/basic-syntax/images.html'
        },
        {
          id: '3',
          name: 'diff 工具',
          description: '在线diff工具，支持文本对比、代码对比等功能',
          icon: 'fa-solid fa-magnifying-glass',
          category: 'development',
          url: 'https://tool.chinaz.com/tools/diff'
        },
        {
          id: '4',
          name: 'Base64编解码',
          description: '在线Base64编码和解码工具',
          icon: 'fas fa-unlock',
          category: 'development',
          url: 'https://docs.chaldea.center/zh/guide/import_https/decoder.html'
        },
        {
          id: '5',
          name: '草料二维码生成',
          description: '在线生成二维码，支持自定义颜色和大小',
          icon: 'fas fa-qrcode',
          category: 'utility',
          url: 'https://cli.im/'
        },
        {
          id: '6',
          name: 'cherry studio主题',
          description: 'cherry studio主题，支持多种颜色和大小',
          icon: 'fas fa-leaf',
          category: 'development',
          url: 'https://cherrycss.com/'
        },
        {
          id: '7',
          name: '时间戳转换',
          description: '时间戳与日期时间互相转换工具',
          icon: 'fas fa-clock',
          category: 'utility',
          url: 'https://tool.chinaz.com/tools/unixtime.aspx'
        },
        {
          id: '8',
          name: 'RGB颜色转换',
          description: 'RGB、HEX等颜色格式互相转换工具',
          icon: 'fas fa-palette',
          category: 'development',
          url: 'https://www.runoob.com/tags/html-colorpicker.html'
        },
        {
          id: '9',
          name: 'fontawesome图标',
          description: 'fontawesome图标，支持多种颜色和大小',
          icon: 'fas fa-font',
          category: 'development',
          url: 'https://fontawesome.com/search'
        },
        {
          id: '10',
          name: 'iOS 获取UDID',
          description: '在线获取iOS设备的UDID',
          icon: 'fa-brands fa-apple',
          category: 'mobile',
          url: 'https://www.pgyer.com/doc/view/udid'
        }
      ]
    };
  },
  computed: {
    displayTools() {
      return this.category === 'all'
        ? this.tools
        : this.tools.filter(tool => tool.category === this.category);
    },
    toolUrls() {
      return toolUrls; // 返回工具 URL 配置
    }
  },
  methods: {
    setCategory(category) {
      this.category = category;
    }
  }
}; 