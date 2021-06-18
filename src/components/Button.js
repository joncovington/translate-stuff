import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
   
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }
    render() {

        return (
            <div className="ui field">
                <ColorContext.Consumer>
                    {(color) => 
                        <button className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                {({ language }) => this.renderSubmit(language)}
                            </LanguageContext.Consumer>
                        </button>
                    }
                </ColorContext.Consumer>
            </div>
        );
    };
};

export default Button;