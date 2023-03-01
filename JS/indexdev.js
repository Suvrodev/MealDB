
const LoadMeals=(url)=>{
   // const url='https://www.themealdb.com/api/json/v1/1/search.php?s=fish';
    fetch(url)
    .then(res=>res.json())
    .then(Data=>DisplayMeals(Data.meals))
}

const LoadOneMeal=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>OneMealDetail(data.meals[0]))
}

const OneMealDetail= Data=>{
    console.log("ID: "+Data.idMeal)
    console.log(Data)
    document.getElementById('MealDetailsModalLabel').innerText=Data.strMeal
    document.getElementById('mealpic').innerHTML=`
     <img class="img-fluid" 150px src="${Data.strMealThumb}" >
    `
}

const LoadSpecificmeal=(Data)=>{
    console.log(Data)
    LoadOneMeal(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Data}`)
}

const DisplayMeals=(Data)=>{
    const MealsContainer=document.getElementById('meals_container');
    MealsContainer.innerHTML=''

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

                <button type="button" onclick="LoadSpecificmeal('${data.idMeal}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MealDetailsModal">
                  Show Details
                </button>
                </div>
            </div>
        `

        MealsContainer.appendChild(mealdiv)

    })
}




const SearchButton=document.getElementById('searchbtn');
SearchButton.addEventListener('click',()=>{
    const Text=document.getElementById('searchfield').value;
    console.log(Text)
    LoadMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Text}`)
})