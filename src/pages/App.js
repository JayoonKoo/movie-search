import Header from "components/Header";
import Input from "components/Input";
import Layout from "components/Layout";
import MovieList from "components/MovieList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		font-size: 16px;
		font-family: "Oswald", sans-serif;
		min-height: 100vh;
	}
	* {
		box-sizing: border-box;
	}
`;

function App() {
  return (
		<>
		<Layout.Top >
			<Layout>
				<Header />
				<Input />
			</Layout>
		</Layout.Top>
		<Layout.Bottom >
			<MovieList />
		</Layout.Bottom>
		</>
  );
}

export default App;
