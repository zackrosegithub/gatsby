import React from 'react';
import { graphql , StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';



const StyledLogo = styled.img`
    width: 5%;
    margin-top: 8px;
    margin-bottom: 16px;
    margin-right: 16px;
`


const Logo = () => {

    return (

        <StaticQuery query={graphql`
        query d {
        allWordpressWpFavicon {
            nodes {
                url {
                    source_url
                }
            }
        }
        allWordpressWpLogo {
                nodes {
                    url {
                        source_url
                    }
                }
            }
        }
    `}

    render={ data => (

        <StyledLogo src={data.allWordpressWpLogo.nodes[0].url.source_url} />


        )} />

    )


}

export default Logo;