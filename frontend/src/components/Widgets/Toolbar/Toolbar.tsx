import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { post as postRate } from '../../../api/Rates';
import { Button } from '../../Buttons';
import { Select, TextField } from '../../DataEntry';
import { MainLayout } from '../../Layouts';
import { StyledToolbarContainer, StyledToolbarTitle, StyledToolbarForm, StyledEqualSign } from './Toolbar.styled';

interface ToolbarProps {};

export const Toolbar: FC<ToolbarProps> = () => {
  const fromOptions = [
    { label: 'Bitcoin', value: 'BTC' },
    { label: 'Ethereum', value: 'ETH' },
    { label: 'Ripple', value: 'XRP' },
    { label: 'Litcoin', value: 'LTC' },
  ];

  const toOptions = [
    { label: 'USD', value: 'USD' },
  ];

  const formik = useFormik({
    initialValues: {
      currencyFrom: undefined,
      amount1: undefined,
      currencyTo: undefined,
      amount2: undefined,
    },
    onSubmit: (values) => {
      postRate({
        ...values,
        dateTime: new Date(),
        type: 'exchanged',
      });
    },
    validationSchema: Yup.object({
      currencyFrom: Yup.string().required('Currency from required'),
      amount1: Yup.number().positive().required('Amount from required'),
      currencyTo: Yup.string().required('Currency to required'),
      amount2: Yup.number().positive().required('Amount to required'),
    })
  })

  return (
    <StyledToolbarContainer>
      <MainLayout>
        <StyledToolbarTitle>Exchange</StyledToolbarTitle>

        <StyledToolbarForm onSubmit={formik.handleSubmit}>
          <Select
            options={fromOptions}
            label='Currency from'
            name='currencyFrom'
            value={formik.values.currencyFrom}
            error={formik.touched.currencyFrom && Boolean(formik.errors.currencyFrom)}
            helperText={
              formik.errors.currencyFrom && formik.touched.currencyFrom
                ? formik.errors.currencyFrom
                : ''
            }
            onChange={formik.handleChange}
          />

          <TextField
            label='Amount'
            name='amount1'
            value={formik.values.amount1}
            error={formik.touched.amount1 && Boolean(formik.errors.amount1)}
            helperText={
              formik.errors.amount1 && formik.touched.amount1
                ? formik.errors.amount1
                : ''
            }
            onChange={formik.handleChange}
          />

          <StyledEqualSign>=</StyledEqualSign>

          <Select
            options={toOptions}
            label='Currency to'
            name='currencyTo'
            value={formik.values.currencyTo}
            error={formik.touched.currencyTo && Boolean(formik.errors.currencyTo)}
            helperText={
              formik.errors.currencyTo && formik.touched.currencyTo
                ? formik.errors.currencyTo
                : ''
            }
            onChange={formik.handleChange}
          />

          <TextField
            label='Amount'
            name='amount2'
            value={formik.values.amount2}
            error={formik.touched.amount2 && Boolean(formik.errors.amount2)}
            helperText={
              formik.errors.amount2 && formik.touched.amount2
                ? formik.errors.amount2
                : ''
            }
            onChange={formik.handleChange}
          />

          <Button type='submit'>Save</Button>
        </StyledToolbarForm>
      </MainLayout>
    </StyledToolbarContainer>
  );
};
