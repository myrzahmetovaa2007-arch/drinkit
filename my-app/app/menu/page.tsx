"use client";

export default function MenuPage() {
  const exploreMenu = [
    {
      category: "Coffee",
      items: [
        {
          name: "Latte",
          price: "1,600 ₸",
          img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800",
        },
        {
          name: "Cappuccino",
          price: "1,700 ₸",
          img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
        },
        {
          name: "Flat White",
          price: "1,800 ₸",
          img: "https://images.unsplash.com/photo-1471533414550-0f2775ae97cc?w=800",
        },
        {
          name: "Caramel Macchiato",
          price: "2,100 ₸",
          img: "https://images.unsplash.com/photo-1604917877939-36f6cb0a3a23?w=800",
        },
      ],
    },
    {
      category: "Matcha",
      items: [
        {
          name: "Iced Matcha Latte",
          price: "2,200 ₸",
          img: "https://images.unsplash.com/photo-1626519326869-f8ce89e4f096?w=800",
        },
        {
          name: "Strawberry Matcha",
          price: "2,500 ₸",
          img: "https://images.unsplash.com/photo-1657299175901-e33cb320af39?w=800",
        },
        {
          name: "Matcha Lemonade",
          price: "2,000 ₸",
          img: "https://images.unsplash.com/photo-1657299174909-d1627a775888?w=800",
        },
      ],
    },
    {
      category: "Tea",
      items: [
        {
          name: "Peach Ice Tea",
          price: "1,500 ₸",
          img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
        },
        {
          name: "Black Tea",
          price: "1,000 ₸",
          img: "https://images.unsplash.com/photo-1505576391880-b3f9d713dcf0?w=800",
        },
        {
          name: "Chai Latte",
          price: "1,900 ₸",
          img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
        },
      ],
    },
    {
      category: "Smoothies",
      items: [
        {
          name: "Berry Mix",
          price: "2,300 ₸",
          img: "https://images.unsplash.com/photo-1574887058484-199c1d6c3dc8?w=800",
        },
        {
          name: "Tropical Mango",
          price: "2,400 ₸",
          img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800",
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
