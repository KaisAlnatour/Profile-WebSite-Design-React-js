import React  from 'react';

import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './style.js'

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Kais Alnatour</HomeTitle>                    
                    <HomeDesc>
                    I am a professional Front-End Developer creating modern and resposive designs to Web. Thank you. 
                    </HomeDesc>                    
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
