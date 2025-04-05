import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import InputMask from "@mona-health/react-input-mask";
import { Cross } from "~/common/icons";

import style from "./styles/index.module.scss";

interface IForm {
  isSubmit?: Dispatch<SetStateAction<boolean>>;
  alt?: boolean;
}

export const Form: FC<IForm> = ({ isSubmit, alt }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: true,
    email: true,
    phone: true,
  });
  const [previewError, setPreviewError] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (previewError && !Object.values(error).includes(true)) {
      setPreviewError(false);
    }
  }, [previewError, error]);

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, dataset } = e.target;
    const formattedValue = value.replace(/\s/g, "");

    const matchValue = dataset.pattern
      ? !new RegExp(dataset.pattern).test(formattedValue)
      : value.length == 0 && key !== "message";

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
    setError((prev) => ({
      ...prev,
      [key]: matchValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPreviewError(true);

    try {
      if (!Object.values(error).includes(true)) {
        console.log(form);

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
      setIsSend(true);
    } catch (error) {
      console.log(error);
    }
  };

  const formContent = (
    <div
      onClick={(e) => e.target === e.currentTarget && isSubmit?.(false)}
      className={style.contactFormContainer}
    >
      <div
        className={`${style.formWrapper} ${isSend && style.sendFormWrapper}`}
      >
        <div className={style.title}>
          {isSend ? (
            <div className={style.sendedWrapper}>
              <span>уведомление</span>
              <span>Заявка отправлена!</span>
              <span>
                Спасибо за заявку! Наш менеджер в скором времени свяжется с
                вами.
              </span>
            </div>
          ) : (
            <>
              <div>наши контакты</div>
              <div>Свяжитесь с нами!</div>
            </>
          )}
        </div>
        {!isSend && (
          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.inputBlock}>
              <div className={style.inputWrapper}>
                <input
                  value={form.name}
                  onChange={(e) => handleChange("name", e)}
                  type="text"
                  placeholder="Имя*"
                  className={`${style.input} ${
                    previewError && error.name && style.inputError
                  } ${alt && style.inputAlt}`}
                />
                {previewError && error.name && (
                  <span className={style.error}>*неверный формат</span>
                )}
              </div>
              <div className={style.inputWrapper}>
                <InputMask
                  mask={`${
                    form.phone?.slice(0, 2).includes("8")
                      ? "9 ( 999 ) 999 - 99 - 99"
                      : "+9 ( 999 ) 999 - 99 - 99"
                  }`}
                  placeholder="Телефон*"
                  inputMode="numeric"
                  data-pattern={
                    form.phone?.slice(0, 2).includes("8")
                      ? "\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
                      : "\\+\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
                  }
                  value={form.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("phone", e)
                  }
                  className={`${style.input} ${
                    previewError && error.phone && style.inputError
                  }`}
                />
                {previewError && error.phone && (
                  <span className={style.error}>*неверный формат</span>
                )}
              </div>
              <div className={style.inputWrapper}>
                <input
                  value={form.email}
                  onChange={(e) => handleChange("email", e)}
                  data-pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  placeholder="E-mail*"
                  inputMode="email"
                  className={`${style.input} ${
                    previewError && error.email && style.inputError
                  } ${alt && style.inputAlt}`}
                />
                {previewError && error.email && (
                  <span className={style.error}>*неверный формат</span>
                )}
              </div>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e)}
                placeholder="Сообщение"
                className={`${style.textarea} ${alt && style.textareaAlt}`}
              />
            </div>
            <button
              type="submit"
              className={`${style.button} ${
                Object.values(error).includes(true) && style.buttonError
              }`}
            >
              <span>Отправить заявку</span>
            </button>
          </form>
        )}
        {!isSend && (
          <>
            <div className={style.policyLink}>
              {"Нажимая кнопку “Отправить заявку”, я соглашаюсь с "}
              <Link to="/privacy">политикой конфидициальности</Link>.
            </div>
          </>
        )}
        <div className={style.cross} onClick={() => isSubmit?.(false)}>
          <Cross color="#252528" />
        </div>
      </div>
    </div>
  );

  const regularForm = (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.inputBlock}>
        <div className={style.inputWrapper}>
          <input
            value={form.name}
            onChange={(e) => handleChange("name", e)}
            type="text"
            placeholder="Имя*"
            className={`${style.input} ${
              previewError && error.name && style.inputError
            } ${alt && style.inputAlt}`}
          />
          {previewError && error.name && (
            <span className={style.error}>*неверный формат</span>
          )}
        </div>
        <div className={style.inputWrapper}>
          <InputMask
            mask={`${
              form.phone?.slice(0, 2).includes("8")
                ? "9 ( 999 ) 999 - 99 - 99"
                : "+9 ( 999 ) 999 - 99 - 99"
            }`}
            placeholder="Телефон*"
            inputMode="numeric"
            data-pattern={
              form.phone?.slice(0, 2).includes("8")
                ? "\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
                : "\\+\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
            }
            value={form.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("phone", e)
            }
            className={`${style.input} ${
              previewError && error.phone && style.inputError
            }`}
          />
          {previewError && error.phone && (
            <span className={style.error}>*неверный формат</span>
          )}
        </div>
        <div className={style.inputWrapper}>
          <input
            value={form.email}
            onChange={(e) => handleChange("email", e)}
            data-pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder="E-mail*"
            inputMode="email"
            className={`${style.input} ${
              previewError && error.email && style.inputError
            } ${alt && style.inputAlt}`}
          />
          {previewError && error.email && (
            <span className={style.error}>*неверный формат</span>
          )}
        </div>
        <textarea
          value={form.message}
          onChange={(e) => handleChange("message", e)}
          placeholder="Сообщение"
          className={`${style.textarea} ${alt && style.textareaAlt}`}
        />
      </div>
      <button
        type="submit"
        className={`${style.button} ${
          Object.values(error).includes(true) && style.buttonError
        }`}
      >
        <span>Отправить заявку</span>
      </button>
    </form>
  );

  if (!alt) {
    return regularForm;
  }

  return mounted
    ? createPortal(formContent, document.getElementById("root") as HTMLElement)
    : null;
};
