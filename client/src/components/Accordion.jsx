import React, { useState } from 'react';
import arrowIcon from '../assets/arrow.svg'; 

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-about ${isOpen ? 'active' : ''}`}>
            <div className="accordion-about-header" role="button" onClick={toggleAccordion}>
                <h2>{title}</h2>
                <button>
                    <img src={arrowIcon} alt="arrow" className={isOpen ? 'rotate' : ''} />
                </button>
            </div>
            {isOpen && <div className="accordion-about-body">{content}</div>}
        </div>
    );
};

export default Accordion;
