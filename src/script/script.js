document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.image-group img:first-child');
    const smallImages = Array.from(document.querySelectorAll('.image-group img'));

    smallImages.forEach(function(image) {
        image.addEventListener('click', function() {
            mainImage.src = this.src;
            mainImage.alt = this.alt;
            image.classList.add('active');
            const activeImage = document.querySelector('.image-group img.active:not(:first-child)');
            if (activeImage) {
                activeImage.classList.remove('active');
            }
        });
    });

    // Set the first image as active when the page loads
    smallImages[0].classList.add('active');
});

function toggleMenu() {
    const menuButton = document.getElementsByClassName('burger-menu');
    const menu = document.getElementsByClassName('menu')[0];

    if (menuButton[0].classList.contains('cross')) {
        menuButton[0].classList.remove('cross');
        menu.style.display = 'none';
    } else {
        menuButton[0].classList.add('cross');
        menu.style.display = 'block';
    }
}

function closeMenu() {
    const menuButton = document.getElementsByClassName('burger-menu');
    const menu = document.getElementsByClassName('menu')[0];

    menuButton[0].classList.remove('cross');
    menu.style.display = 'none';
}

document.addEventListener('click', function(event) {
    const menuButton = document.getElementsByClassName('burger-menu');
    const menu = document.getElementsByClassName('menu')[0];

    // Проверяем, был ли клик вне зоны меню
    const targetElement = event.target;
    if (!menu.contains(targetElement) && !menuButton[0].contains(targetElement)) {
        menuButton[0].classList.remove('cross');
        menu.style.display = 'none';
    }
});
function increment() {
    let quantityInput = document.querySelector('.quantity input');
    let quantityValue = parseInt(quantityInput.value);

    quantityInput.value = quantityValue + 1;
}

// Функция для декремента значения количества товаров
function decrement() {
    let quantityInput = document.querySelector('.quantity input');
    let quantityValue = parseInt(quantityInput.value);

    if (quantityValue > 1) {
        quantityInput.value = quantityValue - 1;
    }
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Обработчик событий для кнопки "Buy in 1 Click"
const buyOneClickButton = document.querySelector('.buy-one-click');
buyOneClickButton.addEventListener('click', function() {
    openModal();
});

// Обработчик событий для кнопки закрытия модального окна
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    closeModal();
});

// Обработчик событий для щелчка вне модального окна
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Обработчик событий для кнопки Submit в модальном окне
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', function() {
    // Дополнительный код для обработки отправки данных из модального окна
    // ...

    // Закрытие модального окна после отправки данных
    closeModal();
});