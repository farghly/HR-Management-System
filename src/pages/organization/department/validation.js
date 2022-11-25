const ValidationDepartment = (values)=>{
    let errors= {}
    if(!values.name){
        errors.name ="Name Required"
    }
    else if(values.name.trim().length <5){
        errors.name = "Name must be more than 5 characters"
    }
    return errors
}

const ValidationTask =(values)=>{
    let errors={}
    if(!values.name){
        errors.name="Task Name is required"
    }else if(!values.name.length <5){
        errors.name="Tak name must more than 4 characters"
    }
    else if(values.summary){
        errors.summary ="summary is requird"
    }else if(values.summary.length < 15){
        errors.summary ="summary must more than 15 characters"
    }else if(values.description){
        errors.description="description is requird"
    }else if(values.description.length < 15){
        errors.description ="description must more than 15 characters"
    }
    return errors
}

export  {ValidationDepartment,ValidationTask};