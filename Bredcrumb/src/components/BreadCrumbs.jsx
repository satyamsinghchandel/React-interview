import React from "react";
import { useLocation, Link } from "react-router";
const BreadCrumbs = () => {
  //this gives us the path of the current url
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbpath = "";
  return (
    <div className="header">
      <div className="breadcrumbs">
        {pathname.length >= 0 ? <Link to="/">Home</Link> : ""}
        {pathnames.map((name, index) => {
          // full path save karega
          breadcrumbpath += "/" + name;
          console.log(breadcrumbpath);
          return index === pathnames.length - 1 ? (
            <span>/{name}</span>
          ) : (
            <span>
              {" "}
              <Link
                //saves all the paths eg. when we created link to products it will save the /home/products in it and because this thing is Linked when we click on products then products page will render home saves: /, breadcrum = /products when we clicked on products breadcrumb=/products/:id when we click on any paticular product
                to={breadcrumbpath}
              >
                /{name}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
