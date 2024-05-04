let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');

function showSlide(index) {
    slideIndex = (index + slideElements.length) % slideElements.length;
    slides.style.transform = `translateX(-${slideIndex * 100 / slideElements.length}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// 자동 슬라이드 기능 추가
setInterval(() => {
    nextSlide();
}, 3000);

// D-Day 계산 기능 추가
const weddingDate = new Date("2024-05-18");
const dDayElement = document.getElementById("d-day");

function calculateDDay() {
    const today = new Date();
    const timeDifference = weddingDate - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    dDayElement.textContent = `D-${daysDifference}`;
}

calculateDDay();
setInterval(calculateDDay, 86400000); // 매일 한 번씩 D-Day 갱신


