
const foods = {
    // Indian foods
    idli: { name: "Idli", calories: 58, protein: 2, carbs: 12, fat: 0.4, icon: "🥞" },
    dosa: { name: "Dosa", calories: 168, protein: 4, carbs: 27, fat: 4, icon: "🫓" },
    "masala dosa": { name: "Masala Dosa", calories: 200, protein: 4, carbs: 30, fat: 7, icon: "🫓" },
    "plain dosa": { name: "Plain Dosa", calories: 168, protein: 4, carbs: 27, fat: 4, icon: "🫓" },
    "vada": { name: "Medu Vada", calories: 280, protein: 8, carbs: 30, fat: 14, icon: "🍩" },
    "pongal": { name: "Pongal", calories: 150, protein: 4, carbs: 24, fat: 4, icon: "🥣" },
    "upma": { name: "Upma", calories: 150, protein: 4, carbs: 25, fat: 4, icon: "🥣" },
    "poori": { name: "Poori", calories: 300, protein: 6, carbs: 40, fat: 13, icon: "🫓" },
    "chapati": { name: "Chapati", calories: 297, protein: 9, carbs: 52, fat: 7.5, icon: "🫓" },
    "parotta": { name: "Parotta", calories: 320, protein: 7, carbs: 45, fat: 12, icon: "🫓" },
    "naan": { name: "Naan", calories: 290, protein: 9, carbs: 48, fat: 6, icon: "🫓" },
    "roti": { name: "Roti", calories: 297, protein: 9, carbs: 52, fat: 7.5, icon: "🫓" },
    "biryani": { name: "Chicken Biryani", calories: 180, protein: 9, carbs: 22, fat: 6, icon: "🍛" },
    "veg biryani": { name: "Vegetable Biryani", calories: 160, protein: 4, carbs: 27, fat: 4, icon: "🍛" },
    "curd rice": { name: "Curd Rice", calories: 120, protein: 3, carbs: 20, fat: 3, icon: "🍚" },
    "lemon rice": { name: "Lemon Rice", calories: 180, protein: 3, carbs: 28, fat: 6, icon: "🍋" },
    "sambar": { name: "Sambar", calories: 60, protein: 3, carbs: 9, fat: 1.5, icon: "🥣" },
    "rasam": { name: "Rasam", calories: 35, protein: 1, carbs: 5, fat: 1, icon: "🥣" },
    "paneer butter masala": { name: "Paneer Butter Masala", calories: 220, protein: 8, carbs: 10, fat: 16, icon: "🍛" },
    "dal": { name: "Dal", calories: 120, protein: 7, carbs: 18, fat: 2, icon: "🥣" },
    "chole": { name: "Chole", calories: 160, protein: 8, carbs: 22, fat: 5, icon: "🍛" },
    "samosa": { name: "Samosa", calories: 300, protein: 5, carbs: 32, fat: 17, icon: "🥟" },
    "pakora": { name: "Pakora", calories: 280, protein: 6, carbs: 25, fat: 17, icon: "🍽️" },
    "gulab jamun": { name: "Gulab Jamun", calories: 380, protein: 5, carbs: 55, fat: 15, icon: "🍮" },
    "jalebi": { name: "Jalebi", calories: 400, protein: 4, carbs: 65, fat: 14, icon: "🍥" },

    // Rice, grains and bread
    rice: { name: "Cooked White Rice", calories: 130, protein: 2.7, carbs: 28.2, fat: 0.3, icon: "🍚" },
    "brown rice": { name: "Brown Rice", calories: 123, protein: 2.7, carbs: 25.6, fat: 1, icon: "🍚" },
    oats: { name: "Dry Oats", calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, icon: "🥣" },
    quinoa: { name: "Cooked Quinoa", calories: 120, protein: 4.4, carbs: 21.3, fat: 1.9, icon: "🥣" },
    pasta: { name: "Cooked Pasta", calories: 157, protein: 5.8, carbs: 30.9, fat: 0.9, icon: "🍝" },
    bread: { name: "White Bread", calories: 266, protein: 8.9, carbs: 49, fat: 3.2, icon: "🍞" },
    "whole wheat bread": { name: "Whole Wheat Bread", calories: 247, protein: 13, carbs: 41, fat: 4.2, icon: "🍞" },
    tortilla: { name: "Corn Tortilla", calories: 218, protein: 5.7, carbs: 44.6, fat: 2.9, icon: "🫓" },

    // Fruits
    apple: { name: "Apple", calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2, icon: "🍎" },
    banana: { name: "Banana", calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, icon: "🍌" },
    orange: { name: "Orange", calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, icon: "🍊" },
    mango: { name: "Mango", calories: 60, protein: 0.8, carbs: 15, fat: 0.4, icon: "🥭" },
    grapes: { name: "Grapes", calories: 69, protein: 0.7, carbs: 18.1, fat: 0.2, icon: "🍇" },
    watermelon: { name: "Watermelon", calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, icon: "🍉" },
    pineapple: { name: "Pineapple", calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1, icon: "🍍" },
    papaya: { name: "Papaya", calories: 43, protein: 0.5, carbs: 10.8, fat: 0.3, icon: "🍈" },
    guava: { name: "Guava", calories: 68, protein: 2.6, carbs: 14.3, fat: 1, icon: "🍈" },
    strawberry: { name: "Strawberry", calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, icon: "🍓" },
    avocado: { name: "Avocado", calories: 160, protein: 2, carbs: 8.5, fat: 14.7, icon: "🥑" },
    kiwi: { name: "Kiwi", calories: 61, protein: 1.1, carbs: 14.7, fat: 0.5, icon: "🥝" },

    // Vegetables
    potato: { name: "Boiled Potato", calories: 87, protein: 1.9, carbs: 20.1, fat: 0.1, icon: "🥔" },
    sweetpotato: { name: "Sweet Potato", calories: 86, protein: 1.6, carbs: 20.1, fat: 0.1, icon: "🍠" },
    broccoli: { name: "Broccoli", calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, icon: "🥦" },
    carrot: { name: "Carrot", calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, icon: "🥕" },
    spinach: { name: "Spinach", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, icon: "🥬" },
    tomato: { name: "Tomato", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, icon: "🍅" },
    cucumber: { name: "Cucumber", calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, icon: "🥒" },
    mushroom: { name: "Mushroom", calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, icon: "🍄" },

    // Protein-rich foods
    egg: { name: "Whole Egg", calories: 143, protein: 12.6, carbs: 0.7, fat: 9.5, icon: "🥚" },
    "chicken breast": { name: "Cooked Chicken Breast", calories: 165, protein: 31, carbs: 0, fat: 3.6, icon: "🍗" },
    chicken: { name: "Cooked Chicken", calories: 190, protein: 27, carbs: 0, fat: 9, icon: "🍗" },
    salmon: { name: "Cooked Salmon", calories: 206, protein: 22, carbs: 0, fat: 12, icon: "🐟" },
    tuna: { name: "Tuna", calories: 132, protein: 28, carbs: 0, fat: 1, icon: "🐟" },
    sardines: { name: "Sardines", calories: 208, protein: 25, carbs: 0, fat: 11, icon: "🐟" },
    tofu: { name: "Tofu", calories: 76, protein: 8, carbs: 1.9, fat: 4.8, icon: "🧈" },
    paneer: { name: "Paneer", calories: 265, protein: 18, carbs: 2, fat: 20, icon: "🧀" },
    lentils: { name: "Cooked Lentils", calories: 116, protein: 9, carbs: 20, fat: 0.4, icon: "🥣" },
    chickpeas: { name: "Cooked Chickpeas", calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6, icon: "🫘" },
    almonds: { name: "Almonds", calories: 579, protein: 21.2, carbs: 21.6, fat: 49.9, icon: "🥜" },
    peanuts: { name: "Peanuts", calories: 567, protein: 25.8, carbs: 16.1, fat: 49.2, icon: "🥜" },

    // Chinese and East Asian foods
    sushi: { name: "Sushi", calories: 150, protein: 6, carbs: 30, fat: 1.5, icon: "🍣" },
    ramen: { name: "Ramen", calories: 150, protein: 6, carbs: 20, fat: 5, icon: "🍜" },
    "fried rice": { name: "Fried Rice", calories: 174, protein: 4, carbs: 25, fat: 6, icon: "🍚" },
    "spring roll": { name: "Spring Roll", calories: 200, protein: 4, carbs: 25, fat: 9, icon: "🥟" },
    dumplings: { name: "Dumplings", calories: 220, protein: 9, carbs: 30, fat: 7, icon: "🥟" },
    kimchi: { name: "Kimchi", calories: 15, protein: 1.1, carbs: 2.4, fat: 0.5, icon: "🥬" },
    "miso soup": { name: "Miso Soup", calories: 40, protein: 3, carbs: 5, fat: 1, icon: "🥣" },
    "stir fry": { name: "Vegetable Stir Fry", calories: 100, protein: 3, carbs: 12, fat: 5, icon: "🥦" },

    // Italian and Western foods
    pizza: { name: "Cheese Pizza", calories: 266, protein: 11, carbs: 33, fat: 10, icon: "🍕" },
    burger: { name: "Beef Burger", calories: 295, protein: 17, carbs: 24, fat: 14, icon: "🍔" },
    cheeseburger: { name: "Cheeseburger", calories: 303, protein: 17, carbs: 25, fat: 16, icon: "🍔" },
    lasagna: { name: "Lasagna", calories: 135, protein: 8, carbs: 13, fat: 5, icon: "🍝" },
    "mac and cheese": { name: "Macaroni and Cheese", calories: 164, protein: 6, carbs: 20, fat: 7, icon: "🧀" },
    "french fries": { name: "French Fries", calories: 312, protein: 3.4, carbs: 41, fat: 15, icon: "🍟" },
    hotdog: { name: "Hot Dog", calories: 290, protein: 10, carbs: 24, fat: 18, icon: "🌭" },
    sandwich: { name: "Sandwich", calories: 250, protein: 12, carbs: 30, fat: 9, icon: "🥪" },
    pancakes: { name: "Pancakes", calories: 227, protein: 6, carbs: 28, fat: 10, icon: "🥞" },
    croissant: { name: "Croissant", calories: 406, protein: 8, carbs: 46, fat: 21, icon: "🥐" },
    "ice cream": { name: "Vanilla Ice Cream", calories: 207, protein: 3.5, carbs: 24, fat: 11, icon: "🍨" },
    chocolate: { name: "Milk Chocolate", calories: 535, protein: 7.6, carbs: 59, fat: 30, icon: "🍫" },
    brownie: { name: "Chocolate Brownie", calories: 466, protein: 6, carbs: 54, fat: 24, icon: "🍫" },

    // Mexican and Middle Eastern foods
    taco: { name: "Taco", calories: 226, protein: 9, carbs: 20, fat: 12, icon: "🌮" },
    burrito: { name: "Burrito", calories: 180, protein: 7, carbs: 23, fat: 6, icon: "🌯" },
    nachos: { name: "Nachos", calories: 306, protein: 7, carbs: 32, fat: 17, icon: "🧀" },
    hummus: { name: "Hummus", calories: 166, protein: 8, carbs: 14, fat: 10, icon: "🥣" },
    falafel: { name: "Falafel", calories: 333, protein: 13, carbs: 32, fat: 18, icon: "🧆" },
    "pita bread": { name: "Pita Bread", calories: 275, protein: 9, carbs: 56, fat: 1.2, icon: "🫓" },
    kebab: { name: "Kebab", calories: 220, protein: 20, carbs: 5, fat: 13, icon: "🍢" },
    "greek salad": { name: "Greek Salad", calories: 100, protein: 3, carbs: 6, fat: 7, icon: "🥗" },

    // Drinks and dairy
    milk: { name: "Whole Milk", calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, icon: "🥛" },
    yogurt: { name: "Plain Yogurt", calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, icon: "🥣" },
    "greek yogurt": { name: "Plain Greek Yogurt", calories: 97, protein: 9, carbs: 3.9, fat: 5, icon: "🥣" },
    cheese: { name: "Cheddar Cheese", calories: 403, protein: 25, carbs: 1.3, fat: 33, icon: "🧀" },
    butter: { name: "Butter", calories: 717, protein: 0.9, carbs: 0.1, fat: 81, icon: "🧈" },
    coffee: { name: "Black Coffee", calories: 2, protein: 0.3, carbs: 0, fat: 0, icon: "☕" },
    tea: { name: "Plain Tea", calories: 1, protein: 0, carbs: 0.2, fat: 0, icon: "🍵" },
    "orange juice": { name: "Orange Juice", calories: 45, protein: 0.7, carbs: 10.4, fat: 0.2, icon: "🧃" }
};

