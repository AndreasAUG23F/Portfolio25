// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectPage() {
  const { projectId } = useParams();
  return <div> {/* Din prosjekt‐side‐JSX her */} </div>;
}
