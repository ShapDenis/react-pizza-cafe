import React from "react";
import ContentLoader from "react-content-loader"


function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={0}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="138" cy="144" r="135"/>
            <rect x="0" y="286" rx="6" ry="6" width="280" height="26"/>
            <rect x="0" y="322" rx="6" ry="6" width="280" height="77"/>
            <rect x="0" y="411" rx="6" ry="6" width="83" height="39"/>
            <rect x="119" y="411" rx="3" ry="3" width="158" height="39"/>
        </ContentLoader>
    );
}

export default LoadingBlock;