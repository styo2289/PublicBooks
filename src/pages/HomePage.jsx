import {Link} from "react-router-dom";
import styles from './css-files/HomePage.module.css'

function HomePage() {
    return(
        <div className={styles.parent}>
            <header>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/accountPage'>Account Page</Link></li>
                    <li><Link to='/createAccountPage'>Create Account</Link></li>
                    <li><Link to='/loginPage'>Login</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default HomePage;