function createStyles() {
  const styleTag = document.createElement("style");
  document.head.appendChild(styleTag);
  styleTag.innerHTML = `
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  .modal-content {
    background-color: #fefefe;
    height:30%;
    margin: auto;
    padding: 50px;
    border: 1px solid #888;
    width: 50%; 
    text-align:center;  
  }

  .close {
    color: #aaaaaa;
    float: left;
    font-size: 28px;
    border: none;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  .modal-txt{
    margin-top:100px;
  }
  `;
}

function createBtnToOpenModal(){
  createStyles();
  var btn = document.createElement('button');
  btn.id='pixibotest';
  var txt = document.createTextNode('Pixibo Modal');
  btn.appendChild(txt);
  document.body.appendChild(btn);
  btn.addEventListener("click", openModal);
}



function createModal() {

    var container = document.createElement('div');
    container.id = 'myModal';
    container.classList.add('modal');

    var modalContent = document.createElement('div');

    var modalTxtBox = document.createElement('div');

    var modalH1 = document.createElement('H1');
    var modalTxt = document.createTextNode('Hello World');

    var closeBtn = document.createElement('button');

    var modalCloseIcon = document.createTextNode("X");

    modalH1.appendChild(modalTxt);
    closeBtn.appendChild(modalCloseIcon);
    closeBtn.classList.add('close');
    closeBtn.addEventListener("click", closeModal);

    modalTxtBox.appendChild(modalH1);
    modalTxtBox.classList.add('modal-txt');
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalTxtBox);
    modalContent.classList.add('modal-content');

    container.appendChild(modalContent);
    document.body.appendChild(container);
}

function openModal(){
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
}
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

function initialisePlugin(){
  createBtnToOpenModal();
  createModal();
  var modal = document.getElementById('myModal');
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

initialisePlugin();
