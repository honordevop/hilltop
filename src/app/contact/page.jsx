import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="message">
        <p className="px-3 md:px-16 py-20 font-black text-[35px]  md:text-[60px] ">
          Contact
        </p>
      </div>
      <div className="bg-[#0000000d]">
        <div className="px-3 md:px-16 flex flex-col ">
          <div className="flex flex-col gap-2 py-16">
            <p className="text-[20px] md:text-[30px] font-bold md:px-20">
              Our Offices
            </p>
            <div className="flex flex-col md:flex-row gap-20 md:px-20">
              <div className="flex-1 ">
                <div className="">
                  <p className="text-[20px] md:text-[30px] py-4 mb-4 border-b-2 border-red-600">
                    Head Office
                  </p>
                  <p className="text-[20px] leading-9">
                    45 Etete Road, <br /> Benin City, <br /> Edo State.
                  </p>
                </div>
              </div>

              <div className="flex-1 ">
                <div className="">
                  <p className="text-[20px] md:text-[30px] py-4 mb-4 border-b-2 border-red-600">
                    Abuja Office
                  </p>
                  <p className="text-[20px] leading-9">
                    No 3, Udo Udoma Street, <br /> Opposite A.A Rano, <br />
                    Asokoro Hilltop, FCT, Abuja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-16 flex flex-col ">
          <div className="flex flex-col gap-2 py-16">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:px-20">
              <div className="flex-1 ">
                <div className="h-[25rem] w-full relative rounded-bl-lg border-l-2 border-b-2 border-red-600">
                  <Image
                    src="/investor_relation_contact.jpg"
                    fill
                    priority
                    className="object-cover rounded-bl-lg"
                    alt="contact image"
                  />
                </div>
              </div>

              <div className="flex-1 rounded-br-lg border-r-2 border-b-2 border-red-600">
                <div className="my-5">
                  <p className="text-[30px] md:text-[40px] text-red-600 py-5">
                    Investor & Vendor Relations enquiries
                  </p>
                  <div className="flex flex-col gap-5">
                    <p>
                      For all Investor & Vendor Relations enquiries please{" "}
                      <br />
                      get in touch using the details below:
                    </p>

                    <Link href="tel:+234 7030432833" className="cursor-pointer">
                      <p> Tel: +234 7030432833</p>
                    </Link>

                    <Link
                      href="mailto:info@hilltopglobaloilandgas.com"
                      className="cursor-pointer"
                    >
                      <p>Email: info@hilltopglobaloilandgas.com</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:px-20 mt-24">
              <div className="flex-1 ">
                <div className="h-[25rem] w-full relative rounded-bl-lg border-l-2 border-b-2 border-red-600">
                  <Image
                    src="/investor_relation.jpg"
                    fill
                    priority
                    className="object-cover rounded-bl-lg"
                    alt="contact image"
                  />
                </div>
              </div>

              <div className="flex-1 rounded-br-lg border-r-2 border-b-2 border-red-600">
                <div className="my-5">
                  <p className="text-[30px] md:text-[40px] text-red-600 py-5">
                    Media enquiries
                  </p>
                  <div className="flex flex-col gap-5">
                    <p>
                      For all media and Hilltop's Cyber-Information enquiries
                      <br /> enquiries please get in touch using the details
                      below:
                    </p>

                    <Link href="tel:+2348164462713" className="cursor-pointer">
                      <p> Tel: +234 8164462713</p>
                    </Link>

                    <Link
                      href="mailto:info@hilltopglobaloilandgas.com"
                      className="cursor-pointer"
                    >
                      <p>Email: info@hilltopglobaloilandgas.com</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:px-20 mt-24">
              <div className="rounded-br-lg border-r-2 border-b-2 ">
                <p className="font-black text-xl text-red-700 underline underline-offset-4">
                  Disclaimer Notice
                </p>

                <div className="my-5">
                  <p className="my-4 leading-8">
                    It has come to our attention that a certain entity is
                    falsely claiming an equity stake in our Alaoma Field oil
                    asset (PPL 224). We do not recognize any external claims of
                    ownership or equity in our asset that are not authorized or
                    disclosed by us. Hilltop Global Oil and Gas Solutions Intl
                    Limited was awarded and owned 100% of Alaoma Field by the
                    Nigerian Upstream Petroleum Regulatory Commision (NUPRC). We
                    caution our clients, and partners to disregard any such
                    statements from unauthorized sources.
                  </p>
                  <p className="mb-5 leading-8">
                    For verified information regarding our assets, and equity
                    structure, please refer exclusively to NUPRC official
                    communications on: <br />
                  </p>
                  <Link
                    href="https://www.nuprc.gov.ng/wp-content/uploads/2023/12/Concession-Situation-December-2023.pdf"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white font-bold p-1 rounded-md "
                  >
                    Status Of Oil Prospecting Licences (OPLs)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
