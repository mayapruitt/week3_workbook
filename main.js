const COLORS = ["#E8C73C", "#F49749", "#DD517A", "#9D66F6", "#58ADEA"];

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded.");

    const $repeatButton = document.querySelector(".repeatButton");

    $repeatButton.addEventListener('click', () => {
        const $p = document.createElement('p');

        $p.textContent = "peat";

        document.body.appendChild($p);
    });

    const $removeButton = document.querySelector(".remove__button");
    //const $removeText = document.querySelector(".remove__text");

    $removeButton.addEventListener('click', () => {
        document.querySelector(".remove__text").remove();
        document.querySelector(".remove__button").remove();
    })




    const $changeButton = document.querySelector(".lyricChanger__button");
    const $bkg = document.querySelector(".lyricChanger");
    
    const $newlyric = ["lace thong", "king kong", "spoon tong", "big strong"]

    $changeButton.addEventListener('click', () => {
        document.body.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        document.querySelector(".lyricChanger__text").innerHTML = `I, I love you like a ${$newlyric[Math.floor(Math.random()*$newlyric.length)]} baby.`;
    });
});


/*resources
https://www.w3schools.com/js/default.asp
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
https://developers.google.com/web/updates/2015/01/ES6-Template-Strings
https://javascript.info/async-await


*/



