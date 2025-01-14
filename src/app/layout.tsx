"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Inter } from "next/font/google";
import Header from "../comp/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("ログイン中のユーザー情報:", user);
        setUser(user);
      } else {
        console.log("ユーザーはログインしていません。");
        setUser(null);
      }
    });

    // クリーンアップ
    return () => unsubscribe();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        {user === null ? (
          <div>
            <p>ログインしてください。</p>
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
