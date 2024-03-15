import StyledComponentsRegistry from "./lib/registry";
import type { Metadata } from "next";
import { poppins } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Jonas Galeno | Desenvolvedor Web Full Stack",
  description: "Portifólio de Jonas Galeno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={poppins.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
