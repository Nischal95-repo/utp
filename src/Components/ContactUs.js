import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TitleComponent from './common/TitleComponent';
import MapContainer from './MapContainer';
import loc from '../Assets/SVG/location-pin.svg';
import phone from '../Assets/SVG/phone.svg';
import { InputField, TextField } from '../Components/common/FieldComponents';

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function ContactUs() {
	return (
		<div className="contact-us" style={{ margin: '110px 50px 50px 50px' }}>
			<TitleComponent title="Contact Us" />
			<div style={{ margin: '50px 110px 50px 110px ' }}>
				<div className="row">
					<div className="col-md-5">
						<div className="box">
							<div>
								<h3 style={{ color: '#0b5589' }}> Office </h3>
								<span style={{ display: 'flex' }}>
									<img src={loc} />
									<h5>Unitech Products</h5>
								</span>

								<p style={{ marginLeft: '30px' }}>
									{' '}
									185/B,(Ground floor), 5th Main,
									<br />
									Devanathachar Street, Chamrajpet,
									<br /> Bengaluru, Karnataka - 560018
								</p>
								<span style={{ display: 'flex' }}>
									<img src={phone} style={{ marginRight: '8px' }} />
									<h6>080-22424293</h6>
								</span>
								<hr />
							</div>

							<div>
								<h3 style={{ color: '#0b5589' }}> Factory </h3>
								<span style={{ display: 'flex' }}>
									<img src={loc} />
									<h5>Unitech Products</h5>
								</span>

								<p style={{ marginLeft: '30px' }}>
									No 31, channenahalli, <br />
									Dhakshina Murthy layout, Magadi Main Rd,
									<br /> Bengaluru, Karnataka - 562130
								</p>
								<span style={{ display: 'flex' }}>
									<img src={phone} style={{ marginRight: '8px' }} />
									<h6>080-22424293</h6>
								</span>
								<hr />
							</div>
							<div>
								<h3 style={{ color: '#0b5589' }}> Retail Store </h3>
								<span style={{ display: 'flex' }}>
									<img src={loc} />
									<h5>Germisol Cleanmart</h5>
								</span>

								<p style={{ marginLeft: '30px' }}>
									No 92, EAT St,
									<br /> Gandhi Bazaar, Basavanagudi,
									<br /> Bengaluru, Karnataka - 560004
								</p>
								<span style={{ display: 'flex' }}>
									<img src={phone} style={{ marginRight: '8px' }} />
									<h6>+917406056923</h6>
								</span>
							</div>
						</div>
					</div>
					<div className=" col-md-7">
						<div className="box">
							<Formik
								initialValues={{
									name: '',
									email: '',
									phoneNumber: '',
									description: '',
								}}
								validationSchema={Yup.object({
									name: Yup.string()
										.max(15, 'Must be 15 characters or less')
										.required('Name Required'),
									email: Yup.string().email('Invalid email address').required('Email Required'),
									description: Yup.string().required('Required'),
									phoneNumber: Yup.string()
										.matches(phoneRegExp, 'Phone number is not valid')
										.required('Phone Number Required'),
								})}
								onSubmit={(values, { setSubmitting }) => {
									// alert(JSON.stringify(values));
									setSubmitting(false);
									window.sendmail(values);
								}}
							>
								{(formProps) => (
									<Form>
										<div className="form-group">
											<InputField
												name="name"
												placeholder="Your name"
												className="form-control"
												label="Name"
											/>
										</div>
										<div className="form-group">
											<InputField
												name="phoneNumber"
												placeholder="Your Phone Number"
												className="form-control"
												label="Phone Number"
											/>
										</div>
										<div className="form-group">
											<InputField
												name="email"
												placeholder="Your Email"
												className="form-control"
												label="Email"
											/>
										</div>
										<div className="form-group">
											{/* <label htmlFor="lastName">Description</label>
											<Field
												name="description"
												placeholder="Description"
												as="textarea"
												className="form-control textarea"
											/>
											<ErrorMessage name="description">
												{(msg) => <div className="error-msg">{msg}</div>}
											</ErrorMessage> */}
											<TextField
												name="description"
												placeholder="Description"
												className="form-control textarea"
												label="Description"
											/>
										</div>
										<button
											type="submit"
											className="btn btn-primary"
											disabled={formProps.isSubmitting}
										>
											Send
										</button>
										{/* <button
											type="button"
											className="btn btn-default"
											onClick={() => {
												// formProps.resetForm();
												console.log(formProps);
											}}
										>
											Reset
										</button> */}
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
			<div className="map text-center" style={{ width: '100%', marginTop: '20px', height: '30%', width: '100%' }}>
				<MapContainer />
			</div>
		</div>
	);
}

export default ContactUs;
