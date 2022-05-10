import React from 'react'
import "./newTest.scss"
import Sidebar from '../../components/sidebar/Sidebar'
const NewTest = () => {
  return (
    <div>
        <Sidebar/>
        <div className="test-form">
                <form>
                    <h1>Test</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="text" placeholder="Heading" autocomplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="date" placeholder="Date and time" autocomplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="time" placeholder="" autocomplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="time" placeholder="" autocomplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="info." autocomplete="nope" />
                        </div>
                        {/* <a href="#" className="link">Forgot Your Password?</a> */}
                    </div>
                    <div className="action">
                        <button>Upload Questions</button>
                        <button>Publish</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default NewTest