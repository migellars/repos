import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            
            <iframe title='location'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15855.933616125305!2d3.3536926831420932!3d6.523778754458121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dce885bba55%3A0x912efbeca63a505!2sFirst+City+Monuments+Bank+Plc!5e0!3m2!1sen!2sng!4v1558963265504!5m2!1sen!2sng" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen
            ></iframe>

            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;