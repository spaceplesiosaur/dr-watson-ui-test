import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addMessage, clearMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      // messages: []
    }
  }

  addMessage = (message, isUser) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, { message, isUser }]});
  }

  // clearMessages = () => {
  //   this.setState({ messages: [] });
  // }

  clearMessages = () => {
    this.props.clearMessages();
  }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.clearMessages();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  // const { user } = this.props;
  // const { messages } = this.state;
  render() {

    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!this.props.user && <WelcomeModal addMessage={this.props.addMessage} />}
        {this.props.user && <ChatBox addMessage={this.props.addMessage} messages={this.state.messages} />}
      </div>
    );
  }
}

export const mapStateToProps = ({ user, messages }) => ({
  user: user,
  messages: messages
});

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser()),
  hasErrored: (message) => dispatch(hasErrored(message)),
  addMessage: (newMessage) => dispatch(addMessage(newMessage)),
  clearMessages: (i) => dispatch(clearMessages())
})

// export const mapDispatchToProps = dispatch =>  bindActionCreators({ removeUser, hasErrored }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
