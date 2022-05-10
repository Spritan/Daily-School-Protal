import React from 'react'
import "./newNotice.scss"
import Sidebar from '../../components/sidebar/Sidebar'
const NewNotice = () => {
    return (
        <div>
            <Sidebar />
            <div className="notice-form">
                <form>
                    <h1>Notice</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="text" placeholder="Heading" autocomplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Body" autocomplete="nope" />
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Announchment by." autocomplete="nope" />
                        </div>
                        {/* <a href="#" className="link">Forgot Your Password?</a> */}
                    </div>
                    <div className="action">
                        {/* <button>Register</button> */}
                        <button>Publish</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewNotice