import {Link} from "react-router-dom";

function HomePage() {
    return(
        <div>
            <h1>Here is the home page</h1>
            <p> Click <Link to='/accountPage'>here</Link> to go to the Account page</p>
            <p> Click <Link to='/createAccountPage'>here</Link> to go to Create an account</p>
            <p>click <Link to='/loginPage'>here</Link> to go to the Login page.</p>
        </div>
    );
}

export default HomePage;