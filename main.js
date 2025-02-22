function generateNumbers() {
    const num1 = Math.ceil(Math.random() * 20);
    const num2 = Math.ceil(Math.random() * 20);
    const num3 = Math.ceil(Math.random() * 20);

    const biggest = Math.max(num1, num2, num3);

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = num1 > 0 ? alphabet[num1 - 1] : 'N/A';

    const totalMinutes = num2 * num3;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours == 0) {
        timeBreakdown = minutes == 1 ? "1 minute" : `${minutes} minutes`;
    } else if (hours == 1) {
        if (minutes == 0) {
            timeBreakdown = "1 hour";
        } else if (minutes == 1) {
            timeBreakdown = "1 hour and 1 minute";
        } else {
            timeBreakdown = `1 hour and ${minutes} minutes`;
        }
    } else {
        if (minutes == 0) {
            timeBreakdown = `${hours} hours`;
        } else if (minutes == 1) {
            timeBreakdown = `${hours} hours and 1 minute`;
        } else {
            timeBreakdown = `${hours} hours and ${minutes} minutes`;
        }
    }

    document.getElementById('biggest').innerText = `The biggest number is: ${biggest}`;
    document.getElementById('letter').innerText = `The ${num1}th letter of the alphabet is: ${letter}`;
    document.getElementById('time').innerText = `Total time: ${totalMinutes} minutes (${timeBreakdown})`;
}