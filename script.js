/* ==========================================================
   1. ÇEVİRİ SÖZLÜĞÜ
   Sitedeki tüm metinler burada. HTML'deki data-i18n="anahtar"
   özelliği, aşağıdaki "anahtar"ın karşılığını bulup yazar.
   Yeni metin eklerken tr ve en'e AYNI anahtarı ekle.
   ========================================================== */

const translations = {
  tr: {
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.experience": "Deneyim",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",

    "skip": "İçeriğe geç",
    "hero.cta": "Projelerime göz at",
    "hero.hello": "Merhaba, ben",
    "hero.tagline": "Kendini geliştirmek isteyen bir bilgisayar mühendisliği öğrencisi.",

    "about.title": "Hakkımda",
    "about.text":
      "Mehmet Akif Ersoy Üniversitesi Bilgisayar Mühendisliği bölümünde son sınıf öğrencisiyim. " +
      "Python, Flutter, büyük dil modelleri ve görüntü işleme alanlarıyla ilgileniyorum. " +
      "Şu an özellikle yapay zekayla ilgileniyorum; yaz sonrasında bu alanda yeni şeyler denemeyi planlıyorum.",

    "skills.title": "Yetenekler",
    "skills.llm": "LLM (Büyük Dil Modelleri)",
    "skills.cv": "Görüntü İşleme",

    "experience.title": "Deneyim",
    "experience.role": "Staj",
    "experience.text":
      "Mehmet Akif Ersoy Üniversitesi Bilgi İşlem Daire Başkanlığı'nda 30 gün staj yaptım. " +
      "Bu sürede Beslenme Sayacı uygulamasını geliştirdim.",

    "projects.title": "Projeler",
    "projects.view": "GitHub'da görüntüle",
    "project1.title": "Beslenme Sayacı",
    "project1.desc":
      "Flutter ile geliştirilmiş bir beslenme takibi mobil uygulaması. Staj projem olarak geliştirdim.",

    "contact.title": "İletişim",
    "contact.text": "Projelerimi GitHub'da, profesyonel geçmişimi LinkedIn'de bulabilirsin.",

    "theme.toggle": "Temayı değiştir"
  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "skip": "Skip to content",
    "hero.cta": "View my projects",
    "hero.hello": "Hi, I'm",
    "hero.tagline": "A computer engineering student eager to keep growing.",

    "about.title": "About me",
    "about.text":
      "I'm a final-year Computer Engineering student at Mehmet Akif Ersoy University. " +
      "I'm interested in Python, Flutter, large language models and image processing. " +
      "Right now I'm especially interested in AI, and I plan to explore it further after the summer.",

    "skills.title": "Skills",
    "skills.llm": "LLMs (Large Language Models)",
    "skills.cv": "Image Processing",

    "experience.title": "Experience",
    "experience.role": "Internship",
    "experience.text":
      "I did a 30-day internship at the Information Technology Department of Mehmet Akif Ersoy University. " +
      "During this time I developed the Beslenme Sayacı (Nutrition Tracker) app.",

    "projects.title": "Projects",
    "projects.view": "View on GitHub",
    "project1.title": "Beslenme Sayacı (Nutrition Tracker)",
    "project1.desc":
      "A nutrition-tracking mobile app built with Flutter. I developed it as my internship project.",

    "contact.title": "Contact",
    "contact.text": "You can find my projects on GitHub and my professional background on LinkedIn.",

    "theme.toggle": "Toggle theme"
  }
};

/* ==========================================================
   2. YARDIMCI: güvenli localStorage
   Bazı tarayıcılarda (gizli mod vb.) localStorage hata verebilir;
   try/catch ile siteyi bozmadan devam ederiz.
   ========================================================== */

function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* önemli değil */ }
}

function loadSetting(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

/* ==========================================================
   3. DİL SİSTEMİ
   ========================================================== */

function applyLanguage(lang) {
  const dict = translations[lang];

  // data-i18n olan her elemanın metnini sözlükten değiştir
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  // data-i18n-label olan elemanların erişilebilirlik etiketini (aria-label) değiştir
  document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
    el.setAttribute("aria-label", dict[el.dataset.i18nLabel]);
  });

  // <html lang="..."> güncelle (ekran okuyucular ve arama motorları için)
  document.documentElement.lang = lang;

  // Aktif dil butonunu işaretle (CSS bunu altınla boyar)
  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  saveSetting("lang", lang);
}

// İlk açılış: kayıtlı dil varsa o; yoksa tarayıcı dili Türkçeyse TR, değilse EN
function getInitialLanguage() {
  const saved = loadSetting("lang");
  if (saved === "tr" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
}

/* ==========================================================
   4. TEMA SİSTEMİ
   ========================================================== */

const themeButton = document.getElementById("theme-toggle");

function applyTheme(theme) {
  // CSS, <html data-theme="..."> değerine göre renkleri seçer
  document.documentElement.setAttribute("data-theme", theme);
  // Butondaki simge: koyudaysa güneş (açığa geç), açıksa ay (koyuya geç)
  themeButton.textContent = theme === "dark" ? "☀" : "☾";
  saveSetting("theme", theme);
}

// İlk açılış: kayıtlı tema varsa o; yoksa cihazın teması
function getInitialTheme() {
  const saved = loadSetting("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

themeButton.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ==========================================================
   5. BAŞLATMA
   ========================================================== */

document.querySelectorAll(".lang-switch button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLanguage(btn.dataset.lang);
  });
});

applyLanguage(getInitialLanguage());
applyTheme(getInitialTheme());

// Alt bilgideki yılı otomatik yaz
document.getElementById("year").textContent = new Date().getFullYear();

/* ==========================================================
   6. KAYDIRMA EFEKTLERİ
   IntersectionObserver: bir eleman ekrana girince haber verir.
   ========================================================== */

// "js" sınıfı eklenince CSS, .reveal elemanlarını gizleyip animasyona hazırlar
document.documentElement.classList.add("js");

if ("IntersectionObserver" in window) {
  // Bölümler ekrana girince yumuşakça belir
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target); // bir kez yeter
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".section .container, .card").forEach(function (el) {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  // Menüde şu an görünen bölümün linkini işaretle
  const navLinks = document.querySelectorAll(".nav a");
  const navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (link) {
        link.setAttribute("aria-current", link.getAttribute("href") === "#" + entry.target.id ? "true" : "false");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" }); // ekranın ortasındaki bölümü say

  document.querySelectorAll("main section[id]").forEach(function (s) { navObserver.observe(s); });
} else {
  // Eski tarayıcıda hiçbir şeyi gizlemeyelim
  document.documentElement.classList.remove("js");
}
