// Функція для оновлення часу
function updateClock() {
    // Створіть змінну, яка буде зберігати поточний час    
    const now = new Date(); 

    // Отримайте поточні години та додайте їх до змінної часу
    const hours = String(now.getHours()).padStart(2, '0');

    // Отримайте поточні хвилини та додайте їх до змінної часу
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Отримайте поточні секунди та додайте їх до змінної часу
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Відобразіть поточний час у елементі з id "clock"
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Оновлення часу щосекунди
setInterval(updateClock, 1000);
updateClock();
