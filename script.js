const grid = document.getElementById("grid");
const lbimg = document.getElementById("lb-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const close = document.getElementById("close");
const lightbox = document.getElementById("lightbox");
const filterbtn = document.querySelectorAll(".filters span")

let currentIndex = 0;

const images = [
    {src:"wallhaven-w5l7j7.jpg", label:"Read Head", cat:"Beauty"},
    {src:"wallhaven-3qwx1v.jpg", label:"Asian", cat:"Baddie"},
    {src:"wallhaven-8g58v1.jpg", label:"Seed", cat:"Cute"},
    {src:"download.jpg", label:"Red Head", cat:"Beauty"},
    {src:"feixiao.jpg", label:"Feixiao", cat:"Baddie"},
    {src:"wallhavenlykx7q.png", label:"Sophisticated", cat:"Baddie"},
]

images.forEach((img,i) => {
    const item = document.createElement("div");
    item.className = "image-grid"
    item.innerHTML = `
    <img src="${img.src}">
    <div class="image-info">
        <p class="label"> ${img.label}</p>
        <p class="cat"> ${img.cat}</p>
    </div>
    `;

    item.addEventListener("click" , () =>{
        currentIndex = i;
        lbimg.src = images[i].src;
        lightbox.classList.add("open")

    });
    grid.appendChild(item);
});
prev.addEventListener("click" , () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    lbimg.src = images[currentIndex].src;
});
next.addEventListener("click" , () => {
    currentIndex++;
    if (currentIndex >= images.length){
        currentIndex = 0
    }
    lbimg.src = images[currentIndex].src;
})
close.addEventListener("click", () => {
    lightbox.classList.remove("open");
})
filterbtn.forEach((btn) => {
    btn.addEventListener("click" , () => {
        const filter = btn.textContent;

        document.querySelectorAll(".image-grid").forEach((card,i) => {
            if (filter === "All" || images[i].cat === filter){
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        })
    })
})

