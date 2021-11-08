import React from 'react';
import PropTypes from 'prop-types';


function PortInfo({title, category, link, image}){
    return(
        <div class="port">
            <a href={link}>
                <div class="pImg">
                    <img src={image} alt={title} />
                </div>
                <div class="pText">
                    <h3>{title}</h3>
                    <p>{category}</p>
                </div>
            </a>
        </div>
    )
}
PortInfo.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
export default PortInfo;