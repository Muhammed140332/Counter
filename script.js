// Set initial count
let count = 0;

//Select value and buttons
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(events);
function events(btn) {
    btn.addEventListener('click', doTheJob);

    function doTheJob(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;
    }
}