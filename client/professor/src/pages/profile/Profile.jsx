import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import ProfileBody from "../../components/profileBody/ProfileBody";
import "./profile.scss";

const Profile = () => {

    const [reqProfessor, serReqProfessor] = useState([])

    useEffect(() => {
        serReqProfessor(JSON.parse(localStorage.getItem('professor')))
    }, [])
    

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
                            src={reqProfessor.profilePic ? reqProfessor.profilePic : ""} 
                            alt="" />
                        </div>
                        <div className="profileCol2">
                            <h1>Details</h1>
                            <p className="Tags">Name: <span className="User Name" >{reqProfessor.name}</span></p>
                            <p className="Tags">Email: <span className="User rollNo" >{reqProfessor.email}</span></p>
                            <p className="Tags">Course: <span className="User course" >123</span></p>
                            <p className="Tags">Depatment: <span className="User Department" >Electronics and Telecommunication Engineering</span></p>
                        </div>
                    </div>
                    <div className="profileBody2">
                        <div className="profileCol3">
                            <p className="Tags">Name: <span className="User Name" >Proyash Paban Sarma Borah</span></p>
                            <p className="Tags">Roll No.: <span className="User rollNo" >123</span></p>
                            <p className="Tags">Course: <span className="User course" >123</span></p>
                            <p className="Tags">Depatment: <span className="User Department" >Electronics and Telecommunication Engineering</span></p>
                        </div>
                        <div className="profileCol4" >

                        </div>
                    </div>
                </div>
                <div className="flex"></div>
            </div>


        </>
    )
}

export default Profile