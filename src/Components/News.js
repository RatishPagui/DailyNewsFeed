import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

export default class News extends Component {
    articles = [
    ]

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalarticles: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f8afeeb224ab47a2a374199ea6579e31&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalarticles: parsedData.totalResults,
            loading: false
        })
    }

    // handlePrev = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f8afeeb224ab47a2a374199ea6579e31&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         page: this.state.page - 1,
    //         loading: false
    //     })
    // }

    // handleNext = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f8afeeb224ab47a2a374199ea6579e31&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         this.setState({
    //             articles: parsedData.articles,
    //             page: this.state.page + 1,
    //             loading: false
    //         })
    //     }
    // }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f8afeeb224ab47a2a374199ea6579e31&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 })
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalarticles: parsedData.totalResults,
            loading: false
        })
    }

    render() {
        return (
            <>
                <div style={{ textAlign: 'center',marginTop: '10px' }}>
                    <h2>Word-Bonds : Top {this.props.category} Headlines</h2><br />
                </div>

                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalarticles}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {/* {!this.state.loading && this.state.articles.map((ele) => { */}
                            {this.state.articles.map((ele) => {
                                return <div className="col-md-4" key={ele.url}>
                                    <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage} idUrl={ele.url} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="container my-3 d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrev}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
                    </div> */}
            </>
        )
    }
}
