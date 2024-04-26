// before running this script go to the bottom of the script and add the TC 
// you want to pass as input to the checkCaseIDs function
//**************************************
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

// Example usage with multiple case IDs
checkCaseIDs('1998144|2292525|723875|723874|723873|1081495|1412118|895406|2139436|451205|1323353|2178186|2178190|2498244');
