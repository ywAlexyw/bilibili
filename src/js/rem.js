// 设置 rem 函数
function setRem () {
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  // console.log(htmlWidth) = 320
  // 得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0]
  // 设置根元素字体大小
  htmlDom.style.fontSize = htmlWidth / 16 + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  // console.log(document.body.offsetWidth)
  // if (document.body.offsetWidth < 540) {
  // console.log(document.body.offsetWidth)
  setRem()
  // }
  // if (document.body.offsetWidth <= 768 && document.body.offsetWidth > 540) {
  //   let html = document.getElementsByTagName('html')
  //   html.style.fontSize = 48 + 'px'
  // } if (document.body.offsetWidth <= 1024 && document.body.offsetWidth > 768) {
  //   let html = document.getElementsByTagName('html')
  //   html.style.fontSize = 64 + 'px'
  // }
}
