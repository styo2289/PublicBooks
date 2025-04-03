function CreateAccountValidation(firstName, lastName, userName, email, password){
    const errors = {}

    const validName = new RegExp(
        '^[a-zA-Z][a-zA-Z\\s]{0,20}[a-zA-Z]$'
    )
    const validUsername = new RegExp(
        '^(?=.{4,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'
    )
    const validEmail = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|.(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    )
    const validPassword = new RegExp(
        '^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&? "]).*$'
    )

    if(firstName === ''){
        errors.firstName = "First name cannot be empty."
    } else if(!validName.test(firstName)){
        errors.firstName = "Not a valid first name."
    } else {
        errors.firstName = ""
    }

    if(lastName === ''){
        errors.lastName = "Last name cannot be empty."
    } else if(!validName.test(lastName)){
        errors.lastName = "Not a valid last name."
    } else {
        errors.lastName = ""
    }

    if(userName === ''){
        errors.userName = "Username cannot be empty."
    } else if(userName.length < 4 || userName.length >= 16){
        errors.userName = "Username must be minimum of 4 characters and maximum of 16 characters."
    } else if(!validUsername.test(userName)){
        errors.userName = "Not a valid username."
    } else {
        errors.userName = ""
    }

    if(email === ''){
        errors.email = "Email cannot be empty."
    } else if(!validEmail.test(email)){
        errors.email = "Not a valid email."
    } else {
        errors.email = ""
    }

    if(password === ''){
        errors.password = "Password cannot be empty."
    } else if(!validPassword.test(password)){
        errors.password = "Password must contain 8 characters and at least one number, one letter and one unique character."
    } else {
        errors.password = ""
    }

    return errors
}

export default CreateAccountValidation;