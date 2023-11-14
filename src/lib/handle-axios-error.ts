import { isAxiosError } from "axios";

export const handleAxiosError = (error: unknown, defaultErrorMessage = "Something went wrong"): string => {
  if (isAxiosError(error)) {
    return String(error.response?.data || defaultErrorMessage);
  } else {
    console.error(error);
    return defaultErrorMessage;
  }
};
