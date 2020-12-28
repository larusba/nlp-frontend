import React from 'react';
import {FormikValues} from "formik";
import {Col, Container, Row} from "react-bootstrap";
import {nlpService} from "./NlpService";
import JsonView from "./JsonView";
import TextAreaForm from "./TextAreaForm";
import TextSearchForm from "./TextSearchForm";

class AdvancedSearchContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {response: {info: "Results will be shown here!"} }
        this.sendSearchRequest = this.sendSearchRequest.bind(this);
    }

    sendSearchRequest(formData: FormikValues) {
        nlpService.findDocsByText(formData['text'],0,20).then(
            (result: string) => {
                console.log('result: ', JSON.parse(result));
                this.setState({response: JSON.parse(result)})
            },
            (error) => {
                console.log("error", error);
            }
        );

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TextSearchForm onSubmit={this.sendSearchRequest}/>
                    </Col>
                </Row>
                < hr/>
                <Row>
                    <JsonView jsonText={this.state.response}/>
                </Row>
            </Container>
        )
    }
}

export default AdvancedSearchContainer;