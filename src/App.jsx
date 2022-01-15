import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import PageMain from './pages/PageMain';
import PageProducts from './pages/PageProducts'

const GlobalStyle = createGlobalStyle`
html {
	box-sizing: border-box;
}

h1, h2, h3, h4, h5 {
	margin: 0;
}

body {
	padding: 0;
  margin: 0;
}

input[type="text"],
input[type="phone"],
input[type="email"],
input[type="password"],
textarea {
	appearance: none;
  outline: none;
}

textarea:focus {
	outline: none;
}

button {
	cursor: pointer;
	border-width: 0;
	padding: 0;
}

a {
	cursor: pointer;
	text-decoration: none;
}

a:hover {
		text-decoration: none;
	}
	
p{
		margin: 0;
		padding: 0;
	}
`;

export default function App() {
  return (
    <ThemeProvider theme={{ fontFamily: 'sans-serif' }}>
      <GlobalStyle />

      {/* <PageMain /> */}
      <PageProducts />
    </ThemeProvider>
  );
}
