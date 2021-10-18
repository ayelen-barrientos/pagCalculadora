document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    enviar()
});

const enviar = () => {
    const data = {
        num1: document.getElementById('numero1').value,
        num2: document.getElementById('numero2').value,
        operacion: document.getElementById('ope').value
    }

    fetch('http://localhost:3000/calcular', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(datos => {document.getElementById('result').value=datos.result});
}





