// 路由配置
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tools', component: ToolList },
  { 
    path: '/tool/:id', 
    component: {
      template: '<div>工具详情页面，ID: {{ $route.params.id }}</div>'
    } 
  }
];

const router = new VueRouter({
  routes
});

// 创建 Vue 实例
new Vue({
  el: '#app',
  router
}); 