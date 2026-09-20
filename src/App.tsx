import { useMemo, useState } from "react";

type Product = {
  name: string;
  category: string;
  description: string;
  icon: string;
  tone: string;
};

const products: Product[] = [
  { name: "Premium Agarbatti", category: "Agarbatti", description: "Long-lasting fragrance with a smooth, calming aroma.", icon: "✦", tone: "rose" },
  { name: "Pure Kapoor", category: "Kapoor", description: "Clean-burning camphor for daily worship and rituals.", icon: "◈", tone: "ivory" },
  { name: "Sandal Dhoop", category: "Dhoop", description: "Warm sandalwood notes for a peaceful atmosphere.", icon: "◒", tone: "amber" },
  { name: "Natural Loban", category: "Loban", description: "Traditional fragrance with a rich, earthy character.", icon: "✺", tone: "brown" },
  { name: "Pooja Essentials", category: "Pooja", description: "Thoughtfully selected essentials for your daily pooja.", icon: "ॐ", tone: "gold" },
  { name: "Rose Agarbatti", category: "Agarbatti", description: "Soft floral fragrance inspired by fresh rose petals.", icon: "❀", tone: "pink" },
];

const categories = [
  { name: "Agarbatti", icon: "♨", sub: "For everyday purity" },
  { name: "Kapoor", icon: "◈", sub: "For divine worship" },
  { name: "Dhoop", icon: "◒", sub: "For lasting fragrance" },
  { name: "Loban", icon: "✺", sub: "For positive vibes" },
  { name: "Pooja Essentials", icon: "ॐ", sub: "Complete pooja needs" },
];