const foodSearch = document.getElementById("foodSearch");
const searchButton = document.getElementById("searchButton");
const suggestions = document.getElementById("suggestions");
const searchTab = document.getElementById("searchTab");
const photoTab = document.getElementById("photoTab");
const searchPanel = document.getElementById("searchPanel");
const photoPanel = document.getElementById("photoPanel");
const resultSection = document.getElementById("resultSection");
const servingSize = document.getElementById("servingSize");
const foodImage = document.getElementById("foodImage");
const photoPreview = document.getElementById("photoPreview");

let selectedFood = null;
let currentImageUrl = null;

function showSuggestions() {
    const query = foodSearch.value.trim().toLowerCase();
    suggestions.replaceChildren();

    if (!query) return;

    Object.entries(foods)
        .filter(([key, food]) => key.includes(query) || food.name.toLowerCase().includes(query))
        .slice(0, 6)
        .forEach(([key, food]) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "suggestion";
            button.textContent = food.name;
            button.addEventListener("click", () => {
                foodSearch.value = key;
                searchFood();
            });
            suggestions.appendChild(button);
        });
}

function searchFood() {
    const query = foodSearch.value.trim().toLowerCase();

    if (!query) {
        alert("Please enter a food name.");
        return;
    }

    const match = Object.entries(foods).find(([key, food]) =>
        key === query || food.name.toLowerCase() === query
    );

    if (!match) {
        alert("Food not found. Choose a suggestion or try another food name.");
        return;
    }

    selectedFood = match[1];
    servingSize.value = 100;
    suggestions.replaceChildren();
    displayNutrition();
}

