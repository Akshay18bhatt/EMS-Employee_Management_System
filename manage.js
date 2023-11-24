
// Delete functionality here-
function deleteRecord(event){

    if(formState.isCreatingorEditing==="EDIT"){
        alert("Cannot Delete: Please update the employee first.");
        return;
    }

    let deleteButton= event.target.parentNode.parentNode;
    deleteButton.remove();

    let deleteButton_id= parseInt(event.target.getAttribute("data-empid"));
    // console.log(deleteButton_id);

    for(let i=0;i<employeeListArray.length;i++){
        if(employeeListArray[i].Employee_ID===deleteButton_id){
            employeeListArray.splice(i,1);
            break;
        }
    }
    // console.log(employeeListArray);


}



// pre filling the form-
function fillForm(employee){
    

    for(let key in employee){
        if(key!=="Employee_ID"){
            form[key].value= employee[key];
        }
    }

}

// Edit functionality here-
function editRecord(event){
    formState["isCreatingorEditing"]="EDIT";
    let editButton= event.target;
    Submitbutton.innerText= "Update Employee";

    let editButton_ID= parseInt(event.target.getAttribute("data-empid"));
    formState["whichEmployeeUpdate"]= event.target.parentNode.parentNode;
    // console.log(editButton_ID);

    for(let i=0;i<employeeListArray.length;i++){
        if(employeeListArray[i].Employee_ID===editButton_ID){
            fillForm(employeeListArray[i]);
            break;
        }
    }
}


function updateEmployee(updateThis){
    
    let cells= updateThis.children;
    // console.log(updateThis);

    cells[0].innerText=form.name.value;
    cells[2].innerText=form.role.value;
    cells[3].innerText=form.team.value;
    cells[4].innerText=form.company.value;
    cells[5].innerText=form.salary.value;




    // to also update the employeeListArray -
    for(let i=0;i<employeeListArray.length;i++){
        if(employeeListArray[i].Employee_ID===parseInt(cells[1].innerText)){
            employeeListArray[i].name=cells[0].innerText;
            employeeListArray[i].role=cells[2].innerText;
            employeeListArray[i].team=cells[3].innerText;
            employeeListArray[i].company=cells[4].innerText;
            employeeListArray[i].salary=cells[5].innerText;
            break;
        }
    }
    formState.isCreatingorEditing="CREATE";
    formState.whichEmployeeUpdate=null;



    Submitbutton.innerText="Add Employee";
    return;
    
}
