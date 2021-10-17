import {useSelector} from 'react-redux'
import LoginPage from './LoginPage'
import SignInPage from './SignInPage'

const AuthPage = () => {
    const page = useSelector(state => state.page.currentPage)

    return (
        <>
                <h1 className="mt-5 mx-5 mb-0 ">facetoot</h1>
                {page === 'login'
                ? <LoginPage/>
                : <SignInPage/>}
        </>
    )
}

export default AuthPage
