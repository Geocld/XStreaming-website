export default {
  nav: {
    home: '首页',
    download: '下载',
    detail: '详情',
    fqa: '问题',
    sponsor:'赞助',
    version: '版本信息',
  },
  baseInfo: {
    title: '开源Xbox串流/云游戏应用',
    desc: 'XStreaming是一款全平台开源的Xbox/云游戏串流移动端客户端，你可以在任意地方串流你的主机和游玩xCloud云游戏。',

  },
  download: {
    title: '下载',
    last_version: '当前版本',
    github: 'GitHub releases 下载',
  },
  detail: {
    matting: {
      title: '',
      desc: '简单易用的Xbox串流应用，同时支持免代理游玩XGPU游戏库，支持游戏手柄振动，给你更好的Xbox游戏体验。',
      feature1: '串流Xbox One、Xbox Series S/X的音视频',
      feature2: '支持1080P分辨率',
      feature3: '支持外接、蓝牙、虚拟手柄，支持手柄振动',
      feature4: '支持手柄按键映射',
      feature5: '免代理云游戏',
      feature6: '好友列表',
      feature7: '成就系统',
      feature8: 'IPv6优先连接支持',
    },
  },
  fqa: {
    title: '常见问题',
    fqas: [
      {
        question: '如何远程串流(NAT打洞失败)？',
        answer: 'XStreaming并没有提供远程串流中转服务器，远程串流需要家庭网络已经具备IPv4/6公网，同时转发端口9002/3074，或者使用zerotier等组网工具组件虚拟局域网。'
      },
      {
        question: '云游戏提示所在地区没有权限如何解锁',
        answer: '设置 - 地区，修改地区后即可在任意地区游玩XGPU游戏。'
      },
      {
        question: '手柄没有振动怎么办？',
        answer: '手柄振动与安卓设备的内核有关，如手柄无法振动，请切换手柄模式或使用覆盖安卓手柄驱动尝试。'
      },
      {
        question: '进入游戏后一直卡在ICE交换成功或白屏如何处理？',
        answer: '原因是系统webview版本过低，需要升级系统webview，升级方法参考：<br> https://github.com/Geocld/XStreaming/blob/main/tools/readme.md'
      },
      {
        question: '是否支持键鼠?',
        answer: '不支持'
      },
    ],
  },sponsor: {
    title: '赞助',
    desc: '如果觉得应用好用，不妨支持下开发',
  },
};