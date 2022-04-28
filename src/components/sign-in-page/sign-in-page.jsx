import React, {useRef, useState} from "react";
import Header from "../header/header";
import {login} from "@reducer/auth/api-actions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setCity} from "@reducer/interface/action";
import ErrorMessage from "@components/error-message/error-message";

const SignIn = () => {
  const [isFetchFailed, setIsFetchFailed] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsFetching(true);
    setIsFetchFailed(false);
    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }))
      .then(() => {
        setIsFetching(false);
      })
      .catch(() => {
        setIsFetching(false);
        setIsFetchFailed(true);
      });
  };
  const handleCityClick = () => {
    dispatch(setCity(`AMSTERDAM`));
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <fieldset disabled={isFetching} style={{borderWidth: `0px`}}>
              <form className="login__form form"
                action="#"
                onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper"
                >
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
                {isFetchFailed ? <ErrorMessage/> : ``}
              </form>
            </fieldset>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" onClick={handleCityClick}
                to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


export default SignIn;
