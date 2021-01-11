import React, {Fragment} from 'react';
import {Formik, Field, Form} from "formik";
import {Row} from "react-bootstrap";

class TextAreaForm extends React.Component<any, any> {
    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{ text: "" }}
                    onSubmit={(values) => this.props.onSubmit(values)}
                >
                    <Form>
                        <Row className='mt-2'>
                            <div><label htmlFor="text"><h4>Advanced Search</h4></label></div>
                        </Row>
                        <Row className='mt-2 mb-2'>
                            <Field name="text" placeholder="Search an Org" type="text" className='mr-2' cols="60" />
                        </Row>
                        <Row className='mt-2 mb-2'>
                            <button type="submit">Submit</button>
                        </Row>
                    </Form>
                </Formik>
            </Fragment>
        )
    }
}

export default TextAreaForm;