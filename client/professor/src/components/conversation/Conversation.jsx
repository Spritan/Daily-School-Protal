import React, { useContext, useState, useEffect } from 'react'
import professorContext from '../../context/professor/professorContext'
import "./conversation.scss"

function Conversation({teacherId}) {

  const { findProfessor } = useContext(professorContext)
  const [reqProfessor, setReqProfessor] = useState()

  useEffect(() => {
    const fetchProfessor = async () => {
      const res = await findProfessor(teacherId)
      setReqProfessor(res.data)
    }
    fetchProfessor()
  }, [])
  

  return (
    <div className='conversation'>
        <img className="conversationImg" src="https://th.bing.com/th/id/OIP.p-tCU_opnL7Co30gF4n9EwHaFq?pid=ImgDet&rs=1" alt="" />
        <span className="conversationName">
            {`${reqProfessor && reqProfessor.name}'s room`}
        </span>
    </div>
  )
}

export default Conversation