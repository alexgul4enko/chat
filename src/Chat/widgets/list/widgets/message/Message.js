import React, { useMemo } from 'react'
import cx from './utils/cx'
import time from './utils/time'
import './style.css'

export default function Message ({ content, timestamp, user, isSameUser }) {
  const messageClass = useMemo(() => cx('message', user === 'Me' && 'self', !isSameUser && 'with-arrow'), [user, isSameUser])
  return (
    <div className="row">
      <div className={messageClass}>
        {user === 'Me' || isSameUser ? null : <p className="user">{user}</p>}
        <p className="content">{content}</p>
        <p className="date">{time(timestamp)}</p>
      </div>
    </div>
  )
}
