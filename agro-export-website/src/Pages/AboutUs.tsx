import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import aboutHero from "../assets/background.png";
import companyImage from "../assets/coffee raw (1).jpg";

//icons
import whatsupIcon from "../assets/Icons/whatsapp.png";
import gmailIcon from "../assets/Icons/gmail.png";
import linkedInIcon from "../assets/Icons/linkedin.png";

const AboutUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");

  return (
    <div className={`bg-gray-50 min-h-screen ${theme === "dark" ? "dark" : ""}`}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-40 md:h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
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
          <h1 className="text-2xl md:text-3xl font-bold text-white">{t("about.label")}</h1>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">{t("about.description")}</p>
        </div>
        <div className="order-1 md:order-2 w-full h-64 sm:h-72 md:h-96">
          <img
            src={companyImage}
            alt="HAC Export Operations"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

{/* ================= MISSION, VISION & VALUES ================= */}
<section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      {t("about.missionVisionTitle") || "Our Mission & Vision"}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Mission */}
      <div className="relative bg-white rounded-xl shadow hover:shadow-xl transition-transform transform hover:scale-105 p-8 text-center">
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-[#282e59] to-[#4b54a1]"></div>
        <h3 className="text-xl font-semibold mb-4">{t("about.missionTitle") || "Mission"}</h3>
        <p className="text-gray-700 leading-relaxed">
          {t("about.missionDesc") ||
            "To provide premium Ethiopian agricultural products to international markets with consistent quality, reliability, and transparency."}
        </p>
      </div>

      {/* Vision */}
      <div className="relative bg-white rounded-xl shadow hover:shadow-xl transition-transform transform hover:scale-105 p-8 text-center">
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-[#282e59] to-[#4b54a1]"></div>
        <h3 className="text-xl font-semibold mb-4">{t("about.visionTitle") || "Vision"}</h3>
        <p className="text-gray-700 leading-relaxed">
          {t("about.visionDesc") ||
            "To become a globally recognized and trusted exporter of Ethiopian agricultural commodities."}
        </p>
      </div>

      {/* Core Values */}
      <div className="relative bg-white rounded-xl shadow hover:shadow-xl transition-transform transform hover:scale-105 p-8 text-center">
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-[#282e59] to-[#4b54a1]"></div>
        <h3 className="text-xl font-semibold mb-4">{t("about.valuesTitle") || "Core Values"}</h3>
        <ul className="text-gray-700 leading-relaxed space-y-2 list-none">
          {[
            t("about.valuesIntegrity") || "Integrity",
            t("about.valuesQuality") || "Quality",
            t("about.valuesReliability") || "Reliability",
            t("about.valuesSustainability") || "Sustainability",
          ].map((value, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              <span className="text-[#282e59] font-bold">•</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>






{/* ================= WHAT WE DO ================= */}
<section className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {t("whatWeDo.title")}
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        {t("whatWeDo.subtitle")}
      </p>
    </div>

    {/* Vertical Timeline */}
    <div className="relative border-l-2 border-gray-300 pl-8">
      {[
        { emoji: "🌱", titleKey: "whatWeDo.sourcingTitle", descKey: "whatWeDo.sourcingDesc" },
        { emoji: "🏭", titleKey: "whatWeDo.processingTitle", descKey: "whatWeDo.processingDesc" },
        { emoji: "🚢", titleKey: "whatWeDo.exportTitle", descKey: "whatWeDo.exportDesc" },
      ].map((step) => (
        <div key={step.titleKey} className="mb-12 relative">
          {/* Emoji Circle */}
          <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-bold">
            {step.emoji}
          </div>

          {/* Content */}
          <div className="ml-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(step.titleKey)}</h3>
            <p className="text-gray-600 leading-relaxed">{t(step.descKey)}</p>
          </div>
        </div>
      ))}
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
                <a href="#home" className="hover:text-white transition">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-white transition">
                  {t("nav.products")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
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

export default AboutUs;
