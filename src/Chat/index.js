import React from 'react'
import ChatProvider from './ChatProvider'
import Footer from './widgets/footer'
import List from './widgets/list'

export default () => (
  <ChatProvider>
    <List/>
    <Footer />
  </ChatProvider>
)
