import React, {useContext} from 'react';
import {appContext} from '../../App';

function PageHeader(props){
    const{menuL: [, setIsMenuOpen]} = useContext(AppContext);
    return (
        <header>
            <button onClick={()=> {
                setIsMenuOpen(true);
            }}>
                open menu
            </button>
        </header>
    );
}

export default PageHeader;