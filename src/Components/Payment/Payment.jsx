import React from 'react';
import classes from './payment-form.css'
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Payment = () => (
  <div>
    <h3 className='h-form'>Payment form</h3>
    <p className='p-form'>Required fields are followed by *<strong><abbr title='required'></abbr></strong>.</p>
    <h4>Contact information</h4>

    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        usercard: 'visa',
        cardnumber: '',
        expiration: '',
        title: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <fieldset>
          <legend>Title</legend>
          <div className="radio-button">
            <label className="custom-control-label" htmlFor="customRadioInline1">Mr</label>
            <Field type="radio" id="customRadioInline1" name="title" value="Mr" className="custom-control-input" />
            <Field type="radio" id="customRadioInline2" name="title" value="Mrs" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadioInline2">Mrs</label>
          </div>
        </fieldset>
        <div className='prive_info'>
          <label htmlFor="name">Name: *</label>
          <Field id="name" name="name" placeholder="Anna Kuzmina" required />
        </div>
        <div className='prive_info'>          <label htmlFor="email">E-mail: *</label>
          <Field id="email" name="email" placeholder="anna@askme.com" type="email" required />
        </div>
        <div className='prive_info'>
          <label htmlFor="password">Password: *</label>
          <Field id="password" name="password" type="password" required />
        </div>
        <section>
          <h3 className='h-form'>Payment information</h3>
          <p className='card_info'>
            <label htmlFor="card">
              <span >Card type:</span>
            </label>
            <Field as="select" id="card" name="usercard">
              <option value="visa">Visa</option>
              <option value="mc">Mastercard</option>
              <option value="amex">American Express</option>
            </Field>
          </p>
          <p>
            <label htmlFor="cardnumber">
              <span>Card number: *</span>
            </label>
            <Field type="text" id="cardnumber" name="cardnumber" placeholder="0000-0000-0000-0000" required />
          </p>
          <p>
            <label htmlFor="expiration">
              <span>Expiration date: *</span>
              <em>mm/yy</em>
            </label>
            <Field type="text" id="expiration" name="expiration" placeholder="MM/YY" required pattern="\d{2}/\d{2}" />
          </p>
        </section>
        <p><button type="submit">Validate the payment</button></p>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Payment />, document.getElementById('root'));

export default Payment