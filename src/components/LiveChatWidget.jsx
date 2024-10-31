import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import Swal from 'sweetalert2';

const LiveChatWidget = () => {
 const {isChatVisible, setIsChatVisible}=useContext(Context);

  useEffect(() => {
    if (isChatVisible) {
      const loadingAlert = Swal.fire({text:"Opening Live Chat..."})
      Swal.showLoading();
      // Set up the LiveChat script only when isChatVisible is true
      window.__lc = window.__lc || {};
      window.__lc.license =  "18788157"; 

      (function() {
        const lc = document.createElement("script");
        lc.type = "text/javascript";
        lc.async = true;
        lc.src = "https://cdn.livechatinc.com/tracking.js";
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(lc, s);
      })();

      // Open the chat box immediately after the script loads
      window.LC_API = window.LC_API || {};
      window.LC_API.on_after_load = function() {
        window.LC_API.open_chat_window();
        loadingAlert.close();
      };
    }
  }, [isChatVisible]); // This effect will run when isChatVisible changes

 

  return (
    <div>
   
    </div>
  );
};

export default LiveChatWidget;



