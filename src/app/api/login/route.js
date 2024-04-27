import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

const SECRET_KEY = 'inirahasiaya'

export const POST = async (req, { params }) => {
  try {
    const { email, password } = await req.json();
    const foundUser = await prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
      throw { name: 'InvalidCredentials' };
    }

    const comparePassword = bcrypt.compareSync(password, foundUser.password);

    if (comparePassword) {
      // create access token
      const accessToken = jwt.sign(
        {
          id: foundUser.id,
          email: foundUser.email,
        },
        SECRET_KEY,
      );

      // setup cookies
      cookies().set({
        name: 'accessToken',
        value: accessToken,
        maxAge: 60 * 60 * 24 * 7,
      });

      return NextResponse.json({ message: 'Login Successfully', accessToken }, { status: 200 });
    } else {
      throw { name: 'InvalidCredentials' };
    }
  } catch (err) {
    if (err.name === 'InvalidCredentials') {
      return NextResponse.json({ message: 'Wrong Email or Password' });
    } else {
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }
};