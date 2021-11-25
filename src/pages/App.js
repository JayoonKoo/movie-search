import Input from "components/Input";
import Layout from "components/Layout";
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
			<Layout>
				<Input />
			</Layout>
		</>
  );
}

export default App;
