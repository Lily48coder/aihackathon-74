import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "@/data/translations";

type TranslationContextType = {
  t: (key: string) => string;
  currentLanguage: string;
  setLanguage: (lang: string) => void;
};

const TranslationContext = createContext<TranslationContextType>({
  t: (key: string) => key,
  currentLanguage: "en",
  setLanguage: () => {},
});

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const t = (key: string): string => {
    if (currentLanguage === "en") return key;
    return translations[currentLanguage]?.[key] || key;
  };

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);