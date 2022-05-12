import React, { useContext } from 'react'
import professorContext from '../../context/professor/professorContext'
import "./conversation.scss"

function Conversation({conversation}) {

  const { fetchAllProfessor } = useContext(professorContext)

  return (
    <div className='conversation'>
        <img className="conversationImg" src="https://th.bing.com/th/id/OIP.p-tCU_opnL7Co30gF4n9EwHaFq?pid=ImgDet&rs=1" alt="" />
        <span className="conversationName">
            Proyash Paban Sarma Borah's Room
        </span>
    </div>
  )
}

export default Conversation