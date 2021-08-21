import React from 'react';
import { createTheme, styled, css } from 'tsstyled';

const colors = {
    navy: '#1F384D',
    paleBlue: '#F6F6FB',
    blue: '#5396CC',
    red: '#C63F2D',
    sage: '#709965',
};

const fonts = {
    copyFontFamily: `'Poppins', sans-serif`,
    accentFontFamily: `'Conthrax', sans-serif`,
};

const [useTheme, ThemeProvider] = createTheme({
    isDark: false,
    // Colors
    foregroundColor: colors.navy,
    backgroundColor: colors.paleBlue,
    primary: colors.blue,
    secondary: colors.sage,
    tertiary: colors.red,

    // Fonts
    accentFontFamily: fonts.accentFontFamily,
    accentFontWeight: 500,
    accentFontColor: colors.sage,

    copyFontFamily: fonts.copyFontFamily,
    copyFontWeight: 300,
    lightFontWeight: 100,
});

interface ThemeProviderProps {
    isDark: boolean;
    children: React.ReactNode;
}

const CustomThemeProvider: React.FC<ThemeProviderProps> = ({
    isDark,
    children,
}) => (
    <ThemeProvider
        value={({
            foregroundColor,
            backgroundColor,
            primary,
            secondary,
            ...current
        }) => ({
            ...current,
            isDark,
            foregroundColor:
                isDark === current.isDark ? foregroundColor : backgroundColor,
            backgroundColor:
                isDark === current.isDark ? backgroundColor : foregroundColor,
            primary: isDark === current.isDark ? primary : secondary,
            secondary: isDark === current.isDark ? secondary : primary,
        })}
    >
        {children}
    </ThemeProvider>
);

const cssReset = css`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
    a,
    abbr,
    acronym,
    address,
    applet,
    article,
    aside,
    audio,
    b,
    big,
    blockquote,
    body,
    canvas,
    caption,
    center,
    cite,
    code,
    dd,
    del,
    details,
    dfn,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    hgroup,
    html,
    i,
    iframe,
    img,
    ins,
    kbd,
    label,
    legend,
    li,
    mark,
    menu,
    nav,
    object,
    ol,
    output,
    p,
    pre,
    q,
    ruby,
    s,
    samp,
    section,
    small,
    span,
    strike,
    strong,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    tfoot,
    th,
    thead,
    time,
    tr,
    tt,
    u,
    ul,
    var,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:after,
    blockquote:before,
    q:after,
    q:before {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

const GlobalStyles = styled('style').use(() => ({
    theme: useTheme(),
}))`
    ${cssReset}
    :root {
        font-family: ${props => props.theme.copyFontFamily};
        font-weight: ${props => props.theme.copyFontWeight};
        color: ${props => props.theme.foregroundColor};
        box-sizing: border-box;
    }
`;

export { useTheme, CustomThemeProvider as ThemeProvider, GlobalStyles };
