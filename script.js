let listOfPeople = [];


function person(firstName,lastName,weight,dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.weight = weight;
    this.dateOfBirth = dateOfBirth;

    listOfPeople = listOfPeople || [];
    listOfPeople.push(
        {first_name:firstName,last_name:lastName,weight:weight,date_of_birth:dateOfBirth}
    );
}

function register() {
    const first_name = document.getElementById("firstName").value;
    const last_name = document.getElementById("lastName").value;
    const weight = document.getElementById("weight").value;
    const date_of_birth = document.getElementById("dateOfBirth").value;

    if (first_name == "" || last_name == "" || weight == "" || date_of_birth == "") {
        alert("Por favor llenar todos los campos");

    } else {
    
        if (listOfPeople == [] || JSON.parse(localStorage.getItem("TableList") == null)) {
            person(first_name,last_name,weight,date_of_birth);

            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("weight").value = "";
            document.getElementById("dateOfBirth").value = "";

            localStorage.setItem("TableList",JSON.stringify(listOfPeople));

            createTable();

        } else {
            const bringData = JSON.parse(localStorage.getItem("TableList"));
            let validator = 0;

            listOfPeople = bringData;


            for (i = 0; i < listOfPeople.length; i++){
                if (first_name == listOfPeople[i].first_name && last_name == listOfPeople[i].last_name) {
                    validator = 1;
                }
            } 

            if (validator == 1) {
                alert("Persona ya existe");
            } else {
                person(first_name,last_name,weight,date_of_birth);

                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("weight").value = "";
                document.getElementById("dateOfBirth").value = "";

                localStorage.setItem("TableList",JSON.stringify(listOfPeople));

                createTable();
                
            }
        }
    } 
}

// let createTable = function(list){
//     let stringTable = "";
//     for(let person of list){
//         let row = "<td>";
//         row += person.first_name;
//         row += "</td>";

//         row += "<td>";
//         row += person.last_name;
//         row += "</td>";

//         row += "<td>";
//         row += person.weight;
//         row += "</td>";

//         row += "<td>";
//         row += person.date_of_birth;
//         row += "</td>";

//         stringTable += row;
//     }

//     return stringTable;
// }

function createTable() {
    const bringData = JSON.parse(localStorage.getItem("TableList"));

    if (document.getElementById("peopleTable").rows.length == 1) {
        listOfPeople = bringData;

        let rows = listOfPeople.length;

        for (let i = 0; i < rows; i++) {
            let actualRow = document.getElementById("peopleTable").insertRow(-1);

            for (let j = 0; j < 4; j++) {
                if (j == 0) {
                    let cell = actualRow.insertCell(0);
                    cell.innerHTML = listOfPeople[i].first_name;
                } else if (j == 1) {
                    let cell = actualRow.insertCell(1);
                    cell.innerHTML = listOfPeople[i].last_name;
                } else if (j == 2) {
                    let cell = actualRow.insertCell(2);
                    cell.innerHTML = listOfPeople[i].weight;
                } else if (j == 3) {
                    let cell = actualRow.insertCell(3);
                    cell.innerHTML = listOfPeople[i].date_of_birth;
                }
            }
        }
    } else if (document.getElementById("peopleTable").rows.length > 1) {
        listOfPeople = bringData;

        let rows = listOfPeople.length-1;
        let actualRow = document.getElementById("peopleTable").insertRow(-1);
        let cell1 = actualRow.insertCell(0);
        let cell2 = actualRow.insertCell(1);
        let cell3 = actualRow.insertCell(2);
        let cell4 = actualRow.insertCell(3);
                       
        
        cell1.innerHTML = listOfPeople[rows].first_name;
        cell2.innerHTML = listOfPeople[rows].last_name;
        cell3.innerHTML = listOfPeople[rows].weight; 
        cell4.innerHTML = listOfPeople[rows].date_of_birth;
    }
}

function refresh() {
    const bringData = JSON.parse(localStorage.getItem("TableList"));
    listOfPeople = bringData;

    if (JSON.parse(localStorage.getItem("TableList") != null)) {
        createTable();
    } 
}

function clearList() {
    window.localStorage.clear();
    window.location.reload();
    
 }

refresh();
