import { useEffect, useState } from "react";
import { availableLanguages, defaultLanguage, i18n } from "../i18n/i18n";
import { StringMenuItem } from "../types/StringMenuItem";
import SelectorMui from "./mui-components/SelectorMui";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const languageList: StringMenuItem[] = getLanguageList();
  return (
    <SelectorMui
      className={styles.Selector}
      items={languageList}
      changeHandler={handleChange}
      defaultValue={defaultLanguage}
    />
  );
};

const getLanguageList = () => {
  let languageList: StringMenuItem[] = [];
  availableLanguages.forEach((l) => {
    languageList.push({ id: l.id, value: l.id, content: l.name });
  });
  return languageList;
};

export default LanguageSelector;
