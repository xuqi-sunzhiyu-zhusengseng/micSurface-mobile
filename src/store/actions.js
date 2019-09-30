import {
  RECEIVE_EVENTID,
  RECEIVE_CAMPAIGNCHANNELID,
  RECEIVE_ACTIVITYALLMESSAGE
} from './mutations-types'
// import {
//   getSinger,
// } from '../api/index'

export default {

  setEventId({commit},res){
    if(res)
      commit(RECEIVE_EVENTID,res)
  },
  setCampaignChannelId({commit},res){
    if(res)
      commit(RECEIVE_CAMPAIGNCHANNELID,res)
  },
  setActivityAllMessage({commit},res){
    if(res)
      commit(RECEIVE_ACTIVITYALLMESSAGE,res)
  },

}
