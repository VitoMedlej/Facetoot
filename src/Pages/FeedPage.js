import {signOut} from 'firebase/auth'
import {auth} from '../Auth/initialize'
import NavBody from '../Components/Navbar/NavBody'
import {useState, useEffect} from 'react'
import MainPage from './MainPage'
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import ProfilePage from './ProfilePage'

const FeedPage = () => {
    const [open,
        SetOpen] = useState(false)
    const signOutfn = async() => {
        await signOut(auth)
    }
    useEffect(() => {
        document.body.className = "bg-gray-200"
    }, []);
    
    document.body.addEventListener('click', (e) => {
            if (!e.target.classList.contains('dropdownmenu')) {
                SetOpen(false);
            }
        })
       
    return (
        <Router>
            <div className="bg-gray-200">
            <NavBody open={open} SetOpen={SetOpen} signOutfn={signOutfn}/>
            </div>
            <Switch>
                <Route exact path="/">
                    <div className="bg-gray-200">
                        <MainPage/>
                    </div>
                </Route>
                <Route path={`/profile/:id`}>
                    <ProfilePage/>
                </Route>
            </Switch>

        </Router>

    )
}

export default FeedPage
