import React from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Contents from '../layouts/Contents';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';
import Loading from '../layouts/Loading';
// import WrapTitle from '../layouts/WrapTitle';
import axios from 'axios';
import PortInfo from '../info/PortInfo';

//함수형 컴포넌트 --> (쓰라고 권유 많이됨) but 불편 --> 그래서 보완을위해 리액트 훅 생김(useEffect)
//클래스 컴포넌트
//동기/비동기방식 
//콜백함수 관련 
//promise / axios 개념 확실히 알아야한다! 
class Portfolio extends React.Component {
    //변수가 수시로 변할거기 때문에 state사용
    state = {
        isLoading: true, 
        ports : []
    }
    getPorts = async () => {
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json");
        //console.log(ports.data.data.ports);
        this.setState( {ports, isLoading : false} )
    }

    //사이트가 로딩이 완료되면 실행시켜라
    componentDidMount(){
        setTimeout(()=>{
            //데이터가 변경됨을 알려주기위해 setState를 써주어야해
            //this.setState({isLoading: false});
            this.getPorts();
        }, 3000);
    }

    render(){
        const {isLoading, ports} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="portCont">
                                <div className="container">
                                    <WrapTitle text={['portfolio','site']} />
                                    <div className="port__cont">
                                        {ports.map((port)=>(
                                            <PortInfo 
                                                key={port.id}
                                                id={port.id}
                                                title={port.title}
                                                category={port.category}
                                                link={port.link}
                                                image={port.image}
                                            />
                                        ))}
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

export default Portfolio;