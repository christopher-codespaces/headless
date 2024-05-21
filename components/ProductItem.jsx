  import React from "react";
  import ProductSearch from "./ProductSearch";
  import { storefront } from "../utils/index";

  const randomProducts = [
    {
      name: "Earthen Bottle",
      price: 48,
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    },
    {
      name: "Nomad Tumbler",
      price: 35,
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    },
    {
      name: "Focus Paper Refill",
      price: 89,
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    },
    {
      name: "Machined Mechanical Pencil",
      price: 35,
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    },
  ];

  function ProductCard({products}) {
    console.log({products});
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <ProductSearch />
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <a key={index} href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-30"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }



 export async function getStaticProps() {
   try {
     const { data } = await storefront(productsQuery);
     return {
       props: {
         products: data.products.edges.map(({ node }) => node),
       },
     };
   } catch (error) {
     console.error("Error fetching products:", error);
     return {
       props: {
         products: [],
       },
     };
   }
 }

 const gql = String.raw;
 const productsQuery = gql`
   query Products {
     products(first: 6) {
       edges {
         node {
           title
           priceRange {
             minVariantPrice {
               amount
             }
           }
           images(first: 1) {
             edges {
               node {
                 transformedSrc
                 altText
               }
             }
           }
         }
       }
     }
   }
 `;

  export default ProductCard;
