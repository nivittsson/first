// Function to check the checkboxes next to specific Case IDs
function checkCaseIDs(caseIDs) {
  // Split the caseIDs string into an array of IDs
  const idsArray = caseIDs.split('|');
  
  // Iterate over each case ID
  idsArray.forEach(caseID => {
    // Find the element with the case ID
    const caseElement = document.querySelector(`td a[href*="${caseID}"]`);
    
    // If the case ID is found
    if (caseElement) {
      console.log(`Found Case ID: ${caseID}`);
      
      // Find the checkbox next to the case ID
      const checkbox = caseElement.closest('tr').querySelector('input[type="checkbox"]');
      
      // If the checkbox is found and not already checked
      if (checkbox && !checkbox.checked) {
        checkbox.checked = true;
        console.log(`Checkbox for Case ID: ${caseID} is now checked.`);
      } else if (checkbox && checkbox.checked) {
        console.log(`Checkbox for Case ID: ${caseID} was already checked.`);
      }
    } else {
      console.error(`Error: Case ID ${caseID} not found.`);
    }
  });
}

// Function to prompt the user for input and call checkCaseIDs
function promptAndCheckCaseIDs() {
  // Prompt the user for input
  const inputString = prompt("Enter Case IDs separated by '|' (e.g., 1998144|2292525|723875):");
  
  // If the user entered a string
  if (inputString) {
    // Call the checkCaseIDs function with the entered string
    checkCaseIDs(inputString);
  } else {
    console.log("No input provided. Please enter Case IDs.");
  }
}

// Example usage: Call promptAndCheckCaseIDs
promptAndCheckCaseIDs();
