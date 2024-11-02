import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const formSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  comment: yup.string().required('Required'),
  date: yup
    .object()
    .shape({
      start: yup.date().nullable(),
      end: yup.date().nullable(),
    })
    .test('date-range', 'Booking period is required', value => {
      const { start, end } = value || {};
      return start && end;
    }),
});

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      name: '',
      comment: '',
      date: { start: null, end: null },
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = data => {
    toast.success(
      `Dear ${data.name}. Thank you for choosing us! We are pleased to confirm your booking!`,
      { duration: 6000 }
    );
    reset();
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <section className={css.formSection}>
      <div className={css.formHead}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label>
          <input
            className={css.input}
            type="text"
            placeholder="Name*"
            {...register('name')}
          />
          {errors.name && (
            <p className={css.errorMessage}>{errors.name.message}</p>
          )}
        </label>
        <label>
          <input
            className={css.input}
            type="text"
            placeholder="Email*"
            {...register('email')}
          />
          {errors.email && (
            <p className={css.errorMessage}>{errors.email.message}</p>
          )}
        </label>
        <label>
          <DatePicker
            className={css.input}
            placeholderText="Booking date*"
            selected={startDate}
            onChange={dates => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
              setValue('date', { start, end }, { shouldValidate: true });
              trigger('date');
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange={true}
            dateFormat="dd.MM.yyyy"
            shouldCloseOnSelect={false}
          />
          {errors.date && (
            <p className={css.errorMessage}>{errors.date.message}</p>
          )}
        </label>
        <label>
          <textarea
            className={css.textArea}
            placeholder="Comment"
            {...register('comment')}
          ></textarea>
          {errors.comment && (
            <p className={css.errorMessage}>{errors.comment.message}</p>
          )}
        </label>
        <button type="submit" className={css.btn} aria-label="Send button">
          Send
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
