import React from "react"
import * as T from "@/comps/ui/table"

import { TextH } from "@/app/comps"

import { invoices } from "./data"

export function ItemsBar() {
  return (
    <div >
      <div className="flex flex-col items-center my-3">
        <TextH v="h5">Items List</TextH>
      </div>
      <T.Table>
        <T.TableCaption>A list of your recent invoices.</T.TableCaption>
        <T.TableHeader>
          <T.TableRow>
            <T.TableHead className="w-[100px]">Invoice</T.TableHead>
            <T.TableHead>Status</T.TableHead>
            <T.TableHead>Method</T.TableHead>
            <T.TableHead className="text-right">Amount</T.TableHead>
          </T.TableRow>
        </T.TableHeader>

        <T.TableBody>
          {invoices.map((val, i) => (
            <T.TableRow key={i} className={`hover:bg-secondary`}>
              <T.TableCell className="font-medium">{val.invoice}</T.TableCell>
              <T.TableCell className="text-center">
                {val.paymentStatus}
              </T.TableCell>
              <T.TableCell className="text-center">
                {val.paymentMethod}
              </T.TableCell>
              <T.TableCell className="text-right">
                {val.totalAmount}
              </T.TableCell>
            </T.TableRow>
          ))}
        </T.TableBody>
      </T.Table>
    </div>
  )
}
