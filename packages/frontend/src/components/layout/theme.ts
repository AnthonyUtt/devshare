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
    copyFontColor: colors.navy,

    lightFontColor: colors.navy,
    lightFontWeight: 100,
});

const [useDarkTheme] = createTheme({
    isDark: true,
    // Colors
    foregroundColor: colors.paleBlue,
    backgroundColor: colors.navy,
    primary: colors.sage,
    secondary: colors.blue,
    tertiary: colors.red,

    // Fonts
    accentFontFamily: fonts.accentFontFamily,
    accentFontWeight: 500,
    accentFontColor: colors.blue,

    copyFontFamily: fonts.copyFontFamily,
    copyFontWeight: 300,
    copyFontColor: colors.paleBlue,

    lightFontColor: colors.paleBlue,
    lightFontWeight: 100,
});

const cssReset = css`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
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
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
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
        color: ${props => props.theme.copyFontColor};
        box-sizing: border-box;
    }
`;

export { useTheme, useDarkTheme, ThemeProvider, GlobalStyles };
