document.getElementById('add').addEventListener('click', () => {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const result = Number(num1) + Number(num2)
    document.getElementById('result').innerText = result
  })
  
  document.getElementById('subtract').addEventListener('click', () => {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const result = Number(num1) - Number(num2)
    document.getElementById('result').innerText = result
  })
  document.getElementById('Multiply').addEventListener('click', () => {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const result = Number(num1) * Number(num2)
    document.getElementById('result').innerText = result
  })
  document.getElementById('Divise').addEventListener('click', () => {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const result = Number(num1) / Number(num2)
    document.getElementById('result').innerText = result
  })
  