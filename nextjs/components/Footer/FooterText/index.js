import React from 'react';
import styled from 'styled-components';

const FooterTextStyled = styled.div`
    text-align: center;
    font-size: 16px;
    color: white;
    width: 40%;
    margin-bottom: 32px;
    line-height: 22px;
`

const FooterText = ({children}) => {
    return (
        <FooterTextStyled>
            {children}
        </FooterTextStyled>
    );
};

export default FooterText;