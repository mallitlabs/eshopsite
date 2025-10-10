import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner = ({ products }) => {
  // Get the first featured product or fallback to first product
  const heroProduct = products.find(p => p.featured) || products[0];

  if (!heroProduct) return null;

  return (
    <div className='w-full inline-block'>
      <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full
          bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0'
        />

        {(heroProduct.imageUrl || heroProduct.image?.src) ? (
          <Image
            src={heroProduct.imageUrl || heroProduct.image.src}
            alt={heroProduct.title}
            fill
            className='w-full h-full object-center object-cover rounded-3xl -z-10'
            sizes='100vw'
            priority
          />
        ) : (
          <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-gradient-to-br from-accent/20 to-accentDark/20 rounded-3xl flex items-center justify-center">
            <span className="text-9xl opacity-20">🏌️</span>
          </div>
        )}

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
          {heroProduct.bestSeller && (
            <span className="bg-accent dark:bg-accentDark text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              BEST SELLER
            </span>
          )}

          <p className="text-lg sm:text-xl opacity-90 mb-2">{heroProduct.brand}</p>

          <Link href={heroProduct.url} className='mt-2'>
            <h1 className='font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                {heroProduct.title}
              </span>
            </h1>
          </Link>

          <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in max-w-2xl'>
            {heroProduct.description}
          </p>

          <div className="flex items-center gap-4 mt-6">
            {heroProduct.salePrice ? (
              <>
                <span className="text-3xl font-bold text-accent dark:text-accentDark">
                  ${heroProduct.salePrice.toFixed(2)}
                </span>
                <span className="text-xl text-light/70 line-through">
                  ${heroProduct.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold">
                ${heroProduct.price.toFixed(2)}
              </span>
            )}
          </div>

          <Link
            href={heroProduct.url}
            className="mt-6 bg-accent dark:bg-accentDark text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </article>
    </div>
  );
};

export default HeroBanner;
