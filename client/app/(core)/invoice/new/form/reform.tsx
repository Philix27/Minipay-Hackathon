import React from "react"
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "./ui"

type IFormTypes = "text" | "no" | "date" | "file"
export default function AppInput<T extends FieldValues>(props: {
  control: Control<T, any>
  /** name to be used as label */
  name: Path<T>
  /** placeholder */
  place?: string
  /** Description */
  desc?: string
  label?: string
  type?: IFormTypes
}) {
  return (
    <div className={"flex-[1]"}>
      <FormField
        control={props.control}
        name={props.name}
        render={({ field }) => (
          <FormItem>
            {props.desc && <FormLabel>{props.desc}</FormLabel>}
            <FormControl>
              <InputSorter
                place={props.place}
                field={field}
                type={props.type || "text"}
              />
            </FormControl>
            {props.desc && <FormDescription>{props.desc}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

function InputSorter<T extends FieldValues>(props: {
  place: string | undefined
  type: IFormTypes
  field: ControllerRenderProps<T, Path<T>>
}): JSX.Element {
  switch (props.type) {
    case "text":
      return <Input placeholder={props.place} {...props.field} />
    case "no":
      return <Input placeholder={props.place} {...props.field} />
    default:
      return <Input placeholder={props.place} {...props.field} />
      break
  }
}
