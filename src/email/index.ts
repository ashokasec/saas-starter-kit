import { Resend } from "resend";
import AccountVerificationEmail from "./templates/account-verification";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAccountVerificationEmail = async ({
  identifier,
  url,
}: { identifier: { name: string; email: string }; url: string }) => {
  const { data, error } = await resend.emails.send({
    from: "ashoka <delivered@resend.dev>",
    to: identifier.email,
    subject: "Account Verification",
    react: await AccountVerificationEmail({ url }),
  });
  if (error || !data) {
    throw new Error(error?.message);
  }
};
