window.addEventListener('DOMContentLoaded', function() {
  var constructionContent = document.querySelector('.main__content.construction');
  var logisticContent = document.querySelector('.main__content.logistic');

  constructionContent.style.backgroundColor = '#2aaee669';
  constructionContent.style.transition = 'background-color 0.8s ease';

  logisticContent.addEventListener('mouseover', function() {
    constructionContent.style.backgroundColor = '';
    logisticContent.style.backgroundColor = '#2aaee669';
  });

  logisticContent.addEventListener('mouseout', function() {
    constructionContent.style.backgroundColor = '#2aaee669';
    logisticContent.style.backgroundColor = '';
  });
});
