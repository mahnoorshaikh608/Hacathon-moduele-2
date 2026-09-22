// ===============================
// RecipeHub - All Recipe JavaScript
// ===============================


// ===============================
// Recipe Data
// ===============================

let recipes = [
    {
        id: 1,
        name: "Classic Cheese Burger",
        category: "Burger",
        icon: "🍔",
        description: "Juicy beef burger with melted cheese, fresh vegetables and special sauce.",
        time: "30 min",
        rating: "4.8"
    },

    {
        id: 2,
        name: "Chicken Biryani",
        category: "Biryani",
        icon: "🍚",
        description: "Spicy and aromatic chicken biryani cooked with fragrant basmati rice.",
        time: "50 min",
        rating: "4.9"
    },

    {
        id: 3,
        name: "Cheesy Pizza",
        category: "Pizza",
        icon: "🍕",
        description: "Crispy homemade pizza topped with cheese, vegetables and delicious sauce.",
        time: "35 min",
        rating: "4.7"
    },

    {
        id: 4,
        name: "Creamy Pasta",
        category: "Pasta",
        icon: "🍝",
        description: "Creamy white sauce pasta with herbs and delicious cheesy flavour.",
        time: "25 min",
        rating: "4.6"
    },

    {
        id: 5,
        name: "Fresh Healthy Salad",
        category: "Healthy",
        icon: "🥗",
        description: "Fresh vegetables with a light dressing for a healthy and refreshing meal.",
        time: "15 min",
        rating: "4.5"
    },

    {
        id: 6,
        name: "Chocolate Cake",
        category: "Dessert",
        icon: "🍰",
        description: "Soft and delicious chocolate cake perfect for every sweet craving.",
        time: "45 min",
        rating: "4.9"
    }
];


// ===============================
// HTML Elements
// ===============================

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const recipeCount = document.getElementById("recipeCount");

const categoryButtons = document.querySelectorAll(".category");


// Add Recipe Modal
const modal = document.getElementById("recipeModal");

const recipeNameInput = document.getElementById("recipeName");
const recipeCategoryInput = document.getElementById("recipeCategory");
const recipeDescriptionInput = document.getElementById("recipeDescription");

const saveButton = document.querySelector(".save-btn");


// View Recipe Modal
const viewModal = document.getElementById("viewRecipeModal");
const viewCloseBtn = document.getElementById("viewCloseBtn");

const viewFoodIcon = document.getElementById("viewFoodIcon");
const viewCategory = document.getElementById("viewCategory");
const viewRecipeName = document.getElementById("viewRecipeName");
const viewRecipeDescription = document.getElementById("viewRecipeDescription");
const viewRecipeTime = document.getElementById("viewRecipeTime");
const viewRecipeRating = document.getElementById("viewRecipeRating");


// ===============================
// Edit Mode
// ===============================

let editingRecipeId = null;


// ===============================
// Display Recipes
// ===============================

function displayRecipes(recipeList) {

    recipeContainer.innerHTML = "";

    recipeCount.textContent = recipeList.length + " Recipes";


    recipeList.forEach(function(recipe) {

        // Recipe Card
        const card = document.createElement("div");
        card.classList.add("recipe-card");


        // ===============================
        // Image Section
        // ===============================

        const imageSection = document.createElement("div");
        imageSection.classList.add("recipe-image");


        const categoryTag = document.createElement("span");
        categoryTag.classList.add("category-tag");
        categoryTag.textContent = recipe.category;


        const foodIcon = document.createElement("div");
        foodIcon.classList.add("food-icon");
        foodIcon.textContent = recipe.icon;


        // Heart Button
        const heartButton = document.createElement("button");
        heartButton.classList.add("heart-btn");


        const heartIcon = document.createElement("i");
        heartIcon.classList.add("bi", "bi-heart");


        heartButton.appendChild(heartIcon);


        imageSection.appendChild(categoryTag);
        imageSection.appendChild(foodIcon);
        imageSection.appendChild(heartButton);


        // ===============================
        // Content Section
        // ===============================

        const content = document.createElement("div");
        content.classList.add("recipe-content");


        const title = document.createElement("h3");
        title.textContent = recipe.name;


        const description = document.createElement("p");
        description.textContent = recipe.description;


        // Recipe Info
        const info = document.createElement("div");
        info.classList.add("recipe-info");


        const time = document.createElement("span");
        time.textContent = "⏱ " + recipe.time;


        const rating = document.createElement("span");
        rating.textContent = "⭐ " + recipe.rating;


        info.appendChild(time);
        info.appendChild(rating);


        // ===============================
        // View Button
        // ===============================

        const viewButton = document.createElement("button");
        viewButton.classList.add("view-btn");
        viewButton.textContent = "View Recipe →";


        // ===============================
        // Edit Button
        // ===============================

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";


        // ===============================
        // Delete Button
        // ===============================

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";


        // ===============================
        // Add Content
        // ===============================

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(info);

        content.appendChild(viewButton);
        content.appendChild(editButton);
        content.appendChild(deleteButton);


        card.appendChild(imageSection);
        card.appendChild(content);

        recipeContainer.appendChild(card);


        // ===============================
        // VIEW RECIPE
        // ===============================

        viewButton.addEventListener("click", function() {

            showRecipe(recipe);

        });


        // ===============================
        // EDIT RECIPE
        // ===============================

        editButton.addEventListener("click", function() {

            editingRecipeId = recipe.id;

            recipeNameInput.value = recipe.name;
            recipeCategoryInput.value = recipe.category;
            recipeDescriptionInput.value = recipe.description;

            saveButton.textContent = "Update Recipe";

            modal.style.display = "flex";

        });


        // ===============================
        // DELETE RECIPE
        // ===============================

        deleteButton.addEventListener("click", function() {

            const confirmDelete = confirm(
                "Are you sure you want to delete " + recipe.name + "?"
            );


            if (confirmDelete) {

                recipes = recipes.filter(function(item) {

                    return item.id !== recipe.id;

                });


                displayRecipes(recipes);

            }

        });


        // ===============================
        // HEART BUTTON
        // ===============================

        heartButton.addEventListener("click", function() {

            heartIcon.classList.toggle("bi-heart");
            heartIcon.classList.toggle("bi-heart-fill");

        });

    });

}


