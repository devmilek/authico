import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Text } from "@react-email/text";
import { Font } from "@react-email/font";
import { Container } from "@react-email/container";
import { Link } from "@react-email/link";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

interface EmailConfirmationProps {
  token: string;
  baseUrl: string;
}

export default function EmailConfirmation({
  token = "123456",
  baseUrl = "http://localhost:3000",
}: EmailConfirmationProps) {
  const verificationLink = `${baseUrl}/verify-email?token=${token}`;
  return (
    <Tailwind>
      <Html className="bg-white font-sans">
        <Container className="max-w-xl shadow-xl p-10 rounded-2xl pt-16">
          <Link href="/localhost:3000" className="font-bold text-xl text-black">
            Authentico
          </Link>
          <Text className="text-3xl font-semibold">
            Confirm your email address
          </Text>
          <Link
            href={verificationLink}
            className="px-6 mt-2 inline-block py-4 cursor-pointer bg-black text-white rounded-lg"
          >
            Confirm your account
          </Link>
          <Text>
            This link and code will only be valid for the next 5 minutes. If the
            link does not work, you can use the login verification code
            directly:
          </Text>
          <Link className="underline text-sm" href={verificationLink}>
            {verificationLink}
          </Link>
        </Container>
      </Html>
    </Tailwind>
  );
}
