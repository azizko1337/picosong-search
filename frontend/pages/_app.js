import GlobalStyle from "../styles/GlobalStyle";
import Wrapper from "../components/Wrapper";
import MaxWidth from "../components/MaxWidth";
import Footer from "../components/Footer";
import Link from "../components/Text/Link";

function App(props) {
  const { Component, pageProps } = props;
  return (
    <Wrapper>
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
