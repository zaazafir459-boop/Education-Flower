// ================= DATA MATERI PELAJARAN SMA =================
const LESSONS = [
  {
    id: "mat-trigonometri",
    subject: "Matematika",
    level: "Kelas X SMA",
    title: "Dasar Trigonometri & Sudut Istimewa",
    summary: "Memahami perbandingan sisi segitiga siku-siku (sin, cos, tan) serta nilai sudut istimewa 0°, 30°, 45°, 60°, dan 90°.",
    points: [
      "sin(θ) = Depan / Miring, cos(θ) = Samping / Miring, tan(θ) = Depan / Samping",
      "sin(30°) = 1/2, sin(45°) = 1/2 √2, sin(60°) = 1/2 √3",
      "cos(60°) = 1/2, tan(45°) = 1",
      "Identitas dasar: sin²(θ) + cos²(θ) = 1"
    ],
    quiz: {
      question: "Berapakah nilai dari sin(30°) + cos(60°)?",
      options: ["1/2", "1", "√3", "1/2 √2"],
      answerIndex: 1,
      explanation: "sin(30°) = 1/2 dan cos(60°) = 1/2, sehingga 1/2 + 1/2 = 1."
    }
  },
  {
    id: "mat-turunan",
    subject: "Matematika",
    level: "Kelas XI SMA",
    title: "Turunan Fungsi Aljabar & Aplikasi",
    summary: "Menentukan laju perubahan sesaat suatu fungsi menggunakan aturan pangkat dan kemiringan garis singgung.",
    points: [
      "Jika f(x) = a·xⁿ, maka f'(x) = a·n·xⁿ⁻¹",
      "Turunan konstanta adalah 0",
      "Fungsi naik terjadi saat f'(x) > 0 dan fungsi turun saat f'(x) < 0"
    ],
    quiz: {
      question: "Turunan pertama dari f(x) = 3x² - 4x + 7 adalah...",
      options: ["6x - 4", "3x - 4", "6x + 7", "6x² - 4"],
      answerIndex: 0,
      explanation: "Turunan 3x² adalah 6x, turunan -4x adalah -4, dan turunan 7 adalah 0."
    }
  },
  {
    id: "fis-newton",
    subject: "Fisika",
    level: "Kelas X SMA",
    title: "Hukum Newton tentang Gerak",
    summary: "Hubungan antara gaya, massa, dan percepatan benda dalam kehidupan sehari-hari.",
    points: [
      "Hukum I Newton (Kelembaman): benda mempertahankan keadaannya jika ΣF = 0",
      "Hukum II Newton: ΣF = m · a (gaya berbanding lurus dengan percepatan)",
      "Hukum III Newton (Aksi-Reaksi): F_aksi = -F_reaksi pada dua benda berbeda"
    ],
    quiz: {
      question: "Sebuah benda bermassa 4 kg didorong dengan gaya total 12 N. Berapa percepatannya?",
      options: ["2 m/s²", "3 m/s²", "8 m/s²", "48 m/s²"],
      answerIndex: 1,
      explanation: "Menggunakan ΣF = m · a → 12 = 4 · a → a = 3 m/s²."
    }
  },
  {
    id: "fis-gelombang",
    subject: "Fisika",
    level: "Kelas XI SMA",
    title: "Gelombang Mekanik & Bunyi",
    summary: "Mengenal panjang gelombang, frekuensi, periode, dan cepat rambat gelombang.",
    points: [
      "Hubungan cepat rambat: v = λ · f = λ / T",
      "Frekuensi (f) adalah banyaknya getaran/gelombang per detik (Hz)",
      "Gelombang transversal memiliki bukit dan lembah, sedangkan longitudinal memiliki rapatan dan regangan"
    ],
    quiz: {
      question: "Suatu gelombang memiliki panjang gelombang 2 m dan frekuensi 5 Hz. Cepat rambatnya adalah...",
      options: ["2,5 m/s", "7 m/s", "10 m/s", "0,4 m/s"],
      answerIndex: 2,
      explanation: "v = λ · f = 2 m × 5 Hz = 10 m/s."
    }
  },
  {
    id: "kim-stoikiometri",
    subject: "Kimia",
    level: "Kelas X SMA",
    title: "Stoikiometri & Konsep Mol",
    summary: "Menghubungkan jumlah partikel, mol, massa molar, dan volume gas pada keadaan standar (STP).",
    points: [
      "Jumlah partikel = n × 6,02 × 10²³ (Bilangan Avogadro)",
      "Massa (gram) = n × Ar atau Mr",
      "Volume gas pada STP (0°C, 1 atm): V = n × 22,4 liter"
    ],
    quiz: {
      question: "Berapa volume 2 mol gas ideal pada keadaan standar (STP)?",
      options: ["11,2 L", "22,4 L", "44,8 L", "67,2 L"],
      answerIndex: 2,
      explanation: "V_STP = n × 22,4 L = 2 × 22,4 L = 44,8 L."
    }
  },
  {
    id: "kim-termokimia",
    subject: "Kimia",
    level: "Kelas XI SMA",
    title: "Reaksi Eksoterm & Endoterm",
    summary: "Membedakan reaksi yang melepaskan kalor ke lingkungan dan yang menyerap kalor dari lingkungan.",
    points: [
      "Eksoterm: sistem melepas kalor ke lingkungan, ΔH bernilai negatif (-), suhu lingkungan naik",
      "Endoterm: sistem menyerap kalor dari lingkungan, ΔH bernilai positif (+), suhu lingkungan turun",
      "Perubahan entalpi standar (ΔH°f) diukur pada 298 K dan 1 atm"
    ],
    quiz: {
      question: "Ciri utama reaksi eksoterm adalah...",
      options: [
        "ΔH bernilai positif (+)",
        "Kalor berpindah dari lingkungan ke sistem",
        "ΔH bernilai negatif (-) dan melepas kalor",
        "Suhu lingkungan selalu turun drastis"
      ],
      answerIndex: 2,
      explanation: "Pada reaksi eksoterm, kalor dilepas ke lingkungan sehingga ΔH bertanda negatif (-)."
    }
  },
  {
    id: "bio-sel",
    subject: "Biologi",
    level: "Kelas XI SMA",
    title: "Struktur & Fungsi Organel Sel",
    summary: "Mengenal bagian-bagian sel eukariotik seperti inti sel, mitokondria, ribosom, dan kloroplas.",
    points: [
      "Nukleus (inti sel): mengatur seluruh aktivitas sel dan menyimpan materi genetik (DNA)",
      "Mitokondria: pusat respirasi sel untuk menghasilkan energi (ATP)",
      "Kloroplas (pada tumbuhan): tempat berlangsungnya fotosintesis berkat klorofil"
    ],
    quiz: {
      question: "Organel yang berperan sebagai tempat penghasil energi utama (ATP) pada sel adalah...",
      options: ["Ribosom", "Mitokondria", "Lisosom", "Badan Golgi"],
      answerIndex: 1,
      explanation: "Mitokondria berfungsi dalam respirasi seluler untuk menghasilkan energi ATP."
    }
  },
  {
    id: "bio-genetika",
    subject: "Biologi",
    level: "Kelas XII SMA",
    title: "Pewarisan Sifat & Hukum Mendel",
    summary: "Memahami genotip, fenotip, alel dominan-resesif, serta persilangan monohibrid.",
    points: [
      "Genotip adalah susunan genetik (misal: BB, Bb, bb); fenotip adalah sifat yang tampak (misal: bunga ungu)",
      "Persilangan monohibrid dominansi penuh (Bb × Bb) menghasilkan rasio fenotip 3 : 1",
      "Hukum I Mendel disebut juga Hukum Segregasi bebas alel"
    ],
    quiz: {
      question: "Rasio fenotip keturunan F2 pada persilangan monohibrid dominansi penuh (Bb × Bb) adalah...",
      options: ["1 : 1", "1 : 2 : 1", "3 : 1", "9 : 3 : 3 : 1"],
      answerIndex: 2,
      explanation: "Genotip BB, Bb, Bb (3 dominan) dan bb (1 resesif) menghasilkan rasio fenotip 3 : 1."
    }
  },
  {
    id: "ind-teks-argumentasi",
    subject: "Bahasa Indonesia",
    level: "Kelas XII SMA",
    title: "Menyusun Teks Argumentasi yang Efektif",
    summary: "Menguatkan pendapat dengan fakta, data pendukung, dan konjungsi kausalitas yang tepat.",
    points: [
      "Struktur utama meliputi pendahuluan/tesis, isi/argumen beserta fakta, dan simpulan",
      "Gunakan kata hubung sebab-akibat seperti karena, oleh sebab itu, akibatnya",
      "Hindari opini tanpa dasar agar argumen bersifat objektif dan meyakinkan"
    ],
    quiz: {
      question: "Manakah kalimat yang paling tepat untuk memperkuat paragraf argumentasi?",
      options: [
        "Menurutku, membaca buku itu pasti bagus banget deh.",
        "Survei literasi tahunan menunjukkan peningkatan minat baca setelah perpustakaan digital dibuka.",
        "Entahlah, mungkin semua siswa suka membaca atau tidak.",
        "Jangan lupa subscribe dan like ya!"
      ],
      answerIndex: 1,
      explanation: "Data survei menjadi bukti objektif yang memperkuat argumen."
    }
  },
  {
    id: "ing-tenses-narrative",
    subject: "Bahasa Inggris",
    level: "Kelas X SMA",
    title: "Simple Past & Narrative Text",
    summary: "Menceritakan kejadian masa lampau secara runtut menggunakan Verb 2 dan time signals.",
    points: [
      "Pola kalimat positif Simple Past: Subject + Verb 2 (went, studied, saw)",
      "Kalimat negatif & tanya menggunakan 'did': Subject + did not + Verb 1",
      "Penanda waktu umum: yesterday, last night, two days ago, once upon a time"
    ],
    quiz: {
      question: "Complete the sentence: 'She _____ to the library yesterday afternoon.'",
      options: ["go", "goes", "went", "going"],
      answerIndex: 2,
      explanation: "'Yesterday' menunjukkan waktu lampau, sehingga bentuk kata kerja yang tepat adalah 'went' (Verb 2)."
    }
  }
];

