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
    "profile.school": "Mehmet Akif Ersoy Üniversitesi, Bilgisayar Mühendisliği (son sınıf)",
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
    "notfound.title": "Sayfa bulunamadı",
    "notfound.text": "Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.",
    "notfound.back": "Ana sayfaya dön",

    "skills.languages": "Diller",
    "skills.turkish": "Türkçe (ana dil)",
    "skills.english": "İngilizce (B1)",

    "stats.done": "Tamamlanan proje",
    "stats.ongoing": "Devam eden proje",

    // {p}, {d}, {date} gibi süslü parantezli yerler script.js tarafından doldurulur
    "education.title": "Eğitim",
    "education.degree": "Mehmet Akif Ersoy Üniversitesi, Bilgisayar Mühendisliği (lisans)",
    "education.percent": "%{p}",
    "education.complete": "tamamlandı",
    "education.remaining": "· {d} gün kaldı",
    "education.done": "· mezun",
    "education.dates": "Başlangıç: {start} · Tahmini mezuniyet: {end}",

    "experience.title": "Deneyim",
    "experience.role": "Staj",
    "experience.text":
      "Mehmet Akif Ersoy Üniversitesi Bilgi İşlem Daire Başkanlığı'nda 30 gün staj yaptım. " +
      "Bu sürede Beslenme Sayacı uygulamasını geliştirdim.",

    "projects.title": "Projeler",
    "projects.view": "GitHub'da görüntüle",
    "projects.ongoing": "Devam eden projeler",
    "project.badge": "Devam ediyor",
    "project2.title": "LLM Destekli Antrenman Programı Üreticisi",
    "project2.desc":
      "Kullanıcının hedefine, seviyesine, ekipmanına ve haftada gelebileceği gün sayısına göre, " +
      "büyük dil modeliyle (LLM) kişiye özel haftalık antrenman programı üreten bir uygulama. " +
      "Üretilen program, kas dinlenmesi ve haftalık set sınırı kurallarına uygunluk açısından " +
      "kural tabanlı bir doğrulayıcıyla kontrol ediliyor.",
    "project2.tag.validator": "Kural tabanlı doğrulayıcı",
    "project2.tag.streamlit": "Streamlit (planlanan arayüz)",
    "project2.note": "Kod şimdilik özel (private) bir depoda tutuluyor.",
    "project3.title": "Clash Royale Meta Analizörü ve Deste Asistanı",
    "project3.desc":
      "Supercell API üzerinden dünya sıralamasındaki en iyi oyuncuların güncel meta destelerini çeken, " +
      "varyasyon filtrelemesi yapan ve oyuncunun kendi kart envanteri ile joker havuzunu eşleştirerek " +
      "maksimum seviye yükseltme maliyetlerini hesaplayan akıllı bir uygulama.",
    "project3.note": "Kod şimdilik özel (private) bir depoda tutuluyor.",
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
    "profile.school": "Mehmet Akif Ersoy University, Computer Engineering (final year)",
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
    "notfound.title": "Page not found",
    "notfound.text": "The page you're looking for may have moved or never existed.",
    "notfound.back": "Back to home",

    "skills.languages": "Languages",
    "skills.turkish": "Turkish (native)",
    "skills.english": "English (B1)",

    "stats.done": "Completed projects",
    "stats.ongoing": "Projects in progress",

    "education.title": "Education",
    "education.degree": "Mehmet Akif Ersoy University, B.Sc. in Computer Engineering",
    "education.percent": "{p}%",
    "education.complete": "complete",
    "education.remaining": "· {d} days left",
    "education.done": "· graduated",
    "education.dates": "Started: {start} · Expected graduation: {end}",

    "experience.title": "Experience",
    "experience.role": "Internship",
    "experience.text":
      "I did a 30-day internship at the Information Technology Department of Mehmet Akif Ersoy University. " +
      "During this time I developed the Beslenme Sayacı (Nutrition Tracker) app.",

    "projects.title": "Projects",
    "projects.view": "View on GitHub",
    "projects.ongoing": "Work in progress",
    "project.badge": "In progress",
    "project2.title": "LLM-Powered Workout Program Generator",
    "project2.desc":
      "An application that uses a large language model (LLM) to generate a personalized weekly " +
      "workout program based on the user's goal, level, available equipment and the number of days " +
      "they can train each week. The generated program is checked by a rule-based validator for " +
      "muscle recovery and weekly set-limit rules. This is my graduation thesis project, currently in development.",
    "project2.tag.validator": "Rule-based validator",
    "project2.tag.streamlit": "Streamlit (planned UI)",
    "project2.note": "The code is currently kept in a private repository.",
    "project3.title": "Clash Royale Meta Analyzer and Deck Assistant",
    "project3.desc":
      "A smart application that pulls the current meta decks of the top-ranked players worldwide " +
      "through the Supercell API, filters deck variations, and matches the player's own card inventory " +
      "with their wild card pool to calculate the maximum upgrade costs.",
    "project3.note": "The code is currently kept in a private repository.",
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

  updateEducation(lang);   // yüzde ve tarih yazıları da yeni dile geçsin
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
   4b. EĞİTİM İLERLEMESİ (mezuniyet çubuğu)
   Bugünün tarihine göre her sayfa açılışında yeniden hesaplanır;
   elle güncellemek gerekmez. Tarihleri değiştirmek için aşağıdakini düzenle.
   Ay 0'dan başlar: 8 = Eylül, 5 = Haziran.
   ========================================================== */

