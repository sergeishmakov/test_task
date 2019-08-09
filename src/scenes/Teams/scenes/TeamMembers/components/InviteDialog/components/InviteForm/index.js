import React from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Button, CardContent, Typography } from '@material-ui/core';
import { FieldArray } from 'react-final-form-arrays';
import { Add, Delete, Send, Clear } from '@material-ui/icons';

import { Buttons, Card, Row, StyledInput } from './styles';

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
        submitting
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Row>
              <Button variant='contained' color='primary' onClick={() => push('users', null)}>
                <Add />
                Add member
              </Button>
              <Button onClick={() => pop('users')}>Remove member</Button>
            </Row>

            <FieldArray name='users'>
              {({ fields }) =>
                fields.map((name, index) => (
                  <Card key={name}>
                    <CardContent>
                      <Row>
                        <Typography variant='subtitle2'>Member {index + 1}:</Typography>
                        <Button size='small' color='secondary' onClick={() => fields.remove(index)}>
                          Delete
                          <Delete />
                        </Button>
                      </Row>
                      <Field fullWidth name={`${name}.email`} component={StyledInput} placeholder='Email address' />
                      <Field fullWidth name={`${name}.name`} component={StyledInput} placeholder='Full name' />
                    </CardContent>
                  </Card>
                ))
              }
            </FieldArray>

            <Buttons>
              <Button type='submit' color='primary' variant='contained' disabled={submitting || pristine}>
                Send
                <Send />
              </Button>
              <Button onClick={form.reset} variant='outlined' disabled={submitting || pristine}>
                Reset
                <Clear />
              </Button>
            </Buttons>
          </form>
        );
      }}
    />
  );
}
