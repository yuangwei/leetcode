import React from 'react'
import { useRouter } from "next/router"
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <h1 className='nx-font-bold'>JavaScript Leetcode</h1>,
  project: {
    link: 'https://github.com/yuangwei/leetcode',
  },
  docsRepositoryBase: 'https://github.com/yuangwei/leetcode/tree/main',
  footer: {
    text: (<span>{new Date().getFullYear()} © <a href="https://leetcode.js.org">leetcode.js.org</a></span>),
  },
  head(props) {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mastering Leetcode Problem-Solving Using Simple JavaScript."
        />
        <meta property="og:url" content="https://leetcode.js.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JavaScript Leetcode" />
        <meta
          property="og:description"
          content="Mastering Leetcode Problem-Solving Using Simple JavaScript."
        />
        <meta
          name="image"
          property="og:image"
          content="https://leetcode.js.org/banner.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="leetcode.js.org" />
        <meta
          property="twitter:url"
          content="https://leetcode.js.org/"
        />
        <meta name="twitter:title" content="JavaScript Leetcode" />
        <meta
          name="twitter:description"
          content="Mastering Leetcode Problem-Solving Using Simple JavaScript."
        />
        <meta
          name="twitter:image"
          content="https://leetcode.js.org/banner.png"
        />
        <meta name="google-adsense-account" content="ca-pub-7120269047777683"></meta>
        <meta name="author" content="Yuang Wei" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9H3VQ97WB3"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9H3VQ97WB3');
          `
        }}></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7120269047777683"
          crossorigin="anonymous"></script>
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "JavaScript Leetcode",
      };
    }

    return {
      titleTemplate: "%s - JavaScript Leetcode",
    };
  },
}

export default config
