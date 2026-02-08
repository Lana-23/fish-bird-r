import React from 'react';
import { changeLanguage, getCurrentLanguage } from '../i18n';

const LanguageSwitcher: React.FC = () => {
  const currentLanguage = getCurrentLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
        <span className="text-lg">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
        <span className="text-sm font-medium text-gray-700">
          {languages.find(lang => lang.code === currentLanguage)?.name}
        </span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-3 ${
              currentLanguage === language.code ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {currentLanguage === language.code && (
              <svg className="w-4 h-4 ml-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;