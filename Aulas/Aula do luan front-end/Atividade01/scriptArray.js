
function teste(){
    const container = document.querySelector('#container');
    let inputText = document.querySelector('#texti').value;
    if(inputText === ""){
        alert("Não pode ser vazio!")
    }else{
        let element = document.createElement('li');
        element.textContent = inputText;
        container.appendChild(element);
        let button = document.createElement('button');
        button.textContent = "Remover";
        button.addEventListener('click', function() {
            container.removeChild(element);
        });
        element.appendChild(button);
        container.appendChild(element);
        document.querySelector('#texti').value = "";
    }  
}