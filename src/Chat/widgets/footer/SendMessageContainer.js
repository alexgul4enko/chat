import React from 'react'
import SendMessageView from './SendMessageView'
import { useChat } from '../../ChatProvider'

export default function SendMessageContainer (props) {
  const [message, setMessage] = React.useState('')
  const { sendMessage, typing } = useChat()
  const handleChange = React.useCallback((e) => {
    setMessage(e.target.value)
  }, [setMessage])

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault()
    setMessage('')
    if (!setMessage) return
    window.Chat.sendMessage(message)
  }, [message, sendMessage, setMessage])

  return (
    <SendMessageView
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      typing={typing}
    />
  )
}
