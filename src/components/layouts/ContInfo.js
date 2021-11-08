import React from 'react';
import { Link } from 'react-router-dom';


function ContInfo(props){
    return(
        <section id="contactInfo">
            <div class="contact__info">
                <div>
                    <p>Let’s create something new</p>
                    <h3>LET`S Get IN<br />TOUCH</h3>
                    <Link to="/contact" class="contact">Contact Me</Link>
                </div>
            </div>
        </section>
    )
}
export default ContInfo;