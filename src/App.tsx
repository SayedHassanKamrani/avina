import { FormEvent, ReactNode, useState } from 'react'
import facialImg from './assets/facial.jpg';
const images = {
  hero: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=90',
  botox: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85',
  filler: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85',
  skin: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=85',
  laser: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?auto=format&fit=crop&w=900&q=85',
  facial: facialImg,
  hifu: 'https://images.unsplash.com/photo-1614859324967-1ce35fffc7c9?auto=format&fit=crop&w=900&q=85',
  doctor1: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85',
  doctor2: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85',
  doctor3: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=85',
  before: 'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=1200&q=85',
  after: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1200&q=85',
}

type IconName =
  | 'arrow'
  | 'calendar'
  | 'check'
  | 'chevron'
  | 'clock'
  | 'doctor'
  | 'instagram'
  | 'location'
  | 'menu'
  | 'phone'
  | 'shield'
  | 'sparkle'
  | 'star'
  | 'technology'
  | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    doctor: <><path d="M8 3v4a4 4 0 0 0 8 0V3M12 11v3a6 6 0 0 0 6 6h1" /><circle cx="19" cy="17" r="2" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <path d="M5 4h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2A15 15 0 0 1 3 6c0-1 1-2 2-2Z" />,
    shield: <><path d="M12 3 4 6v5c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    sparkle: <><path d="m12 3 1.2 4.2L17 9l-3.8 1.8L12 15l-1.2-4.2L7 9l3.8-1.8L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15ZM5 3l.7 2.3L8 6l-2.3.7L5 9l-.7-2.3L2 6l2.3-.7L5 3Z" /></>,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
    technology: <><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 2v4M16 2v4M8 18v4M16 18v4M2 8h4M18 8h4M2 16h4M18 16h4M9 9h6v6H9z" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Button({ children, href = '#appointment', variant = 'gold', className = '' }: { children: ReactNode; href?: string; variant?: 'gold' | 'outline' | 'light'; className?: string }) {
  return <a href={href} className={`btn btn-${variant} ${className}`}>{children}</a>
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}>
    <span className="eyebrow"><i />{eyebrow}<i /></span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}

const services = [
  { name: 'بوتاکس', desc: 'رفع خطوط و حفظ حالت طبیعی چهره', image: images.botox, num: '۰۱' },
  { name: 'فیلر', desc: 'فرم‌دهی ظریف و بازگرداندن حجم طبیعی', image: images.filler, num: '۰۲' },
  { name: 'جوان‌سازی پوست', desc: 'درخشندگی و احیای عمیق بافت پوست', image: images.skin, num: '۰۳' },
  { name: 'لیزر موهای زائد', desc: 'تجربه پوستی لطیف با تکنولوژی روز', image: images.laser, num: '۰۴' },
  { name: 'پاکسازی پوست', desc: 'پاکسازی تخصصی متناسب با نوع پوست', image: images.facial, num: '۰۵' },
  { name: 'هایفوتراپی', desc: 'لیفت و جوان‌سازی بدون جراحی', image: images.hifu, num: '۰۶' },
]

const doctors = [
  { name: 'دکتر نازنین آریا', specialty: 'متخصص پوست، مو و زیبایی', experience: '۱۲ سال تجربه', image: images.doctor1 },
  { name: 'دکتر سارا فرهمند', specialty: 'پزشک زیبایی و جوان‌سازی', experience: '۹ سال تجربه', image: images.doctor2 },
  { name: 'دکتر الهام پارسا', specialty: 'متخصص لیزر و کانتورینگ', experience: '۸ سال تجربه', image: images.doctor3 },
]

