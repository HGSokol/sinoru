import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import InputMask from "@mona-health/react-input-mask";
import styles from "./styles/index.module.scss";
import Cross from "~/common/icons/cross";
import { Link } from "react-router-dom";

interface IForm {
  isSubmit?: Dispatch<SetStateAction<boolean>>;
  alt?: boolean;
}

const Form: FC<IForm> = ({ isSubmit, alt }) => {
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

  return (
    <>
      {alt ? (
        <div
          onClick={(e) => e.target === e.currentTarget && isSubmit?.(false)}
          className={styles.contactFormContainer}
        >
          <div
            className={`${styles.formWrapper} ${
              isSend && styles.sendFormWrapper
            }`}
          >
            <div className={styles.title}>
              {isSend ? (
                <div className={styles.sendedWrapper}>
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
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputBlock}>
                  <div className={styles.inputWrapper}>
                    <input
                      value={form.name}
                      onChange={(e) => handleChange("name", e)}
                      type="text"
                      placeholder="Name*"
                      className={`${styles.input} ${
                        previewError && error.name && styles.inputError
                      } ${alt && styles.inputAlt}`}
                    />
                    {previewError && error.name && (
                      <span className={styles.error}>*Incorrect data</span>
                    )}
                  </div>
                  <div className={styles.inputWrapper}>
                    <InputMask
                      mask={`${
                        form.phone?.slice(0, 2).includes("8")
                          ? "9 ( 999 ) 999 - 99 - 99"
                          : "+9 ( 999 ) 999 - 99 - 99"
                      }`}
                      placeholder="Phone*"
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
                      className={`${styles.input} ${
                        previewError && error.phone && styles.inputError
                      }`}
                    />
                    {previewError && error.phone && (
                      <span className={styles.error}>*Incorrect data</span>
                    )}
                  </div>
                  <div className={styles.inputWrapper}>
                    <input
                      value={form.email}
                      onChange={(e) => handleChange("email", e)}
                      data-pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      placeholder="E-mail*"
                      inputMode="email"
                      className={`${styles.input} ${
                        previewError && error.email && styles.inputError
                      } ${alt && styles.inputAlt}`}
                    />
                    {previewError && error.email && (
                      <span className={styles.error}>*Incorrect data</span>
                    )}
                  </div>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e)}
                    placeholder="Comment"
                    className={`${styles.textarea} ${
                      alt && styles.textareaAlt
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className={`${styles.button} ${
                    Object.values(error).includes(true) && styles.buttonError
                  }`}
                >
                  <span>Отправить заявку</span>
                </button>
              </form>
            )}
            {!isSend && (
              <>
                <div className={styles.policyLink}>
                  {"Нажимая кнопку “Отправить заявку”, я соглашаюсь с "}
                  <Link to="/privacy">политикой конфидициальности</Link>.
                </div>
              </>
            )}
            <div className={styles.cross} onClick={() => isSubmit?.(false)}>
              <Cross color="#252528" />
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputBlock}>
            <div className={styles.inputWrapper}>
              <input
                value={form.name}
                onChange={(e) => handleChange("name", e)}
                type="text"
                placeholder="Name*"
                className={`${styles.input} ${
                  previewError && error.name && styles.inputError
                } ${alt && styles.inputAlt}`}
              />
              {previewError && error.name && (
                <span className={styles.error}>*Incorrect data</span>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <InputMask
                mask={`${
                  form.phone?.slice(0, 2).includes("8")
                    ? "9 ( 999 ) 999 - 99 - 99"
                    : "+9 ( 999 ) 999 - 99 - 99"
                }`}
                placeholder="Phone*"
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
                className={`${styles.input} ${
                  previewError && error.phone && styles.inputError
                }`}
              />
              {previewError && error.phone && (
                <span className={styles.error}>*Incorrect data</span>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                value={form.email}
                onChange={(e) => handleChange("email", e)}
                data-pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                placeholder="E-mail*"
                inputMode="email"
                className={`${styles.input} ${
                  previewError && error.email && styles.inputError
                } ${alt && styles.inputAlt}`}
              />
              {previewError && error.email && (
                <span className={styles.error}>*Incorrect data</span>
              )}
            </div>
            <textarea
              value={form.message}
              onChange={(e) => handleChange("message", e)}
              placeholder="Comment"
              className={`${styles.textarea} ${alt && styles.textareaAlt}`}
            />
          </div>
          <button
            type="submit"
            className={`${styles.button} ${
              Object.values(error).includes(true) && styles.buttonError
            }`}
          >
            <span>Отправить заявку</span>
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
