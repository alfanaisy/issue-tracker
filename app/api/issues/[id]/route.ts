import { issueSchema } from '@/app/validationSchema';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

  const body = await req.json();
  const { data, success, error } = issueSchema.safeParse(body);

  if (!success) return NextResponse.json(error.format(), { status: 400 });

  const updatedIssue = await prisma.issue.update({
    where: { id: parseInt(params.id) },
    data: {
      title: data.title,
      description: data.description,
    },
  });

  return NextResponse.json(updatedIssue);
}