// ================= KUNCI STORAGE =================
const STORAGE_KEYS = {
  USERS: "floraedu_users_v1",
  SESSION: "floraedu_session_v1",
  PROGRESS: "floraedu_progress_v1"
};

// ================= ELEMEN DOM =================
const loginView = document.getElementById("login-view");
const portalView = document.getElementById("portal-view");

const tabBtns = document.querySelectorAll(".tab-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginError = document.getElementById("login-error");
const registerError = document.getElementById("register-error");
const demoFillBtn = document.getElementById("demo-fill-btn");

const studentNameDisplay = document.getElementById("student-name-display");
const studentGradeDisplay = document.getElementById("student-grade-display");
const progressText = document.getElementById("progress-text");
const logoutBtn = document.getElementById("logout-btn");

const searchInput = document.getElementById("search-input");
const filterChips = document.querySelectorAll(".filter-chip");
const materialsGrid = document.getElementById("materials-grid");

// Modal Elemen
const lessonModal = document.getElementById("lesson-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalSubject = document.getElementById("modal-subject");
const modalLevel = document.getElementById("modal-level");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalPoints = document.getElementById("modal-points");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const toggleCompleteBtn = document.getElementById("toggle-complete-btn");

// ================= STATE =================
let activeSubject = "Semua";
let searchQuery = "";
let currentLessonId = null;

// ================= HELPER STORAGE =================
function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || "[]");
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

function getSession() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION) || "null");
}

