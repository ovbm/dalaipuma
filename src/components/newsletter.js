import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default function newsletter() {
  const [result, setResult] = useState({ result: '', msg: '' });
  const [email, setEmail] = useState('');
  console.log(email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addToMailchimp(email);
    setResult(res);
    console.log(res);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form onSubmit={handleSubmit}>
        <Label>Newsletter</Label>
        <EmailInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {result.result !== '' ? (
        <>
          {result.result === 'success' ? (
            <p style={{ color: 'white', fontWeight: 'bold' }}>♥️ thanks! ♥️</p>
          ) : (
            <ErrorMessage dangerouslySetInnerHTML={{ __html: result.msg }} />
          )}
        </>
      ) : null}
    </div>
  );
}

const EmailInput = styled.input`
  background: 'transparent';
  color: 'white';
  margin-bottom: '1em';
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color: white;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin: 1em 0;
  width: 300px;
  color: white;
`;
