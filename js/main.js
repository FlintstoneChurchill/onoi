window.onload = WindowOnLoad;
var fileInput = document.getElementById("file");
var wrap = document.getElementById("wrapper");
var activeButton = document.createElement("div");

var files = document.getElementsByClassName('uploaded_file');

var handleBtn = document.getElementById("handleBtn");
var handleModal = document.getElementById("handleModal");
var backdrop = document.getElementById("backdrop");
if (handleBtn) {
  handleBtn.addEventListener("click", function(e) {
    toggleModal(e, "block");
  });
}

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
    fileInput.value = "";
    fileInput.onchange = HandleChanges;
    fileInput.className = "customFile";
    activeButton.className = "proposal_btn success";
    activeButton.innerHTML = "Добавить документ";

    wrap.appendChild(activeButton);
  }
}

function HandleChanges() {
  if (files) {
    for (var f = 0; f < files.length; f++) {
      wrap.removeChild(files[f]);
    }
  }
  for (var i = 0; i < fileInput.files.length; i++) {
    var fileName = document.createElement("div");
    var closeFile = document.createElement("span");
    fileName.className = "file uploaded_file";
    fileName.innerHTML = fileInput.files[i].name;
    closeFile.className = "delete_file";
  
    fileName.appendChild(closeFile);
    wrap.appendChild(fileName);
  }
}
