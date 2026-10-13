let stars = parseInt(localStorage.getItem('stars')||'0');
function saveStars(){localStorage.setItem('stars',stars);document.getElementById('totalStars').textContent=stars;}
function addStars(n){stars+=n;saveStars();}
function resetStars(){stars=0;saveStars();document.getElementById('quizResult').innerHTML='Remis à zéro 🗑️';}
saveStars();
let tCount = 0;
function tasbih(z){tCount++;document.getElementById('tasbihCount').textContent=tCount;document.getElementById('tasbihZikr').textContent=z+' 🌟 ('+tCount+')';if(tCount%33===0){addStars(1);document.getElementById('tasbihZikr').textContent+=' — bravo ! +⭐';}}
function tasbihReset(){tCount=0;document.getElementById('tasbihCount').textContent=0;}
const imanData=[
 ['☝️',"Croire en Allah","Il n'y a de dieu qu'Allah, notre Créateur"],
 ['👼',"Croire aux anges","Créés de lumière : Jibril, Mikail, Israfil"],
 ['📖',"Croire aux Livres","Feuillets, Torah, Psaumes, Évangile et Coran préservé"],
 ['🌟',"Croire aux messagers","25 prophètes cités, le dernier : Mohammed ﷺ"],
 ['⚖️',"Croire au Jour dernier","La Balance, le Paradis pour les croyants"],
 ['🤲',"Croire au destin","Science, Écriture, Volonté, Création — on place sa confiance en Allah"],
];
document.getElementById('imanGrid').innerHTML=imanData.map(d=>`<div class="flip" onclick="this.classList.toggle('flipped')"><div class="flip-inner"><div class="face front"><div>${d[0]}</div>${d[1]}</div><div class="face back">${d[2]}<br>⭐</div></div></div>`).join('');
const qa=[
 ['Qui est ton Seigneur ?','Mon Seigneur est Allah, nul autre'],
 ['Quelle est ta religion ?',"L'Islam"],
 ['Qui est ton prophète ?','Mohammed ﷺ'],
 ['Quel est ton Livre ?','Le Coran — parole d’Allah'],
 ['Qui est le musulman ?','Qui n’adore qu’Allah et accomplit la prière'],
 ['Où est Allah ?','Au-dessus des cieux, au-dessus de Son Trône'],
 ['Pourquoi Allah nous a créés ?','Pour L’adorer Lui seul'],
 ['Qui sont les anges ?','Serviteurs d’Allah créés de lumière'],
 ['Qu’est-ce que le Coran ?','La parole d’Allah, préservée de toute altération'],
 ['Combien de prophètes cités au Coran ?','25 prophètes'],
];
document.getElementById('qaList').innerHTML=qa.map(q=>`<div class="qa-item" onclick="this.classList.toggle('open')"><b>❓ ${q[0]}</b><div class="a">💡 ${q[1]}</div></div>`).join('');
const names=['Allah','Ar-Rahman','Ar-Rahim','Al-Malik','Al-Qouddous','As-Salam','Al-Mou’min','Al-Mouhaymin','Al-Aziz','Al-Jabbar','Al-Moutakabbir','As-Samad','Al-Khaliq','Al-Bari','Al-Mousawwir','Al-Ghaffar','Al-Qahhar','Al-Wahhab','Ar-Razzaq','Al-Fattah','Al-Alim','Al-Halim','Al-Hakim','Al-Azim','Al-Hayy','Al-Qayyoum','Al-Wali','Al-Hamid','Al-Latif','Al-Khabir','Al-Aliyy','Al-Kabir','As-Sami','Al-Basir','Al-Awwal','Al-Akhir','Az-Zahir','Al-Batin','Al-Barr','Al-Wadoud','Al-Karim','Al-Ghaffour','Al-Wahid','Al-Ghaniyy','Al-Moutaal','Al-Ala','Ach-Chafi','Ar-Rabb','Al-Moussa’ir','Al-Mouqaddim','Al-Mouakkhir','Al-Basit','Al-Qabid','Al-Matin'];
function renderNames(f=''){document.getElementById('namesGrid').innerHTML=names.filter(n=>n.toLowerCase().includes(f.toLowerCase())).map(n=>`<div>✨ ${n}</div>`).join('')||'Aucun résultat';}
renderNames();
document.getElementById('namesSearch').addEventListener('input',e=>renderNames(e.target.value.trim()));
const adab={
 masjid:{e:'🕌',t:'Mosquée',h:'« Prenez votre parure à chaque mosquée » — entre du pied droit : Ô Allah, ouvre-moi Tes portes de miséricorde. Prie 2 unités. Ne passe pas devant celui qui prie !'},
 salam:{e:'👋',t:'Salutations',h:'« Répandez le salam » — le petit salue le grand. Salam : As-salamou alaykoum — réponse : wa alaykoum as-salam !'},
 food:{e:'🍎',t:'Nourriture',h:'Dis Bismillah • mange de la main droite • mange devant toi • si tu oublies : Bismillah au début et à la fin. Ne bois pas debout. Louange après le repas.'},
 sleep:{e:'😴',t:'Sommeil',h:'Dors tôt pour Fajr • secoue ton lit • ablutions, dors sur le côté droit • Ayat al-Koursi • « En Ton nom, ô Allah, je meurs et je vis ». Au réveil : louange à Allah qui nous a fait revivre !'},
 atk:{e:'🤧',t:'Éternuement',h:'Dis : Alhamdou lillah — on te dit : Yarhamouk Allah — réponds : Yahdikoum Allah. Couvre ta bouche avec ton coude !'},
 libas:{e:'👕',t:'Vêtements',h:'Couvre ta nudité • commence par la droite • dis Bismillah • vêtement neuf : louange à Allah qui me l’a donné. Pas d’or ni de soie pour les garçons.'}
};
function renderAdab(k){const d=adab[k];document.getElementById('adabBody').innerHTML=`<div class="big">${d.e}</div><h3>${d.t}</h3><p>${d.h}</p>`;}
renderAdab('masjid');
document.querySelectorAll('#adabTabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#adabTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderAdab(b.dataset.t);});
const checks=['🕌 Prière de Fajr à l’heure','👋 Salam à ma famille','🍎 Bismillah avant de manger','😴 Dormi sur le côté droit','🤧 Alhamdou lillah en éternuant','❤️ Dit inch’Allah','😊 Pas de colère aujourd’hui','📖 Lu un verset du Coran'];
let done=JSON.parse(localStorage.getItem('adabDoneFR')||'[]');
function renderChecks(){
 document.getElementById('adabChecks').innerHTML=checks.map((c,i)=>`<label><input type="checkbox" ${done.includes(i)?'checked':''} onchange="toggleCheck(${i})"> ${c}</label>`).join('');
 const p=Math.round(done.length/checks.length*100);document.getElementById('adabBar').style.width=p+'%';
 document.getElementById('adabMsg').textContent=done.length===checks.length?'Excellent ! Étoile du jour 🌟':`${done.length} / ${checks.length} — continue !`;
}
function toggleCheck(i){done=done.includes(i)?done.filter(x=>x!==i):[...done,i];if(done.length===checks.length){addStars(2);}localStorage.setItem('adabDoneFR',JSON.stringify(done));renderChecks();}
renderChecks();
const sits=[
 {q:'Ton ami est en colère et crie, que fais-tu ?',opts:['Je crie aussi','Je ne discute pas, j’invoque pour lui 🤲','Je le frappe'],ok:1},
 {q:'Quelqu’un t’énerve, que dis-tu ?',opts:['Je le maudis','J’invoque pour lui ❤️','Je médis de lui'],ok:1},
 {q:'Tu feras quelque chose demain, que dis-tu ?',opts:['Je le ferai','Je le ferai inch’Allah ⭐','Jamais'],ok:1},
 {q:'Nourriture propre tombée par terre ?',opts:['Je la laisse','Je la nettoie et je la mange ﷺ','Je la jette en criant'],ok:1},
];
let sitI=0,sitS=0;
function renderSit(){const s=sits[sitI];document.getElementById('situationGame').innerHTML=`<div class="quiz-q"><b>${sitI+1}. ${s.q}</b><br>${s.opts.map((o,i)=>`<button onclick="answerSit(${i})">${o}</button>`).join('')}<p>Points : ${sitS} ⭐</p></div>`;}
function answerSit(i){if(i===sits[sitI].ok){sitS++;addStars(1);alert('Bravo ! +⭐');}else{alert('Essaie encore ! 💡');}sitI=(sitI+1)%sits.length;renderSit();}
renderSit();
const wudu=[
 ['🙏','1. Intention','Je dis : Bismillah, intention des ablutions'],
 ['🤲','2. Mains','Je lave mes mains 3 fois'],
 ['💧','3. Bouche et nez','Rinçage et inspiration 3 fois'],
 ['😊','4. Visage','Je lave tout le visage 3 fois'],
 ['💪','5-6. Bras','Droit puis gauche jusqu’aux coudes, 3 fois'],
 ['✋','7. Tête et oreilles','Essuyage une fois'],
 ['🦶','8. Pieds','Droit puis gauche jusqu’aux chevilles, 3 fois'],
 ['🤲','9. Invocation','J’atteste qu’il n’y a de dieu qu’Allah'],
];
let wI=0;
function renderWudu(){document.getElementById('wuduEmoji').textContent=wudu[wI][0];document.getElementById('wuduTitle').textContent=wudu[wI][1];document.getElementById('wuduDesc').textContent=wudu[wI][2];document.getElementById('wuduStepLabel').textContent=(wI+1)+' / '+wudu.length;document.getElementById('wuduDots').innerHTML=wudu.map((_,i)=>`<i class="${i===wI?'on':''}"></i>`).join('');}
function wuduMove(d){wI=(wI+d+wudu.length)%wudu.length;renderWudu();if(wI===wudu.length-1&&d>0)addStars(1);}
renderWudu();
const hajj=['Ihram','Tawaf d’arrivée','Sa’y','Nuit à Mina','Station à Arafat','Nuit à Mouzdalifa','Lapidation Aqaba','Sacrifice','Rasage','Tawaf Ifada','Lapidations','Tawaf d’adieu'];
document.getElementById('hajjFlow').innerHTML=hajj.map((h,i)=>`<span>${i+1}. ${h}</span>`).join('');
function calcZakat(){const v=parseFloat(document.getElementById('zakatInput').value);if(!v||v<=0){document.getElementById('zakatOut').textContent='Entre un montant 💡';return;}const z=(v/40).toFixed(2);document.getElementById('zakatOut').textContent=`Ta zakat = ${z} (sur ${v}) 🎉`;addStars(1);}
const tafsir={
 fatiha:[['Au nom d’Allah, le Tout-Miséricordieux','Je commence au nom d’Allah'],['Louange à Allah, Seigneur des mondes','Gloire et merci au Créateur'],['Le Tout-Miséricordieux','Allah est bon envers Ses serviteurs'],['Maître du Jour du jugement','Allah règne au Jour dernier'],['C’est Toi que nous adorons','Ni adoration ni aide que d’Allah'],['Guide-nous sur le droit chemin','Montre-nous la bonne voie'],['Le chemin de ceux que Tu as comblés','Prophètes et justes, ni égarés ni courroucés']],
 kursi:[['Allah, nul dieu que Lui, le Vivant','Lui seul mérite l’adoration, Il gère l’univers'],['Ni somnolence ni sommeil','Allah ne dort jamais'],['À Lui tout ce qui est aux cieux et sur terre','Tout Lui appartient'],['Qui intercède sans Sa permission ?','Nulle intercession sans Son accord'],['Son Trône embrasse cieux et terre','Plus grand que les cieux et la terre'],['Il est le Très-Haut, l’Immense','Allah est au-dessus de tout']],
 duha:[['Par le matin','Allah jure par le jour'],['Ton Seigneur ne t’a ni abandonné','Ô Mohammed, Il ne t’a pas délaissé'],['L’au-delà est meilleur pour toi','Le Paradis vaut mieux que ce monde'],['Ton Seigneur te donnera et tu seras satisfait','Allah te comblera'],['Ne t’a-t-Il pas trouvé orphelin ?','Orphelin, Allah t’a accueilli'],['Quant à l’orphelin, ne le brime pas','Sois doux avec l’orphelin'],['Et le mendiant, ne le repousse pas','Donne ou réponds gentiment'],['Proclame les bienfaits de ton Seigneur','Raconte les dons d’Allah']]
};
function renderTafsir(k){document.getElementById('tafsirBody').innerHTML=tafsir[k].map(a=>`<div class="aya" onclick="this.classList.toggle('open')"><div class="t">📜 ${a[0]}</div><div class="m">💡 ${a[1]}</div></div>`).join('');}
renderTafsir('fatiha');
document.querySelectorAll('#tafsirTabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#tafsirTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderTafsir(b.dataset.t);});
const miniQ={
 iman:[['Piliers de la foi ?',['5','6 ⭐','4'],1],['Qui transmet la parole aux prophètes ?',['Mikail','Jibril ⭐','Israfil'],1],['Livreinaltérable ?',['Torah','Évangile','Coran ⭐'],2]]
};
function startMiniQuiz(k){const box=document.getElementById('quiz-'+k);box.innerHTML=miniQ[k].map((q,i)=>`<div class="quiz-q"><b>${q[0]}</b><br>${q[1].map((o,j)=>`<button onclick="miniAns(this,${j===q[2]})">${o}</button>`).join('')}</div>`).join('');}
function miniAns(btn,ok){if(ok){btn.classList.add('ok');addStars(1);btn.textContent+=' ✅';}else{btn.classList.add('no');}}
const bigQ=[
 ['Premier pilier de l’Islam ?',['Prière','Chahada','Zakat'],1],
 ['Piliers de la foi ?',['5','6','7'],1],
 ['L’ami intime du Miséricordieux ?',['Moussa','Ibrahim','Issa'],1],
 ['Où est Allah ?',['Partout','Au ciel, sur Son Trône','On ne sait pas'],1],
 ['On dit en éternuant ?',['Alhamdou lillah','Bismillah','Salam'],0],
 ['Avant de manger ?',['Alhamdou lillah','Bismillah','Allahou Akbar'],1],
 ['La vérité mène… ?',['En Enfer','Au Paradis','À la pauvreté'],1],
 ['Qui mérite le plus ma compagnie ?',['Mon père','Ma mère','Mon ami'],1],
 ['Prières obligatoires ?',['4','5','6'],1],
 ['Direction de la prière ?',['Médine','La Kaaba','Al-Aqsa'],1],
];
function startBigQuiz(){
 document.getElementById('bigQuiz').innerHTML=bigQ.map((q,i)=>`<div class="quiz-q" id="bq${i}"><b>${i+1}. ${q[0]}</b><br>${q[1].map((o,j)=>`<button onclick="bigAns(${i},${j})">${o}</button>`).join('')}</div>`).join('');
 window._score=0;window._answered={};
 document.getElementById('quizResult').innerHTML='';
}
function bigAns(i,j){
 if(window._answered[i])return;window._answered[i]=true;
 const ok=j===bigQ[i][2];
 const div=document.getElementById('bq'+i);
 div.querySelectorAll('button').forEach((b,bi)=>{if(bi===bigQ[i][2])b.classList.add('ok');else if(bi===j)b.classList.add('no');b.disabled=true;});
 if(ok){window._score++;addStars(1);}
 const done=Object.keys(window._answered).length;
 if(done===bigQ.length){
  let msg=window._score>=9?'🏆 Excellent ! Champion !':window._score>=6?'👏 Bien ! Continue !':'💪 Relis les leçons et réessaie';
  document.getElementById('quizResult').innerHTML=`${msg}<br>Score : ${window._score} / ${bigQ.length} ⭐`;
 }
}