const faqs = [
  { q: 'چطور می‌توانم برای مشاوره وقت رزرو کنم؟', a: 'از طریق فرم رزرو آنلاین، تماس تلفنی یا پیام در اینستاگرام می‌توانید زمان دلخواه خود را ثبت کنید. همکاران ما برای تأیید نهایی با شما تماس می‌گیرند.' },
  { q: 'آیا مشاوره اولیه قبل از خدمات ضروری است؟', a: 'بله، برای حفظ ایمنی و دستیابی به طبیعی‌ترین نتیجه، پزشک شرایط پوست و چهره شما را بررسی و برنامه درمانی اختصاصی پیشنهاد می‌کند.' },
  { q: 'مواد مصرفی کلینیک از چه برندهایی هستند؟', a: 'تنها از محصولات معتبر و دارای مجوز وزارت بهداشت استفاده می‌کنیم و مشخصات محصول پیش از انجام درمان به شما ارائه می‌شود.' },
  { q: 'ماندگاری بوتاکس و فیلر چقدر است؟', a: 'بسته به نوع محصول، ناحیه درمان و متابولیسم بدن متفاوت است؛ در جلسه مشاوره برآورد دقیق‌تری متناسب با شرایط شما ارائه خواهد شد.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [compare, setCompare] = useState(52)
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4500)
  }

  return <div dir="rtl" className="site-shell">
    <header className="header">
      <div className="container nav">
        <a className="logo" href="#top" aria-label="کلینیک زیبایی آوینا">
          <span className="logo-mark">A</span>
          <span><strong>آوینا</strong><small>کلینیک زیبایی</small></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#top" onClick={() => setMenuOpen(false)}>خانه</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>خدمات</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>نتایج درمان</a>
          <a href="#doctors" onClick={() => setMenuOpen(false)}>پزشکان</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>درباره ما</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>تماس</a>
        </nav>
        <div className="nav-actions">
          <a className="phone" href="tel:+982122334455"><Icon name="phone" size={18} /><span dir="ltr">۰۲۱ ۲۲۳۳ ۴۴۵۵</span></a>
          <Button>رزرو نوبت</Button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="نمایش منو"><Icon name={menuOpen ? 'x' : 'menu'} /></button>
        </div>
      </div>
    </header>

    <main>
      <section className="hero" id="top">
        <div className="hero-image"><img src={images.hero} alt="مراقبت حرفه‌ای زیبایی پوست" /><div className="hero-fade" /></div>
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-kicker"><Icon name="sparkle" size={17} /> زیبایی، با امضای شما</span>
            <h1>زیبایی طبیعی،<br /><em>اعتمادبه‌نفس ماندگار</em></h1>
            <p>در کلینیک آوینا، دانش پزشکی و هنر زیبایی در کنار هم قرار می‌گیرند تا بهترین نسخه از زیبایی طبیعی شما را آشکار کنند.</p>
            <div className="hero-buttons">
              <Button>رزرو مشاوره <Icon name="arrow" size={18} /></Button>
              <Button href="#services" variant="light">مشاهده خدمات</Button>
            </div>
            <div className="hero-trust">
              <div className="avatars"><img src={images.doctor1} alt="" /><img src={images.doctor2} alt="" /><img src={images.doctor3} alt="" /></div>
              <div><span className="stars">★★★★★</span><small>اعتماد بیش از ۲,۵۰۰ مراجعه‌کننده</small></div>
            </div>
          </div>
        </div>
        <div className="hero-note"><span>Avina</span><p>تجربه‌ای آرام، دقیق و کاملاً شخصی‌سازی‌شده</p></div>
        <a className="scroll-hint" href="#services"><span>کشف زیبایی</span><i /></a>
      </section>

      <section className="services section" id="services">
        <div className="container">
          <SectionHeading eyebrow="خدمات تخصصی" title="مراقبتی به ظرافت شما" description="هر درمان، پس از ارزیابی دقیق و با رویکردی اختصاصی برای حفظ هویت و زیبایی طبیعی چهره شما انجام می‌شود." />
          <div className="service-grid">
            {services.map((item) => <article className="service-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="service-overlay" />
              <span className="service-num">{item.num}</span>
              <div className="service-content"><h3>{item.name}</h3><p>{item.desc}</p><a href="#appointment" aria-label={`رزرو ${item.name}`}><Icon name="arrow" /></a></div>
            </article>)}
          </div>
          <Button variant="outline" href="#appointment" className="center-btn">مشاهده همه خدمات <Icon name="arrow" size={18} /></Button>
        </div>
      </section>

      <section className="why section" id="about">
        <div className="container why-grid">
          <div className="why-visual">
            <div className="arch-image"><img src={images.facial} alt="فضای آرام کلینیک آوینا" /></div>
            <div className="experience-seal"><strong>+۱۰</strong><span>سال تجربه<br />در زیبایی</span></div>
            <span className="outline-word">AVINA</span>
          </div>
          <div className="why-copy">
            <SectionHeading eyebrow="چرا آوینا؟" title="زیبایی شما، مسئولیت ماست" description="ما باور داریم نتیجه‌ای زیباست که طبیعی، ایمن و متناسب با ویژگی‌های منحصربه‌فرد شما باشد." />
            <div className="features">
              {[
                { icon: 'doctor' as IconName, title: 'متخصصان باتجربه', text: 'تیمی از پزشکان متعهد و آموزش‌دیده' },
                { icon: 'technology' as IconName, title: 'تجهیزات مدرن', text: 'جدیدترین تکنولوژی‌های روز دنیا' },
                { icon: 'shield' as IconName, title: 'رعایت کامل بهداشت', text: 'بالاترین استانداردهای ایمنی و استریلیزاسیون' },
                { icon: 'sparkle' as IconName, title: 'مشاوره تخصصی', text: 'طراحی مسیر درمان متناسب با نیاز شما' },
              ].map((f) => <div className="feature" key={f.title}><span><Icon name={f.icon} size={25} /></span><div><h3>{f.title}</h3><p>{f.text}</p></div></div>)}
            </div>
            <Button variant="outline">دریافت مشاوره رایگان</Button>
          </div>
        </div>
      </section>

      <section className="results section" id="results">
        <div className="container">
          <SectionHeading light eyebrow="نتایج واقعی" title="تغییری ظریف، احساسی عمیق" description="نتایج درمان‌های انجام‌شده در آوینا؛ بدون اغراق، با حفظ زیبایی طبیعی چهره." />
          <div className="result-layout">
            <div className="comparison">
              <img className="compare-base" src={images.before} alt="قبل از درمان" />
              <div className="compare-after" style={{ width: `${compare}%` }}><img src={images.after} alt="بعد از درمان" /></div>
              <span className="compare-label before-label">قبل</span><span className="compare-label after-label">بعد</span>
              <div className="compare-line" style={{ left: `${compare}%` }}><span>↔</span></div>
              <input aria-label="مقایسه قبل و بعد" type="range" min="5" max="95" value={compare} onChange={(e) => setCompare(Number(e.target.value))} />
            </div>
            <div className="result-info">
              <span>۰۱ / جوان‌سازی پوست</span>
              <blockquote>«هدف ما تغییر چهره شما نیست؛<br />بازگرداندن طراوت آن است.»</blockquote>
              <p>نتیجه پس از سه جلسه درمان ترکیبی، با فاصله زمانی اصولی و مراقبت اختصاصی.</p>
              <div className="result-nav"><button aria-label="نتیجه قبلی">→</button><span><i /></span><button aria-label="نتیجه بعدی">←</button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="doctors section" id="doctors">
        <div className="container">
          <SectionHeading eyebrow="تیم پزشکی" title="در دستان متخصصان زیبایی" description="پزشکانی که به جای تغییر، بر ظرافت و هماهنگی تمرکز می‌کنند." />
          <div className="doctor-grid">
            {doctors.map((doctor) => <article className="doctor-card" key={doctor.name}>
              <div className="doctor-photo"><img src={doctor.image} alt={doctor.name} /><div className="doctor-social"><Icon name="instagram" size={18} /></div></div>
              <div className="doctor-info"><h3>{doctor.name}</h3><p>{doctor.specialty}</p><span>{doctor.experience}</span><Button variant="outline">رزرو وقت با پزشک</Button></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <SectionHeading eyebrow="صدای همراهان آوینا" title="اعتمادی که به زیبایی تبدیل شد" />
          <div className="review-grid">
            {[
              { text: 'از نتیجه فیلر لبم واقعاً راضی‌ام. دقیقاً همان حالت طبیعی که می‌خواستم و برخورد تیم هم بسیار حرفه‌ای و آرامش‌بخش بود.', name: 'هلیا راد', service: 'فیلر لب' },
              { text: 'از لحظه ورود احساس کردم در جای درستی هستم. دکتر با حوصله همه چیز را توضیح داد و نتیجه بوتاکس بسیار طبیعی شد.', name: 'نازنین کاظمی', service: 'بوتاکس' },
              { text: 'بعد از چند جلسه جوان‌سازی، کیفیت پوستم کاملاً تغییر کرده. آوینا برای من ترکیبی از تخصص، ظرافت و احترام است.', name: 'سارا احمدی', service: 'جوان‌سازی پوست' },
            ].map((review, i) => <article className={`review-card ${i === 1 ? 'featured' : ''}`} key={review.name}>
              <div className="quote-mark">“</div><div className="rating">★★★★★</div><p>{review.text}</p>
              <div className="review-author"><span>{review.name.charAt(0)}</span><div><strong>{review.name}</strong><small>{review.service}</small></div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="appointment section" id="appointment">
        <div className="container appointment-box">
          <div className="appointment-copy">
            <span className="eyebrow"><i />یک قدم تا حس بهتر<i /></span>
            <h2>زیبایی شما،<br /><em>از یک گفت‌وگو آغاز می‌شود</em></h2>
            <p>فرم روبه‌رو را تکمیل کنید. کارشناسان آوینا در کوتاه‌ترین زمان برای هماهنگی مشاوره با شما تماس می‌گیرند.</p>
            <div className="contact-mini"><Icon name="phone" /><div><small>تماس مستقیم</small><strong dir="ltr">۰۲۱ ۲۲۳۳ ۴۴۵۵</strong></div></div>
            <div className="contact-mini"><Icon name="clock" /><div><small>ساعات پاسخگویی</small><strong>شنبه تا پنجشنبه، ۹ تا ۲۰</strong></div></div>
          </div>
          <form className="booking-form" onSubmit={submit}>
            <div className="form-head"><span>درخواست رزرو نوبت</span><small>لطفاً اطلاعات خود را وارد کنید</small></div>
            <label><span>نام و نام خانوادگی</span><input required placeholder="مثال: سارا محمدی" /></label>
            <label><span>شماره تماس</span><input required type="tel" placeholder="۰۹۱۲ ۱۲۳ ۴۵۶۷" /></label>
            <div className="form-row">
              <label><span>خدمت مورد نظر</span><select required defaultValue=""><option value="" disabled>انتخاب کنید</option>{services.map(s => <option key={s.name}>{s.name}</option>)}</select></label>
              <label><span>تاریخ پیشنهادی</span><input required type="text" placeholder="مثال: ۱۴۰۴/۰۳/۱۲" /></label>
            </div>
            <button type="submit" className="submit-btn">درخواست رزرو نوبت <Icon name="arrow" /></button>
            <p className="form-note"><Icon name="shield" size={15} /> اطلاعات شما نزد ما محفوظ می‌ماند.</p>
            {sent && <div className="success-message"><Icon name="check" /> درخواست شما ثبت شد؛ به‌زودی با شما تماس می‌گیریم.</div>}
          </form>
        </div>
      </section>

      <section className="faq section">
        <div className="container faq-layout">
          <div className="faq-intro"><SectionHeading eyebrow="پرسش‌های متداول" title="پیش از مراجعه بدانید" description="پاسخ به پرتکرارترین سؤالات شما درباره خدمات، نوبت‌دهی و روند درمان." /><Button variant="outline" href="#contact">سؤال دیگری دارید؟</Button></div>
          <div className="accordion">{faqs.map((faq, i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={faq.q}>
            <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{String(i + 1).padStart(2, '0')}</span><strong>{faq.q}</strong><i><Icon name="chevron" /></i></button>
            <div className="faq-answer"><p>{faq.a}</p></div>
          </div>)}</div>
        </div>
      </section>
    </main>

    <footer className="footer" id="contact">
      <div className="container footer-top">
        <div className="footer-brand"><a className="logo light-logo" href="#top"><span className="logo-mark">A</span><span><strong>آوینا</strong><small>کلینیک زیبایی</small></span></a><p>جایی برای کشف و مراقبت از زیبایی طبیعی شما، با همراهی علم، هنر و احترام.</p><a className="instagram-link" href="#"><Icon name="instagram" /> avina.clinic@</a></div>
        <div><h3>دسترسی سریع</h3><a href="#services">خدمات زیبایی</a><a href="#doctors">تیم پزشکی</a><a href="#results">قبل و بعد</a><a href="#appointment">رزرو نوبت</a></div>
        <div><h3>تماس با ما</h3><p><Icon name="location" /> تهران، زعفرانیه، خیابان مقدس اردبیلی، پلاک ۲۱</p><a href="tel:+982122334455"><Icon name="phone" /> ۰۲۱ ۲۲۳۳ ۴۴۵۵</a><p><Icon name="clock" /> شنبه تا پنجشنبه، ۹ تا ۲۰</p></div>
        <div className="map-card"><div className="map-pattern"><span><Icon name="location" size={26} /></span></div><a href="#">مشاهده روی نقشه <Icon name="arrow" size={16} /></a></div>
      </div>
      <div className="container footer-bottom"><p>© ۱۴۰۴ کلینیک زیبایی آوینا — تمامی حقوق محفوظ است.</p><div><a href="#">حریم خصوصی</a><span>•</span><a href="#">قوانین و مقررات</a></div></div>
    </footer>

    <a href="#appointment" className="floating-book"><Icon name="calendar" /><span>رزرو نوبت</span></a>
  </div>
}

export default App
