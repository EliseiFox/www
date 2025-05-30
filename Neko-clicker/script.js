// Находим элемент, который отображает счетчик
const clickCountSpan = document.getElementById('click-Count');

// Находим кнопку
const clickButton = document.getElementById('neko-button');

const randomSoundElement = document.getElementById('random-sound');

let count = 0;

const soundFiles = [
    'sounds/nyah-1.mp3',
    'sounds/nyah-2.mp3',
    'sounds/nyah-3.mp3',
    'sounds/nyah-4.mp3',
    'sounds/nyah-5.mp3',
    'sounds/nyah-6.mp3',
    'sounds/nyah-7.mp3',
    'sounds/nyah-8.mp3',
    'sounds/nyah-9.mp3',
];

clickButton.addEventListener('click', function() {
    count++;

    clickCountSpan.textContent = count;

    const randomIndex = Math.floor(Math.random() * soundFiles.length);

    const randomSoundPath = soundFiles[randomIndex];

    randomSoundElement.src = randomSoundPath;

    randomSoundElement.currentTime = 0;

    randomSoundElement.play()
        .catch(error => {
            // Обрабатываем возможные ошибки воспроизведения (например, браузер может блокировать автовоспроизведение)
            console.error("Ошибка воспроизведения звука:", error);
            // Возможно, нужно будет подсказать пользователю кликнуть где-то еще, чтобы разрешить звук.
    
            
    });



    console.log('Количество кликов:', count, '; Трек: ', randomSoundPath );
} )
