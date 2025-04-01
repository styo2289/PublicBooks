import styles from './css-files/CreateAccountPage.module.css'
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CreateAccountValidation from '../components/CreateAccount/CreateAccountValidation'

function CreateAccountPage(){
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    })

    // TODO: INSERT VALIDATION OF INFORMATION: regex validation for all fields

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/add_user', values)
            .then((res) => {
                navigate('/')
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    return(
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Add Student</h1>
                    <div className={styles.input}>
                        <label className={styles.label}>First Name</label>
                        <input type="text" name="firstName"
                        onChange={(e)=> setValues({...values, firstName: e.target.value})}
                        />
                    </div>
                    <div className={styles.input}>
                        <label className={styles.label}>Last Name</label>
                        <input type="text" name="lastName"
                        onChange={(e)=> setValues({...values, lastName: e.target.value})}
                        />
                    </div>
                    <div className={styles.input}>
                        <label className={styles.label}>User Name</label>
                        <input type="text" name="userName"
                        onChange={(e) => setValues({...values, userName: e.target.value})}
                        />
                    </div>
                    <div className={styles.input}>
                        <label className={styles.label}>Email</label>
                        <input type="text" name="email"
                        onChange={(e)=> setValues({...values, email: e.target.value})}
                        />
                    </div>
                    <div className={styles.input}>
                        <label className={styles.label}>Password</label>
                        <input type="password" name="password"
                        onChange={(e) => setValues({...values, password: e.target.value})}
                        />
                    </div>
                    <div className={styles.button}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateAccountPage;