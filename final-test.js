// ============================================
// TEST FINAL - Lecția 15 (A1.2): Entschuldigung, ich verstehe nicht
// Claudia Toth · 15 întrebări · REGULĂ: NU ghilimele interne în stringuri JS!
// ============================================

function normalizeTestAnswer(str) {
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
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // 4× Strategii
    { type: 'multiple', category: '🗝️ Strategii', question: 'Vezi un obiect necunoscut. Cum întrebi cum se cheamă?', options: ['Wie geht es dir?', 'Was ist das?', 'Wo bist du?', 'Wer ist das?'], correct: 'Was ist das?', explanation: 'Was ist das? = Ce e asta? Întrebarea de bază pentru un obiect necunoscut.' },
    { type: 'luckentext', category: '🗝️ Strategii', question: 'Completează (când vorbește prea repede):', sentence: '____ bitte!', translation: 'Mai rar, te rog!', accept: ['langsamer'], correct: 'Langsamer', explanation: 'Langsamer bitte! = Mai rar, te rog. Forma comparativă (mai rar) a lui langsam.' },
    { type: 'multiple', category: '🗝️ Strategii', question: 'Auzi un cuvânt german nou (AUSSTELLUNG) și nu îi știi sensul. Întrebi:', options: ['Wer ist Ausstellung?', 'Was bedeutet Ausstellung?', 'Wo ist Ausstellung?', 'Wann ist Ausstellung?'], correct: 'Was bedeutet Ausstellung?', explanation: 'Was bedeutet…? = Ce înseamnă…? Folosit când AUZI un cuvânt german și vrei sensul.' },
    { type: 'luckentext', category: '🗝️ Strategii', question: 'Completează (cere politicos să silabisească):', sentence: 'Kannst du das bitte ____?', translation: 'Poți silabisi, te rog?', accept: ['buchstabieren'], correct: 'buchstabieren', explanation: 'buchstabieren = a silabisi. Pattern -ieren → Partizip fără ge- (buchstabiert).' },

    // 4× Präsens
    { type: 'multiple', category: '📚 Präsens', question: 'Care e CORECT? (essen, persoana III)', options: ['er esst', 'er ißt', 'er isst', 'er essen'], correct: 'er isst', explanation: 'essen e tare e → i. La du și er/sie/es: i + ss + t = isst.' },
    { type: 'luckentext', category: '📚 Präsens', question: 'Completează (fahren, persoana III):', sentence: 'Florian ____ nach Berlin.', translation: 'Florian merge la Berlin.', accept: ['fährt', 'faehrt'], correct: 'fährt', explanation: 'fahren e tare a → ä. La du/er/sie/es: fährst, fährt.' },
    { type: 'luckentext', category: '📚 Präsens', question: 'Completează (können, persoana III):', sentence: 'Andreea ____ gut Deutsch.', translation: 'Andreea știe bine germană.', accept: ['kann'], correct: 'kann', explanation: 'Modalele NU primesc -t la persoana III: ich kann = er/sie/es kann.' },
    { type: 'multiple', category: '📚 Präsens', question: 'Care e CORECT pentru AUFSTEHEN (er, ora 7)?', options: ['Er aufsteht um 7.', 'Er steht um 7 auf.', 'Er stehen auf um 7.', 'Er auf um 7 steht.'], correct: 'Er steht um 7 auf.', explanation: 'Trennbar: verbul conjugat pe poziția 2 (steht), prefixul (auf) zboară LA FINAL.' },

    // 4× Vocabular WS77-79
    { type: 'multiple', category: '📖 Vocabular', question: 'Ce e o AUSSTELLUNG?', options: ['Un magazin de cărți', 'Un loc cu artă/expoziție', 'O cofetărie', 'O bibliotecă'], correct: 'Un loc cu artă/expoziție', explanation: 'die Ausstellung = expoziție (artă, fotografii). Ca un muzeu temporar.' },
    { type: 'multiple', category: '📖 Vocabular', question: 'Ce e un SCHREIBWARENLADEN?', options: ['Magazin de îmbrăcăminte', 'Restaurant', 'Papetărie (caiete, pixuri)', 'Cinema'], correct: 'Papetărie (caiete, pixuri)', explanation: 'Schreibwaren (articole de scris) + Laden (magazin) = papetărie.' },
    { type: 'luckentext', category: '📖 Vocabular', question: 'Completează (talent — a desena):', sentence: 'Florian kann gut ____.', translation: 'Florian poate desena bine.', accept: ['zeichnen'], correct: 'zeichnen', explanation: 'zeichnen = a desena. Folosit cu können + infinitiv: Du kannst zeichnen!' },
    { type: 'luckentext', category: '📖 Vocabular', question: 'Completează (târg de Crăciun):', sentence: 'Im Dezember besuche ich den ____.', translation: 'În decembrie vizitez târgul de Crăciun.', accept: ['weihnachtsmarkt'], correct: 'Weihnachtsmarkt', explanation: 'der Weihnachtsmarkt = târgul de Crăciun. Tradiție clasică germană.' },

    // 3× Capcane
    { type: 'multiple', category: '⚠️ Capcane', question: 'Cum răspunzi politicos „nu știu" (forma neutră)?', options: ['Egal.', 'Quatsch.', 'Ich weiß es nicht.', 'Nichts.'], correct: 'Ich weiß es nicht.', explanation: 'Ich weiß es nicht = Nu știu (neutru, politicos). Keine Ahnung = mai colocvial.' },
    { type: 'multiple', category: '⚠️ Capcane', question: 'WIEDERHOLEN cu accent pe WIEDER = ?', options: ['a repeta', 'a aduce înapoi', 'a vorbi', 'a învăța'], correct: 'a aduce înapoi', explanation: 'wieder-HOlen (accent pe HO, untrennbar) = a repeta. WIEder holen (accent pe WIE, trennbar) = a aduce înapoi. ATENȚIE!' },
    { type: 'luckentext', category: '⚠️ Capcane', question: 'Forma POLITICOASĂ (Sie) pentru „poți repeta?":', sentence: '____ Sie das wiederholen?', translation: 'Puteți repeta? (forma politicoasă)', accept: ['können', 'koennen'], correct: 'Können', explanation: 'Cu Sie politicos: Können Sie...? (modal können, persoana sie/Sie = können). NU Kannst!' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre strategii de conversație, Wiederholung Präsens, vocabular nou și capcane.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 8-10 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => {
                if (r.value === userAnswers[index].answer) r.checked = true;
            });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k];
        const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#5A5147;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none';
    r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) {
        t.classList.add('active');
        if (a) a.classList.add('rotated');
    }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
