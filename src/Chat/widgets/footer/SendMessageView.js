import React, { useMemo } from 'react'
import './style.css'

export default function SendMessageView ({ handleSubmit, message, handleChange, typing }) {
  const typingUsers = useMemo(() => {
    if (!typing.length) return null
    if (typing.length < 4) {
      return `${typing.map(({ user }) => user).join(',')} ${typing.length === 1 ? ' is typing...' : ' are typing...'}`
    }
    return `${typing[0].user} and ${typing.length - 1} other are typing...`
  }, [typing])
  return (
    <div className="footer">
      <p className="typing">{typingUsers}</p>
      <form className="controls" onSubmit={handleSubmit}>
        <input
          placeholder="Say something"
          value={message}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </div>
  )
}
