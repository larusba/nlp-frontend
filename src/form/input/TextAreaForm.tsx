import React, {Fragment} from 'react';
import {Formik, Field, Form} from "formik";
import {Row} from "react-bootstrap";

class TextAreaForm extends React.Component<any, any> {

    render() {
        return (
            <Fragment>
                <Formik
                    initialValues={{ text: "Salve mi chiamo Mario Rossi e lavoro per Eni S.p.a con sede a Roma" }}
                    onSubmit={(values) => this.props.onSubmit(values)}
                >
                    <Form>
                        <Row className='mt-2'>
                            <div><label htmlFor="text"><h4>Text upload</h4></label></div>
                        </Row>
                        <Row className='mt-2'>
                            <Field name="text" as="textarea" type="textarea" className='mr-2' rows="4" cols="60" />
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