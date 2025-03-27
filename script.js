document.addEventListener('DOMContentLoaded', () => {
  // Список нот, соответствующих вашим клавишам
  const notes = [
    'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5',
    'C4_black', 'D4_black', 'F4_black', 'G4_black', 'A4_black'
  ];
  const sounds = {};

  // Предзагружаем аудиофайлы из папки "sounds" в формате MP3
  notes.forEach(note => {
    sounds[note] = new Audio('sounds/' + note + '.mp3');
  });

  // Функция для воспроизведения звука
  function playSound(note) {
    if (sounds[note]) {
      sounds[note].currentTime = 0; // сброс времени для повторного воспроизведения
      sounds[note].play();
    }
  }

  // Назначаем обработчики событий для всех клавиш
  const keys = document.querySelectorAll('.white-key, .black-key');

  keys.forEach(key => {
    key.addEventListener('mousedown', () => {
      const note = key.getAttribute('data-note');
      playSound(note);
    });

    key.addEventListener('touchstart', (e) => {
      const note = key.getAttribute('data-note');
      playSound(note);
      e.preventDefault();
    });
  });
});

