import styles from './css-files/CreateAccountPage.module.css'
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
import CreateAccountValidation from '../components/CreateAccount/CreateAccountValidation'

function CreateAccountPage(){
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    // TODO: INSERT VALIDATION OF INFORMATION: regex validation for all fields

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        const err = CreateAccountValidation(values.firstName, values.lastName, values.userName, values.email, values.password)
        setErrors(err)

        if(errors.firstName === '' && errors.lastName === '' && errors.userName === '' && errors.email === '' && errors.password === ''){
            axios.post('/add_user', values)
                .then((res) => {
                    navigate('/')
                    console.log(res)
                })
                .catch((err) => console.log(err))
        }
    }
    return(
        <div>
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className={styles.inputBox}>
                            <label>First Name</label>
                            <input type="text" name="firstName"
                                   placeholder={"John"}
                                   onChange={(e) => setValues({...values, firstName: e.target.value})}
                            />
                            {errors.firstName && <span className={styles.formErrors}>{errors.firstName}</span>}
                        </div>
                        <div className={styles.inputBox}>
                            <label>Last Name</label>
                            <input type="text" name="lastName"
                                   placeholder={"Smith"}
                                   onChange={(e) => setValues({...values, lastName: e.target.value})}
                            />
                            {errors.lastName && <span className={styles.formErrors}>{errors.lastName}</span>}
                        </div>
                        <div className={styles.inputBox}>
                            <label>User Name</label>
                            <input type="text" name="userName"
                                   placeholder={"jsmith123"}
                                   onChange={(e) => setValues({...values, userName: e.target.value})}
                            />
                            {errors.userName && <span className={styles.formErrors}>{errors.userName}</span>}
                        </div>
                        <div className={styles.inputBox}>
                            <label>Email</label>
                            <input type="text" name="email"
                                   placeholder={"JohnSmith@gmail.com"}
                                   onChange={(e) => setValues({...values, email: e.target.value})}
                            />
                            {errors.email && <span className={styles.formErrors}>{errors.email}</span>}
                        </div>
                        <div className={styles.inputBox}>
                            <label>Password</label>
                            <input type="password" name="password"
                                   placeholder={"Password"}
                                   onChange={(e) => setValues({...values, password: e.target.value})}
                            />
                            {errors.password && <span className={styles.formErrors}>{errors.password}</span>}
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                        <div className={styles.haveAccount}>
                            <p>Have an account? Click <Link to="/loginPage">here</Link> to login.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAccountPage;