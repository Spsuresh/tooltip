import React from 'react';


// ============================tooltip component======================================


function Tooltip({props}) {
    return (<div>    
        {(props === 'top' &&
            <div id="tipboxtop">
                <div id="tooltiptop">I am a ToolTip at {props}!</div>
                <div id="triangletop"></div>
            </div>
        )}

        {(props === 'down' &&
            <div id="tipboxdown">
                <div id="tooltipdown">I am a ToolTip at {props}!</div>
                <div id="triangledown"></div>
            </div>
        )}

        {(props === 'left' &&
            <div id="tipboxleft">
                <div id="tooltipleft">I am a ToolTip at {props}!</div>
                <div id="triangleleft"></div>
            </div>
        )}

        {(props === 'right' &&
            <div id="tipboxright">
                <div id="tooltipright">I am a ToolTip at {props}!</div>
                <div id="triangleright"></div>
            </div>
        )}

         </div>
    );
}

export default Tooltip;