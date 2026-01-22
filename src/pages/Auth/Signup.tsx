import * as Yup from 'yup';
import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from 'formik';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too short!')
    .required('Username is required! zzz'),
  password: Yup.string().min(8, 'At least 8 characters'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div style={{ minWidth: 800 }}>
      <h1>Signup</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ minWidth: 800, position: 'absolute', left: '20%' }}
        initialValues={{ remember: true }}
        onFinish={formik.handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
              message: formik.touched.username ? formik.errors.username : '',
            },
          ]}
          validateStatus={
            formik.errors.username && formik.touched.username ? 'error' : ''
          }
          help={
            formik.errors.username && formik.touched.username
              ? formik.errors.username
              : ''
          }
        >
          <Input
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          validateStatus={
            formik.errors.password && formik.touched.password ? 'error' : ''
          }
          help={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ''
          }
        >
          <Input.Password
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="First name"
          rules={[{ required: true, message: 'Please input your first name!' }]}
          validateStatus={
            formik.errors.firstName && formik.touched.firstName ? 'error' : ''
          }
          help={
            formik.errors.firstName && formik.touched.firstName
              ? formik.errors.firstName
              : ''
          }
        >
          <Input
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="Last name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
          validateStatus={
            formik.errors.lastName && formik.touched.lastName ? 'error' : ''
          }
          help={
            formik.errors.lastName && formik.touched.lastName
              ? formik.errors.lastName
              : ''
          }
        >
          <Input
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          validateStatus={
            formik.errors.email && formik.touched.email ? 'error' : ''
          }
          help={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ''
          }
        >
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
