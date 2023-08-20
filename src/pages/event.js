import React from 'react';


const Event = () => {
    return (
        <>
            {/* Embed Google Form */}
            <iframe title="Nulic Open Day"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdKFi1gaTz8-Z9LqztKfHL-eBfBK0Zn8z729vRIUxK8zCMZGg/viewform?embedded=true" 
            width="100%"   // Set the width to 100% for responsiveness
            height="900"   // Set the initial height for the form
            frameborder="0"
            marginheight="0"
            marginwidth="0"
        >
            Loading...
        </iframe>
        </>
    );
};

export default Event;
