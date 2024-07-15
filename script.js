function setRandomValue(event) {
  event.preventDefault();
  const values = [];

  const input1 = document.getElementById('option1');
  values.push(input1.value);
  const input2 = document.getElementById('option2');
  values.push(input2.value);

  const randomValue = values[Math.floor(Math.random() * values.length)]
  
  const optionContent = document.getElementById('option-content');
  const content = document.querySelector('.content');
  content.style.display = 'block';
  return optionContent.textContent = randomValue;
}
