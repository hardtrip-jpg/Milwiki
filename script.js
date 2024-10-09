function createButton() {
    const button = document.createElement("button");
    button.innerText = "Test";
    button.classList.add("button-46");

    button.addEventListener("click", () => {
        buttonClicked();
    })

    const button_holder = document.getElementById("button-holder");
    button_holder.appendChild(button);
};


function buttonClicked() {

    const random_gothru = (Math.floor(Math.random() * 4));
    for (let i = 0; i < random_gothru; i++) {
        createButton();
    }
}