const EDU_START = new Date(2023, 9, 2);   // başlangıç: 2 Ekim 2023
const EDU_END = new Date(2027, 5, 18);    // tahmini mezuniyet: 18 Haziran 2027

function updateEducation(lang) {
  // Bu eleman her sayfada yok (ör. 404 sayfasında); yoksa hiçbir şey yapma
  if (!document.getElementById("edu-fill")) return;

  const dict = translations[lang];
  const locale = lang === "tr" ? "tr-TR" : "en-GB";

  // Başlangıçtan bugüne geçen süre / toplam süre, 0 ile 1 arasında tutulur
  const ratio = Math.min(1, Math.max(0, (Date.now() - EDU_START) / (EDU_END - EDU_START)));
  const percent = Math.floor(ratio * 100);
  const daysLeft = Math.max(0, Math.ceil((EDU_END - Date.now()) / 86400000));

  document.getElementById("edu-fill").style.width = percent + "%";
  document.getElementById("edu-bar").setAttribute("aria-valuenow", percent);

  document.getElementById("edu-percent").textContent = dict["education.percent"].replace("{p}", percent);
  document.getElementById("edu-remaining").textContent =
    dict["education.complete"] + " " +
    (daysLeft > 0 ? dict["education.remaining"].replace("{d}", daysLeft) : dict["education.done"]);

  const start = EDU_START.toLocaleDateString(locale, { month: "long", year: "numeric" });
  const end = EDU_END.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  document.getElementById("edu-dates").textContent =
    dict["education.dates"].replace("{start}", start).replace("{end}", end);
}

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

// Sayaçlar: proje kartlarını sayar. "Devam ediyor" etiketli (.badge) kartlar devam eden sayılır.
function updateStats() {
  const done = document.getElementById("stat-done");
  if (!done) return;   // bu sayfada sayaç yok (ör. 404 sayfası)

  const cards = document.querySelectorAll("#projects .card");
  let ongoing = 0;
  cards.forEach(function (card) { if (card.querySelector(".badge")) ongoing++; });

  done.textContent = cards.length - ongoing;
  document.getElementById("stat-ongoing").textContent = ongoing;
}
updateStats();

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

  // Sayfanın en üstündeyken (profil/giriş alanı) menüde hiçbir bölüm vurgulu olmasın
  window.addEventListener("scroll", function () {
    if (window.scrollY < 100) {
      navLinks.forEach(function (link) { link.setAttribute("aria-current", "false"); });
    }
  }, { passive: true });
} else {
  // Eski tarayıcıda hiçbir şeyi gizlemeyelim
  document.documentElement.classList.remove("js");
}
