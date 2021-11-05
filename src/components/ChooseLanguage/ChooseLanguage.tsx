import React, { useState } from 'react';
import './ChooseLanguage.scss';
import { SvgEnglish, SvgVietnam } from '../../constants/images';
import { AiOutlineDown } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

interface IChooseLanguage {
  className?: string;
}
export const ChooseLanguage: React.FC<IChooseLanguage> = ({ className }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Vietnamese');

  const handleOnEnter = () => {
    setShowOptions(true);
  };

  const handleOnLeave = () => {
    setShowOptions(false);
  };

  const handleSelectOption = (label: string) => {
    setSelectedLanguage(label);
  };

  return (
    <div
      className={`choose-language ${className}`}
      onMouseEnter={handleOnEnter}
      onMouseLeave={handleOnLeave}
    >
      <div className="choose-language__label">
        <img src={selectedLanguage === 'Vietnamese' ? SvgVietnam : SvgEnglish} alt="image" />
        <AiOutlineDown size={15} />
      </div>
      <div
        className={`choose-language__options ${
          showOptions ? 'choose-language__options--show' : ''
        }`}
      >
        <div className="choose-language__list">
          <div className="choose-language__option" onClick={() => handleSelectOption('Vietnamese')}>
            <img src={SvgVietnam} alt="image" />
            <span>Vietnamese</span>
            {selectedLanguage === 'Vietnamese' && (
              <TiTick color={'#F7941E'} className="choose-language__svg" size={20} />
            )}
          </div>
          <div className="choose-language__option" onClick={() => handleSelectOption('English')}>
            <img src={SvgEnglish} alt="image" />
            <span>English</span>
            {selectedLanguage === 'English' && (
              <TiTick className="choose-language__svg" color={'#F7941E'} size={20} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
