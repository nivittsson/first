// Function to extract and display Case IDs from a specific table
function displayCaseIDsFromTable() {
  // Get the table by its ID
  // i noticed that untested ones go always under grid-3, if this is not the case i may need to revisit this
  let table = document.querySelector('#grid-3');
  
  // Initialize an array to store the Case IDs
  let caseIDs = [];

  // Check if the table exists
  if (table) {
    // Get all rows with a case ID in the table
    let caseIDRows = table.querySelectorAll('tr td.id');
    
    // Iterate over each row and extract the Case ID
    caseIDRows.forEach(cell => {
      // Extract the Case ID number, removing the 'C' prefix
      let caseID = cell.textContent.trim().substring(1);
      caseIDs.push(caseID);
    });
  } else {
    console.error('Table with ID "grid-3" not found.');
    return;
  }

  // Join the Case IDs into a string separated by '|'
  let caseIDString = caseIDs.join('|');

  // Display the result in an alert
  alert("UNTESTED: "+caseIDString);
}

// Call the function to execute
displayCaseIDsFromTable();
