╔══════════════════════════════════════════════════════════════════════════════╗
║          DOKUMENTASI MICROSITE — PANDUAN LENGKAP data.json                 ║
║          Versi 2.0 | Sistem Menu Data-Driven + Tabler Icons                 ║
╚══════════════════════════════════════════════════════════════════════════════╝

Semua konfigurasi tampilan, menu, dan konten dikendalikan SEPENUHNYA dari
file data.json. File index.html tidak perlu disentuh sama sekali.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 DAFTAR ISI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  1. Struktur File
  2. Blok "site"         — Pengaturan halaman
  3. Blok "profile"      — Banner, avatar, nama, bio
  4. Blok "menu"         — Array semua item menu
  5. Blok "footer"       — Teks footer
  6. Tipe Item Menu      — Semua tipe yang tersedia
     6.1  link
     6.2  dropdown (bisa nested)
     6.3  divider
     6.4  text
     6.5  textarea
     6.6  countdown
  7. Penggunaan Ikon
     7.1  Tabler Icons (CDN, direkomendasikan)
     7.2  Emoji
     7.3  Gambar/logo URL
  8. Properti "style"    — Kustomisasi warna, ukuran, dll
  9. Kontrol "status"    — Tampilkan / sembunyikan item
 10. Cara: Menambah menu baru
 11. Cara: Menyembunyikan menu
 12. Cara: Menghapus menu
 13. Cara: Membuat menu bertingkat (nested)
 14. Contoh Lengkap data.json
 15. Referensi Nama Ikon Tabler (populer)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 1. STRUKTUR FILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  microsite/
  ├── index.html          ← JANGAN diubah (renderer otomatis)
  ├── data.json           ← SEMUA konfigurasi ada di sini
  ├── banner.jpg          ← Foto banner atas (bisa diubah namanya di data.json)
  ├── profil.jpg          ← Foto avatar/logo (bisa diubah namanya di data.json)
  ├── icon.png            ← Favicon browser
  ├── documentation.txt   ← File ini
  └── README.md           ← Panduan ringkas

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 2. BLOK "site" — Pengaturan halaman
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "site": {
    "lang":    "id",             ← Bahasa HTML (id = Indonesia, en = Inggris)
    "title":   "MTS Nurul Falah", ← Judul tab browser
    "favicon": "icon.png"        ← File ikon browser (bisa URL)
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 3. BLOK "profile" — Bagian atas kartu (banner + avatar + nama)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "profile": {
    "status": "show",          ← "show" tampil | "hide" sembunyikan seluruh header
    "banner": "banner.jpg",    ← Foto banner (path lokal atau URL)
    "avatar": "profil.jpg",    ← Foto avatar (path lokal atau URL)
    "name":   "NAMA SEKOLAH",  ← Nama besar di bawah avatar
    "bio":    "Alamat / tagline" ← Teks kecil di bawah nama
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 4. BLOK "menu" — Daftar semua item
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "menu": [
    { item 1 },
    { item 2 },
    ...
  ]

  Urutan item dalam array = urutan tampil di layar.
  Setiap item WAJIB memiliki field: "id", "type", "status"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 5. BLOK "footer"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "footer": {
    "status": "show",
    "text":   "© 2025 MTS Nurul Falah. All rights reserved."
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 6. TIPE ITEM MENU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────────────────────┐
│ 6.1  type: "link"                                                           │
│      Tombol yang bisa diklik dan membuka URL                                │
└─────────────────────────────────────────────────────────────────────────────┘

  {
    "id":      "unik-123",       ← ID unik (tidak boleh sama dengan item lain)
    "type":    "link",
    "status":  "show",
    "icon":    "ti:school",      ← Ikon (lihat Bagian 7 untuk format)
    "label":   "Nama Tombol",    ← Teks yang tampil
    "url":     "https://...",    ← Alamat tujuan
    "target":  "_blank",         ← "_blank" = tab baru | "_self" = tab sama
    "style": {                   ← Opsional
      "bgcolor": "#1a3a6a",
      "color":   "#ffffff"
    }
  }

┌─────────────────────────────────────────────────────────────────────────────┐
│ 6.2  type: "dropdown"                                                       │
│      Tombol yang bisa dibuka/ditutup, berisi sub-item (bisa nested)         │
└─────────────────────────────────────────────────────────────────────────────┘

  {
    "id":     "drop-1",
    "type":   "dropdown",
    "status": "show",
    "icon":   "ti:folder",
    "label":  "Judul Dropdown",
    "children": [
      { item anak 1 },
      { item anak 2 },
      ...
    ]
  }

  CATATAN: "children" bisa berisi semua tipe item (link, dropdown, divider, dll).
  Dropdown bisa di-nested sedalam apapun (dropdown di dalam dropdown di dalam dropdown).

┌─────────────────────────────────────────────────────────────────────────────┐
│ 6.3  type: "divider"                                                        │
│      Garis pemisah horizontal                                               │
└─────────────────────────────────────────────────────────────────────────────┘

  {
    "id":     "div-1",
    "type":   "divider",
    "status": "show"
  }

┌─────────────────────────────────────────────────────────────────────────────┐
│ 6.4  type: "text"                                                           │
│      Paragraf teks bebas (non-klik)                                         │
└─────────────────────────────────────────────────────────────────────────────┘

  {
    "id":      "txt-1",
    "type":    "text",
    "status":  "show",
    "content": "Teks bebas yang ingin ditampilkan di sini.",
    "style": {
      "align":  "center",   ← "left" | "center" | "right"
      "color":  "#8b949e",
      "size":   "0.9rem",   ← ukuran font, mis. "14px" atau "0.9rem"
      "weight": "500"       ← ketebalan: "400"=normal, "600"=semibold, "700"=bold
    }
  }

┌─────────────────────────────────────────────────────────────────────────────┐
│ 6.5  type: "textarea"                                                       │
│      Kotak info/keterangan berjudul, tampil sebagai blok                    │
└─────────────────────────────────────────────────────────────────────────────┘

  {
    "id":      "ta-1",
    "type":    "textarea",
    "status":  "show",
    "label":   "Judul Kotak Info",   ← Judul (opsional, bisa dihapus)
    "content": "Isi teks panjang di sini. Bisa beberapa kalimat.",
    "style": {
      "bgcolor": "#0d2137",          ← Warna latar belakang kotak
      "color":   "#a0c8f0"           ← Warna teks
    }
  }

┌─────────────────────────────────────────────────────────────────────────────┐
│ 6.6  type: "countdown"                                                      │
│      Hitung mundur otomatis                                                 │
└─────────────────────────────────────────────────────────────────────────────┘

  {
    "id":       "cd-1",
    "type":     "countdown",
    "status":   "show",
    "label":    "Pendaftaran ditutup dalam",
    "deadline": "+5d",               ← Format waktu (lihat tabel di bawah)
    "style": {
      "bgcolor": "rgba(255,200,0,0.07)",
      "color":   "#ffd060"
    }
  }

  Format "deadline":
  ┌────────────────┬──────────────────────────────────┐
  │ "+5d"          │ 5 hari dari sekarang              │
  │ "+3h"          │ 3 jam dari sekarang               │
  │ "+90m"         │ 90 menit dari sekarang            │
  │ "+30s"         │ 30 detik dari sekarang            │
  │ "2025-08-17"   │ Tanggal spesifik (HUT RI)         │
  │ "2025-12-31T23:59:59" │ Tanggal + jam spesifik    │
  └────────────────┴──────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 7. PENGGUNAAN IKON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Field "icon" mendukung 3 format:

┌─────────────────────────────────────────────────────────────────────────────┐
│ 7.1  Tabler Icons — DIREKOMENDASIKAN                                        │
│      5700+ ikon gratis, open-source, dimuat otomatis via CDN                │
│      Cari ikon di: https://tabler.io/icons                                  │
└─────────────────────────────────────────────────────────────────────────────┘

  Format: "ti:nama-ikon"

  Contoh:
    "icon": "ti:school"            → ikon bangunan sekolah
    "icon": "ti:users"             → ikon sekelompok orang
    "icon": "ti:report"            → ikon laporan/dokumen
    "icon": "ti:books"             → ikon tumpukan buku
    "icon": "ti:pencil"            → ikon pensil
    "icon": "ti:calendar"          → ikon kalender
    "icon": "ti:download"          → ikon unduh
    "icon": "ti:link"              → ikon tautan
    "icon": "ti:brand-whatsapp"    → logo WhatsApp
    "icon": "ti:brand-youtube"     → logo YouTube
    "icon": "ti:brand-instagram"   → logo Instagram
    "icon": "ti:brand-facebook"    → logo Facebook

┌─────────────────────────────────────────────────────────────────────────────┐
│ 7.2  Emoji                                                                  │
└─────────────────────────────────────────────────────────────────────────────┘

  Format: langsung tulis karakter emoji

  Contoh:
    "icon": "📚"
    "icon": "🏫"
    "icon": "📝"
    "icon": "👩‍🎓"

┌─────────────────────────────────────────────────────────────────────────────┐
│ 7.3  Gambar / Logo URL                                                      │
└─────────────────────────────────────────────────────────────────────────────┘

  Format: path lokal atau URL lengkap ke file gambar (.png/.jpg/.svg/.webp)

  Contoh:
    "icon": "./img/logo-sekolah.png"
    "icon": "https://upload.wikimedia.org/…/logo.svg"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 8. PROPERTI "style"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Semua properti di bawah bersifat OPSIONAL. Jika tidak ada blok "style",
  tampilan menggunakan warna default tema gelap.

  ┌──────────┬────────────────────────────────────┬──────────────────────────┐
  │ Key      │ Penjelasan                         │ Contoh Nilai             │
  ├──────────┼────────────────────────────────────┼──────────────────────────┤
  │ bgcolor  │ Warna latar belakang item          │ "#1a3a6a"                │
  │          │                                    │ "rgba(0,100,200,0.15)"   │
  │          │                                    │ "transparent"            │
  ├──────────┼────────────────────────────────────┼──────────────────────────┤
  │ color    │ Warna teks                         │ "#ffffff"                │
  │          │                                    │ "#ffd060"                │
  │          │                                    │ "rgb(200,230,255)"       │
  ├──────────┼────────────────────────────────────┼──────────────────────────┤
  │ size     │ Ukuran font                        │ "0.9rem"                 │
  │          │                                    │ "14px"                   │
  │          │                                    │ "1.1rem"                 │
  ├──────────┼────────────────────────────────────┼──────────────────────────┤
  │ weight   │ Ketebalan font                     │ "400" (normal)           │
  │          │                                    │ "600" (semibold)         │
  │          │                                    │ "700" (bold)             │
  ├──────────┼────────────────────────────────────┼──────────────────────────┤
  │ align    │ Perataan teks (hanya type:"text")  │ "left"                   │
  │          │                                    │ "center"                 │
  │          │                                    │ "right"                  │
  └──────────┴────────────────────────────────────┴──────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 9. KONTROL "status" — Tampilkan atau Sembunyikan Item
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "status": "show"   → Item TAMPIL di halaman
  "status": "hide"   → Item TERSEMBUNYI (tidak dirender, tidak mengambil ruang)

  Status berlaku untuk:
  • Setiap item di array "menu" (termasuk sub-item dalam dropdown)
  • Blok "profile" (sembunyikan seluruh header profil)
  • Blok "footer"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 10. CARA: MENAMBAH MENU BARU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Buka data.json
  2. Temukan array "menu": [ ... ]
  3. Tambahkan blok item baru di posisi yang diinginkan

  Contoh menambah tombol "Pengumuman":
  ─────────────────────────────────────
  Sebelum:
    "menu": [
      { item A },
      { item B }
    ]

  Sesudah (ditambah di akhir):
    "menu": [
      { item A },
      { item B },
      {
        "id":     "m-pengumuman",
        "type":   "link",
        "status": "show",
        "icon":   "ti:speakerphone",
        "label":  "Pengumuman",
        "url":    "https://contoh.com/pengumuman",
        "target": "_blank"
      }
    ]

  CATATAN: Setiap "id" harus UNIK. Gunakan nama yang mudah diingat.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 11. CARA: MENYEMBUNYIKAN MENU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Cukup ganti "status": "show"  menjadi  "status": "hide"

  Contoh — menyembunyikan countdown:
  ────────────────────────────────────
  Sebelum:
    {
      "id":     "cd-1",
      "type":   "countdown",
      "status": "show",      ← tampil
      ...
    }

  Sesudah:
    {
      "id":     "cd-1",
      "type":   "countdown",
      "status": "hide",      ← tersembunyi
      ...
    }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 12. CARA: MENGHAPUS MENU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Hapus seluruh blok { ... } item tersebut dari array, termasuk koma pemisah.

  Contoh — menghapus item divider:
  ──────────────────────────────────
  Sebelum:
    "menu": [
      { "id": "m1", ... },
      { "id": "div1", "type": "divider", "status": "show" },   ← hapus ini
      { "id": "m2", ... }
    ]

  Sesudah:
    "menu": [
      { "id": "m1", ... },
      { "id": "m2", ... }
    ]

  TIP: Lebih aman menggunakan "status": "hide" daripada menghapus,
       karena lebih mudah dikembalikan jika dibutuhkan lagi.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 13. CARA: MEMBUAT MENU BERTINGKAT (NESTED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Gunakan type "dropdown" dan tambahkan array "children" di dalamnya.
  "children" bisa berisi tipe apapun termasuk dropdown lagi (nested).

  ┌─ Contoh 1 tingkat (dropdown biasa) ──────────────────────────────────────┐
  │                                                                           │
  │  {                                                                        │
  │    "id":     "dok",                                                       │
  │    "type":   "dropdown",                                                  │
  │    "status": "show",                                                      │
  │    "icon":   "ti:folder",                                                 │
  │    "label":  "Dokumen",                                                   │
  │    "children": [                                                          │
  │      {                                                                    │
  │        "id":     "dok-a",                                                 │
  │        "type":   "link",                                                  │
  │        "status": "show",                                                  │
  │        "icon":   "ti:file-text",                                          │
  │        "label":  "SK Pengangkatan",                                       │
  │        "url":    "https://drive.google.com/...",                          │
  │        "target": "_blank"                                                 │
  │      },                                                                   │
  │      {                                                                    │
  │        "id":     "dok-b",                                                 │
  │        "type":   "link",                                                  │
  │        "status": "show",                                                  │
  │        "icon":   "ti:file-text",                                          │
  │        "label":  "Surat Edaran",                                          │
  │        "url":    "https://drive.google.com/...",                          │
  │        "target": "_blank"                                                 │
  │      }                                                                    │
  │    ]                                                                      │
  │  }                                                                        │
  └───────────────────────────────────────────────────────────────────────────┘

  ┌─ Contoh 2 tingkat (dropdown di dalam dropdown) ───────────────────────────┐
  │                                                                           │
  │  {                                                                        │
  │    "id":     "arsip",                                                     │
  │    "type":   "dropdown",                                                  │
  │    "status": "show",                                                      │
  │    "icon":   "ti:archive",                                                │
  │    "label":  "Arsip",                                                     │
  │    "children": [                                                          │
  │      {                                                                    │
  │        "id":     "arsip-2024",                                            │
  │        "type":   "dropdown",                                              │
  │        "status": "show",                                                  │
  │        "icon":   "ti:folder-open",                                        │
  │        "label":  "Tahun 2024",                                            │
  │        "children": [                                                      │
  │          {                                                                │
  │            "id":     "arsip-2024-sem1",                                   │
  │            "type":   "link",                                              │
  │            "status": "show",                                              │
  │            "icon":   "ti:file",                                           │
  │            "label":  "Semester 1",                                        │
  │            "url":    "https://...",                                       │
  │            "target": "_blank"                                             │
  │          },                                                               │
  │          {                                                                │
  │            "id":     "arsip-2024-sem2",                                   │
  │            "type":   "link",                                              │
  │            "status": "show",                                              │
  │            "icon":   "ti:file",                                           │
  │            "label":  "Semester 2",                                        │
  │            "url":    "https://...",                                       │
  │            "target": "_blank"                                             │
  │          }                                                                │
  │        ]                                                                  │
  │      },                                                                   │
  │      {                                                                    │
  │        "id":     "arsip-2023",                                            │
  │        "type":   "dropdown",                                              │
  │        "status": "show",                                                  │
  │        "icon":   "ti:folder",                                             │
  │        "label":  "Tahun 2023",                                            │
  │        "children": [                                                      │
  │          {                                                                │
  │            "id":     "arsip-2023-all",                                    │
  │            "type":   "link",                                              │
  │            "status": "show",                                              │
  │            "icon":   "ti:file",                                           │
  │            "label":  "Semua Dokumen 2023",                                │
  │            "url":    "https://...",                                       │
  │            "target": "_blank"                                             │
  │          }                                                                │
  │        ]                                                                  │
  │      }                                                                    │
  │    ]                                                                      │
  │  }                                                                        │
  └───────────────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 14. CONTOH LENGKAP data.json (minimal)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{
  "site": {
    "lang":    "id",
    "title":   "Nama Lembaga",
    "favicon": "icon.png"
  },
  "profile": {
    "status": "show",
    "banner": "banner.jpg",
    "avatar": "profil.jpg",
    "name":   "NAMA LEMBAGA",
    "bio":    "Alamat atau tagline"
  },
  "menu": [

    {
      "id":     "m-siswa",
      "type":   "link",
      "status": "show",
      "icon":   "ti:users",
      "label":  "Data Siswa",
      "url":    "https://contoh.com/siswa",
      "target": "_blank"
    },

    {
      "id":     "m-rapor",
      "type":   "link",
      "status": "show",
      "icon":   "ti:report",
      "label":  "E-Rapor",
      "url":    "https://contoh.com/rapor",
      "target": "_blank"
    },

    { "id": "div-1", "type": "divider", "status": "show" },

    {
      "id":     "m-docs",
      "type":   "dropdown",
      "status": "show",
      "icon":   "ti:folder",
      "label":  "Dokumen",
      "children": [
        {
          "id":     "m-docs-sk",
          "type":   "link",
          "status": "show",
          "icon":   "ti:file-text",
          "label":  "SK Kepala Sekolah",
          "url":    "https://drive.google.com/...",
          "target": "_blank"
        },
        {
          "id":     "m-docs-surat",
          "type":   "link",
          "status": "show",
          "icon":   "ti:mail",
          "label":  "Surat Edaran",
          "url":    "https://drive.google.com/...",
          "target": "_blank"
        }
      ]
    },

    { "id": "div-2", "type": "divider", "status": "show" },

    {
      "id":      "m-info",
      "type":    "textarea",
      "status":  "show",
      "label":   "Pengumuman",
      "content": "Ujian akhir semester dijadwalkan mulai 10 Juni 2025."
    },

    {
      "id":       "m-cd",
      "type":     "countdown",
      "status":   "hide",
      "label":    "Pendaftaran ditutup dalam",
      "deadline": "+7d"
    }

  ],
  "footer": {
    "status": "show",
    "text":   "© 2025 Nama Lembaga"
  }
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 15. REFERENSI IKON TABLER (yang umum digunakan)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Pencarian lengkap: https://tabler.io/icons

  PENDIDIKAN
  ──────────
  ti:school              Bangunan sekolah
  ti:building-school     Bangunan sekolah (varian)
  ti:books               Tumpukan buku
  ti:book                Satu buku
  ti:pencil              Pensil
  ti:certificate         Sertifikat/ijazah
  ti:award               Penghargaan
  ti:users               Grup orang (siswa)
  ti:user-graduate       Wisudawan

  DOKUMEN & FILE
  ──────────────
  ti:file                File kosong
  ti:file-text           File teks
  ti:file-description    File dengan deskripsi
  ti:report              Laporan
  ti:clipboard           Clipboard
  ti:folder              Folder tutup
  ti:folder-open         Folder buka
  ti:archive             Arsip
  ti:download            Unduh
  ti:upload              Unggah

  KOMUNIKASI & MEDIA
  ──────────────────
  ti:mail                Email
  ti:phone               Telepon
  ti:speakerphone        Pengumuman/megaphone
  ti:bell                Notifikasi
  ti:brand-whatsapp      WhatsApp
  ti:brand-youtube       YouTube
  ti:brand-instagram     Instagram
  ti:brand-facebook      Facebook
  ti:brand-telegram      Telegram

  UI & NAVIGASI
  ─────────────
  ti:home                Rumah/beranda
  ti:link                Tautan
  ti:external-link       Buka tab baru
  ti:calendar            Kalender
  ti:clock               Jam
  ti:map-pin             Lokasi/pin peta
  ti:info-circle         Info
  ti:help-circle         Bantuan/tanya
  ti:settings            Pengaturan
  ti:search              Cari
  ti:star                Bintang favorit
  ti:heart               Hati/like
  ti:check               Centang
  ti:x                   Tutup/hapus

  TABEL & DATA
  ────────────
  ti:table               Tabel spreadsheet
  ti:chart-bar           Grafik batang
  ti:chart-pie           Grafik pie
  ti:database            Database

  SOSIAL & LEMBAGA
  ────────────────
  ti:building            Gedung umum
  ti:building-bank       Bank/instansi
  ti:flag                Bendera
  ti:map                 Peta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CATATAN PENTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • data.json harus merupakan JSON yang valid. Gunakan validator online seperti
    https://jsonlint.com jika mengalami masalah tampilan.

  • Setiap "id" dalam menu HARUS unik. Duplikasi id bisa menyebabkan
    dropdown tidak berfungsi dengan benar.

  • Tabler Icons memerlukan koneksi internet (dimuat dari CDN).
    Untuk penggunaan offline, unduh file CSS dari:
    https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/
    lalu ganti link CDN di index.html dengan path lokal.

  • Ikon emoji berfungsi secara offline tanpa perlu koneksi internet.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 END OF DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PEMBARUAN VERSI 2.1 — FITUR BARU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────────────────────┐
│ DIVIDER — atribut baru: thickness, color, height                           │
└─────────────────────────────────────────────────────────────────────────────┘

  {
    "id":        "div-1",
    "type":      "divider",
    "status":    "show",
    "thickness": 1,           ← Ketebalan garis dalam px. 0 = tanpa garis (spacer)
    "color":     "rgba(255,255,255,0.1)",  ← Warna garis (CSS color apapun)
    "height":    "20px"       ← Total tinggi area divider (termasuk ruang atas-bawah)
  }

  Contoh-contoh:

  Garis tipis default:
    { "id":"d1", "type":"divider", "status":"show", "thickness":1, "height":"16px" }

  Garis tebal berwarna aksen:
    { "id":"d2", "type":"divider", "status":"show",
      "thickness":3, "color":"rgba(79,156,249,0.4)", "height":"24px" }

  Hanya spasi tanpa garis (thickness=0):
    { "id":"d3", "type":"divider", "status":"show", "thickness":0, "height":"12px" }

┌─────────────────────────────────────────────────────────────────────────────┐
│ COUNTDOWN — sekarang menampilkan Hari : Jam : Menit : Detik                │
│             masing-masing dilengkapi label di bawah angka                  │
└─────────────────────────────────────────────────────────────────────────────┘

  Tampilan:
    ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐
    │  04  │ : │  23  │ : │  11  │ : │  07  │
    └──────┘   └──────┘   └──────┘   └──────┘
      HARI       JAM      MENIT      DETIK

  Tidak ada perubahan pada format JSON — countdown yang sudah ada langsung
  otomatis menggunakan tampilan baru.

  {
    "id":       "cd-1",
    "type":     "countdown",
    "status":   "show",
    "label":    "Pendaftaran ditutup dalam",
    "deadline": "+5d",
    "style": {
      "bgcolor": "rgba(255,200,0,0.07)",
      "color":   "#ffd060"
    }
  }

┌─────────────────────────────────────────────────────────────────────────────┐
│ ICON-ROW — Baris ikon horizontal (untuk media sosial, shortcut, dll)       │
└─────────────────────────────────────────────────────────────────────────────┘

  Menampilkan tombol ikon bulat/kotak tanpa teks, tersusun horizontal,
  rata tengah. Maksimal 5 per baris — jika lebih dari 5, otomatis pindah
  ke baris berikutnya.

  Setiap anak (children) mendukung: icon, url, target, label (sebagai tooltip),
  dan style (untuk mewarnai ikon masing-masing).

  {
    "id":     "sosmed",
    "type":   "icon-row",
    "status": "show",
    "children": [
      {
        "id":     "ir-wa",
        "status": "show",
        "icon":   "ti:brand-whatsapp",
        "label":  "WhatsApp",          ← muncul sebagai tooltip saat hover
        "url":    "https://wa.me/...",
        "target": "_blank",
        "style":  { "color": "#25d366" }   ← warna ikon individual
      },
      {
        "id":     "ir-ig",
        "status": "show",
        "icon":   "ti:brand-instagram",
        "label":  "Instagram",
        "url":    "https://instagram.com/akun",
        "target": "_blank",
        "style":  { "color": "#e1306c" }
      },
      {
        "id":     "ir-yt",
        "status": "show",
        "icon":   "ti:brand-youtube",
        "label":  "YouTube",
        "url":    "https://youtube.com/@channel",
        "target": "_blank",
        "style":  { "color": "#ff0000" }
      }
    ]
  }

  Referensi ikon media sosial (Tabler):
  ────────────────────────────────────
  ti:brand-whatsapp     → WhatsApp
  ti:brand-instagram    → Instagram
  ti:brand-facebook     → Facebook
  ti:brand-youtube      → YouTube
  ti:brand-telegram     → Telegram
  ti:brand-tiktok       → TikTok
  ti:brand-twitter      → Twitter/X
  ti:brand-linkedin     → LinkedIn
  ti:brand-github       → GitHub
  ti:brand-google       → Google
  ti:mail               → Email
  ti:phone              → Telepon

  CATATAN: Untuk menyembunyikan satu ikon di dalam icon-row, cukup set
  "status": "hide" pada item anak tersebut.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 END OF UPDATE v2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━