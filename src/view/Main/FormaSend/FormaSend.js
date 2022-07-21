import React, { useState, useEffect } from "react";
import styles from "./FormaSend.module.scss";
import { Formik, Field } from "formik";

const FormaSend = () => {
  const [state, setState] = useState([]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Username not specified";
    } else if (values.name.length < 2 || values.name.length > 60) {
      errors.name = "Username should contain 2-60 characters";
    }
    if (!values.email) {
      errors.email = "E-mail not specified";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Wrong E-mail";
    }
    if (!values.phone) {
      errors.phone = "No phone number provided";
    } else if (!/^[+]{0,1}380([0-9]{9})$/i.test(values.phone)) {
      errors.phone = "Wrong number";
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    setState(values);
  };

  return (
    <>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h2>Обсудить проект</h2>
            <p>
              Расскажите о своих бизнес-целях и мы поможем вам в их достижении
            </p>
            <Formik
              initialValues={{ name: "", phone: "", email: "" }}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label className={styles.name__label}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Имя"
                      className={
                        errors.name && touched.name
                          ? styles.name__input + " " + styles.error__input
                          : styles.name__input
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <span className={styles.error__text}>
                      {touched.name && errors.name}
                    </span>
                  </label>
                  <label className={styles.phone__label}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telegram/Viber"
                      className={
                        errors.phone && touched.phone
                          ? styles.phone__input + " " + styles.error__input
                          : styles.phone__input
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <span className={styles.error__text}>
                      {touched.phone && errors.phone}
                    </span>
                  </label>

                  <label className={styles.email__label}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={
                        errors.email && touched.email
                          ? styles.email__input + " " + styles.error__input
                          : styles.email__input
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <span className={styles.error__text}>
                      {touched.email && errors.email}
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!touched.name || !isValid ? true : false}
                    className={
                      !touched.name || !isValid
                        ? "button" +
                          " " +
                          styles.battoun_margin +
                          " " +
                          styles.sub__bth_disabled
                        : "button" + " " + styles.battoun_margin
                    }
                  >
                    Отправить
                  </button>
                  <img
                    className={styles.background__phone}
                    src={require("./../../../image/form/phone call.243.png")}
                  />
                  <img
                    className={styles.background__group}
                    src={require("./../../../image/form/Group 175.png")}
                  />
                </form>
              )}
            </Formik>
            <img
              src={require("./../../../image/form/Postpaid.png")}
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormaSend;
