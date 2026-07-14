
      // ══════════════════════════════════════════════════════
      //  DATA – LESSON & QUESTION BANKS
      // ══════════════════════════════════════════════════════

      const LESSONS = [
        // ==========================================
        // SECTION: HTML (TULANG & KERANGKA)
        // ==========================================
        {
          id: "h1",
          section: "html",
          num: 1,
          xp: 100,
          title: "Website = Tubuh Manusia",
          icon: "💀",
          desc: "Pahami konsep HTML, CSS, dan JS pakai analogi tubuh manusia.",
          playgroundCode: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body style="background-color:lightblue;">

<h1 style="text-align:center;color:white;">This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
          content: `

            <div class="lc-exp" style="margin-bottom: 24px; padding: 16px; background: rgba(255,255,255,0.05); border-left: 4px solid var(--accent); border-radius: 8px;">
            <span style="font-size: 1.1rem; color: var(--accent); font-weight: 800;">🌐 Apa itu Website?</span><br>
            Website adalah kumpulan halaman di internet yang saling terhubung. Bayangkan seperti majalah digital raksasa yang bisa kamu buka kapan saja. Isinya bisa macam-macam: teks, gambar, video, sampai game interaktif!<br><br>
            <span style="font-size: 1.1rem; color: var(--accent); font-weight: 800;">👨‍💻 Apa itu Web Development?</span><br>
            Web Development adalah proses merancang dan "membangun" sebuah website dari nol. Orang yang mengerjakannya disebut <strong>Web Developer</strong>. Nah, di sinilah perjalananmu menjadi seorang Developer dimulai!
            </div>

            <div class="lc-exp">
            Hampir seluruh website di internet dibangun menggunakan 3 bahasa utama: <strong>HTML, CSS, dan JavaScript</strong>. Mari kita gunakan <strong>Analogi Tubuh Manusia</strong> agar lebih mudah dipahami:
            </div>

            <div class="lc-analogy" style="text-align:center">
            <img src="ilustrasi.jpg" alt="Ilustrasi HTML CSS JS" style="max-width:100%; width:100%; max-height:400px; object-fit:contain; border-radius:12px; margin-bottom:12px; border:1px solid rgba(255,255,255,0.1)">
            </div>

            <div class="lc-exp">
            <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:20px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5" style="width:48px; flex-shrink:0;">
            <div>
            <span style="color:var(--html); font-weight:800; font-size:1.1rem;">🦴 HTML (Kerangka & Tulang)</span><br>
            Sama seperti tulang yang menyusun postur manusia. HTML menentukan isi dan struktur dasar halaman web (teks, gambar, judul).
            </div>
            </div>

            <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:20px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" style="width:48px; flex-shrink:0;">
            <div>
            <span style="color:var(--css); font-weight:800; font-size:1.1rem;">🎨 CSS (Kulit, Baju & Make-up)</span><br>
            Sama seperti penampilan luar manusia. CSS membuat website yang kaku menjadi cantik, berwarna, dan rapi (tata letak, warna, ukuran font).
            </div>
            </div>

            <div style="display:flex; gap:16px; align-items:flex-start; margin-bottom:20px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" style="width:48px; border-radius:6px; flex-shrink:0;">
            <div>
            <span style="color:var(--js); font-weight:800; font-size:1.1rem;">🧠 JS (Otak & Sistem Saraf)</span><br>
            Sama seperti otak yang menyuruh tubuh bergerak. JavaScript membuat website menjadi hidup, interaktif, dan bisa merespon tindakan user (seperti klik tombol).
            </div>
            </div>
            <hr style="border-color: rgba(255,255,255,0.1); margin: 24px 0;">
            Pelajaran pertama kita mulai dari <strong>HTML</strong>. <br>
            Semua halaman web selalu memiliki struktur dasar seperti di bawah ini:
            </div>

            <div class="lc-code">
            <div class="code-lbl">📝 Struktur Dasar Web (HTML)</div>
            <pre class="code-pre"><span class="k">&lt;!DOCTYPE html&gt;</span> <span class="c">&lt;!-- Deklarasi versi HTML5 --&gt;</span>
            <span class="t">&lt;html&gt;</span> <span class="c">&lt;!-- Awal mula halaman web --&gt;</span>
            <span class="t">&lt;head&gt;</span> <span class="c">&lt;!-- Bagian kepala (meta, judul tab browser) --&gt;</span>
            <span class="t">&lt;title&gt;</span>Page Title<span class="t">&lt;/title&gt;</span>
            <span class="t">&lt;/head&gt;</span>
            <span class="t">&lt;body&gt;</span> <span class="c">&lt;!-- Tubuh utama (semua isi web yang terlihat) --&gt;</span>

            <span class="t">&lt;h1&gt;</span>This is a Heading<span class="t">&lt;/h1&gt;</span>
            <span class="t">&lt;p&gt;</span>This is a paragraph.<span class="t">&lt;/p&gt;</span>

            <span class="t">&lt;/body&gt;</span>
            <span class="t">&lt;/html&gt;</span></pre>
            <button onclick="openPlayground(LESSONS.find(l=>l.id==='h1').playgroundCode)" style="background:var(--html); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Coba Kode W3Schools Ini (Playground)</button>
            </div>

          `,
          pool: [
            {
              q: "Kalau diibaratkan manusia, HTML itu bertugas sebagai apa?",
              opts: [
                "Baju dan make-up",
                "Kerangka dan tulang pembentuk tubuh",
                "Otak yang bisa mikir",
                "Sistem pernapasan",
              ],
              ans: 1,
              exp: "HTML (HyperText Markup Language) tugasnya menyusun struktur dasar konten web, persis seperti kerangka tulang yang menyusun tubuh.",
            },
            {
              q: 'Tag apa yang ibarat "fisik badan" manusia (semua yang kelihatan di layar web ada di dalamnya)?',
              opts: ["<head>", "<html>", "<body>", "<title>"],
              ans: 2,
              exp: "Semua teks, gambar, dan tombol yang bisa dilihat user di layar, HARUS dimasukkan ke dalam tag <body>.",
            },
          ],
        },
        {
          id: "h2",
          section: "html",
          num: 2,
          xp: 100,
          title: "Heading & Paragraf",
          icon: "🗣️",
          desc: "Bikin judul gede dan teks panjang.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <!-- Coba ubah tulisan di bawah ini! -->
  <h1>Ini Judul Utama (H1)</h1>
  <h2>Ini Sub-judul (H2)</h2>
  <h3>Lebih kecil lagi (H3)</h3>
  
  <p>Ini adalah paragraf. Kamu bisa nulis cerita panjang lebar di sini. HTML akan menampilkannya sebagai teks biasa.</p>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Kayak baca koran, website pasti butuh <strong>Judul Utama</strong> dan <strong>Isi Berita (Paragraf)</strong>.
  <br><br>
  <div style="text-align:center; margin: 20px 0;"><img src="https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=400&q=80" alt="Buku Teks" style="max-width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"></div>Di HTML, judul disebut <strong>Heading</strong>. Ada 6 ukuran tulang heading, dari yang paling raksasa <code>&lt;h1&gt;</code> sampai yang paling kerdil <code>&lt;h6&gt;</code>.
  <br>Sedangkan untuk teks cerita/deskripsi, kita pakai tag <strong>Paragraf</strong> yaitu <code>&lt;p&gt;</code>.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Contoh Tag Heading & Paragraf</div>
  <pre class="code-pre"><span class="t">&lt;h1&gt;</span>Aku Judul Paling Gede!<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;h2&gt;</span>Aku Adiknya H1<span class="t">&lt;/h2&gt;</span>
<span class="t">&lt;p&gt;</span>Kalau aku cuma teks paragraf biasa buat cerita panjang.<span class="t">&lt;/p&gt;</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='h2').playgroundCode)" style="background:var(--html); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Coba Bikin Judul (Playground)</button>
</div>`,
          pool: [
            {
              q: "Tag apa yang dipakai untuk membuat judul dengan ukuran PALING BESAR di HTML?",
              opts: ["<header>", "<h6>", "<h1>", "<p>"],
              ans: 2,
              exp: "<h1> adalah Heading level 1, yang paling penting dan paling besar secara default.",
            },
            {
              q: "Kalau kamu mau nulis artikel curhatan yang panjang, tag apa yang paling pas?",
              opts: ["<p>", "<h1>", "<curhat>", "<html>"],
              ans: 0,
              exp: "Tag <p> singkatan dari Paragraph, dipakai untuk teks panjang / paragraf.",
            },
          ],
        },
        {
          id: "h3",
          section: "html",
          num: 3,
          xp: 100,
          title: "Format Teks",
          icon: "✍️",
          desc: "Bikin teks tebal, miring, dan bergaris bawah.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <p>Teks ini <b>TEBAL</b>.</p>
  <p>Teks ini <i>MIRING</i>.</p>
  <p>Teks ini <u>DIGARISBAWAHI</u>.</p>
  
  <p>Kalau yang ini <strong>TEBAL & PENTING</strong> menurut Google.</p>
  <p>Kalau ini <em>MIRING & DITEKANKAN</em>.</p>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Kadang kita pengen nge-highlight kata tertentu biar lebih ngejreng, kayak kalau kita ngomong ada intonasinya.
  <br><br>
  Di W3Schools, ini disebut <strong>HTML Formatting</strong>. Kita bisa ngasih style langsung dari tulang HTML-nya:
  <ul>
    <li><code>&lt;b&gt;</code> dan <code>&lt;strong&gt;</code> buat teks <b>TEBAL</b> (Bold).</li>
    <li><code>&lt;i&gt;</code> dan <code>&lt;em&gt;</code> buat teks <i>MIRING</i> (Italic).</li>
    <li><code>&lt;u&gt;</code> buat <u>GARIS BAWAH</u> (Underline).</li>
  </ul>
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Format Teks</div>
  <pre class="code-pre"><span class="t">&lt;p&gt;</span>Halo, nama saya <span class="t">&lt;b&gt;</span>Budi<span class="t">&lt;/b&gt;</span>!<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;p&gt;</span>Saya <span class="t">&lt;i&gt;</span>sangat<span class="t">&lt;/i&gt;</span> senang belajar coding.<span class="t">&lt;/p&gt;</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='h3').playgroundCode)" style="background:var(--html); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Latihan Cetak Tebal (Playground)</button>
</div>`,
          pool: [
            {
              q: 'Untuk membuat kata "PERHATIAN!" menjadi tebal, tag apa yang dipakai?',
              opts: ["<tebal>", "<i>", "<b>", "<u>"],
              ans: 2,
              exp: "Tag <b> (Bold) atau <strong> dipakai untuk menebalkan teks.",
            },
            {
              q: "Apa bedanya <b> dengan <strong>?",
              opts: [
                "Nggak ada bedanya sama sekali",
                "<strong> bikin teks lebih besar",
                "<strong> ngasih tau Google (Search Engine) kalau teks itu PENTING",
                "<b> cuma bisa dipakai di komputer Apple",
              ],
              ans: 2,
              exp: 'Secara visual sama-sama tebal, tapi <strong> ngasih makna "Penting" buat mesin pencari atau pembaca layar.',
            },
          ],
        },
        {
          id: "h4",
          section: "html",
          num: 4,
          xp: 100,
          title: "Link & Gambar",
          icon: "🔗",
          desc: "Bikin jalan pintas dan nampilin foto.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Coba Klik Link Ini!</h2>
  <a href="https://www.google.com" target="_blank">Pergi ke Google</a>
  
  <h2>Menampilkan Gambar</h2>
  <!-- Coba ganti link gambarnya dengan fotomu sendiri! -->
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="150" alt="Logo HTML5">
</body>
</html>`,
          content: `
<div class="lc-exp">
  Website tanpa gambar itu ibarat manusia tanpa wajah, membosankan! 
  <br>Website juga butuh pintu kemana-mana (Hyperlink) biar bisa lompat dari satu halaman ke halaman lain.
  <br><br>
  🔗 <strong>Link:</strong> Pakai tag <code>&lt;a href="urlnya"&gt;</code> (Anchor). Attribut <code>href</code> itu ibarat alamat rumah yang mau dituju.<br>
  🖼️ <strong>Gambar:</strong> Pakai tag <code>&lt;img src="url_foto"&gt;</code>. Attribut <code>src</code> (Source) itu lokasi file fotonya.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Pasang Foto & Link</div>
  <pre class="code-pre"><span class="c">&lt;!-- Bikin Link ke Google --&gt;</span>
<span class="t">&lt;a</span> <span class="a">href=</span><span class="n">"https://google.com"</span><span class="t">&gt;</span>Klik Aku!<span class="t">&lt;/a&gt;</span>

<span class="c">&lt;!-- Nampilin Gambar Kucing --&gt;</span>
<span class="t">&lt;img</span> <span class="a">src=</span><span class="n">"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80"</span> <span class="a">alt=</span><span class="n">"Foto Kucing"</span> <span class="a">width=</span><span class="n">"200"</span><span class="t">&gt;</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='h4').playgroundCode)" style="background:var(--html); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Eksperimen Link & Gambar</button>
</div>`,
          pool: [
            {
              q: "Untuk bikin link yang bisa diklik, atribut apa yang wajib ada di dalam tag <a>?",
              opts: ["src", "link", "href", "class"],
              ans: 2,
              exp: "href (Hypertext REFerence) wajib ada untuk ngasih tau browser ke mana link itu mengarah.",
            },
            {
              q: "Tag <img> itu spesial karena dia...",
              opts: [
                "Bisa bunyi",
                "Nggak punya tag penutup (Self-closing)",
                "Cuma bisa nampilin warna hitam putih",
                "Harus ditaruh di dalam <head>",
              ],
              ans: 1,
              exp: "Tag <img> cuma ditulis <img> saja, tidak ada </img>. Ini namanya empty element / self-closing tag.",
            },
          ],
        },
        {
          id: "h5",
          section: "html",
          num: 5,
          xp: 100,
          title: "List (Daftar)",
          icon: "📋",
          desc: "Bikin daftar belanja atau poin-poin berurutan.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Daftar Belanja (Unordered / Titik)</h2>
  <ul>
    <li>Beras</li>
    <li>Telur</li>
    <li>Indomie</li>
  </ul>

  <h2>Juara Lomba (Ordered / Angka)</h2>
  <ol>
    <li>Si Jago</li>
    <li>Si Hebat</li>
    <li>Si Lumayan</li>
  </ol>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Kalau kamu mau nulis daftar barang bawaan liburan, kamu butuh <strong>List</strong>.
  <br>Di HTML, list itu ibarat tulang rusuk manusia yang berjejer rapi. Ada dua jenis list utama:
  <br><br>
  1. <strong>UL (Unordered List):</strong> Daftarnya pakai titik/buletan (bullet). Cocok buat daftar belanjaan.<br>
  2. <strong>OL (Ordered List):</strong> Daftarnya pakai urutan angka (1, 2, 3). Cocok buat urutan juara atau resep masakan.
  <br><br>Setiap isi dari daftarnya HARUS dibungkus pakai tag <strong>LI (List Item)</strong>.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Bikin Daftar</div>
  <pre class="code-pre"><span class="t">&lt;ul&gt;</span> <span class="c">&lt;!-- Pakai Titik --&gt;</span>
  <span class="t">&lt;li&gt;</span>Kopi<span class="t">&lt;/li&gt;</span>
  <span class="t">&lt;li&gt;</span>Teh<span class="t">&lt;/li&gt;</span>
<span class="t">&lt;/ul&gt;</span>

<span class="t">&lt;ol&gt;</span> <span class="c">&lt;!-- Pakai Angka --&gt;</span>
  <span class="t">&lt;li&gt;</span>Bangun Tidur<span class="t">&lt;/li&gt;</span>
  <span class="t">&lt;li&gt;</span>Mandi<span class="t">&lt;/li&gt;</span>
<span class="t">&lt;/ol&gt;</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='h5').playgroundCode)" style="background:var(--html); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Bikin Daftar Belanja</button>
</div>`,
          pool: [
            {
              q: "Untuk bikin daftar yang berurutan pakai angka (1, 2, 3), tag apa yang dipakai untuk bungkusannya?",
              opts: ["<ul>", "<list>", "<ol>", "<li>"],
              ans: 2,
              exp: "<ol> singkatan dari Ordered List (Daftar Berurutan).",
            },
            {
              q: "Di dalam <ul> atau <ol>, tag apa yang mewakili SATU barang di daftar tersebut?",
              opts: ["<item>", "<li>", "<p>", "<div>"],
              ans: 1,
              exp: "<li> singkatan dari List Item. Semua poin di dalam list wajib pakai ini.",
            },
          ],
        },

        // ==========================================
        // SECTION: CSS (BAJU & KULIT)
        // ==========================================
        {
          id: "c1",
          section: "css",
          num: 6,
          xp: 100,
          title: "CSS = Baju & Make-up",
          icon: "🎨",
          desc: "Memberi warna dan gaya pada kerangka HTML.",
          playgroundCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Ini adalah CSS! */
    body {
      background-color: lightblue;
    }
    h1 {
      color: white;
      background-color: darkblue;
      padding: 10px;
      text-align: center;
    }
    p {
      color: darkred;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h1>Halo, Aku Pakai Baju CSS!</h1>
  <p>Sekarang tubuhku nggak pucat lagi.</p>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Nah, kerangka tulang HTML kan pucat banget tuh cuma warna hitam putih. Biar manusia web kita tampil modis, kita butuh <strong>CSS (Cascading Style Sheets)</strong>!
  <br><br>
  Ibaratnya, CSS itu:
  <br>👕 <strong>Baju:</strong> Nentuin ukuran, warna, dan letak pakaian.
  <br>💄 <strong>Make-up:</strong> Ngasih warna kulit, warna font, gaya rambut (jenis font).
  <br><br>
  Aturannya simpel: Pilih siapa yang mau didandanin (Selector), lalu dandanin dia (Property & Value).
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Aturan Dandan CSS</div>
  <pre class="code-pre"><span class="c">/* Selector: Siapa yang mau didandanin? (Tag H1) */</span>
<span class="t">h1</span> {
  <span class="c">/* Property: Apanya yang diubah? (Warna teks) */</span>
  <span class="a">color</span>: <span class="n">blue</span>; <span class="c">/* Value: Jadi warna apa? (Biru) */</span>
  <span class="a">background-color</span>: <span class="n">yellow</span>;
}</pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='c1').playgroundCode)" style="background:var(--css); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Eksperimen Ganti Baju (Playground)</button>
</div>`,
          pool: [
            {
              q: "Di analogi tubuh manusia, CSS berperan sebagai apa?",
              opts: [
                "Tulang dan tengkorak",
                "Otak untuk mikir",
                "Baju, kulit, dan make-up",
                "Jantung untuk detak",
              ],
              ans: 2,
              exp: "CSS fokus sepenuhnya ke visual, tampilan, kosmetik, dan layout.",
            },
            {
              q: 'Pada kode CSS: "h1 { color: red; }", bagian manakah yang disebut Property?',
              opts: ["h1", "color", "red", "{}"],
              ans: 1,
              exp: '"color" adalah Property (atribut yang mau diubah), sedangkan "red" adalah Value (nilainya).',
            },
          ],
        },
        {
          id: "c2",
          section: "css",
          num: 7,
          xp: 100,
          title: "ID vs Class (KTP & Seragam)",
          icon: "🏷️",
          desc: "Cara memilih elemen mana yang mau dihias.",
          playgroundCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* . untuk CLASS (Seragam geng) */
    .geng-merah {
      color: red;
      font-weight: bold;
    }
    
    /* # untuk ID (KTP / Spesial) */
    #bos-besar {
      color: gold;
      background: black;
      font-size: 24px;
    }
  </style>
</head>
<body>
  <p class="geng-merah">Anak buah 1</p>
  <p class="geng-merah">Anak buah 2</p>
  <p id="bos-besar">Aku sang Bos Besar!</p>
  <p class="geng-merah">Anak buah 3</p>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Kalau di HTML ada banyak tag <code>&lt;p&gt;</code>, gimana cara CSS tau <code>&lt;p&gt;</code> mana yang mau dikasih baju merah? Masa semuanya merah?
  <br>Makanya, HTML punya tanda pengenal:
  <br><br>
  🪪 <strong>ID (Pakai '#')</strong>: Ibarat NIK KTP. Cuma boleh ada <strong>SATU</strong> elemen di halaman yang pakai ID itu. Sangat spesifik!
  <br>👕 <strong>Class (Pakai '.')</strong>: Ibarat seragam. Boleh dipakai oleh <strong>BANYAK</strong> elemen. Kalau kelasnya "merah", semua yang pakai kelas itu bakal jadi merah.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Panggil ID dan Class di CSS</div>
  <pre class="code-pre"><span class="c">/* Pakai TITIK (.) untuk manggil Class */</span>
<span class="t">.baju-kuning</span> {
  <span class="a">background-color</span>: <span class="n">yellow</span>;
}

<span class="c">/* Pakai PAGAR (#) untuk manggil ID */</span>
<span class="t">#spesial</span> {
  <span class="a">color</span>: <span class="n">purple</span>;
}</pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='c2').playgroundCode)" style="background:var(--css); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Coba Pakaikan Seragam</button>
</div>`,
          pool: [
            {
              q: "Tanda apa yang dipakai di CSS untuk memilih / mendandani sebuah CLASS?",
              opts: ["Pagar (#)", "Titik (.)", "Bintang (*)", "Tanda seru (!)"],
              ans: 1,
              exp: "Titik (.) dipakai untuk Class, sedangkan Pagar (#) dipakai untuk ID.",
            },
            {
              q: 'Berapa elemen yang boleh memiliki atribut id="logo" yang sama dalam satu halaman web?',
              opts: [
                "Sebanyak-banyaknya",
                "Maksimal 5",
                "Cuma boleh SATU (Harus Unik)",
                "Tidak boleh ada",
              ],
              ans: 2,
              exp: "ID itu ibarat KTP, harus unik dan tidak boleh kembar di satu halaman HTML.",
            },
          ],
        },
        {
          id: "c3",
          section: "css",
          num: 8,
          xp: 100,
          title: "Box Model (Gemuk & Kurus)",
          icon: "📦",
          desc: "Margin, Border, Padding, dan Content.",
          playgroundCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .kotak {
      background-color: lightgreen;
      
      /* Lebar & Tinggi kontennya */
      width: 200px;
      height: 100px;
      
      /* Padding: Daging (Jarak teks ke batas kulit) */
      padding: 20px;
      
      /* Border: Kulit luar / Baju */
      border: 5px solid darkgreen;
      
      /* Margin: Jarak dia dengan orang lain (Aura) */
      margin: 30px;
    }
  </style>
</head>
<body>
  <div class="kotak">Halo, aku kotak yang punya Padding dan Margin!</div>
  <div class="kotak">Aku kotak kedua. Liat kan ada jarak di antara kita? Itu namanya Margin!</div>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Di dunia web, <strong>SEMUA</strong> elemen itu bentuknya kotak (Box). Manusia web kita ini kotak-kotak! 
  <br>Konsep ini disebut <strong>CSS Box Model</strong>.<br><br><div style="text-align:center; margin: 10px 0;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CSS_Box_Model.svg/600px-CSS_Box_Model.svg.png" alt="CSS Box Model" style="max-width:100%; border-radius:12px; background:white; padding:10px;"></div>Lapisannya dari luar ke dalam:
  <br><br>
  1. 🧍‍♂️ <strong>Margin (Aura):</strong> Jarak terluar, memisahkan orang ini dengan orang lain. Tembus pandang.<br>
  2. 🧥 <strong>Border (Jaket):</strong> Garis batas kotak. Bisa tebal, tipis, solid, atau putus-putus.<br>
  3. 🍖 <strong>Padding (Daging):</strong> Ruang kosong di dalam kotak, jarak antara konten dengan border. Makin gede padding, makin "gemuk" kotaknya.<br>
  4. 🦴 <strong>Content (Tulang):</strong> Isi aslinya (teks atau gambar).
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Box Model CSS</div>
  <pre class="code-pre"><span class="t">.manusia</span> {
  <span class="a">padding</span>: <span class="n">20px</span>; <span class="c">/* Gemukin badannya */</span>
  <span class="a">border</span>: <span class="n">2px solid black</span>; <span class="c">/* Kasih garis luar */</span>
  <span class="a">margin</span>: <span class="n">50px</span>; <span class="c">/* Jauhin dari orang lain */</span>
}</pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='c3').playgroundCode)" style="background:var(--css); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Main-main dengan Box Model</button>
</div>`,
          pool: [
            {
              q: "Untuk bikin jarak antara TEKS di dalam tombol dengan TEPIAN tombolnya, kita pakai apa?",
              opts: ["Margin", "Padding", "Border", "Width"],
              ans: 1,
              exp: "Padding adalah jarak di dalam kotak (antara konten dan border). Kalau Margin itu jarak di luar kotak.",
            },
            {
              q: "Property apa yang dipakai untuk ngatur jarak / spasi ANTAR elemen (misal: jarak kotak A ke kotak B)?",
              opts: ["Padding", "Border", "Margin", "Spacing"],
              ans: 2,
              exp: "Margin adalah ruang terluar yang mendorong elemen lain menjauh.",
            },
          ],
        },
        {
          id: "c4",
          section: "css",
          num: 9,
          xp: 100,
          title: "Teks & Font (Gaya Rambut)",
          icon: "🔡",
          desc: "Ubah jenis huruf, ukuran, dan perataan teks.",
          playgroundCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      font-family: 'Arial', sans-serif;
      font-size: 40px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 5px;
      color: navy;
    }
    p {
      font-family: 'Courier New', Courier, monospace;
      line-height: 1.8; /* Jarak antar baris */
      text-align: justify; /* Rata kanan kiri */
    }
  </style>
</head>
<body>
  <h1>Gaya Teks</h1>
  <p>Manusia web kita sekarang sudah bisa ganti gaya rambut! Maksudnya, kita bisa ganti jenis font, ukuran, ketebalan, sampai jarak antar huruf. CSS bikin teks yang membosankan jadi kayak poster film bioskop. Keren kan?</p>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Penampilan belum lengkap kalau "gaya rambutnya" berantakan. Di CSS, kita bisa dandanin teks sepuasnya!
  <br><br>
  Beberapa jurus andalan buat teks:
  <br>• <code>font-family</code>: Ganti jenis font (Times New Roman, Arial, dll).
  <br>• <code>font-size</code>: Gede kecilin huruf (pakai px, rem, em).
  <br>• <code>text-align</code>: Rata kiri (left), tengah (center), kanan (right).
  <br>• <code>line-height</code>: Jarak spasi antar baris. Biar nggak dempet-dempetan bacanya.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 CSS Text Styling</div>
  <pre class="code-pre"><span class="t">h1</span> {
  <span class="a">font-family</span>: <span class="n">Arial, sans-serif</span>;
  <span class="a">font-size</span>: <span class="n">24px</span>;
  <span class="a">text-align</span>: <span class="n">center</span>;
}</pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='c4').playgroundCode)" style="background:var(--css); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Eksperimen Gaya Font</button>
</div>`,
          pool: [
            {
              q: "Kalau kamu mau teks berada tepat di TENGAH halaman, property apa yang diubah?",
              opts: [
                "font-align: middle;",
                "text-align: center;",
                "margin: center;",
                "align-text: middle;",
              ],
              ans: 1,
              exp: "text-align: center; adalah cara baku di CSS untuk meratakan teks ke tengah horisontal.",
            },
            {
              q: "Property mana yang dipakai untuk mengubah JENIS HURUF (misal dari Times jadi Arial)?",
              opts: ["font-family", "text-family", "font-style", "font-weight"],
              ans: 0,
              exp: "font-family mendefinisikan keluarga font yang mau dipakai oleh browser.",
            },
          ],
        },
        {
          id: "c5",
          section: "css",
          num: 10,
          xp: 100,
          title: "Flexbox (Barisan Orang)",
          icon: "🤸",
          desc: "Bikin elemen berbaris rapi secara otomatis.",
          playgroundCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .barisan {
      /* Ini kuncinya! Bikin isi di dalamnya jadi sejajar (baris) */
      display: flex;
      
      /* Cara ngatur jarak antar kotak */
      justify-content: space-around; 
      
      background: #333;
      padding: 20px;
    }
    .orang {
      background: orange;
      padding: 20px;
      font-size: 20px;
      font-weight: bold;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h2>Flexbox: Susun Barisan!</h2>
  <div class="barisan">
    <div class="orang">Anton</div>
    <div class="orang">Budi</div>
    <div class="orang">Caca</div>
  </div>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Dulu, nyusun elemen HTML bersebelahan (kiri-kanan) itu susah banget, kayak nyuruh anak TK baris rapi.
  <br>Sekarang, CSS punya sihir bernama <strong>Flexbox</strong>!<br><br><div style="text-align:center; margin: 10px 0;"><img src="https://images.unsplash.com/photo-1506784951209-6852445856eb?auto=format&fit=crop&w=400&q=80" alt="Barisan Rapi" style="max-width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"></div><br><br><div style="text-align:center; margin: 10px 0;"><img src="https://images.unsplash.com/photo-1506784951209-6852445856eb?auto=format&fit=crop&w=400&q=80" alt="Barisan Rapi" style="max-width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"></div>
  <br><br>
  Dengan nambahin <code>display: flex;</code> ke kotak induk (Bapaknya), semua kotak anak di dalamnya akan langsung <strong>berbaris ke samping</strong>.
  <br>Terus kita bisa atur posisi mereka pakai <code>justify-content</code>. Bisa dipepetin ke kiri, ke kanan, ke tengah, atau dikasih jarak rata.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Sihir Flexbox</div>
  <pre class="code-pre"><span class="t">.wadah</span> {
  <span class="a">display</span>: <span class="n">flex</span>; <span class="c">/* Aktifin Flexbox */</span>
  <span class="a">justify-content</span>: <span class="n">center</span>; <span class="c">/* Semua anak ke tengah! */</span>
  <span class="a">gap</span>: <span class="n">10px</span>; <span class="c">/* Jarak antar anak 10px */</span>
}</pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='c5').playgroundCode)" style="background:var(--css); color:#fff; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Coba Posisikan Barisan</button>
</div>`,
          pool: [
            {
              q: "Property ajaib apa yang membuat semua elemen di dalamnya langsung berbaris rapi (horizontal)?",
              opts: [
                "display: block;",
                "align-items: center;",
                "display: flex;",
                "float: left;",
              ],
              ans: 2,
              exp: "display: flex; akan mengubah elemen container menjadi flex container, membuat anak-anaknya sejajar dalam 1 baris.",
            },
            {
              q: "Kalau di dalam wadah flex, kita ingin ngatur spasi/jarak di antara elemen anak (horizontal), property apa yang diubah?",
              opts: [
                "align-items",
                "justify-content",
                "flex-direction",
                "text-align",
              ],
              ans: 1,
              exp: "justify-content mengatur distribusi ruang kosong pada sumbu utama (main axis), misal space-between atau center.",
            },
          ],
        },

        // ==========================================
        // SECTION: JAVASCRIPT (OTAK & OTOT)
        // ==========================================
        {
          id: "j1",
          section: "js",
          num: 11,
          xp: 100,
          title: "JS = Otak & Sistem Saraf",
          icon: "🧠",
          desc: "Bikin web jadi pintar, bisa mikir dan merespon.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h1>Cek Otak Manusia Web!</h1>
  <button onclick="sapaUser()" style="padding:10px 20px; font-size:16px;">Klik Buat Nyapa!</button>
  
  <!-- Disinilah tempat Otak (JS) berada -->
  <script>
    function sapaUser() {
      // alert() itu bikin browser ngeluarin pop-up kaget
      alert("Halo! Manusia web-nya hidup nih!");
      
      // console.log() cuma bisa dilihat teknisi di belakang layar
      console.log("Tombolnya abis diklik bos!");
    }
  <\\/script>
</body>
</html>`,
          content: `
<div class="lc-exp">
  HTML udah beres, CSS udah modis. Tapi web kita masih kayak <strong>patung</strong>. Nggak bisa ngapa-ngapain.
  <br>Nah, disinilah <strong>JavaScript (JS)</strong> masuk sebagai otak dan otot!
  <br><br>
  Dengan JS, web kita bisa berinteraksi. Contohnya pas tombol diklik, munculin pesan pop-up, atau ngecek form kosong.
  <br>Kode JS ditaruh di antara tag <code>&lt;script&gt;</code> di dalam HTML.
  <br><br>
  Perintah JS paling gampang: <br>
  - <code>alert('pesan')</code>: Bikin jendela pop-up di layar pengguna.<br>
  - <code>console.log('pesan')</code>: Nulis pesan rahasia di layar <em>Developer Tools</em> buat si programmer.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Halo Javascript</div>
  <pre class="code-pre"><span class="t">&lt;script&gt;</span>
  <span class="c">// Bikin pop-up muncul di layar</span>
  <span class="k">alert</span>(<span class="n">"Website ini keren!"</span>);
  
  <span class="c">// Nyatet diam-diam buat programmer</span>
  <span class="k">console.log</span>(<span class="n">"JS berhasil jalan."</span>);
<span class="t">&lt;/script&gt;</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='j1').playgroundCode)" style="background:var(--js); color:#111; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Buktikan Sendiri (Playground)</button>
</div>`,
          pool: [
            {
              q: "Di analogi kita, apa tugas JavaScript?",
              opts: [
                "Jadi kerangka pembentuk badan",
                "Bikin web punya gaya dan warna",
                "Jadi otak supaya web bisa berinteraksi dan mikir",
                "Jadi database nyimpen data",
              ],
              ans: 2,
              exp: "JavaScript adalah programming language untuk web. Dia mengatur logika, interaksi, dan aksi dinamis.",
            },
            {
              q: "Fungsi apa di JS yang dipakai untuk memunculkan kotak dialog peringatan/pop-up kepada pengunjung?",
              opts: ["alert()", "console.log()", "document.write()", "popup()"],
              ans: 0,
              exp: "alert() memunculkan dialog pop-up yang memaksa user ngeklik OK sebelum bisa lanjut.",
            },
          ],
        },
        {
          id: "j2",
          section: "js",
          num: 12,
          xp: 100,
          title: "Variabel (Ingatan Manusia)",
          icon: "📥",
          desc: "Menyimpan data di dalam otak (memori).",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Cek Ingatanku</h2>
  <p id="tampil-data"></p>

  <script>
    // 1. let: Ingatan yang bisa berubah-ubah (umur, saldo)
    let umur = 20;
    umur = umur + 1; // Ulang tahun, jadi 21!
    
    // 2. const: Ingatan paten yang nggak bisa diubah (nama, tanggal lahir)
    const nama = "Budi Santoso";
    // nama = "Joni"; // KALAU DIHAPUS SLASH-NYA BISA ERROR!
    
    // Nampilin isi ingatan ke layar HTML
    document.getElementById("tampil-data").innerHTML = 
      nama + " sekarang umurnya " + umur + " tahun.";
  <\\/script>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Otak butuh daya ingat. JS butuh <strong>Variabel</strong> buat nyimpen data. Entah itu "skor game", "nama pengunjung", atau "isi keranjang belanja".
  <br><br>
  Di zaman modern, kita bikin variabel pakai dua kata sakti:
  <br>1. <code>let</code>: Ingatannya bisa diubah-ubah kapan aja. Kayak isi dompet, atau umur.
  <br>2. <code>const</code> (Konstan): Ingatannya permanen dan <strong>dilarang keras diubah</strong>. Kayak tanggal lahir, atau NIK.
</div>
<div class="lc-code">
  <div class="code-lbl">📝 let vs const</div>
  <pre class="code-pre"><span class="k">let</span> saldo = <span class="n">5000</span>;
saldo = <span class="n">10000</span>; <span class="c">// Boleh! Sah-sah saja berubah.</span>

<span class="k">const</span> phi = <span class="n">3.14</span>;
phi = <span class="n">3.20</span>; <span class="c">// ERROR! Browser marah karena const nggak bisa diubah!</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='j2').playgroundCode)" style="background:var(--js); color:#111; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Uji Coba Variabel</button>
</div>`,
          pool: [
            {
              q: 'Gimana kalau kamu nekat ngubah isi variabel yang dibikin pakai "const"?',
              opts: [
                "Variabelnya jadi let otomatis",
                "Browser bakal panik, berhenti eksekusi, dan muncul Error",
                "Isinya berubah tanpa masalah",
                "Halamannya bakal kerefresh sendiri",
              ],
              ans: 1,
              exp: 'Aturan mutlak JS: Variabel tipe "const" tidak bisa ditugaskan ulang (re-assigned). Kalau dilanggar akan TypeError.',
            },
            {
              q: "Kalau kamu mau bikin variabel penampung SKOR GAME (yang nilainya naik turun terus), mana yang dipakai?",
              opts: ["const", "let", "var", "int"],
              ans: 1,
              exp: "let mengizinkan kita merubah isi dari variabel tersebut kapanpun.",
            },
          ],
        },
        {
          id: "j3",
          section: "js",
          num: 13,
          xp: 100,
          title: "Tipe Data (Isi Otak)",
          icon: "🧬",
          desc: "Bedanya teks, angka, dan logika benar-salah.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Cek Tipe Data di Console (F12)</h2>
  
  <script>
    let namaPemain = "Zelda";   // Tipe: String (Teks, wajib pakai kutip)
    let skorGame = 999;         // Tipe: Number (Angka murni)
    let sudahLulus = true;      // Tipe: Boolean (Hanya true atau false)
    
    // String bisa disambung pakai tanda '+'
    let pesan = "Pemain " + namaPemain + " dapat skor " + skorGame;
    
    // Number bisa di-matematikain
    let skorAkhir = skorGame * 2;
    
    alert(pesan);
    console.log("Skor Akhir:", skorAkhir);
    console.log("Status Lulus:", sudahLulus);
  <\\/script>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Variabel itu wadahnya, tapi apa yang disimpen di dalamnya? Di JS, ada 3 bentuk dasar isi otak (Tipe Data):
  <br><br>
  1. 🔡 <strong>String (Teks)</strong>: Selalu dibungkus pakai tanda kutip (<code>"Hello"</code> atau <code>'Halo'</code>). 
  <br>2. 🔢 <strong>Number (Angka)</strong>: Jangan pakai kutip! Biar bisa dihitung matematika (tambah, kali, bagi). (Contoh: <code>42</code>, <code>3.14</code>).
  <br>3. ⚖️ <strong>Boolean (Benar/Salah)</strong>: Cuma punya dua isi: <code>true</code> (benar) atau <code>false</code> (salah). Kayak saklar lampu (nyala/mati).
</div>
<div class="lc-code">
  <div class="code-lbl">📝 3 Tipe Data Utama</div>
  <pre class="code-pre"><span class="k">let</span> nama = <span class="n">"Andi"</span>;  <span class="c">// String (Teks)</span>
<span class="k">let</span> umur = <span class="n">25</span>;      <span class="c">// Number (Angka)</span>
<span class="k">let</span> isLapar = <span class="k">true</span>; <span class="c">// Boolean (Logika)</span>

<span class="c">// AWAS TERTIPU!</span>
<span class="k">let</span> angka = <span class="n">"10"</span>; <span class="c">// Ini String! Karena pakai kutip.</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='j3').playgroundCode)" style="background:var(--js); color:#111; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Mainan Tipe Data</button>
</div>`,
          pool: [
            {
              q: 'Dari kode let x = "50"; ... Tipe data apakah x?',
              opts: ["Number", "String", "Boolean", "Error"],
              ans: 1,
              exp: "Meskipun isinya angka 50, selama dibungkus tanda kutip, JavaScript akan menganggapnya sebagai String (Teks).",
            },
            {
              q: 'Tipe data apa yang sangat pas untuk menampung status "Apakah user sudah login atau belum"?',
              opts: ["String", "Number", "Boolean", "Array"],
              ans: 2,
              exp: "Boolean paling tepat karena kondisinya cuma dua: True (Sudah login) atau False (Belum login).",
            },
          ],
        },
        {
          id: "j4",
          section: "js",
          num: 14,
          xp: 100,
          title: "Functions (Kemampuan)",
          icon: "⚙️",
          desc: "Bikin perintah-perintah yang bisa dipakai berulang.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Panggil Sang Koki!</h2>
  <button onclick="bikinKopi('Hitam')">Bikin Kopi Hitam</button>
  <button onclick="bikinKopi('Susu')">Bikin Kopi Susu</button>
  
  <p id="hasil-dapur" style="font-size:24px; margin-top:20px; font-weight:bold;"></p>

  <script>
    // Ini definisi Function-nya (Si Koki)
    function bikinKopi(jenis) {
      let proses = "Sedang meracik Kopi " + jenis + "... Selesai! ☕";
      // Tampilkan hasil ke layar
      document.getElementById("hasil-dapur").innerHTML = proses;
    }
  <\\/script>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Manusia punya kemampuan (skill) kayak jalan, lari, atau makan. Di JS, kemampuan ini disebut <strong>Function</strong> (Fungsi).
  <br><br>
  Function itu ibarat koki di dapur. Kamu ngasih dia bahan resep (Parameter), lalu si koki mengolahnya, dan memberikan makanan hasil masakannya (Return).
  <br>Kenapa butuh function? Biar kita <strong>nggak usah nulis kode yang sama berulang-ulang</strong>. Tinggal panggil nama function-nya aja!
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Memasukkan Resep ke Fungsi</div>
  <pre class="code-pre"><span class="c">// Bikin fungsi/kemampuan</span>
<span class="k">function</span> <span class="t">tambahAngka</span>(<span class="n">a, b</span>) {
  <span class="k">let</span> hasil = a + b;
  <span class="k">return</span> hasil; <span class="c">// Kembalikan hasil masakan</span>
}

<span class="c">// Memanggil fungsinya buat kerja</span>
<span class="k">let</span> nilaiku = <span class="t">tambahAngka</span>(10, 5);
<span class="c">// nilaiku sekarang isinya 15</span></pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='j4').playgroundCode)" style="background:var(--js); color:#111; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Jadi Koki Function</button>
</div>`,
          pool: [
            {
              q: "Untuk membuat sebuah kemampuan atau tugas yang bisa dipanggil berkali-kali di JS, kita menggunakan apa?",
              opts: ["let", "const", "function", "string"],
              ans: 2,
              exp: "Keyword function digunakan untuk mendeklarasikan blok kode yang bisa dipanggil atau dijalankan berulang-ulang.",
            },
            {
              q: 'Kata kunci (keyword) apa yang dipakai di dalam function untuk "melemparkan kembali" hasil perhitungannya keluar?',
              opts: ["output", "print", "return", "send"],
              ans: 2,
              exp: "Keyword return bertugas menghentikan eksekusi function dan mengembalikan sebuah nilai (value) ke pemanggilnya.",
            },
          ],
        },
        {
          id: "j5",
          section: "js",
          num: 15,
          xp: 100,
          title: "If/Else (Keputusan Otak)",
          icon: "🚦",
          desc: "Bikin otak manusia web bisa memilih kondisi.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h2>Cek Kelulusan</h2>
  <button onclick="cekNilai(90)">Dapat Nilai 90</button>
  <button onclick="cekNilai(60)">Dapat Nilai 60</button>
  
  <script>
    function cekNilai(nilai) {
      // Di sini otak JS ngambil keputusan!
      if (nilai >= 75) {
        alert("Nilaimu " + nilai + ". SELAMAT! Kamu LULUS! 🎉");
      } else {
        alert("Nilaimu " + nilai + ". Maaf, kamu harus HER. 😢");
      }
    }
  <\\/script>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Manusia pasti selalu mikir dan ngambil keputusan. 
  <br><em>"Kalau hujan, bawa payung. Kalau nggak, ya nggak usah."</em>
  <br><br>
  Di JS, otak mengambil keputusan pakai <strong>if - else</strong> (Jika - Maka).
  Ini bikin program kita jadi super cerdas karena bisa berperilaku beda tergantung kondisinya (misal bedain user yang udah bayar VIP sama yang gratisan).
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Logika If / Else</div>
  <pre class="code-pre"><span class="k">let</span> uang = <span class="n">5000</span>;

<span class="k">if</span> (uang &gt; <span class="n">10000</span>) {
  <span class="k">console.log</span>(<span class="n">"Bisa beli bakso!"</span>);
} <span class="k">else</span> {
  <span class="c">// Kalau uangnya KESIKITAN (kondisi if salah), masuk sini!</span>
  <span class="k">console.log</span>(<span class="n">"Makan cilok aja bro..."</span>);
}</pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='j5').playgroundCode)" style="background:var(--js); color:#111; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Tes Keputusan Otak</button>
</div>`,
          pool: [
            {
              q: "Kode apa yang akan dijalankan JIKA kondisi di dalam if() TERNYATA SALAH (false)?",
              opts: [
                "Kode di dalam blok if itu sendiri",
                "Kode di dalam blok else",
                "Browser akan crash",
                "Function langsung berhenti",
              ],
              ans: 1,
              exp: 'Blok else adalah "rencana cadangan" yang dieksekusi jika kondisi if bernilai false.',
            },
            {
              q: 'Tanda apa di JavaScript yang berarti "Lebih Besar Sama Dengan"?',
              opts: ["=>", ">==", ">=", ">="],
              ans: 2,
              exp: "Tanda >= berarti Greater than or equal to.",
            },
          ],
        },
        {
          id: "j6",
          section: "js",
          num: 16,
          xp: 100,
          title: "DOM (Otak Gerakin Tubuh)",
          icon: "🪄",
          desc: "Ubah isi dan gaya HTML langsung lewat JS.",
          playgroundCode: `<!DOCTYPE html>
<html>
<body>
  <h2 id="target-teks">Aku Tulisan Biasa</h2>
  <button onclick="ubahWujud()">Mantra Ajaib!</button>
  
  <script>
    function ubahWujud() {
      // 1. JS cari tulang/elemen yang punya ID "target-teks"
      let elemen = document.getElementById("target-teks");
      
      // 2. JS ganti isi teksnya (Ganti Tulang)
      elemen.innerHTML = "JADI TULISAN SUPER MERAH!";
      
      // 3. JS ganti CSS-nya (Ganti Baju)
      elemen.style.color = "red";
      elemen.style.fontSize = "40px";
      elemen.style.textShadow = "2px 2px 5px black";
    }
  <\\/script>
</body>
</html>`,
          content: `
<div class="lc-exp">
  Ini adalah jurus pamungkas! Puncak dari Web Dev.
  <br>Gimana caranya Otak (JS) ngasih perintah ke Tulang (HTML) dan Baju (CSS)?
  <br><br>
  <div style="text-align:center; margin: 20px 0;"><img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&q=80" alt="Sihir Kode" style="max-width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);"></div>Caranya dengan <strong>DOM (Document Object Model)</strong>. JS bisa ngambil elemen HTML, mengubah teks di dalamnya, menghapusnya, atau mengganti warna CSS-nya secara <em>real-time</em>!
  <br>Fitur ganti <em>Dark Mode</em> di website? Itu semua kerjaan DOM!
</div>
<div class="lc-code">
  <div class="code-lbl">📝 Sihir DOM Manipulation</div>
  <pre class="code-pre"><span class="c">// Tangkap elemen HTML yang ID-nya "judul"</span>
<span class="k">let</span> h1 = <span class="k">document</span>.<span class="t">getElementById</span>(<span class="n">"judul"</span>);

<span class="c">// Ubah isi tulisannya (innerHTML)</span>
h1.<span class="a">innerHTML</span> = <span class="n">"Teksnya Berubah Bos!"</span>;

<span class="c">// Ubah bajunya / CSS (style)</span>
h1.<span class="a">style</span>.color = <span class="n">"blue"</span>;</pre>
  <button onclick="openPlayground(LESSONS.find(l=>l.id==='j6').playgroundCode)" style="background:var(--js); color:#111; border:none; padding:12px 24px; border-radius:8px; font-weight:900; font-size:1.05rem; cursor:pointer; margin-top:12px;">⚡ Main Sihir DOM (Playground)</button>
</div>`,
          pool: [
            {
              q: "Perintah JS apa yang paling sering dipakai untuk mencari/menangkap satu elemen HTML berdasarkan NIK/ID-nya?",
              opts: [
                "document.findId()",
                "document.getElementById()",
                "html.get()",
                "window.searchID()",
              ],
              ans: 1,
              exp: "getElementById() adalah jembatan paling populer bagi JS untuk ngambil suatu elemen dari HTML secara spesifik lewat atribut ID.",
            },
            {
              q: "Lewat property apa JS bisa mengubah warna teks elemen HTML (CSS) secara langsung?",
              opts: [
                "elemen.css",
                "elemen.color",
                "elemen.style",
                "elemen.baju",
              ],
              ans: 2,
              exp: "Property .style di DOM digunakan untuk memanipulasi CSS inline sebuah elemen HTML secara langsung dari JS.",
            },
          ],
        },
      ];

      // ══════════════════════════════════════════════════════
      //  GAME STATE
      // ══════════════════════════════════════════════════════

      const MAX_XP = LESSONS.length * 100; // 1300
      const PASS = 2; // need all 2 correct to pass (perfect score)
      const QUIZ_N = 2; // number of questions per quiz

      let STATE = {
        xp: 0,
        streak: 0,
        currentSection: "html",
        activeLesson: null,
        activeChallengeLesson: null,
        quizzes: {},
        lessonState: {},
      };

      // init default lesson states
      LESSONS.forEach((l, i) => {
        STATE.lessonState[l.id] = {
          status: i === 0 ? "study" : "locked",
          attempts: 0,
          stars: 0,
        };
      });
      STATE.activeLesson = LESSONS[0].id;

      // ══════════════════════════════════════════════════════
      //  SAVE & LOAD STATE (CHECKPOINT)
      // ══════════════════════════════════════════════════════
      function loadState() {
        const saved = localStorage.getItem("webDevQuestStateV2");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            // Shallow merge for top-level properties
            STATE.xp = parsed.xp ?? STATE.xp;
            STATE.streak = parsed.streak ?? STATE.streak;
            STATE.currentSection =
              parsed.currentSection ?? STATE.currentSection;
            STATE.activeLesson = parsed.activeLesson ?? STATE.activeLesson;
            STATE.activeChallengeLesson =
              parsed.activeChallengeLesson ?? STATE.activeChallengeLesson;
            if (parsed.quizzes) STATE.quizzes = parsed.quizzes;
            // Deep merge for lessonState to prevent crashes if curriculum expands
            if (parsed.lessonState) {
              Object.keys(parsed.lessonState).forEach((k) => {
                if (STATE.lessonState[k]) {
                  STATE.lessonState[k] = parsed.lessonState[k];
                }
              });
            }
          } catch (e) {
            console.error("Failed to load state", e);
          }
        }
      }

      function saveState() {
        localStorage.setItem("webDevQuestStateV2", JSON.stringify(STATE));
      }

      loadState();

      // ══════════════════════════════════════════════════════
      //  HELPERS
      // ══════════════════════════════════════════════════════

      function escapeHtml(unsafe) {
        return (unsafe || "")
          .toString()
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }

      function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      function getLessons(section) {
        return LESSONS.filter((l) => l.section === section);
      }

      function getLesson(id) {
        return LESSONS.find((l) => l.id === id);
      }

      function getSectionColor(section) {
        return section === "html"
          ? "var(--html)"
          : section === "css"
            ? "var(--css)"
            : "var(--js)";
      }

      function getSectionClass(section) {
        return section + "-active";
      }

      function getDone(section) {
        return getLessons(section).filter(
          (l) => STATE.lessonState[l.id].status === "done",
        ).length;
      }

      function isAllDone(section) {
        return getLessons(section).every(
          (l) => STATE.lessonState[l.id].status === "done",
        );
      }

      function getNextLesson(id) {
        const idx = LESSONS.findIndex((l) => l.id === id);
        return LESSONS[idx + 1] || null;
      }

      function isSectionLocked(section) {
        if (section === "html") return false;
        if (section === "css") return !isAllDone("html");
        if (section === "js") return !isAllDone("css");
        return true;
      }

      // ══════════════════════════════════════════════════════
      //  QUIZ GENERATOR
      // ══════════════════════════════════════════════════════

      function generateQuiz(lessonId) {
        const lesson = getLesson(lessonId);
        const picked = shuffle(lesson.pool).slice(0, QUIZ_N);
        const questions = picked.map((item) => {
          const correctText = item.opts[item.ans];
          const shuffled = shuffle(item.opts);
          return {
            q: item.q,
            exp: item.exp, // Ensure explanation is passed down
            opts: shuffled,
            correctIdx: shuffled.indexOf(correctText),
          };
        });
        STATE.quizzes[lessonId] = {
          questions,
          answers: new Array(QUIZ_N).fill(null),
          answered: 0,
        };
      }

      // ══════════════════════════════════════════════════════
      //  RENDER
      // ══════════════════════════════════════════════════════

      function renderAll() {
        const app = document.getElementById("app");
        const sec = STATE.currentSection;

        if (isSectionLocked(sec)) {
          // Show locked message
          const prevSec = sec === "css" ? "html" : "css";
          const prevDone = getDone(prevSec);
          const prevTotal = getLessons(prevSec).length;
          app.innerHTML = `
      <div class="locked-section-msg">
        <div class="lsm-icon">🔒</div>
        <div class="lsm-title">Bagian ini belum terbuka!</div>
        <div class="lsm-desc">
          Selesaikan dulu semua pelajaran <strong>${prevSec.toUpperCase()}</strong> untuk membuka ${sec.toUpperCase()}.<br>
          Progress ${prevSec.toUpperCase()} kamu saat ini:
        </div>
        <div class="lsm-progress">
          <span>${prevDone}/${prevTotal} selesai</span>
          <div class="lsm-bar"><div class="lsm-fill" style="width:${(prevDone / prevTotal) * 100}%"></div></div>
        </div>
      </div>`;
          return;
        }

        const secData = {
          html: {
            icon: '<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" style="width:1em; vertical-align:middle;">',
            title: "HTML – Pondasi Website",
            desc: "Mulai dari sini. HTML menentukan isi & struktur halaman web.",
          },
          css: {
            icon: '<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" style="width:1em; vertical-align:middle;">',
            title: "CSS – Bikin Website Cantik!",
            desc: "HTML membangun struktur, CSS mengurus warna, ukuran, font, dan layout.",
          },
          js: {
            icon: '<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" style="width:1em; vertical-align:middle; border-radius:4px;">',
            title: "JavaScript – Website Jadi Hidup!",
            desc: "HTML=tulang, CSS=penampilan, JS=otak – bisa respons klik, hitung, ubah konten!",
          },
        }[sec];

        const lessons = getLessons(sec);
        const color = getSectionColor(sec);
        let html = `
    <div class="sec-intro" style="border-left:3px solid ${color}">
      <div class="si-icon">${secData.icon}</div>
      <div class="si-text">
        <h2 style="color:${color}">${secData.title}</h2>
        <p>${secData.desc}</p>
      </div>
    </div>
    <div class="progress-ring">
      <span class="pr-label">${getDone(sec)}/${lessons.length} Selesai</span>
      <div class="pr-bar"><div class="pr-fill" style="width:${(getDone(sec) / lessons.length) * 100}%;background:${color}"></div></div>
    </div>`;

        lessons.forEach((l) => {
          html += renderLessonCard(l);
        });

        if (isAllDone(sec)) {
          html += renderSectionComplete(sec);
        }

        app.innerHTML = html;
        attachQuizEvents();
      }

      function renderLessonCard(lesson) {
        const st = STATE.lessonState[lesson.id];
        const sec = lesson.section;
        const color = getSectionColor(sec);
        const secCls = getSectionClass(sec);

        if (st.status === "locked") {
          return `
      <div class="lcard status-locked" id="lcard-${lesson.id}">
        <div class="lcard-hd">
          <div class="lcard-icon icon-lock">🔒</div>
          <div class="lcard-info">
            <div class="lcard-num">PELAJARAN ${lesson.num}</div>
            <div class="lcard-title" style="opacity:.5">${lesson.title}</div>
            <div class="lcard-desc">Selesaikan pelajaran sebelumnya dulu!</div>
          </div>
          <div class="lcard-right">
            <span class="xp-pill xp-pending">+${lesson.xp} XP</span>
          </div>
        </div>
      </div>`;
        }

        if (st.status === "done") {
          const s = st.stars;
          const stars = "⭐".repeat(s) + "☆".repeat(3 - s);
          return `
      <div class="lcard status-done" id="lcard-${lesson.id}">
        <div class="lcard-hd" style="cursor:pointer;" onclick="toggleContent('${lesson.id}')">
          <div class="lcard-icon icon-done">✅</div>
          <div class="lcard-info">
            <div class="lcard-num">PELAJARAN ${lesson.num} · SELESAI</div>
            <div class="lcard-title">${lesson.title}</div>
            <div class="lcard-desc" style="color:var(--green)">${stars} Percobaan ke-${st.attempts}</div>
          </div>
          <div class="lcard-right" style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
            <span class="xp-pill xp-earned">+${lesson.xp} XP</span>
            <button class="qr-btn" style="padding:6px 10px; font-size:0.75rem; background:rgba(255,255,255,0.05); color:#fff; border:1px solid rgba(255,255,255,0.1); border-radius:4px; margin:0; pointer-events:none;">
              ${st.showContent ? "Tutup Materi ⬆" : "Baca Ulang 📖"}
            </button>
          </div>
        </div>
        ${
          st.showContent
            ? `
        <div class="lcard-body" style="padding-top:0;">
          <div class="lc-wrap">
            ${lesson.content}
          </div>
        </div>
        `
            : ""
        }
      </div>`;
        }

        if (st.status === "study") {
          const sqClass = `sqb-${sec}`;
          return `
      <div class="lcard status-study ${secCls}" id="lcard-${lesson.id}">
        <div class="lcard-hd" style="cursor:pointer;" onclick="toggleContent('${lesson.id}')">
          <div class="lcard-icon icon-${sec}">${lesson.icon}</div>
          <div class="lcard-info">
            <div class="lcard-num">PELAJARAN ${lesson.num} · BELAJAR SEKARANG</div>
            <div class="lcard-title" style="color:${color}">${lesson.title}</div>
            <div class="lcard-desc">${lesson.desc}</div>
          </div>
          <div class="lcard-right" style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
            <span class="xp-pill xp-pending">+${lesson.xp} XP</span>
            <button class="qr-btn" style="padding:6px 10px; font-size:0.75rem; background:rgba(255,255,255,0.05); color:#fff; border:1px solid rgba(255,255,255,0.1); border-radius:4px; margin:0; pointer-events:none;">
              ${st.showContent ? "Tutup Materi ⬆" : "Buka Materi 📖"}
            </button>
          </div>
        </div>
        ${
          st.showContent
            ? `
        <div class="lcard-body">
          <div class="lc-wrap">
            ${lesson.content}
            <button class="start-quiz-btn ${sqClass}" onclick="startQuiz('${lesson.id}')">
              📝 Saya Sudah Mengerti! Mulai Quiz →
            </button>
          </div>
        </div>
        `
            : ""
        }
      </div>`;
        }

        if (st.status === "quiz") {
          return `
      <div class="lcard status-quiz ${secCls}" id="lcard-${lesson.id}">
        <div class="lcard-hd">
          <div class="lcard-icon icon-${sec}">📝</div>
          <div class="lcard-info">
            <div class="lcard-num">PELAJARAN ${lesson.num} · QUIZ</div>
            <div class="lcard-title" style="color:${color}">${lesson.title}</div>
            <div class="lcard-desc">Jawab ${QUIZ_N} soal dengan benar untuk lanjut!</div>
          </div>
          <div class="lcard-right">
            <span class="quiz-attempt-badge">Percobaan ${st.attempts + 1}</span>
          </div>
        </div>
        <div class="lcard-body">
          ${renderQuizBody(lesson.id)}
        </div>
      </div>`;
        }

        return "";
      }

      function renderQuizBody(lessonId) {
        const qz = STATE.quizzes[lessonId];
        const lesson = getLesson(lessonId);
        const sec = lesson.section;
        const color = getSectionColor(sec);

        const questionsHtml = qz.questions
          .map(
            (q, qi) => `
    <div class="q-block" id="qblock-${lessonId}-${qi}">
      <div class="q-text"><span class="q-num">Soal ${qi + 1}.</span>${escapeHtml(q.q)}</div>
      <div class="q-opts">
        ${q.opts
          .map(
            (opt, oi) => `
          <button class="q-opt" id="qopt-${lessonId}-${qi}-${oi}"
            onclick="answerQ('${lessonId}', ${qi}, ${oi})">
            ${escapeHtml(opt)}
          </button>
        `,
          )
          .join("")}
      </div>
      <div class="q-feedback" id="qfb-${lessonId}-${qi}"></div>
    </div>`,
          )
          .join("");

        return `
    <div class="quiz-wrap" id="qwrap-${lessonId}">
      <div class="quiz-hd">
        <div class="quiz-hd-left">
          <h3 style="color:${color}">🧠 Quiz: ${lesson.title}</h3>
          <p>Jawab semua ${QUIZ_N} soal. Harus sempurna (${QUIZ_N}/${QUIZ_N}) untuk lanjut!</p>
        </div>
      </div>
      ${questionsHtml}
      <button class="quiz-submit-btn" id="qsubmit-${lessonId}"
        onclick="submitQuiz('${lessonId}')" disabled>
        Cek Jawaban →
      </button>
      <div class="quiz-result" id="qresult-${lessonId}"></div>
    </div>`;
      }

      function renderSectionComplete(sec) {
        const next =
          sec === "html" ? "CSS" : sec === "css" ? "JavaScript" : null;
        const nextSec = sec === "html" ? "css" : sec === "css" ? "js" : null;
        const color = getSectionColor(sec);
        const emoji = sec === "html" ? "🏗️" : sec === "css" ? "🎨" : "⚡";

        let nextBtn = next
          ? `<button class="sc-btn" style="background:${getSectionColor(nextSec)};color:#111"
        onclick="showSection('${nextSec}')">
        Lanjut ke ${next}! →
      </button>`
          : `<button class="sc-btn" style="background:var(--green);color:#111">
        🏆 SELESAI! Kamu sudah jago Web Dev!
      </button>`;

        return `
    <div class="sec-complete show">
      <div class="sc-emoji">${emoji}</div>
      <div class="sc-title" style="color:${color}">${sec.toUpperCase()} Selesai! 🎉</div>
      <div class="sc-desc">Kamu sudah menyelesaikan semua pelajaran ${sec.toUpperCase()}.<br>
        Total XP diraih: <strong style="color:var(--js)">${getDone(sec) * 100} XP</strong></div>
      ${nextBtn}
    </div>`;
      }

      // ══════════════════════════════════════════════════════
      //  GAME LOGIC
      // ══════════════════════════════════════════════════════

      function showSection(sec) {
        if (isSectionLocked(sec)) return;
        STATE.currentSection = sec;

        // Update tabs
        document.querySelectorAll(".stab").forEach((t) => {
          t.classList.remove("on-html", "on-css", "on-js");
        });
        document.getElementById("stab-" + sec).classList.add("on-" + sec);

        renderAll();
        document
          .getElementById("app")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }

      function startQuiz(lessonId) {
        const lesson = getLesson(lessonId);
        const st = STATE.lessonState[lessonId];
        st.attempts++;

        if (lesson.challenge) {
          STATE.activeChallengeLesson = lessonId;
          openPlayground(lesson.challenge.initialCode, lesson.challenge);
          saveState();
          return;
        }

        st.status = "quiz";
        generateQuiz(lessonId);
        renderAll();
        // Scroll to the quiz card
        setTimeout(() => {
          const el = document.getElementById("lcard-" + lessonId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }

      function answerQ(lessonId, qi, oi) {
        const qz = STATE.quizzes[lessonId];
        if (qz.submitted) return;

        // Reset confirmation state if user changes an answer
        if (qz.confirming) {
          qz.confirming = false;
          const submitBtn = document.getElementById(`qsubmit-${lessonId}`);
          if (submitBtn) {
            submitBtn.textContent = "Cek Jawaban →";
            submitBtn.style.background = "";
            submitBtn.style.color = "";
          }
        }

        qz.answers[qi] = oi;

        // Visual feedback for selection
        const opts = document.querySelectorAll(
          `[id^="qopt-${lessonId}-${qi}-"]`,
        );
        opts.forEach((btn, i) => {
          if (i === oi) {
            btn.style.background = "rgba(255,255,255,0.15)";
            btn.style.borderColor = "rgba(255,255,255,0.3)";
          } else {
            btn.style.background = "";
            btn.style.borderColor = "";
          }
        });

        // Recount answered
        let answered = 0;
        qz.answers.forEach((a) => {
          if (a !== null) answered++;
        });
        qz.answered = answered;

        if (qz.answered === QUIZ_N) {
          const submitBtn = document.getElementById(`qsubmit-${lessonId}`);
          if (submitBtn) submitBtn.disabled = false;
        }
      }

      function submitQuiz(lessonId) {
        const qz = STATE.quizzes[lessonId];
        const submitBtn = document.getElementById(`qsubmit-${lessonId}`);

        if (!qz.confirming) {
          qz.confirming = true;
          if (submitBtn) {
            submitBtn.textContent = "🤔 Yakin? Klik lagi untuk kumpulkan!";
            submitBtn.style.background = "var(--js)";
            submitBtn.style.color = "#111";
          }
          return;
        }

        const st = STATE.lessonState[lessonId];
        const lesson = getLesson(lessonId);

        qz.submitted = true;
        let benar = 0;

        // Show right/wrong feedback for all questions
        qz.questions.forEach((q, qi) => {
          const oi = qz.answers[qi];
          const pickedBtn = document.getElementById(
            `qopt-${lessonId}-${qi}-${oi}`,
          );
          const fb = document.getElementById(`qfb-${lessonId}-${qi}`);
          const correctText = q.opts[q.correctIdx];

          const opts = document.querySelectorAll(
            `[id^="qopt-${lessonId}-${qi}-"]`,
          );
          opts.forEach((btn, i) => {
            btn.disabled = true;
            btn.style.background = "";
            btn.style.borderColor = "";
            if (i === q.correctIdx && i !== oi) btn.classList.add("show-ans");
          });

          if (oi === q.correctIdx) {
            benar++;
            if (pickedBtn) {
              pickedBtn.classList.remove("show-ans");
              pickedBtn.classList.add("correct");
            }
            if (fb) {
              fb.className = "q-feedback fb-ok show";
              fb.innerHTML =
                "✅ <strong>Benar!</strong>" +
                (q.exp
                  ? `<br><small style="opacity:0.9">💡 ${escapeHtml(q.exp)}</small>`
                  : "");
            }
          } else {
            if (pickedBtn) {
              pickedBtn.classList.add("wrong");
            }
            if (fb) {
              fb.className = "q-feedback fb-err show";
              fb.innerHTML =
                `❌ <strong>Kurang tepat.</strong><br><span style="color:var(--text)">Jawaban yang benar adalah: <strong>${escapeHtml(correctText)}</strong>.</span>` +
                (q.exp
                  ? `<br><small style="color:var(--muted); margin-top:4px; display:block">💡 Penjelasan: ${escapeHtml(q.exp)}</small>`
                  : "");
            }
          }
        });

        const resultEl = document.getElementById(`qresult-${lessonId}`);
        if (submitBtn) submitBtn.disabled = true;

        if (benar === QUIZ_N) {
          // PASS!
          const stars = st.attempts === 1 ? 3 : st.attempts === 2 ? 2 : 1;
          st.stars = stars;
          st.status = "done";
          STATE.xp += lesson.xp;
          STATE.streak++;

          showLevelUp(lessonId, stars);
        } else {
          // FAIL
          const salah = QUIZ_N - benar;
          const msg =
            benar === 0
              ? "😅 Wah, semua salah nih! Baca lagi materi di atas ya!"
              : `😊 ${benar} benar, ${salah} salah. Hampir! Coba lagi setelah baca ulang.`;

          if (resultEl) {
            resultEl.className = "quiz-result show";
            resultEl.innerHTML = `
        <div class="qr-score" style="color:var(--red)">${benar}/${QUIZ_N}</div>
        <div class="qr-label">Jawaban Benar</div>
        <div class="qr-msg" style="color:${benar === 0 ? "var(--red)" : "var(--js)"}">${msg}</div>
        <div class="qr-actions">
          <button class="qr-btn qrb-study" onclick="studyAgain('${lessonId}')">
            📖 Pelajari Lagi
          </button>
          <button class="qr-btn qrb-retry" onclick="retryQuiz('${lessonId}')">
            🔄 Quiz Lagi (soal baru)
          </button>
        </div>`;
          }
          STATE.streak = 0;
        }

        updateHUD();
      }

      function studyAgain(lessonId) {
        STATE.lessonState[lessonId].status = "study";
        renderAll();
        setTimeout(() => {
          const el = document.getElementById("lcard-" + lessonId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }

      function retryQuiz(lessonId) {
        const st = STATE.lessonState[lessonId];
        st.attempts++;
        generateQuiz(lessonId);
        renderAll();
        setTimeout(() => {
          const el = document.getElementById("lcard-" + lessonId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }

      function toggleContent(lessonId) {
        const st = STATE.lessonState[lessonId];
        st.showContent = !st.showContent;
        renderAll();
      }

      // ══════════════════════════════════════════════════════
      //  LEVEL UP OVERLAY
      // ══════════════════════════════════════════════════════

      function showLevelUp(lessonId, stars) {
        const lesson = getLesson(lessonId);
        const next = getNextLesson(lessonId);
        const sec = lesson.section;
        const color = getSectionColor(sec);

        document.getElementById("lu-stars").textContent =
          "⭐".repeat(stars) + "☆".repeat(3 - stars);
        document.getElementById("lu-icon").textContent = lesson.icon;
        document.getElementById("lu-title").style.color = color;
        document.getElementById("lu-xp").textContent = `+${lesson.xp} XP`;
        document.getElementById("lu-lesson").textContent =
          lesson.title + " selesai!";

        const contBtn = document.getElementById("lu-continue");
        contBtn.style.background = color;

        if (next && !isSectionLocked(next.section)) {
          document.getElementById("lu-unlock").style.display = "block";
          document.getElementById("lu-unlock").textContent =
            `🔓 "${next.title}" terbuka!`;
        } else if (next && next.section !== sec) {
          document.getElementById("lu-unlock").style.display = "block";
          document.getElementById("lu-unlock").textContent =
            `🎉 ${next.section.toUpperCase()} section terbuka!`;
        } else if (!next) {
          document.getElementById("lu-unlock").style.display = "block";
          document.getElementById("lu-unlock").textContent =
            "🏆 Semua pelajaran selesai! Kamu jago!";
        } else {
          document.getElementById("lu-unlock").style.display = "none";
        }

        document.getElementById("luOverlay").classList.add("show");
      }

      function closeLevelUp() {
        document.getElementById("luOverlay").classList.remove("show");

        // Unlock next lesson
        const currentDone = LESSONS.find(
          (l) =>
            STATE.lessonState[l.id].status === "done" &&
            !STATE.lessonState[l.id]._notified,
        );
        // Find the most recently completed lesson
        const doneLessons = LESSONS.filter(
          (l) => STATE.lessonState[l.id].status === "done",
        );
        const lastDone = doneLessons[doneLessons.length - 1];

        if (lastDone) {
          const next = getNextLesson(lastDone.id);
          if (next && STATE.lessonState[next.id].status === "locked") {
            STATE.lessonState[next.id].status = "study";
            STATE.activeLesson = next.id;
            // Unlock section if needed
            updateSectionTabs();
          }
        }

        updateHUD();
        renderAll();

        // Scroll to next unlocked lesson
        setTimeout(() => {
          const el = document.getElementById("lcard-" + STATE.activeLesson);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      }

      // ══════════════════════════════════════════════════════
      //  HUD UPDATE
      // ══════════════════════════════════════════════════════

      function updateHUD() {
        const pct = Math.round((STATE.xp / MAX_XP) * 100);
        document.getElementById("xp-bar").style.width = pct + "%";
        document.getElementById("gh-xp").textContent =
          STATE.xp + " / " + MAX_XP + " XP";
        document.getElementById("xp-label").textContent =
          pct +
          "% selesai · " +
          Math.floor(STATE.xp / 100) +
          " pelajaran tamat";

        const level = Math.floor(STATE.xp / 100) + 1;
        document.getElementById("gh-level").textContent = "Level " + level;

        const streakEl = document.getElementById("gh-streak");
        if (STATE.streak >= 2) {
          streakEl.style.display = "flex";
          document.getElementById("streak-num").textContent = STATE.streak;
        } else {
          streakEl.style.display = "none";
        }

        updateSectionTabs();
        saveState();
      }

      function updateSectionTabs() {
        ["html", "css", "js"].forEach((sec) => {
          const btn = document.getElementById("stab-" + sec);
          const cnt = document.getElementById("stab-" + sec + "-count");
          const done = getDone(sec);
          const total = getLessons(sec).length;
          cnt.textContent = `(${done}/${total})`;

          const locked = isSectionLocked(sec);
          if (locked) {
            btn.classList.add("tab-locked");
            btn.querySelector(":first-child") &&
              (btn.childNodes[0].textContent = "🔒 " + sec.toUpperCase() + " ");
          } else {
            btn.classList.remove("tab-locked");
            const sectionIcon =
              sec === "html"
                ? '<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" style="width:1.2em; vertical-align:middle; margin-right:6px;">'
                : sec === "css"
                  ? '<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" style="width:1.2em; vertical-align:middle; margin-right:6px;">'
                  : '<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" style="width:1.2em; vertical-align:middle; margin-right:6px; border-radius:3px;">';

            btn.childNodes[0].innerHTML = sectionIcon;
            btn.childNodes[1].textContent = sec.toUpperCase();
            if (done === total) {
              if (!btn.querySelector(".stab-done")) {
                const badge = document.createElement("div");
                badge.className = "stab-done";
                badge.textContent = "✓";
                btn.appendChild(badge);
              }
            }
          }
        });
      }

      function attachQuizEvents() {
        // Events are handled via inline onclick
      }

      // ══════════════════════════════════════════════════════
      //  PLAYGROUND LOGIC
      // ══════════════════════════════════════════════════════

      let pgEditor = null;
      let currentChallenge = null;

      function openPlayground(initialCode, challenge = null) {
        currentChallenge = challenge;
        const overlay = document.getElementById("pgOverlay");
        const challengeBox = document.getElementById("pgChallengeBox");
        const checkBtn = document.getElementById("pgCheckBtn");

        if (challenge) {
          challengeBox.style.display = "flex";
          document.getElementById("pgChallengeText").innerHTML =
            challenge.instruction;
          checkBtn.style.display = "block";
        } else {
          challengeBox.style.display = "none";
          checkBtn.style.display = "none";
        }

        overlay.style.display = ""; // Clear any inline display:none from previous close
        overlay.classList.add("show");

        if (!pgEditor) {
          pgEditor = CodeMirror.fromTextArea(
            document.getElementById("pgCode"),
            {
              mode: "htmlmixed",
              theme: "material-ocean",
              lineNumbers: true,
              gutters: ["CodeMirror-lint-markers"],
              lint: true,
            },
          );
          pgEditor.on("change", () => {
            clearTimeout(pgEditor.runTimeout);
            pgEditor.runTimeout = setTimeout(runPlayground, 400);
          });
        }

        setTimeout(() => {
          pgEditor.setValue(initialCode || "");
          pgEditor.refresh();
          runPlayground();
        }, 50);

        // Refresh again after modal animation (300ms) completes to fix gutter overlap
        setTimeout(() => {
          pgEditor.refresh();
        }, 350);
      }

      function closePlayground() {
        const overlay = document.getElementById("pgOverlay");
        overlay.classList.remove("show");
        // Wait for transition before hiding
        setTimeout(() => {
          overlay.style.display = "none";
        }, 300);
        currentChallenge = null;
      }

      function checkChallenge() {
        if (!currentChallenge || !pgEditor) return;
        const code = pgEditor.getValue();
        let passed = true;
        let errorMsg = "";

        for (let rule of currentChallenge.validateRegex) {
          if (!rule.regex.test(code)) {
            passed = false;
            errorMsg = rule.checkFail ? rule.checkFail(code) : rule.error;
            break;
          }
        }

        if (passed) {
          alert("Hebat! Kode kamu sudah benar! 🎉");
          closePlayground();
          const lessonId = STATE.activeChallengeLesson;
          const st = STATE.lessonState[lessonId];
          st.status = "done";
          const stars = st.attempts === 1 ? 3 : st.attempts === 2 ? 2 : 1;
          st.stars = stars;
          STATE.xp += getLesson(lessonId).xp;
          STATE.streak++;
          saveState();
          showLevelUp(lessonId, stars);
        } else {
          alert("❌ Belum tepat: " + errorMsg + "\\n\\nCoba perbaiki lagi!");
        }
      }

      function runPlayground() {
        if (!pgEditor) return;
        const code = pgEditor.getValue();
        const iframe = document.getElementById("pgResult");

        const titleMatch = code.match(/<title>([^<]*)<\/title>/i);
        document.getElementById("pgBrowserTitle").textContent = titleMatch
          ? titleMatch[1]
          : "Tanpa Judul";

        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
      }

      // ══════════════════════════════════════════════════════

      // ══════════════════════════════════════════════════════
      //  RESIZER LOGIC
      // ══════════════════════════════════════════════════════
      const resizer = document.getElementById("pgResizer");
      const editorPane = document.querySelector(".pg-editor-pane");
      const previewPane = document.querySelector(".pg-preview-pane");
      let isResizing = false;

      resizer.addEventListener("mousedown", (e) => {
        isResizing = true;
        resizer.classList.add("dragging");
        document.body.style.cursor =
          window.innerWidth > 768 ? "col-resize" : "row-resize";
        // Disable iframe pointer events so it doesn't swallow mouse events during drag
        document.getElementById("pgResult").style.pointerEvents = "none";
      });

      // Support for touch devices
      resizer.addEventListener(
        "touchstart",
        (e) => {
          isResizing = true;
          resizer.classList.add("dragging");
          document.getElementById("pgResult").style.pointerEvents = "none";
        },
        { passive: true },
      );

      document.addEventListener("mousemove", handleDrag);
      document.addEventListener(
        "touchmove",
        (e) => {
          if (isResizing) handleDrag(e.touches[0]);
        },
        { passive: true },
      );

      function handleDrag(e) {
        if (!isResizing) return;
        const workspace = document.querySelector(".pg-workspace");
        const rect = workspace.getBoundingClientRect();

        if (window.innerWidth > 768) {
          // Horizontal resize
          let newWidth = e.clientX - rect.left;
          if (newWidth < 100) newWidth = 100;
          if (newWidth > rect.width - 100) newWidth = rect.width - 100;
          const percentage = (newWidth / rect.width) * 100;
          editorPane.style.flex = `0 0 ${percentage}%`;
          previewPane.style.flex = "1";
        } else {
          // Vertical resize
          let newHeight = e.clientY - rect.top;
          if (newHeight < 100) newHeight = 100;
          if (newHeight > rect.height - 100) newHeight = rect.height - 100;
          const percentage = (newHeight / rect.height) * 100;
          editorPane.style.flex = `0 0 ${percentage}%`;
          previewPane.style.flex = "1";
        }
      }

      document.addEventListener("mouseup", stopDrag);
      document.addEventListener("touchend", stopDrag);

      function stopDrag() {
        if (isResizing) {
          isResizing = false;
          resizer.classList.remove("dragging");
          document.body.style.cursor = "";
          document.getElementById("pgResult").style.pointerEvents = "auto";
          if (pgEditor) pgEditor.refresh();
        }
      }

      //  INIT
      // ══════════════════════════════════════════════════════

      updateHUD();
      renderAll();
    