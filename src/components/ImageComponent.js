import React from 'react';

function MyImageComponent() {
    const imagePath = process.env.PUBLIC_URL + '/images/barstool.jpg';

    return (
        <div>
            <img src={imagePath} width="199px" height="133px" alt="Bar Stool" />
        </div>
    );
}

export default MyImageComponent; 