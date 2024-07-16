import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    // script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Clear your queries",
      botConversationDescription: "Created by our team",
      botId: "67c4064c-b330-4004-8309-ef5339f588b4",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl : "https://messaging.botpress.cloud",
      clientId : "67c4064c-b330-4004-8309-ef5339f588b4",
      webhookId : "19f4700e-5910-4d91-b2bb-af5a70a78f89",
    //   lazySocket : true,
      themeName : "prism",
      botName : "Edupreneurs",
    //   frontendVersion: "v1",
    //   enableConversationDeletion: true,
      theme: "prism",
      themeColor: "#A8A45C",
    //   allowedOrigins: []
      })
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot