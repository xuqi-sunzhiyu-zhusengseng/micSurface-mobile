import ajax from './ajax'
const BASE_URL =''       //'/api'

//判断-模板
export const userIsResgister = ({eventId}) => ajax(BASE_URL+'/Event/EventH5/GetSingle',{eventId},"POST");

