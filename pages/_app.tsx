import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import Footer from "@/src/component/Footer";
import Top from "@/src/component/Top";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

/*

페이지 전환 시, 레이아웃을 유지합니다
페이지 전환 시, 상태(state)를 유지할 수 있습니다
componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다
추가적인 데이터를 페이지로 주입시켜주는게 가능합니다
글로벌 css를 이곳에 선언합니다

 */
