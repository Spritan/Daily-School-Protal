import studentContext from './studentContext'
import axios from 'axios'
import { Password } from '@mui/icons-material'

const StudentState = (props) => {

    const host = "http://localhost:8080/api/student"

    //  Api Calls

    // ---------------Login Student --------------
    const studentLogin = async (email, password) => {
        try {
            const res = axios.post(`${host}/login`, {email, password})
            return res
        } catch (error) {
            return 'error'
        }
    }


    return (
        <studentContext.Provider value={{ studentLogin }} >
            {props.children}
        </studentContext.Provider>
    )
}

export default StudentState