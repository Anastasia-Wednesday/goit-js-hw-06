const categoryTitleEl = document.querySelectorAll('.item > h2')
const categoriesEl = document.querySelector('#categories')
const listUlEl = document.querySelectorAll('.item > ul')

const categoryEl = categoriesEl.children.length;
console.log(`Number of categories: ${categoryEl}`);



const titles = () => {

    let titlesArray = [];
    let itemsArray = [];

    for (let title of categoryTitleEl) {
        titlesArray.push(title.textContent)
    }

    for (let item of listUlEl) {
        itemsArray.push(item.children.length)
    }

    for (const x of Array(categoryEl).keys()) {
        console.log(`Category: ${titlesArray[x]}
        Elements: ${itemsArray[x]}`);
      }
}

titles()
