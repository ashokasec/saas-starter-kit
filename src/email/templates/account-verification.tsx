import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Button,
    Link,
    Tailwind,
} from '@react-email/components';

const AccountVerificationEmail = ({ url }: { url: string }) => {
    return (
        <Html lang="en" dir="ltr">
            <Tailwind>
                <Head />
                <Body className="bg-gray-100 font-sans py-[40px]">
                    <Container className="bg-white max-w-[600px] mx-auto px-[32px] py-[40px]">
                        <Section>
                            <Text className="text-[24px] font-bold text-gray-900 mb-[24px] mt-0">
                                Verify your account
                            </Text>

                            <Text className="text-[16px] text-gray-700 mb-[32px] mt-0 leading-[24px]">
                                Thanks for signing up! Please click the button below to verify your email address and activate your account.
                            </Text>

                            <Section className="mb-[32px]">
                                <Button
                                    href={url}
                                    className="bg-black text-white px-[24px] py-[12px] rounded-[6px] text-[16px] font-medium box-border"
                                >
                                    Verify Account
                                </Button>
                            </Section>

                            <Text className="text-[14px] text-gray-600 mb-[24px] mt-0 leading-[20px]">
                                If the button doesn't work, copy and paste this link into your browser:
                            </Text>

                            <Link
                                href={url}
                                className="text-[14px] text-blue-600 break-all"
                            >
                                {url}
                            </Link>

                            <Text className="text-[14px] text-gray-500 mt-[40px] mb-0 leading-[20px]">
                                If you didn't create an account, you can safely ignore this email.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

AccountVerificationEmail.PreviewProps = {
    verificationLink: "https://example.com/verify?token=abc123xyz",
};

export default AccountVerificationEmail;