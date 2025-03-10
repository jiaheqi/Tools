Vue.component('site-footer', {
  template: '#footer-template',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}); 