let form= document.getElementById("myForm");
form.addEventListener("submit", onSubmitClick);

let Submitbutton= document.querySelector(".col-1>button");


let tbody= document.getElementById("table_body");

let id=1000;
let employeeListArray=[];
let formState={
    isCreatingorEditing: "CREATE",
    whichEmployeeUpdate:null
}



// what happens when submit button is clicked
function onSubmitClick(event){
    event.preventDefault();
    
    let employeeDetails= {
        name: form.name.value,
        Employee_ID: ++id,
        role: form.role.value,
        team: form.team.value,
        company: form.company.value,
        salary: form.salary.value

    }
    // console.log(employeeDetails);

    if(formState["isCreatingorEditing"]==="CREATE"){
        addEmployee(employeeDetails);
    }
    else if(formState["isCreatingorEditing"]==="EDIT"){

        // console.log(formState.whichEmployeeUpdate.children);

        updateEmployee(formState.whichEmployeeUpdate);
        // console.log(formState);
    }

    // form.reset();
}



// what happens when addEmployee function is invoked inside onSubmitClick
// with passing employee as a parameter

function addEmployee(employeeDetails){
    let tr= document.createElement("tr");
    
    for(let key in employeeDetails){
        const td= document.createElement("td");
        td.innerText= employeeDetails[key];
        tr.appendChild(td);
    }

    let manage_td= document.createElement("td");
    manage_td.className= "manage-td";

    // edit icon
    const edit_icon= document.createElement("button");
    edit_icon.className="material-icons";    
    edit_icon.setAttribute("data-empid", employeeDetails.Employee_ID);
    edit_icon.innerText="edit";
    manage_td.appendChild(edit_icon);
    // Event listener for edit-
    edit_icon.addEventListener("click", editRecord);




    //delete icon
    const delete_icon = document.createElement("button");
    delete_icon.className="material-icons";
    delete_icon.setAttribute("data-empid", employeeDetails.Employee_ID);
    delete_icon.innerText= "delete";
    manage_td.appendChild(delete_icon);
    // Event listener for delete-
    delete_icon.addEventListener("click", deleteRecord);


    tr.appendChild(manage_td);
    // console.log(tr);

    tbody.appendChild(tr);
    employeeListArray.push(employeeDetails);
    // console.log(employeeListArray);


    
    
}