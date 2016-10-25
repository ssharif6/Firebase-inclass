// Create variables for important elements (dropdown, table)
var dropdown = document.querySelector("#dropdown");
var table = document.querySelector(".table");
var BABY_NAMES;

// fetch('baby-names.json')
// .then(function (response) {
//     return response.json();
// })
// .then(function (json) {
//     console.log(json);
// });

// Using XMLHttpRequest()
var httpRequest = new XMLHttpRequest();

// This is the callback function that will get called
// during the lifecycle of the request.
// Similar to the callback you specify to addEventListener,
// this function is not called immediately,
// but rather at some point in the future.
httpRequest.onreadystatechange = function() {
    // First, check that the request is done.
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // Next, check that the request completed successfully
        if (httpRequest.status === 200) {
            // try/catch allows you to execute code,
            // and if that code results in an error,
            // for example if the JSON text we receive is malformed,
            // prevent your program from crashing
            // and handle the error gracefully (catch block).s
            try {
                // Before, BABY_NAMES was set as a global variable,
                // but now we are getting it from a separate file.
                // The content of that file will be httpRequest.responseText,
                // and we use JSON.parse to turn that
                // into actual JavaScripts objects.
                BABY_NAMES = JSON.parse(httpRequest.responseText);

                // Build the filtered lists of names.
                // Array.filter allows you to take an array of items
                // and create a new array with just the values
                // that match a certain condition. In this case,
                // we want to build two lists, one for each gender.
                // When comparing strings, always a good idea to
                // set both strings to the same case (unless capitalization is important).
                maleNames = BABY_NAMES.filter(function (name) {
                    return name.gender.toLowerCase() === "male";
                });

                femaleNames = BABY_NAMES.filter(function (name) {
                    return name.gender.toLowerCase() === "female";
                });

                // On page load, show the data for both genders.
                buildRows(BABY_NAMES);
            } catch (error) {
                table.innerHTML = "Error building table.";
                dropdown.setAttribute("disabled", "disabled");
            }
        }
    }
};
// Defines what url we are requesting,
// and the request method. Then, sends the request.
httpRequest.open('GET', "baby-names.json");
httpRequest.send();

// Function to create the elements needed for the table,
// including the table body (where the rows will be rendered)
// and the header (with the column labels).
function buildTable() {
    // table body and table head
    var tbody = document.createElement("tbody");
    var thead = document.createElement("thead");

    // Row for the header
    var threadRow = document.createElement("tr");

    // Columns for the header
    var nameTh = document.createElement("th");
    nameTh.textContent = "Name";

    var genderTh = document.createElement("th");
    genderTh.textContent = "Gender";

    var countTh = document.createElement("th");
    countTh.textContent = "Count";

    // Append these elements to the table
    threadRow.appendChild(nameTh);
    threadRow.appendChild(genderTh);
    threadRow.appendChild(countTh);

    thead.appendChild(threadRow);
    table.appendChild(tbody);
    table.appendChild(thead);
}

// Function to create the table elements for an array of names.
function buildRows(rows) {
    // First, build the table structure.
    buildTable();

    // Find the table body, where the rows will be rendered.
    var tbody = document.querySelector("tbody");

    // Iterate over each baby name,
    // create the tr (row element) and td elements (column elements)
    // and append to the table body.
    rows.forEach(function (name) {
        var nameTr = document.createElement("tr");

        // Object.keys returns an array of the keys object
        var nameKeys = Object.keys(name);

        // This makes it easy to iterate over the values
        // in the object by using bracket notation
        // to access each property in the object.
        nameKeys.forEach(function (key) {
            var value = name[key];

            var td = document.createElement("td");
            td.textContent = value;

            nameTr.appendChild(td);
        });

        tbody.appendChild(nameTr);
    });

    // Calculate the total for the given array of names.
    // Array.reduce takes an array of items,
    // and returns a single value based on logic you provided.
    // In this case, we want to sum all the name counts
    // for the given list of baby names.
    var total = rows.reduce(function (sum, name) {
        var newSum = sum + name.count;
        return newSum;
    }, 0); // 0 is the initial value for the sum

    // Build totals rows
    var tableFooter = document.createElement("tfoot");
    var totalsTr = document.createElement("tr");
    var totalsNameTd = document.createElement("td");
    totalsNameTd.textContent = "Total";

    // We don't want anything in the second column
    var blankTd = document.createElement("td");

    var totalsTotalTd = document.createElement("td");
    totalsTotalTd.textContent = total;

    // Append totals row
    totalsTr.appendChild(totalsNameTd);
    totalsTr.appendChild(blankTd);
    totalsTr.appendChild(totalsTotalTd);

    // Append footer (with totals)
    tableFooter.appendChild(totalsTr);
    table.appendChild(tableFooter);
}

// When the selection in the dropdown changes,
// we want to clear and rebuild the table
// based on the selected gender.
dropdown.addEventListener("change", function (e) {
    // Removes all the elements in the able.
    table.innerHTML = "";

    // Get the current value of the dropdown,
    // and build the table with the data for that value.
    var value = e.target.value;

    if (value === "male") {
        buildRows(maleNames);
    } else if (value === "female") {
        buildRows(femaleNames);
    } else {
        buildRows(BABY_NAMES);
    }
});
