import * as React from "react";
import { Container, Row, Col } from 'reactstrap';

import { Hello } from './Hello';
import { VtoVideo } from './VtoVideo';

export interface ApplicationProps { url: string; }

export class Application extends React.Component<ApplicationProps, {}> {

    private videoNode: HTMLVideoElement;

    componentDidMount() {
        console.log('component did mount');
        console.log('original video muted : ' + this.videoNode.muted);
        console.log('original video default muted : ' + this.videoNode.defaultMuted);
        this.videoNode.muted = true;
        this.videoNode.defaultMuted = true;
        console.log('changed video muted : ' + this.videoNode.muted);
        console.log('changed video default muted : ' + this.videoNode.defaultMuted);
    }

    componentDidCatch() {
        console.log('component did catch');
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    render() {
        console.log('render');
        return (
            <Container>
                <Row>
                    <Col>
                        <video muted autoPlay playsInline ref={node => this.videoNode = node}><source src={'https://media.w3.org/2010/05/sintel/trailer.mp4'} /></video>
                    </Col>
                </Row>
            </Container >
        );
    }
}
