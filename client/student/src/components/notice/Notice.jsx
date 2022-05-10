import React from 'react'
import "./notice.scss"
const Notice = () => {
    return (
        <div class="notice-box notice">
            <h4><span className='noticeHeading'>Error: </span></h4>
            {/* <br /> */}
            <span className="noticeText"> Write your error message here.</span>
            <br />
            <span className='noticeBy'>ME</span>
            &
            <span className='noticetime'>10:00</span>
        </div>
    )
}

export default Notice