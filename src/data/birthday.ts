/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING PERSONAL HERE.
 *  Nothing in the UI components needs to change.
 * ─────────────────────────────────────────────────────────────
 */

/** Unlock moment: 11 September 2026, 00:00 WIB (Asia/Jakarta, UTC+7). */
export const UNLOCK_ISO = "2026-09-11T00:00:00+07:00";
export const UNLOCK_TIMESTAMP = new Date(UNLOCK_ISO).getTime();

export const birthday = {
  name: "Sheyra",
  age: 17,
  from: "Sena",
  dateLabel: "11 September 2026",
  timeLabel: "00:00 WIB",
  /** Put your audio file at public/music/seventeen.mp3 */
  musicSrc: "/music/seventeen.mp3",
  musicTitle: "Seventeen",
};

/**
 * Put the six photos in  public/photos/  with these names
 * (or change the paths below to anything you like).
 */
export const sheyraPhotos: [string, string, string, string, string, string] = [
  "/photos/sheyra-1.jpg",
  "/photos/sheyra-2.jpg",
  "/photos/sheyra-3.jpg",
  "/photos/sheyra-4.jpg",
  "/photos/sheyra-5.jpg",
  "/photos/sheyra-6.jpg",
];

export const lockScreen = {
  title: ["Something", "special", "is", "waiting for you..."],
  subtitle: "Get ready for a surprise!",
  unlocksOn: "Unlocks on",
  footer: "Come back when",
  footerTime: "00:00",
  quote: ["Some moments are worth the wait.", "This is one of them."],
};

export const unlockText = "Something special is finally here...";

export const hero = {
  photo: sheyraPhotos[0],
  title: "Happy Birthday, Sheyra! ♡",
  subtitle: "17 looks good on you ✨",
  button: "Let's Begin →",
  polaroidCaption: "the birthday girl ♡",
};

export const letter = {
  photo: sheyraPhotos[1],
  polaroidCaption: "one of my favorite people",
  greeting: "Dear Sheyra,",
  paragraphs: [
    "Akhirnya 17 juga ya. Rasanya baru kemarin kita masih sering ketawa gara-gara hal-hal random yang sebenarnya nggak penting, tapi entah kenapa selalu jadi cerita yang paling diingat.",
    "Makasih udah jadi teman yang selalu ada. Yang bisa diajak serius, tapi juga bisa diajak ngobrol ngalor-ngidul sampai lupa waktu. Yang nggak pernah bosen dengerin cerita aku, walaupun ceritanya itu-itu aja.",
    "Di umur yang baru ini, aku cuma berharap kamu makin bahagia, makin percaya sama diri sendiri, dan makin dekat sama semua hal yang kamu impikan. Kamu pantas dapat semua yang baik-baik.",
    "Jangan berubah ya. Tetap jadi Sheyra yang apa adanya, yang gampang ketawa, dan yang selalu bikin suasana jadi lebih ringan.",
  ],
  closing: "Happy 17th birthday, Sheyra.",
  signature: "— Sena",
};

export const memories = {
  title: "Our Memories",
  subtitle: "little pieces of a good friendship",
  items: [
    { photo: sheyraPhotos[0], caption: "jalan-jalan ke kebun raya ✨" },
    { photo: sheyraPhotos[1], caption: "selfie iseng, tapi jadi favorit" },
    { photo: sheyraPhotos[2], caption: "random moments, good memories" },
    { photo: sheyraPhotos[3], caption: "di tengah taman bunga, ceria banget" },
    { photo: sheyraPhotos[4], caption: "senyum yang selalu bikin hari lebih baik" },
    { photo: sheyraPhotos[5], caption: "and many more to come ♡" },
  ],
};

export const wishes = {
  title: "Things I Wish For You",
  subtitle: "kecil-kecil tapi tulus",
  items: [
    { icon: "smile", text: "Semoga kamu selalu bahagia." },
    { icon: "star", text: "Semoga semua yang kamu impikan tercapai." },
    { icon: "users", text: "Semoga selalu dikelilingi orang-orang baik." },
    { icon: "sparkles", text: "Semoga tahun ke-17 ini membawa banyak cerita seru." },
    { icon: "heart", text: "Semoga kamu tetap jadi Sheyra yang kita kenal." },
    { icon: "sun", text: "Semoga setiap harinya terasa lebih ringan dan hangat." },
  ] as const,
};

export const finale = {
  photo: sheyraPhotos[5],
  title: "Happy 17th Birthday, Sheyra ♡",
  subtitle: "Thank you for being a part of my story.",
  /** Your big final message. Each string is one paragraph. */
  message: [
    "Segini dulu kejutan kecil dariku. Semoga di umur ke-17 ini, kamu makin yakin sama langkahmu sendiri, dan makin banyak alasan buat tersenyum.",
    "Terima kasih sudah jadi bagian dari cerita ini. Selamat ulang tahun, Sheyra — sampai ketemu di cerita-cerita berikutnya.",
  ],
  signature: "— Sena",
};
