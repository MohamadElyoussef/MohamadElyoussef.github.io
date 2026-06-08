import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "ar";

const en = {
  nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", education: "Education", activities: "Activities", certs: "Certs", contact: "Contact" },
  badge: "Interning @ e& · Ajman University",
  typewriter: [
    "AI & Network Automation Engineer",
    "Interning @ e& Bidayati Programme",
    "Building AI Security Tools with Python",
    "Penetration Tester & CTF Player",
    "Full-Stack Developer",
  ],
  heroPara: "4th-year IT Networking & Security student at Ajman University, UAE. Currently interning at e& in the Network Automation & Orchestration department — building AI-powered security tools with Python and Transformer models.",
  downloadCV: "Download CV",
  getInTouch: "Get In Touch",
  aboutTitle: "About Me",
  aboutP1: (bold: (t: string) => JSX.Element) => <>I'm a {bold("4th-year IT Networking & Security")} student at Ajman University, UAE. Currently interning at {bold("e& (Etisalat)")} through the Bidayati Programme in the Network Automation & Orchestration department.</>,
  aboutP2: "I'm building an AI-powered Security Incident Classification and Response Assistant using Python and Transformer models. Beyond the internship, I've done penetration testing, designed enterprise networks, built Android apps in Kotlin, and shipped web projects from scratch.",
  aboutP3: "I'm passionate about the intersection of AI, security, and network automation — and always looking to push further.",
  maritalBtn: "Marital Status",
  maritalAnswer: "None of your business 🙄",
  stats: { certs: "Certifications", events: "Events Attended", year: "Year of Study", competitions: "Competitions" },
  skillsTitle: "Skills & Tools",
  skillsHint: "Tap or hover any icon to see its name",
  skillsCat1: "Programming Languages",
  skillsCat2: "Cybersecurity Tools",
  skillsCat3: "Platforms & Environments",
  projectsTitle: "Projects",
  experienceTitle: "Experience",
  educationTitle: "Education",
  activitiesTitle: "Events & Activities",
  eduAU: { title: "Ajman University", deg: "BSc IT Networking & Security", desc: "Relevant coursework: Network Fundamentals, Cybersecurity, Cloud Computing, Database Systems, Operating Systems, Web Technologies, Mobile Application Development, Ethical Hacking." },
  eduSchool: { title: "Al Ma'arifa International Private School", deg: "High School Diploma", desc: "UAE · 2014 – 2022" },
  certsTitle: "Courses & Certifications",
  contactTitle: "Get In Touch",
  contactSubtitle: "Open to internship opportunities — feel free to reach out via the form or social links below. I will reply within 24 hours.",
  formName: "Name", formEmail: "Email", formMessage: "Message",
  formPlaceholderName: "Your name", formPlaceholderEmail: "your@email.com", formPlaceholderMessage: "Tell me about the opportunity...",
  sendBtn: "Send Message", sentBtn: "Message Sent!",
  footer: "©ME(Mohamad Elyoussef)2026",
};

const ar = {
  nav: { about: "من أنا", skills: "المهارات", projects: "المشاريع", experience: "الخبرات", education: "التعليم", activities: "الأنشطة", certs: "الشهادات", contact: "تواصل" },
  badge: "متدرب في e& · جامعة عجمان",
  typewriter: [
    "مهندس أتمتة شبكات وذكاء اصطناعي",
    "متدرب في برنامج e& بدايتي",
    "أبني أدوات أمن ذكية بـ Python",
    "مختبر اختراق ولاعب CTF",
    "مطور Full-Stack",
  ],
  heroPara: "طالب في السنة الرابعة تخصص شبكات أمن المعلومات بجامعة عجمان. أتدرّب حالياً في e& ضمن قسم أتمتة الشبكات والتنسيق — أبني أدوات أمنية ذكية بـPython ونماذج Transformer.",
  downloadCV: "تحميل السيرة الذاتية",
  getInTouch: "تواصل معي",
  aboutTitle: "من أنا",
  aboutP1: (bold: (t: string) => JSX.Element) => <>أنا طالب في {bold("السنة الرابعة — شبكات وأمن تقنية المعلومات")} بجامعة عجمان. أتدرّب حالياً في {bold("e& (اتصالات)")} ضمن برنامج بدايتي في قسم أتمتة الشبكات والتنسيق.</>,
  aboutP2: "أبني مساعداً ذكياً لتصنيف الحوادث الأمنية والاستجابة لها باستخدام Python ونماذج Transformer. إلى جانب التدريب، أجريت اختبارات اختراق، وصممت شبكات مؤسسية، وبنيت تطبيقات أندرويد بـKotlin، وأنشأت مشاريع ويب من الصفر.",
  aboutP3: "أنا شغوف بتقاطع الذكاء الاصطناعي والأمن وأتمتة الشبكات — وأسعى دائماً للتطور أكثر.",
  maritalBtn: "الحالة الاجتماعية",
  maritalAnswer: "هذا لا يعنيك 🙄",
  stats: { certs: "الشهادات", events: "الفعاليات", year: "سنة الدراسة", competitions: "المسابقات" },
  skillsTitle: "المهارات والأدوات",
  skillsHint: "انقر أو مرر المؤشر على أي أيقونة لرؤية اسمها",
  skillsCat1: "لغات البرمجة",
  skillsCat2: "أدوات الأمن السيبراني",
  skillsCat3: "المنصات والبيئات",
  projectsTitle: "المشاريع",
  experienceTitle: "الخبرات",
  educationTitle: "التعليم",
  activitiesTitle: "الفعاليات والأنشطة",
  eduAU: { title: "جامعة عجمان", deg: "بكالوريوس شبكات وأمن تقنية المعلومات", desc: "المقررات ذات الصلة: أساسيات الشبكات، الأمن السيبراني، الحوسبة السحابية، قواعد البيانات، أنظمة التشغيل، تقنيات الويب، تطوير التطبيقات المحمولة، الاختراق الأخلاقي." },
  eduSchool: { title: "مدرسة المعرفة الدولية الخاصة", deg: "شهادة الثانوية العامة", desc: "الإمارات · 2014 – 2022" },
  certsTitle: "الشهادات",
  contactTitle: "تواصل معي",
  contactSubtitle: "متاح لفرص التدريب — تواصل معي عبر النموذج أو روابط التواصل الاجتماعي. سأرد خلال 24 ساعة.",
  formName: "الاسم", formEmail: "البريد الإلكتروني", formMessage: "الرسالة",
  formPlaceholderName: "اسمك", formPlaceholderEmail: "بريدك@example.com", formPlaceholderMessage: "أخبرني عن الفرصة...",
  sendBtn: "إرسال الرسالة", sentBtn: "تم الإرسال!",
  footer: "©ME(محمد اليوسف)2026",
};

export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, ar };

interface CtxType { lang: Lang; setLang: (l: Lang) => void; t: Translations; }
const Ctx = createContext<CtxType>({ lang: "en", setLang: () => {}, t: en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
