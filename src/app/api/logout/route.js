import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const POST = async (req) => {
  try {

    cookies(req).set({
      name: 'accessToken',
      value: '',
      maxAge: 0,
    });

    return NextResponse.json({ message: 'Logout Successfully' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};