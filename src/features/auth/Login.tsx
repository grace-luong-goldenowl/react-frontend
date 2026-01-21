import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useNavigate } from 'react-router-dom';

import type { LoginRequest } from '../../app/services/auth';
import { useLoginMutation } from '../../app/services/auth';

import Button from '@/components/ui/button/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<LoginRequest>({
    email: '',
    password: '',
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

  return (
    <>
      <FieldSet className="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="maxleiter@example.com"
              name="email"
              onChange={handleChange}
            />
            <FieldDescription>Your email address.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              name="password"
            />
          </Field>
        </FieldGroup>
        <Button
          onClick={async () => {
            try {
              const user = await login(formState).unwrap();
              dispatch(setCredentials(user));
              navigate('/');
            } catch (err) {
              console.log('🚀 ~ Login ~ err:', err);
            }
          }}
        >
          {isLoading ?? <Spinner data-icon="inline-start" />}
          Login
        </Button>
      </FieldSet>
    </>
  );
}
