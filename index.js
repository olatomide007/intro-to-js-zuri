let showName = document.getElementById("name-switch");
let print_name = document.getElementById("my-name");

let showHeight = document.getElementById("height-switch");
let height = document.getElementById("my-height");

let showCountry = document.getElementById("country-switch");
let country = document.getElementById("my-country")


showName.addEventListener ('click', ()=>{
    print_name.innerHTML = "Ola";
});

showHeight.addEventListener ('click', ()=>{
    height.innerHTML = "84 ft";
});

showCountry.addEventListener ('click', ()=>{
    country.innerHTML = "Nigeria";
});