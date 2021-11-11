import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function ReferInfo({link, id, title, desc2, element, use, version, view, definition, desc1, tag }){
    return(
        <li>
            <Link to={{ pathname: "refer-detail", state:{link, id, title, desc2, element, use, version, view, definition, desc1, tag } }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{element}</span>
            </Link>
        </li>
    )
}
ReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
    desc1: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
}
export default ReferInfo;