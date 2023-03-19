let Meals = document.getElementById("Meals");

$(document).ready(() => {
    getCategories();
});

$(".nav-menu").animate({ left: -$(".nav-tab").innerWidth() }, 0)
$(".nav-menu i.fa-bars").click(function () {
    if ($(".nav-menu").css("left") == "0px") {
        let NavWidth = $(".nav-menu .nav-tab").outerWidth();
        $(".nav-menu").animate({ left: -NavWidth, }, 750);
        $(".fa-bars").addClass("fa-align-justify");
        $(".fa-bars").removeClass("fa-x");
    } else {
        $(".nav-menu").animate({ left: 0, }, 750);
        $(".fa-bars").removeClass("fa-align-justify");
        $(".fa-bars").addClass("fa-x");
    }
})

async function getCategories() {
    Meals.innerHTML = "";
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    data = await data.json();
    showCategories(data.categories);
}

function showCategories(array) {
    let blackBox = "";
    for (let i = 0; i < array.length; i++) {
        blackBox += `
        <div class="col-md-3">
                <div onclick="CatMeals('${array[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${array[i].strCategoryThumb}" alt="" srcset="">
                    <div class="layer position-absolute text-center text-black p-2">
                        <h3>${array[i].strCategory}</h3>
                        <p>${array[i].strCategoryDescription}</p>
                    </div>
                </div>
        </div>`;
    }
    Meals.innerHTML = blackBox;
}

async function CatMeals(category) {
    Meals.innerHTML = ""
    let Data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    Data = await Data.json()
    showMeals(Data.meals.slice(0, 20))

}

function showMeals(arr) {
    let blackBox = "";
    for (let i = 0; i < arr.length; i++) {
        blackBox += `
        <div class="col-md-3">
                <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                    <div class="layer position-absolute d-flex justify-content-center align-items-center text-black p-2">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }
    Meals.innerHTML = blackBox
}