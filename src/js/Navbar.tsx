import { ReactNode } from "react";

export function Navbar(): ReactNode {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand mx-auto">
        <h1 className="navbar-text font-monospace py-0 my-0">
          <strong>
            <a href="." style={{ textDecoration: "none", color: "inherit" }}>
              Quiz Applet
            </a>
          </strong>
        </h1>
      </div>
    </nav>
  );
}
