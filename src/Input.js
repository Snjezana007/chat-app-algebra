import {Component} from "react";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Input extends Component {
    state = {
      text: ""
    }
    warningToast = () => toast.warning('Start typing...', 
    {
      position:"bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"colored",
    });
    onChange(e) {
      this.setState({text: e.target.value});
    }
  
    onSubmit(e) {
      e.preventDefault();
      if(this.state.text === ""){
        this.warningToast()
        return false
      }
      this.setState({text: ""});
      this.props.onSendMessage(this.state.text);
    }
    render() {
      return (
        <div className="Input">
          <form onSubmit={e => this.onSubmit(e)}>
            <input
              onChange={e => this.onChange(e)}
              value={this.state.text}
              type="text"
              placeholder="Start typing..."
              autoFocus
            />
            <button>Send</button>
          </form>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
      );
    }
  }
  


export default Input;