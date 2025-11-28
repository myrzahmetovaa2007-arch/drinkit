import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AboutPage() {
  const session = await getServerSession(authOptions);

  // Если не авторизован — редиректим на логин
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="space-y-32 py-20">
      {/* ----------------------- HEADER ----------------------- */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold">
          About <span className="text-blue-600">DrinkIt</span>
        </h1>
        <p className="text-gray-600 text-xl mt-6">
          A creative beverage platform built to inspire, innovate, and elevate the world of drinks.
        </p>
      </section>

      {/* ----------------------- OUR STORY ----------------------- */}
      <section className="max-w-5xl mx-auto px-4 space-y-10">
        <h2 className="text-4xl font-bold">Our Story</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          DrinkIt was born from a simple idea — to make the world of beverages more innovative, creative,
          and accessible for everyone. What started as a small collection of homemade drink recipes quickly
          evolved into a full-scale platform designed for individuals, creators, cafés, and businesses.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Today, DrinkIt is a growing ecosystem where creativity meets taste. Whether you are experimenting
          with new ingredients at home or designing a menu for your brand, we provide tools, inspiration,
          and guidance to help you succeed.
        </p>
      </section>

      {/* ----------------------- MISSION ----------------------- */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            To empower people around the world to create beverages that inspire joy, spark creativity,
            and bring people together. We believe in accessibility, simplicity, and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
            {[
              {
                title: "Innovation",
                text: "We constantly explore new flavor trends and beverage ideas, making creativity the heart of our brand.",
              },
              {
                title: "Accessibility",
                text: "We ensure everyone — beginners and professionals — can easily find recipes and tools they love.",
              },
              {
                title: "Quality",
                text: "Every piece of content is crafted with care, research, and attention to detail.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------- WHAT WE OFFER ----------------------- */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {[
            {
              title: "Inspiration",
              desc: "Thousands of drink ideas that help you explore new tastes and combinations.",
            },
            {
              title: "Menu Concepts",
              desc: "Perfect for cafés, restaurants, and bars looking to upgrade their beverage menus.",
            },
            {
              title: "Guides & Tutorials",
              desc: "Helpful instructions to refine your skills and learn new drink-making techniques.",
            },
            {
              title: "Customization Tools",
              desc: "Create your own beverage styles, categories, and combinations.",
            },
            {
              title: "Community Access",
              desc: "Share ideas, exchange experiences, and inspire others around the world.",
            },
            {
              title: "Business Solutions",
              desc: "Professional beverage concepts scalable for businesses of any size.",
            },
          ].map((item, i) => (
            <div key={i} className="p-8 shadow-lg rounded-2xl bg-white hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------- TEAM SECTION ----------------------- */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Aiz", role: "Founder & Creator" },
              { name: "Aruzzhanaa", role: "UI/UX Designer" },
              { name: "Leo", role: "Content Strategist" },
            ].map((member, i) => (
              <div key={i} className="bg-white p-8 text-center rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-200"></div>
                <h3 className="text-2xl font-semibold mt-6">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------- CONTACT SECTION ----------------------- */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-10">
          Have questions, suggestions, or partnership ideas? We would love to hear from you.
        </p>

        <a className="px-10 py-5 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition cursor-pointer">
          Contact Us
        </a>
      </section>

      {/* ----------------------- FOOTER ----------------------- */}
      <footer className="border-t pt-12 pb-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} DrinkIt. All rights reserved.</p>
      </footer>
    </div>
  );
}
