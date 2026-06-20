import "./globals.css";

export const metadata = {
  title: "Happy Father's Day, Dad! — From Your Two Sons",
  description: "A digital scrapbook of our favorite memories, letters, and celebration for the best Dad in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
