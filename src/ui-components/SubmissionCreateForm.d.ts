/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubmissionCreateFormInputValues = {
    content?: string;
    createdAt?: string;
    owner?: string;
};
export declare type SubmissionCreateFormValidationValues = {
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubmissionCreateFormOverridesProps = {
    SubmissionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubmissionCreateFormProps = React.PropsWithChildren<{
    overrides?: SubmissionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubmissionCreateFormInputValues) => SubmissionCreateFormInputValues;
    onSuccess?: (fields: SubmissionCreateFormInputValues) => void;
    onError?: (fields: SubmissionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubmissionCreateFormInputValues) => SubmissionCreateFormInputValues;
    onValidate?: SubmissionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubmissionCreateForm(props: SubmissionCreateFormProps): React.ReactElement;
