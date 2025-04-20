listElements = document.querySelectorAll('.has-tooltip');

listElements.forEach((item) => {
  // item.style = 'position: relative';
  item.style = 'display: inline-block';
  const tooltip = document.createElement('div');

  item.appendChild(tooltip);
  // item.insertBefore(tooltip,nextSibling)
  tooltip.classList.add('tooltip');
  tooltip.textContent = item.title;
  item.title = '';
  // console.log(tooltip.textContent);
  item.addEventListener('click', (event) => {
    event.preventDefault();
    tooltip.classList.toggle('tooltip_active')
  })
})
// span relative