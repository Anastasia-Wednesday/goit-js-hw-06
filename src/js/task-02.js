const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients')
const ingredientsEl = [];

for (let i = 0; i < ingredients.length; i += 1) {
  let item = ingredients[i]

  const itemEl = document.createElement('li')
  itemEl.textContent = ingredients[i]
  itemEl.classList.add('item')
  

  ingredientsEl.push(itemEl)
}

ingredientsContainerEl.append(...ingredientsEl)