function displayNutrition() {
    if (!selectedFood) return;

    const grams = Number(servingSize.value);

    if (!Number.isFinite(grams) || grams < 1 || grams > 5000) {
        alert("Enter a serving size between 1 and 5000 grams.");
        servingSize.value = 100;
        return;
    }

    const factor = grams / 100;

    document.getElementById("resultFood").textContent = selectedFood.name;
    document.getElementById("resultBasis").textContent = "Nutrition values are based on 100 g reference data.";
    document.querySelector(".food-icon").textContent = selectedFood.icon;
    document.getElementById("calories").textContent = Math.round(selectedFood.calories * factor);
    document.getElementById("servingLabel").textContent = `Estimated calories for ${grams} g`;
    document.getElementById("protein").textContent = `${(selectedFood.protein * factor).toFixed(1)} g`;
    document.getElementById("carbs").textContent = `${(selectedFood.carbs * factor).toFixed(1)} g`;
    document.getElementById("fat").textContent = `${(selectedFood.fat * factor).toFixed(1)} g`;
    resultSection.classList.remove("hidden");
}

function switchTab(tab) {
    const showSearch = tab === "search";

    searchTab.classList.toggle("active", showSearch);
    photoTab.classList.toggle("active", !showSearch);
    searchPanel.classList.toggle("hidden", !showSearch);
    photoPanel.classList.toggle("hidden", showSearch);
}

searchButton.addEventListener("click", searchFood);
foodSearch.addEventListener("keydown", event => {
    if (event.key === "Enter") searchFood();
});
foodSearch.addEventListener("input", showSuggestions);
servingSize.addEventListener("change", displayNutrition);
searchTab.addEventListener("click", () => switchTab("search"));
photoTab.addEventListener("click", () => switchTab("photo"));

document.querySelectorAll(".food-card").forEach(card => {
    card.addEventListener("click", () => {
        foodSearch.value = card.dataset.food;
        switchTab("search");
        searchFood();
        resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

foodImage.addEventListener("change", () => {
    const file = foodImage.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please choose an image file.");
        foodImage.value = "";
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert("Please choose an image smaller than 5 MB.");
        foodImage.value = "";
        return;
    }

    if (currentImageUrl) URL.revokeObjectURL(currentImageUrl);
    currentImageUrl = URL.createObjectURL(file);

    const image = document.createElement("img");
    image.src = currentImageUrl;
    image.alt = "Selected food photo preview";
    photoPreview.replaceChildren(image);
});

window.addEventListener("beforeunload", () => {
    if (currentImageUrl) URL.revokeObjectURL(currentImageUrl);
});
