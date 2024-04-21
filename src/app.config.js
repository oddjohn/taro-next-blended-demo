export default {
  pages: [
    'pages/index/index',
    'pages/detail/index',
  ],
  subpackages: [
    {
      root: 'pages/auth',
      pages: [
        'index'
      ]
    },
    {
      root: 'pages/item',
      pages: [
        'index'
      ]
    },
  ],
  components: [
    'subpkg/components/picker/index',
    'subpkg/components/article/index',
    'pages/detail/foo/index', // 跨页面引入组件
    'pages/auth/card/index', // 分包引入组件
  ]
}
