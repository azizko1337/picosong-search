import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import Wrapper from "../components/Wrapper";
import MaxWidth from "../components/MaxWidth";
import Footer from "../components/Footer";
import Link from "../components/Text/Link";

function App(props) {
  const { Component, pageProps } = props;
  return (
    <Wrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <MaxWidth>
        <Component {...pageProps} />
      </MaxWidth>
      <Footer>
        <Link target="_blank" href="https://github.com/ogohogo/picosong">
          SPECIAL THANKS TO OGOHOGO FOR FORMATTING PICOSONG DATA!
        </Link>
      </Footer>
    </Wrapper>
  );
}

export default App;
