import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { ReactElement } from 'react';

import './App.css';

type Props = {
  children: ReactElement
}

const App = (props: Props) => (
  <main className="App">
    <Header />
    <Content>{
      props.children
    }</Content>
    <Footer />
  </main>
)

export default App;
