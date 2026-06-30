
// ----------------------------------------------------------------
// section2 — product gallery loop
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
        imgElement.alt = "Nike product";
        imgElement.loading = "lazy";
        imgElement.classList.add("custom-img");
        imageContainer.appendChild(imgElement);
    });
}

// ----------------------------------------------------------------


// services in section3
const services = [
    { img: "imgs/img_6.jpg", tag: "In-Store", title: "Custom Design", text: "Build your own pair from the sole up — colors, materials, and a personal ID stitched onto the tongue." },
    { img: "imgs/img_7.jpg", tag: "Membership", title: "Member Rewards", text: "Earn points on every purchase and unlock early access to limited drops before they sell out." },
    { img: "imgs/img_8.jpg", tag: "In-Store", title: "Trade-In Program", text: "Bring in your worn pairs for store credit, then put it toward your next favorite silhouette." },
    { img: "imgs/img_9.jpg", tag: "In-Store", title: "Fit Consultation", text: "In-store sizing and gait analysis so every shoe you take home actually fits how you move." },
    { img: "imgs/img_6.jpg", tag: "In-Store", title: "Repair & Care", text: "Sole replacements, relacing, and deep cleans to keep your pairs on rotation longer." },
    { img: "imgs/img_7.jpg", tag: "Online", title: "Express Delivery", text: "Order before 2pm and get same-day delivery on in-stock items in select cities." },
    { img: "imgs/img_8.jpg", tag: "Online", title: "Style Advice", text: "Chat with a stylist about pairing a new release with what's already in your rotation." },
    { img: "imgs/img_9.jpg", tag: "Online", title: "Gift Cards", text: "Send a digital gift card in minutes, redeemable in-store or on any online order." },
    { img: "imgs/img_6.jpg", tag: "In-Store", title: "Group Training", text: "Weekly run club and strength sessions led by certified coaches, gear included." },
];

const servicesContainer = document.querySelector(".service-container");

services.forEach(service => {
    const service_container = `
                <div class="service-item">
                    <div class="service hiden">
                        <img src="${service.img}" loading="lazy" alt="${service.title}">
                        <span class="service-tag">${service.tag}</span>
                        <h2>${service.title}</h2>
                        <p>${service.text}</p>
                    </div>
                </div>
    `;
    servicesContainer.insertAdjacentHTML("beforeend", service_container);
});


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
}, { threshold: 0.6 });

document.querySelectorAll(".service-item").forEach(service => {
    observer2.observe(service);
});

// ----------------------------------------------------------------
