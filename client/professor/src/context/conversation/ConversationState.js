import conversationContext from './conversationContext'
import axios from 'axios'

const ConversationState = (props) => {

    const host = 'http://localhost:8080/api/conversation'

    // ------------------ API calls -----------------

    // Create new Conversation

    const newConversation = async (members, teacherId) => {
        try {
          const res = await axios.post(`${host}/student/class`, {members, teacherId});
          return res;
        } catch (error) {
          return "error";
        }
      };

    //    All Converstion 
    
    const allConversations = async () => {
        try {
            const res = await axios.get(`${host}/all`)
            return res
        } catch (error) {
            return "error";
        }
    }



    return (
    <conversationContext.Provider value={{ newConversation, allConversations }}>
        {props.children}
    </conversationContext.Provider>
    )
}

export default ConversationState