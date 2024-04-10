import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

type IContent = {
  title: JSX.Element
  value: string
  content: JSX.Element
}

export function AppAccordion(props: { data: IContent[] }) {
  return (
    <Accordion type="single" collapsible className={"w-full"}>
      {props.data.map((val, i) => (
        <AccordionItem value={val.value} key={i}>
          <AccordionTrigger>{val.title}</AccordionTrigger>
          <AccordionContent>{val.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
