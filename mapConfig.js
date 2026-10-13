export const mapConfig = {
  // style: 'https://tiles.openfreemap.org/styles/liberty',
  style: 'https://tiles.openfreemap.org/styles/fiord',
  // style: 'https://tiles.openfreemap.org/styles/positron',
  // style: 'https://tiles.openfreemap.org/styles/bright',
  // style: 'https://tiles.openfreemap.org/styles/dark',
  // style: 'https://tiles.openfreemap.org/styles/dark',
  // style: {
  //   version: 8,
  //   name: 'LocalTiles',
  //   sources: {
  //     'local-tiles': {
  //       type: 'raster',
  //       // tiles: ['http://172.34.120.93:42491/788865972/{z}/{x}/{y}.png'],
  //       tiles: ['/788865972/{z}/{x}/{y}.png'],
  //       tileSize: 256,
  //       attribution: 'Local Service',
  //     },
  //   },
  //   layers: [
  //     {
  //       id: 'local-tiles-layer',
  //       type: 'raster',
  //       source: 'local-tiles',
  //       'source-layer': 'local-tiles',
  //     },
  //   ],
  // },
  center: [104.06, 30.67],
  zoom: 5,
  minZoom: 2,
  maxZoom: 18,
  renderWorldCopies: false,
  attributionControl: false,
  // globe: true 时启用地球投影，缩小到低缩放级别（zoom ≤ 11）显示为 3D 地球，
  // 放大到高缩放级别（zoom ≥ 12）自动过渡回平面墨卡托。需要 MapLibre GL v5+。
  globe: false,
};

// maplibre 本地副本（与 src/components/map/dist 同文件）：避免 unpkg CDN
// 单点故障，公网/内网环境均可加载
export const mapAssets = {
  css: '/maplibre/maplibre-gl.css',
  script: '/maplibre/maplibre-gl.js',
};

