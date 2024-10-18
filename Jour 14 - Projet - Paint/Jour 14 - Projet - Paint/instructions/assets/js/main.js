function selectColor(event) {
    let colorBox = event.target;
    let color = window.getComputedStyle(colorBox).backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor() {
    if (sessionStorage.getItem("selectedColor")) {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}
let paletteColor = {
    "1": "#22f6f3",
    "2": "#3daf7e",
    "3": "#ffffff",
    "4": "#ec8236",
    "5": "#a9a7ee",
    "6": "#ecc606",
    "7": "#f783f2",
    "8": "#e89e80",
    "9": "#007bff",
    "10": "#28a745",
    "11": "#dc3545",
    "12": "#6c757d",
    "13": "#ffc107",
    "14": "#198754",
    "15": "#fd7e14",
    "16": "#000000",
};
let buttonColor = document.querySelectorAll('.color');
let cell = document.querySelectorAll('main div div');
let colors = getSelectedColor();
let couleurChoisi;



function loadPalette(palette) {


    buttonColor.forEach(button => {
        let index = button.dataset.index;


        if (paletteColor[index]) {
            button.style.backgroundColor = paletteColor[index];
        }
    });
}



window.addEventListener("DOMContentLoaded", function() {
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    
    buttonColor.forEach(button => {
        button.addEventListener('click', (event) => {
            selectColor(event);
            colors = getSelectedColor();
        });
    });


    cell.forEach(cellule => {
        cellule.addEventListener('click', (event) => {
            couleurChoisi = event.target.style.backgroundColor;
            if (colors && couleurChoisi !== colors) {
                event.target.style.backgroundColor = colors;
            } else if(couleurChoisi !== '') {
                event.target.style.backgroundColor = '';
            }
        });
    });
    

});
