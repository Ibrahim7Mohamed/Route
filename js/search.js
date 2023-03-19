let Meals = document.getElementById("Meals");

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

async function NameSearch(obj) {
    Meals.innerHTML = ""
    let Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${obj}`)
    Data = await Data.json()
    Data.meals ? showMeals(Data.meals) : showMeals([])
}

async function LetterSearch(obj) {
    Meals.innerHTML = ""
    obj == "" ? obj = "a" : "";
    let Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${obj}`)
    Data = await Data.json()
    Data.meals ? showMeals(Data.meals) : showMeals([])
}

function showMeals(arr) {
    let BlackBox = "";
    for (let i = 0; i < arr.length; i++) {
        BlackBox += `
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
    Meals.innerHTML = BlackBox
}

