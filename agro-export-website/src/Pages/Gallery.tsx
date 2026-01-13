import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import heroImage from "../assets/background.png";
import sesameImg from "../assets/sesame.jpg";
import coffeeImg from "../assets/coffee.jpg";
import pulsesImg from "../assets/Pulses&Beans.jpg";
import teffImg from "../assets/teff.jpg";
import cropsImg from "../assets/crops.jpg";
import backgroundImg from "../assets/background.png";

// icons
import whatsupIcon from "../assets/Icons/whatsapp.png";
import gmailIcon from "../assets/Icons/gmail.png";
import linkedInIcon from "../assets/Icons/linkedin.png";

const Gallery: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleLanguage = () =>
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");

  const galleryItems = [
    {
      id: "sesame",
      image: sesameImg,
      label: t("products.sesame"),
      category: "Products",
    },
    {
      id: "coffee",
      image: coffeeImg,
      label: t("products.coffee"),
      category: "Products",
    },
    {
      id: "pulses",
      image: pulsesImg,
      label: t("products.pulses"),
      category: "Products",
    },
    {
      id: "teff",
      image: teffImg,
      label: t("products.teff"),
      category: "Products",
    },
    {
      id: "operations1",
      image: cropsImg,
      label: "Grading & Preparation",
      category: "Operations",
    },
    {
      id: "operations2",
      image: backgroundImg,
      label: "Storage & Logistics",
      category: "Operations",
    },
  ];

  const categories = ["All", "Products", "Operations"];
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className={`bg-gray-50 min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      {/* ================= HERO (same style as Products) ================= */}
      <section
        className="relative h-40 md:h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">
            <img
              src={logo}
              alt="HAC Export & Import Logo"
              className="h-10 md:h-16 max-w-[160px] md:max-w-[200px] object-contain"
            />

            <nav className="hidden md:flex gap-6 font-medium">
              <a href="/" className="hover:opacity-80">
                {t("nav.home")}
              </a>
              <a href="/products" className="hover:opacity-80">
                {t("nav.products")}
              </a>
              <a href="/about-us" className="hover:opacity-80">
                {t("nav.about")}
              </a>
              <a href="/gallery" className="hover:opacity-80">
                {t("gallery")}
              </a>
              <a href="#contact" className="hover:opacity-80">{t("nav.contact")}</a>

            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="border border-white/70 px-3 py-1 rounded-md text-sm hover:bg-white hover:text-black transition"
              >
                {i18n.language === "en" ? "العربية" : "English"}
              </button>

              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        </header>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {t("productsPage.galleryTitle")}
          </h1>
        </div>
      </section>

      {/* ================= GALLERY CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("productsPage.galleryTitle")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            {t("productsPage.gallerySubtitle")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  isActive
                    ? "bg-[#282e59] text-white border-[#282e59] shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#282e59] hover:text-[#282e59]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/85 text-gray-800 shadow-sm backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm md:text-base font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Small note for buyers */}
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-500">
          <p>
            Photos are illustrative of our products and operations. Specific product
            appearance, packing and labeling can be customized according to buyer
            requirements.
          </p>
        </div>
      </section>

      {/* ================= FOOTER (same style as other pages) ================= */}
      <footer className="relative bg-[#1f2345] text-gray-200 pt-20 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="HAC Export & Import Logo"
              className="h-12 w-auto"
            />

            <p className="text-gray-300 text-sm leading-relaxed">
              {t("footer.description")}
            </p>

            <div className="flex gap-3 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/agroexport"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#282e59] hover:bg-[#3b4170] transition"
                aria-label="LinkedIn"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href="mailto:info@agroexport.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#282e59] hover:bg-[#3b4170] transition"
                aria-label="Email"
              >
                <img src={gmailIcon} alt="Email" className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/251900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#282e59] hover:bg-[#3b4170] transition"
                aria-label="WhatsApp"
              >
                <img src={whatsupIcon} alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-white transition">
                  {t("nav.products")}
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-white transition">
                  {t("gallery")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">
              {t("footer.contact")}
            </h3>
            <p className="text-gray-300 text-sm">📍 {t("footer.address")}</p>
            <p className="text-gray-300 text-sm">📧 info@agroexport.com</p>
            <p className="text-gray-300 text-sm">📞 +251 900 000 000</p>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">
              {t("footer.newsletter.title")}
            </h3>
            <p className="text-gray-300 text-sm">
              {t("footer.newsletter.desc")}
            </p>

            <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-1 px-4 py-2 rounded-md focus:outline-none text-gray-900 w-full"
              />
              <button
                type="submit"
                className="bg-[#ffcc00] text-gray-900 px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                {t("footer.newsletter.button")}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;


