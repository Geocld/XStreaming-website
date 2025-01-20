export default {
  nav: {
    home: 'Home',
    download: 'Download',
    detail: 'Details',
    fqa: 'FAQ',
    sponsor: 'Sponsor',
    version: 'Version',
  },
  baseInfo: {
    title: 'Open Source Xbox Streaming/Cloud Gaming App',
    desc: 'XStreaming is an open-source Xbox/cloud gaming streaming client for mobile devices, inspired by the API interfaces and implementations provided by Greenlight.',
  },
  download: {
    title: 'Download',
    last_version: 'Current Version',
    github: 'Download from GitHub releases',
  },
  detail: {
    matting: {
      title: '',
      desc: 'A user-friendly Xbox streaming app that supports playing XGPU game library without proxy, features gamepad vibration, providing you with a better Xbox gaming experience.',
      feature1: 'Stream audio and video from Xbox One, Xbox Series S/X',
      feature2: 'Support 1080P resolution',
      feature3: 'Support external, Bluetooth, virtual controllers with vibration',
      feature4: 'Support controller button mapping',
      feature5: 'Proxy-free cloud gaming',
      feature6: 'Friends list',
      feature7: 'Achievement system',
      feature8: 'IPv6 priority connection support',
    },
  },
  fqa: {
    title: 'Frequently Asked Questions',
    fqas: [
      {
        question: 'How to stream remotely (NAT traversal failed)?',
        answer: 'XStreaming does not provide remote streaming relay servers. Remote streaming requires your home network to have IPv4/6 public network access, forward ports 9002/3074, or use virtual LAN tools like zerotier to create a virtual network.'
      },
      {
        question: 'How to unlock cloud gaming when region access is denied?',
        answer: 'Go to Settings - Region, change your region to play XGPU games from any location.'
      },
      {
        question: 'What to do if the controller doesn\'t vibrate?',
        answer: 'Controller vibration depends on your Android device\'s kernel. If vibration doesn\'t work, try switching controller mode or using Android controller driver override.'
      },
      {
        question: 'What to do when stuck at ICE exchange success or white screen after entering a game?',
        answer: 'This is caused by an outdated system webview version. You need to upgrade system webview, refer to: <br> https://github.com/Geocld/XStreaming/blob/main/tools/readme.md'
      },
      {
        question: 'Is keyboard and mouse supported?',
        answer: 'No'
      },
    ],
  },
  sponsor: {
    title: 'Sponsor',
    desc: 'If you find the app useful, consider supporting the development',
  },
};
