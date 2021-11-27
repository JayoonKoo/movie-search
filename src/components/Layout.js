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
	left: 0;
	right: 0;
	height: 200px;
	z-index: 10;
	background-color: #FAFAFA;
	border-bottom: 1px solid;
`

Layout.Bottom = styled.div`
	margin-top: 200px;
	min-height: calc(100vh - 200px);
	background-color: #FAFAFA;
`
export default Layout
