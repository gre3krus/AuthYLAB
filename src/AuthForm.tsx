import "./App.css";
import { useState } from "react";
import imgEmail from "./img/imgEmail.svg";
import imgPass from "./img/imgPass.svg";
import me from "./img/photo.jpg";

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
}

export function AuthForm({ onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Пожалуйста, заполните поля");
    } else if (!email.trim() || !password.trim()) {
      setError("Не должно быть пробелов");
    } else {
      onSubmit(email, password);
      setError("");
    }
  };

  return (
    <div className="AuthForm">
      <form action="" onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <label>
          <img src={imgEmail} alt="error img-email" />
          <input
            type="email"
            inputMode="email"
            value={email.trim()}
            autoComplete="email"
            onChange={handleEmailChange}
            id="mail"
            placeholder="Почта"
          />
        </label>

        <br />

        <label>
          <img src={imgPass} alt="error img-pass" />
          <input
            type="password"
            value={password.trim()}
            onChange={handlePassChange}
            id="pass"
            placeholder="Пароль"
          />
        </label>

        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Зарегистрироваться</button>
      </form>
      <div className="me">
        <a href="https://samara.hh.ru/resume/1cdb610aff09cc5b3d0039ed1f4c3646704661">
          <img src={me} alt="me undefind" id="photo" />
        </a>
      </div>
    </div>
  );
}

export default AuthForm;
