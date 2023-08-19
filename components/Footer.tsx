import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start sm:items-start items-center gap-6">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={120}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-gray-700 sm:text-left text-center">
            Rent car <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link w-full sm:w-[170px]">
              <h3 className="font-bold w-full sm:w-[170px] text-center">
                {link.title}
              </h3>
              <div className="sm:block flex gap-4 flex-wrap justify-center w-full">
                {link.links.map((link) => (
                  <div>
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-gray-500"
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap-reverse gap-10 mt-10 border-t border-gray-100 px-6 py-10">
        <div className="text-center mx-auto ms:text-left whitespace-nowrap">
          @2023 Rent car. All rights reserved &copy;
        </div>
        <div className=" footer__copyrights-link">
          <Link className="whitespace-nowrap" href="/">
            Privacy Policy
          </Link>
          <Link className="whitespace-nowrap" href="/">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
