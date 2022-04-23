import React, {useRef} from "react";
import Header from "../header/header";
import {login} from "../../store/api-actions";
import Loader from "../loader/loader";
import {useDispatch, useSelector} from "react-redux";


const SignIn = () => {
  const isDataLoaded = useSelector((state) => state.INTERFACE.isDataLoaded);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="page page--gray page--login">
      {isDataLoaded || <Loader/>}
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form"
              action="#"
              onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button"
                type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link"
                href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


export default SignIn;
