import React from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Contents from '../layouts/Contents';

function Info({text}){
    return <div>{text}</div>
}

const textInfo = [
    {text : "we provide"},
    {text : "visual coding"},
    {text : "solutions"},
    {text : "for you webs"},
    
]
function Main(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 class="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        {textInfo.map((info)=>(
                            <Info text={info.text} key={info.text} />
                        ))}
                    </div>


                </section>
            </Contents>
            <Footer />
        </div> 
    )
}
export default Main;