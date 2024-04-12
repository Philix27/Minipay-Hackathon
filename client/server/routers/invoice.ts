import { publicProcedure, router } from "@/server"
import { z } from "zod"

export const invoiceRouter = router({
  get_all: publicProcedure
    .input(z.object({ user_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.invoice.findMany({
        where: {
          user_id: input.user_id,
        },
      })
    }),

  delete: publicProcedure
    .input(z.object({ invoice_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.invoice.delete({
        where: {
          id: input.invoice_id,
        },
      })
    }),

  create: publicProcedure
    .input(
      z.object({
        toBusinessName: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        toWebsite: z.string().optional(),
        toAddress: z.string().optional(),
        toEmail: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        toPhone: z.string().optional(),
        // From
        fromBusinessName: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        fromPhone: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        fromEmail: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
        fromDate: z.string().min(6, {
          message: "Username must be at least 6 characters.",
        }),
        fromAddress: z.string().min(6, {
          message: "Username must be at least 6 characters.",
        }),
        // Footer
        footerNote: z.string().min(6, {
          message: "Username must be at least 6 characters.",
        }),
        thanksMsg: z.string().min(6, {
          message: "Username must be at least 6 characters.",
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.invoice.create({
        data: {
          fromAddress: input.fromAddress,
          fromBusinessName: input.fromBusinessName,
          fromDate: input.fromDate,
          fromEmail: input.fromEmail,
          fromPhone: input.fromPhone,
          toBusinessName: input.toBusinessName,
          toEmail: input.toEmail,
          toAddress: input.toAddress,
          toPhone: input.toPhone,
          footerNote: input.footerNote,
          thanksMsg: input.thanksMsg,
          // items: []
        },
      })
    }),
})
