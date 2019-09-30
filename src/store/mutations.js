import {
  RECEIVE_EVENTID,
  RECEIVE_CAMPAIGNCHANNELID,
  RECEIVE_ACTIVITYALLMESSAGE
} from './mutations-types'

export default {
  [RECEIVE_EVENTID](state,eventId){
    state.activityMessage.eventId = eventId
  },
  [RECEIVE_CAMPAIGNCHANNELID](state,campaignChannelId){
    state.activityMessage.campaignChannelId = campaignChannelId
  },
  [RECEIVE_ACTIVITYALLMESSAGE](state,activityAllMessage){
    state.activityAllMessage = activityAllMessage
  },

}
