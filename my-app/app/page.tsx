"use client";

import { useState } from "react";

export default function HomePage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const faq = [
    {
      q: "What is DrinkIt?",
      a: "DrinkIt is a modern beverage platform offering recipes, menu ideas, and creative drink concepts.",
    },
    {
      q: "Can I use DrinkIt for my business?",
      a: "Absolutely. DrinkIt supports both personal and commercial projects.",
    },
    {
      q: "Do I need to install anything?",
      a: "No installations are required. You can use everything inside the browser.",
    },
    {
      q: "Is it free?",
      a: "Yes! The base features of DrinkIt are completely free.",
    },
  ];

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
          img: "https://images.unsplash.com/photo-1587731287793-5cc2960d3eaf",
        },
        {
          name: "Matcha Lemonade",
          price: "2,000 ₸",
          img: "https://images.unsplash.com/photo-1615485290358-dce3e1c2ba86",
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
          img: "https://images.unsplash.com/photo-1576402187878-974f70c890ad",
        },
        {
          name: "Tropical Mango",
          price: "2,400 ₸",
          img: "https://images.unsplash.com/photo-1553531768-233c4242dfb7",
        },
      ],
    },
    {
      category: "Milkshakes",
      items: [
        {
          name: "Chocolate Shake",
          price: "2,100 ₸",
          img: "https://images.unsplash.com/photo-1587731287793-5cc2960d3eaf",
        },
        {
          name: "Oreo Shake",
          price: "2,500 ₸",
          img: "https://images.unsplash.com/photo-1598514982600-b8f8b0af9f92",
        },
      ],
    },
  ];

  return (
    <div className="space-y-40">

      {/* ----------------------------- HERO ----------------------------- */}
      <section className="text-center pt-20 pb-32 relative">
        <h1 className="text-6xl font-extrabold leading-tight">
          Welcome to <span className="text-blue-600">DrinkIt</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Discover refreshing drink ideas, creative beverage recipes, and
          everything you need to craft the perfect taste experience.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Menu
          </button>

          <a className="px-8 py-4 border border-gray-300 rounded-xl text-lg font-semibold hover:bg-gray-100 transition cursor-pointer">
            Learn More
          </a>
        </div>

        {/* ---------------- MENU DROPDOWN ---------------- */}
        {menuOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-[90%] max-w-6xl bg-white shadow-2xl rounded-2xl p-10 border z-50">
            <h3 className="text-3xl font-bold mb-8 text-center">Explore Menu</h3>

            <div className="space-y-14">
              {exploreMenu.map((section, i) => (
                <div key={i}>
                  <h4 className="text-2xl font-semibold mb-6">{section.category}</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {section.items.map((item, j) => (
                      <div
                        key={j}
                        className="bg-gray-50 hover:bg-gray-100 transition rounded-xl overflow-hidden shadow-sm"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-40 object-cover"
                        />

                        <div className="p-4">
                          <h5 className="text-lg font-semibold">{item.name}</h5>
                          <p className="text-blue-600 font-bold mt-1">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Why Choose DrinkIt?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {[
            {
              title: "Creative Recipes",
              desc: "Hundreds of drink ideas crafted with precision and passion.",
            },
            {
              title: "Easy Navigation",
              desc: "Designed to help you quickly find what you're craving.",
            },
            {
              title: "Healthy Options",
              desc: "Choose from a variety of low-calorie and natural drink ideas.",
            },
            {
              title: "Customization",
              desc: "Create your own beverage combinations with our tools.",
            },
            {
              title: "Fast & Lightweight",
              desc: "Optimized performance for smooth user experience.",
            },
            {
              title: "Business Friendly",
              desc: "Use DrinkIt concepts for cafes, bars, and restaurants.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: "12,500+", label: "Daily Visitors" },
              { value: "340+", label: "Drink Concepts" },
              { value: "98%", label: "Positive Feedback" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-5xl font-extrabold text-blue-600">{stat.value}</h3>
                <p className="text-gray-600 text-lg mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Start Your Drink Journey Today</h2>
        <p className="text-gray-600 text-lg mb-10">
          Join thousands of creators who use DrinkIt to build beautiful
          beverage menus, experiment with flavors, and spark inspiration.
        </p>

        <div className="flex justify-center gap-6">
          <a className="px-10 py-5 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition cursor-pointer">
            Get Started
          </a>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="max-w-5xl mx-auto pb-20">
        <h2 className="text-4xl font-bold text-center mb-14">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faq.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-md rounded-xl cursor-pointer"
              onClick={() => setFaqOpen(faqOpen === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <span className="text-2xl">
                  {faqOpen === i ? "−" : "+"}
                </span>
              </div>

              {faqOpen === i && (
                <p className="mt-4 text-gray-600">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t py-10 text-center text-gray-600">
        <p>© {new Date().getFullYear()} DrinkIt. All rights reserved.</p>
      </footer>
    </div>
  );
}
