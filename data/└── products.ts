export type Category =
  | "Temizlik"
  | "Mutfak"
  | "Kağıt & Hijyen"
  | "Kişisel Bakım"
  | "Ev & Yaşam"
  | "Evcil Hayvan"
  | "Bebek"
  | "Hırdavat";

export type Product = {
  id: string;
  name: string;
  category: Category;
  unit: string;
};

export const products: Product[] = [
  {
    id: "temizlik-camasir-deterjani",
    name: "Çamaşır deterjanı",
    category: "Temizlik",
    unit: "adet",
  },
  {
    id: "temizlik-bulasik-deterjani",
    name: "Bulaşık deterjanı",
    category: "Temizlik",
    unit: "adet",
  },
  {
    id: "temizlik-yuzey-temizleyici",
    name: "Yüzey temizleyici",
    category: "Temizlik",
    unit: "adet",
  },
  {
    id: "temizlik-camasir-suyu",
    name: "Çamaşır suyu",
    category: "Temizlik",
    unit: "adet",
  },
  {
    id: "temizlik-cop-poseti",
    name: "Çöp poşeti",
    category: "Temizlik",
    unit: "rulo",
  },

  {
    id: "mutfak-zeytinyagi",
    name: "Zeytinyağı",
    category: "Mutfak",
    unit: "şişe",
  },
  {
    id: "mutfak-aycicek-yagi",
    name: "Ayçiçek yağı",
    category: "Mutfak",
    unit: "şişe",
  },
  {
    id: "mutfak-pirinc",
    name: "Pirinç",
    category: "Mutfak",
    unit: "paket",
  },
  {
    id: "mutfak-makarna",
    name: "Makarna",
    category: "Mutfak",
    unit: "paket",
  },
  {
    id: "mutfak-un",
    name: "Un",
    category: "Mutfak",
    unit: "paket",
  },

  {
    id: "hijyen-tuvalet-kagidi",
    name: "Tuvalet kağıdı",
    category: "Kağıt & Hijyen",
    unit: "paket",
  },
  {
    id: "hijyen-kagit-havlu",
    name: "Kağıt havlu",
    category: "Kağıt & Hijyen",
    unit: "paket",
  },
  {
    id: "hijyen-pecete",
    name: "Peçete",
    category: "Kağıt & Hijyen",
    unit: "paket",
  },

  {
    id: "bakim-sampuan",
    name: "Şampuan",
    category: "Kişisel Bakım",
    unit: "adet",
  },
  {
    id: "bakim-dus-jeli",
    name: "Duş jeli",
    category: "Kişisel Bakım",
    unit: "adet",
  },
  {
    id: "bakim-dis-macunu",
    name: "Diş macunu",
    category: "Kişisel Bakım",
    unit: "adet",
  },

  {
    id: "ev-ampul",
    name: "Ampul",
    category: "Ev & Yaşam",
    unit: "adet",
  },
  {
    id: "ev-pil",
    name: "Pil",
    category: "Ev & Yaşam",
    unit: "paket",
  },
  {
    id: "ev-mandal",
    name: "Mandal",
    category: "Ev & Yaşam",
    unit: "paket",
  },

  {
    id: "pet-kopek-mamasi",
    name: "Köpek maması",
    category: "Evcil Hayvan",
    unit: "paket",
  },
  {
    id: "pet-kedi-mamasi",
    name: "Kedi maması",
    category: "Evcil Hayvan",
    unit: "paket",
  },

  {
    id: "bebek-islak-mendil",
    name: "Bebek ıslak mendili",
    category: "Bebek",
    unit: "paket",
  },
  {
    id: "bebek-bez",
    name: "Bebek bezi",
    category: "Bebek",
    unit: "paket",
  },

  {
    id: "hirdavat-vida",
    name: "Vida",
    category: "Hırdavat",
    unit: "paket",
  },
  {
    id: "hirdavat-dubel",
    name: "Dübel",
    category: "Hırdavat",
    unit: "paket",
  },
  {
    id: "hirdavat-izole-bant",
    name: "İzole bant",
    category: "Hırdavat",
    unit: "adet",
  },
];
