import {
  RECEIVE_PLATFORM,
} from './mutations-types'
// import {
//   getSinger,
// } from '../api/index'

export default {
  //模板
  setActivityAllMessage({commit},res){
    if(res)
      commit(RECEIVE_PLATFORM,res)
  },
}
