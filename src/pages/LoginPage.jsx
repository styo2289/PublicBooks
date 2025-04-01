import styles from './css-files/CreateAccountPage.module.css'
import {useState} from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import LoginValidation from '../components/Login/LoginValidation'

function LoginPage(){
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    // TODO: INSERT VALIDATION OF INFORMATION: regex validation for all fields (username, password)

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/login', values)
            .then((res) => {
                //LoginValidation(username, password)
                navigate('/accountPage')
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    return(
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div>
                        <label className={styles.label}>Username</label>
                        <input type="text" name="username"
                        onChange={(e) => setValues({...values, username: e.target.value})}
                        />
                    </div>
                    <div>
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
    )
}

export default LoginPage;