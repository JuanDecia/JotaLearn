import { AppRouter } from "./Routes/AppRouter";
import AppWrapper from "./components/AppWrapper";
import GlobalStyle from "./components/GlobalStyles";

function App() {

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </>
  )
}

export default App
