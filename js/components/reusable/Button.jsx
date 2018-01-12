import React from 'react';

import Auth0Lock from 'scripts/Auth0Lock';

export default function Button(props){
    return(
        <button onClick={Auth0Lock.showLock}>
            Click
        </button>
    )
}
