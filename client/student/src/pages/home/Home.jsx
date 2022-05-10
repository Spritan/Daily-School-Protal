import { useContext, useEffect, useMemo, useState } from "react";
import Notice from "../../components/notice/Notice";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="topbar">
        <h1>Daily Student Portal</h1>
        <span className='StudentName'>Proyash Paban Sarma Borah</span>
        <br />
        <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span>
      </div>
      <div className="dashBody">
        <div className="dashBody__content">

          <div className="flexabout">
          </div>
          <div className="about">
            <br />
            <h1>About GIMPT</h1>
            <br />
            <br />
            <q>A commitment towards academic excellence</q>
            <br />
            The Institute was founded on 7th September 2006 as the first non-governmental engineering institute in the state of Assam under the aegis of the Shrimanta Shankar Academy Society, a registered service organization set up in the year 1992 to make significant contribution for social upliftment through education and also to inculcate among the youth a sense of discipline.
            <br />
            The motto of the Society is "Truth, Discipline & Excellence" and ever since its inception its aim has been to establish a morally sound educational system which not only produces competent professionals but also excellent human beings contributing towards the welfare of the Society.
          </div>


        </div>
        <div className="notices">
            <h1>Notices</h1>
            <Notice />
        </div>
      </div>
    </>
  )
}

export default Home