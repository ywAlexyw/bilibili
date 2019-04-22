// 设置 rem 函数
function setRem () {
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  // console.log(htmlWidth) = 320
  // 得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0]
  // 设置根元素字体大小
  htmlDom.style.fontSize = htmlWidth / 20 + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  // console.log(document.body.offsetWidth)
  // if (document.body.offsetWidth < 540) {
  // console.log(document.body.offsetWidth)
  // }
  // console.log(0)
  // if (document.body.offsetWidth >= 320 && document.body.offsetWidth < 640) {
  //   setRem()
  // } else if (document.body.offsetWidth > 640) {
  //   console.log(1)
  //   let html = document.getElementsByTagName('html')[0]
  //   html.style.fontSize = 40 + 'px'
  // } else if (document.body.offsetWidth < 320) {
  //   let html = document.getElementsByTagName('html')[0]
  //   html.style.fontSize = 20 + 'px'
  // }
  setRem()
}
