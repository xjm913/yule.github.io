// 等待页面DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
  // 选择class为container的div元素
  const containerDiv = document.querySelector('.container');
  
  // 检查元素是否存在并隐藏
  if (containerDiv) {
    // 完全隐藏元素（不占据页面空间）
    containerDiv.style.display = 'none';
    console.log('已成功隐藏class为container的div');
  } else {
    console.warn('未找到class为container的div，请检查元素是否存在');
  }
});
