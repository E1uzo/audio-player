const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const audioPlayer = document.getElementById('audio-player');
const trackName = document.getElementById('track-name');

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('hover');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('hover');
    }, false);
});


dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
    }
});

function handleFile(file) {
    if (file.type.startsWith('audio/')) {
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        trackName.textContent = `Играет: ${file.name}`;
        audioPlayer.play(); // Автоматический запуск трека
    } else {
        alert('Пожалуйста, выберите корректный аудиофайл.');
    }
}
