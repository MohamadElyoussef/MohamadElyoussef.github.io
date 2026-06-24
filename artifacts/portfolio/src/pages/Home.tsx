import { useState, useEffect, useRef } from "react";
import SkillIcon from "../components/SkillIcon";
import CertCarousel from "../components/CertCarousel";
import SectionReveal from "../components/SectionReveal";
import { useLang } from "@/context/LanguageContext";

/* ── skill tool images ─────────────────────────────── */
import burpSuiteImg from "@assets/image_1776177932441.png";
import metasploitImg from "@assets/image_1776178106682.png";
import wiresharkImg from "@assets/image_1776178214492.png";
import nessusImg from "@assets/image_1776178242133.png";
import kaliImg from "@assets/image_1776178252361.png";
import ciscoImg from "@assets/image_1776178352842.png";
import windowsXPImg from "@assets/image_1776178419545.png";
import virtualBoxImg from "@assets/image_1776178460918.png";

/* ── project screenshots ───────────────────────────── */
import unityGameImg from "@assets/image_1778186106346.png";
import carMaintenanceImg from "@assets/image_1776181493265.png";
import carCareImg from "@assets/image_1782290621529.png";
import cybersecLabsImg from "@assets/image_1776184060375.png";
import technovaImg from "@assets/image_1776185726315.png";
import gamingWebsiteImg from "@assets/image_1776188180874.png";
import webDevImg from "@assets/image_1776228996265.png";
import uniclassImg from "@assets/uniclassImg.png";
import etisalatLogo from "@assets/etisalat_logo.png";
import ajmanUniversityLogo from "@assets/ajman_university_logo.png";
import maarifaSchoolLogo from "@assets/maarifa_school_logo.png";
import gitexLogo from "@assets/gitex_logo.png";
import digitalDubaiLogo from "@assets/digital_dubai_logo.png";

/* ─────────────────────────────────────────────
   SWIPE HOOK
───────────────────────────────────────────── */
function useSwipe(onLeft: () => void, onRight: () => void) {
  const startX = useRef<number | null>(null);
  return {
    onTouchStart: (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; },
    onTouchEnd: (e: React.TouchEvent) => {
      if (startX.current === null) return;
      const diff = startX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? onLeft() : onRight(); }
      startX.current = null;
    },
  };
}

