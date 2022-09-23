const sumar = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1 || !num2) {
        alert('Ingrese el Numero')
        return
    }
    let tbody = document.getElementById('tresulados')
    tbody.innerHTML += "<tr><td> La suma de " + num1 + " + " + num2 + " es: </td><td>" + (num1+num2) + "</td></tr>"
}

const restar = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1 || !num2) {
        alert('Ingrese el Numero')
        return
    }
    let tbody = document.getElementById('tresulados')
    tbody.innerHTML += "<tr><td> La resta de " + num1 + " - " + num2 + " es: </td><td>" + (num1-num2) + "</td></tr>"
}

const multiplicar = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1 || !num2) {
        alert('Ingrese el Numero')
        return
    }
    let tbody = document.getElementById('tresulados')
    tbody.innerHTML += "<tr><td> El producto de " + num1 + " * " + num2 + " es: </td><td>" + (num1*num2) + "</td></tr>"
}

const dividir = () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    if (!num1 || !num2) {
        alert('Ingrese el Numero')
        return
    }
    let tbody = document.getElementById('tresulados')
    tbody.innerHTML += "<tr><td> El cociente de " + num1 + " / " + num2 + " es: </td><td>" + (num1/num2) + "</td></tr>"
}