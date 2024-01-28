import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TitleComponent from "./common/TitleComponent";
import MapContainer from "./MapContainer";
import loc from "../Assets/SVG/location-pin.svg";
import phone from "../Assets/SVG/phone.svg";
import Button from "@material-ui/core/Button";
import { InputField, TextArea } from "./common/FieldComponents";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./common/Modal";
import { Grid, withWidth } from "@material-ui/core";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactUs = (props) => {
  const [showMsg, setshowMsg] = useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        // width: '25ch',
      },
    },
  }));
  const prodMsg = localStorage.getItem("msg");
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    description: prodMsg,
    subject: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const classes = useStyles();
  const isSmallScreen = ["xs", "sm"].includes(props.width);

  return (
    <>
      <Modal
        visible={showMsg}
        closeModal={() => {
          setshowMsg(false);
        }}
        data={{ name: "" }}
      />
      <div
        className="contact-us"
        style={{ margin: isSmallScreen ? "60px 10px" : "110px 50px 50px 50px" }}
      >
        <TitleComponent title="Contact Us" />
        <div style={{ margin: isSmallScreen ? "25px 5px" : "50px 25px " }}>
          <div
            style={{
              display: "flex",
              flexDirection: isSmallScreen ? "column-reverse" : "row",
            }}
          >
            <div className="flex-1">
              <div
                className="box"
                style={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "row" : "column",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3 style={{ color: "#0b5589" }}> Office </h3>
                  <span style={{ display: "flex" }}>
                    <img src={loc} />
                    <h5>Unitech Products</h5>
                  </span>

                  <p style={{ marginLeft: "30px" }}>
                    {" "}
                    185/B,(Ground floor), 5th Main,
                    <br />
                    Devanathachar Street, Chamrajpet,
                    <br /> Bengaluru, Karnataka - 560018
                  </p>
                  <span style={{ display: "flex" }}>
                    <img src={phone} style={{ marginRight: "8px" }} />
                    <h6>080-22424293</h6>
                  </span>
                </div>

                <div>
                  {!isSmallScreen && <hr />}
                  <h3 style={{ color: "#0b5589" }}> Factory </h3>
                  <span style={{ display: "flex" }}>
                    <img src={loc} />
                    <h5>Unitech Products</h5>
                  </span>

                  <p style={{ marginLeft: "30px" }}>
                    No 30 & 31, channenahalli, <br />
                    Dhakshina Murthy layout, Magadi Main Rd,
                    <br /> Bengaluru, Karnataka - 562130
                  </p>
                  <span style={{ display: "flex" }}>
                    <img src={phone} style={{ marginRight: "8px" }} />
                    <h6>080-22424293</h6>
                  </span>
                </div>
                <div>
                  {!isSmallScreen && <hr />}
                  <h3 style={{ color: "#0b5589" }}> Retail Store </h3>
                  <span style={{ display: "flex" }}>
                    <img src={loc} />
                    <h5>Germisol Cleanmart</h5>
                  </span>

                  <p style={{ marginLeft: "30px" }}>
                    No 92, EAT St,
                    <br /> Gandhi Bazaar, Basavanagudi,
                    <br /> Bengaluru, Karnataka - 560004
                  </p>
                  <span style={{ display: "flex" }}>
                    <img src={phone} style={{ marginRight: "8px" }} />
                    <h6>+917406056923</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="flex-2  "
              style={{
                marginLeft: isSmallScreen ? "0px" : "10px",
                marginBottom: isSmallScreen ? "10px" : "0px",
              }}
            >
              <div className="box">
                <Formik
                  initialValues={formValues}
                  validationSchema={Yup.object({
                    name: Yup.string()
                      .max(15, "Must be 15 characters or less")
                      .required("Name Required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email Required"),
                    description: Yup.string().required("Required"),
                    phoneNumber: Yup.string()
                      .matches(phoneRegExp, "Phone number is not valid")
                      .required("Phone Number Required"),
                    subject: Yup.string().required("Subject Required"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values));
                    setSubmitting(false);
                    window.sendmail(values);
                    setshowMsg(true);
                  }}
                >
                  {(formProps) => (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                          <InputField
                            className="mb-4"
                            name="name"
                            label="Name"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <InputField name="email" label="Email" />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                          <InputField name="phoneNumber" label="Phone Number" />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={3}>
                          <InputField
                            className="mb-4 "
                            name="subject"
                            label="Subject"
                          />
                        </Grid> */}
                        <Grid item xs={12} sm={6} md={6}>
                          <TextArea
                            name="description"
                            label="Message"
                            id="desc"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        disabled={formProps.isSubmitting}
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </Form>
                  )}
                </Formik>
                <div
                  className="map text-center"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    height: "30%",
                    width: "100%",
                  }}
                >
                  <MapContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withWidth()(ContactUs);
