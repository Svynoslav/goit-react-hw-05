import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <NavLink to="/">Back</NavLink>
      <h2>Not found</h2>
    </>
  );
}
