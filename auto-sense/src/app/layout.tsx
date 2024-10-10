import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Sense",
  description: "Para quando seu carro te deixar na mão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
