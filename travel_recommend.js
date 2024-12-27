const search_bar = document.getElementById('search-bar');
const search_btn = document.getElementById('search-btn');
const search_result = document.getElementById('result')

let data = [];
data.beaches = [];
data.temples = [];
data.countries = [];
fetch('travel_recommendation_api.json')
    .then(rs => rs.json())
    .then(rs => {
        data = rs;
        console.log(data);
    });

search_btn.addEventListener('click', () => {
    let term = search_bar.value.toLowerCase()

    search_result.innerHTML = '';
    search_result.style.width = '35%';

    if (term.includes('beach')) {
       data.beaches.forEach(n => addcard(n));
    } else if (term.includes('temple')){
        data.temples.forEach(n => addcard(n));
    } else if (term.includes('countr')){
        data.countries.forEach(n => n.cities.forEach(m => addcard(m)));
    }
});

function addcard(place){
    search_result.innerHTML +=
        `
            <div class="result-card m-2 p-2 bg-light rounded-2">
                <img src="${place.imageUrl}"
                     alt="${place.name}" width="100%" class="rounded-2 mb-2">
                <h4> ${place.name} </h4>
                <small> ${place.description} </small>
            </div>
        `;
}