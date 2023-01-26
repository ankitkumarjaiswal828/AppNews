import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description ,imageUrl,newsUrl}  = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://c.ndtvimg.com/2023-01/l5qj1ud8_mv-ganga-vilas_625x300_11_January_23.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target = "_self" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
    </div>
    )
  }
}

export default NewsItem