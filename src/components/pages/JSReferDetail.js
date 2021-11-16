import React from "react";
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import {Link} from 'react-router-dom';

// function ReferDetail(props) {
//     console.log(props)
//     return <span></span>
// }

class JSReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/reference')
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <div>
                    <Header />
                    <Contents>
                        <section className="referCont">
                            <div className="container">
                                <div className="refer__detail pt200">
                                    <h3>{location.state.title}</h3>
                                    <p>{location.state.desc2}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>{location.state.desc1}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>문법</th>
                                                <td>{location.state.syntax}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>정의(Definition)</h4>
                                    <ul>
                                        <li>
                                            {location.state.definition}
                                        </li>
                                    </ul>
                                    <Link className="list-btn" to="/reference">목록보기</Link>
                                </div>
                            </div>
                        </section>
                    </Contents>
                    <Footer />
                </div>
            )
        } else {
            return null;
        }
    }
}

export default JSReferDetail;