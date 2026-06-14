// ============================================
// TEORIE - Lecția 15 (A1.2): Entschuldigung, ich verstehe nicht
// Claudia Toth · Annettes Deutschkurs
// Sursă DF: 17 (Nicht verstehen, nachfragen), 47-Z1/Z2/Z3, 59-Z1/Z2/Z3
// (Präsens Übung IV-XII), WS77/78/79 (context narativ)
// REGULĂ: NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Astăzi: Andreea e la familie și aude cuvinte necunoscute</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Diacriticele RO le accept și cu, și fără."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Lecția-cheie de conversație reală</h4>
                <p>Andreea e la familie (a ajuns cu trenul din Lecția 13). Nepoții îi vorbesc repede, vecinii folosesc cuvinte pe care nu le-a învățat încă. Ce face? <strong>NU se blochează</strong> — întreabă! Asta înveți azi: cum să spui politicos că nu înțelegi și cum să ceri lămuriri.</p>
                <p>Aceasta e <strong>cea mai utilă lecție din A1</strong> pentru conversație reală. Fără strategiile astea, te oprești la primul cuvânt nou. Cu ele, mergi mai departe în orice dialog.</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian (în vizită la familia Andreei)</div>
                        <div class="dialog-text">Andreea, gehen wir morgen zur Ausstellung?
                            <span class="translation">Andreea, mergem mâine la expoziție?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Entschuldigung, was bedeutet „Ausstellung"?
                            <span class="translation">Pardon, ce înseamnă „Ausstellung"?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Eine Ausstellung ist ein Ort mit Kunst, Bildern oder Fotos. Wie ein Museum.
                            <span class="translation">O expoziție e un loc cu artă, tablouri sau fotografii. Ca un muzeu.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Ah, klar! Ja, gerne!
                            <span class="translation">A, clar! Da, cu plăcere!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să întrebi <strong>4 feluri</strong> cum se zice ceva (Was ist das? · Wie heißt das? · Wie sagt man? · Was bedeutet?)</li>
                    <li>Să răspunzi când <strong>cineva te întreabă pe tine</strong> (Das ist… · Das heißt… · Auf Deutsch sagt man…)</li>
                    <li>Să spui politicos că <strong>nu ai auzit / nu ai înțeles</strong> (Wie bitte? · Kannst du wiederholen?)</li>
                    <li>Să ceri să ți se <strong>silabisească</strong> un cuvânt (Kannst du das buchstabieren?)</li>
                    <li>Să consolidezi <strong>Präsens</strong> (verbe regulate, tari, modale, trennbare)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: ÎNTREBĂRILE — cum ceri lămuriri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>❓ 2. Cum CER lămuriri — cele 4 întrebări de bază</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-fragen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🗝️ 4 chei pentru orice conversație</h4>
                <p>Indiferent de situație — la cumpărături, la doctor, la familie, pe stradă — dacă auzi sau vezi un cuvânt nou, ai <strong>4 întrebări</strong> standard. Învață-le pe TOATE: fiecare se folosește în alt context.</p>
                <table class="grammar-table">
                    <tr><th>Întrebare germană</th><th>Când o folosești</th><th>Traducere RO</th></tr>
                    <tr><td><strong>Was ist das?</strong></td><td>Vezi un obiect / o imagine și nu știi numele</td><td><em style="color:#5A5147;">Ce e asta?</em></td></tr>
                    <tr><td><strong>Wie heißt das auf Deutsch?</strong></td><td>Știi obiectul, dar nu cuvântul german</td><td><em style="color:#5A5147;">Cum se numește (asta) în germană?</em></td></tr>
                    <tr><td><strong>Wie sagt man „book" auf Deutsch?</strong></td><td>Știi cuvântul într-o limbă, vrei echivalentul german</td><td><em style="color:#5A5147;">Cum se zice „book" în germană?</em></td></tr>
                    <tr><td><strong>Was bedeutet „Ausstellung"?</strong></td><td>Auzi cuvântul german, nu îi știi sensul</td><td><em style="color:#5A5147;">Ce înseamnă „Ausstellung"?</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>💡 Capcana: heißen vs sagen vs bedeuten</h4>
                <p>Toate trei se folosesc în întrebări de traducere — dar NU sunt sinonime perfecte:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>heißen</strong> = a se numi → <em>Wie HEISST das auf Deutsch?</em> (cum SE NUMEȘTE asta)</li>
                    <li><strong>sagen</strong> = a spune → <em>Wie SAGT man „book"?</em> (cum SE SPUNE „book")</li>
                    <li><strong>bedeuten</strong> = a însemna → <em>Was BEDEUTET das?</em> (ce ÎNSEAMNĂ asta)</li>
                </ul>
                <p style="margin-top: 8px;">📌 Toate trei funcționează în practică — alege-o pe cea care îți vine mai natural.</p>
            </div>
        </div>
    </div>

    <!-- 2: RĂSPUNSURILE — cum răspunzi -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>💬 3. Cum RĂSPUND la lămuriri (când cineva te întreabă pe tine)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-antworten.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📣 4 formule de răspuns</h4>
                <p>Conversația e dialog. Trebuie să știi și să răspunzi când CINEVA te întreabă pe tine. Patru pattern-uri simple:</p>
                <table class="grammar-table">
                    <tr><th>Formulă</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>Das ist + ein/eine + cuvântul</strong></td><td>Das ist ein Buch.</td><td><em style="color:#5A5147;">Asta e o carte.</em></td></tr>
                    <tr><td><strong>Das heißt auf Deutsch „X"</strong></td><td>Das heißt auf Deutsch „Buch".</td><td><em style="color:#5A5147;">Asta se numește „Buch" în germană.</em></td></tr>
                    <tr><td><strong>Auf Deutsch sagt man „X"</strong></td><td>Auf Deutsch sagt man „Buch".</td><td><em style="color:#5A5147;">În germană se spune „Buch".</em></td></tr>
                    <tr><td><strong>„X" heißt auf Deutsch „Y"</strong></td><td>„Book" heißt auf Deutsch „Buch".</td><td><em style="color:#5A5147;">„Book" se traduce în germană prin „Buch".</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>🤷 Și dacă NU știi răspunsul?</h4>
                <p>E ABSOLUT normal să nu știi tot — folosește una din formele:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>Ich weiß es nicht.</strong> — Nu știu (răspuns neutru).</li>
                    <li><strong>Keine Ahnung.</strong> — Habar n-am (mai colocvial).</li>
                    <li><strong>Tut mir leid, das weiß ich nicht.</strong> — Îmi pare rău, asta nu o știu (politicos).</li>
                </ul>
                <p style="margin-top: 8px;">🦋 Onestitatea contează mai mult decât a pretinde că știi.</p>
            </div>
        </div>
    </div>

    <!-- 3: STRATEGII când nu auzi / nu prinzi -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔁 4. Strategii când nu AUZI sau nu PRINZI</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-strategien.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🚨 Cele 5 expresii salvatoare</h4>
                <p>Nu ai înțeles? Nu ai auzit? Te-a luat ploaia într-o conversație? Folosește una din:</p>
                <table class="grammar-table">
                    <tr><th>Expresie germană</th><th>Când</th><th>Traducere RO</th></tr>
                    <tr><td><strong>Entschuldigung, wie bitte?</strong></td><td>Nu ai auzit deloc, ceri să repete</td><td><em style="color:#5A5147;">Pardon, cum ai zis?</em></td></tr>
                    <tr><td><strong>Kannst du das (bitte) wiederholen?</strong></td><td>Ceri politicos să repete (tu)</td><td><em style="color:#5A5147;">Poți repeta, te rog?</em></td></tr>
                    <tr><td><strong>Können Sie das wiederholen?</strong></td><td>Forma politicoasă (Sie) — la străini</td><td><em style="color:#5A5147;">Puteți repeta?</em></td></tr>
                    <tr><td><strong>Kannst du das buchstabieren?</strong></td><td>Cuvântul e nou, ceri să-l silabisească</td><td><em style="color:#5A5147;">Poți să-l silabisești?</em></td></tr>
                    <tr><td><strong>Langsamer bitte!</strong></td><td>Vorbește prea repede</td><td><em style="color:#5A5147;">Mai rar, te rog!</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>✨ Buchstabieren — silabisitul german</h4>
                <p>Când cineva îți silabisește un cuvânt, fiecare literă e numită cu numele german:</p>
                <p style="font-family: monospace; background: #fff; padding: 8px; border-radius: 6px;">
                    Buch → <strong>B</strong> (be) - <strong>U</strong> (u) - <strong>C</strong> (ce) - <strong>H</strong> (ha)
                </p>
                <p>📌 Dacă nu îți amintești alfabetul german, recapitulează din <strong>Lecția A0 - Alphabet</strong>. Aici e cel mai utilizat în viața reală: la formulare, la telefon, când îți scrie cineva numele.</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8;">
                <h4>⚠️ wiederholen: ATENȚIE la accent!</h4>
                <p>Verbul <strong>wiederholen</strong> are <strong>DOUĂ variante</strong> în germană — depinde de accent:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>wieder-HOlen</strong> (accent pe HO, UNTRENNBAR) = <em>a repeta</em> → Ich wiederhole das Wort. (Repet cuvântul.) ✅ Asta folosim noi!</li>
                    <li><strong>WIEder holen</strong> (accent pe WIE, TRENNBAR) = <em>a aduce înapoi</em> → Ich hole das Buch wieder. (Aduc cartea înapoi.)</li>
                </ul>
                <p style="margin-top: 8px;">🦋 În contextul „repetă, te rog", e mereu varianta untrennbar: <em>Kannst du das wiederholen?</em> (NU „wieder holen").</p>
            </div>
        </div>
    </div>

    <!-- 4: Wiederholung Präsens -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🧩 5. Wiederholung Präsens — recapitulare conjugări</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-praesens-recap.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📚 6 tipare de verbe — recapitulare</h4>
                <p>După 14 lecții, cursantul tău are <strong>6 tipare de Präsens</strong> în memorie. Le rulăm pe toate ca să le verifici. Fiecare are 1 verb-model, conjugat complet, cu coloana de traducere.</p>
            </div>

            <div class="theory-box" style="margin-top: 8px;">
                <h4>① Verb regulat (slab) — <em>machen</em> (a face)</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>ich</strong></td><td>mache</td><td><em style="color:#5A5147;">fac</em></td></tr>
                    <tr><td><strong>du</strong></td><td>machst</td><td><em style="color:#5A5147;">faci</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>macht</td><td><em style="color:#5A5147;">face</em></td></tr>
                    <tr><td><strong>wir</strong></td><td>machen</td><td><em style="color:#5A5147;">facem</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td>macht</td><td><em style="color:#5A5147;">faceți</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>machen</td><td><em style="color:#5A5147;">fac / faceți (politicos)</em></td></tr>
                </table>
                <p style="margin: 6px 0 0 0; font-size: 0.92em;">📎 Același tipar: spielen, lernen, hören, wohnen, kaufen, kochen…</p>
            </div>

            <div class="theory-box" style="margin-top: 8px;">
                <h4>② -t Stamm (+e adițional) — <em>arbeiten</em> (a lucra)</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>ich</strong></td><td>arbeite</td><td><em style="color:#5A5147;">lucrez</em></td></tr>
                    <tr><td><strong>du</strong></td><td>arbeit<strong style="color:#dc2626;">e</strong>st</td><td><em style="color:#5A5147;">lucrezi</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>arbeit<strong style="color:#dc2626;">e</strong>t</td><td><em style="color:#5A5147;">lucrează</em></td></tr>
                    <tr><td><strong>wir</strong></td><td>arbeiten</td><td><em style="color:#5A5147;">lucrăm</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td>arbeit<strong style="color:#dc2626;">e</strong>t</td><td><em style="color:#5A5147;">lucrați</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>arbeiten</td><td><em style="color:#5A5147;">lucrează / lucrați</em></td></tr>
                </table>
                <p style="margin: 6px 0 0 0; font-size: 0.92em;">📎 Adaugi -e la du/er/ihr când radicalul se termină în <strong>t, d, m, n</strong> (T-D-M-N). Verbe: kosten, antworten, öffnen, regnen.</p>
            </div>

            <div class="theory-box" style="margin-top: 8px;">
                <h4>③ Tare e → i — <em>essen</em> (a mânca)</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>ich</strong></td><td>esse</td><td><em style="color:#5A5147;">mănânc</em></td></tr>
                    <tr><td><strong>du</strong></td><td>i<strong style="color:#dc2626;">ss</strong>t</td><td><em style="color:#5A5147;">mănânci</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>i<strong style="color:#dc2626;">ss</strong>t</td><td><em style="color:#5A5147;">mănâncă</em></td></tr>
                    <tr><td><strong>wir</strong></td><td>essen</td><td><em style="color:#5A5147;">mâncăm</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td>esst</td><td><em style="color:#5A5147;">mâncați</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>essen</td><td><em style="color:#5A5147;">mănâncă</em></td></tr>
                </table>
                <p style="margin: 6px 0 0 0; font-size: 0.92em;">📎 Schimbarea e <strong>doar la du și er/sie/es</strong>. Același tipar: lesen → liest, sprechen → spricht, helfen → hilft, geben → gibt.</p>
            </div>

            <div class="theory-box" style="margin-top: 8px;">
                <h4>④ Tare a → ä — <em>fahren</em> (a merge cu un vehicul)</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>ich</strong></td><td>fahre</td><td><em style="color:#5A5147;">merg (cu mașina/trenul)</em></td></tr>
                    <tr><td><strong>du</strong></td><td>f<strong style="color:#dc2626;">ä</strong>hrst</td><td><em style="color:#5A5147;">mergi</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>f<strong style="color:#dc2626;">ä</strong>hrt</td><td><em style="color:#5A5147;">merge</em></td></tr>
                    <tr><td><strong>wir</strong></td><td>fahren</td><td><em style="color:#5A5147;">mergem</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td>fahrt</td><td><em style="color:#5A5147;">mergeți</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>fahren</td><td><em style="color:#5A5147;">merg / mergeți</em></td></tr>
                </table>
                <p style="margin: 6px 0 0 0; font-size: 0.92em;">📎 Same tipar: tragen → trägt, laufen → läuft, schlafen → schläft.</p>
            </div>

            <div class="theory-box" style="margin-top: 8px;">
                <h4>⑤ Modal — <em>können</em> (a putea)</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>ich</strong></td><td>kann</td><td><em style="color:#5A5147;">pot</em></td></tr>
                    <tr><td><strong>du</strong></td><td>kannst</td><td><em style="color:#5A5147;">poți</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>kann</td><td><em style="color:#5A5147;">poate</em></td></tr>
                    <tr><td><strong>wir</strong></td><td>können</td><td><em style="color:#5A5147;">putem</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td>könnt</td><td><em style="color:#5A5147;">puteți</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>können</td><td><em style="color:#5A5147;">pot / puteți</em></td></tr>
                </table>
                <p style="margin: 6px 0 0 0; font-size: 0.92em;">📎 Modalele NU au -t la er/sie/es (ich kann = er kann!). Same tipar: müssen, wollen, dürfen, sollen, mögen. 🦋 În WS79 vezi <em>Du kannst gut zeichnen!</em></p>
            </div>

            <div class="theory-box" style="margin-top: 8px;">
                <h4>⑥ Trennbar (separabil) — <em>aufstehen</em> (a se trezi)</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td><strong>ich</strong></td><td>stehe ... <strong style="color:#dc2626;">auf</strong></td><td><em style="color:#5A5147;">mă trezesc</em></td></tr>
                    <tr><td><strong>du</strong></td><td>stehst ... <strong style="color:#dc2626;">auf</strong></td><td><em style="color:#5A5147;">te trezești</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>steht ... <strong style="color:#dc2626;">auf</strong></td><td><em style="color:#5A5147;">se trezește</em></td></tr>
                    <tr><td><strong>wir</strong></td><td>stehen ... <strong style="color:#dc2626;">auf</strong></td><td><em style="color:#5A5147;">ne trezim</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td>steht ... <strong style="color:#dc2626;">auf</strong></td><td><em style="color:#5A5147;">vă treziți</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>stehen ... <strong style="color:#dc2626;">auf</strong></td><td><em style="color:#5A5147;">se trezesc</em></td></tr>
                </table>
                <p style="margin: 6px 0 0 0; font-size: 0.92em;">📎 Prefixul (auf, an, ab, mit, vor) zboară LA FINAL. Andreea steht um 7 Uhr <strong>auf</strong>. Same tipar: anrufen, abfahren, ankommen, mitkommen, vorbereiten.</p>
            </div>
        </div>
    </div>

    <!-- 5: Sinteză + dialog narativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🎬 6. Sinteză + dialog (Andreea la familie)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-dialog-sumar.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🦋 Dialogul Andreei cu Annette (după întoarcerea de la familie)</h4>
                <p>Andreea s-a întors din vizita la familie cu o listă de cuvinte noi. O sună pe Annette:</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Annette, was bedeutet „Schreibwarenladen"? Ich verstehe das Wort nicht.
                            <span class="translation">Annette, ce înseamnă „Schreibwarenladen"? Nu înțeleg cuvântul.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Ein Schreibwarenladen ist ein Geschäft für Hefte, Stifte und Bücher.
                            <span class="translation">Un „Schreibwarenladen" e un magazin de caiete, pixuri și cărți (papetărie).</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Ach so! Kannst du das bitte buchstabieren? Ich möchte es aufschreiben.
                            <span class="translation">A, așa! Poți să-l silabisești, te rog? Vreau să-l notez.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Klar: S-c-h-r-e-i-b-w-a-r-e-n-l-a-d-e-n. Es ist ein zusammengesetztes Wort.
                            <span class="translation">Sigur: S-c-h-r-e-i-b-w-a-r-e-n-l-a-d-e-n. E un cuvânt compus.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Wie bitte? Kannst du das wiederholen — langsamer bitte!
                            <span class="translation">Pardon, ce ai zis? Poți repeta — mai rar, te rog!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Natürlich! S - c - h - r - e - i - b ... w - a - r - e - n ... l - a - d - e - n.
                            <span class="translation">Bineînțeles! S-c-h-r-e-i-b ... w-a-r-e-n ... l-a-d-e-n.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Cele 5 reguli de aur ale lecției</h4>
                <ol style="margin-left: 18px;">
                    <li>4 ÎNTREBĂRI de strategie: <strong>Was ist das? · Wie heißt? · Wie sagt man? · Was bedeutet?</strong></li>
                    <li>4 RĂSPUNSURI: <strong>Das ist… · Das heißt… · Auf Deutsch sagt man… · „X" heißt „Y"</strong></li>
                    <li>Nu auzi? → <strong>Entschuldigung, wie bitte?</strong> sau <strong>Kannst du das wiederholen?</strong></li>
                    <li>Cuvântul e nou și greu? → <strong>Kannst du das buchstabieren?</strong> + <strong>Langsamer bitte!</strong></li>
                    <li>Nu știi răspuns? → <strong>Ich weiß es nicht.</strong> sau <strong>Keine Ahnung.</strong> Onestitatea contează!</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Acum poți merge oriunde în lumea germană — chiar dacă nu știi toate cuvintele. 🦋🗝️</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}
