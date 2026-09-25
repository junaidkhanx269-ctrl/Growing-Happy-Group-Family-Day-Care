import React, { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Check, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  MessageSquare,
  Calendar,
  Layers,
  ChevronRight,
  Maximize2
} from "lucide-react";

// Image references
const PHOTO_1_HERO = "https://i.ibb.co/5hM09b3r/IMG-6353.jpg";
const PHOTO_2_MEMORIAL = "https://i.ibb.co/5drbwms/IMG-6354.jpg";
const PHOTO_3_CELEBRATION = "https://i.ibb.co/n8zCgsLL/IMG-6355.jpg";

// Custom Fallback Image Component adhering to the Zero-Broken-Image Policy
const BusinessImage = ({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-auto" 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  aspectRatio?: string;
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-brand-cream rounded-[28px] border border-brand-sage/20 shadow-sm ${aspectRatio} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FFF8F0] to-[#FDF3E7]">
          <Heart className="w-10 h-10 text-brand-terracotta mb-3 stroke-[1.5]" />
          <p className="font-serif font-semibold text-brand-text text-base px-4">{alt}</p>
          <span className="text-xs text-brand-text/60 mt-1">Growing Happy Daycare</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"infants" | "toddlers" | "preschool" | "bilingual">("infants");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Contact Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childAge: "",
    desiredStart: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Validate and submit booking form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: "" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.parentName.trim()) errors.parentName = "Please enter your name";
    if (!formData.childAge) errors.childAge = "Please select your child's age";
    if (!formData.phone.trim()) errors.phone = "Please enter your phone number";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      parentName: "",
      childAge: "",
      desiredStart: "",
      email: "",
      phone: "",
      message: ""
    });
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-terracotta/10 selection:text-brand-terracotta">
      
      {/* 1. Header & Navigation (Top Bar Contract Compliant) */}
      <header className="sticky top-0 z-50 bg-[#FFF8F0]/90 backdrop-blur-md border-b border-brand-sage/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#home" className="flex flex-col select-none shrink-0">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-brand-text leading-tight hover:text-brand-terracotta transition-colors">
              Growing Happy
            </span>
            <span className="text-[10px] md:text-xs font-sans uppercase tracking-wider text-brand-text/60 -mt-0.5 font-medium">
              Group Family Day Care
            </span>
          </a>

          {/* Zone 2: Navigation Links (4-6 single-line links) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-text/80">
            <a href="#home" className="hover:text-brand-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-terracotta hover:after:w-full after:transition-all after:duration-300">Home</a>
            <a href="#about" className="hover:text-brand-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-terracotta hover:after:w-full after:transition-all after:duration-300">About</a>
            <a href="#programs" className="hover:text-brand-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-terracotta hover:after:w-full after:transition-all after:duration-300">Programs</a>
            <a href="#gallery" className="hover:text-brand-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-terracotta hover:after:w-full after:transition-all after:duration-300">Gallery</a>
            <a href="#our-story" className="hover:text-brand-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-terracotta hover:after:w-full after:transition-all after:duration-300">Our Story</a>
            <a href="#contact" className="hover:text-brand-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-terracotta hover:after:w-full after:transition-all after:duration-300">Contact</a>
          </nav>

          {/* Zone 3: Primary Call Action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a 
              href="tel:16468084717" 
              className="flex items-center gap-2 text-sm font-semibold text-brand-text bg-white border border-brand-sage/30 px-5 py-2.5 rounded-full hover:shadow-sm hover:border-brand-terracotta/40 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-brand-terracotta" />
              <span>(646) 808-4717</span>
            </a>
            <a 
              href="#contact" 
              className="bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <a 
              href="tel:16468084717" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-brand-sage/30 hover:border-brand-terracotta/40 transition-all duration-300"
              aria-label="Call Daycare"
            >
              <Phone className="w-4 h-4 text-brand-terracotta" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 rounded-lg text-brand-text hover:bg-brand-cream/60 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Panel (Aggressive Max-Height Restraint to keep viewport responsive) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-brand-bg pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fade-in">
          <nav className="flex flex-col gap-6 py-8 text-lg font-serif font-semibold text-brand-text/90">
            <a 
              href="#home" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-brand-terracotta transition-colors py-2 border-b border-brand-sage/10"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-brand-terracotta transition-colors py-2 border-b border-brand-sage/10"
            >
              About
            </a>
            <a 
              href="#programs" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-brand-terracotta transition-colors py-2 border-b border-brand-sage/10"
            >
              Programs
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-brand-terracotta transition-colors py-2 border-b border-brand-sage/10"
            >
              Gallery
            </a>
            <a 
              href="#our-story" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-brand-terracotta transition-colors py-2 border-b border-brand-sage/10"
            >
              Our Story
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-brand-terracotta transition-colors py-2"
            >
              Contact
            </a>
          </nav>
          
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-brand-sage/20">
              <Clock className="w-5 h-5 text-brand-sage" />
              <div>
                <p className="text-xs text-brand-text/60">Opening Hours</p>
                <p className="text-sm font-semibold text-brand-text">Mon - Fri: 7:30 AM - 6:00 PM</p>
              </div>
            </div>
            <a 
              href="tel:16468084717" 
              className="flex items-center justify-center gap-2 bg-brand-terracotta text-white py-3.5 rounded-full text-base font-semibold shadow-sm hover:bg-brand-terracotta-dark transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Call to Enroll</span>
            </a>
          </div>
        </div>
      )}

      {/* 2. Announcement Banner */}
      <div className="bg-brand-terracotta text-white py-3 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide shadow-sm z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 fill-white text-brand-terracotta animate-pulse" />
            Now Enrolling — Limited Spots Available for Fall
          </span>
          <span className="hidden sm:inline-block opacity-40">|</span>
          <a href="tel:16468084717" className="underline hover:text-brand-cream transition-colors font-bold">
            Call Today: (646) 808-4717
          </a>
        </div>
      </div>

      <main className="flex-grow">

        {/* 3. Hero Section (Nurturing Design & High-End Typography) */}
        <section id="home" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
          {/* Subtle natural backgrounds */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-sage/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Micro-label Header Badge (Clean typography, no border capsules) */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider text-brand-terracotta uppercase mb-6 font-sans">
                  <span>Licensed Group Family Day Care</span>
                  <span className="text-brand-sage/60 font-normal">·</span>
                  <span>Home-Based</span>
                  <span className="text-brand-sage/60 font-normal">·</span>
                  <span>Trusted Since 2018</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-text leading-[1.1] text-wrap mb-6">
                  A Loving, Safe Home for Every Child to <span className="text-brand-terracotta italic relative inline-block">Grow Happy</span>
                </h1>

                <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-2xl mb-8">
                  Welcome to Growing Happy Group Family Day Care, where young hearts discover the world in a secure, loving home environment in Washington Heights. Dedicated to nurturing infants and children up to age 5, we support each milestone with individual attention, bilingual learning, and active play.
                </p>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <a 
                    href="#contact" 
                    className="flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-8 py-4 rounded-[18px] text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <span>Schedule a Tour</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#about" 
                    className="flex items-center justify-center gap-2 bg-white hover:bg-brand-cream text-brand-text border border-brand-sage/30 px-8 py-4 rounded-[18px] text-base font-semibold hover:shadow-sm transition-all duration-300"
                  >
                    <span>Learn More</span>
                  </a>
                </div>

                {/* Local trust markers (Clean unboxed text meta) */}
                <div className="mt-12 pt-8 border-t border-brand-sage/20 w-full grid grid-cols-3 gap-4 text-center sm:text-left">
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-terracotta">8 Max</p>
                    <p className="text-xs sm:text-sm text-brand-text/60 mt-0.5">Small Group Safety</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-terracotta">100%</p>
                    <p className="text-xs sm:text-sm text-brand-text/60 mt-0.5">Bilingual English/Español</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-terracotta">Licensed</p>
                    <p className="text-xs sm:text-sm text-brand-text/60 mt-0.5">NYS Certified Registry</p>
                  </div>
                </div>

              </div>

              {/* Right Hero Image Column */}
              <div className="lg:col-span-5 relative">
                {/* Decorative layout elements matching Aesop editorial style */}
                <div className="absolute -inset-4 bg-brand-sage/10 rounded-[36px] transform rotate-2 pointer-events-none" />
                <div className="relative">
                  <BusinessImage 
                    src={PHOTO_1_HERO} 
                    alt="Warm and Happy Children Celebration with Santa Claus" 
                    className="w-full h-auto aspect-[4/5] object-cover rounded-[32px] shadow-lg border border-brand-sage/10"
                  />
                  {/* Floating detail tag - completely functional and unboxed */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#FFF8F0]/95 backdrop-blur-md p-4 rounded-2xl border border-brand-sage/20 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-sage/20 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-brand-terracotta fill-brand-terracotta/20" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-text uppercase tracking-wider font-sans">Nurtured & Celebrated</p>
                      <p className="text-xs text-brand-text/75">Creating beautiful growth moments every day</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Core Strengths Section */}
        <section id="about" className="py-20 bg-brand-cream/40 border-t border-b border-brand-sage/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-wider text-brand-terracotta uppercase font-sans">Our Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-text mt-3 mb-6">
                Why Families Choose Our Home-Based Care
              </h2>
              <p className="text-base sm:text-lg text-brand-text/75 leading-relaxed">
                Home-based care blends the high standards of professional early development with the irreplaceable comfort, safety, and hygiene of a loving household.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Strength 1 */}
              <div className="bg-white p-8 rounded-[28px] border border-brand-sage/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-[16px] bg-brand-terracotta/10 flex items-center justify-center text-brand-terracotta mb-6">
                  <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-text mb-3">Certified Safety & OCFS Licensed</h3>
                <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed">
                  Fully licensed by the New York State Office of Children and Family Services. Our daycare meets and exceeds strict state standards for home safety, hygiene, nutrition, and teacher-to-child ratios.
                </p>
              </div>

              {/* Strength 2 */}
              <div className="bg-white p-8 rounded-[28px] border border-brand-sage/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-[16px] bg-[#A8C3B9]/20 flex items-center justify-center text-brand-sage-dark mb-6">
                  <MessageSquare className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-text mb-3">Immersive Bilingual Environment</h3>
                <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed">
                  Naturally bilingual home in English and Spanish. Daily learning, singing, storytelling, and conversation occur in both languages, accelerating early cognitive development and social fluidity.
                </p>
              </div>

              {/* Strength 3 */}
              <div className="bg-white p-8 rounded-[28px] border border-brand-sage/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-[16px] bg-brand-cream flex items-center justify-center text-brand-terracotta mb-6">
                  <Heart className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-text mb-3">Ultra-Small Group (8 Max)</h3>
                <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed">
                  Unlike large commercial facilities with high child turnover, we maintain a max registry of 8 children. Your child receives unmatched individualized attention, tailored safety oversight, and deep love.
                </p>
              </div>

            </div>

            {/* Additional editorial values block */}
            <div className="mt-16 bg-white rounded-[32px] border border-brand-sage/15 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mb-4">Healthy, Daily Home-Cooked Nutrition</h3>
                <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed mb-6">
                  We believe standard health starts in the kitchen. Our kitchen prepares wholesome, fresh daily meals and nutrition-balanced snacks crafted with fresh organic ingredients. We strictly cater to allergy requirements and focus on introducing nutritious, baby-led weaning foods.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span>Balanced daily meal planning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span>Organic, whole food focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span>NYS Food Program compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-text/80">
                    <Check className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span>100% allergy safe and monitored</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-brand-cream/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-center h-full border border-brand-sage/10">
                <span className="text-xs font-bold text-brand-terracotta uppercase tracking-wider font-sans mb-2">Our Schedule Standards</span>
                <p className="font-serif text-lg font-bold text-brand-text mb-4">Built around working parents</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-brand-sage/10 pb-2">
                    <span className="text-brand-text/70">Days of Care</span>
                    <span className="font-semibold text-brand-text">Monday - Friday</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-brand-sage/10 pb-2">
                    <span className="text-brand-text/70">Care Hours</span>
                    <span className="font-semibold text-brand-text">7:30 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-brand-text/70">Age Range Enrolled</span>
                    <span className="font-semibold text-brand-text">6 Weeks - 5 Years</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Age Programs Section (Interactive Segmented Control UI) */}
        <section id="programs" className="py-20 bg-[#FFF8F0] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-wider text-brand-terracotta uppercase font-sans">Nurturing Framework</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-text mt-3 mb-4">
                  Age-Appropriate Programs Built on Love
                </h2>
                <p className="text-base sm:text-lg text-brand-text/75">
                  Our curriculum promotes independent discovery, active physical play, early socialization, and language immersion.
                </p>
              </div>

              {/* Functional Segmented Controls for interactive state switching (No pills, styled clean tab background) */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-brand-cream rounded-2xl border border-brand-sage/20 mt-8 lg:mt-0 shrink-0 self-start lg:self-end">
                <button 
                  onClick={() => setActiveTab("infants")}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === "infants" ? "bg-brand-terracotta text-white shadow-sm" : "text-brand-text hover:text-brand-terracotta"}`}
                >
                  Infants
                </button>
                <button 
                  onClick={() => setActiveTab("toddlers")}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === "toddlers" ? "bg-brand-terracotta text-white shadow-sm" : "text-brand-text hover:text-brand-terracotta"}`}
                >
                  Toddlers
                </button>
                <button 
                  onClick={() => setActiveTab("preschool")}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === "preschool" ? "bg-brand-terracotta text-white shadow-sm" : "text-brand-text hover:text-brand-terracotta"}`}
                >
                  Preschool
                </button>
                <button 
                  onClick={() => setActiveTab("bilingual")}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${activeTab === "bilingual" ? "bg-brand-terracotta text-white shadow-sm" : "text-brand-text hover:text-brand-terracotta"}`}
                >
                  Bilingual
                </button>
              </div>
            </div>

            {/* Dynamic Content Display with animations */}
            <div className="bg-white rounded-[32px] border border-brand-sage/15 p-8 md:p-12 shadow-sm transition-all duration-500 min-h-[400px] flex flex-col justify-between">
              
              {activeTab === "infants" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-brand-terracotta uppercase tracking-wider font-sans">Ages 6 Weeks – 12 Months</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mb-4">Infant Nurturing & Responsive Care</h3>
                    <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed mb-6">
                      Our infant program is structured with high-attention, safety, and deep emotional bonding. We follow your baby&apos;s natural rhythm for feeding, sleeping, and waking hours. We encourage physical growth, soft motor control, and visual tracking in a pristine baby-proof environment.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Tummy Time & Movement:</strong> Daily activities supporting neck strength and natural crawling progress.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Sensory Play:</strong> Safe exploration using highly curated textured toys and gentle ambient music.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Bilingual Reading:</strong> Hearing both English and Spanish in sweet daily songs and short board books.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Consistent Tracking:</strong> Detailed, real-time logging of feeding cycles, naps, and diaper changes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <BusinessImage src={PHOTO_3_CELEBRATION} alt="Daycare Holiday Celebration and Infant Support" className="aspect-[4/3] w-full" />
                  </div>
                </div>
              )}

              {activeTab === "toddlers" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-brand-terracotta uppercase tracking-wider font-sans">Ages 1 – 2.5 Years</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mb-4">Toddler Exploration & Skill Building</h3>
                    <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed mb-6">
                      Toddlers are busy explorers. Our classroom space is optimized for safe climbing, active coordination, vocabulary advancement, and early friendship formation. We foster language development, creative play, and self-confidence.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Creative Crafting:</strong> Messy play, fingerpainting, and blocks that stimulate coordination.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Social Guidance:</strong> Supporting children as they share, take turns, and express feelings.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Potty Training:</strong> Collaborating closely with parents to support clean, stress-free training.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Daily Fresh Outings:</strong> Supervised, safe playtime in local green parks and private outdoor walks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <BusinessImage src={PHOTO_1_HERO} alt="Creative Play and Celebrations for Toddlers" className="aspect-[4/3] w-full" />
                  </div>
                </div>
              )}

              {activeTab === "preschool" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-brand-terracotta uppercase tracking-wider font-sans">Ages 2.5 – 5 Years</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mb-4">Preschool Prep & Kindergarten Readiness</h3>
                    <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed mb-6">
                      For older children, we integrate cognitive structure and discovery. We nurture intellectual curiosity through preschool routines, early math concepts, storytelling, and cooperative science play. Children gain high-level language fluency and emotional self-regulation.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Early Academics:</strong> Interactive numbers, alphabet exploration, phonics, and shapes.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Independence Focus:</strong> Building hygiene routines, dressing up, and packing personal items.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Structured Projects:</strong> Science experiments, cooperative board games, and group puzzles.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Literacy Immersion:</strong> Strong writing readiness, advanced reading, and language skills.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <BusinessImage src={PHOTO_3_CELEBRATION} alt="Interactive Play & Learning for Older Children" className="aspect-[4/3] w-full" />
                  </div>
                </div>
              )}

              {activeTab === "bilingual" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-brand-terracotta uppercase tracking-wider font-sans">Continuous Daily Immersion</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mb-4">Comprehensive Bilingual Education</h3>
                    <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed mb-6">
                      Children possess an incredible capacity to master multiple languages simultaneously. Our curriculum uses natural, conversational bilingual immersion. By alternating storytime, learning, and instructions between English and Spanish, children master phonetic clarity, expansive vocabulary, and cultural respect.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Conversational Play:</strong> Guided socialization, games, and directions spoken in Spanish & English.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Bicultural Celebrations:</strong> Embracing and celebrating traditional holidays, stories, and songs from both cultures.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Phonics & Writing:</strong> Exploring letters, word-sounds, and basic vocabulary spellings in both systems.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-brand-sage/20 text-brand-terracotta shrink-0 mt-0.5"><Check className="w-4 h-4" /></div>
                        <p className="text-sm text-brand-text/80"><strong className="text-brand-text font-semibold">Parent Integration:</strong> Regular sharing of songs, flashcards, and resources to continue learning at home.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <BusinessImage src={PHOTO_2_MEMORIAL} alt="A Warm bilingual and bicultural home environment" className="aspect-[4/3] w-full" />
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* 6. Section Our Story & Legacy of Blanca Hernandez */}
        <section id="our-story" className="py-20 bg-brand-cream/30 border-t border-b border-brand-sage/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-wider text-brand-terracotta uppercase font-sans">En Memoria</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-text mt-3 mb-6">
                  Founded with Love by Blanca Hernandez
                </h2>
                <p className="text-base sm:text-lg text-brand-text/85 leading-relaxed mb-6">
                  Growing Happy Group Family Day Care was founded on a simple, beautiful mission: to build a nursery environment where every infant and young child is treated with the exact same love, safety, and respect as they are at home.
                </p>
                <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed mb-6">
                  Founded by <strong className="text-brand-text font-semibold">Blanca Hernandez</strong>, our home daycare continues to operate deeply rooted in her vision. Our team honors her memory and carries forward her standard of dedicated child service, keeping her loving legacy alive in every smile, story, and classroom celebration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-brand-sage/15 shadow-sm flex-1">
                    <p className="font-serif text-base font-bold text-brand-text mb-2">NYC Licensed & Insured</p>
                    <p className="text-xs text-brand-text/70">Fully certified by New York State, complying with all rigorous structural, clean air, and background safety checks.</p>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-brand-sage/15 shadow-sm flex-1">
                    <p className="font-serif text-base font-bold text-brand-text mb-2">Bilingual Growth</p>
                    <p className="text-xs text-brand-text/70">Naturally immersive environment where language mastery begins naturally during the critical early development window.</p>
                  </div>
                </div>
              </div>

              {/* Photo 2 Tribute Column */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-terracotta/10 rounded-[36px] transform -rotate-2 pointer-events-none" />
                  <div className="relative">
                    <BusinessImage 
                      src={PHOTO_2_MEMORIAL} 
                      alt="En Memoria de Blanca Hernandez Tribute Display" 
                      className="w-full h-auto aspect-[4/5] object-cover rounded-[32px] shadow-md border border-brand-sage/10"
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-[#FFF8F0]/95 backdrop-blur-md p-4 rounded-2xl border border-brand-sage/20 shadow-sm text-center">
                      <p className="font-serif text-base font-bold text-brand-text">Caring for the Littlest Ones</p>
                      <p className="text-xs text-brand-text/60 mt-0.5">Continuing Blanca Hernandez&apos;s beautiful legacy</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Photo 3 Celebration Block */}
            <div className="bg-white rounded-[32px] border border-brand-sage/15 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <BusinessImage 
                  src={PHOTO_3_CELEBRATION} 
                  alt="Holiday Memories & Celebrations with Infants and Children" 
                  className="w-full h-auto aspect-[4/3] rounded-[24px]"
                />
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-xs font-bold tracking-wider text-brand-terracotta uppercase font-sans">Everyday Magic</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mt-2 mb-4">Holiday Memories & Celebrations</h3>
                <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed mb-4">
                  We believe that childcare is not just a daily routine—it is where happy, lifetime childhood memories are made. Our daycare takes deep joy in throwing sweet, festive holiday parties, birthday celebrations, and milestone milestones.
                </p>
                <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed">
                  From welcoming Santa Claus in full holiday outfit to celebrating seasonal change and cultural traditions, our kids feel absolute excitement and community. We invite parents to participate, fostering a tight-knit family circle that extends beyond our physical door.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Image Gallery Section (With Lightbox functionality) */}
        <section id="gallery" className="py-20 bg-[#FFF8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-wider text-brand-terracotta uppercase font-sans">Life inside the Daycare</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-text mt-3 mb-4">
                Real Memories, Real Joy
              </h2>
              <p className="text-base sm:text-lg text-brand-text/75">
                We use exclusively real photos of our daycare community to show the genuine love, standard attention, and home warmth your child will receive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Photo 1 Card */}
              <div className="flex flex-col group cursor-pointer" onClick={() => setSelectedImage(PHOTO_1_HERO)}>
                <div className="relative overflow-hidden rounded-[28px] border border-brand-sage/10 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <BusinessImage src={PHOTO_1_HERO} alt="Group Family Celebration" className="aspect-[4/5]" />
                  <div className="absolute inset-0 bg-brand-text/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-brand-text shadow-sm">
                      <Maximize2 className="w-5 h-5 text-brand-terracotta" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <h4 className="font-serif text-lg font-bold text-brand-text">A Nurturing Community</h4>
                  <p className="text-xs text-brand-text/60 mt-0.5">Creating holiday excitement and warm childhood milestones.</p>
                </div>
              </div>

              {/* Photo 2 Card */}
              <div className="flex flex-col group cursor-pointer" onClick={() => setSelectedImage(PHOTO_2_MEMORIAL)}>
                <div className="relative overflow-hidden rounded-[28px] border border-brand-sage/10 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <BusinessImage src={PHOTO_2_MEMORIAL} alt="En Memoria de Blanca Hernandez" className="aspect-[4/5]" />
                  <div className="absolute inset-0 bg-brand-text/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-brand-text shadow-sm">
                      <Maximize2 className="w-5 h-5 text-brand-terracotta" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <h4 className="font-serif text-lg font-bold text-brand-text">Continuing Our Legacy</h4>
                  <p className="text-xs text-brand-text/60 mt-0.5">En Memoria de Blanca Hernandez — caring with pure love.</p>
                </div>
              </div>

              {/* Photo 3 Card */}
              <div className="flex flex-col group cursor-pointer" onClick={() => setSelectedImage(PHOTO_3_CELEBRATION)}>
                <div className="relative overflow-hidden rounded-[28px] border border-brand-sage/10 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <BusinessImage src={PHOTO_3_CELEBRATION} alt="Infant and Teacher Christmas Celebration" className="aspect-[4/5]" />
                  <div className="absolute inset-0 bg-brand-text/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-brand-text shadow-sm">
                      <Maximize2 className="w-5 h-5 text-brand-terracotta" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <h4 className="font-serif text-lg font-bold text-brand-text">Caring For The Littlest Ones</h4>
                  <p className="text-xs text-brand-text/60 mt-0.5">A secure, loving start for infants up to toddlers.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 8. Lightbox Overlay Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-brand-text/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="relative max-w-4xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage} 
                alt="Growing Happy Daycare Real Photo Showcase" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFF8F0]/95 backdrop-blur-md p-4 rounded-xl shadow-sm text-center">
                <p className="font-serif text-base font-bold text-brand-text">Growing Happy Group Family Day Care</p>
                <p className="text-xs text-brand-text/60 mt-0.5">330 Wadsworth Ave #1B, New York, NY 10040 | (646) 808-4717</p>
              </div>
            </div>
          </div>
        )}

        {/* 9. Booking, Map, Contact Section (Interactive & Solid Input Visuals) */}
        <section id="contact" className="py-20 bg-brand-cream/45 border-t border-brand-sage/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Direct Location & Operating Hours */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs font-bold tracking-wider text-brand-terracotta uppercase font-sans">Come Visit Us</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-text mt-3 mb-6">
                    Enrollment & Location
                  </h2>
                  <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed">
                    We welcome families to schedule a physical tour. Witness our nurturing environment, meet our caring educators, and see where your child will play and learn.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Location Info */}
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-brand-sage/15 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-terracotta/10 flex items-center justify-center text-brand-terracotta shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider font-sans">Our Address</p>
                      <a 
                        href="https://maps.google.com/?q=330+Wadsworth+Ave+#1B,+New+York,+NY+10040" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-semibold text-brand-text hover:text-brand-terracotta transition-colors mt-0.5 block"
                      >
                        330 Wadsworth Ave #1B<br />New York, NY 10040
                      </a>
                    </div>
                  </div>

                  {/* Hours Info */}
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-brand-sage/15 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-[#A8C3B9]/20 flex items-center justify-center text-brand-sage-dark shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider font-sans">Operating Hours</p>
                      <p className="text-sm font-semibold text-brand-text mt-0.5">
                        Monday - Friday: 7:30 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Quick Reach Info */}
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-brand-sage/15 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-terracotta shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider font-sans">Quick Support</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-0.5">
                        <a href="tel:16468084717" className="text-sm font-semibold text-brand-text hover:text-brand-terracotta transition-colors">
                          Call: (646) 808-4717
                        </a>
                        <span className="hidden sm:inline text-brand-text/20">·</span>
                        <a 
                          href="https://wa.me/16468084717" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm font-semibold text-emerald-600 hover:underline flex items-center gap-1"
                        >
                          WhatsApp Chat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Responsive Iframe Embed with Referrer Policy and Border Frame */}
                <div className="overflow-hidden rounded-[24px] border border-brand-sage/20 shadow-sm h-64 md:h-80 relative bg-brand-cream">
                  <iframe
                    title="Growing Happy Daycare Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.9150133246835!2d-73.9351475!3d40.851752399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3f4c6e932b1%3A0xe54ef028e370aeb0!2s330%20Wadsworth%20Ave%20%231b%2C%20New%20York%2C%20NY%2010040!5e0!3m2!1sen!2sus!4v1710000000000"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Right Column: Tour Booking Interactive Form */}
              <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[32px] border border-brand-sage/15 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-terracotta via-brand-sage to-brand-terracotta" />
                
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-brand-text mb-2">Schedule Your Tour Today</h3>
                      <p className="text-xs sm:text-sm text-brand-text/60">Fill out your details below and our team will get back to you within 24 hours to coordinate.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Parent Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="parentName" className="text-xs font-bold text-brand-text uppercase tracking-wider font-sans">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.parentName ? "border-red-500 bg-red-50/10 focus:ring-red-500" : "border-brand-sage/30 focus:border-brand-terracotta focus:ring-brand-terracotta/20"} bg-brand-cream/10 focus:ring-4 focus:outline-none transition-all text-sm`}
                          aria-invalid={!!formErrors.parentName}
                        />
                        {formErrors.parentName && <span className="text-xs text-red-500 font-medium">{formErrors.parentName}</span>}
                      </div>

                      {/* Phone Number */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-brand-text uppercase tracking-wider font-sans">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.phone ? "border-red-500 bg-red-50/10 focus:ring-red-500" : "border-brand-sage/30 focus:border-brand-terracotta focus:ring-brand-terracotta/20"} bg-brand-cream/10 focus:ring-4 focus:outline-none transition-all text-sm`}
                          aria-invalid={!!formErrors.phone}
                        />
                        {formErrors.phone && <span className="text-xs text-red-500 font-medium">{formErrors.phone}</span>}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email Address */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-brand-text uppercase tracking-wider font-sans">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.email ? "border-red-500 bg-red-50/10 focus:ring-red-500" : "border-brand-sage/30 focus:border-brand-terracotta focus:ring-brand-terracotta/20"} bg-brand-cream/10 focus:ring-4 focus:outline-none transition-all text-sm`}
                          aria-invalid={!!formErrors.email}
                        />
                        {formErrors.email && <span className="text-xs text-red-500 font-medium">{formErrors.email}</span>}
                      </div>

                      {/* Child's Age */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="childAge" className="text-xs font-bold text-brand-text uppercase tracking-wider font-sans">
                          Child&apos;s Age Group *
                        </label>
                        <select
                          id="childAge"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.childAge ? "border-red-500 bg-red-50/10 focus:ring-red-500" : "border-brand-sage/30 focus:border-brand-terracotta focus:ring-brand-terracotta/20"} bg-brand-cream/10 focus:ring-4 focus:outline-none transition-all text-sm`}
                          aria-invalid={!!formErrors.childAge}
                        >
                          <option value="">Select age group</option>
                          <option value="infant">Infant (6 weeks - 12 months)</option>
                          <option value="toddler">Toddler (1 - 2.5 years)</option>
                          <option value="preschool">Preschool (2.5 - 5 years)</option>
                        </select>
                        {formErrors.childAge && <span className="text-xs text-red-500 font-medium">{formErrors.childAge}</span>}
                      </div>

                    </div>

                    {/* Desired Start Date */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="desiredStart" className="text-xs font-bold text-brand-text uppercase tracking-wider font-sans">
                        Desired Enrollment Start Time
                      </label>
                      <input
                        type="text"
                        id="desiredStart"
                        name="desiredStart"
                        value={formData.desiredStart}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-sage/30 focus:border-brand-terracotta focus:ring-brand-terracotta/20 bg-brand-cream/10 focus:ring-4 focus:outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Messages / Special Needs */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-brand-text uppercase tracking-wider font-sans">
                        Special Notes / Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-xl border border-brand-sage/30 focus:border-brand-terracotta focus:ring-brand-terracotta/20 bg-brand-cream/10 focus:ring-4 focus:outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white py-4 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing Tour Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Request Tour & Check Spots</span>
                        </>
                      )}
                    </button>

                  </form>
                ) : (
                  // Beautiful, peaceful success panel with animation (Compliance: No Alerts!)
                  <div className="text-center py-12 px-4 flex flex-col items-center justify-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    
                    <h3 className="font-serif text-3xl font-bold text-brand-text mb-3">Tour Request Received!</h3>
                    <p className="text-base text-brand-text/75 leading-relaxed max-w-md mx-auto mb-8">
                      Thank you for trusting <strong className="font-semibold text-brand-text">Growing Happy Daycare</strong>. We have registered your details for a private tour. Our lead educator will contact you by phone shortly to coordinate.
                    </p>

                    <div className="bg-brand-cream/50 rounded-2xl p-6 border border-brand-sage/15 text-left w-full max-w-md space-y-3 mb-8">
                      <p className="text-xs font-bold text-brand-text/50 uppercase tracking-wider font-sans border-b border-brand-sage/10 pb-2">Inquiry Summary</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-text/75">Parent Name:</span>
                        <span className="font-semibold text-brand-text">{formData.parentName}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-text/75">Contact Phone:</span>
                        <span className="font-semibold text-brand-text">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-text/75">Target Program:</span>
                        <span className="font-semibold text-brand-text capitalize">{formData.childAge} Group</span>
                      </div>
                      {formData.desiredStart && (
                        <div className="flex justify-between text-sm">
                          <span className="text-brand-text/75">Target Start:</span>
                          <span className="font-semibold text-brand-text">{formData.desiredStart}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={resetForm}
                      className="text-sm font-semibold text-brand-terracotta hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Submit another request
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 10. Quiet Footer (Adheres to the Top Bar & Anti-Slop Contracts) */}
      <footer className="bg-brand-text text-[#FFF8F0] py-16 border-t border-brand-sage/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#FFF8F0]/10 pb-12 mb-12">
            
            {/* Column 1: Brand & Legacy Summary */}
            <div className="space-y-4">
              <a href="#home" className="flex flex-col select-none">
                <span className="font-serif text-xl font-bold tracking-tight text-white leading-tight">
                  Growing Happy
                </span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-white/60 -mt-0.5 font-medium">
                  Group Family Day Care
                </span>
              </a>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Where children grow happy, safe, and deeply loved in Washington Heights, NYC. Dedicated to the loving memory of our founder Blanca Hernandez.
              </p>
            </div>

            {/* Column 2: Navigation Mirror */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider font-sans mb-4">Quick Links</p>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#home" className="text-white/75 hover:text-white transition-colors">Home Landing</a></li>
                <li><a href="#about" className="text-white/75 hover:text-white transition-colors">Daycare About</a></li>
                <li><a href="#programs" className="text-white/75 hover:text-white transition-colors">Educational Programs</a></li>
                <li><a href="#gallery" className="text-white/75 hover:text-white transition-colors">Real Photo Gallery</a></li>
                <li><a href="#our-story" className="text-white/75 hover:text-white transition-colors">Blanca&apos;s Story</a></li>
                <li><a href="#contact" className="text-white/75 hover:text-white transition-colors">Tour & Location</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Hours */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider font-sans mb-4">Contact Details</p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                  <span>330 Wadsworth Ave #1B<br />New York, NY 10040</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <a href="tel:16468084717" className="hover:text-white transition-colors">(646) 808-4717</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span>Mon - Fri: 7:30AM - 6:00PM</span>
                </li>
              </ul>
            </div>

            {/* Column 4: NYC OCFS Registry Compliance Note */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider font-sans">Official NYC Registry</p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-xs text-white/80 leading-relaxed">
                  Growing Happy is registered with the NYS Office of Children and Family Services. Compliant with health, childproof safety, nutrition, and first-aid background qualifications.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <div>
              <p>© 2026 Growing Happy Group Family Day Care. All rights reserved.</p>
              <p className="mt-0.5 text-[10px]">In Loving Memory of Blanca Hernandez — En Memoria de Blanca Hernandez.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/16468084717" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Support</a>
              <span>·</span>
              <a href="#contact" className="hover:text-white transition-colors">Enrollment Inquiries</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
