let buttonIRProjeto1 = document.getElementById('Ir_projeto1');
let buttonIRProjeto2 = document.getElementById('Ir_projeto2');

buttonIRProjeto1.onclick( function ir() {
    console.log('oi');
    window.location.href= "https://github.com/jonatasfernandessilva7/backend-schoolLab.git"
})

buttonIRProjeto2.addEventListener('click', () => {
    console.log('oi');
    window.location.href= "https://github.com/jonatasfernandessilva7/tasks-FreeRTOS-Linux.git"
})