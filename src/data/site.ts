// ===========================================================
// Güven Sigorta Acentesi — merkezi site verisi
// ===========================================================

export const site = {
  name: 'Güven Sigorta Acentesi',
  shortName: 'Güven Sigorta',
  tagline: 'Sizi ve sevdiklerinizi güvenle koruyoruz',
  description:
    'Trafik, kasko, sağlık, konut, DASK, hayat ve işyeri sigortalarında çoklu şirket karşılaştırması ile en uygun teklifi sunan bağımsız sigorta acentesi.',
  url: 'https://sigorta.demo.dijifa.com',
  phone: '0850 000 25 25',
  phoneHref: 'tel:+908500002525',
  whatsapp: '+90 532 000 25 25',
  whatsappHref: 'https://wa.me/905320002525',
  email: 'teklif@guvensigorta.com.tr',
  address: 'Bağdat Caddesi No: 250, Kadıköy / İstanbul',
  workingHours: 'Pzt–Cmt 09:00 – 19:00',
  foundedYear: 2009,
  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
};

export type Policy = {
  slug: string;
  title: string;
  short: string;
  icon: string; // key into Icon component
  accent: 'navy' | 'trust';
  tagline: string;
  description: string;
  highlights: string[];
  coverage: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const policies: Policy[] = [
  {
    slug: 'trafik',
    title: 'Trafik Sigortası',
    short: 'Zorunlu mali sorumluluk teminatı',
    icon: 'car',
    accent: 'navy',
    tagline: 'Yasal zorunluluğunuzu en uygun fiyatla karşılayın',
    description:
      'Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası, aracınızla üçüncü kişilere verebileceğiniz maddi ve bedeni zararları yasal limitler dahilinde teminat altına alır. 20+ sigorta şirketinin fiyatını karşılaştırıp en uygununu sunuyoruz.',
    highlights: [
      'Anında poliçe — dakikalar içinde',
      '20+ şirket fiyat karşılaştırması',
      'Hasarsızlık indirimi takibi',
      'Taksit imkânı',
    ],
    coverage: [
      { title: 'Maddi zararlar', desc: 'Karşı tarafın aracında ve mallarında oluşan hasarlar.' },
      { title: 'Bedeni zararlar', desc: 'Üçüncü kişilerin tedavi, sakatlık ve vefat tazminatları.' },
      { title: 'Yasal limitler', desc: 'Güncel Hazine limitleri dahilinde tam teminat.' },
    ],
    faq: [
      { q: 'Trafik sigortası zorunlu mu?', a: 'Evet, karayolunda kullanılan tüm motorlu araçlar için yasal olarak zorunludur.' },
      { q: 'Hasarsızlık indirimim devam eder mi?', a: 'Mevcut basamağınız sistem üzerinden sorgulanır ve indiriminiz korunarak teklif hazırlanır.' },
    ],
  },
  {
    slug: 'kasko',
    title: 'Kasko Sigortası',
    short: 'Aracınıza tam koruma',
    icon: 'shield-car',
    accent: 'trust',
    tagline: 'Çarpma, çalınma, yangın ve doğal afetlere karşı tam güvence',
    description:
      'Kasko sigortası; aracınızın çarpma, çalınma, yangın, sel ve kötü niyetli hareketler sonucu uğrayabileceği zararları teminat altına alır. İhtiyacınıza göre genişletilebilen ek teminatlarla aracınızı eksiksiz koruruz.',
    highlights: [
      'İkame araç ve çekici hizmeti',
      'Cam, far, ayna ek teminatları',
      'Mini onarım ve anlaşmalı servis',
      'Yurt dışı teminat seçeneği',
    ],
    coverage: [
      { title: 'Çarpma & devrilme', desc: 'Kaza sonucu aracınızda oluşan tüm hasarlar.' },
      { title: 'Çalınma & yangın', desc: 'Hırsızlık, yanma ve yangın kaynaklı kayıplar.' },
      { title: 'Doğal afetler', desc: 'Sel, dolu, fırtına ve deprem ek teminatı.' },
    ],
    faq: [
      { q: 'Kasko ile trafik sigortası farkı nedir?', a: 'Trafik sigortası karşı tarafın zararını, kasko ise kendi aracınızın zararını karşılar.' },
      { q: 'İkinci el araca kasko yapılır mı?', a: 'Evet, aracın yaşına ve durumuna göre teminat ve fiyat belirlenir.' },
    ],
  },
  {
    slug: 'saglik',
    title: 'Sağlık Sigortası',
    short: 'Özel sağlık & tamamlayıcı',
    icon: 'heart-pulse',
    accent: 'trust',
    tagline: 'Anlaşmalı hastanelerde ayrıcalıklı sağlık hizmeti',
    description:
      'Özel sağlık ve tamamlayıcı sağlık sigortaları ile yatarak ve ayakta tedavi masraflarınızı güvence altına alın. Geniş anlaşmalı kurum ağı, kısa bekleme süreleri ve uygun primlerle sağlığınız güvende.',
    highlights: [
      'Tamamlayıcı (TSS) seçenekleri',
      'Geniş anlaşmalı hastane ağı',
      'Yatarak + ayakta tedavi',
      'Doğum ve check-up paketleri',
    ],
    coverage: [
      { title: 'Yatarak tedavi', desc: 'Ameliyat, oda, yoğun bakım ve tıbbi malzeme giderleri.' },
      { title: 'Ayakta tedavi', desc: 'Muayene, tahlil, görüntüleme ve ilaç giderleri.' },
      { title: 'Doğum & check-up', desc: 'Gebelik takibi, doğum ve periyodik kontrol paketleri.' },
    ],
    faq: [
      { q: 'TSS ile özel sağlık sigortası farkı nedir?', a: 'TSS, SGK anlaşmalı özel hastanelerde fark ücretlerini karşılar; özel sağlık sigortası daha geniş ve bağımsız teminat sunar.' },
      { q: 'Mevcut rahatsızlığım kapsama girer mi?', a: 'Başvuru sırasında beyan edilen durumlara göre teminat kapsamı belirlenir.' },
    ],
  },
  {
    slug: 'konut',
    title: 'Konut Sigortası',
    short: 'Eviniz ve eşyalarınız güvende',
    icon: 'home',
    accent: 'navy',
    tagline: 'Yangından hırsızlığa, evinizi her riske karşı koruyun',
    description:
      'Konut sigortası; eviniz ve içindeki eşyalarınızı yangın, hırsızlık, su baskını, deprem ve daha birçok riske karşı korur. Kira kaybı ve ferdi kaza gibi ek teminatlarla kapsamı dilediğiniz gibi genişletebilirsiniz.',
    highlights: [
      'Yapı + eşya teminatı',
      'Hırsızlık ve cam kırılması',
      'Su baskını ve dahili su hasarı',
      'Acil yardım & tesisat hizmetleri',
    ],
    coverage: [
      { title: 'Yangın & patlama', desc: 'Bina ve eşyalarda yangın, infilak kaynaklı hasarlar.' },
      { title: 'Hırsızlık', desc: 'Hırsızlık ve hırsızlık girişimi sonucu zararlar.' },
      { title: 'Su & doğal afet', desc: 'Su baskını, sel, fırtına ve deprem ek teminatı.' },
    ],
    faq: [
      { q: 'Kiracı konut sigortası yaptırabilir mi?', a: 'Evet, kiracılar eşya teminatı; ev sahipleri ise yapı + eşya teminatı yaptırabilir.' },
      { q: 'Konut sigortası DASK yerine geçer mi?', a: 'Hayır, DASK ayrı ve zorunludur; konut sigortası DASK üstü deprem teminatı sunabilir.' },
    ],
  },
  {
    slug: 'dask',
    title: 'DASK',
    short: 'Zorunlu deprem sigortası',
    icon: 'building-shield',
    accent: 'navy',
    tagline: 'Depreme karşı yasal zorunlu güvence',
    description:
      'Zorunlu Deprem Sigortası (DASK), deprem ve deprem kaynaklı yangın, infilak, tsunami ve yer kaymasının binanızda doğrudan neden olacağı maddi zararları teminat altına alır. Hızlı poliçe ve yenileme imkânı sunuyoruz.',
    highlights: [
      'Anında poliçe ve yenileme',
      'Tapu & abonelik işlemleri için gerekli',
      'Güncel birim maliyetlerle hesap',
      'DASK üstü ek deprem teminatı önerisi',
    ],
    coverage: [
      { title: 'Bina hasarı', desc: 'Temel, ana duvar, taşıyıcı sistem ve çatıda deprem hasarı.' },
      { title: 'Deprem kaynaklı riskler', desc: 'Yangın, infilak, tsunami ve yer kayması.' },
      { title: 'Yasal teminat limiti', desc: 'Her yıl güncellenen azami teminat tutarı dahilinde.' },
    ],
    faq: [
      { q: 'DASK zorunlu mu?', a: 'Evet, kapsamdaki binalar için zorunludur ve abonelik/tapu işlemlerinde aranır.' },
      { q: 'DASK tüm deprem zararını karşılar mı?', a: 'Bina için yasal limite kadar karşılar; eşya ve limit üstü için ek konut/deprem sigortası önerilir.' },
    ],
  },
  {
    slug: 'hayat',
    title: 'Hayat Sigortası',
    short: 'Sevdikleriniz için güvence',
    icon: 'family',
    accent: 'trust',
    tagline: 'Geleceği bugünden güvence altına alın',
    description:
      'Hayat sigortası, beklenmedik durumlarda sevdiklerinizin maddi geleceğini güvence altına alır. Vefat, maluliyet ve birikim odaklı planlarla; kredi hayat sigortasından emeklilik birikimine kadar ihtiyacınıza uygun çözümler sunuyoruz.',
    highlights: [
      'Vefat ve maluliyet teminatı',
      'Kredi hayat sigortası',
      'Birikimli & yıllık planlar',
      'Vergi avantajı seçenekleri',
    ],
    coverage: [
      { title: 'Vefat teminatı', desc: 'Poliçe süresi içinde vefat halinde lehtara ödeme.' },
      { title: 'Maluliyet', desc: 'Kaza veya hastalık sonucu maluliyet teminatı.' },
      { title: 'Birikim', desc: 'Düzenli prim ile geleceğe yönelik birikim planı.' },
    ],
    faq: [
      { q: 'Kredi için hayat sigortası zorunlu mu?', a: 'Konut ve ihtiyaç kredilerinde genellikle talep edilir; bağımsız acente olarak en uygun primi buluruz.' },
      { q: 'Birikimli hayat sigortası nasıl çalışır?', a: 'Ödediğiniz primlerin bir kısmı teminata, bir kısmı birikime ayrılarak değerlendirilir.' },
    ],
  },
  {
    slug: 'isyeri',
    title: 'İşyeri Sigortası',
    short: 'İşletmeniz kesintisiz',
    icon: 'store',
    accent: 'navy',
    tagline: 'İşletmenizi ve işinizin sürekliliğini koruyun',
    description:
      'İşyeri sigortası; ofis, mağaza, depo ve atölyenizi yangın, hırsızlık, su baskını ve doğal afetlere karşı korur. İş durması, sorumluluk ve cam teminatlarıyla işinizin sürekliliğini güvence altına alıyoruz.',
    highlights: [
      'Bina + demirbaş + emtia teminatı',
      'İş durması (kâr kaybı) teminatı',
      'İşveren & 3. şahıs sorumluluk',
      'Elektronik cihaz ve makine kırılması',
    ],
    coverage: [
      { title: 'Yangın & hırsızlık', desc: 'İşyeri, demirbaş ve emtiada oluşan hasar ve kayıplar.' },
      { title: 'Sorumluluk', desc: 'İşveren ve üçüncü şahıs mali sorumluluk teminatları.' },
      { title: 'İş durması', desc: 'Hasar nedeniyle faaliyetin durmasında kâr kaybı teminatı.' },
    ],
    faq: [
      { q: 'Kiracı işletme sigorta yaptırabilir mi?', a: 'Evet, demirbaş ve emtia teminatı kiracılar için, yapı teminatı mülk sahibi için düzenlenir.' },
      { q: 'Stok değeri değişirse ne olur?', a: 'Emtia bedeli poliçe içinde güncellenebilir; düzenli gözden geçirme öneririz.' },
    ],
  },
];

export const insurers = [
  'Allianz', 'Anadolu Sigorta', 'AXA', 'Mapfre', 'HDI',
  'Sompo', 'Türkiye Sigorta', 'Ray Sigorta', 'Quick', 'Ankara Sigorta',
];

export const stats = [
  { value: 18000, suffix: '+', label: 'Mutlu müşteri' },
  { value: 20, suffix: '+', label: 'Anlaşmalı şirket' },
  { value: 16, suffix: ' yıl', label: 'Sektör tecrübesi' },
  { value: 98, suffix: '%', label: 'Yenileme memnuniyeti' },
];

export const steps = [
  {
    n: '01',
    title: 'Bilgilerinizi paylaşın',
    desc: 'Sigorta türünü seçin, araç/konut veya kişi bilgilerinizi birkaç dakikada iletin.',
    icon: 'form',
  },
  {
    n: '02',
    title: 'Teklifleri karşılaştırın',
    desc: '20+ sigorta şirketinin fiyat ve teminatlarını uzman danışmanınızla birlikte değerlendirin.',
    icon: 'compare',
  },
  {
    n: '03',
    title: 'Poliçenizi alın',
    desc: 'En uygun teklifi onaylayın, poliçeniz anında düzenlenip e-posta ile size ulaşsın.',
    icon: 'policy',
  },
];

export const reasons = [
  {
    title: 'Çoklu şirket karşılaştırma',
    desc: '20+ sigorta şirketinin teklifini tek noktadan karşılaştırır, en uygununu sunarız.',
    icon: 'compare',
  },
  {
    title: 'Hızlı hasar desteği',
    desc: 'Hasar anında yanınızdayız; süreç takibini sizin adınıza uçtan uca yönetiriz.',
    icon: 'support',
  },
  {
    title: 'Uzman danışman',
    desc: 'Size özel atanan danışmanınız ihtiyacınıza en doğru teminatı tarafsızca önerir.',
    icon: 'advisor',
  },
  {
    title: 'Bağımsız & tarafsız',
    desc: 'Tek bir şirkete bağlı değiliz; çıkarınızı önceleyerek objektif öneri sunarız.',
    icon: 'balance',
  },
];

export const testimonials = [
  {
    name: 'Elif Yıldırım',
    role: 'Kasko sahibi',
    text: 'Kasko yenilemesinde geçen yıla göre çok daha uygun bir teklif buldular. Hasar sürecinde de tek aramayla her şeyi hallettiler.',
    rating: 5,
  },
  {
    name: 'Murat Demir',
    role: 'İşletme sahibi',
    text: 'İşyeri sigortamı yaptırırken bana en doğru teminatı sabırla anlattılar. Bağımsız acente olmaları en uygun fiyatı bulmamı sağladı.',
    rating: 5,
  },
  {
    name: 'Selin Kaya',
    role: 'Aile sağlık poliçesi',
    text: 'Tamamlayıcı sağlık sigortası için aldığım danışmanlık çok netti. Ailecek güvendeyiz, her sorumda hemen dönüş alıyorum.',
    rating: 5,
  },
  {
    name: 'Ahmet Çelik',
    role: 'Konut + DASK',
    text: 'Konut ve DASK poliçemi dakikalar içinde düzenlediler. Yenileme zamanı geldiğinde kendileri hatırlatıyor, hiç takip etmeme gerek kalmıyor.',
    rating: 5,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  category: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: 'kasko-secerken-dikkat',
    title: 'Kasko Seçerken Dikkat Edilmesi Gereken 7 Madde',
    excerpt:
      'Doğru kasko poliçesi sadece en ucuz olan değildir. İkame araç, mini onarım ve muafiyet gibi detaylar uzun vadede fark yaratır.',
    date: '2026-05-28',
    readMins: 5,
    category: 'Kasko',
    body: [
      'Kasko poliçesi seçerken yalnızca prim tutarına bakmak çoğu zaman yanıltıcı olur. En uygun poliçe, ihtiyaçlarınıza en iyi cevap veren teminat setini en doğru fiyatla sunan poliçedir.',
      'İkame araç teminatı, aracınız serviste olduğunda hayatınızın aksamaması için kritik bir teminattır. Süre ve sınıf detaylarını mutlaka karşılaştırın.',
      'Muafiyet oranları, hasar anında cebinizden çıkacak tutarı doğrudan etkiler. Düşük primli bazı poliçelerde yüksek muafiyet bulunabilir.',
      'Anlaşmalı servis ağı, orijinal parça ve onarım kalitesi açısından önemlidir. Aracınızın markasına uygun servis ağını sorgulayın.',
      'Cam, far, ayna ve mini onarım gibi ek teminatlar, küçük hasarlarda hasarsızlık indiriminizi korumanıza yardımcı olur.',
    ],
  },
  {
    slug: 'dask-zorunlu-mu',
    title: 'DASK Zorunlu mu? Bilmeniz Gereken Her Şey',
    excerpt:
      'Zorunlu Deprem Sigortası kimler için gerekli, neleri kapsar, neleri kapsamaz? Sık sorulan soruları net biçimde yanıtladık.',
    date: '2026-05-15',
    readMins: 4,
    category: 'DASK',
    body: [
      'DASK (Zorunlu Deprem Sigortası), kapsamdaki binalar için yasal olarak zorunludur ve tapu ile abonelik işlemlerinde aranır.',
      'DASK; deprem ve deprem kaynaklı yangın, infilak, tsunami ve yer kaymasının binada doğrudan neden olduğu maddi zararları yasal limit dahilinde karşılar.',
      'DASK eşyalarınızı ve yasal teminat limitinin üzerindeki zararları kapsamaz. Bu nedenle konut sigortası ile birlikte değerlendirilmesi önerilir.',
      'Poliçe bedeli, binanın brüt yüzölçümü ve yapı tarzına göre güncel birim maliyetler üzerinden hesaplanır.',
    ],
  },
  {
    slug: 'tamamlayici-saglik-sigortasi',
    title: 'Tamamlayıcı Sağlık Sigortası Kimler İçin Mantıklı?',
    excerpt:
      'SGK’lı olup özel hastane konforundan yararlanmak isteyenler için TSS, özel sağlık sigortasına göre çok daha ekonomik bir alternatif olabilir.',
    date: '2026-04-30',
    readMins: 6,
    category: 'Sağlık',
    body: [
      'Tamamlayıcı Sağlık Sigortası (TSS), SGK ile anlaşmalı özel hastanelerde oluşan fark ücretlerini karşılayarak özel hastane konforunu uygun primlerle sunar.',
      'SGK kapsamında olan ve özel hastane hizmetinden yararlanmak isteyen kişiler için TSS, klasik özel sağlık sigortasına göre genellikle daha ekonomiktir.',
      'Poliçe kapsamındaki anlaşmalı kurum ağını ve bekleme sürelerini başvuru öncesinde mutlaka inceleyin.',
      'Doğum, fizik tedavi ve ileri tetkikler gibi teminatların kapsam ve limitleri şirketten şirkete değişebilir.',
    ],
  },
];

export const faqs = [
  {
    q: 'Sigorta acentesinden almak daha mı pahalı?',
    a: 'Hayır. Acente komisyonu poliçe primine zaten dahildir; fiyat farkı oluşturmaz. Üstelik bağımsız acente olarak birden fazla şirketi karşılaştırıp size en uygun primi buluruz.',
  },
  {
    q: 'Teklif almak için ne yapmam gerekiyor?',
    a: 'Teklif Al sayfasındaki kısa formu doldurmanız yeterli. Sigorta türüne göre araç/konut veya kişi bilgilerinizi alır, kısa sürede size birden fazla şirketin teklifini sunarız.',
  },
  {
    q: 'Poliçemi ne kadar sürede alırım?',
    a: 'Trafik, kasko ve DASK gibi poliçeler onay sonrası genellikle dakikalar içinde düzenlenip e-posta ile iletilir. Sağlık ve işyeri gibi poliçelerde süre, başvuru değerlendirmesine göre değişebilir.',
  },
  {
    q: 'Hasar anında ne yapmalıyım?',
    a: 'Bizi arayın; hasar bildirim ve takip sürecini sizin adınıza uçtan uca yönetiriz. Gerekli evrak ve adımlarda danışmanınız size yol gösterir.',
  },
  {
    q: 'Birden fazla poliçeyi tek yerden yönetebilir miyim?',
    a: 'Evet. Trafik, kasko, konut, sağlık ve diğer tüm poliçelerinizi tek bir danışman üzerinden yönetip yenileme zamanlarında hatırlatma alabilirsiniz.',
  },
  {
    q: 'Online ödeme güvenli mi?',
    a: 'Tüm ödemeler sigorta şirketlerinin güvenli ödeme altyapısı üzerinden alınır. Acente olarak kart bilgilerinizi saklamayız.',
  },
];
