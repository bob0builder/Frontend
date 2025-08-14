const display = document.getElementById("display");
function appendValue(value){
    display.textContent += value;
}
function clearDisplay(){
    display.textContent='';
}
function backspace(){
    display.textContent = display.textContent.slice(0,-1);
}
function calculator(){
    try{
        display.textContent= eval(display.textContent) || '';
    } catch{
        display.textContent = 'Error';
    }
}
// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || ['+', '/', '-', '*', '.'].includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Backspace') {
        backspace();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});