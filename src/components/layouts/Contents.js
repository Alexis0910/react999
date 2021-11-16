import React from 'react';


function Contents({ children }){
    //게시글 클릭시 페이지 맨위에서 로딩되게끔
    //window.scrollTo(0, 0);
    return <main id="main">{children}</main>
}
export default Contents;