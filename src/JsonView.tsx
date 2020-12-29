import React from 'react';
import {Container} from "react-bootstrap";
import ReactJson from "react-json-view";

class JsonView extends React.Component<any, any> {

    render() {
        return (
            <Container>
                <ReactJson src={this.props.jsonText} />
            </Container>
        )
    }
}

export default JsonView;