import React, { useState } from 'react';
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img src={chatIcon} alt="Chat Icon" onClick={openModal} />

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>

            {/* 대화 표시 */}
            <div className="chat-box">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  <p className="message-text">{message.text}</p>
                </div>
              ))}
            </div>

            {/* 입력 필드 */}
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Type your message..." value={input} onChange={handleInputChange} />
              <div className="input-group-append">
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
