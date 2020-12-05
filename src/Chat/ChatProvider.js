import React, { createContext, useContext, Component } from 'react'

export const ChatContext = createContext()

export default class ChatProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      typing: []
    }
  }

  componentDidMount () {
    window.Chat.onMessage((message) => {
      const last = this.state.messages.slice(-1)[0]
      const isSameUser = (last && last.user) === message.user
      this.setState({
        messages: [...this.state.messages, { ...message, isSameUser }]
      }, () => document.body.scrollIntoView(false))
    })

    window.Chat.onTyping((user) => {
      if (user === 'Me') return
      const id = new Date().getTime()
      const timer = setTimeout(() => {
        this.setState({
          typing: this.state.typing.filter(user => user.id !== id)
        })
      }, 8000)
      this.setState({
        typing: [...this.state.typing, { user, id, timer }]
      })
    })
  }

  componentWillUnmount () {
    // can not usregister chat listeners
    this.state.typing.forEach(({ timer }) => {
      clearTimeout(timer)
    })
  }

  render () {
    return (
     <ChatContext.Provider value={this.state}>
      {this.props.children}
    </ChatContext.Provider>

    )
  }
}

// HOC
export function withChat (ChildComponent) {
  return function (props) {
    return (
      <ChatContext.Consumer>
        {(chat) => (<ChildComponent {...props} {...chat}/>)}
      </ChatContext.Consumer>
    )
  }
}

export function useChat () {
  return useContext(ChatContext)
}
