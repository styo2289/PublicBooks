function LoginValidation(userName, password){
    const errors = {}

    const validUsername = new RegExp(
        '^(?=.{4,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'
    )

    const validPassword = new RegExp(
        '^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&? "]).*$'
    )
}

export default LoginValidation;