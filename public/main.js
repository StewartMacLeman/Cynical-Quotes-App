"use strict";
// Global variables. --------------------------------------------------
let editButtons = document.querySelectorAll(".edit");
let deleteButtons = document.querySelectorAll(".delete");

let modalCoverDiv = document.querySelector(".modelCover");
let editModalDiv = document.getElementById("editModalId");
let deleteModalDiv = document.getElementById("deleteModalId");

let editModalQuoter = document.getElementById("quoterEdit");
let editModalQuote = document.getElementById("quoteEdit");

let innerEditButton = document.getElementById("editSubId");
let cancelDeleteButton = document.getElementById("noDeleteId");
let confirmDeleteButton = document.getElementById("deleteId");

let edit_id;
let quoterText;
let quoterElement;
let quoteText;
let quoteElement;
let delete_id;

// The edit model. -----------------------------------------------------
for (let i=0; i < editButtons.length; i++){
  editButtons[i].addEventListener("click", displayEditModal)
};

function displayEditModal(e){

  edit_id = e.target.parentElement.querySelector(".hide").textContent;
  quoterText = e.target.parentElement.previousElementSibling.querySelector(".bold").textContent;
  quoterElement = e.target.parentElement.previousElementSibling.querySelector(".bold");
  quoteText = e.target.parentElement.previousElementSibling.querySelector(".italics").textContent;
  quoteElement = e.target.parentElement.previousElementSibling.querySelector(".italics");

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

function submitEdit(e){

  console.log(edit_id);
  console.log(quoteText);
  console.log(quoterText);

  let updatedQuoter = editModalQuoter.value;
  let updatedQuote = editModalQuote.value;

  axios.post("/update-quotes", {id: edit_id, quoter: updatedQuoter, quote: updatedQuote} ).then(() => {
    quoterElement.textContent = updatedQuoter;
    quoteElement.textContent = updatedQuote;
  }).catch(() => {
    console.log("Please try again later!");
  });

  modalCoverDiv.classList.add("hide");
  editModalDiv.classList.add("hide");
}

// The delete model. -----------------------------------------------------
for (let i=0; i < deleteButtons.length; i++){
  deleteButtons[i].addEventListener("click", displayDeleteModal)
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
