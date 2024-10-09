

function createButton() {
    const button = document.createElement("button");
    button.innerText = "Test";
    button.classList.add("button-46");

    button.addEventListener("click", () => {
        buttonClicked(Math.floor(Math.random() * 2) + 1);
    })

    const button_holder = document.getElementById("button-holder");
    button_holder.appendChild(button);
};


function buttonClicked(articleID) {

    const random_gothru = (Math.floor(Math.random() * 2) + 1);
    for (let i = 0; i <= random_gothru; i++) {
        createButton();
    };
    console.log(articleID);
    document.getElementById('article-holder').src = matchArticle(articleID);
}




function matchArticle(articleID) {
    switch (articleID) {
        case 1:
            return "./html-files/test-article-1.html"
        case 2:
            return "./html-files/test-article-2.html"
        default:
            return "./html-files/test-article-1.html"
    }
}