import React from 'react';
import { styled } from 'tsstyled';
import { theme } from '@devshare/common';

// Components
import Layout from '../components/layout';
import { InlineLogo } from '../components/logos';

const { useTheme } = theme;

const BoxContainer = styled('div')`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const MainText = styled('p')`
    font-size: 2rem;
`;

const StyledLogo = styled(InlineLogo).use(() => ({
    theme: useTheme(),
}))`
    max-width: 700px;
    width: 80%;
    height: 100px;

    .bracket {
        fill: ${props =>
            props.theme.isDark
                ? props.theme.foregroundColor
                : props.theme.foregroundColor};
    }

    .arrow {
        fill: ${props =>
            props.theme.isDark ? props.theme.primary : props.theme.secondary};
    }

    .letter {
        fill: ${props =>
            props.theme.isDark ? props.theme.secondary : props.theme.primary};
    }
`;

const SubText = styled('p').use(() => ({
    theme: useTheme(),
}))`
    font-size: 1rem;
    font-weight: ${props => props.theme.lightFontWeight};
`;

const title = 'DevShare | Create an MVP';
const description = 'Get your project off the ground with DevShare!';

const IndexPage: React.FC = () => {
    return (
        <Layout fullTitle={title} description={description} canonical="/">
            <BoxContainer>
                <MainText>Future home of</MainText>
                <StyledLogo />
                <SubText>Coming Winter 2021</SubText>
            </BoxContainer>
        </Layout>
    );
};

export default IndexPage;
