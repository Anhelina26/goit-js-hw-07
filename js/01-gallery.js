import { galleryItems } from './gallery-items.js';
// Change code below this line

console.dir(galleryItems);
const gallery = document.querySelector('.gallery');


    //  рендеринг сторінки
// 1. Спочатку створимо константу і достукаємось до елемента
// 2. Створимо функцію де зробимо розмітку елемента за допомогою шаблонного рядка 
// 3. Створимо функцію рендерингу сторінки 
//    1. через map перебираємо початковий масив 
//     2. і за допомогою innerHtml(бо у нас немає там іншої розмітки) додаємо елемент до body
    //    3. Викликаємо функцію
    
    // Делегування 
   
    // 1. Потрібно додати обробника подій на той елемент до якого ми достукувались
    // 2.Потому вказану функцію зроби 
    //   1. задати їй preventDefoult
    //   2. задати умову чи туди клікнули?
    //   3. викликати функцію

    // Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй
    //  CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.


    // Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.


    // Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку
    //  модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Функція для створення розмітки елемента галереї
function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
      </a>
    </li>
  `;
}

// Функція для рендерингу розмітки галереї
function renderGalleryItems() {
  const galleryItemsMarkup = galleryItems.map(item => createGalleryItemMarkup(item)).join('');
  gallery.innerHTML = galleryItemsMarkup;
}

// Виклик функції рендерингу галереї
renderGalleryItems();

// Додавання обробників подій для відкриття модального вікна
gallery.addEventListener('click', onGalleryItemClick);

// Функція-обробник події кліку на елементі галереї (делегування)
function onGalleryItemClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;

  const largeImageUrl = target.dataset.source;

  openModalWindow(largeImageUrl);
}


// Функція для відкриття модального вікна
function openModalWindow(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
  `);

  instance.show();
}

// Функція для закриття модального вікна
function closeModalWindow() {
  const instance = basicLightbox.getInstance();
  if (instance) {
    instance.close();
  }
}
