import React, {Fragment} from 'react';
import {Formik, Field, Form, FormikValues} from "formik";
import {Col, Container, Row} from "react-bootstrap";
import TextAreaForm from "./TextAreaForm";
import {nlpService} from "./NlpService";
import ReactJson from "react-json-view";

class JsonView extends React.Component<any, any> {
    constructor(props: { jsonText: string}) {
        super(props);
    }

    render() {
        return (
            <Container>
                <ReactJson src={this.props.jsonText} />
            </Container>
        )
    }
}

export default JsonView;