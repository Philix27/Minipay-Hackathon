"use client"

import React from "react"
import { Table } from "lucide-react"

import { TextH } from "@/app/comps"
import * as T from "@/app/comps/ui/table"

import { invoices } from "./data"

export default function Page() {
  return (
    <div
      className={
        "bg-primary w-full h-full py-4 px-4 flex items-center justify-center"
      }
    >
      <div className={"w-[80%] h-full"}>
        <TextH v="h3"> All invoices</TextH>
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
    </div>
  )
}
