import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/modal.css';
import chatIcon from '../img/chat.png';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchReply = async (message) => {
    try {
      const { data } = await axios.post('/chat', { message });
      return data.response;
    } catch (error) {
      console.error('Error fetching reply:', error);
      return 'Failed to get response from server';
    }
  };

  const handleSend = async () => {
    const reply = await fetchReply(input);
    setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }, { text: reply, sender: 'bot' }]);
    setInput('');
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
   useEffect(() => {
      if (isModalOpen) {
        setMessages([{ text: '무엇을 도와드릴까요?', sender: 'bot' }]);
      }
    }, [isModalOpen]);

  return (
    <div className="chat">
      <img className="chatIcon" src={chatIcon} alt="Chat Icon" onClick={openModal} />
        <div className="icon-label">AI 비서</div>
      {/* 모달 */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close" onClick={closeModal}>&times;</div>

            {/* 대화 표시 */}
            <div className="chat-box">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <p className="message-text">{message.text}</p>
                </div>
              ))}
            </div>

            {/* 입력 필드 */}
     <div className="row mb-3">
       <div className="col">
         <input type="text" className="form-control" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
       </div>
       <div className="col-auto">
         <button className="btn btn-primary" type="button" onClick={handleSend}>Send</button>
       </div>
     </div>
            </div>
          </div>
      )}
    </div>
  );
}

export default Chat;
