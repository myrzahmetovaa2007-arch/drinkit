"use client";

export default function MenuPage() {
  const exploreMenu = [
    {
      category: "Coffee",
      items: [ /* оставляем как было */ ],
    },
    {
      category: "Matcha",
      items: [
        {
          name: "Iced Matcha Latte",
          price: "2,200 ₸",
          img: "https://images.unsplash.com/photo‑1593443320739‑77f74939d0da", // рабочая
        },
        {
          name: "Strawberry Matcha",
          price: "2,500 ₸",
          img: "https://images.unsplash.com/photo‑6D1JmcDOY44", // новая рабочая ссылка
        },
        {
          name: "Matcha Lemonade",
          price: "2,000 ₸",
          img: "https://images.unsplash.com/photo‑1600891964599‑f61ba0e24092", // рабочая
        },
      ],
    },
    {
      category: "Tea",
      items: [ /* оставляем как было */ ],
    },
    {
      category: "Smoothies",
      items: [
        {
          name: "Berry Mix",
          price: "2,300 ₸",
          img: "https://images.unsplash.com/photo‑a‑smoothie‑in‑a‑plastic‑cup‑surrounded‑by‑ice‑cubes‑tgdxWVCn5Ec", // рабочая
        },
        {
          name: "Tropical Mango",
          price: "2,400 ₸",
          img: "https://images.unsplash.com/photo‑two‑glasses‑filled‑with‑different‑types‑of‑smoothies‑6SF8k95CfJ4", // рабочая
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
