// ============================================
// VERB-KONJUGATION - Lecția 15 (A1.2): Entschuldigung, ich verstehe nicht
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// 4 verbe SLABE meta-conjugaționale (utile pentru aplicarea strategiilor):
// wiederholen (untrennbar!), buchstabieren (-ieren), bedeuten (be-), erklären (er-)
// Toate verificate PONS. Präteritum → RO imperfect.
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'wiederholen', ro: 'a repeta', typ: 'slab / regulat (untrennbar — accent pe HO!)', aux: 'haben', part: 'wiederholt',
        praes: [['ich','wiederhole','repet'],['du','wiederholst','repeți'],['er/sie/es','wiederholt','repetă'],['wir','wiederholen','repetăm'],['ihr','wiederholt','repetați'],['sie/Sie','wiederholen','repetă']],
        praet: [['ich','wiederholte','repetam'],['du','wiederholtest','repetai'],['er/sie/es','wiederholte','repeta'],['wir','wiederholten','repetam'],['ihr','wiederholtet','repetați'],['sie/Sie','wiederholten','repetau']],
        perf: [['ich','habe wiederholt','am repetat'],['du','hast wiederholt','ai repetat'],['er/sie/es','hat wiederholt','a repetat'],['wir','haben wiederholt','am repetat'],['ihr','habt wiederholt','ați repetat'],['sie/Sie','haben wiederholt','au repetat']],
        note: '🚨 ATENȚIE accent: wieder-HO-len (accent pe HO) = a REPETA, UNTRENNBAR → NU se desparte! Există și WIE-der holen (accent pe WIE) = a aduce înapoi, separabil. Pentru „Kannst du das wiederholen?" e mereu untrennbar. Verificat PONS.'
    },
    {
        inf: 'buchstabieren', ro: 'a silabisi', typ: 'slab / regulat (-ieren)', aux: 'haben', part: 'buchstabiert',
        praes: [['ich','buchstabiere','silabisesc'],['du','buchstabierst','silabisești'],['er/sie/es','buchstabiert','silabisește'],['wir','buchstabieren','silabisim'],['ihr','buchstabiert','silabisiți'],['sie/Sie','buchstabieren','silabisesc']],
        praet: [['ich','buchstabierte','silabiseam'],['du','buchstabiertest','silabiseai'],['er/sie/es','buchstabierte','silabisea'],['wir','buchstabierten','silabiseam'],['ihr','buchstabiertet','silabiseați'],['sie/Sie','buchstabierten','silabiseau']],
        perf: [['ich','habe buchstabiert','am silabisit'],['du','hast buchstabiert','ai silabisit'],['er/sie/es','hat buchstabiert','a silabisit'],['wir','haben buchstabiert','am silabisit'],['ihr','habt buchstabiert','ați silabisit'],['sie/Sie','haben buchstabiert','au silabisit']],
        note: 'Pattern -ieren → Partizip FĂRĂ ge- (buchstabiert, NU gebuchstabiert!). Verifică Lecția 13: telefoniert e același pattern. Verificat PONS.'
    },
    {
        inf: 'bedeuten', ro: 'a însemna', typ: 'slab / regulat (prefix be-)', aux: 'haben', part: 'bedeutet',
        praes: [['ich','bedeute','însemn'],['du','bedeutest','însemni'],['er/sie/es','bedeutet','înseamnă'],['wir','bedeuten','însemnăm'],['ihr','bedeutet','însemnați'],['sie/Sie','bedeuten','înseamnă']],
        praet: [['ich','bedeutete','însemnam'],['du','bedeutetest','însemnai'],['er/sie/es','bedeutete','însemna'],['wir','bedeuteten','însemnam'],['ihr','bedeutetet','însemnați'],['sie/Sie','bedeuteten','însemnau']],
        perf: [['ich','habe bedeutet','am însemnat'],['du','hast bedeutet','ai însemnat'],['er/sie/es','hat bedeutet','a însemnat'],['wir','haben bedeutet','am însemnat'],['ihr','habt bedeutet','ați însemnat'],['sie/Sie','haben bedeutet','au însemnat']],
        note: 'Pattern be- → Partizip FĂRĂ ge- (bedeutet, NU gebedeutet!). 📌 Radicalul bedeut- se termină în -t, deci primește -e la du/er/ihr (bedeutest, bedeutet, bedeutet). Folosire-cheie: „Was bedeutet …?" Verificat PONS.'
    },
    {
        inf: 'erklären', ro: 'a explica', typ: 'slab / regulat (prefix er-)', aux: 'haben', part: 'erklärt',
        praes: [['ich','erkläre','explic'],['du','erklärst','explici'],['er/sie/es','erklärt','explică'],['wir','erklären','explicăm'],['ihr','erklärt','explicați'],['sie/Sie','erklären','explică']],
        praet: [['ich','erklärte','explicam'],['du','erklärtest','explicai'],['er/sie/es','erklärte','explica'],['wir','erklärten','explicam'],['ihr','erklärtet','explicați'],['sie/Sie','erklärten','explicau']],
        perf: [['ich','habe erklärt','am explicat'],['du','hast erklärt','ai explicat'],['er/sie/es','hat erklärt','a explicat'],['wir','haben erklärt','am explicat'],['ihr','habt erklärt','ați explicat'],['sie/Sie','haben erklärt','au explicat']],
        note: 'Pattern er- → Partizip FĂRĂ ge- (erklärt, NU geerklärt!). Folosire-cheie: „Können Sie das erklären?" Verificat PONS.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#5A5147;">Conjugi auxiliarul ca de obicei (ich habe, du hast, er hat...) + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#5A5147;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe din lecție</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt: auxiliar + participiu).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong> (caută orice formă).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Cele 4 verbe de azi sunt META-conversaționale — de ele ai nevoie ca să APLICI strategiile lecției. Toate sunt SLABE/REGULATE. wiederholen are CAPCANA cu accentul (HO untrennbar = repetare). Toate 4 fac Partizip FĂRĂ ge- (3 pattern-uri: -ieren, be-, er-). 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    // 📎 Recap verbe tari deja conjugate (Lecții 3-10)
    html += '<div class="sub-section">' +
        '<div class="sub-section-header" onclick="toggleVerb(' + verbsData.length + ')">' +
        '<span>📎 Recap — verbele TARI deja conjugate (Lecțiile 3-10)</span>' +
        '<span class="sub-arrow">▼</span>' +
        '</div>' +
        '<div class="sub-section-content" id="verb-' + verbsData.length + '">' +
        '<div class="theory-box" style="background:#F5F0E8;">' +
        '<h4>Reminder rapid — fără tabele complete</h4>' +
        '<p style="margin:0 0 8px 0;">La A1 cursantul are deja Präsens complet pentru verbele tari. Doar persoanele III ies din tipar — recap:</p>' +
        '<table class="grammar-table">' +
        '<tr><th>Infinitiv</th><th>er/sie/es</th><th>Tip schimbare</th><th>Traducere RO</th></tr>' +
        '<tr><td><strong>essen</strong></td><td>isst</td><td>e → i</td><td><em style="color:#5A5147;">el mănâncă</em></td></tr>' +
        '<tr><td><strong>lesen</strong></td><td>liest</td><td>e → ie</td><td><em style="color:#5A5147;">el citește</em></td></tr>' +
        '<tr><td><strong>sprechen</strong></td><td>spricht</td><td>e → i</td><td><em style="color:#5A5147;">el vorbește</em></td></tr>' +
        '<tr><td><strong>helfen</strong></td><td>hilft</td><td>e → i + Dativ</td><td><em style="color:#5A5147;">el ajută (+ Dativ)</em></td></tr>' +
        '<tr><td><strong>fahren</strong></td><td>fährt</td><td>a → ä</td><td><em style="color:#5A5147;">el merge (cu vehicul)</em></td></tr>' +
        '<tr><td><strong>tragen</strong></td><td>trägt</td><td>a → ä</td><td><em style="color:#5A5147;">el poartă</em></td></tr>' +
        '<tr><td><strong>schlafen</strong></td><td>schläft</td><td>a → ä</td><td><em style="color:#5A5147;">el doarme</em></td></tr>' +
        '<tr><td><strong>können</strong></td><td>kann</td><td>modal (NU -t)</td><td><em style="color:#5A5147;">el poate</em></td></tr>' +
        '</table>' +
        '<p style="margin:8px 0 0 0; font-size:0.92em;">Pentru tabele complete, vezi Lecțiile 10 (Starke Verben) și 6/11 (Modalverben).</p>' +
        '</div></div></div>';

    // 📎 Preview Perfekt (din WS77-79)
    html += '<div class="sub-section">' +
        '<div class="sub-section-header" onclick="toggleVerb(' + (verbsData.length + 1) + ')">' +
        '<span>📎 Preview Perfekt — ce auzi în WS77/78/79</span>' +
        '<span class="sub-arrow">▼</span>' +
        '</div>' +
        '<div class="sub-section-content" id="verb-' + (verbsData.length + 1) + '">' +
        '<div class="theory-box" style="background:#e0e7ff;">' +
        '<h4>🦋 Onestitate: ai văzut deja Perfekt!</h4>' +
        '<p>În contextul narativ al lecției (Andreea hat viele Fotos gemacht / Wir haben eine Ausstellung besucht) apare deja <strong>Perfekt</strong> — un timp trecut foarte folosit în germană pentru povestire.</p>' +
        '<table class="grammar-table">' +
        '<tr><th>Formă Perfekt</th><th>Verb infinitiv</th><th>Traducere RO</th></tr>' +
        '<tr><td>habe gemacht</td><td>machen</td><td><em style="color:#5A5147;">am făcut</em></td></tr>' +
        '<tr><td>habe besucht</td><td>besuchen</td><td><em style="color:#5A5147;">am vizitat</em></td></tr>' +
        '<tr><td>habe telefoniert</td><td>telefonieren</td><td><em style="color:#5A5147;">am telefonat</em></td></tr>' +
        '<tr><td>habe gespielt</td><td>spielen</td><td><em style="color:#5A5147;">am jucat</em></td></tr>' +
        '</table>' +
        '<p style="margin-top:8px;"><strong>Formula:</strong> haben + ge-(rădăcină)-t. Vei învăța sistematic Perfekt în <strong>Lecția 17 — Schöne Ferien!</strong> Acum doar îl <strong>recunoști</strong> în context.</p>' +
        '</div></div></div>';

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
