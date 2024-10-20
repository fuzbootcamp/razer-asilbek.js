let main = document.querySelector('.main')
const API_KEY = "https://razer-api.onrender.com/devices"


async function readAPI() {
    const response = await fetch(API_KEY)
    const data = await response.json()
    console.log(data);
    htmlga5(data);
}
readAPI();



function htmlga5(newData) {
    let html = ''
    newData.slice(80,100).map((el) => {
        html += `
        <div class="card">
        <img src=${el.image}>
        <h2>${el.name}</h2>
        <p>${el.prise}$</p>
        </div>
        `;
        main.innerHTML = html;

    });

}
