"use strict";
// Global variables. --------------------------------------------------
let editButtonsClicked = document.querySelectorAll(".edit");
let modalCoverDiv = document.querySelector(".modelCover");
let editModalDiv = document.getElementById("editModalId");
let deleteModalDiv = document.getElementById("deleteModalId");
let editModalQuoter = document.getElementById("quoterEdit");
let editModalQuote = document.getElementById("quoteEdit");

let deleteButtonsClicked = document.querySelectorAll(".delete");

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
