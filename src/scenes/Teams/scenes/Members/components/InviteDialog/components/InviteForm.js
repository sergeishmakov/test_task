import React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { TextField, Button, CardContent, Typography } from '@material-ui/core';
import { FieldArray } from 'react-final-form-arrays';
import { Add, Delete, Send, Clear } from '@material-ui/icons';

import { ButtonsWrapper, StyledCard, Row } from './styles';

export function InviteForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
      render={({
        handleSubmit,
        form: {
          mutators: { push, pop }
        },
        pristine,
        form,
        submitting,
        values
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <Button variant='contained' color='primary' onClick={() => push('members', null)}>
                <Add />
                Add member
              </Button>
              <Button onClick={() => pop('members')}>Remove member</Button>
            </div>

            <FieldArray name='members'>
              {({ fields }) =>
                fields.map((name, index) => (
                  <StyledCard key={name}>
                    <CardContent>
                      <Row>
                        <Typography variant='subtitle2'>Member {index + 1}:</Typography>
                        <Button size='small' variant='contained' color='secondary' onClick={() => fields.remove(index)}>
                          Delete
                          <Delete />
                        </Button>
                      </Row>
                      <Field fullWidth name='email' component={TextField} type='text' label='Email address' />
                      <Field fullWidth name='name' component={TextField} type='text' label='Full name' />
                    </CardContent>
                  </StyledCard>
                ))
              }
            </FieldArray>

            <ButtonsWrapper className='buttons'>
              <Button type='submit' color='primary' variant='contained' disabled={submitting || pristine}>
                Send
                <Send />
              </Button>
              <Button type='submit' onClick={form.reset} variant='outlined' disabled={submitting || pristine}>
                Reset
                <Clear />
              </Button>
            </ButtonsWrapper>
          </form>
        );
      }}
    />
  );
}
