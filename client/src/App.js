import logo from './logo.svg';
import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
    <aside className="sidemenu">
      <div className="side-menu-button">
      <span> + </span>
        New chat
      </div>
    </aside>
    <section className="chatbox">
      <div className="chat-log">
        <div className="chat-message">
          <div className="avatar">

          </div>
          <div className="message">
            
          </div>
        </div>
      </div>
      <div className="chat-input-holder">
        <textarea className="chat-input-textarea" 
        rows="1"
        ></textarea>
      </div>
    </section>
      
    </div>
  );
}

export default App;
