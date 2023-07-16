import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>GuaranTree</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="การันTree" />
        <meta
          property="og:description"
          content="การันTree ครอบคลุมทุกภัยพิบัติ ไม่มีค่าใช้จ่าย สมัครง่าย"
        />
        <meta property="og:image" content="/images/preview.webp" />
        <meta name="theme-color" content="#67BE4D" />
        <meta property="og:url" content="https://www.group-f.ywc.in.th/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-BaiJamjuree">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
