export enum EInputType {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  FILE = "file",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  DATE = "date",
  TEL = "tel",
  TEXTAREA = "textarea",
  SELECT = "select",
}
type TInputType =
  | "text"
  | "email"
  | "password"
  | "file"
  | "checkbox"
  | "radio"
  | "date";
export type TFormField<T> = (
  | {
      type: TInputType;
    }
  | {
      name: keyof T;
      required: boolean;
    }
  | {
      required: boolean;
      type: "select";
      option: {
        label: string;
        value: string;
      }[];
    }
) & {
  label: string;
  placeholder?: string;
  name: keyof T;
  required: boolean;
};
