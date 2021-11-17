import axios from 'axios';
import React from 'react';
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Loading from '../layouts/Loading';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';
import JSReferInfo from '../info/JSReferInfo';
import ReferInfo from '../info/ReferInfo';
import * as referJson from '../../assets/json/refer.json';
import * as CSSrefer from '../../assets/json/CSSrefer.json';
import * as JSrefer from '../../assets/json/JSrefer.json';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
        jsRefers:[],
        cssRefers:[],
        activeTab: 0
    }
    clickHandler = (id) => {
        this.setState({activeTab : id})
    }

    getRefer = async () => {
        const {
            default: {
                data : {htmlRefer},
            },
        } = referJson;
        this.setState({refers:htmlRefer, isLoading:false})

        const {
            default: {
                data: {jsRefer},
            },
        } = JSrefer;
        this.setState({jsRefers:jsRefer, isLoading:false})

        const {
            default: {
                data: {cssRefer},
            },
        } = CSSrefer;
        this.setState({cssRefers:cssRefer, isLoading:false})
    }


    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }
    
    render(){
        const {isLoading, refers, cssRefers, jsRefers} = this.state;
        const tabObj = {
            0: refers.map((refer) => (
            <ReferInfo
                key={refer.id}
                link={refer.link}
                id={refer.id}
                title={refer.title}
                desc1={refer.desc1}
                desc2={refer.desc2}
                element={refer.element}
                tag={refer.tag}
                use={refer.use}
                version={refer.version}
                view={refer.view}
                definition={refer.definition}
            />
        )),
        
        
            1: cssRefers.map((refer) => (
                <ReferInfo
                    key={refer.id}
                    link={refer.link}
                    id={refer.id}
                    title={refer.title}
                    desc1={refer.desc1}
                    desc2={refer.desc2}
                    element={refer.element}
                    tag={refer.tag}
                    use={refer.use}
                    version={refer.version}
                    view={refer.view}
                    definition={refer.definition}
                />
            )),
            2: jsRefers.map((refer) => (
                <JSReferInfo
                    key={refer.id}
                    link={refer.link}
                    id={refer.id}
                    title={refer.title}
                    desc1={refer.desc1}
                    desc2={refer.desc2}
                    syntax={refer.syntax}
                    definition={refer.definition}
                />
            )),
        }
        

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text={['Reference','book']} />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <ul className="tabs">
                                                <li onClick={() => this.clickHandler(0)}><h3>HTML</h3></li>
                                                <li onClick={() => this.clickHandler(1)}><h3>CSS</h3></li>
                                                <li onClick={() => this.clickHandler(2)}><h3>JAVASCRIPT</h3></li>
                                            </ul>
                                            <ul>
                                                {tabObj[this.state.activeTab]}
                                            </ul>
                                        </div> 
                                    </div>
                                </div>    
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}
export default Reference;