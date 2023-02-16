import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Form as CarbonForm,
  TextInput,
  TextArea,
  Stack,
  Grid,
  Column,
  Modal,
  Layer,
  ToastNotification,
} from '@carbon/react';

const FORM_ID = 'contactForm';

export const Contact = ({ isOpen, setIsOpen }) => {
  const [messageTimestamps, setMessageTimestamps] = useState([]);

  const onValidSubmit = async () => {
    const form = document.getElementById(FORM_ID);
    form.submit();
    setIsOpen(false);
    const timestamp = new Date().toLocaleTimeString();
    setMessageTimestamps([timestamp, ...messageTimestamps]);
  };

  const formik = useFormik({
    onSubmit: onValidSubmit,
    initialValues: { name: '', email: '', message: '' },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Please enter your name';
      }

      if (!values.email) {
        errors.email = 'Please enter your email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.message) {
        errors.message = 'Please enter a message';
      }
      return errors;
    },
  });

  return (
    <>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} formik={formik} />
      <Layer level={0}>
        <Grid fullWidth className="toast-plane">
          <Column lg={{ offset: 10, span: 2 }}>
            {messageTimestamps.map((timestamp) => (
              <ToastNotification
                key={timestamp}
                kind="success"
                caption={timestamp}
                title="Contact message sent"
                timeout={5000}
              />
            ))}
          </Column>
        </Grid>
      </Layer>
    </>
  );
};

const ContactModal = ({ isOpen, setIsOpen, formik }) => {
  const onRequestClose = () => setIsOpen(false);

  return (
    <Modal
      modalHeading="Contact"
      primaryButtonText="Send Message"
      secondaryButtonText="Cancel"
      size="sm"
      open={isOpen}
      onRequestClose={onRequestClose}
      onRequestSubmit={formik.submitForm}
    >
      <ContactFormLayout {...formik} />
    </Modal>
  );
};

const ContactFormLayout = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const invalidNameText = touched.name && errors.name;
  const invalidEmailText = errors.email && touched.email && errors.email;
  const invalidMessageText = touched.message && errors.message;

  return (
    <CarbonForm
      action="https://api.web3forms.com/submit"
      method="POST"
      id={FORM_ID}
      onSubmit={handleSubmit}
    >
      <Stack gap={7}>
        <input
          type="hidden"
          name="access_key"
          value="91436634-7b85-4b3d-8efd-10bcfdbfa983"
        />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Web3Forms"
        />
        <input
          type="checkbox"
          name="botcheck"
          id=""
          style={{ display: 'none' }}
        />
        <TextInput
          type="text"
          name="name"
          id="name"
          labelText="Name" /* Carbon */
          invalid={invalidNameText} /* Carbon */
          invalidText={invalidNameText} /* Carbon */
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="form__text__input"
        />
        <TextInput
          type="email"
          name="email"
          id="email"
          labelText="Email" /* Carbon */
          invalid={invalidEmailText} /* Carbon */
          invalidText={invalidEmailText} /* Carbon */
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="form__text__input"
        />
        <TextArea
          type="text"
          name="message"
          id="message"
          labelText="Message" /* Carbon */
          invalid={invalidMessageText} /* Carbon */
          invalidText={invalidMessageText} /* Carbon */
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="form__text__input"
        />
        <div>
          Or <a href="mailto:de-varela@outlook.com">email me</a> directly
        </div>
      </Stack>
    </CarbonForm>
  );
};
