import App from "../../App"
import {UserProviderWrapper} from "../../contexts/UserContext"
import {BrowserRouter as Router} from "react-router-dom"

const Boot = () =>{
    return (
        <UserProviderWrapper>
            <Router>
                <App />
            </Router>       
        </UserProviderWrapper>
    )
}

export default Boot