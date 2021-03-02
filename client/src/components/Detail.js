import React from 'react';
import { connect } from 'react-redux';
import './Detail.css';
class Detail extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className="game-detail">
        <div class="header">
          <img class="crop"
            width="100%"
            src={this.props.detail?.background_image}
            alt="" />
          <div class="texto-encima">{this.props.detail?.name}</div>

        </div>
        
        <div className="flexBox">
          <div className="infor">
            <p>
              <img alt="" width="350" src={this.props.detail.background_image_additional} />
            </p>
            <p><b>Rating:</b> {this.props.detail.rating}</p>

            <p><b>Released:</b> {this.props.detail.released}</p>
            {this.props.detail.genrs ?
              <p><b>Genres:</b> {
                this.props.detail.genrs.map(element => {
                  return <span> {element},  </span>
                })}
              </p> :
              "error"}
            {this.props.detail.platform ?
              <p><b>Platforms:</b> {
                this.props.detail.platform.map(element => {
                  return <span> {element},  </span>
                })}
              </p> :
              "error"}
          </div>
          <div className="descriptionVideo">
            {
              this.props.detail?.clip?.clip ?
                <video
                  controls src={this.props.detail?.clip?.clips.full}
                  width="640" height="480"
                /> :
                <h1>no tiene video</h1>
            }
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.detail?.description }} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    detail: state.videogamesDetail
  }
}


export default connect(mapStateToProps)(Detail);

