import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import ProfileBody from "../../components/profileBody/ProfileBody";
import "./profile.scss";

const Profile = () => {

    const [reqStudent, setReqStudent] = useState([])

    useEffect(() => {
        setReqStudent(JSON.parse(localStorage.getItem('student')))
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
                            src={reqStudent.profilePic} 
                            alt="" />
                        </div>
                        <div className="profileCol2">
                            <h1>Details</h1>
                            <p className="Tags">Name: <span className="User Name" >{reqStudent.name}</span></p>
                            <p className="Tags">Roll No.: <span className="User rollNo" >{reqStudent.rollNo}</span></p>
                            <p className="Tags">Course: <span className="User course" >{reqStudent.courseName}</span></p>
                            <p className="Tags">Depatment: <span className="User Department" >{reqStudent.deptName}</span></p>
                        </div>
                    </div>
                    <div className="profileBody2">
                        <div className="profileCol3">
                            <p className="Tags">Email: <span className="User Name" >{reqStudent.email}</span></p>
                            <p className="Tags">address: <span className="User rollNo" >{reqStudent.address}</span></p>
                            <p className="Tags">phoneNumber: <span className="User course" >{reqStudent.phoneNumber}</span></p>
                            <p className="Tags"> semester : <span className="User Department" >{reqStudent.semester}</span></p>
                        </div>
                        <div className="profileCol3" >
                        <p className="Tags">Mother's Name: <span className="User Name" >{reqStudent.mother_name}</span></p>
                            <p className="Tags">Father's Name: <span className="User rollNo" >{reqStudent.father_name}</span></p>
                            {/* <p className="Tags">phoneNumber: <span className="User course" >6913911634</span></p>
                            <p className="Tags"> semester : <span className="User Department" >Null</span></p> */}
                        </div>
                    </div>
                </div>
                <div className="flex"></div>
            </div>


        </>
    )
}

export default Profile