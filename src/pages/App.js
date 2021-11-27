import Layout from "components/Layout";
import HeaderContainer from "containers/HeaderContainer";
import InputContainer from "containers/InputContainer";
import MovieListContainer from "containers/MovieListContainer";
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
				<HeaderContainer />
				<InputContainer />
			</Layout>
		</Layout.Top>
		<Layout.Bottom >
			<MovieListContainer />
		</Layout.Bottom>
		</>
  );
}

export default App;
