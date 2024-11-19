
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import red from '@mui/material/colors/red';
const chats_messages = [
  { role: "user", content: "What is the weather today?" },
  { role: "assistant", content: "Today's weather is sunny with a high of 25°C and a low of 15°C." },
  { role: "user", content: "Can you help me write a short story?" },
  { role: "assistant", content: "Of course! What genre are you interested in?" },
  { role: "user", content: "Tell me a joke." },
  { role: "assistant", content: "Why don't skeletons fight each other? They don't have the guts!" },
  { role: "user", content: "What are the benefits of exercising daily?" },
  { role: "assistant", content: "Daily exercise improves your mood, boosts energy, and helps you maintain a healthy weight." },
  { role: "user", content: "How do I learn JavaScript?" },
  { role: "assistant", content: "You can start by exploring online tutorials, practicing coding regularly, and building small projects to enhance your skills." }
];
import ChatItem from "../components/chat/ChatItem"
import { IoMdSend } from 'react-icons/io';

export default function Chat() {
  const auth=useAuth();
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box 
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },flex:0.2,flexDirection:"column"
        }}
      >
        <Box 
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)", 
            borderRadius:5,
            flexDirection:"column",
            mx:3,
          }}
        >
          <Avatar
              sx={{
                mx:"auto",
                my:2,
                bgcolor:"white",
                color:"black",
                fontWeight:700,
              }}
          >{auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{mx:"auto",fontFamily:"work sans"}}>You are talking to a chatBot</Typography>
          <Typography sx={{mx:"auto",fontFamily:"work sans",my:4,p:3}}>You can ask Questions related to knowledge, Business, Advices, Education, etc. But Avoid sharing your personal information</Typography>
          <Button
              sx={{
                width:"200px",
                my:"auto",
                color:"white",
                fontWeight:"700",
                borderRadius:3,
                mx:"auto",
                bgcolor:red[300],
                ":hover":{
                  bgcolor:red.A400,
                }
              }}
          >Clear Conversation</Button>
        </Box>
        </Box>
        <Box sx={{display:"flex",flex:{md:0.8,xs:1,sm:1},flexDirection:"column",px:3,}}>
          <Typography sx={{textAlign:"center",fontSize:"40px",color:"white",mb:2,mx:"auto"}}>My_GPT.Bot</Typography>
          <Box 
              sx={{
                width:"100%",
                height:"60vh",
                borderRadius:3,
                mx:'auto',
                dispaly:'flex',
                flexDirection:"column",
                overflow:"scroll",
                overflowX:"hidden",
                overflowY:"auto",
                scrollBehavior:"smooth"}}>{chats_messages.map((chat,index)=>(<ChatItem content={chat.content} role={chat.role} key={index} ></ChatItem>))}
                </Box>
                <div style={{width:"100%",padding:"20px",borderRadius:8,backgroundColor:"rgb(17,27,39)",display:"flex",margin:"auto"}}> 
                {" "}
                <input type="text" placeholder='type a message' style={{
                  width:"100%",
                  backgroundColor:"transparent",
                  padding:"10px",
                  border:"none",
                  outline:"none",
                  color:"white",
                  fontSize:"20px"
                
                  }} />
                
                  <IconButton sx={{ml:"auto",color:"white"}}><IoMdSend/></IconButton>
                 
            </div>    
        </Box>
      </Box>
  
  );
}
