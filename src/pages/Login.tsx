import { useForm } from "react-hook-form";
import styles from './login.module.scss';
import cn from 'classnames';
import { fetchUserProfile, useProfileSelector } from "../store/slice/profile";
import { useAppDispatch } from "../store/hooks";

interface IForm {
  username: string;
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const {error, loading} = useProfileSelector();
  const {register, handleSubmit, formState} = useForm<IForm>({
    defaultValues: { username: ""},
  });

  const onSubmit = handleSubmit(async (values) => {
    dispatch(fetchUserProfile(values.username))
  })

  return (
    <div>
      <h1>Login</h1>
      <form className={styles.lol} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="username">
          Username:
        </label>
        <input
          id="username"
          {...register('username', { required: true })}
          className={cn({
            [styles['mb-8']]: formState.errors.username?.type,
            [styles['mb-20']]: !formState.errors.username?.type
          })}
        />
        { formState.errors.username?.type && (
          <p className={styles['error_msg']}>
            {formState.errors.username?.type.toUpperCase()}
          </p>
        )}
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}