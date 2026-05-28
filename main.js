'use strict';

{

  function showPassword() {
    const result = document.getElementById('result');
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');

    const selectedRadio = document.querySelector('input[name="length"]:checked');
    let passwordLength = 8;

    if (selectedRadio.value === 'custom') {
      const customInput = document.getElementById('custom-length-input');
      passwordLength = parseInt(customInput.value, 10);

      if (isNaN(passwordLength) || passwordLength < 8) passwordLength = 8;
      if (passwordLength > 32) passwordLength = 32;
    } else {
      passwordLength = parseInt(selectedRadio.value, 10);
    }

    // const passwordLength = parseInt(selectedRadio.value, 10);

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!#$%&()';
    let password = '';
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked) {
      seed += numbers;
    }

    if (symbolsCheckbox.checked) {
      seed += symbols;
    }

    for (let i = 0; i < passwordLength ; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = password;
  }

  const btn = document.getElementById('btn');
  const customInput = document.getElementById('custom-length-input');
  const radioCustom = document.getElementById('radio-custom');
  const radios = document.querySelectorAll('input[name="length"]');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      showPassword();
    });
  });

  customInput.addEventListener('input', () => {
    radioCustom.checked = true;
    showPassword();
  })

  btn.addEventListener('click', () => {
    showPassword();
  });

  showPassword();
}
