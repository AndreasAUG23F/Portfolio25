// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#101B28] text-white p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404 — Siden ble ikke funnet</h1>
        <p>Den siden finnes dessverre ikke.</p>
        <Link
          to="/"
          className="inline-block mt-2 text-[#00FF8C] underline hover:text-white"
        >
          ← Gå tilbake til forsiden
        </Link>
      </div>
    </main>
  );
}
