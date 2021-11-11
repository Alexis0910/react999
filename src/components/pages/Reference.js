import axios from 'axios';
import React from 'react';
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Loading from '../layouts/Loading';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';
import ReferInfo from '../info/ReferInfo';
import referJson from '../../assets/json/refer.json';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: []
    }
    getRefer = async () => {
        const {
            data: {
                data : {htmlRefer},
            },
        } = await axios.get("./refer.json");
        this.setState({refers:htmlRefer, isLoading:false})
        
        console.log(htmlRefer)
    }
    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }
    render(){
        const {isLoading, refers} = this.state;
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
                                            <h3>HTML</h3>
                                            <ul>
                                                {refers.map((refer) => (
                                                    <ReferInfo 
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc2={refer.desc2}
                                                        element={refer.element}
                                                        use={refer.use}
                                                        version={refer.version}
                                                        view={refer.view}
                                                        definition={refer.definition}
                                                        desc1={refer.desc1}
                                                        tag={refer.tag}

                                                    />
                                                ))}
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