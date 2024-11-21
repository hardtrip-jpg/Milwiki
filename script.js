
let current_state = 0;
let side_1 = false;

function article(name, link){
    this.name = name;
    this.link = link;
}

const article_holder = [
    new article("Milwaukee", "./html-files/article-1.html"),
    new article("Wisconsin Center", "./html-files/article-2.html"),
    new article("American Family Field", "./html-files/article-3.html"),
    new article("Beer", "./html-files/article-4.html"),
    new article("The Hop", "./html-files/article-5.html"),
    new article("Art Museum", "./html-files/article-6.html"),
    new article("Driving", "./html-files/article-7.html"),
    new article("Ancestors", "./html-files/article-8.html")
]

function createButton(articleID) {
    const button = document.createElement("button");

    button.innerText = article_holder[articleID].name;
    button.classList.add("button-46");

    button.addEventListener("click", () => {
        buttonClicked(articleID);
    })

    const button_holder = document.getElementById("button-holder");
    button_holder.appendChild(button);
};


function buttonClicked(articleID) {

    if (current_state > 0){
        const random_gothru = (Math.floor(Math.random() * current_state) + 1);
        for (let i = 0; i <= random_gothru; i++) {
            const random_1 = (Math.floor((Math.random() * article_holder.length)))
            console.log(random_1)
            createButton(random_1);
        }; 
        addSide();
    }

    document.getElementById('article-holder').src = (article_holder[articleID].link);
    current_state++;

    

    
}

function addSide(){

    let random_num = (Math.floor(Math.random() * 20));
    console.log(20 - current_state);
    console.log(random_num);
    if ((20 - current_state) < random_num){


        const random_1 = (Math.floor(Math.random() * 20));
        const random_2 = (Math.floor(Math.random() * 20));

        document.getElementById('side-1').src = article_holder[random_1].link;
        document.getElementById('side-2').src = article_holder[random_2].link;
    }

}

