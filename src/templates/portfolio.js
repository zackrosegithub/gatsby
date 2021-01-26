import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';


const FeaturedImage = styled.img`
    max-width: 300px;
    margin: 16px 0;
`

const ImgUrlWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default ({pageContext}) => (
    <Layout>
        <h1>
            {pageContext.title}
        </h1>
        <ImgUrlWrapper>
            <strong>
                Website url : 
            </strong>
            <a href={pageContext.acf.portfolio_url} target="_blank" rel="noreferrer">
            {pageContext.acf.portfolio_url}
            </a>
            <FeaturedImage src={pageContext.featured_media.source_url} />
        </ImgUrlWrapper>
        <div dangerouslySetInnerHTML={{__html: pageContext.content }}></div>
    </Layout>
)