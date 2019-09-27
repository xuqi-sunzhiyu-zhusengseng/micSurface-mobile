import {
  RECEIVE_PLATFORM,
} from './mutations-types'

export default {
  //模板
  [RECEIVE_PLATFORM](state,platform){
    state.platform = platform
  },
}
