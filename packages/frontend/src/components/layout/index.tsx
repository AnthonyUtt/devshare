import React, { useState } from 'react';
import { styled } from 'tsstyled';
import './fonts.css';

// Theme
import { useTheme, useDarkTheme, ThemeProvider, GlobalStyles } from './theme';

// Components
import Head from './head';
import DarkModeSwitch from './darkModeSwitch';

interface LayoutProps {
    title?: string;
    fullTitle?: string;
    description: string;
    image?: string;
    canonical: string;
    type?: string;
    authorHandle?: string;
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    title,
    fullTitle,
    description,
    image,
    canonical,
    type,
    authorHandle,
    children,
}) => {
    const [darkMode, setDarkMode] = useState(false);
    const darkTheme = useDarkTheme();

    const LayoutContainer = styled('div').use(() => ({
        theme: useTheme(), // eslint-disable-line
    }))`
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.foregroundColor};
        transition: background 1s ease-in-out, color 1s ease-in-out;
    `;

    const SwitchContainer = styled('div')`
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 50;
    `;

    const SwitchText = styled('p').use(() => ({
        theme: useTheme(), // eslint-disable-line
    }))`
        color: ${props => props.theme.lightFontColor};
        font-weight: ${props => props.theme.lightFontWeight};
        font-size: 1rem;
        margin: 0;
        padding: 0;
        margin-right: 0.5rem;
    `;

    return (
        <>
            <Head
                title={title}
                fullTitle={fullTitle}
                description={description}
                image={image}
                canonical={canonical}
                type={type}
                authorHandle={authorHandle}
            />
            <ThemeProvider
                value={current => {
                    if (!darkMode) {
                        return current;
                    }
                    return darkTheme;
                }}
            >
                <GlobalStyles />
                <LayoutContainer>
                    <SwitchContainer>
                        <SwitchText>Dark Mode</SwitchText>
                        <DarkModeSwitch
                            initialState={darkMode}
                            stateChangeCallback={setDarkMode}
                        />
                    </SwitchContainer>
                    {children}
                </LayoutContainer>
            </ThemeProvider>
        </>
    );
};

export { useTheme };
export default Layout;
