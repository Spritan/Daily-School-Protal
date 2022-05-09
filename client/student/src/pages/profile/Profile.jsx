import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.scss";

const Profile = () => {
    return (
        <>
            <Sidebar />
                <div className="topbar">
                   <h1>Student Profile</h1>
                    <span className='StudentName'>Proyash Paban Sarma Borah</span>
                    <br />
                <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span>
            
        </div>
        </>
    )
}

export default Profile