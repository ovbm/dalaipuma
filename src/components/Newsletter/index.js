import React, { useState } from 'react';
import jsonp from 'jsonp';
import { validate } from 'email-validator';

const endpoint =
  'https://band.us18.list-manage.com/subscribe/post-json?u=2abfeaaabd3d0205adb46d2de&amp;id=be683207e5'; // eslint-disable-line no-undef
const timeout = 3500;

const addToMailchimp = function addToMailchimp(email) {
  const isEmailValid = validate(email);
  const emailEncoded = encodeURIComponent(email);
  if (!isEmailValid) {
    return Promise.resolve({
      result: 'error',
      msg: 'The email you entered is not valid.',
    });
  }

  // Generates MC endpoint for our jsonp request. We have to
  // change `/post` to `/post-json` otherwise, MC returns an error
  const queryParams = `&EMAIL=${emailEncoded}`;
  const url = `${endpoint}${queryParams}`;

  return new Promise((resolve, reject) =>
    jsonp(url, { param: 'c', timeout }, (err, data) => {
      if (err) reject(err);
      if (data) resolve(data);
    }),
  );
};

const Newsletter = () => {
  const [result, setResult] = useState({ result: '', msg: '' });
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addToMailchimp(email);
    setResult(res);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Newsletter{' '}
          <input
            className="emailInput"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      {result.result !== '' ? (
        <>
          {result.result === 'success' ? (
            <p style={{ color: 'white', fontWeight: 'bold' }}>♥️ thanks! ♥️</p>
          ) : (
            <div
              className="error"
              dangerouslySetInnerHTML={{ __html: result.msg }}
            />
          )}
        </>
      ) : null}

      <style jsx>
        {`
          .emailInput {
            background: white;
            font-family: inherit;
            font-size: inherit;
            width: 80%;
            max-width: 300px;
          }
          .emailInput:focus {
            outline: none;
          }
          label {
            color: white;
            font-weight: bold;
          }
          .error {
            text-align: center;
            margin: 1em 0;
            width: 300px;
            color: white;
          }
          button {
            background: magenta;
            color: white;
            text-shadow: 2px 2px black;
            font-family: inherit;
            font-size: inherit;
          }
        `}
      </style>
    </div>
  );
};

export default Newsletter;
