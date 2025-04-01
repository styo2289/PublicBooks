function CreateAccountValidation(firstName, lastName, userName, email, password){
    const errors = {}

    const validName = new RegExp(
        '^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$'
    )
    const validUsername = new RegExp(
        '^[a-zA-Z0-9_-]{4,16}$'
    )
    const validEmail = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|.(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    )
    const validPassword = new RegExp(
        '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'
    )

}

export default CreateAccountValidation;