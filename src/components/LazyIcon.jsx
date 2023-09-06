import React, { lazy, Suspense } from "react";

const LazyIcon = ({ iconName }) => {
  const iconSetName = iconName.slice(0, 2).toLocaleLowerCase();
  let module1;

  //  conditional import based on the icon set name
  //vite doesn't allow modified dynamic import names
  switch (iconSetName) {
    case "si":
      module1 = import("react-icons/si");
      break;
    case "fa":
      module1 = import("react-icons/fa");
      break;
    case "tb":
      module1 = import("react-icons/tb");
      break;
    default:
      console.error(`Unsupported icon set: ${iconSetName}`);
  }

  const IconComponent = lazy(() =>
    module1.then((module) => {
      return { default: module[iconName] };
    })
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent size={60} />
    </Suspense>
  );
};

export default LazyIcon;
