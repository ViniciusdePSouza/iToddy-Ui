import { ComponentProps, ElementType } from "react";
import { Input, Prefix, TextInputContainer } from "./styled";

export interface TextInputProps extends ComponentProps<typeof Input>{
    prefix?: string
}
export function TextInput({ prefix, ...props }:TextInputProps ){
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props}/>
        </TextInputContainer>
    )
}

TextInput.displayName = 'TextInput'