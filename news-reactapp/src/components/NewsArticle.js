import React from 'react'

function NewsArticle({data}) {
    return (
        <div className ="news">
            <h1 className ="news_Title">{data.title}</h1>
            <p className="news_Description">{data.description}</p>
            <span className="news_Author">{data.author}</span>
            <span className="news_Published">{data.publishedAt}</span>
            <span className="news_Source">{data.source.name}</span>

        </div>
    )
}

export default NewsArticle;