function App() {
  const [active, setActive] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const filtered = useMemo(
    () => active === "All" ? products : products.filter((p) => p.category === active),
    [active]
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="topbar">Pure • Natural • Divine <span>Crafted for moments of peace.</span></div>

      <header className="header">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Mangalam home">
          <span className="brand-mark">✦</span>
          <span>
            <strong>Mangalam</strong>
            <small>Fragrance for a Better Tomorrow</small>
          </span>
        </button>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <button className="active" onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About Us</button>
          <button onClick={() => scrollTo("products")}>Products</button>
          <button onClick={() => scrollTo("why-us")}>Why Mangalam</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">⌕</button>
          <button className="cart-btn" aria-label="Cart">Cart <span>0</span></button>
          <button className="primary small" onClick={() => setEnquiryOpen(true)}>Enquire Now</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">PURE • NATURAL • DIVINE</p>
            <h1>Bring Home<br /><em>Positive Energy</em></h1>
            <p className="hero-text">
              Premium quality agarbatti, kapoor and pooja essentials designed
              to make everyday moments feel peaceful and meaningful.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo("products")}>Explore Products <span>→</span></button>
              <button className="text-btn" onClick={() => scrollTo("about")}>Our Story</button>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative pooja arrangement">
            <div className="halo"></div>
            <div className="temple-line">ॐ</div>
            <div className="incense i1"></div><div className="incense i2"></div><div className="incense i3"></div>
            <div className="smoke s1"></div><div className="smoke s2"></div>
            <div className="diya">◉</div>
            <div className="bowl">◆</div>
            <div className="flowers">✿  ✿  ✿</div>
          </div>
        </section>

        <section className="category-strip">
          {categories.map((c) => (
            <button key={c.name} className="category" onClick={() => { setActive(c.name); scrollTo("products"); }}>
              <span className="category-icon">{c.icon}</span>
              <strong>{c.name}</strong>
              <small>{c.sub}</small>
            </button>
          ))}
        </section>

        <section id="products" className="section products-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR COLLECTION</p>
              <h2>Popular Products</h2>
            </div>
            <div className="filters">
              {["All", ...categories.map((c) => c.name)].map((f) => (
                <button key={f} className={active === f ? "filter active" : "filter"} onClick={() => setActive(f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filtered.map((p) => (
              <article className="product-card" key={p.name}>
                <div className={`product-art ${p.tone}`}>
                  <span className="product-symbol">{p.icon}</span>
                  <span className="product-label">MANGALAM</span>
                </div>
                <div className="product-info">
                  <span className="product-category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <button className="outline" onClick={() => setEnquiryOpen(true)}>Enquire Now <span>→</span></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about section">
          <div className="about-art">
            <div className="about-glow"></div>
            <div className="about-diya">◉</div>
            <div className="about-incense">|||||</div>
            <div className="about-flowers">✿ ✿ ✿</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">ABOUT MANGALAM</p>
            <h2>Tradition Meets Purity</h2>
            <p>
              Mangalam is a concept brand created for premium fragrance and pooja
              essentials. The visual direction combines Indian tradition with a
              clean, contemporary shopping experience.
            </p>
            <p>
              This demo uses sample products and placeholder content. Final
              branding, product photography, descriptions and business details
              can be added after requirements are confirmed.
            </p>
            <button className="primary" onClick={() => scrollTo("why-us")}>Why Choose Us <span>→</span></button>
          </div>
        </section>

        <section id="why-us" className="section why-section">
          <div className="section-heading centered">
            <p className="eyebrow">THE MANGALAM PROMISE</p>
            <h2>Made for Meaningful Moments</h2>
          </div>
          <div className="why-grid">
            {[
              ["✿", "Natural Ingredients", "Thoughtful product positioning focused on purity and everyday use."],
              ["◇", "Premium Quality", "A polished brand experience that can be adapted to your real products."],
              ["↗", "Wide Range", "A flexible catalogue structure for fragrances, pooja items and more."],
              ["✓", "Reliable Service", "Clear enquiry and contact flows designed for customer convenience."],
            ].map(([icon, title, text]) => (
              <div className="why-card" key={title}>
                <span>{icon}</span><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="eyebrow">DISCOVER THE DIFFERENCE</p>
            <h2>Let the Divine Fragrance<br />Fill Your Life</h2>
          </div>
          <button className="light-btn" onClick={() => setEnquiryOpen(true)}>Get in Touch <span>→</span></button>
        </section>

        <section id="contact" className="contact section">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>Let's build Mangalam together.</h2>
            <p>For the final website, add the business phone, email, address, WhatsApp number and social links here.</p>
          </div>
          <div className="contact-card">
            <div><span>☎</span><strong>+91 98765 43210</strong><small>Business enquiries</small></div>
            <div><span>✉</span><strong>info@mangalam.com</strong><small>Email us anytime</small></div>
            <div><span>⌖</span><strong>123 Spiritual Lane</strong><small>Chennai, Tamil Nadu</small></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><span className="brand-mark">✦</span><strong>Mangalam</strong><p>Fragrance for a Better Tomorrow</p></div>
        <div><h4>Quick Links</h4><button onClick={() => scrollTo("home")}>Home</button><button onClick={() => scrollTo("about")}>About Us</button><button onClick={() => scrollTo("products")}>Products</button><button onClick={() => scrollTo("contact")}>Contact</button></div>
        <div><h4>Our Products</h4><button onClick={() => {setActive("Agarbatti"); scrollTo("products")}}>Agarbatti</button><button onClick={() => {setActive("Kapoor"); scrollTo("products")}}>Kapoor</button><button onClick={() => {setActive("Dhoop"); scrollTo("products")}}>Dhoop</button><button onClick={() => {setActive("Loban"); scrollTo("products")}}>Loban</button></div>
        <div><h4>Demo Notice</h4><p>This is a concept demo for client review. Product images, logo, content and contact details are placeholders.</p></div>
        <div className="copyright">© 2026 Mangalam Concept Demo. Built for presentation purposes.</div>
      </footer>

      {enquiryOpen && (
        <div className="modal-backdrop" onClick={() => setEnquiryOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setEnquiryOpen(false)}>×</button>
            <p className="eyebrow">MANGALAM ENQUIRY</p>
            <h2>Tell us what you need.</h2>
            <input placeholder="Your name" />
            <input placeholder="Phone number" />
            <select defaultValue=""><option value="" disabled>Select a product</option>{categories.map(c => <option key={c.name}>{c.name}</option>)}</select>
            <textarea placeholder="Your message"></textarea>
            <button className="primary" onClick={() => { alert("Demo only — enquiry submission will be connected in the final project."); setEnquiryOpen(false); }}>Send Enquiry</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;