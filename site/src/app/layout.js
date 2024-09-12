
import "./globals.css";



export const metadata = {
  title: "Dylan Lanigan-Smith",
  description: "My personal website",
  favicon: "/favicon.ico",
  appleIcon: "/apple-touch-icon.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
      </head>
      
      <body>{children}</body>
    </html>
  );
}
