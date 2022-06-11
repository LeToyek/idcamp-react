import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Button from './Button.jsx'
const News = (props) => {
    const someNews = props.someNews

    const title = someNews.title
    const date = someNews.date
    const content = someNews.content
    const image = someNews.image
    const category = someNews.category
    const link = someNews.link
  return (
    <div>
        <div>
            <h1>Latest News</h1>
            Covering March & April 2022
        </div>
        <Header
            category={category}
            image ={image}
        />
        <Body
            date={date}
            title={title}
            content={content}
        />
        <Button
            link={link}
        />
    </div>
  )
}

export default News