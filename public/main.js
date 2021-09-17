"use strict";
// Global variables. --------------------------------------------------
let editButtonsClicked = document.querySelectorAll(".edit");
let deleteButtonsClicked = document.querySelectorAll(".delete");

let modalCoverDiv = document.querySelector(".modelCover");
let editModalDiv = document.getElementById("editModalId");
let deleteModalDiv = document.getElementById("deleteModalId");

let editModalQuoter = document.getElementById("quoterEdit");
let editModalQuote = document.getElementById("quoteEdit");

let innerEditButton = document.getElementById("editSubId");
let cancelDeleteButton = document.getElementById("noDeleteId");
let confirmDeleteButton = document.getElementById("deleteId");


// The edit model. -----------------------------------------------------
for (let i=0; i < editButtonsClicked.length; i++){
  editButtonsClicked[i].addEventListener("click", displayEditModal)
};

function displayEditModal(e){

  let quoterText = e.target.parentElement.previousElementSibling.querySelector(".italics").textContent;
  let quoteText = e.target.parentElement.previousElementSibling.querySelector(".bold").textContent;
  // console.log(quoterText);
  // console.log(quoteText);

  if (editModalDiv.classList.contains("hide") == true){
    modalCoverDiv.classList.remove("hide");
    editModalDiv.classList.remove("hide");
    editModalQuoter.value = quoterText;
    editModalQuote.value = quoteText;
  } else {
    editModalDiv.classList.add("hide");
  }
}
// Submit the edited text. ----------------------------------------------
innerEditButton.addEventListener("click", submitEdit);

function submitEdit(){
  modalCoverDiv.classList.add("hide");
  editModalDiv.classList.add("hide");
  // fetch code to be added later!
}

// The delete model. -----------------------------------------------------
for (let i=0; i < deleteButtonsClicked.length; i++){
  deleteButtonsClicked[i].addEventListener("click", displayDeleteModal)
};

function displayDeleteModal(e){
  if (deleteModalDiv.classList.contains("hide") == true){
    modalCoverDiv.classList.remove("hide");
    deleteModalDiv.classList.remove("hide");
  } else {
    editModalDiv.classList.add("hide");
  }
}
// Submit / Cancel the delete action. -------------------------------------
cancelDeleteButton.addEventListener("click", cancelDelete);

function cancelDelete(){
  modalCoverDiv.classList.add("hide");
  deleteModalDiv.classList.add("hide");
}

confirmDeleteButton.addEventListener("click", confirmDelete);

function confirmDelete(){
  // Temporary functions.
  modalCoverDiv.classList.add("hide");
  deleteModalDiv.classList.add("hide");
  // fetch code to be added later.
}
