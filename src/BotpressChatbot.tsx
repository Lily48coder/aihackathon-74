import { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        configUrl:
          "https://files.bpcontent.cloud/2025/03/22/13/20250322133235-ZRRQRD0I.json",
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default BotpressChatbot;

