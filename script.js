
// ----------------------------------------------------------------
// section2
const imgs = [
    "imgs/i.webp",
    "imgs/img_6.jpg",
    "imgs/img_1.webp",
    "imgs/maxresdefault.jpg",
    "imgs/Nike-Air-Force-1-Low-Reflective-Swoosh-CV3039-100-0-1024x608_w1160.jpg"
];

const imageContainer = document.querySelector(".image-container");


const repeatCount = 3; 
for (let i = 0; i < repeatCount; i++) {
    imgs.forEach(src => { 
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.classList.add("custom-img");
        imageContainer.appendChild(imgElement);
    });
}

// ----------------------------------------------------------------


// services in section3
const imag_list = [
    "imgs/img_6.jpg",
    "imgs/img_7.jpg",
    "imgs/img_8.jpg",
    "imgs/img_9.jpg",
    "imgs/img_6.jpg",
    "imgs/img_7.jpg",
    "imgs/img_8.jpg",
    "imgs/img_9.jpg",
    "imgs/img_6.jpg",
]

const section3 = document.querySelector(".service-container")
let x = 1;

imag_list.forEach(img => {
    const service_container = `
                <div class="service-item">
                    <div class="service hiden ">
                        <img src="${img}" loading="lazy" alt="service image">
                        <h2>Service ${x}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur nisi. Nulla facilisi. Sed euismod, velit vel efficitur tristique, velit tellus faucibus diam, in tempus justo nisi id ex.</p>
                    </div>
                </div>
    `
    section3.insertAdjacentHTML("beforeend", service_container)
    x++;
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hiden"); 
            entry.target.classList.add("visible"); 
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.6 }); 

document.querySelectorAll(".hiden").forEach(service => {
    observer.observe(service);
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible2"); 
            observer2.unobserve(entry.target); 
        }
    });
}, { threshold: 0.6}); 

document.querySelectorAll(".service-item").forEach(service => {
    observer2.observe(service);
});

// ----------------------------------------------------------------
