import * as React from "react";
import { Container, Row, Col } from 'reactstrap';

import { Hello } from './Hello';
import { Video } from './Video';

export interface ApplicationProps { url: string; }

export class Application extends React.Component<ApplicationProps, {}> {

    componentDidCatch() {
        console.log('Application component started!');
    }

    componentDidUpdate() {
        console.log('Application component updated');
    }

    render() {
        return (
            < Container >
                <Row>
                    <Col>
                        <Hello compiler='Typescript' framework='React'></Hello>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Video url={this.props.url} />
                    </Col>
                </Row>
            </Container >
        );
    }
}
