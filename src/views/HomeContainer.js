import React, {Component} from 'react';
import '../assets/StyleSheet/HomeStyle.css';
import jumpTo from "../modules/Navigation";
import {getAllMovieList} from "../axios/ServerRequest";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.init();
    }

    init = () => {
        getAllMovieList()
            .then((response) => {
                console.log(response.data);
                this.setState({data: response.data});
            }).catch((error) => {
            console.log(error);
            jumpTo("/pageNotFound");
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1">
                                        {data !== null ?
                                            <img src={data.Poster} alt={""} style={{height: 400}}/>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                            {data !== null
                                ?
                                (<div className="details col-md-6">
                                    <h3 className="product-title">{data.Title}</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"/>
                                            <span className="fa fa-star checked"/>
                                            <span className="fa fa-star checked"/>
                                            <span className="fa fa-star"/>
                                            <span className="fa fa-star"/>
                                        </div>
                                        <span className="review-no">41 reviews</span>
                                    </div>
                                    <p className="product-description">{data.Plot}</p>
                                    <h6 className="price">Awards: <span>{data.Awards}</span></h6>
                                    <h6 className="price">Production: <span>{data.Production}</span></h6>
                                    <h6 className="price">Director: <span>{data.Director}</span></h6>
                                    <h6 className="price">Language: <span>{data.Language}</span></h6>
                                    <h6 className="price">Year: <span>{data.Year}</span></h6>
                                    <h6 className="price">IMDB Rating: <span>{data.imdbRating}</span></h6>
                                </div>)
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContainer;
