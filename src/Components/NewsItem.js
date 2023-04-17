import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imgUrl,idUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={!imgUrl?"https://www.gannett-cdn.com/presto/2022/03/02/USAT/57ef2602-859c-4d04-9d41-89d4e1781e36-BIDEN_SOTU_ECON_RESCUE_PLAN.jpg?auto=webp&crop=1911,1075,x4,y0&format=pjpg&width=1200":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={idUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