// ===============================
// SHOW VIEW RECIPE
// ===============================

function showRecipe(recipe) {

    viewFoodIcon.textContent = recipe.icon;

    viewCategory.textContent = recipe.category;

    viewRecipeName.textContent = recipe.name;

    viewRecipeDescription.textContent = recipe.description;

    viewRecipeTime.textContent = "⏱ " + recipe.time;

    viewRecipeRating.textContent = "⭐ " + recipe.rating;


    viewModal.style.display = "flex";

}


// ===============================
// CLOSE VIEW RECIPE
// ===============================

viewCloseBtn.addEventListener("click", function() {

    viewModal.style.display = "none";

});


// ===============================
// Close View Modal Outside
// ===============================

viewModal.addEventListener("click", function(event) {

    if (event.target === viewModal) {

        viewModal.style.display = "none";

    }

});


// ===============================
// SEARCH RECIPE
// ===============================

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();


    const filteredRecipes = recipes.filter(function(recipe) {

        return (
            recipe.name.toLowerCase().includes(searchValue) ||
            recipe.category.toLowerCase().includes(searchValue)
        );

    });


    displayRecipes(filteredRecipes);

});


// ===============================
// CATEGORY FILTER
// ===============================

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        categoryButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const categoryName = button.textContent
            .replace("🍔", "")
            .replace("🍚", "")
            .replace("🍕", "")
            .replace("🍝", "")
            .replace("🥗", "")
            .replace("🍰", "")
            .trim();


        if (categoryName === "All") {

            displayRecipes(recipes);

        } else {

            const filteredRecipes = recipes.filter(function(recipe) {

                return (
                    recipe.category === categoryName ||
                    (
                        categoryName === "Desserts" &&
                        recipe.category === "Dessert"
                    )
                );

            });


            displayRecipes(filteredRecipes);

        }

    });

});


// ===============================
// OPEN ADD RECIPE MODAL
// ===============================

function openAddRecipe() {

    editingRecipeId = null;


    recipeNameInput.value = "";
    recipeCategoryInput.value = "";
    recipeDescriptionInput.value = "";


    saveButton.textContent = "Save Recipe";


    modal.style.display = "flex";

}


// ===============================
// CLOSE ADD RECIPE MODAL
// ===============================

function closeAddRecipe() {

    modal.style.display = "none";


    editingRecipeId = null;


    recipeNameInput.value = "";
    recipeCategoryInput.value = "";
    recipeDescriptionInput.value = "";


    saveButton.textContent = "Save Recipe";

}


// ===============================
// SAVE / UPDATE RECIPE
// ===============================

saveButton.addEventListener("click", function() {

    const name = recipeNameInput.value.trim();

    const category = recipeCategoryInput.value.trim();

    const description = recipeDescriptionInput.value.trim();


    // Check Empty Fields
    if (
        name === "" ||
        category === "" ||
        description === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    // ===============================
    // UPDATE RECIPE
    // ===============================

    if (editingRecipeId !== null) {

        const recipe = recipes.find(function(item) {

            return item.id === editingRecipeId;

        });


        recipe.name = name;

        recipe.category = category;

        recipe.description = description;


        alert("Recipe updated successfully!");

    }


    // ===============================
    // ADD NEW RECIPE
    // ===============================

    else {

        const newRecipe = {

            id: Date.now(),

            name: name,

            category: category,

            icon: getCategoryIcon(category),

            description: description,

            time: "30 min",

            rating: "5.0"

        };


        recipes.push(newRecipe);


        alert("Recipe added successfully!");

    }


    displayRecipes(recipes);

    closeAddRecipe();

});


// ===============================
// GET CATEGORY ICON
// ===============================

function getCategoryIcon(category) {

    const value = category.toLowerCase();


    if (value.includes("burger")) {

        return "🍔";

    }


    if (value.includes("biryani")) {

        return "🍚";

    }


    if (value.includes("pizza")) {

        return "🍕";

    }


    if (value.includes("pasta")) {

        return "🍝";

    }


    if (value.includes("healthy")) {

        return "🥗";

    }


    if (
        value.includes("dessert") ||
        value.includes("cake")
    ) {

        return "🍰";

    }


    return "🍴";

}


// ===============================
// CLOSE ADD MODAL OUTSIDE
// ===============================

window.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeAddRecipe();

    }

});


// ===============================
// FIRST DISPLAY
// ===============================

displayRecipes(recipes);