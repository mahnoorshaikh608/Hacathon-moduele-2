const supabaseUrl = "https://afaeflhduoqffylpontx.supabase.co"
const supabasekey = "sb_publishable_AtQ8VpU2TTjQdMYhmcfzQA_2iAR9mFn"
const {createClient} = supabase;

const client = createClient(supabaseUrl,supabasekey);

console.log(client);





// ================================
// SEARCH FUNCTION
// ================================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const recipeCards = document.querySelectorAll(".recipe-card");


function searchRecipes() {

    const searchText = searchInput.value.toLowerCase().trim();

    recipeCards.forEach(function (card) {

        const recipeName =
            card.dataset.name.toLowerCase();

        const recipeCategory =
            card.dataset.category.toLowerCase();


        if (
            recipeName.includes(searchText) ||
            recipeCategory.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Search button click

searchBtn.addEventListener("click", function () {

    searchRecipes();

});


// Enter key

searchInput.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {

        searchRecipes();

    }

});


// ================================
// CATEGORY BUTTONS
// ================================

const categories =
    document.querySelectorAll(".category");


categories.forEach(function (category) {

    category.addEventListener("click", function () {

        // Remove active from all

        categories.forEach(function (item) {

            item.classList.remove("active");

        });


        // Add active to clicked category

        category.classList.add("active");


        // Get category name

        const selectedCategory =
            category.innerText.trim().toLowerCase();


        // Show all recipes

        if (selectedCategory === "all") {

            recipeCards.forEach(function (card) {

                card.style.display = "block";

            });

            return;

        }


        // Filter recipes

        recipeCards.forEach(function (card) {

            const cardCategory =
                card.dataset.category.toLowerCase();


            if (cardCategory === selectedCategory) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ================================
// FAVORITE BUTTON
// ================================

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");


favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.innerText === "♡") {

            button.innerText = "♥";

            button.style.color = "#e63950";

        } else {

            button.innerText = "♡";

            button.style.color = "#df5360";

        }

    });

});