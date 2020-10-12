import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { addDays, format } from 'date-fns';

function TodoForm({ onSubmit }) {
	return (
		<Formik
			initialValues={{
				text: '',
				isCompleted: false,
				deadline: format(addDays(new Date(), 7), `yyyy-MM-dd'T'HH:mm`),
			}}
			onSubmit={(values, formikBag) => {
				onSubmit(values);
				formikBag.resetForm();
			}}
		>
			{formik => (
				<Form>
					<Field name="text" type="text" />
					<Field name="deadline" type="datetime-local" />
					<button type="submit">ADD TODO</button>
					<button type="reset">RESET</button>
				</Form>
			)}
		</Formik>
	);
}

TodoForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
