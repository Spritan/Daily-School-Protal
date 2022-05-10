import * as React from 'react';

import "./mainbody.scss";

const Mainbody = () => {

  return (
    <>
      <div className="main">
        <div className='flex1'></div>
        <div className="mainbody">
          <h1>Attendance Report</h1>
          <div className='formsSection'>
            <div>Date: &ensp;
              <input type="date" name="" id="" /></div>
            <div><label for="Course">Course:</label>
              &ensp;
              <select name="Course" id="Course">
                <option value="B.Tech">B.Tech</option>
                <option value="B.Ca">B.Ca</option>
                <option value="M.Ca">M.Ca</option>
                {/* <option value="audi">Audi</option> */}
              </select></div>
            <div>
              <label for="Semester">Semester:</label>
              &ensp;
              <select name="Semester" id="Semester">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                {/* <option value="audi">Audi</option> */}
              </select>
            </div>

          </div>
          <br />
          <div className='formTable'>
            <table>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Attendence</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td><input type="checkbox" id='switch' /></td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td><input type="checkbox" id='switch' /></td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td><input type="checkbox" id='switch' /></td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td><input type="checkbox" id='switch' /></td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td><input type="checkbox" id='switch' /></td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td><input type="checkbox" id='switch' /></td>
              </tr>
            </table>

            <button> Submit </button>

          </div>
        </div>
        <div className='flex3'></div>
      </div>
    </>
  )
}

export default Mainbody