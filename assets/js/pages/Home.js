const toolUrls = {
  '1': 'https://www.sojson.com/', // JSON格式化工具的 URL
  // 其他工具的 URL 配置
};
const toolsData = [
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
    category: 'development',
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
    category: 'development',
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
    category: 'development',
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
  },
  {
    id: '11',
    name: 'JWT 解码',
    description: '在线JWT解码工具',
    icon: 'fa-solid fa-key',
    category: 'development',
    url: 'https://www.bejson.com/jwt/'
  },
  {
    id: '12',
    name: 'curl 转换 Python',
    description: 'curl 转换 Python 代码工具',
    icon: 'fas fa-robot',
    category: 'development',
    url: 'https://curlconverter.com/python/'
  },
  {
    id: '13',
    name: '青龙面板',
    description: '青龙面板新手教程',
    icon: 'fas fa-book',
    category: 'tutorial',
    url: 'https://thin-hill-428.notion.site/Docker-QL-pannel-Faker-Repository-environment-Setup-45edcbfe90d74d8abb2d71896eab3be7'
  },
  {
    id: '14',
    name: 'IDE激活码',
    description: 'IDE激活码工具',
    icon: 'fas fa-key',
    category: 'development',
    url: 'https://www.ajihuo.com/python/4197.html'
  },
  {
    id: '15',
    name: 'Linux.do',
    description: 'Linux.do',
    icon: 'fa-solid fa-blog',
    category: 'forum',
    url: 'https://www.linux.do/'
  },
  {
    id: '16',
    name: 'Ja-netfilter常见问题解答',
    description: 'Ja-netfilter常见问题解答',
    icon: 'fa-brands fa-ideal',
    category: 'tutorial',
    url: 'https://chip-tail-e93.notion.site/Ja-netfilter-9886afbfe1ed4d5e90a713e63718f647#0d7a3a8faac040d386ece668e1ea31a2'
  },
  {
    id: '17',
    name: 'GitHub ',
    description: 'GitHub 主页',
    icon: 'fa-brands fa-github',
    category: 'forum',
    url: 'https://github.com/jiaheqi'
  },
  {
    id: '18',
    name: 'Doclingo 翻译',
    description: 'Doclingo PDF翻译',
    icon: 'fa-solid fa-file-pdf',
    category: 'development',
    url: 'https://doclingo.ai/zh/translate'
  }
];
const Home = {
  template: '#home-template',
  data() {
    return {
      category: 'all',
      tools: toolsData
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