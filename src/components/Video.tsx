import * as React from "react";
import { Player } from "video-react";
import { Container, Row, Col } from 'reactstrap';

import '../styles/video-react.css';

export interface VideoProps { url: string; }

export class Video extends React.Component<VideoProps, {}> {
    render() {
        return (
            <Player
                muted preload="metadata" autoPlay="true">
                <source src={this.props.url} />
            </Player>
        );
    }
}