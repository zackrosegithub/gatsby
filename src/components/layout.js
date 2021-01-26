import React from "react"
import MainMenu from "./MainMenu"
import styled, {createGlobalStyle } from 'styled-components';
import Logo from './Logo';
import { Helmet } from 'react-helmet';
import { StaticQuery , graphql } from "gatsby";

const GlobalStyles = createGlobalStyle`
  

  body {
    font-family: 'Open Sans', sans-serif;
  }
`
const LayoutWrapper = styled.div`
 max-width: 960px;
 margin: 0 auto;

`


const Layout = ({ children }) => (
  <div>

  <StaticQuery query={graphql`

    query e {
              allWordpressWpFavicon {
                  nodes {
                      url {
                          source_url
                      }
                  }
              }
            }
  `}

  render={ data => 

    <Helmet><link rel="icon" href={data.allWordpressWpFavicon.nodes[0].url.source_url}/></Helmet>

  }
  
  
  />


    <GlobalStyles/>
      <MainMenu />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
  </div>
)


export default Layout
