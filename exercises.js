// ============================================
// EXERCIȚII - Lecția 15 (A1.2): Entschuldigung, ich verstehe nicht
// Claudia Toth · 5 exerciții (toate text inputs)
// Sursă DF: 17, 47-Z1/Z2/Z3, 59-Z1/Z2/Z3, WS77/78/79
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Care întrebare se potrivește situației?
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Vezi un obiect necunoscut pe masă. Întrebi: ____', translation: 'Ce e asta?', correct: 'Was ist das', accept: ['was ist das', 'was ist das?'] },
    { id: 'b', sentence: 'Florian zice „Schreibwarenladen". Nu știi sensul. Întrebi: Was ____ „Schreibwarenladen"?', translation: 'Ce înseamnă „Schreibwarenladen"?', correct: 'bedeutet', accept: ['bedeutet'] },
    { id: 'c', sentence: 'Știi cum se zice în engleză „book", dar nu în germană. Întrebi: Wie sagt ____ „book" auf Deutsch?', translation: 'Cum se zice „book" în germană?', correct: 'man', accept: ['man'] },
    { id: 'd', sentence: 'Vezi un fruct în piață, nu îi știi numele german. Întrebi: Wie ____ das auf Deutsch?', translation: 'Cum se numește asta în germană?', correct: 'heißt', accept: ['heißt', 'heisst'] },
    { id: 'e', sentence: 'Cineva îți zice un cuvânt și nu îl auzi. Reacționezi: ____', translation: 'Pardon, cum ai zis?', correct: 'Entschuldigung, wie bitte', accept: ['entschuldigung, wie bitte', 'wie bitte', 'entschuldigung wie bitte'] },
    { id: 'f', sentence: 'Vrei să noteze cuvântul, dar e lung. Întrebi: Kannst du das ____?', translation: 'Poți să-l silabisești?', correct: 'buchstabieren', accept: ['buchstabieren'] },
    { id: 'g', sentence: 'Andreea vorbește prea repede. O rogi: ____ bitte!', translation: 'Mai rar, te rog!', correct: 'Langsamer', accept: ['langsamer', 'langsam'] },
    { id: 'h', sentence: 'Nu știi răspunsul. Spui sincer (politicos): Ich ____ es nicht.', translation: 'Nu știu.', correct: 'weiß', accept: ['weiß', 'weiss'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🗝️ Care întrebare/expresie se potrivește situației?</strong><br>Citește contextul în română și scrie întrebarea corectă în germană.<br><em>💡 4 întrebări de bază: Was ist das? · Wie heißt? · Wie sagt man? · Was bedeutet?</em></div>';
    ex1Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex1-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => { const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 2: Strategie potrivită (Wie bitte? / Wiederholen / Buchstabieren / Was bedeutet?)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Carolina zice: „Ich habe eine Kunstausstellung besucht." Nu știi „Ausstellung". → Was ____ „Ausstellung"?', translation: 'Ce înseamnă „Ausstellung"?', correct: 'bedeutet', accept: ['bedeutet'] },
    { id: 'b', sentence: 'Mihai îți spune un nume nou. Nu îl auzi clar. → Entschuldigung, wie ____?', translation: 'Pardon, cum ai zis?', correct: 'bitte', accept: ['bitte'] },
    { id: 'c', sentence: 'Florian îți dă adresa lui pe email — vrei să fii sigur. → Kannst du das ____?', translation: 'Poți să-l silabisești?', correct: 'buchstabieren', accept: ['buchstabieren'] },
    { id: 'd', sentence: 'Annette explică o regulă gramaticală, dar a vorbit prea repede. → Kannst du das ____?', translation: 'Poți repeta?', correct: 'wiederholen', accept: ['wiederholen'] },
    { id: 'e', sentence: 'Acar îți povestește despre proiectul lui de șantier. Vorbește prea repede. → ____ bitte!', translation: 'Mai rar, te rog!', correct: 'Langsamer', accept: ['langsamer'] },
    { id: 'f', sentence: 'Nepoata ta îți arată o jucărie ciudată și te întreabă numele. Nu știi. → Keine ____.', translation: 'Habar n-am.', correct: 'Ahnung', accept: ['ahnung'] },
    { id: 'g', sentence: 'La doctor (formal!) ceri să repete diagnosticul. → ____ Sie das bitte wiederholen?', translation: 'Puteți repeta, vă rog? (forma politicoasă)', correct: 'Können', accept: ['können', 'koennen'] },
    { id: 'h', sentence: 'Ai înțeles în sfârșit. Exclami: → Ach ____!', translation: 'A, așa!', correct: 'so', accept: ['so'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🔁 Alege strategia potrivită pentru fiecare situație.</strong><br>Completează cuvântul-cheie. Atenție la formal (Sie) vs informal (du).<br><em>💡 Strategiile-cheie: wie bitte? · wiederholen · buchstabieren · langsamer · was bedeutet?</em></div>';
    ex2Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => { const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 3: Verbul potrivit (multiple-choice Präsens) — din 59-Z1
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Kannst du bitte das Abendessen ____? (verbe trennbare)', translation: 'Poți pregăti cina, te rog?', correct: 'vorbereiten', accept: ['vorbereiten'], hint: 'vorbereiten / umziehen / anrufen' },
    { id: 'b', sentence: 'Mihai ____ mit Carolina (verbul pentru ajutor + Dativ).', translation: 'Mihai o ajută pe Carolina.', correct: 'hilft', accept: ['hilft'], hint: 'hilft / telefoniert / bevorzugt' },
    { id: 'c', sentence: 'Wir gehen ins Kino. Möchtest du ____? (verb separabil de însoțire)', translation: 'Vrei să vii (cu noi)?', correct: 'mitkommen', accept: ['mitkommen'], hint: 'mitnehmen / mitbringen / mitkommen' },
    { id: 'd', sentence: 'Können Sie mir bitte ____? (forma politicoasă cu Dativ)', translation: 'Mă puteți ajuta, vă rog?', correct: 'helfen', accept: ['helfen'], hint: 'aussehen / helfen / finden' },
    { id: 'e', sentence: 'Florian ____ gerne. Sein Bett ist sehr gemütlich. (verb tare a → ä)', translation: 'Lui Florian îi place să doarmă.', correct: 'schläft', accept: ['schläft', 'schlaeft'], hint: 'aufsteht / heißt / schläft' },
    { id: 'f', sentence: 'Andreea ____ Maschinenbau an der Universität in Potsdam. (verb pentru universitate)', translation: 'Andreea studiază Inginerie mecanică la Potsdam.', correct: 'studiert', accept: ['studiert'], hint: 'lernt / arbeitet / studiert' },
    { id: 'g', sentence: 'Sie muss morgen um sechs Uhr ____. (separabil — de trezit)', translation: 'Trebuie să se trezească la șase mâine.', correct: 'aufstehen', accept: ['aufstehen'], hint: 'ausgehen / aufstehen / aussehen' },
    { id: 'h', sentence: 'Carolina ____ einen Brief. (verb regulat — a scrie)', translation: 'Carolina scrie o scrisoare.', correct: 'schreibt', accept: ['schreibt'], hint: 'mitbringt / schreibt / vorbereitet' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📚 Alege verbul potrivit din variantele date.</strong><br>Recapitulare Präsens: trennbare, modale, tari, regulate. Pers. III pers. tari schimbă vocala!<br><em>💡 Atenție la verbe tari (e→i, a→ä) și la separabile (prefix la final).</em></div>';
    ex3Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation} <span style="color:#7c3aed;">· opțiuni: ${it.hint}</span></small><input type="text" id="ex3-${it.id}" placeholder="alege un verb..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => { const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 4: Vervollständige (Präsens — Lückentext) — din 47-Z + 59-Z
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Die Kinder ____ ein Spiel. (spielen)', translation: 'Copiii se joacă.', correct: 'spielen', accept: ['spielen'] },
    { id: 'b', sentence: '____ du gerne Pizza? (essen — er/sie/du formă tare!)', translation: 'Îți place pizza?', correct: 'Isst', accept: ['isst', 'ißt'] },
    { id: 'c', sentence: 'Florian ____ dringend mit Andreea sprechen. (müssen — modal)', translation: 'Florian trebuie urgent să vorbească cu Andreea.', correct: 'muss', accept: ['muss', 'muß'] },
    { id: 'd', sentence: 'Carolina ____ Mihai. (helfen — tare e → i)', translation: 'Carolina îl ajută pe Mihai.', correct: 'hilft', accept: ['hilft'] },
    { id: 'e', sentence: 'Mein Freund ____ morgen nach Belgien. (fahren — tare a → ä)', translation: 'Prietenul meu pleacă mâine în Belgia.', correct: 'fährt', accept: ['fährt', 'faehrt'] },
    { id: 'f', sentence: 'Leider ____ ich keine Oliven. (mögen — modal, tare!)', translation: 'Din păcate, nu îmi plac măslinele.', correct: 'mag', accept: ['mag'] },
    { id: 'g', sentence: 'Acar ____ mit seinem Team. (sprechen — tare e → i)', translation: 'Acar vorbește cu echipa lui.', correct: 'spricht', accept: ['spricht'] },
    { id: 'h', sentence: 'Andreea ____ um 8 Uhr ____. (aufstehen — trennbar!)', translation: 'Andreea se trezește la 8.', correct: 'steht / auf', accept: ['steht auf', 'steht/auf', 'steht, auf'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>✏️ Completează verbul în forma corectă Präsens.</strong><br>Atenție la persoanele III ale verbelor tari + la separabile (prefix la final).<br><em>💡 La trennbare scrie ambele cuvinte separat: <code>steht auf</code> sau cu slash <code>steht / auf</code>.</em></div>';
    ex4Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="verbul conjugat..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => { const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 5: Dialog narativ — Andreea la familie (din WS77/78/79)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Florian: „Wir haben eine Kunstausstellung besucht." Andreea (nu știe „Ausstellung"): Entschuldigung, was ____ „Ausstellung"?', translation: 'Pardon, ce înseamnă „Ausstellung"?', correct: 'bedeutet', accept: ['bedeutet'] },
    { id: 'b', sentence: 'Carolina: „Ich war auf einem Weihnachtsmarkt." Andreea (cuvânt nou): Wie ____ man das auf Rumänisch? (cum se zice în română?)', translation: 'Cum se zice în română?', correct: 'sagt', accept: ['sagt'] },
    { id: 'c', sentence: 'Mihai îi dă un cuvânt complicat: „Sprachnachrichten". Andreea: Kannst du das bitte ____?', translation: 'Poți silabisi, te rog?', correct: 'buchstabieren', accept: ['buchstabieren'] },
    { id: 'd', sentence: 'Acar vorbește repede despre șantier. Andreea: ____ bitte!', translation: 'Mai rar, te rog!', correct: 'Langsamer', accept: ['langsamer'] },
    { id: 'e', sentence: 'Annette explică o regulă lungă. Andreea: Wie ____? Ich habe nicht alles gehört.', translation: 'Cum ai zis? Nu am auzit tot.', correct: 'bitte', accept: ['bitte'] },
    { id: 'f', sentence: 'Florian arată un desen. Andreea exclamă: Du ____ sehr gut zeichnen! (modal können)', translation: 'Poți desena foarte bine! (modal)', correct: 'kannst', accept: ['kannst'] },
    { id: 'g', sentence: 'Andreea îl întreabă pe nepot: Was ____ das? (arătând o jucărie)', translation: 'Ce e asta?', correct: 'ist', accept: ['ist'] },
    { id: 'h', sentence: 'Cuvântul „Autogramm" — nu îl știe. Andreea: Was ist ein ____?', translation: 'Ce e un „Autogramm"? (= o semnătură)', correct: 'Autogramm', accept: ['autogramm'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎭 Andreea la familie — aplică strategiile în context narativ.</strong><br>În fiecare situație, completează expresia care cere lămuriri.<br><em>💡 Scenariu: Andreea aude vocabular nou (Ausstellung, Weihnachtsmarkt, Autogramm…) și folosește strategiile învățate.</em></div>';
    ex5Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => { const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
