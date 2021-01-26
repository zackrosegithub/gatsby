import React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby';
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
    border: 1px solid #eee; 
    background: ${props => props.isCurrentPage ? '#eee' : 'white'}
`

const PageNumber = styled(Link)`
    padding: 8px 16px;
`

export default ({pageContext}) => (
    <Layout>
        {pageContext.posts.map(post=>(
            <div key={ post.wordpress_id }>
                <h3 dangerouslySetInnerHTML={{__html: post.title }}/>
                <small>
                { post.date }
                </small>
                <p dangerouslySetInnerHTML={{__html: post.excerpt }}/>
                <div>
                    <Link to={`/blog/${post.slug}`}>
                        Read More
                    </Link>
                </div>
            </div >
        ))}

    <PageWrapper>
        {Array.from({length: pageContext.numberOfPages}).map((page, index) =>
        <PageNumberWrapper key={index} isCurrentPage={index+1 === pageContext.currentPage}>
            <PageNumber to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
            {index + 1}
            </PageNumber>
        </PageNumberWrapper>
        )}
    </PageWrapper>

    </Layout>
)