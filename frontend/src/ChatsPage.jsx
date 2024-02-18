import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const chatProps = 
    useMultiChatLogic('60477ce2-ceac-4524-ac34-c60f3bd00087', 
    props.user.username, 
    props.user.secret)
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        

    </div>;


  };
  export default ChatsPage;
  