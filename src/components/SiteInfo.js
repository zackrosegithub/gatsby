import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: white;
    margin: auto 0;
`

const SiteTitle = styled.div`
    font-weight: bold;
`

const SiteInfo = () => (
   < StaticQuery
   
    query={graphql`
        query b {
            allWordpressSiteMetadata {
                nodes {
                    name
                    description
                }
            }
        }
    `}

    render={ data => (
        <SiteInfoWrapper>
            <div>
            
            < SiteTitle >
                {data.allWordpressSiteMetadata.nodes[0].name}
            </SiteTitle >

                {data.allWordpressSiteMetadata.nodes[0].description}

            </div>

        </SiteInfoWrapper>
    )

    }

   />
)

export default SiteInfo;


  