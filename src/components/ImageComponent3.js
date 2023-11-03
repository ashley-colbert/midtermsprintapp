import React from 'react';

function MyImageComponent3() {
    const imagePath = process.env.PUBLIC_URL + '/images/DinerExterior.jpeg';

    return (
        <div>
            <img src={imagePath} width="208px" height="134px" alt="Diner" />
        </div>
    );
}

export default MyImageComponent3;