function setSession(user) {
  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.SESSION);
}

function getAllProgress() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || "{}");
}

function getUserCompletedIds(email) {
  const all = getAllProgress();
  return all[email] || [];
}

function toggleLessonCompleted(email, lessonId) {
  const all = getAllProgress();
  const list = new Set(all[email] || []);
  if (list.has(lessonId)) {
    list.delete(lessonId);
  } else {
    list.add(lessonId);
  }
  all[email] = Array.from(list);
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all));
  return all[email];
}

// ================= AUTH LOGIKA =================
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.tab;
    loginForm.classList.toggle("active", target === "login");
    registerForm.classList.toggle("active", target === "register");
    loginError.hidden = true;
    registerError.hidden = true;
  });
});

demoFillBtn.addEventListener("click", () => {
  document.getElementById("login-email").value = "nadia@sma.sch.id";
  document.getElementById("login-password").value = "belajar123";
  loginError.hidden = true;
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;

  const users = getUsers();
  let matchedUser = users.find((u) => u.email === email);

  // Izinkan login cepat akun contoh jika belum terdaftar
  if (!matchedUser && email === "nadia@sma.sch.id" && password.length >= 6) {
    matchedUser = {
      name: "Nadia Kusuma",
      grade: "Kelas XI SMA",
      email: "nadia@sma.sch.id",
      password
    };
    users.push(matchedUser);
    saveUsers(users);
  }

  if (!matchedUser || matchedUser.password !== password) {
    loginError.textContent = "Email atau kata sandi belum sesuai. Coba klik 'Isi Akun Contoh Pelajar' atau daftar akun baru.";
    loginError.hidden = false;
    return;
  }

  loginError.hidden = true;
  setSession({
    name: matchedUser.name,
    grade: matchedUser.grade,
    email: matchedUser.email
  });
  renderApp();
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const grade = document.getElementById("reg-grade").value;
  const email = document.getElementById("reg-email").value.trim().toLowerCase();
  const password = document.getElementById("reg-password").value;

  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    registerError.textContent = "Email tersebut sudah terdaftar. Silakan masuk di tab Masuk.";
    registerError.hidden = false;
    return;
  }

  const newUser = { name, grade, email, password };
  users.push(newUser);
  saveUsers(users);

  registerError.hidden = true;
  setSession({ name, grade, email });
  renderApp();
});

