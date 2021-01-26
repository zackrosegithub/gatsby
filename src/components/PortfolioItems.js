import React from 'react';
import { graphql , StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const PortfolioItem = styled.div`
    width: 300px;
    border: 1px solid #efefef;
    padding: 16px;
    margin: 16px;
`

const PortfolioImage = styled.img`
    max-width: 100%;
`

const PortfolioItems = () => {

    return (

        <StaticQuery query={graphql`
            query c {
            allWordpressWpPortfolio {
                nodes {
                title
                content
                id
                slug
                excerpt
                featured_media {
                    source_url
                        }
                    }
                }   
            }
        `}

        render={ data => (

            <PortfolioItemsWrapper>

                {data.allWordpressWpPortfolio.nodes.map(portfolioItem => (

                    <PortfolioItem key={portfolioItem.id}>
                        <h2>{portfolioItem.title}</h2>
                        <PortfolioImage src={portfolioItem.featured_media.source_url} alt=""/>
                        <div dangerouslySetInnerHTML={{__html: portfolioItem.excerpt}}/>
                         <Link to={`/portfolio/${portfolioItem.slug}`} >
                           Read More
                         </Link>
                    </PortfolioItem>
                ))}

            </PortfolioItemsWrapper>


            )} />

    )

}

export default PortfolioItems;