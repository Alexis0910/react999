import React from 'react';
// import axios from 'axios';
import Loading from '../layouts/Loading';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import WrapTitle from '../layouts/WrapTitle';
import ReferInfo from '../info/ReferInfo';
import ContInfo from '../layouts/ContInfo';
import * as HtmlJson from '../../assets/json/refer.json';
// import * as CssJson from '../../assets/json/cssRefer.json';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
        activeTab: 0,
    }

    clickHandler = (id) => {
        this.setState({activeTab : id})
    }
    
    getRefer = async () => {
        // this.setState({refers: JsonData.default.data.htmlRefer, isLoading: false});

        const {
            default: {
                data: {htmlRefer},
            },
        } = HtmlJson;
        this.setState({refers: htmlRefer, isLoading: false})

        // const {
        //     default: {
        //         data:{cssRefer},
        //     },
        // } = CssJson;
        // this.setState({cssRefers: cssRefer})
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }

    render(){
        const {isLoading, refers, cssRefers} = this.state;
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
            />)),

            // 1: cssRefers.map(() => (

            // )),
        }
        console.log(this.state.activeTab);
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
                                <WrapTitle text={['Reference', 'book']} />
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