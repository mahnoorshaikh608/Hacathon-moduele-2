const supabaseUrl = "https://afaeflhduoqffylpontx.supabase.co"
const supabasekey = "sb_publishable_AtQ8VpU2TTjQdMYhmcfzQA_2iAR9mFn"
const {createClient} = supabase;

const client = createClient(supabaseUrl,supabasekey);

console.log(client);

let submit = document.querySelector("#submitbtn")


// console.log(username);
// console.log(useremail);
// console.log(userpassword);

if(submit) {

let  username = document.querySelector("#username");
let  useremail = document.querySelector("#useremail");
let  userpassword = document.querySelector("#userpassword");

submit.addEventListener ("click", async(event)=>{
    event.preventDefault()
    if (!username.value || !useremail.value || !userpassword.value){
        // alert("please fill all fields");
        // return;
    }
    try{
const { data ,error } = await client
  .from('profiles')
  .insert([{
    name : username.value,
    email : useremail.value,

   }]);
username.value=""
useremail.value=""
userpassword.value=""

window.location.href = "./dashboard.html"

}
catch(error){
    console.log(error)
};
});
}

function showOptions() {
    document.getElementById("options").style.display = "block";
}

function logout() {
    window.location.href = "logout.html";
}







/* =========================================
   RECIPEHUB DASHBOARD JAVASCRIPT
   ========================================= */


