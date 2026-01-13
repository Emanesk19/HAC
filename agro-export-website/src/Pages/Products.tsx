import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import heroImage from "../assets/background.png";
import sesameImg from "../assets/sesame.jpg";
import coffeeImg from "../assets/coffee.jpg";
import pulsesImg from "../assets/Pulses&Beans.jpg";
import teffImg from "../assets/teff.jpg";

//icons
import whatsupIcon from "../assets/Icons/whatsapp.png";
import gmailIcon from "../assets/Icons/gmail.png";
import linkedInIcon from "../assets/Icons/linkedin.png";

const Products: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");

  const products = [
    {
      id: "sesame",
      image: sesameImg,
      title: t("productsPage.sesameTitle"),
      description: t("productsPage.sesameGrades"),
      origin: t("productsPage.sesameOrigin"),
      usage: t("productsPage.sesameUsage"),
      features: [
        "All export grades available",
        "Primary origins: Humera & Wollega",
        "Cleaning, sorting & color grading",
        "Bulk bags & containerized shipments"
      ]
    },
    {
      id: "coffee",
      image: coffeeImg,
      title: t("productsPage.coffeeTitle"),
      description: t("productsPage.coffeeGrades"),
      origin: t("productsPage.coffeeOrigin"),
      usage: t("productsPage.coffeeFlavor"),
      features: [
        "Grades 1–4 available",
        "Washed & natural processes",
        "Export-ready packaging",
        "Multiple origin options"
      ]
    },
    {
      id: "pulses",
      image: pulsesImg,
      title: t("productsPage.pulsesTitle"),
      description: t("productsPage.pulsesVarieties"),
      origin: t("productsPage.pulsesUsage"),
      usage: t("productsPage.pulsesPacking"),
      features: [
        "Red Kidney Beans",
        "Chickpeas & Fava Beans",
        "Soybeans & Mung Beans",
        "Navy & Pinto Beans"
      ]
    },
    {
      id: "teff",
      image: teffImg,
      title: t("productsPage.teffTitle"),
      description: t("productsPage.teffTypes"),
      origin: t("productsPage.teffOrigin"),
      usage: t("productsPage.teffUsage"),
      features: [
        "Red & White Teff",
        "Gluten-free certified",
        "High nutritional value",
        "Premium quality sourcing"
      ]
    }
  ];

  return (
    <div className={`bg-gray-50 min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      {/* ================= HERO ================= */}
      <section
        className="relative h-40 md:h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">
            <img src={logo} alt="HAC Export & Import Logo" className="h-10 md:h-16 max-w-[160px] md:max-w-[200px] object-contain" />

            <nav className="hidden md:flex gap-6 font-medium">
              <a href="/" className="hover:opacity-80">{t("nav.home")}</a>
              <a href="/products" className="hover:opacity-80">{t("nav.products")}</a>
              <a href="/about-us" className="hover:opacity-80">{t("nav.about")}</a>
              <a href="/gallery" className="hover:opacity-80">{t("nav.gallery")}</a>
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
          <h1 className="text-2xl md:text-3xl font-bold text-white">{t("productsPage.heroTitle")}</h1>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("productsPage.heroLabel")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            {t("productsPage.productsIntro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-[#282e59] font-bold mt-1">📍</span>
                    <p className="text-sm text-gray-600">{product.origin}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#282e59] font-bold mt-1">✨</span>
                    <p className="text-sm text-gray-600">{product.usage}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t pt-4 mb-2 md:mb-4">
                  <h4 className="font-semibold text-[#282e59] mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#282e59]"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= QUALITY & SOURCING ================= */}
      <section className="bg-gradient-to-br from-[#282e59] to-[#1f2345] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("productsPage.sourcingTitle")}
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              {t("productsPage.sourcingDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌍",
                title: "Direct Sourcing",
                desc: t("productsPage.sourcingPoints.regions")
              },
              {
                icon: "⭐",
                title: "Quality Grading",
                desc: t("productsPage.sourcingPoints.grading")
              },
              {
                icon: "📋",
                title: "Full Traceability",
                desc: t("productsPage.sourcingPoints.traceability")
              },
              {
                icon: "📦",
                title: "Export Packaging",
                desc: t("productsPage.sourcingPoints.packaging")
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#f5f6fa] to-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#282e59] mb-6">
              Why International Buyers Choose Us
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Consistent export-grade quality",
                "Clear grading & traceability",
                "Flexible packaging & private labeling",
                "Experience with GCC, EU & Asia markets"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#282e59] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#282e59] mb-4">
              {t("productsPage.inquiryTitle")}
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              {t("productsPage.inquirySubtitle")}
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#282e59] to-[#4b54a1] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t("productsPage.form.submit")}
            </a>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>{t("productsPage.contactAlt")}</span>
              <a
                href="mailto:info@agroexport.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f5f6fa] hover:bg-[#e0e3f5] transition"
                aria-label="Email"
              >
                <img src={gmailIcon} alt="Email" className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/251900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f5f6fa] hover:bg-[#e0e3f5] transition"
                aria-label="WhatsApp"
              >
                <img src={whatsupIcon} alt="WhatsApp" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
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
                <a href="#contact" className="hover:text-white transition">
                  {t("nav.contact")}
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

export default Products;
