
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/showcase-chintan/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 545, hash: '3bd4b797e7757c449d991e0db4544e909484bd40312ea3d8af91fcb15ae840a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1085, hash: 'aa57e8071c167d670795bf5cc9ecd5af743c76d362fce97de6cfdc734f00020b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
