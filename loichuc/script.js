// hiệu ứng gõ chữ
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".text-effect");
    const textContainer = document.querySelector(".text");

    if (textElement && textContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(startTypingEffect, 2000); // Trễ 2 giây trước khi chạy hiệu ứng
                    observer.disconnect(); // Dừng quan sát sau khi chạy một lần
                }
            });
        }, { threshold: 0.5 });

        observer.observe(textContainer);
    }

    function startTypingEffect() {
        const content = textElement.textContent.trim();
        textElement.textContent = "";
        textElement.style.opacity = "1"; // Hiển thị trước khi bắt đầu hiệu ứng

        let i = 0;
        function typeEffect() {
            if (i < content.length) {
                let span = document.createElement("span");
                span.textContent = content[i];
                span.style.opacity = "0";
                span.style.transform = "translateX(-20px)";
                span.style.transition = "opacity 0.2s ease-out, transform 0.2s ease-out";

                textElement.appendChild(span);

                setTimeout(() => {
                    span.style.opacity = "1";
                    span.style.transform = "translateX(0)";
                }, i * 50); // Delay từng chữ cái

                i++;
                setTimeout(typeEffect, 50);
            }
        }
        typeEffect();
    }
});



// hiệu ứng mưa tym
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = '<img src="../img/tym.png" alt="heart image" style="width: 30px; height: 30px;">';
    heart.classList.add("falling-heart");

    // Chọn vùng chứa trái tim (phải có id="heart-container" trong HTML)
    const container = document.getElementById("heart-container");
    container.appendChild(heart);

    // Giới hạn vị trí trái tim chỉ trong vùng chứa
    const containerWidth = container.clientWidth;
    const left = Math.random() * containerWidth;

    // Kích thước và thời gian rơi ngẫu nhiên
    const duration = Math.random() * 3 + 2;
    const size = Math.random() * 20 + 10;

    heart.style.left = `${left}px`;
    heart.style.width = `${size}px`;
    heart.style.animationDuration = `${duration}s`;

    // Xóa trái tim sau khi rơi
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
  }

  setInterval(createHeart, 200);

// Hiệu ứng di chuyển tấm thiệp
$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

// Hiệu ứng mở phong bì
function openEnvelope() {
    let envelope = document.querySelector('.envelope');
    let card = document.querySelector('.card');
    envelope.classList.toggle('show');

    if (envelope.classList.contains('show')) {
        setTimeout(() => {
            card.classList.add('move');
        }, 2500);
    } else {
        card.classList.remove('move');
    }
}


