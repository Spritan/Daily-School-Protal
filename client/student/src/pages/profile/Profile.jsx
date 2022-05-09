import Sidebar from "../../components/sidebar/Sidebar";
// import ProfileBody from "../../components/profileBody/ProfileBody";
import "./profile.scss";

const Profile = () => {
    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="flex"></div>
                <div className="profileBody">
                    <div className="profileBody1">
                        <div className="profileCol1">
                            <img 
                            className="UserImg"
                            src="https://th.bing.com/th/id/OIP.p-tCU_opnL7Co30gF4n9EwHaFq?pid=ImgDet&rs=1" 
                            alt="" />
                        </div>
                        <div className="profileCol2">
                            <h1>Details</h1>
                            <p className="Tags">Name: <span className="User Name" >Proyash Paban Sarma Borah</span></p>
                            <p className="Tags">Roll No.: <span className="User rollNo" >123</span></p>
                            <p className="Tags">Course: <span className="User course" >123</span></p>
                            <p className="Tags">Depatment: <span className="User Department" >Electronics and Telecommunication Engineering</span></p>
                        </div>
                    </div>
                    <div className="profileBody2">
                        <div className="profileCol3">
                            <p className="Tags">Email: <span className="User Name" >proyash20-331@aec.ac.in</span></p>
                            <p className="Tags">address: <span className="User rollNo" >Panikara Gaon, Morangi Chari Ali, dist: Golaghat Golaghat, Assam, 785702 India</span></p>
                            <p className="Tags">phoneNumber: <span className="User course" >6913911634</span></p>
                            <p className="Tags"> semester : <span className="User Department" >Null</span></p>
                        </div>
                        <div className="profileCol3" >
                        <p className="Tags">Email: <span className="User Name" >proyash20-331@aec.ac.in</span></p>
                            <p className="Tags">address: <span className="User rollNo" >Panikara Gaon, Morangi Chari Ali, dist: Golaghat Golaghat, Assam, 785702 India</span></p>
                            <p className="Tags">phoneNumber: <span className="User course" >6913911634</span></p>
                            <p className="Tags"> semester : <span className="User Department" >Null</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex"></div>
            </div>


        </>
    )
}

export default Profile