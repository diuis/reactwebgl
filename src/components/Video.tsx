import * as React from "react";
import { Player } from "video-react";
import { Container, Row, Col } from 'reactstrap';

export interface VideoProps { url: string; }

export class Video extends React.Component<VideoProps, {}> {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Player
                            playsInline muted autoPlay
                            poster="https://video-react.js.org/assets/poster.png"
                            src={this.props.url}
                        />
                    </Col>
                </Row>
            </Container>

        );
    }
}