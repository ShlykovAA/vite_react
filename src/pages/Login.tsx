import { useForm } from "react-hook-form";
import styles from './login.module.scss';
import cn from 'classnames';
import { fetchUserProfile, useProfileSelector } from "../store/slice/profile";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/const";

interface IForm {
  username: string;
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const {error, loading} = useProfileSelector();
  const {register, handleSubmit, formState} = useForm<IForm>({
    defaultValues: { username: ""},
  });
  const navigate = useNavigate();

  const errorMsg = formState.errors.username?.type
  ? formState.errors.username.type.toUpperCase()
  : error;

  const onSubmit = handleSubmit(async (values) => {
    const action = await dispatch(fetchUserProfile(values.username));
    if (action.meta.requestStatus === "fulfilled") {
      navigate(ROUTES.home);
    }
  })

  return (
    <div>
      <h1>Login</h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="username">
          Username:
        </label>
        <input
          id="username"
          {...register('username', { required: true })}
          className={cn({
            [styles['mb-8']]: errorMsg,
            [styles['mb-20']]: !errorMsg,
          })}
        />
        {errorMsg && <p className={styles['error_msg']}>{errorMsg}</p>}
        <button type="submit" disabled={loading}>Sign in</button>
      </form>
    </div>
  )
}