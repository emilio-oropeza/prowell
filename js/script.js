// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });

const returnRandom = () => Math.floor(Math.random() * 5) + 1;
const characters = Array.from(document.querySelectorAll('.character_img'));
characters.forEach(character => character.style.animation = `mover ${returnRandom()}s infinite  alternate`)