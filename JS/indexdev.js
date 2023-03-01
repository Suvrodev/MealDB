
const LoadMeals=()=>{
    const url='https://www.themealdb.com/api/json/v1/1/search.php?s=fish';
    fetch(url)
    .then(res=>res.json())
    .then(Data=>DisplayMeals(Data.meals))
}

const DisplayMeals=(Data)=>{
    const MealsContainer=document.getElementById('meals_container');

    Data.forEach(data=>{
        console.log(data.strMeal)

        const mealdiv=document.createElement('div')
        mealdiv.classList.add('col')
        mealdiv.innerHTML=`
            <div class="card h-100">
                <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title"> ${data.strMeal} </h5>
                <p class="card-text"> ${data.strInstructions} </p>
                </div>
            </div>
        `

        MealsContainer.appendChild(mealdiv)

    })
}

LoadMeals()