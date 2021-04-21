import React  from 'react';
import { AboutSection , AboutInfo , InfoTitle , InfoDir , InfoDesc , Span  } from './style.js'

const About = () => {
    return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <InfoTitle><Span>Thank You</Span> Me</InfoTitle>                    
                    <InfoDesc>
                        I hope he won your admiration
                    </InfoDesc>                    
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About;
