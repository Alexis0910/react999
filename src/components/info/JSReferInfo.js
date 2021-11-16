import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function JSReferInfo({link, id, title, desc2, syntax, definition, desc1}){
    return(
        <li>
            <Link to={{ pathname: "JSrefer-detail", state:{link, id, title, desc2, syntax, definition, desc1} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{syntax}</span>
            </Link>
        </li>
    )
}
JSReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    syntax: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,

}
export default JSReferInfo;