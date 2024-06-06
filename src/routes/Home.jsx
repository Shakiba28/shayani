import AdvanceSearch from "../component/home/AdvanceSearch";
import Comments from "../component/home/Comments";
import LastDoctor from "../component/home/LastDoctor";
import LastVideo from "../component/home/LastVideo";
import Login from "../component/home/Login";
import Possibilities from "../component/home/Possibilities";
import ShayaniEducation from "../component/home/ShayaniEducation";
import LastBlog from "../component/home/LastBlog";



export default function Home() {

    return (
        <>
            <Login />
            <AdvanceSearch />
            <Possibilities />
            <LastDoctor />
            <Comments />
            <ShayaniEducation />
            <LastVideo />
            <LastBlog />
        </>
    )
}