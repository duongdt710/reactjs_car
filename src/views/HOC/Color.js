import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    return(props) =>(
        <div style={{color: colorRandom}}>
            <WrappedComponent {...props} />  {/* ...props : lay tat ca props dau vao va truyen  input nguyen sang */}
        </div>
    )
}

export default Color;