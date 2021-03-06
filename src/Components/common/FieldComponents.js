import React from 'react';
import { useField } from 'formik';

export const InputField = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input>. We can use field meta to show an error
	// message if the field is invalid and it has been touched (i.e. visited)
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className={props.className} {...field} {...props} />
			{meta.touched && meta.error ? <div className="error-msg">{meta.error}</div> : null}
		</>
	);
};

export const TextField = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input>. We can use field meta to show an error
	// message if the field is invalid and it has been touched (i.e. visited)
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<textarea className={props.className} {...field} {...props} />
			{meta.touched && meta.error ? <div className="error-msg">{meta.error}</div> : null}
		</>
	);
};
