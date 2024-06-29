import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
    name: Yup.string().trim().min(3, "Minimum 3 letters").max(30, "Maximum 30 letters").required("Required"),
    number: Yup.string().trim().min(9, "Minimum 9 digits").required(" Required"),
});

export default function ContactForm({ addContact }) {
    const handleSubmit = (values, actions) => {
        addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}
        >
            <Form className={css.container}>
                <div className={css.fieldGroup}>
                    <label>Name</label>
                    <Field className={css.input} name="name" type="text" />
                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>
                <div className={css.fieldGroup}>
                    <label>Number</label>
                    <Field className={css.input} type="tel" name="number" />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>
                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
