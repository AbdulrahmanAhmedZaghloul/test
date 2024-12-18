import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import en from '../../assets/en.png';
import ar from '../../assets/ar.jpeg';

const LanguageDropdown = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);  // إغلاق القائمة بعد اختيار اللغة
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);  // التبديل بين فتح وإغلاق القائمة
    };

    return (
        <div className="relative inline-block">
            <div 
                onClick={toggleDropdown} 
                className="px-4 py-2 bg-transparent border-b border-gray-900 text-gray-900 shadow-lg cursor-pointer"
            >
                <div className="flex items-center">
                    {i18n.language === 'ar' ? (
                        <>
                            <img src={ar} alt="Arabic" className="w-6 h-6 mr-2" />
                            <span>العربية</span>
                        </>
                    ) : (
                        <>
                            <img src={en} alt="English" className="w-6 h-6 mr-2" />
                            <span>English</span>
                        </>
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
                    <div 
                        className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200" 
                        onClick={() => handleChange('ar')}
                    >
                        <img src={ar} alt="Arabic" className="w-6 h-6 mr-2" />
                        <span>العربية</span>
                    </div>
                    <div 
                        className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200" 
                        onClick={() => handleChange('en')}
                    >
                        <img src={en} alt="English" className="w-6 h-6 mr-2" />
                        <span>English</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
