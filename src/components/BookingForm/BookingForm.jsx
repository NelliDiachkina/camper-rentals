import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';

const formSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  comment: yup.string().required('Required'),
});

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      name: '',
      comment: '',
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = data => {
    toast.success(
      `Dear ${data.name}. Thank you for choosing us! We are pleased to confirm your booking!`,
      { duration: 6000 }
    );
    reset();
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
