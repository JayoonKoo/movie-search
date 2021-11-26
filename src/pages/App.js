import Header from "components/Header";
import Layout from "components/Layout";
import MovieList from "components/MovieList";
import InputContainer from "containers/InputContainer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		font-size: 16px;
		font-family: "Oswald", sans-serif;
	}
	* {
		box-sizing: border-box;
	}
`;

function App() {
  return (
		<>
		<GlobalStyle />
		<Layout.Top >
			<Layout>
				<Header />
				<InputContainer />
			</Layout>
		</Layout.Top>
		<Layout.Bottom >
			<MovieList />
		</Layout.Bottom>
		</>
  );
}

export default App;
