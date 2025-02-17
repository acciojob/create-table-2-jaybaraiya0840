function createTable() {
  // Get number of rows and columns from user input
  let rows = prompt("Input number of rows");
  let cols = prompt("Input number of columns");

  // Convert the input to integers
  rows = parseInt(rows);
  cols = parseInt(cols);

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Validate user input: rows and columns must be positive integers
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;  // Exit the function if input is invalid
  }

  // Create the table rows and columns dynamically
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");  // Create a new row

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");  // Create a new cell
      td.textContent = `Row-${i} Column-${j}`;  // Add text content to the cell
      tr.appendChild(td);  // Append the cell to the row
    }

    table.appendChild(tr);  // Append the row to the table
  }
}
