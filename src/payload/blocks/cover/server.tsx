import React from "react";

const CoverServer = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default CoverServer;
