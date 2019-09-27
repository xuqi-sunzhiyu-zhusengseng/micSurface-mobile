# VueTemplate

> vue project

## 逻辑
  01、请求后台接口获取用户信息token页，有的话存储，没有的话后台返回网址，拼接当前Url,跳转授权页，
  02、从url上获取eventId，getCampaignChannelId，如只有eventId，通过eventId获取渠道 getCampaignChannelId。
  03、通过渠道Id-getCampaignChannelId来判断该渠道是否开启渠道报名、是否开启报名审核
  04、通过eventId 来获取用户是否注册、和活动相关信息，如注册在判断是否通过审核，还是直接显示报名二维码
  渲染数据

## 未完善的点：
  1、路由添加 history 模式 build 页面空白
  2、自定义页面title





