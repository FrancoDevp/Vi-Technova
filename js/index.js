const evento = document.getElementById('comprar')
const enviarFormulario =() => {
        let numero= 5493513760384;
let win= window.open(`https://wa.me/${numero}?text=Hola,%20quiero%20este%20producto!%20`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)