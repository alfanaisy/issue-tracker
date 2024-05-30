import authOptions from '@/app/auth/AuthOptions';
import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { issueSchema } from '../../validationSchema';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await req.json();
  const { data, error, success } = issueSchema.safeParse(body);

  if (!success) return NextResponse.json(error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
