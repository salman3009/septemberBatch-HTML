function onSubmitHandler(event){
    event.preventDefault();
    let employeeDetails={};
    let list = document.forms[0];
    for(let elements of list){
        console.log(elements.value,elements.name);
        if(elements.name !=='submit'){
            employeeDetails[elements.name] = elements.value;
        }     
    }
    console.log(employeeDetails);
}