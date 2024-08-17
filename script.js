document.getElementById('numberInput').addEventListener('input', function() {
    const number = parseInt(this.value);
    const resultElement = document.getElementById('result');

    resultElement.textContent = '';

    if (isNaN(number)) {
        return;
    }

    if (number < 0) {
        resultElement.textContent = 'enter a positive value';
    } else if (number % 2 === 0) {
        resultElement.textContent = `Next 3 even numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    } else {
        resultElement.textContent = `Next 3 odd numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
    }
});
