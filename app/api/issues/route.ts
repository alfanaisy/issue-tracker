import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { data, error, success } = createIssueSchema.safeParse(body);

  if (!success) return NextResponse.json(error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
