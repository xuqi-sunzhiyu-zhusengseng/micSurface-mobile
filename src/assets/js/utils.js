import {
  getUserToken,
  getChannelId,
  getSignUpStatus,
  getUserStatus,
  getActivityInfo,
  getUserCheckIn
} from '../../api/index'



export const getUrlParam = function (name){
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

export const getActivityMessage = function(store){
  console.log('getActivityMessage');
  let state = store

  // 判断 store 中是否有该活动的数据
  let res= !store.state.activityMessage.activityDataStatus ?  getBasicInfoActivity() :''
  return res
}


// todo 获取渠道 id ，是否开启渠道报名、是否开启报名审核
async function getBasicInfoActivity(){
  /*
    获取活动信息，eventId？|| CampaignChannelId？=> CampaignChannelId
   */
  let eventId = '113f6c8d-c28f-4d1b-be10-c614d94cf1e6'
  let campaignChannelId = '93b4ffb7-0a18-4567-b7c6-923735ce9315'


  let actvityMessage = {} //
  // 无 campaignChannelId 获取 默认 campaignChannelId
  if(!campaignChannelId) {
    let result_getChannelId =await getChannelId({eventId})
    //console.log(result_getChannelId)
    actvityMessage.actStatus = result_getChannelId
  }

  // 通过渠道 campaignChannelId 获取该渠道活动的状态
  let result_getSignUpStatus =await getSignUpStatus({id:campaignChannelId})
  //console.log(result_getSignUpStatus);
  actvityMessage.actStatus = result_getSignUpStatus
  // 判断用户是否已经登录注册过
  let result_getUserStatus =await getUserStatus({eventId})
  // console.log(result_getUserStatus);

  // 活动的相关信息
  let result_getActivityInfo =await getActivityInfo({id:eventId})
  //console.log(result_getActivityInfo);
  actvityMessage.actContent = result_getActivityInfo


  return actvityMessage
}


