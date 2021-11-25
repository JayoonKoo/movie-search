import React from 'react'
import styled from 'styled-components'

const Layout = ({children}) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}



const Wrapper = styled.div`
	width: 1200px;
	height: 100%;
	margin: 0 auto;

	@media (max-width: 1220px) {
		width: 100%;
	}
`

Layout.Top = styled.div`
	position: fixed;
	top: 0;
	bottom: 75vh;
	left: 0;
	right: 0;
	border: 1px solid;
`

Layout.Bottom = styled.div`
	border: 1px solid red;
	bottom: 0;
	left: 0;
	right: 0;
	top: 25vh;
	position: fixed;
`
export default Layout
