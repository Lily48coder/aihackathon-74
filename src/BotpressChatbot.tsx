import { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        botId: "93667c20-5b2b-4478-a8d5-2a3e4582bc8f",
        clientId: "f1c60e8e-baaf-488a-a167-c1827bedeb91",
        configuration: {
          composerPlaceholder: "type here to analyse...",
          botName: "DiagnoPredict",
          color: "#3B82F6",
          variant: "solid",
          themeMode: "light",
          fontFamily: "inter",
          radius: 1,
          allowFileUpload: true
        }
      });
    };
    document.body.appendChild(script);
  }, []);

  return null; // It's just an injected script, nothing to render
};

export default BotpressChatbot;
