"use client";

import error from "@/img/error.png";
import Image from "next/image";

export default function GeneralError() {
  return (
    <>
      <Image
        src="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/a8ff05675a435f99aa429b723ff73af4dca5c7e3/ResponseCode/500%20InternalServerError.png"
        alt="Internal server error"
        width={400}
        height={200}
        priority={true}
      />
      <p className="mb-5">
        Oh nyo, something went wrong. Try again later or let us know what
        happened!
      </p>
      <Image src={error} alt="Error image" className="mb-6" />
    </>
  );
}
