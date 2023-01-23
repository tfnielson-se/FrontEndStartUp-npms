///////////////////////////////////////////////////////////////////////////////
// GLOBALS
///////////////////////////////////////////////////////////////////////////////
let allCakes = {};
///////////////////////////////////////////////////////////////////////////////
// FETCHES
///////////////////////////////////////////////////////////////////////////////
function getCake(cakeId = 1) {
    fetch(`http://localhost:3000/cakes/${cakeId}`)
    .then(res => res.json())
    .then(cake => {
        renderCake(cake);
    })
}
function getAllCakes() {
    fetch(`http://localhost:3000/cakes`)
    .then(res => res.json())
    .then(data => {
        allCakes = data;
        renderCakeList(allCakes);
    })
}
function updateCake(cake) {
    fetch(`http://localhost:3000/cakes/${cake.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cake)
      })
    .then(res => console.log('res: ', res))
}
///////////////////////////////////////////////////////////////////////////////
// RENDERS
///////////////////////////////////////////////////////////////////////////////
function renderCake(cake) {
    const updateForm = document.querySelector("#description-form");
    updateForm.dataset.cakeId = cake.id;
    updateForm.addEventListener("submit", updateDescription);
    const reviewForm = document.querySelector("#review-form");
    reviewForm.dataset.cakeId = cake.id;
    reviewForm.addEventListener("submit", addReview);
    document.querySelector("#cake-name").textContent = cake.name;
    document.querySelector("#cake-image").src = cake.image_url;
    document.querySelector("#cake-image").alt = cake.name;
    document.querySelector("#cake-description").textContent = cake.description;
    renderReviews(cake.reviews);
}
function renderReviews(reviews = []) {
    const ul = document.querySelector("#review-list");
    const reviewArr = [];
    ul.innerHTML = "";
    
    reviews.forEach(review => {
        let li = document.createElement("li");
        li.textContent = review;
        li.addEventListener("click", () => li.remove())
        reviewArr.push(li);
    })
    ul.append(...reviewArr);
}
function renderCakeList(allCakes = {}) {
    const ul = document.querySelector("#cake-list");
    const cakeArr = [];
    ul.innerHTML = "";
    
    allCakes.forEach(cake => {
        let li = document.createElement("li");
        li.textContent = cake.name;
        li.addEventListener("click", () => renderCake(cake));
        cakeArr.push(li);
    })
    ul.append(...cakeArr);
}
///////////////////////////////////////////////////////////////////////////////
// EVENT HANDLERS
///////////////////////////////////////////////////////////////////////////////
function addReview(e) {
    e.preventDefault();
    const cake = allCakes[e.target.dataset.cakeId - 1];
    cake.reviews.push(document.querySelector("#review").value);
    renderReviews(cake.reviews);
    updateCake(cake);
    e.target.reset();
}
function updateDescription(e) {
    e.preventDefault();
    const cake = allCakes[e.target.dataset.cakeId - 1];
    cake.description = document.querySelector("#description").value;
    renderCake(cake);
    updateCake(cake);
    e.target.reset();
}
///////////////////////////////////////////////////////////////////////////////
// Just because...
///////////////////////////////////////////////////////////////////////////////
function addFavicon() {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = "assets/favicon.png";
    
    document.head.append(link);
}
///////////////////////////////////////////////////////////////////////////////
// INITIALIZATION (<script> defer === true)
///////////////////////////////////////////////////////////////////////////////
getCake(1);
getAllCakes();
addFavicon();
Collapse








// RAMEN MOCK CC //

/// ADV EXTRAS ///

// Rating & Comment Edit //
const editRamen = document.querySelector('#edit-ramen');
editRamen.addEventListener('submit', handleEditSubmit)

function handleEditSubmit(e) {
    e.preventDefault();
    const rating = document.querySelector('#rating-display')
    rating.textContent = e.target['edit-rating'].value
    const comment = document.querySelector('#comment-display')
    comment.textContent = e.target['edit-comment'].value
}

/// CORE ///

// render Ramen
function renderRamen(ramenData) {
    console.log((ramenData.name))
    // display
    const btn = document.createElement('button')
    btn.className = ('ramen-btn')
    const img = document.createElement('img')
    img.src = `${ramenData.image}`
    // append
    btn.appendChild(img)
    document.querySelector('div#ramen-menu').appendChild(btn)
    // event listener
    btn.addEventListener('click', handleClick)
    function handleClick(e) {
        const ramenName = document.querySelector('h2.name')
        ramenName.textContent = `${ramenData.name}`
        const restName = document.querySelector('h3.restaurant')
        restName.textContent = `${ramenData.restaurant}`
        const detailsImg = document.querySelector('img.detail-image')
        detailsImg.src = `${ramenData.image}`
        const rating = document.querySelector('#rating-display')
        rating.textContent = `${ramenData.rating}`
        const comment = document.querySelector('#comment-display')
        comment.textContent = `${ramenData.comment}`
    }
    
    //show ramen // EXTRAS 
    const ramenName = document.querySelector('h2.name')
    ramenName.textContent = (`${ramenData.name}`)
    const restName = document.querySelector('h3.restaurant')
    restName.textContent = `${ramenData.restaurant}`
    const detailsImg = document.querySelector('img.detail-image')
    detailsImg.src = `${ramenData.image}`
    const rating = document.querySelector('#rating-display')
    rating.textContent = `${ramenData.rating}`
    const comment = document.querySelector('#comment-display')
    comment.textContent = `${ramenData.comment}`
}


// new ramen form
const ramenForm = document.querySelector('#new-ramen')
ramenForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    let ramenObj = {
        name: e.target['new-name'].value,
        restaurant: e.target['new-restaurant'].value,
        image: e.target['new-image'].value,
        rating: e.target['new-rating'].value,
        comment: e.target['new-comment'].value,
    }
    renderRamen(ramenObj)
}

// GET
function getRamenJSON() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramens => ramens.forEach((ramenData => renderRamen(ramenData))));
}

// init
function initialize () {
    getRamenJSON();
}

initialize();


// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ 
//     return element * 2 + accumulator
// }, 0)

// console.log(doubledAndSummed);

///////// MAP() //////////

// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];

// const activatedRobots = robots.map(function(robot) {
//   return Object.assign({}, robot, {
//     modes: (robot.modes)*2,
//     isActivated = true;
//   });
// });



//// FETCH () ////

// fetch('http://api.open-notify.org/astros.json')
//     .then(function (response) {
//         console.log(response)
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

//     /// example :

//     // open http://open-notify.org/ incognito and paste bottom into console // 

//     fetch("http://api.open-notify.org/astros.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     console.log(`Holy cow! There are ${data["number"]} humans in space.`);
//   });