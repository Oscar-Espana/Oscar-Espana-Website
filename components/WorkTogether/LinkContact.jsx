import React from "react";

const LinkContact = ({ href, contactInfo, openNewTab }) => {
  return (
    <a href={href} target={openNewTab && "_blank"} rel="noreferrer">
      <p className="py-1 text-[18px] text-center md:text-right hover:text-gradient-primary">
        {contactInfo}
      </p>
    </a>
  );
};

export default LinkContact;
