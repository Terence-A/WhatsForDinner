const randBtn = document.querySelector("#randBtn");
const display = document.querySelector("#display");
const veganImage = document.querySelector(".vegan-image");
const description = document.querySelector("#description");
const veganRecipeList = document.querySelector("#vegan-recipe");
const veganIngredientList = document.querySelector("#vegan-ingredient-list");
const vgIngTitle = document.querySelector("#vg-ing-title");
const vgRecTitle = document.querySelector("#vg-rec-title");
let ing = "";
// let num = "";
// let step = 1;

randBtn.addEventListener("click", function () {
  let randomRecipe = Math.floor(Math.random() * 300) + 1;
  const url = `https://the-vegan-recipes-db.p.rapidapi.com/${randomRecipe}?rapidapi-key=a849f1b857msh721556f52b05562p17c59ajsn2cdc343edbaa&rapidapi-host=the-vegan-recipes-db.p.rapidapi.com`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      display.textContent = data.title;
      description.textContent = data.description;
      veganImage.src = data.image;
      vgIngTitle.textContent = "Ingredients";
      vgRecTitle.textContent = "Instructions";

      for (let i = 0; i < data.ingredients.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = data.ingredients[i];
        veganIngredientList.appendChild(newLi);
      }
      for (let j = 0; j < data.method.length; j++) {
        let Li = document.createElement("li");
        step = j + 1;
        ing = data.method[j];
        let recLi = ing[`Step ${step}`];
        console.log(recLi);
        Li.innerText = `Step${j + 1}: ${recLi}`;
        veganRecipeList.appendChild(Li);
      }
    })
    .catch((e) => {
      console.log("error", e);
    });
});