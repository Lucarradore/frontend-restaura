import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../assets/logo.png";
import "../../../css/contact.css";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: Yup.string()
    .required("El apellido es obligatorio")
    .min(2, "El apellido debe tener al menos 2 caracteres"),
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),
  asunto: Yup.string()
    .required("El asunto es obligatorio")
    .min(5, "El asunto debe tener al menos 5 caracteres"),
});

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <img src={logo} alt="restaura" className="contact-logo" />
        <h2 className="contact-title">Formulario de Contacto</h2>
        <Formik
          initialValues={{ nombre: "", apellido: "", email: "", asunto: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert("Formulario enviado correctamente 🎉");
              resetForm();
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="contact-form">
              <div className="contact-field">
                <label className="contact-label">Nombre</label>
                <Field type="text" name="nombre" className="contact-input" />
                <ErrorMessage name="nombre" component="div" className="contact-error" />
              </div>
              <div className="contact-field">
                <label className="contact-label">Apellido</label>
                <Field type="text" name="apellido" className="contact-input" />
                <ErrorMessage name="apellido" component="div" className="contact-error" />
              </div>
              <div className="contact-field">
                <label className="contact-label">Email</label>
                <Field type="email" name="email" className="contact-input" />
                <ErrorMessage name="email" component="div" className="contact-error" />
              </div>
              <div className="contact-field">
                <label className="contact-label">Asunto</label>
                <Field as="textarea" name="asunto" rows="3" className="contact-input" />
                <ErrorMessage name="asunto" component="div" className="contact-error" />
              </div>
              <button type="submit" disabled={isSubmitting} className="contact-submit">
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactPage;