document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("list").addEventListener('click', (e) => {
    let item = e.target;
    if (item && item.nodeName === "LI") {
      item.parentNode.removeChild(item);
      console.log('list item is removed')
    }
  });
})
