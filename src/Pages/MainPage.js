import CAPform from "../Components/CreateApost/CAPform"
import PostsSection from '../Components/Posts/PostsSection'

const MainPage = () => {
    return (
        <section className="h-full bg-gray-200 ">
        <div className=" feedsection feedst">
            <article className="sm:w-11/12 lg:w-9/12 capformst sm:px-2">
                <CAPform/>
            </article>
            <PostsSection/>
        </div>
    </section>
    )
}

export default MainPage
