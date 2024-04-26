// Get all the text nodes in the document
function getTextNodes() {
  let textNodes = [];
  let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    textNodes.push(node.nodeValue);
  }
  return textNodes;
}

// Count the occurrences of a substring in a string and save the next string after it
function countSubstring(str, sub) {
  let count = 0;
  let index = 0;
  let next = ""; // The next string after the substring
  while (index != -1) {
    index = str.indexOf(sub, index);
    if (index != -1) {
      count++;
      index += sub.length;
      // Get the next string until the end of the line or a space
      let end = str.indexOf("\n", index);
      if (end == -1) end = str.length;
      next = str.substring(index, end).trim();
    }
  }
  return [count, next]; // Return both the count and the next string
}

// Parse a date string in the format "DD MMMM YYYY"
function parseDate(str) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let parts = str.split(" ");
  if (parts.length != 3) return null; // Invalid format
  let day = parseInt(parts[0], 10);
  let month = months.indexOf(parts[1]);
  let year = parseInt(parts[2], 10);
  if (isNaN(day) || month == -1 || isNaN(year)) return null; // Invalid values
  return new Date(year, month, day);
}

// Main function
function countTestedBy() {
  let textNodes = getTextNodes();
  let total = 0;
  let perDay = {}; // An object to store the counts per day
  let perTester = []; // An array of objects to store the counts per tester and date
  let currentDate = null; // The current date we are processing
  for (let node of textNodes) {
    let date = parseDate(node); // Try to parse the node as a date
    if (date) {
      currentDate = date; // Update the current date
    } else {
      let [count, tester] = countSubstring(node, "Tested by"); // Count the occurrences of the substring and get the tester name
      total += count; // Update the total count
      if (currentDate) {
        let key = currentDate.toDateString(); // Convert the date to a string
        perDay[key] = (perDay[key] || 0) + count; // Update the count for the current date
        // Find or create the object for the current date and tester in the array
        let obj = perTester.find(o => o.date == key && o.tester == tester);
        if (!obj) {
          obj = {date: key, tester: tester, count: 0};
          perTester.push(obj);
        }
        obj.count += count; // Update the count for the current date and tester
      }
    }
  }
  console.log("The string 'Tested by' appears " + total + " times in the current webpage.");
  console.log("The counts per day are:");
  for (let key in perDay) {
    console.log(key + " = " + perDay[key]);
  }
  // Sort the array by the date property
  perTester.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log("The counts per tester sorted by date are:");
  let outputMessage = "The counts per tester sorted by date are:\n";
  for (let obj of perTester) {
    console.log(obj.date + " " + obj.tester + " = " + obj.count);
    outputMessage += obj.date + " " + obj.tester + " = " + obj.count + "\n";
  }
  alert(outputMessage);
}

// Invoke the main function
countTestedBy();
