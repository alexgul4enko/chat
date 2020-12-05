import React, { useMemo } from 'react'
import Message from './widgets/message'
import { useChat } from '../../ChatProvider'

export default function List () {
  const { messages } = useChat()
  return useMemo(() => messages.map(({ id, ...rest }) => (<Message {...rest} key={id}/>)), [messages])
}
