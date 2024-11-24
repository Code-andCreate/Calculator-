const inputField = document.querySelector('.no');
const buttons = document.querySelectorAll('button');
//expression
let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
//conditions for buttons
        if (value === 'C') {
            expression = '';
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Error';
            }
        } else {
            expression += value;
        }

        inputField.value = expression;
    });
});
