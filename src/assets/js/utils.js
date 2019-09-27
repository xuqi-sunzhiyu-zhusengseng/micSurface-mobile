function getUrlParam(name){
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}





