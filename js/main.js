window.onload = WindowOnLoad;
var fileInput = document.getElementById("file");
console.log(fileInput);
var fileName = document.createElement("div");
fileName.className = "file";
var activeButton = document.createElement("div");

var handleBtn = document.getElementById("handleBtn");
var handleModal = document.getElementById("handleModal");
var backdrop = document.getElementById('backdrop');
handleBtn.addEventListener("click", function(e) {
    toggleModal(e, "block");
});

var closeModalBtn = document.getElementsByClassName("close_modal");
if (closeModalBtn) {
  for (var i = 0; i < closeModalBtn.length; i++) {
    closeModalBtn[i].addEventListener("click", function(e) {
      toggleModal(e, "none");
    });
  }
}

function toggleModal(e, displayType) {
    e.preventDefault();
    backdrop.style.display = displayType;
    handleModal.style.display = displayType;
}

function WindowOnLoad() {
  if (fileInput) {
    var wrap = document.getElementById("wrapper");
    fileInput.value = "";
    fileInput.onchange = HandleChanges;
    fileInput.className = "customFile";
    activeButton.className = "proposal_btn success";
    activeButton.innerHTML = "Добавить документ";

    wrap.appendChild(activeButton);
    wrap.appendChild(fileName);
  }
}

function HandleChanges() {
  var file = fileInput.value;
  var fileTitle = file.match(/[^\\]+\.[^\\.]+$/g);
  fileName.innerHTML = fileTitle;
  console.log(fileTitle);
}
