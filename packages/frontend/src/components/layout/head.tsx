import React from 'react';
import Helmet from 'react-helmet';

interface HeadProps {
    title?: string;
    fullTitle?: string;
    description: string;
    image?: string;
    canonical: string;
    type?: string;
    authorHandle?: string;
}

const Head: React.FC<HeadProps> = ({
    title,
    fullTitle,
    description,
    image,
    canonical,
    type,
    authorHandle,
}) => {
    const seoTitle = fullTitle || `${title} | DevShare`;
    return (
        <Helmet>
            <title>{seoTitle}</title>
            <link rel="canonical" href={canonical} />

            {/* Meta + OG/Twitter */}
            <meta name="description" content={description} />

            <meta name="og:title" content={seoTitle} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content={type || 'website'} />
            <meta name="og:site_name" content="DevShare" />
            <meta name="og:url" content={`https://devshare.gg${canonical}`} />
            {image && <meta name="og:image" content={image} />}

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@DevShare_gg" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
            {authorHandle && (
                <meta name="twitter:creator" content={authorHandle} />
            )}

            {/* Links */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,700;1,100;1,300&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export default Head;
