const binaryInput = document.querySelector('#binary')
const decimalInput = document.querySelector('#decimal')

decimalInput.addEventListener('input', () => {
    var decimalValue = parseInt(decimalInput.value)
    binaryInput.value = decimalValue.toString(2)
})

binaryInput.addEventListener('input', () => {
    var binaryValue = binaryInput.value

    if (binaryInputValidate(binaryValue)){
        decimalInput.value = parseInt(binaryValue, 2);
        document.getElementById("error-msg").style.display = "none";
        binaryInput.classList.add('valid');
        binaryInput.classList.remove('invalid');

      } else {
        document.getElementById("error-msg").style.display = "block";
        binaryInput.classList.add('invalid');
        binaryInput.classList.remove('valid');
      }

      function binaryInputValidate(number) {
        for (let i = 0; i < number.length; i++) {
            if (number[i] != '0' && number[i] != '1') {
                return false
            } 
        }
        return true
    }
})