import React from "react";

async function CatchAllRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  console.log(await params);
  return <div>Catch All Route</div>;
}

export default CatchAllRoute;
