import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';
import Logo from './Logo';

const MainMenuWrapper = styled.div`
display: flex;
background-color: rgb(3,27,77);
`

const MenuItem = styled(Link)` 
    margin-left: 16px;
    margin-right: 16px;
    padding-right: 16px;
    color: white;
    margin: auto 0;
`
const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    width: 960px;
    height: 100%;
`

const MainMenu = () => (


    <StaticQuery query={graphql`
query MyQuery {
  allWordpressWpApiMenusMenusItems {
    edges {
      node {
        id
        name
        items {
          title
          object_slug
        }
      }
    }
  }
}
  `} 

       render={data => (
        <MainMenuWrapper>
            <MainMenuInner >
              <Logo/>
            <SiteInfo/>
          {/* {JSON.stringify(data)} */}
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                  <MenuItem to={`/${item.object_slug}`} key={item.title}>
                      {item.title}
                  </MenuItem>
              )
          )}
          </MainMenuInner>
        </MainMenuWrapper>
      )}
      
      />

    
);

export default MainMenu;