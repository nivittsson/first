// Function to extract and display Case IDs from a specific table
function displayCaseIDsFromTable() {
  // Get the table by its ID
  let table = document.querySelector('#grid-1');
  
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
    console.error('Table with ID "grid-1" not found.');
    return;
  }

  // Join the Case IDs into a string separated by '|'
  let caseIDString = caseIDs.join('|');

  // Display the result in an alert
  alert(caseIDString);
}

// Call the function to execute
displayCaseIDsFromTable();
