import { useCallback, useEffect, useState } from "react";

export const useForm = () => {
  const [contactForm, setContactForm] = useState(false);

  const handleToggleModal = useCallback(() => {
    setContactForm((prev) => !prev);
  }, [setContactForm]);

  useEffect(() => {
    if (contactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [contactForm]);

  return {
    contactForm,
    handleToggleModal,
  };
};
