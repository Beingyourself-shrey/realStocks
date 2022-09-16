let boxShadow = document.getElementsByClassName('modal-shadow-drop')[0];
let modalBox = document.getElementsByClassName('modal-box')[0];

document.getElementsByClassName('modal-shadow-drop')[0]
let showDialog = ()=>{
    boxShadow.classList.remove('hide-model-box-with-shadow')
    modalBox.classList.remove('hide-model-box-with-shadow')
}

let hideDialogueBox=()=>{
    boxShadow.classList.add('hide-model-box-with-shadow')
    modalBox.classList.add('hide-model-box-with-shadow')
}