// ============================================
// FLASHCARDS - Lecția 15 (A1.2): Entschuldigung, ich verstehe nicht
// Claudia Toth · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 8 Întrebări de strategie ===
    { de: "Was ist das?", ro: "Ce e asta? · întrebarea de bază", audio: "audio/letters/was-ist-das.wav" },
    { de: "Wie heißt das auf Deutsch?", ro: "Cum se numește asta în germană?", audio: "audio/letters/wie-heisst.wav" },
    { de: "Wie sagt man BOOK auf Deutsch?", ro: "Cum se zice BOOK în germană? · CAPS = cuvântul de tradus", audio: "audio/letters/wie-sagt-man.wav" },
    { de: "Was bedeutet AUSSTELLUNG?", ro: "Ce înseamnă AUSSTELLUNG? · folosești când AUZI cuvântul german și nu îi știi sensul", audio: "audio/letters/was-bedeutet.wav" },
    { de: "Entschuldigung, wie bitte?", ro: "Pardon, cum ai zis? · reacție rapidă", audio: "audio/letters/wie-bitte.wav" },
    { de: "Kannst du das wiederholen?", ro: "Poți repeta? · wiederholen = a repeta (untrennbar)", audio: "audio/letters/wiederholen.wav" },
    { de: "Kannst du das buchstabieren?", ro: "Poți silabisi? · pentru cuvinte noi/lungi", audio: "audio/letters/buchstabieren.wav" },
    { de: "Langsamer bitte!", ro: "Mai rar, te rog! · când vorbește prea repede", audio: "audio/letters/langsamer.wav" },

    // === 8 Răspunsuri / formule ===
    { de: "Das ist ein Buch.", ro: "Asta e o carte. · răspuns la Was ist das?", audio: "audio/letters/das-ist-ein-buch.wav" },
    { de: "Das heißt auf Deutsch BUCH.", ro: "În germană se numește BUCH.", audio: "audio/letters/das-heisst-buch.wav" },
    { de: "Auf Deutsch sagt man BUCH.", ro: "În germană se spune BUCH.", audio: "audio/letters/auf-deutsch-sagt.wav" },
    { de: "Ich weiß es nicht.", ro: "Nu știu. · răspuns onest neutru", audio: "audio/letters/weiss-es-nicht.wav" },
    { de: "Keine Ahnung.", ro: "Habar n-am. · răspuns colocvial", audio: "audio/letters/keine-ahnung.wav" },
    { de: "Ich verstehe nicht.", ro: "Nu înțeleg. · expresia centrală a lecției", audio: "audio/letters/verstehe-nicht.wav" },
    { de: "Können Sie das wiederholen?", ro: "Puteți repeta? · forma politicoasă (Sie) pentru străini/doctor/Annette", audio: "audio/letters/koennen-sie.wav" },
    { de: "Ach so!", ro: "A, așa! · exclamația când ai înțeles în sfârșit", audio: "audio/letters/ach-so.wav" },

    // === 6 Verbe Präsens recap ===
    { de: "er spielt", ro: "el joacă · regulat (slab) · model: machen, lernen, kaufen", audio: "audio/letters/er-spielt.wav" },
    { de: "er arbeitet", ro: "el lucrează · radical -t → adaugi -e (T-D-M-N)", audio: "audio/letters/er-arbeitet.wav" },
    { de: "er isst", ro: "el mănâncă · tare e → i · doar la du/er/sie/es!", audio: "audio/letters/er-isst.wav" },
    { de: "er fährt", ro: "el merge (cu vehicul) · tare a → ä · doar la du/er/sie/es!", audio: "audio/letters/er-faehrt.wav" },
    { de: "er kann", ro: "el poate · modal: NU primește -t la persoana III!", audio: "audio/letters/er-kann.wav" },
    { de: "er steht auf", ro: "el se trezește · trennbar: prefixul AUF zboară la final!", audio: "audio/letters/er-steht-auf.wav" },

    // === 5 Vocabular WS77-79 (cuvinte de cerut traducere) ===
    { de: "die Ausstellung", ro: "expoziția · o expoziție de artă, ca un muzeu", audio: "audio/letters/ausstellung.wav" },
    { de: "der Weihnachtsmarkt", ro: "târgul de Crăciun · clasic în Germania în decembrie", audio: "audio/letters/weihnachtsmarkt.wav" },
    { de: "das Autogramm", ro: "autograful · semnătura unei vedete pe carte/poster", audio: "audio/letters/autogramm.wav" },
    { de: "der Schreibwarenladen", ro: "papetăria · magazin de caiete, pixuri, cărți", audio: "audio/letters/schreibwarenladen.wav" },
    { de: "die Schlagzeile", ro: "titlul de ziar · text mare din capul paginii", audio: "audio/letters/schlagzeile.wav" },

    // === 5 Talente / Hobbies (WS79) ===
    { de: "zeichnen", ro: "a desena · Du kannst gut zeichnen!", audio: "audio/letters/zeichnen.wav" },
    { de: "ein Instrument spielen", ro: "a cânta la un instrument · Klavier, Geige, Gitarre", audio: "audio/letters/instrument.wav" },
    { de: "stricken", ro: "a tricota · cu andrele, pulovere", audio: "audio/letters/stricken.wav" },
    { de: "nähen", ro: "a coase · cu acul și ața", audio: "audio/letters/naehen.wav" },
    { de: "Skateboard fahren", ro: "a merge cu skateboardul", audio: "audio/letters/skateboard.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (8 întrebări strategie · 8 răspunsuri/formule · 6 verbe Präsens recap · 5 vocabular WS77-79 · 5 talente).<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => { console.log('Audio nu poate fi redat:', err); });
}

buildFlashcards();
