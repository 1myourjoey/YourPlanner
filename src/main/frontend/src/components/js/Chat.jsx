import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/modal.css';
import chatIcon from '../img/chat.png';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const exampleQuestions = ['제주도 여행 가고싶어', '강원도 맛집 추천해줘', '부산 관광지 추천해줘'];

  useEffect(() => {
    if (isModalOpen) {
      setMessages([{ text: '무엇을 도와드릴까요?', sender: 'bot' }]);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isLoading) {
      setMessages(prevMessages => [...prevMessages, { text: '로딩 중...', sender: 'bot' }]);
    }
  }, [isLoading]); // isLoading 상태가 변경될 때만 useEffect가 실행되도록 설정

const fetchReply = async (message) => {
  try {
    const { data } = await axios.post('/chat', { message });
    return data.response;
  } catch (error) {
    console.error('Error fetching reply:', error);
    return 'Failed to get response from server';
  }
};

const handleSend = async (message) => {
  // 사용자의 질문을 먼저 대화 영역에 표시합니다.
  setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
  // 로딩 상태를 활성화합니다.
  setIsLoading(true);
      // 추천 질문을 사라지게 설정합니다.
      setSelectedQuestion(message);
  try {
    // 답변을 받아옵니다.
    const reply = await fetchReply(message);
    // 답변을 받은 후에 대화 영역에 표시합니다.
    setMessages(prevMessages => [...prevMessages, { text: reply, sender: 'bot' }]);
  } catch (error) {
    console.error('Error fetching reply:', error);
    // 에러가 발생했을 경우 대화 영역에 에러 메시지를 표시합니다.
    setMessages(prevMessages => [...prevMessages, { text: 'Failed to get response from server', sender: 'bot' }]);
  } finally {
    // 로딩 상태를 비활성화합니다.
    setIsLoading(false);
  }
};


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend(input);
      setInput('');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedQuestion('');
  };

  const handleExampleQuestionClick = async (question) => {
    setSelectedQuestion(question);
    handleSend(question);
  };

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
                  <p className="message-text">{message.text.split('\n').map((line, index) => <span key={index}>{line}<br/></span>)}</p>
                </div>
              ))}
            {/* 추천 질문 */}
            {!selectedQuestion && (
              <div className="example-questions">
                {exampleQuestions.map((question, index) => (
                  <button key={index} className="btn btn-outline-secondary" onClick={() => handleExampleQuestionClick(question)}>{question}</button>
                ))}
              </div>
            )}
            </div>
            {/* 입력 필드 */}
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary" type="button" onClick={() => handleSend(input)}>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