/* =========================================
   ELEMENTS
   ========================================= */

   const searchInput = document.getElementById("searchInput");
   const recipeContainer = document.getElementById("recipeContainer");
   
   const addRecipeBtn = document.getElementById("addRecipeBtn");
   const addRecipeMenu = document.getElementById("addRecipeMenu");
   
   const logoutBtn = document.getElementById("logoutBtn");
   
   const totalRecipes = document.getElementById("totalRecipes");
   const myRecipes = document.getElementById("myRecipes");
   const favoriteRecipes = document.getElementById("favoriteRecipes");
   
   
   /* =========================================
      SEARCH RECIPES
      ========================================= */
   
   if (searchInput) {
   
       searchInput.addEventListener("input", function () {
   
           const searchValue = this.value.toLowerCase().trim();
   
           const recipeCards =
               document.querySelectorAll(".recipe-card");
   
           recipeCards.forEach(function (card) {
   
               const recipeName =
                   card.querySelector("h3").textContent.toLowerCase();
   
               const recipeCategory =
                   card.querySelector(".recipe-tag").textContent.toLowerCase();
   
               if (
                   recipeName.includes(searchValue) ||
                   recipeCategory.includes(searchValue)
               ) {
   
                   card.style.display = "block";
   
               } else {
   
                   card.style.display = "none";
   
               }
   
           });
   
       });
   
   }
   
   
   /* =========================================
      ADD RECIPE
      ========================================= */
   
   function addNewRecipe() {
   
       const recipeName = prompt(
           "Enter recipe name:"
       );
   
       if (!recipeName || recipeName.trim() === "") {
           return;
       }
   
   
       const category = prompt(
           "Enter recipe category:"
       );
   
       if (!category || category.trim() === "") {
           return;
       }
   
   
       const time = prompt(
           "Enter cooking time: e.g. 30 min"
       );
   
       if (!time || time.trim() === "") {
           return;
       }
   
   
       const image = prompt(
           "Enter image path: e.g. ./images/pasta.jpg"
       );
   
       if (!image || image.trim() === "") {
           return;
       }
   
   
       /* Create Card */
   
       const recipeCard = document.createElement("div");
   
       recipeCard.className = "recipe-card";
   
   
       recipeCard.innerHTML = `
   
           <div class="recipe-image">
   
               <img
                   src="${image}"
                   alt="${recipeName}"
               >
   
               <button class="favorite-btn">
                   <i class="bi bi-heart"></i>
               </button>
   
           </div>
   
   
           <div class="recipe-details">
   
               <span class="recipe-tag">
                   ${category}
               </span>
   
               <h3>
                   ${recipeName}
               </h3>
   
   
               <div class="recipe-meta">
   
                   <span>
                       <i class="bi bi-clock"></i>
                       ${time}
                   </span>
   
                   <span>
                       <i class="bi bi-star-fill"></i>
                       5.0
                   </span>
   
               </div>
   
   
               <div class="card-buttons">
   
                   <button class="edit-btn">
                       <i class="bi bi-pencil"></i>
                       Edit
                   </button>
   
                   <button class="delete-btn">
                       <i class="bi bi-trash3"></i>
                       Delete
                   </button>
   
               </div>
   
           </div>
   
       `;
   
   
       recipeContainer.appendChild(recipeCard);
   
   
       updateRecipeCount();
   
   }
   
   
   /* =========================================
      ADD BUTTONS
      ========================================= */
   
   if (addRecipeBtn) {
   
       addRecipeBtn.addEventListener(
           "click",
           addNewRecipe
       );
   
   }
   
   
   if (addRecipeMenu) {
   
       addRecipeMenu.addEventListener(
           "click",
           function (event) {
   
               event.preventDefault();
   
               addNewRecipe();
   
           }
       );
   
   }
   
   
   /* =========================================
      DELETE RECIPE
      ========================================= */
   
   recipeContainer.addEventListener(
       "click",
       function (event) {
   
           const deleteButton =
               event.target.closest(".delete-btn");
   
   
           if (!deleteButton) {
               return;
           }
   
   
           const card =
               deleteButton.closest(".recipe-card");
   
   
           const recipeName =
               card.querySelector("h3").textContent;
   
   
           const confirmDelete =
               confirm(
                   `Are you sure you want to delete "${recipeName}"?`
               );
   
   
           if (confirmDelete) {
   
               card.remove();
   
               updateRecipeCount();
   
           }
   
       }
   );
   
   
   /* =========================================
      EDIT RECIPE
      ========================================= */
   
   recipeContainer.addEventListener(
       "click",
       function (event) {
   
           const editButton =
               event.target.closest(".edit-btn");
   
   
           if (!editButton) {
               return;
           }
   
   
           const card =
               editButton.closest(".recipe-card");
   
   
           const title =
               card.querySelector("h3");
   
   
           const category =
               card.querySelector(".recipe-tag");
   
   
           const oldName =
               title.textContent;
   
   
           const oldCategory =
               category.textContent;
   
   
           const newName =
               prompt(
                   "Edit recipe name:",
                   oldName
               );
   
   
           if (newName && newName.trim() !== "") {
   
               title.textContent =
                   newName.trim();
   
           }
   
   
           const newCategory =
               prompt(
                   "Edit category:",
                   oldCategory
               );
   
   
           if (newCategory && newCategory.trim() !== "") {
   
               category.textContent =
                   newCategory.trim();
   
           }
   
       }
   );
   
   
   /* =========================================
      FAVORITE RECIPE
      ========================================= */
   
   recipeContainer.addEventListener(
       "click",
       function (event) {
   
           const favoriteButton =
               event.target.closest(".favorite-btn");
   
   
           if (!favoriteButton) {
               return;
           }
   
   
           const icon =
               favoriteButton.querySelector("i");
   
   
           if (icon.classList.contains("bi-heart")) {
   
               icon.classList.remove("bi-heart");
   
               icon.classList.add("bi-heart-fill");
   
               favoriteButton.style.color =
                   "#ef3c5d";
   
   
               updateFavoriteCount(1);
   
           } else {
   
               icon.classList.remove("bi-heart-fill");
   
               icon.classList.add("bi-heart");
   
               updateFavoriteCount(-1);
   
           }
   
       }
   );
   
   
   /* =========================================
      FAVORITE COUNT
      ========================================= */
   
   function updateFavoriteCount(change) {
   
       let current =
           parseInt(
               favoriteRecipes.textContent
           );
   
   
       current += change;
   
   
       if (current < 0) {
           current = 0;
       }
   
   
       favoriteRecipes.textContent =
           current;
   
   }
   
   
   /* =========================================
      TOTAL RECIPE COUNT
      ========================================= */
   
   function updateRecipeCount() {
   
       const cards =
           document.querySelectorAll(
               ".recipe-card"
           );
   
   
       totalRecipes.textContent =
           cards.length;
   
   
       myRecipes.textContent =
           String(cards.length).padStart(2, "0");
   
   }
   
   
   /* =========================================
      LOGOUT
      ========================================= */
   
   if (logoutBtn) {
   
       logoutBtn.addEventListener(
           "click",
           function () {
   
               const confirmLogout =
                   confirm(
                       "Are you sure you want to logout?"
                   );
   
   
               if (confirmLogout) {
   
                   alert(
                       "You have been logged out successfully."
                   );
   
                   /*
                      Agar tumhare paas login page hai
                      to yahan ye use kar sakti ho:
   
                      window.location.href = "login.html";
                   */
   
               }
   
           }
       );
   
   }
   
   
   /* =========================================
      QUICK ACTIONS
      ========================================= */
   
   const quickCards =
       document.querySelectorAll(
           ".quick-card"
       );
   
   
   quickCards.forEach(function (card) {
   
       card.addEventListener(
           "click",
           function () {
   
               const actionName =
                   card.querySelector("strong")
                       .textContent
                       .trim();
   
   
               if (actionName === "Add Recipe") {
   
                   addNewRecipe();
   
               }
   
   
               else if (actionName === "Favorites") {
   
                   alert(
                       "Your favorite recipes are shown with the heart icon."
                   );
   
               }
   
   
               else if (actionName === "Categories") {
   
                   document
                       .querySelector(".categories-section")
                       .scrollIntoView({
                           behavior: "smooth"
                       });
   
               }
   
   
               else if (actionName === "My Recipes") {
   
                   document
                       .querySelector(".recent-section")
                       .scrollIntoView({
                           behavior: "smooth"
                       });
   
               }
   
           }
       );
   
   });
   
   
   /* =========================================
      NOTIFICATION
      ========================================= */
   
   const notificationBtn =
       document.querySelector(
           ".notification-btn"
       );
   
   
   if (notificationBtn) {
   
       notificationBtn.addEventListener(
           "click",
           function () {
   
               alert(
                   "You have 3 new notifications."
               );
   
           }
       );
   
   }
   
   
   /* =========================================
      EXPLORE RECIPES BUTTON
      ========================================= */
   
   const exploreButton =
       document.querySelector(
           ".inspiration-box button"
       );
   
   
   if (exploreButton) {
   
       exploreButton.addEventListener(
           "click",
           function () {
   
               window.location.href =
                   "all-recipes.html";
   
           }
       );
   
   }
   
   
   /* =========================================
      INITIAL COUNT
      ========================================= */
   
   updateRecipeCount();