logoutBtn.addEventListener("click", () => {
  clearSession();
  renderApp();
});

// ================= PORTAL & FILTER =================
filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeSubject = chip.dataset.subject;
    renderMaterials();
  });
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderMaterials();
});

function updateProgressBadge() {
  const session = getSession();
  if (!session) return;
  const completedIds = getUserCompletedIds(session.email);
  progressText.textContent = `${completedIds.length} / ${LESSONS.length} selesai`;
}

function renderMaterials() {
  const session = getSession();
  if (!session) return;

  const completedSet = new Set(getUserCompletedIds(session.email));

  const filtered = LESSONS.filter((lesson) => {
    const matchSubject = activeSubject === "Semua" || lesson.subject === activeSubject;
    const haystack = `${lesson.title} ${lesson.subject} ${lesson.level} ${lesson.summary}`.toLowerCase();
    const matchQuery = !searchQuery || haystack.includes(searchQuery);
    return matchSubject && matchQuery;
  });

  if (filtered.length === 0) {
    materialsGrid.innerHTML = `
      <div class="empty-state">
        <h3>Materi tidak ditemukan 🌸</h3>
        <p>Coba kata kunci lain atau pilih "Semua Mapel".</p>
      </div>
    `;
    return;
  }

  materialsGrid.innerHTML = filtered
    .map((lesson) => {
      const isDone = completedSet.has(lesson.id);
      return `
        <article class="lesson-card ${isDone ? "completed" : ""}">
          <div>
            <div class="card-top">
              <span class="badge-subject">${lesson.subject}</span>
              <span class="badge-level">${lesson.level}</span>
            </div>
            <h3 style="margin-top: 12px;">${lesson.title}</h3>
            <p style="margin-top: 8px;">${lesson.summary}</p>
          </div>

          <div class="card-footer">
            <span class="status-done">${isDone ? "✓ Selesai Dipelajari" : "Belum selesai"}</span>
            <button type="button" class="btn-open-lesson" data-id="${lesson.id}">
              Buka Materi
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".btn-open-lesson").forEach((btn) => {
    btn.addEventListener("click", () => openLessonModal(btn.dataset.id));
  });

  updateProgressBadge();
}

// ================= MODAL MATERI & KUIS =================
function openLessonModal(lessonId) {
  const lesson = LESSONS.find((item) => item.id === lessonId);
  const session = getSession();
  if (!lesson || !session) return;

  currentLessonId = lesson.id;
  modalSubject.textContent = lesson.subject;
  modalLevel.textContent = lesson.level;
  modalTitle.textContent = lesson.title;
  modalSummary.textContent = lesson.summary;

  modalPoints.innerHTML = lesson.points.map((pt) => `<li>${pt}</li>`).join("");

  // Render kuis
  quizQuestion.textContent = lesson.quiz.question;
  quizFeedback.hidden = true;
  quizFeedback.textContent = "";

  quizOptions.innerHTML = lesson.quiz.options
    .map(
      (opt, idx) =>
        `<button type="button" class="quiz-option-btn" data-idx="${idx}">${opt}</button>`
    )
    .join("");

  document.querySelectorAll(".quiz-option-btn").forEach((optBtn) => {
    optBtn.addEventListener("click", () => handleQuizAnswer(lesson, Number(optBtn.dataset.idx)));
  });

  updateCompleteButtonLabel(session.email, lesson.id);
  lessonModal.hidden = false;
}

function handleQuizAnswer(lesson, selectedIdx) {
  const optionButtons = document.querySelectorAll(".quiz-option-btn");
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove("correct", "wrong");
    if (idx === lesson.quiz.answerIndex) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("wrong");
    }
  });

  quizFeedback.hidden = false;
  if (selectedIdx === lesson.quiz.answerIndex) {
    quizFeedback.style.color = "#047857";
    quizFeedback.textContent = `🎉 Tepat sekali! ${lesson.quiz.explanation}`;
  } else {
    quizFeedback.style.color = "#be123c";
    quizFeedback.textContent = `Belum tepat. ${lesson.quiz.explanation}`;
  }
}

function updateCompleteButtonLabel(email, lessonId) {
  const isDone = getUserCompletedIds(email).includes(lessonId);
  toggleCompleteBtn.textContent = isDone
    ? "✓ Sudah Selesai (Klik untuk Batalkan)"
    : "Tandai Selesai Dipelajari";
}

toggleCompleteBtn.addEventListener("click", () => {
  const session = getSession();
  if (!session || !currentLessonId) return;
  toggleLessonCompleted(session.email, currentLessonId);
  updateCompleteButtonLabel(session.email, currentLessonId);
  renderMaterials();
});

function closeLessonModal() {
  lessonModal.hidden = true;
  currentLessonId = null;
}

closeModalBtn.addEventListener("click", closeLessonModal);
lessonModal.addEventListener("click", (e) => {
  if (e.target === lessonModal) closeLessonModal();
});

// ================= INISIALISASI =================
function renderApp() {
  const session = getSession();
  if (session) {
    loginView.hidden = true;
    portalView.hidden = false;
    studentNameDisplay.textContent = session.name;
    studentGradeDisplay.textContent = session.grade;
    renderMaterials();
  } else {
    loginView.hidden = false;
    portalView.hidden = true;
  }
}

renderApp();
