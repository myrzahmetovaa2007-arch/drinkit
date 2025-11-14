"use client";

export default function MenuPage() {
  const exploreMenu = [
    {
      category: "Coffee",
      items: [
        {
          name: "Latte",
          price: "1,600 ₸",
          img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        },
        {
          name: "Cappuccino",
          price: "1,700 ₸",
          img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        },
        {
          name: "Flat White",
          price: "1,800 ₸",
          img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
        },
        {
          name: "Caramel Macchiato",
          price: "2,100 ₸",
          img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
        },
      ],
    },
    {
      category: "Matcha",
      items: [
        {
          name: "Iced Matcha Latte",
          price: "2,200 ₸",
          img: "https://images.unsplash.com/photo-1593443320739-77f74939d0da",
        },
        {
          name: "Strawberry Matcha",
          price: "2,500 ₸",
          img: "https://share.google/images/4H9KJljqOIDV3NSIr",
        },
        {
          name: "Matcha Lemonade",
          price: "2,000 ₸",
          img: "https://share.google/images/RY2GBr3IY30mkkSnd",
        },
      ],
    },
    {
      category: "Tea",
      items: [
        {
          name: "Peach Ice Tea",
          price: "1,500 ₸",
          img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
        },
        {
          name: "Black Tea",
          price: "1,000 ₸",
          img: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229",
        },
        {
          name: "Chai Latte",
          price: "1,900 ₸",
          img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        },
      ],
    },
    {
      category: "Smoothies",
      items: [
        {
          name: "Berry Mix",
          price: "2,300 ₸",
          img: "https://share.google/images/qJpiVV4FclS8cmOrs",
        },
        {
          name: "Tropical Mango",
          price: "2,400 ₸",
          img: "https://share.google/images/S3N1aFQQ6udTS5CZw",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h1 className="text-5xl font-bold mb-12 text-center">DrinkIt Menu</h1>

      <div className="space-y-20">
        {exploreMenu.map((section, i) => (
          <div key={i}>
            <h2 className="text-3xl font-semibold mb-8">{section.category}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-blue-600 font-bold mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
