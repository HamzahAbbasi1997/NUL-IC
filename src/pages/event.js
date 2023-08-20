import React from 'react';


const Event = () => {
    return (
        <>
            {/* Embed Google Form */}
            <iframe title="Nulic Open Day"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeDVuLrIwWlF7w9WJCB952ZOHobJFBObCE6HhBeVIDhX9SYLA/viewform?embedded=true" 
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
