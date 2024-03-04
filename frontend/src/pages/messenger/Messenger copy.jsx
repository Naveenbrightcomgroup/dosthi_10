
// function Messenger() {
//   const scroolRef = useRef();
//   const { user } = useSelector((state) => ({ ...state }));

//   const [conversations, setConversations] = useState([]);
//   const [currentChat, setCurrentChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const socket = useRef(null);
//   const [arrivalmessages, setArrivalMessages] = useState(null);
//   const [chatOnline,setChatOnline] = useState(null)
//   const [online,setOnline] = useState(false)
//   const [loading, setLoading] = useState(false);

//   // intializing the socket and get the new messges
//   useEffect(() => {

//     socket.current = io("ws://localhost:8001");

//     socket.current.on("getMessage", (data) => {

//       setArrivalMessages({
//         sender: data.senderId,
//         text: data.text,
//         createdAt: Date.now(),
//       });

//     });
//   }, []);


//   // if arrival messages present then add to messages
//   useEffect(() => {

//     arrivalmessages &&
//       currentChat?.members.includes(arrivalmessages.sender) &&
//       setMessages((prev) => [...prev, arrivalmessages]);

//   }, [arrivalmessages, currentChat]);


//   // calling the socket io
//   useEffect(() => {

//     // socket.current.on("start", (mess) => {
//     //   console.log(mess);
//     // });

//     socket.current.emit("addUser", user.id);

//     socket.current.on("getUsers", (users) => {
//       console.log(users);
//       // setChatOnline(users)
      
//       // const on =currentChat?.members?.includes(m=> m === (users.find(m=>m.userId ===m)))
//       // on && setOnline(true)
  
//     });
//     // console.log(chatOnline)
    

//   }, [user.id,currentChat,chatOnline]);


//   // getting the all conversationsid
//   useEffect(() => {

//     const getData = async () => {
//       try {
      //   const res = await axios.get(
      //   `${process.env.REACT_APP_BACKEND_URL}/getConversation/${user.id}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${user.token}`,
      //     },
      //   }
      // );
//         // console.log(res);
//         setConversations(res.data);
//       } catch (err) {
//         console.log({ err });
//       }
//     };
//     getData();

//   }, [user.id,user.token]);


//   // getting the all messages
//   useEffect(() => {

//     const getMessages = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_BACKEND_URL}/getMessages/${currentChat?._id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           }
//         );
//         setMessages(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getMessages();

//   }, [currentChat,user.token ]);


//   // sent the message to the backend
//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     const inputs = {
//       conversationId: currentChat._id,
//       senderId: user.id,
//       text: text,
//     };

//     const receiverId = currentChat.members.find(
//       (member) => member !== user.id
//     );
//     const datas = {
//       senderId: user.id,
//       receiverId: receiverId,
//       text: text,
//     };

//     socket.current.emit("sendMessage", datas);

//     try {
//       setLoading(true);
//       setText("");
//       const res =await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/newMessage/`,inputs,
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );
//       setMessages([...messages, res.data]);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }

//   };

//   // for scrollin the last message
//   useEffect(() => {

//     scroolRef.current?.scrollIntoView({ behaviour: "smooth" });

//   });

//   // console.log({ text });
//   console.log({ currentChat });
// console.log({user})
//   // console.log(messages[0] );
//   console.log({ arrivalmessages });
//   console.log({ chatOnline });



//   console.log("-----------------------");

//   return (
//     <>
//       <div className="messenger">
//         <div className="chatMenu">
//           <div className="chatMenuWrapper">
//             <input
//               type="text"
//               placeholder="search for the friends"
//               className="chatMenu_Input"
//             />
//             <div className="chatMenu_Top">
//               {conversations.map((c) => (
//                 <div onClick={() => setCurrentChat(c)}>
//                   <Conversation
//                     key={c._id}
//                     conversation={c}
//                     currentUser={user}
//                     // online={online}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="chatBox">
//           <div className="chatBoxWrapper">
//             {currentChat ? (
//               <>
//                 <div className="chatBox_Top">
//                   {messages.map((m) => (
//                     <div className="div" ref={scroolRef}>
//                       <Messages
//                         key={m._id}
//                         message={m}
//                         own={m.senderId == user.id}
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="chatBox_Bottom">
//                   <textarea
//                     name="text"
//                     value={text}
//                     id=""
//                     placeholder="send the text"
//                     className="chatBoxBottom_input"
//                     onChange={(e) => setText(e.target.value)}
//                     cols="20"
//                     rows="2"
//                   ></textarea>
//                   {loading ? <ClockLoader color="#36d7b7" size={30} /> : null}
//                   <button className="button1" onClick={handleSendMessage}>
//                     send
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <span className="noConversationText">
//                 Open a New Chat for Conversation
//               </span>
//             )}
//           </div>
//         </div>
//         <div className="chatOnline">
//           <div className="chatOnlineWrapper">
//             <ChatOnline chatOnline={chatOnline} currentUser={user}/>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Messenger;

