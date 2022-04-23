import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PageMain from './pages/PageMain';
import PageProducts from './pages/PageProducts';
import GoodsContext from './context/GoodsContext';

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
  const [likedData, setLikedData] = React.useState([]);
  const [cartData, setCartData] = React.useState([]);

  return (
    <ThemeProvider theme={{ fontFamily: 'sans-serif' }}>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <GoodsContext.Provider
            value={{
              likedData,
              setLikedData,
              cartData,
              setCartData
            }}
          >
            <Route path="/main">
              <PageMain />
            </Route>

            <Route path="/products">
              <PageProducts />
            </Route>
            
          </GoodsContext.Provider>

          <Redirect to="/main" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
