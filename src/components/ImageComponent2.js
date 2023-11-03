import React from 'react';

function MyImageComponent2() {
    const imagePath = process.env.PUBLIC_URL + '/images/BarCounter.jpg';

    return (
        <div>
            <img src={imagePath} width="199px" height="133px" alt="Bar Counter" />
        </div>
    );
}

export default MyImageComponent2;