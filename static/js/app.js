// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a function to fill the table with data only. 
function buildTable(data) {
    //1st clear out any existing data. 
    tbody.html("");


    //loop thrugh each object in the array, append a row to the HTML table, add each value from the object into a cell.

    //loop through each obj in the data and
    //append a row and cells for each value in the row. 
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}