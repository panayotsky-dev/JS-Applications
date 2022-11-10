//get information about single recipe by id
//display all information about recipe

export async function showDetailsSection(id){
    [...document.querySelectorAll('section')].forEach(s => s.style.display = 'none');

    const recipe = await getById(id);

    document.getElementById('details-view').style.display = 'block';
    displayRecipe(recipe);
}
export async function getById(id){
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();
    return recipe;
}

export function displayRecipe(recipe){
    document.createElementById('recipe-name').textContent = recipe.name;
    const ingredientFragment = document.createDocumentFragment();

    for(let item of recipe.ingredients){
        const element = document.createElement('li');
        element.textContent = item;
        ingredientFragment.appendChild(element);
    }
    document.getElementById('ingredients-list').replaceChildren(ingredientFragment);
    const stepsFragment = document.createDocumentFragment();

    for(let item of recipe.steps){
        const element = document.createElement('li');
        element.textContent = item;
        ingredientFragment.appendChild(element);
    }
    document.getElementById('ingredients-steps').replaceChildren(ingredientFragment);
}
