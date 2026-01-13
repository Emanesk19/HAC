import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import heroImage from "../assets/crops.jpg";

const Products: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () =>
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");

  return (
    <div
      className={`min-h-screen bg-gray-50 ${isArabic ? "rtl" : "ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* ================= HERO (UNCHANGED) ================= */}
      <section
        className="relative h-60 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <header className="absolute top-0 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
            <img src={logo} alt="HAC Export & Import" className="h-12" />
            <button
              onClick={toggleLanguage}
              className="border border-white/70 px-3 py-1 rounded-md text-sm hover:bg-white hover:text-black transition"
            >
              {isArabic ? "English" : "العربية"}
            </button>
          </div>
        </header>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            {t("productsPage.heroTitle")}
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-3xl">
            {t("productsPage.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* ================= BUYER INTRO ================= */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#282e59] mb-4">
              {t("productsPage.heroLabel")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("productsPage.productsIntro")}
            </p>
          </div>
          <div className="bg-[#f5f6fa] p-6 rounded-xl text-sm text-gray-700">
            <p className="font-medium mb-2 text-[#282e59]">
              Why International Buyers Choose Us
            </p>
            <ul className="space-y-2">
              <li>• Consistent export-grade quality</li>
              <li>• Clear grading & traceability</li>
              <li>• Flexible packaging & private labeling</li>
              <li>• Experience with GCC, EU & Asia markets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SESAME ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-semibold text-[#282e59] mb-4">
              Sesame Seeds
            </h3>
            <p className="text-gray-700 mb-6">
              Premium Ethiopian sesame seeds sourced from the most renowned producing regions, suitable for food processors, oil manufacturers, and international traders.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• All export grades available</li>
              <li>• Primary origins: Humera & Wollega</li>
              <li>• Additional regions available upon request</li>
              <li>• Cleaning, sorting & color grading available</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="font-medium text-[#282e59] mb-3">Applications</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>• Tahini & Halva</div>
              <div>• Bakery & Confectionery</div>
              <div>• Sesame Oil</div>
              <div>• Food Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COFFEE ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold text-[#282e59] mb-4">Coffee Beans</h3>
            <p className="text-gray-700 mb-6">
              Ethiopian Arabica coffee, globally recognized for its aroma and complexity. Available in multiple grades for roasters and distributors.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Grades 1–4</li>
              <li>• Origins: Yirgacheffe, Sidamo, Jimma, Guji</li>
              <li>• Washed & natural processes</li>
              <li>• Export-ready packaging</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 bg-[#f5f6fa] p-6 rounded-xl">
            <p className="font-medium text-[#282e59] mb-3">Flavor Profiles</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Floral & citrus notes</li>
              <li>• Chocolate & spice undertones</li>
              <li>• Bright acidity & balanced body</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PULSES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t">
        <h3 className="text-3xl font-semibold text-[#282e59] mb-8">Pulses & Beans</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Red Kidney Beans",
            "Chickpeas",
            "Fava Beans",
            "Soybeans",
            "Mung Beans",
            "Navy Beans",
            "Pinto Beans",
          ].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-medium text-[#282e59] mb-2">{item}</p>
              <p className="text-sm text-gray-700">Export-grade cleaning, uniform sizing, and moisture control available.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEFF ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold text-[#282e59] mb-4">Teff</h3>
            <p className="text-gray-700 mb-6">
              Ethiopia’s ancient super grain, supplied for global health food and specialty markets.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Red Teff</li>
              <li>• White Teff</li>
              <li>• Gluten-free & high nutritional value</li>
            </ul>
          </div>
          <div className="bg-[#f5f6fa] p-6 rounded-xl text-sm text-gray-700">
            Common Uses: Injera, flour blends, health foods, and export retail packs.
          </div>
        </div>
      </section>

      {/* ================= SOURCING & GRADING ================= */}
      <section className="bg-[#282e59] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-semibold mb-6">Sourcing & Quality Control</h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="bg-white/10 p-6 rounded-xl">Direct sourcing from key agricultural regions</div>
            <div className="bg-white/10 p-6 rounded-xl">International grading standards</div>
            <div className="bg-white/10 p-6 rounded-xl">Full traceability & documentation</div>
            <div className="bg-white/10 p-6 rounded-xl">Flexible packaging & labeling</div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-semibold text-[#282e59] mb-4">
            Request a Quotation
          </h3>
          <p className="text-gray-700 mb-8">
            Contact us with your required product, quantity, and destination port. Our export team will respond promptly.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#282e59] text-white px-8 py-3 rounded-md hover:bg-[#1f2345] transition"
          >
            Send Inquiry
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1f2345] text-gray-300 py-8 text-center text-sm">
        © {new Date().getFullYear()} HAC Export & Import. All rights reserved.
      </footer>
    </div>
  );
};

export default Products;
