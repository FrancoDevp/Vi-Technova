const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 543513760384;
var win= window.open(`https://wa.me/${numero}?text=Hola!
%20Mi%20nombre%20es%20${nombre}, Quiero solicitar:%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)