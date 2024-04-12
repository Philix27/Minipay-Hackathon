import { publicProcedure, router } from "@/server"
import { z } from "zod"

export const blogRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.budget.findMany()
  }),

  delete: publicProcedure
    .input(z.object({ blog_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.budget.delete({
        where: {
          id: input.blog_id,
        },
      })
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        img_url: z.string(),
        story: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.budget.create({
        data: {
          title: input.title,
          desc: input.subtitle,
        },
      })
    }),
})
