import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RedditList } from './';
import * as actions from './redux/actions';

import { Row, Col } from 'antd/lib'; 
import MapGL from 'react-map-gl';
import SensorsTable from '../common/SensorsTable'
import sizeMe from 'react-sizeme';

const token = "pk.eyJ1IjoiYnJvbGluIiwiYSI6Ik01QjlvUUUifQ.LOBamvnM39AI2H70y4ejdw"; // eslint-disable-line

export class DefaultPage extends Component {
    static propTypes = {
        home: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    render() {

        MapGLCol = sizeMe({ monitorHeight: true })(MapGLCol)

        return (
            <Row>
                <Col className="padding-1"
                     xs={{ span: 3, offset: 0 }}
                     sm={{ span: 3, offset: 0 }}
                     md={{ span: 3, offset: 0 }}
                     lg={{ span: 3, offset: 0 }}
                     xl={{ span: 3, offset: 0 }}>
                    <Row style={{ backgroundColor: "yellow" }}>Hola</Row>
                    <Row style={{ backgroundColor: "yellow" }}>Hola</Row>
                    <Row style={{ backgroundColor: "blue" }}>Hola</Row>
                    <Row style={{ backgroundColor: "red" }}>Hola</Row>
                </Col>

                <MapGLCol />

                <Col className="padding-1"
                     xs={{ span: 6, offset: 0 }}
                     sm={{ span: 6, offset: 0 }}
                     md={{ span: 6, offset: 0 }}
                     lg={{ span: 6, offset: 0 }}
                     xl={{ span: 6, offset: 0 }}>
                    <SensorsTable />
                </Col>
            </Row>
        );
    }
}


class MapGLCol extends Component {
    state = {
        viewport: {
            latitude: 37.729,
            longitude: -122.36,
            zoom: 11,
            bearing: 0,
            pitch: 50,
            width: 1080,
            height: 640,
            startDragLngLat: null,
            isDragging: null
        },
        settings: {
            dragPan: true,
            dragRotate: true,
            scrollZoom: true,
            touchZoomRotate: true,
            doubleClickZoom: true,
            minZoom: 0,
            maxZoom: 20,
            minPitch: 0,
            maxPitch: 85
        }
    }

    _onChangeViewport = (newViewport) => {
        //newViewport.width = this.props.size.width;
        newViewport.height = 640;
        //console.log("holaaaa", newViewport.width);
        this.setState({ viewport: newViewport });
    }

    render() {
        const {viewport, settings} = this.state;

        viewport.width = this.props.size.width;
        //viewport.height = 640;

        return (
            <Col
                style={{ marginTop: 10 }}
                xs={{ span: 15, offset: 0 }}
                sm={{ span: 15, offset: 0 }}
                md={{ span: 15, offset: 0 }}
                lg={{ span: 15, offset: 0 }}
                xl={{ span: 15, offset: 0 }}>

                <MapGL
                    {...viewport}
                    {...settings}
                    mapboxApiAccessToken={token}
                    onChangeViewport={this._onChangeViewport}
                />

            </Col>
        )
    }
}


/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        home: state.home,
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}

//DefaultPage = sizeMe({ monitorHeight: true })(DefaultPage);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultPage);