/* ─────────────────────────────────────────────
   GREETING BADGE
───────────────────────────────────────────── */
function GreetingBadge() {
  const [phase, setPhase] = useState<"en" | "ar">("en");

  useEffect(() => {
    const cycle = () => setPhase((p) => (p === "en" ? "ar" : "en"));
    const interval = setInterval(cycle, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "absolute", top: "4rem", right: "1.5rem",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px", padding: "8px 18px",
      animation: "reveal-up 0.5s ease forwards",
      backdropFilter: "blur(8px)",
      zIndex: 10,
    }}>
      <p style={{
        color: "hsl(215 20% 52%)",
        fontFamily: "monospace",
        fontSize: "0.85rem",
        fontWeight: 500,
        letterSpacing: "0.02em",
        transition: "opacity 0.5s",
        opacity: 1,
        direction: phase === "ar" ? "rtl" : "ltr",
      }}>
        {phase === "en" ? "Assalam Alaikum" : "السلام عليكم"}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SKILLS
───────────────────────────────────────────── */
const languages = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#fbbf24" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#f97316" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#facc15" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3b82f6" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#9b59b6" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg", color: "#34d399" },
  { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#f97316" },
  { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", color: "#276dc3" },
  { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", color: "#e2e8f0" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", color: "#7f52ff" },
];
const securityTools = [
  { name: "Kali", icon: kaliImg, color: "#4ade80" },
  { name: "Burp Suite", icon: burpSuiteImg, color: "#f97316" },
  { name: "Nmap", icon: "https://nmap.org/images/nmap-logo-256x256.png", color: "#4ade80" },
  { name: "Metasploit", icon: metasploitImg, color: "#f87171" },
  { name: "Wireshark", icon: wiresharkImg, color: "#60a5fa" },
  { name: "Nessus", icon: nessusImg, color: "#34d399" },
];
const platforms = [
  { name: "Cisco Packet Tracer", icon: ciscoImg, color: "#818cf8" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#fb923c" },
  { name: "VirtualBox", icon: virtualBoxImg, color: "#3b82f6" },
  { name: "Windows XP", icon: windowsXPImg, color: "#60a5fa" },
  { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", color: "#e2e8f0" },
  { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", color: "#4ade80" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#38bdf8" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#34d399" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#60a5fa" },
  { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", color: "#60a5fa" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#e2e8f0" },
];

/* ─────────────────────────────────────────────
   PROJECTS
───────────────────────────────────────────── */
interface Project {
  title: string; titleAr: string;
  description: string; descriptionAr: string;
  tags: string[];
  tagColor: "green" | "orange" | "purple" | "blue";
  icon: string;
  skills: string[];
  gradient: string; iconBg: string;
  screenshot: string;
  bullets: string[];
  bulletsAr: string[];
  link?: { url: string; label: string; labelAr: string };
}

const projects: Project[] = [
  {
    title: "CarCare", titleAr: "كير كار",
    description: "Mobile-first web app for UAE drivers to manage vehicles and stay on top of car maintenance. Book inspections, build custom checklists by car zone, and run them live with a real-time diagram.",
    descriptionAr: "تطبيق ويب للهواتف مخصص لسائقي الإمارات لإدارة سياراتهم ومتابعة صيانتها. احجز فحوصات، وأنشئ قوائم تفتيش مخصصة حسب منطقة السيارة، وشغّلها مباشرة مع مخطط تفاعلي.",
    tags: ["Mobile Web", "UAE"], tagColor: "green", icon: "🚗",
    skills: ["Kotlin/JS", "React 18", "Webpack", "GitHub Actions"],
    gradient: "linear-gradient(135deg, rgba(74,222,128,0.12) 0%, rgba(10,15,30,0.95) 100%)",
    iconBg: "rgba(74,222,128,0.15)", screenshot: carCareImg,
    bullets: [
      "Built a mobile-first web app for UAE drivers to save vehicle details, book inspection appointments, and manage maintenance schedules.",
      "Implemented custom inspection checklists organized by car zone (hood, brakes, lights, wheels) with a live car diagram that highlights zones green or red based on pass/fail results.",
      "Added full Arabic/English bilingual support with automatic RTL layout switching, and made the app fully offline using browser-only storage — no backend or login required.",
      "Compiled Kotlin to JavaScript using Kotlin/JS, bundled with Webpack, and deployed via GitHub Actions to GitHub Pages.",
    ],
    bulletsAr: [
      "بنيت تطبيق ويب للهواتف لسائقي الإمارات لحفظ تفاصيل السيارة وحجز مواعيد الفحص وإدارة جداول الصيانة.",
      "نفّذت قوائم فحص مخصصة مقسّمة حسب منطقة السيارة مع مخطط تفاعلي يُلوّن المناطق باللون الأخضر أو الأحمر.",
      "أضفت دعماً كاملاً للغتين العربية والإنجليزية مع تبديل تلقائي لتخطيط RTL، والتطبيق يعمل بالكامل دون إنترنت.",
      "تم تجميع Kotlin إلى JavaScript باستخدام Kotlin/JS والحزم بـ Webpack والنشر عبر GitHub Actions إلى GitHub Pages.",
    ],
    link: { url: "https://mohamadelyoussef.github.io/CarCare/", label: "View App", labelAr: "عرض التطبيق" },
  },
  {
    title: "Multi-Target Red Team Assessment", titleAr: "تقييم الفريق الأحمر متعدد الأهداف",
    description: "Enterprise-grade penetration test against three environments — exploiting 6 critical CVEs including EternalBlue and VSFTPD backdoor.",
    descriptionAr: "اختبار اختراق على مستوى المؤسسات ضد ثلاث بيئات — استغلال 6 ثغرات حرجة بما فيها EternalBlue وباب خلفي في VSFTPD.",
    tags: ["Red Team", "Pen Test"], tagColor: "orange", icon: "🔓",
    skills: ["Kali Linux", "Metasploit", "Nmap", "Burp Suite", "Wireshark", "Responder"],
    gradient: "linear-gradient(135deg, rgba(251,146,60,0.12) 0%, rgba(10,15,30,0.95) 100%)",
    iconBg: "rgba(251,146,60,0.15)", screenshot: cybersecLabsImg,
    bullets: [
      "Executed a structured penetration test against three target environments (Metasploitable Linux, Windows XP, Windows 7), successfully exploiting 6 critical vulnerabilities across all systems.",
      "Achieved remote SYSTEM-level code execution via MS08-067 (CVE-2008-4250) and MS17-010 EternalBlue (CVE-2017-0143) on unpatched Windows SMB services without authentication.",
      "Exploited a VSFTPD v2.3.4 supply-chain backdoor (CVE-2011-2523) to obtain root shell access and confirmed default-credential risk via SSH brute-force on Metasploitable.",
      "Executed client-side attacks including a malicious HTA payload delivery and LLMNR poisoning with NTLMv2 hash capture and offline cracking followed by an SSH lateral movement pivot.",
      "Produced a professional penetration test report documenting full attack chains, CVE references, risk ratings, and prioritized remediation recommendations.",
    ],
    bulletsAr: [
      "نفّذت اختبار اختراق منظّم ضد ثلاث بيئات مستهدفة (Metasploitable Linux وWindows XP وWindows 7)، مع استغلال 6 ثغرات حرجة عبر جميع الأنظمة.",
      "حققت تنفيذ كود بصلاحيات SYSTEM عن بُعد عبر MS08-067 وEternalBlue MS17-010 على خدمات SMB غير مُرقَّعة.",
      "استغللت الباب الخلفي في VSFTPD v2.3.4 للحصول على صلاحيات root، وأكّدت مخاطر بيانات الاعتماد الافتراضية.",
      "نفّذت هجمات على جانب العميل تشمل تسليم حمولة HTA خبيثة وتسميم LLMNR مع التقاط هاش NTLMv2 وكسره دون اتصال.",
      "أنتجت تقرير اختبار اختراق احترافياً يوثّق سلاسل الهجوم الكاملة ومراجع CVE وتقييمات المخاطر وتوصيات المعالجة.",
    ],
    link: { url: `${import.meta.env.BASE_URL}RedTeam_Pentest_Report.pdf`, label: "View Report", labelAr: "عرض التقرير" },
  },
  {
    title: "Gaming Website with Integrated Mini-Game", titleAr: "موقع ألعاب مع لعبة مدمجة",
    description: "Interactive gaming website featuring an embedded mini-game built with HTML, CSS, and JavaScript.",
    descriptionAr: "موقع ألعاب تفاعلي يحتوي على لعبة مدمجة مبني بـ HTML وCSS وJavaScript.",
    tags: ["Web Dev", "Games"], tagColor: "purple", icon: "🎮",
    skills: ["HTML5", "CSS3", "JavaScript"],
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(10,15,30,0.95) 100%)",
    iconBg: "rgba(167,139,250,0.15)", screenshot: gamingWebsiteImg,
    bullets: [
      "Designed and developed an interactive gaming website featuring an embedded mini-game for enhanced user engagement.",
      "Implemented front-end development using HTML, CSS, and JavaScript to create responsive and user-friendly interfaces.",
      "Integrated game logic, scoring system, and interactive elements to deliver a dynamic user experience.",
    ],
    bulletsAr: [
      "صممت وطورت موقع ألعاب تفاعلياً يتضمن لعبة مصغّرة مدمجة لتعزيز تفاعل المستخدم.",
      "نفّذت تطوير الواجهة الأمامية باستخدام HTML وCSS وJavaScript لإنشاء واجهات مستجيبة وسهلة الاستخدام.",
      "دمجت منطق اللعبة ونظام التسجيل والعناصر التفاعلية لتقديم تجربة مستخدم ديناميكية.",
    ],
    link: { url: "https://drive.google.com/drive/folders/1mnd68uz0DdqcJS2OOATjXSrWvuc-0tHz", label: "View Files", labelAr: "عرض الملفات" },
  },
  {
    title: "TechNova Solutions — Network Design", titleAr: "TechNova Solutions — تصميم الشبكة",
    description: "Scalable WAN/LAN for 150+ users across 3 UAE branches. Three-tier topology, Hub-and-Spoke VPN, 10 Gbps backbone, 99.95% uptime.",
    descriptionAr: "بنية تحتية للشبكة تخدم أكثر من 150 مستخدماً عبر 3 فروع في الإمارات.",
    tags: ["Networking", "Infrastructure"], tagColor: "blue", icon: "🌐",
    skills: ["Cisco Packet Tracer", "VPN", "VLAN", "HSRP", "QoS"],
    gradient: "linear-gradient(135deg, rgba(99,179,237,0.12) 0%, rgba(10,15,30,0.95) 100%)",
    iconBg: "rgba(99,179,237,0.15)", screenshot: technovaImg,
    bullets: [
      "Designed a scalable and secure WAN/LAN infrastructure for an expanding IT services company to support up to 150 concurrent users across three UAE branches.",
      "Developed a three-tier hierarchical network topology (Core, Distribution, Access) utilizing Cisco hardware and a Hub-and-Spoke VPN for secure inter-branch connectivity.",
      "Engineered a high-availability architecture targeting 99.95% uptime by integrating dual-homed ISPs, redundant multilayer switches and routers, and First Hop Redundancy Protocols (HSRP/VRRP).",
      "Optimized network performance for mission-critical applications by designing a 10 Gbps backbone throughput and configuring Quality of Service (QoS) policies to prioritize VoIP and video traffic (sub-50ms latency).",
      "Implemented a multi-layered security strategy utilizing perimeter firewalls, strict VLAN segmentation, and Multi-Factor Authentication (MFA), alongside a Class C IP addressing scheme using VLSM.",
    ],
    bulletsAr: [
      "صممت بنية تحتية شبكية قابلة للتوسع وآمنة لشركة خدمات تقنية متنامية لدعم ما يصل إلى 150 مستخدماً متزامناً عبر ثلاثة فروع في الإمارات.",
      "طورت طبولوجيا شبكية هرمية ثلاثية الطبقات (Core/Distribution/Access) باستخدام أجهزة Cisco وVPN من النوع Hub-and-Spoke.",
      "صممت بنية عالية التوافر تستهدف وقت تشغيل 99.95% بدمج ISPs مزدوجة ومفاتيح ومسارات متكررة.",
      "حسّنت أداء الشبكة لتطبيقات المهام الحيوية بتصميم سرعة عمود فقري 10 Gbps وسياسات QoS لأولوية VoIP والفيديو.",
      "نفّذت استراتيجية أمان متعددة الطبقات تشمل جدران حماية محيطية وتقسيم VLAN صارم والمصادقة متعددة العوامل.",
    ],
    link: { url: "https://docs.google.com/document/d/1JJ_T-ITZSjNQaZGzfjyNFNU85kaZnSvR/edit?pli=1", label: "View Full Report", labelAr: "عرض التقرير الكامل" },
  },
  {
    title: "Unity Game Development", titleAr: "تطوير لعبة Unity",
    description: "Action game built with Unity and C#. Features zombie AI, collision detection, scoring system, and polished UI.",
    descriptionAr: "لعبة حركية مبنية بـ Unity وC# مع ذكاء اصطناعي وكشف تصادم ونظام نقاط.",
    tags: ["Game Dev", "Unity"], tagColor: "purple", icon: "🎯",
    skills: ["Unity", "C#", "Game Design", "AI Behaviors"],
    gradient: "linear-gradient(135deg, rgba(129,140,248,0.12) 0%, rgba(10,15,30,0.95) 100%)",
    iconBg: "rgba(129,140,248,0.15)", screenshot: unityGameImg,
    bullets: [
      "Designed and developed an interactive game using Unity and C#, implementing gameplay mechanics, player controls, and interactive UI.",
      "Implemented basic AI behaviors, collision detection, and scoring system to enhance player experience.",
      "Tested and debugged the game to ensure smooth performance and a polished user experience.",
    ],
    bulletsAr: [
      "صممت وطورت لعبة تفاعلية باستخدام Unity وC#، مع تنفيذ ميكانيكيات اللعب وتحكم اللاعب وواجهة مستخدم تفاعلية.",
      "نفّذت سلوكيات AI الأساسية وكشف التصادم ونظام التسجيل لتحسين تجربة اللاعب.",
      "اختبرت اللعبة وأصلحت الأخطاء لضمان أداء سلس وتجربة مستخدم مصقولة.",
    ],
    link: { url: "https://drive.google.com/file/d/126JLXttt4jxcUoKdxKEUcipytzfDK1UQ/view", label: "View Game", labelAr: "عرض اللعبة" },
  },
  {
    title: "Uniclass Scheduler", titleAr: "يونيكلاس شيدولر",
    description: "Automated university timetabling system solving an NP-hard constraint-satisfaction problem using Google OR-Tools CP-SAT, generating conflict-free schedules in seconds.",
    descriptionAr: "نظام جدولة جامعي آلي يحل مسألة إشباع القيود NP-Hard باستخدام Google OR-Tools، ينتج جداول زمنية خالية من التعارضات في ثوانٍ.",
    tags: ["Full-Stack", "AI/OR"], tagColor: "blue", icon: "🗓️",
    skills: ["FastAPI", "React 19", "TypeScript", "PostgreSQL", "Google OR-Tools", "JWT"],
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(10,15,30,0.95) 100%)",
    iconBg: "rgba(99,102,241,0.18)", screenshot: uniclassImg,
    bullets: [
      "Built a full-stack university timetabling system that solves an NP-hard constraint-satisfaction problem using Google OR-Tools CP-SAT solver, generating conflict-free schedules in seconds for realistic university datasets.",
      "Designed a Python FastAPI REST API with JWT authentication and role-based access control, backed by a PostgreSQL relational database with a clean ORM layer.",
      "Developed a React 19 + TypeScript frontend with an interactive weekly schedule grid, manual-edit capability, and unscheduled-section conflict resolution suggestions for administrators.",
      "Delivered multi-format schedule export (PDF, DOCX, Excel) and automated handling of hard constraints including room capacity, instructor availability, and time-slot uniqueness.",
    ],
    bulletsAr: [
      "بنيت نظام جدولة جامعي متكامل يحل مسألة إشباع القيود NP-Hard باستخدام محرك Google OR-Tools CP-SAT، ينتج جداول خالية من التعارضات في ثوانٍ.",
      "صممت واجهة برمجية Python FastAPI مع مصادقة JWT وتحكم في الوصول قائم على الأدوار، مدعومة بقاعدة بيانات PostgreSQL.",
      "طورت واجهة أمامية بـ React 19 وTypeScript تتضمن شبكة جدول أسبوعي تفاعلية وإمكانية التعديل اليدوي واقتراحات لحل التعارضات.",
      "وفّرت تصدير الجدول بصيغ متعددة (PDF وDOCX وExcel) مع معالجة آلية للقيود الصارمة كسعة القاعات وتوافر المدرسين وفرادة الفترات الزمنية.",
    ],
    link: { url: `${import.meta.env.BASE_URL}Uniclass_Scheduler_Report.pdf`, label: "Read Report", labelAr: "قراءة التقرير" },
  },
  {
    title: "Web Development Projects", titleAr: "مشاريع تطوير الويب",
    description: "Dynamic e-commerce prototype (BigBack Grocery) with login, user tracking, shopping cart, cookies, and session management.",
    descriptionAr: "نموذج تجارة إلكترونية (BigBack للبقالة) مع تسجيل دخول وسلة تسوق وإدارة جلسات.",
    tags: ["Web Dev", "E-Commerce"], tagColor: "green", icon: "💻",
    skills: ["HTML5", "CSS3", "JavaScript", "SQL"],
    gradient: "linear-gradient(135deg, rgba(52,211,153,0.12) 0%, rgba(10,15,30,0.95) 100%)",
    iconBg: "rgba(52,211,153,0.15)", screenshot: webDevImg,
    bullets: [
      "Developed dynamic and responsive web applications using HTML, CSS, JavaScript, and XML.",
      "Designed user-friendly interfaces and implemented interactive features to enhance user experience.",
      "Built an e-commerce prototype with login, user tracking, and shopping cart functionality.",
      "Implemented cookies and session management to deliver a personalized user experience.",
      "Utilized structured data management and front-end integration techniques for seamless performance.",
    ],
    bulletsAr: [
      "طورت تطبيقات ويب ديناميكية ومستجيبة باستخدام HTML وCSS وJavaScript وXML.",
      "صممت واجهات سهلة الاستخدام ونفّذت ميزات تفاعلية لتحسين تجربة المستخدم.",
      "بنيت نموذج تجارة إلكترونية مع تسجيل الدخول وتتبع المستخدم ووظيفة عربة التسوق.",
      "نفّذت ملفات تعريف الارتباط وإدارة الجلسات لتقديم تجربة مستخدم مخصصة.",
      "استخدمت تقنيات إدارة البيانات المنظمة وتكامل الواجهة الأمامية لأداء سلس.",
    ],
  },
];

/* ─────────────────────────────────────────────
   PROJECT DETAIL MODAL
───────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { lang } = useLang();
  const bullets = lang === "ar" ? project.bulletsAr : project.bullets;
  const title = lang === "ar" ? project.titleAr : project.title;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem", animation: "reveal-up 0.3s ease forwards",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{
        background: "rgba(10,15,30,0.98)", border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px", maxWidth: "680px", width: "100%",
        maxHeight: "88vh", overflowY: "auto",
        boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
      }}>
        {/* Image */}
        <div style={{ position: "relative" }}>
          <img src={project.screenshot} alt={title}
            style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: "24px 24px 0 0" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.95) 100%)", borderRadius: "24px 24px 0 0" }} />
          <button onClick={onClose}
            style={{
              position: "absolute", top: 16, right: 16,
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", cursor: "pointer", fontSize: "18px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>×</button>
          <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tags.map((t) => (<span key={t} className={`tag tag-${project.tagColor}`}>{t}</span>))}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "2rem" }}>
          <h2 style={{ color: "white", fontWeight: 700, fontSize: "1.35rem", marginBottom: "1.5rem", lineHeight: 1.3 }}>{title}</h2>

          {/* Skills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.5rem" }}>
            {project.skills.map((s) => (
              <span key={s} style={{ fontSize: "0.75rem", padding: "4px 12px", borderRadius: 8, fontFamily: "monospace",
                background: "rgba(255,255,255,0.07)", color: "hsl(215 20% 70%)", border: "1px solid rgba(255,255,255,0.1)" }}>{s}</span>
            ))}
          </div>

          {/* Bullet points */}
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: "1.5rem" }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#60a5fa", fontWeight: 700, marginTop: 2, flexShrink: 0 }}>→</span>
                <span style={{ color: "hsl(215 20% 65%)", fontSize: "0.875rem", lineHeight: 1.65 }}>{b}</span>
              </li>
            ))}
          </ul>

          {/* Link button */}
          {project.link && (
            <a href={project.link.url} target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-flex", textDecoration: "none", borderRadius: 12 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>{lang === "ar" ? project.link.labelAr : project.link.label}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TYPEWRITER
───────────────────────────────────────────── */
function TypewriterText({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const current = texts[textIndex % texts.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => { setDisplay(current.slice(0, charIndex + 1)); setCharIndex((c) => c + 1); }, 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2400);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => { setDisplay(current.slice(0, charIndex - 1)); setCharIndex((c) => c - 1); }, 32);
      } else {
        setDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span>
      {display}
      <span className="inline-block w-0.5 h-[0.9em] ml-1 align-middle"
        style={{ background: "#60a5fa", animation: "glow-pulse 0.8s ease-in-out infinite", borderRadius: "1px" }} />
    </span>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CAROUSEL
───────────────────────────────────────────── */
function ProjectCarousel({ onReadMore }: { onReadMore: (p: Project) => void }) {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const go = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => dir === "right" ? (c + 1) % projects.length : (c - 1 + projects.length) % projects.length);
      setAnimating(false);
    }, 320);
  };

  const swipe = useSwipe(() => go("right"), () => go("left"));
  const p = projects[current];
  const prev = projects[(current - 1 + projects.length) % projects.length];
  const next = projects[(current + 1) % projects.length];
  const ptitle = (proj: Project) => lang === "ar" ? proj.titleAr : proj.title;
  const pdesc = (proj: Project) => lang === "ar" ? proj.descriptionAr : proj.description;
  const readMoreLabel = lang === "ar" ? "اقرأ أكثر" : "Read More";

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm font-mono" style={{ color: "hsl(215 20% 45%)" }}>
          {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > current ? "right" : "left"); setCurrent(i); }}
              className="transition-all duration-300"
              style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "4px",
                background: i === current ? "#60a5fa" : "rgba(255,255,255,0.18)", border: "none", cursor: "pointer" }} />
          ))}
        </div>
      </div>

      <div className="relative flex gap-5 items-stretch justify-center" {...swipe}>
        <button onClick={() => go("left")} aria-label="Previous"
          className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(96,165,250,0.15)"; el.style.borderColor = "rgba(96,165,250,0.5)"; el.style.color = "#60a5fa"; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.color = "rgba(255,255,255,0.7)"; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        {/* prev ghost */}
        <div className="hidden lg:block w-52 flex-shrink-0 opacity-30 scale-95 origin-right transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => go("left")} style={{ background: prev.gradient, border: "1px solid rgba(255,255,255,0.06)", minHeight: 320 }}>
          <div style={{ height: 160, overflow: "hidden" }}><img src={prev.screenshot} alt={ptitle(prev)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div className="p-4"><p className="text-white font-semibold text-sm line-clamp-2">{ptitle(prev)}</p></div>
        </div>

        {/* main card */}
        <div className={`flex-1 max-w-xl project-card transition-all duration-300 ${animating ? (direction === "right" ? "opacity-0 translate-x-8" : "opacity-0 -translate-x-8") : "opacity-100 translate-x-0"}`}>
          <div className="relative overflow-hidden" style={{ height: 220 }}>
            <img src={p.screenshot} alt={ptitle(p)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(8,12,24,0.85) 100%)" }} />
            <div className="absolute top-3 right-3 flex gap-2 flex-wrap justify-end">
              {p.tags.map((t) => (<span key={t} className={`tag tag-${p.tagColor}`}>{t}</span>))}
            </div>
          </div>
          <div className="p-7">
            <h3 className="text-white font-bold text-xl mb-3">{ptitle(p)}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(215 20% 60%)" }}>{pdesc(p)}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.skills.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-lg font-mono"
                  style={{ background: "rgba(255,255,255,0.07)", color: "hsl(215 20% 70%)", border: "1px solid rgba(255,255,255,0.08)" }}>{s}</span>
              ))}
            </div>
            <button onClick={() => onReadMore(p)}
              className="btn-ghost text-sm py-2 px-4"
              style={{ borderRadius: 10, display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span>{readMoreLabel}</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* next ghost */}
        <div className="hidden lg:block w-52 flex-shrink-0 opacity-30 scale-95 origin-left transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => go("right")} style={{ background: next.gradient, border: "1px solid rgba(255,255,255,0.06)", minHeight: 320 }}>
          <div style={{ height: 160, overflow: "hidden" }}><img src={next.screenshot} alt={ptitle(next)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div className="p-4"><p className="text-white font-semibold text-sm line-clamp-2">{ptitle(next)}</p></div>
        </div>

        <button onClick={() => go("right")} aria-label="Next"
          className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(96,165,250,0.15)"; el.style.borderColor = "rgba(96,165,250,0.5)"; el.style.color = "#60a5fa"; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.color = "rgba(255,255,255,0.7)"; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      <div className="flex gap-3 justify-center mt-6 lg:hidden">
        <button className="carousel-btn" onClick={() => go("left")}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="carousel-btn" onClick={() => go("right")}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   EXPERIENCE CAROUSEL
───────────────────────────────────────────── */
const internship = {
  title: "e& (Etisalat) — Bidayati Internship", titleAr: "e& (اتصالات) — برنامج بدايتي",
  org: "Network Automation & Orchestration Department", orgAr: "قسم أتمتة الشبكات والتنسيق",
  date: "May 2026 – Present",
  color: "#e8001c", icon: "🏢",
  bullets: [
    "Building an AI Security Incident Classification & Response Assistant using Transformer models and Python automation.",
    "Designing an automated remediation recommendation engine mapping threats to response playbooks by severity.",
    "Automating network diagnostics workflows and structured incident reporting within e&'s enterprise infrastructure.",
  ],
  bulletsAr: [
    "بناء مساعد ذكي لتصنيف الحوادث الأمنية والاستجابة لها باستخدام نماذج Transformer وأتمتة Python.",
    "تصميم محرك توصية للمعالجة التلقائية يربط التهديدات بدليل الاستجابة حسب مستوى الخطورة.",
    "أتمتة سير عمل تشخيص الشبكات وإعداد تقارير الحوادث المنظّمة ضمن بنية e& التحتية.",
  ],
};

function InternshipModal({ onClose }: { onClose: () => void }) {
  const { lang } = useLang();
  const bullets = lang === "ar" ? internship.bulletsAr : internship.bullets;
  const title = lang === "ar" ? internship.titleAr : internship.title;
  const org = lang === "ar" ? internship.orgAr : internship.org;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem", animation: "reveal-up 0.3s ease forwards",
      }}>
      <div style={{
        background: "#fff", borderRadius: "24px", maxWidth: "640px", width: "100%",
        maxHeight: "88vh", overflowY: "auto",
        boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
      }}>
        <div style={{
          background: "#e8001c",
          borderRadius: "24px 24px 0 0", padding: "2rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.07,
            backgroundImage: "radial-gradient(circle at 80% 20%, #fff 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={etisalatLogo} alt="e& logo"
                style={{ width: "64px", height: "64px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              <div>
                <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", lineHeight: 1.3 }}>{title}</h2>
                <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.8rem", marginTop: "4px" }}>{org}</p>
              </div>
            </div>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer",
              color: "#fff", fontSize: "1rem", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>✕</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            <span style={{ background: "rgba(255,255,255,0.18)", color: "#fff", borderRadius: "999px", padding: "3px 12px", fontSize: "0.72rem", fontWeight: 600 }}>{internship.date}</span>
            <span style={{ background: "rgba(255,255,255,0.18)", color: "#fff", borderRadius: "999px", padding: "3px 12px", fontSize: "0.72rem", fontWeight: 600 }}>Network Automation & Orchestration</span>
            <span style={{ background: "rgba(255,255,255,0.18)", color: "#fff", borderRadius: "999px", padding: "3px 12px", fontSize: "0.72rem", fontWeight: 600 }}>AI / ML</span>
          </div>
        </div>
        <div style={{ padding: "2rem", background: "#fff" }}>
          <ul className="flex flex-col gap-5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#1a1a2e" }}>
                <span style={{ color: "#e8001c", marginTop: "3px", flexShrink: 0, fontSize: "1rem", fontWeight: 700 }}>▸</span>
                <span style={{ color: "#333" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function InternshipCard() {
  const { lang } = useLang();
  const bullets = lang === "ar" ? internship.bulletsAr : internship.bullets;
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <InternshipModal onClose={() => setOpen(false)} />}
      <div style={{
        borderRadius: "20px", overflow: "hidden",
        border: "1px solid rgba(232,0,28,0.25)",
        boxShadow: "0 4px 32px rgba(232,0,28,0.08)",
      }}>
        <div style={{
          background: "#e8001c", padding: "1.5rem 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.08,
            backgroundImage: "radial-gradient(circle at 90% 10%, #fff 0%, transparent 55%)",
            pointerEvents: "none",
          }} />
          <div className="flex items-center gap-4">
            <img src={etisalatLogo} alt="e& logo"
              style={{ width: "52px", height: "52px", objectFit: "contain", filter: "brightness(0) invert(1)", flexShrink: 0 }} />
            <div>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.3 }}>
                {lang === "ar" ? internship.titleAr : internship.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.78rem", marginTop: "2px" }}>
                {lang === "ar" ? internship.orgAr : internship.org}
              </p>
            </div>
          </div>
          <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", borderRadius: "999px", padding: "4px 14px", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap" }}>
            {internship.date}
          </span>
        </div>
        <div style={{ background: "rgba(10,15,30,0.97)", padding: "1.5rem 2rem" }}>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(215 20% 62%)" }}>
            <span style={{ color: "#e8001c", fontWeight: 600 }}>▸ </span>{bullets[0]}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="text-sm font-semibold flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            style={{ color: "#e8001c", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            {lang === "ar" ? "اقرأ المزيد" : "Read More"}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}

const activities = [
  {
    title: "GITEX Global 2025", titleAr: "جيتكس جلوبال 2025",
    org: "World's Largest Tech & Startup Show", orgAr: "أكبر معرض تقني وشركات ناشئة في العالم",
    date: "Oct 2025",
    desc: "Explored AI, cloud, and robotics innovations. Engaged with professionals from e&, Huawei, Cisco, Microsoft, AWS, and NVIDIA.",
    descAr: "استكشفت ابتكارات الذكاء الاصطناعي والسحابة والروبوتات. تواصلت مع متخصصين من e& وHuawei وCisco وMicrosoft وAWS وNVIDIA.",
    color: "#f97316", icon: "🌍",
    logo: gitexLogo, logoBg: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 100%)", logoFilter: "none",
  },
  {
    title: "Digital Dubai Visit", titleAr: "زيارة Digital Dubai",
    org: "Digital Dubai", orgAr: "Digital Dubai",
    date: "2025",
    desc: "Deep dive into DubaiNow, UAE Pass, and government cybersecurity strategy. Learned about AI in public services and deepfake threat awareness.",
    descAr: "تعمقت في DubaiNow وUAE Pass واستراتيجية الأمن السيبراني الحكومية. تعلمت عن الذكاء الاصطناعي في الخدمات العامة.",
    color: "#0284c7", icon: "🏙️",
    logo: digitalDubaiLogo, logoBg: "#ffffff", logoFilter: "none",
  },
  {
    title: "Coding Competitions & CTF", titleAr: "مسابقات البرمجة و CTF",
    org: "Ajman University × Dubai Police Academy", orgAr: "جامعة عجمان × أكاديمية شرطة دبي",
    date: "2024–2025",
    desc: "Participated in 2 coding battles, 1 hackathon, and 1 CTF — invited to join alongside IT-active peers. No AI, no internet, just raw problem-solving.",
    descAr: "شاركت في مسابقتي برمجة وهاكاثون وتحدي CTF — بدعوة من الأقران. بدون ذكاء اصطناعي أو إنترنت.",
    color: "#4ade80", icon: "⚔️",
    logo: null, logoBg: "linear-gradient(135deg, #0a1f0a 0%, #071507 100%)", logoFilter: "none",
  },
];

/* ─────────────────────────────────────────────
   EDUCATION CAROUSEL
───────────────────────────────────────────── */
const eduItems = [
  {
    logo: ajmanUniversityLogo, logoFilter: "none",
    headerBg: "#ffffff",
    dateTagBg: "rgba(0,0,0,0.08)", dateTagColor: "#333",
    accentColor: "#b8860b", date: "2022 – Jan 2027", titleKey: "eduAU" as const,
  },
  {
    logo: maarifaSchoolLogo, logoFilter: "none",
    headerBg: "#ffffff",
    dateTagBg: "rgba(0,0,0,0.08)", dateTagColor: "#333",
    accentColor: "#16a34a", date: "2014 – 2022", titleKey: "eduSchool" as const,
  },
];

function EducationCarousel() {
  const { lang, t } = useLang();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("right");

  const go = (d: "left" | "right") => {
    if (animating) return;
    setDir(d);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => d === "right" ? (c + 1) % eduItems.length : (c - 1 + eduItems.length) % eduItems.length);
      setAnimating(false);
    }, 300);
  };

  const swipe = useSwipe(() => go("right"), () => go("left"));
  const item = eduItems[current];
  const data = t[item.titleKey];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-mono" style={{ color: "hsl(215 20% 45%)" }}>
          {String(current + 1).padStart(2, "0")} / {String(eduItems.length).padStart(2, "0")}
        </span>
        <div className="flex gap-3">
          <button className="carousel-btn" onClick={() => go("left")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="carousel-btn" onClick={() => go("right")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${animating ? (dir === "right" ? "opacity-0 translate-x-6" : "opacity-0 -translate-x-6") : "opacity-100 translate-x-0"}`}
        style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 32px rgba(0,0,0,0.3)" }}
        {...swipe}>
        <div style={{ background: item.headerBg, padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <img src={item.logo} alt={data.title} style={{ height: "56px", maxWidth: "180px", objectFit: "contain", flexShrink: 0 }} />
          <span style={{ background: item.dateTagBg, color: item.dateTagColor, borderRadius: "999px", padding: "4px 14px", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap" }}>{item.date}</span>
        </div>
        <div style={{ background: "rgba(10,15,30,0.97)", padding: "1.5rem 2rem" }}>
          <h3 className="text-white font-bold text-lg mb-1">{data.title}</h3>
          <p className="text-sm font-semibold mb-3" style={{ color: item.accentColor }}>{data.deg}</p>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(215 20% 60%)" }}>{data.desc}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-5 justify-center">
        {eduItems.map((it, i) => (
          <button key={i} onClick={() => { setDir(i > current ? "right" : "left"); setCurrent(i); }}
            className="transition-all duration-300"
            style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "4px",
              background: i === current ? it.accentColor : "rgba(255,255,255,0.18)", border: "none", cursor: "pointer" }} />
        ))}
      </div>
    </div>
  );
}

function ActivitiesCarousel() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("right");

  const go = (d: "left" | "right") => {
    if (animating) return;
    setDir(d);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => d === "right" ? (c + 1) % activities.length : (c - 1 + activities.length) % activities.length);
      setAnimating(false);
    }, 300);
  };

  const swipe = useSwipe(() => go("right"), () => go("left"));
  const act = activities[current];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-mono" style={{ color: "hsl(215 20% 45%)" }}>
          {String(current + 1).padStart(2, "0")} / {String(activities.length).padStart(2, "0")}
        </span>
        <div className="flex gap-3">
          <button className="carousel-btn" onClick={() => go("left")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="carousel-btn" onClick={() => go("right")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${animating ? (dir === "right" ? "opacity-0 translate-x-6" : "opacity-0 -translate-x-6") : "opacity-100 translate-x-0"}`}
        style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 32px rgba(0,0,0,0.3)" }}
        {...swipe}>
        {(() => {
          const isLight = act.logoBg === "#ffffff";
          return (
            <div style={{ background: act.logoBg, padding: "1.25rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", borderBottom: isLight ? "1px solid rgba(0,0,0,0.08)" : "none", position: "relative", overflow: "hidden" }}>
              {!isLight && <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle at 90% 10%, #fff 0%, transparent 55%)", pointerEvents: "none" }} />}
              {act.logo
                ? <img src={act.logo} alt={act.title} style={{ height: "44px", maxWidth: "180px", objectFit: "contain", flexShrink: 0 }} />
                : <div className="flex items-center gap-3"><span style={{ fontSize: "2rem" }}>{act.icon}</span><span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{lang === "ar" ? act.titleAr : act.title}</span></div>
              }
              <span style={{ background: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)", color: isLight ? "#333" : "#fff", borderRadius: "999px", padding: "4px 14px", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap" }}>{act.date}</span>
            </div>
          );
        })()}
        <div style={{ background: "rgba(10,15,30,0.97)", padding: "1.5rem 2rem" }}>
          {act.logo && <h3 className="text-white font-bold text-lg mb-1">{lang === "ar" ? act.titleAr : act.title}</h3>}
          <p className="text-sm font-semibold mb-3" style={{ color: act.color }}>{lang === "ar" ? act.orgAr : act.org}</p>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(215 20% 60%)" }}>{lang === "ar" ? act.descAr : act.desc}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-5 justify-center">
        {activities.map((_, i) => (
          <button key={i} onClick={() => { setDir(i > current ? "right" : "left"); setCurrent(i); }}
            className="transition-all duration-300"
            style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "4px",
              background: i === current ? "#60a5fa" : "rgba(255,255,255,0.18)", border: "none", cursor: "pointer" }} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function Home() {
  const { t, lang } = useLang();
  const [cursorPos, setCursorPos] = useState({ x: -9999, y: -9999 });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<"email" | "failed" | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(null);

    if (!isValidEmail(formData.email)) {
      setSendError("email");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setSendError("failed");
    }
    setSending(false);
  };

  return (
    <>
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      {/* ── HERO ─────────────────────────────── */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
        <GreetingBadge />
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-6" style={{ opacity: 0, animation: "reveal-up 0.7s 0.1s ease forwards" }}>
            <span className="tag tag-blue px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block mr-1 animate-pulse" />
              {t.badge}
            </span>
          </div>

          <h1 className="hero-title mb-4" style={{ opacity: 0, animation: "reveal-up 0.8s 0.2s ease forwards" }}>
            <span className="text-gradient-white">Mohamad</span>
            <br />
            <span className="text-shimmer">Elyoussef</span>
          </h1>

          <div className="text-base md:text-lg font-mono mb-7"
            style={{ color: "hsl(215 20% 55%)", opacity: 0, animation: "reveal-up 0.8s 0.4s ease forwards" }}>
            <TypewriterText texts={t.typewriter} />
          </div>

          <p className="text-sm max-w-lg leading-relaxed mb-10"
            style={{ color: "hsl(215 20% 50%)", opacity: 0, animation: "reveal-up 0.8s 0.55s ease forwards" }}>
            {t.heroPara}
          </p>

          <div className="flex flex-wrap gap-4" style={{ opacity: 0, animation: "reveal-up 0.8s 0.7s ease forwards" }}>
            <a
              href={`${import.meta.env.BASE_URL}Mohamad_Elyoussef_CV.pdf`}
              download="Mohamad_Elyoussef_CV.pdf"
              className="btn-primary cv-download-btn"
              style={{ position: "relative", overflow: "hidden", whiteSpace: "nowrap" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cv-download-icon">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{t.downloadCV}</span>
            </a>
            <a href="#contact" className="btn-ghost"><span>{t.getInTouch}</span></a>
            <a href="https://www.linkedin.com/in/mohamadelyoussef/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal><h2 className="section-title mb-14">{t.aboutTitle}</h2></SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <SectionReveal delay={80}>
              <div className="space-y-5">
                <p className="text-base leading-relaxed" style={{ color: "hsl(215 20% 65%)" }}>
                  {t.aboutP1((txt) => <span className="text-blue-400 font-semibold">{txt}</span>)}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "hsl(215 20% 65%)" }}>{t.aboutP2}</p>
                <p className="text-base leading-relaxed" style={{ color: "hsl(215 20% 65%)" }}>{t.aboutP3}</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={180}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: "7", color: "#a78bfa", icon: "💻" },
                  { label: t.stats.events, value: "5+", color: "#4ade80", icon: "🎯" },
                  { label: t.stats.year, value: lang === "ar" ? "الرابعة" : "4th", color: "#fb923c", icon: "🎓" },
                  { label: t.stats.competitions, value: "3+", color: "#60a5fa", icon: "⚔️" },
                ].map((stat) => (
                  <div key={stat.label} className="glass glass-hover rounded-2xl p-6 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm" style={{ color: "hsl(215 20% 50%)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="section-title mb-3">{t.skillsTitle}</h2>
            <p className="mb-14 text-sm" style={{ color: "hsl(215 20% 48%)" }}>{t.skillsHint}</p>
          </SectionReveal>
          <SectionReveal delay={80}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "hsl(215 20% 40%)" }}>{t.skillsCat1}</p>
            <div className="flex flex-wrap gap-4 mb-14">{languages.map((s) => <SkillIcon key={s.name} {...s} />)}</div>
          </SectionReveal>
          <SectionReveal delay={160}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "hsl(215 20% 40%)" }}>{t.skillsCat2}</p>
            <div className="flex flex-wrap gap-4 mb-14">{securityTools.map((s) => <SkillIcon key={s.name} {...s} />)}</div>
          </SectionReveal>
          <SectionReveal delay={240}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "hsl(215 20% 40%)" }}>{t.skillsCat3}</p>
            <div className="flex flex-wrap gap-4">{platforms.map((s) => <SkillIcon key={s.name} {...s} />)}</div>
          </SectionReveal>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal><h2 className="section-title mb-14">{t.projectsTitle}</h2></SectionReveal>
          <SectionReveal delay={80}><ProjectCarousel onReadMore={setSelectedProject} /></SectionReveal>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────── */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal><h2 className="section-title mb-14">{t.experienceTitle}</h2></SectionReveal>
          <SectionReveal delay={80}><InternshipCard /></SectionReveal>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────── */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal><h2 className="section-title mb-14">{t.educationTitle}</h2></SectionReveal>
          <SectionReveal delay={80}><EducationCarousel /></SectionReveal>
        </div>
      </section>

      {/* ── EVENTS & ACTIVITIES ───────────────── */}
      <section id="activities" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal><h2 className="section-title mb-14">{t.activitiesTitle}</h2></SectionReveal>
          <SectionReveal delay={80}><ActivitiesCarousel /></SectionReveal>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────── */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal><h2 className="section-title mb-14">{t.certsTitle}</h2></SectionReveal>
          <SectionReveal delay={80}><CertCarousel /></SectionReveal>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h2 className="section-title mb-4">{t.contactTitle}</h2>
            <p className="text-sm mb-14" style={{ color: "hsl(215 20% 50%)" }}>{t.contactSubtitle}</p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social icon buttons — desktop bigger */}
            <SectionReveal delay={80}>
              <div className="flex gap-5 items-center">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/mohamadelyoussef/" target="_blank" rel="noopener noreferrer"
                  title="LinkedIn"
                  style={{
                    width: "clamp(64px, 8vw, 88px)", height: "clamp(64px, 8vw, 88px)",
                    borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(10,102,194,0.12)", border: "1px solid rgba(10,102,194,0.32)",
                    transition: "all 0.22s ease", cursor: "pointer", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(10,102,194,0.25)"; el.style.borderColor = "rgba(10,102,194,0.65)"; el.style.transform = "translateY(-4px) scale(1.06)"; el.style.boxShadow = "0 12px 32px rgba(10,102,194,0.28)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(10,102,194,0.12)"; el.style.borderColor = "rgba(10,102,194,0.32)"; el.style.transform = "translateY(0) scale(1)"; el.style.boxShadow = "none"; }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#0a66c2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/MohamadElyoussef" target="_blank" rel="noopener noreferrer"
                  title="GitHub"
                  style={{
                    width: "clamp(64px, 8vw, 88px)", height: "clamp(64px, 8vw, 88px)",
                    borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)",
                    transition: "all 0.22s ease", cursor: "pointer", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.14)"; el.style.borderColor = "rgba(255,255,255,0.35)"; el.style.transform = "translateY(-4px) scale(1.06)"; el.style.boxShadow = "0 12px 32px rgba(255,255,255,0.08)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.06)"; el.style.borderColor = "rgba(255,255,255,0.14)"; el.style.transform = "translateY(0) scale(1)"; el.style.boxShadow = "none"; }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </SectionReveal>

            {/* Contact form */}
            <SectionReveal delay={160}>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "hsl(215 20% 58%)" }}>{t.formName}</label>
                  <input type="text" className="contact-input" placeholder={t.formPlaceholderName} required
                    value={formData.name} onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "hsl(215 20% 58%)" }}>{t.formEmail}</label>
                  <input type="email" className="contact-input" placeholder={t.formPlaceholderEmail} required
                    value={formData.email}
                    onChange={(e) => { setFormData((f) => ({ ...f, email: e.target.value })); setSendError(null); }}
                    style={{ borderColor: sendError === "email" ? "rgba(248,113,113,0.6)" : undefined }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "hsl(215 20% 58%)" }}>{t.formMessage}</label>
                  <textarea className="contact-input resize-none" rows={5} placeholder={t.formPlaceholderMessage} required
                    value={formData.message} onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))} />
                </div>
                {sendError === "email" && (
                  <p className="text-xs" style={{ color: "#f87171" }}>
                    ⚠ Please enter a valid email address (e.g. name@example.com).
                  </p>
                )}
                {sendError === "failed" && (
                  <p className="text-xs" style={{ color: "#f87171" }}>
                    Failed to send — please try again or reach out on LinkedIn.
                  </p>
                )}
                <button type="submit" disabled={sending}
                  className="btn-primary w-full justify-center"
                  style={{ borderRadius: "12px", background: sent ? "linear-gradient(135deg,#4ade80,#22c55e)" : undefined, transition: "background 0.4s ease", opacity: sending ? 0.7 : 1 }}>
                  <span>{sending ? "Sending..." : sent ? t.sentBtn : t.sendBtn}</span>
                  {sent
                    ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                    : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>}
                </button>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer className="py-10 px-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <p className="text-sm font-mono" style={{ color: "hsl(215 20% 38%)" }}>{t.footer}</p>
        </div>
      </footer>
    </>
  );
}
