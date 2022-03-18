import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/policy',
          component: './test/colorTest/index',
        },
        {
          path: '/analysis',
          component: './analysis/index',
        },
        {
          path: '/test',
          component: './test/index',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'myColor',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080/polls/5/results/',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    },
  },
  theme: {
    //menu
    'menu-item-color': '#462e68',
    'menu-item-active-bg': '#462e68',
    'menu-item-active-border-width': '0px',
    'menu-item-vertical-margin': '20px',
  },
};
export default config;
