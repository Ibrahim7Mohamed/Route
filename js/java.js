let Meals = document.getElementById("Meals");

$(document).ready(() => {
    getMeals().then(() => {
        $(".loading-screen").fadeOut(500);
    });
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

async function getMeals() {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    data = await data.json()
    showMeals(data.meals)
}

function showMeals(array) {
    let BlackBox = "";
    for (let i = 0; i < array.length; i++) {
        BlackBox += `
        <div class="col-md-3">
                <div onclick="getMealDetails('${array[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${array[i].strMealThumb}" alt="" srcset="">
                    <div class="layer position-absolute d-flex justify-content-center align-items-center text-black p-2">
                        <h3>${array[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `;
    }
    Meals.innerHTML = BlackBox;
}
