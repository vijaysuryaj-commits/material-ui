import React from "react";

export default function ErrorComponent() {
  throw new Error("testing ErrorBoundary!");
  
  return <div>This will never render</div>;
}
