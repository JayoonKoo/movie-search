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
export default Layout
