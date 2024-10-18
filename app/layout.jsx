import { Inter } from "next/font/google";
import "./globals.css";
import "../public/assets/css/templatemo-scholar.css";
// import "../public/assets/css/soft-ui-dashboard.css";
import "../public/assets/css/nucleo-icons.css";
import "../public/assets/css/owl.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/fontawesome.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CEMS - Course Enrollment Management System ",
  description: "Course Enrollment Management System (CEMS)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="stylesheet" href="assets/css/fontawesome.css" />
        <link rel="stylesheet" href="assets/css/templatemo-scholar.css" />
        <link rel="stylesheet" href="assets/css/owl.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
      </head> */}

      <body className="">
        { children }
      </body>
    </html>
  );
}
