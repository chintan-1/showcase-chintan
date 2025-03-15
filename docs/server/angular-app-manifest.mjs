
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/showcase-chintan/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 545, hash: '097cd650f71d413131892a611299d7f67956c50d027ac3b998e24220e4d98232', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1085, hash: '641ba2362ec1a9faa38c600e34c59d4217d646f222007b42ab48cbc4abe81422', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
