import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import "../index.css";

// Assets
import logo from "../assets/logo.jpg";
import heroImage from "../assets/background.png";
import coffeeImg from "../assets/coffee.jpg";
import pulsesImg from "../assets/Pulses&Beans.jpg";
import teffImg from "../assets/teff.jpg";
import sesame from "../assets/sesame.jpg";
import coffeeRaw from "../assets/crops.jpg";

//flags
import uaeFlag from "../assets/flags/UAEFlag (1).jpg";
import saudiFlag from "../assets/flags/saudiFlag.jpg";
import omanFlag from "../assets/flags/omanFlag.jpg";
import germanFlag from "../assets/flags/germanFlag.jpg";
import netherlandsFlag from "../assets/flags/netherlandsFlag.jpg";
import italyFlag from "../assets/flags/italyFlag.jpg";
import chinaFlag from "../assets/flags/chinaFlag.jpg";
import indiaFlag from "../assets/flags/indiaFlag.jpg";
import ethioFlag from "../assets/flags/ethiopianFlag.jpg";
import kenyaFlag from "../assets/flags/kenyaFlag.jpg";
import saFlag from "../assets/flags/saFlag.jpg";

//icons
import whatsupIcon from "../assets/Icons/whatsapp.png";
import gmailIcon from "../assets/Icons/gmail.png";
import linkedInIcon from "../assets/Icons/linkedin.png";

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  const statsData = [
    { number: 2, suffix: "", labelKey: "stats.countriesServed" },
    { number: 150, suffix: "+", labelKey: "stats.tonsExported" },
    { number: 100, suffix: "%", labelKey: "stats.qualityFocus" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals: any[] = [];

    statsData.forEach((stat, index) => {
      const increment = Math.ceil(stat.number / 100);
      intervals[index] = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              stat.number
            );
          }
          return newCounts;
        });
      }, 20); // speed of count
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);
  const brandBlue = "#282e59";

  const products = [
    { labelKey: "products.sesame", img: sesame },
    { labelKey: "products.coffee", img: coffeeImg },
    { labelKey: "products.pulses", img: pulsesImg },
    { labelKey: "products.teff", img: teffImg },
  ];

  return (
    <div
      className={i18n.language === "ar" ? "rtl" : "ltr"}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ================= NAVBAR ================= */}
        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-white">
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

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden ml-1 inline-flex items-center justify-center p-2 rounded-md bg-white/10 hover:bg-white/20 focus:outline-none"
                aria-label="Toggle navigation menu"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {isMobileNavOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile nav panel */}
          {isMobileNavOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/10">
              <div className="max-w-7xl mx-auto px-4 py-3 space-y-2">
                <a href="/" className="block text-white py-1 hover:opacity-80">
                  {t("nav.home")}
                </a>
                <a href="/products" className="block text-white py-1 hover:opacity-80">
                  {t("nav.products")}
                </a>
                <a href="/about-us" className="block text-white py-1 hover:opacity-80">
                  {t("nav.about")}
                </a>
                <a href="#contact" className="block text-white py-1 hover:opacity-80">
                  {t("nav.contact")}
                </a>
              </div>
            </div>
          )}
        </header>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-90px)] text-center px-4">
          <div className="w-full max-w-2xl sm:max-w-3xl text-white">
            {/* Hero Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mx-auto break-words">
              {t("hero.title")}
            </h1>

            {/* Hero Subtitle */}
            <p className="mt-3 text-sm sm:text-base md:text-xl text-gray-200 leading-snug mx-auto max-w-2xl">
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#products"
                className="bg-brand px-7 py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                {t("hero.ctaPrimary")}
              </a>

              <a
                href="#contact"
                className="border border-white px-7 py-3 rounded-md font-medium hover:bg-white hover:text-black transition"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="relative bg-gray-50 py-24 overflow-hidden">
        {/* Two large blue bubbles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#272d61]/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#272d61]/20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="md:col-span-7 text-left">
            {/* Short Line + Text */}
            <div className="flex items-center mb-4 gap-2">
              <div className="w-12 h-1 bg-[#272d61]"></div>
              <span className="text-sm text-[#272d61] font-semibold">
                {" "}
                {t("about.label")}
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("about.title")}
            </h2>

            {/* About Us Text */}
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
              {t("about.description")}
            </p>

            <a
              href="/about-us"
              className="mt-6 inline-block px-6 py-3 rounded-md font-medium border transition hover:bg-[#282e59] hover:text-white"
              style={{ borderColor: "#282e59", color: "#282e59" }}
            >
              Learn More
            </a>
          </div>

          {/* ================= IMAGE WITH RESPONSIVE CARD ================= */}
          <div className="md:col-span-5 flex justify-center md:justify-end relative mt-8 md:mt-0">
            <div
              className="w-full max-w-md md:max-w-none md:w-[460px] h-64 md:h-[360px] bg-gray-50 rounded-xl overflow-hidden"
              style={{
                boxShadow: "0 20px 40px rgba(40,46,89,0.4)", // blue shadow
              }}
            >
              <img
                src={coffeeRaw}
                alt="Agro Export Operations"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative -mt-10 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={stat.labelKey}
                className="p-6 rounded-xl bg-white border flex flex-col items-center justify-center shadow"
                style={{ borderColor: "#aab0d1" }}
              >
                <p
                  className="text-4xl text-center font-semibold"
                  style={{ color: brandBlue }}
                >
                  {counts[index].toLocaleString(
                    i18n.language === "ar" ? "ar-EG" : "en-US"
                  )}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {t(stat.labelKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            {/* Dash line + label */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <div
                className="w-10 h-[2px]"
                style={{ backgroundColor: brandBlue }}
              ></div>
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: brandBlue }}
              >
                {t("sections.products.label")}
              </span>
            </div>

            {/* Alternative Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("sections.products.title")}
            </h2>

            {/* Optional subtitle */}
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              {t("sections.products.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.labelKey}
                className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={product.img}
                  alt={t(`products.${product.labelKey}`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  style={{ backgroundColor: "rgba(40,46,89,0.7)" }}
                >
                  <h3 className="text-white text-lg font-semibold tracking-wide">
                    {t(`${product.labelKey}`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24" style={{ backgroundColor: "#282e59" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-3">
              <div className="w-10 h-1 bg-white"></div>
              <span className="text-sm font-semibold text-white/80">
                {t("sections.whyChooseUs.label")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("sections.whyChooseUs.title")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-white/75 leading-relaxed">
              {t("sections.whyChooseUs.desc")}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { key: "qualityControl", icon: "✔️" },
              { key: "sourcingNetwork", icon: "🌱" },
              { key: "exportExpertise", icon: "📦" },
              { key: "onTimeDelivery", icon: "🚢" },
            ].map((item) => (
              <div
                key={item.key}
                className="p-8 rounded-xl text-center bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/15 transition"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-6 border border-white/40 text-2xl text-white">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {t(`cards.${item.key}.title`)}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed">
                  {t(`cards.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARKETS WE SERVE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-3">
              <div className="w-10 h-1 bg-[#282e59]"></div>
              <span className="text-sm font-semibold text-[#282e59]">
                {t("sections.markets.label")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("sections.markets.title")}
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {t("sections.markets.desc")}
            </p>
          </div>

          {/* Overlapping Flags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
            {[
              {
                key: "middleEast",
                flags: [uaeFlag, saudiFlag, omanFlag],
              },
              {
                key: "europe",
                flags: [germanFlag, netherlandsFlag, italyFlag],
              },
              {
                key: "asia",
                flags: [chinaFlag, indiaFlag],
              },
              {
                key: "africa",
                flags: [ethioFlag, kenyaFlag, saFlag],
              },
            ].map((region) => (
              <div key={region.key} className="flex flex-col items-center">
                <div className="flex -space-x-4">
                  {region.flags.map((flag, i) => (
                    <img
                      key={i}
                      src={flag}
                      alt={t(`sections.markets.regions.${region.key}.name`)}
                      className="w-16 h-16 rounded-full shadow-lg border-2 border-white"
                    />
                  ))}
                </div>

                <p className="mt-4 font-semibold text-[#282e59]">
                  {t(`sections.markets.regions.${region.key}.name`)}
                </p>
                <p className="text-sm text-gray-600 text-center">
                  {t(`sections.markets.regions.${region.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & COMPLIANCE ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 mb-3">
              <div className="w-10 h-1 bg-[#282e59]"></div>
              <span className="text-sm font-semibold text-[#282e59]">
                {t("sections.certifications.label")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("sections.certifications.title")}
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {t("sections.certifications.desc")}
            </p>
          </div>

          {/* Certification Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["iso", "haccp", "phytosanitary", "inspection"].map((key) => (
              <div
                key={key}
                className="p-8 rounded-xl bg-white border border-gray-200 text-center shadow-sm hover:shadow-md transition"
              >
                <div
                  className="w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-6 text-lg font-semibold"
                  style={{ backgroundColor: "#282e59", color: "white" }}
                >
                  ✓
                </div>

                <p className="text-sm font-medium text-gray-700">
                  {t(`sections.certifications.items.${key}`)}
                </p>
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
}

export default App;
