document.addEventListener('DOMContentLoaded', function() {
  // Получаем элементы с классами main__button и active__button
const activeButton = document.querySelector('.active__button');
const unactiveButton = document.querySelector('.unactive__button');

// Добавляем обработчик события наведения на элемент mainButton
unactiveButton.addEventListener('mouseover', function() {
  activeButton.classList.remove('active__button');
});

unactiveButton.addEventListener('mouseout', function() {
  activeButton.classList.add('active__button');
});
});