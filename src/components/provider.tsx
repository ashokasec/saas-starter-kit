"use client";

import React, { type ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Provider;
