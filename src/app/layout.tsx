import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";

import { Container } from "@/components/Container";
import { Menu } from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAW Analytics",
  description: "PAW Analytics",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={["light"]}
        >
          <div className="relative h-screen w-full bg-gradient-to-b from-[#162a52] to-[#162239]">
            {/* Image Background */}
            {/* <Image
              className="absolute top-0 left-0 w-full h-full object-cover block sm:hidden"
              src="/images/background.png"
              alt="Background"
              width={1920}
              height={1080}
            /> */}

            <div className="abolute relative top-0 left-0 w-full h-full overflow-y-auto">
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-[#17294d] bg-opacity-0"></div>
              {/* First Section */}
              <Container className="max-w-7xl text-white">
                <div>{children}</div>
                {/* <div className="2xl:h-[calc(100vh-150px)] flex flex-col justify-center">{children}</div> */}
              </Container>
            </div>
          </div>
          <Menu />
        </ThemeProvider>
      </body>
    </html>
  );
}
