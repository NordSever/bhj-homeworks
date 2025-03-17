let tabs = document.querySelectorAll('.tab');
let arrayTabs = Array.from(tabs);
let content = document.querySelectorAll('.tab__content');

for (let tab of arrayTabs) {
  tab.addEventListener('click', (event) => {
    // event.preventDefault();
    for(let tabActive of arrayTabs){
      tabActive.classList.remove('tab_active')
    }
    event.target.classList.add('tab_active');
    let indexTab = arrayTabs.indexOf(event.target);
    
    // console.log(indexTab);
    // console.log(content[indexTab]);
    for (let page of content){
      page.classList.remove('tab__content_active');
    }
    content[indexTab].classList.add('tab__content_active');
  })
}