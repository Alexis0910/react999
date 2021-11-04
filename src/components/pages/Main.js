import React from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Contents from '../layouts/Contents';

function Main(){
    return (
        <div>
            <Header />

            <Contents>
                <section id="mainCont">
                    <h2 class="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div class="main__cont">
                        <div>WE PROVIDE</div>
                        <div>VISUAL CODING</div>
                        <div>SOLUTIONS</div>
                        <div>FOR YOU WEBS</div>
                    </div>
                </section>
            </Contents>

            <Footer />
        </div> 

    )
}

export default Main;