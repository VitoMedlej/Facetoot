import {useSelector} from 'react-redux'
import LoginPage from './LoginPage'
import SignInPage from './SignInPage'
import { useEffect } from 'react'
const AuthPage = () => {
    const page = useSelector(state => state.page.currentPage)
    
    useEffect(() => {
        document.body.className = "bg-white"
    }, []);

    return (
        <>
                <h1 className="mt-5 mx-5 mb-0 blue font-medium">facetoot</h1>
                {page === 'login'
                ? <LoginPage/>
                : <SignInPage/>}
        </>
    )
}

export default AuthPage
