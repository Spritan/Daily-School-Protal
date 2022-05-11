import professorContext from './professorContext'
import axios from 'axios'
import { Password } from '@mui/icons-material'

const ProfessorState = (props) => {

    const host = 'http://localhost:8080/api'

    //  ------------Api Calls ------------

    // Login Professor

    const loginProfessor = async (email, password) => {
        try {
            const res = axios.post(`${host}/professor/login`, {email, password})
            return res
        } catch (error) {
            return 'error'
        }
    }

    //  Get All Professor

    const fetchAllProfessor = async () => {
        try {
            const res = axios.get(`${host}/professor/all`)
            return res
        } catch (error) {
            return 'error'
        }
    }


    return(
    <professorContext.Provider value={{  loginProfessor, fetchAllProfessor }}>
        {props.children}
    </professorContext.Provider>
    )
}

export default ProfessorState