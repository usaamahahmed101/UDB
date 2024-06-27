'use client'
import React from 'react'

import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for your submission!</p>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="fullname">
              Full Name <span className="color-secondary">*</span>{' '}
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              placeholder="John Doe"
              autoComplete="name"
              aria-autocomplete="name"
            />
            <ValidationError prefix="Name" field="fullname" errors={state.errors} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              id="phonenumber"
              name="phonenumber"
              type="tel"
              aria-autocomplete="tel"
              autoComplete="tel"
              placeholder="+123-000-000-0000"
            />
            <ValidationError prefix="Phone number" field="phonenumber" errors={state.errors} />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="color-secondary">*</span>{' '}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-autocomplete="email"
              placeholder="john.doe@mail.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="message">
              Message <span className="color-secondary">*</span>{' '}
            </label>
            <textarea
              id="message"
              name="message"
              required
              cols="20"
              rows="5"
              placeholder="What would you like to discuss?"
            ></textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="form-group mb--0">
            <button className="btn-default" type="submit">
              Send Message
            </button>
          </div>
          {state.errors && (
            <div className="color-warning mt--20 d-flex align-items-center b1">
              <i className="fa fa-exclamation-circle me-3"></i>
              <ValidationError errors={state.errors} />
            </div>
          )}
        </div>
      </form>
    </>
  )
}

export default ContactForm
