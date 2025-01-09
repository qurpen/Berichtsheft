function showModal() {
  // Select the modal element
  const modal = document.querySelector('.modal-dialog');
  // Create a backdrop element
  let backdrop = document.createElement('div');
  backdrop.classList.add('modal-backdrop');
  document.body.appendChild(backdrop); // Add it to the body
  // Show the modal
  modal.classList.remove('hidden');
  modal.setAttribute('tabindex', '0');
  modal.focus();
}


// Function to hide the modal and remove the backdrop
function hideModal() {
  const modal = document.querySelector('.modal-dialog');
  const backdrop = document.querySelector('.modal-backdrop');
  if (modal) {
    modal.classList.add('hidden');
    modal.setAttribute('tabindex', '-1');
  }
  if (backdrop) {
    backdrop.remove(); // Remove the backdrop from the DOM
  }
}

function addRowToTable() {
  // Get the table's tbody element
  const tableBody = document.querySelector('#activities-table tbody');
  // Get input values from the modal
  const dateInput = document.querySelector('#date-input input').value;
  const descriptionInput = document.querySelector('#description-input textarea').value;
  const durationInput = document.querySelector('#duration-input input').value + 'h'; // Append 'h' for hours
  // Create a new row element
  const newRow = document.createElement('tr');
  // Populate the row with cells
  newRow.innerHTML = `
        <td>${dateInput}</td>
        <td>${descriptionInput}</td>
        <td class="centered-text">${durationInput}</td>
        <td class="actions">
            <div class="action-item">
                <i class="fa-regular fa-pen-to-square"></i>
                <span>Bearbeiten</span>
            </div>
            <div class="action-item">
                <i class="fa-solid fa-trash"></i>
                <span>Löschen</span>
            </div>
        </td>
    `;
  // Append the new row to the table body
  tableBody.appendChild(newRow);
  // Optional: Clear the modal inputs after adding the row
  document.querySelector('#date-input input').value = '';
  document.querySelector('#description-input textarea').value = '';
  document.querySelector('#duration-input input').value = '';
  // Close the modal
  hideModal();
}


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('add-activity-btn');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    showModal();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('close-modal-btn');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    hideModal();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn-close');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    hideModal();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('add-btn');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    addRowToTable();
  });
});
