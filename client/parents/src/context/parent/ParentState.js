import parentContext from './parentContext'
import axios from 'axios'
// import { Password } from '@mui/icons-material'

const ParentState = (props) => {

    const host = "http://localhost:8080/api/parent"

    //  Api Calls

    // ---------------Login Student --------------
    const parentLogin = async (email, password) => {
        try {
            const res = axios.post(`${host}/login`, {email, password})
            return res
        } catch (error) {
            return 'error'
        }
    }


    return (
        <parentContext.Provider value={{ parentLogin }} >
            {props.children}
        </parentContext.Provider>
    )
}

export default ParentState