const Validation = (values)=>{
    let errors= {}
    if(!values.name){
        errors.name ="Name Required"
    }
    else if(values.name.length <5){
        errors.name = "Name must be more than 5 characters"
    }
    // if(!values.password){
    //     errors.password = "Not valid password"
    // }else if(values.password.length<9){
    //     errors.password = "passwordmust be more than 9"
    // }
    return errors
}

export default Validation;