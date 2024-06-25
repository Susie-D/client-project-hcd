import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../../styles/_styles.scss';



function DeviceHowToVideos(){

    const history = useHistory();

    return(
        <div className="container">
            <div className="header-two jc-center">Furnace</div>
            <a className='btn' href='https://www.youtube.com/watch?v=sOcfx5o9-B4'>Helpful Video 1</a>
            <a className='btn' href='https://www.youtube.com/watch?v=_g8gQ1gg1FM'>Helpful Video 2</a>
            <a className='btn' href='https://www.youtube.com/watch?v=1bRsFAMgZRQ'>Helpful Video 3</a>
            <p className='btn' onClick={() => {
                    history.push('/device-profile');
                    }}>Back</p>
        </div>
    )

}

export default DeviceHowToVideos;