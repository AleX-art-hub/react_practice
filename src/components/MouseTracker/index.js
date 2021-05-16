import React from 'react';
import Mouse from '../../Mouse';
import MouseCoords from ''

class MouseTracker extends React.Component {
    render(){
        return(
            <>
            <h1> Peremestite mouse</h1>
            <MouseCoords render={(mouse) => <Mouse mouse={mouse}/>}/>
            </>
        )
    }
}

export default MouseCoords;