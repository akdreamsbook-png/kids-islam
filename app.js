// Stars system
let stars = parseInt(localStorage.getItem('stars')||'0');
function saveStars(){localStorage.setItem('stars',stars);document.getElementById('totalStars').textContent=stars;}
function addStars(n){stars+=n;saveStars();}
function resetStars(){stars=0;saveStars();document.getElementById('quizResult').innerHTML='تم التصفير 🗑️';}
saveStars();

// Tasbih
let tCount = 0;
function tasbih(z){tCount++;document.getElementById('tasbihCount').textContent=tCount;document.getElementById('tasbihZikr').textContent=z+' 🌟 ('+tCount+')';if(tCount%33===0){addStars(1);document.getElementById('tasbihZikr').textContent+=' — أحسنت! +⭐';}}
function tasbihReset(){tCount=0;document.getElementById('tasbihCount').textContent=0;}

// Iman flip cards
const imanData=[
 ['☝️','الإيمان بالله','لا إله إلا الله، خالقنا ورازقنا'],
 ['👼','الإيمان بالملائكة','خلقهم الله من نور، جبريل وميكائيل وإسرافيل'],
 ['📖','الإيمان بالكتب','الصحف، التوراة، الزبور، الإنجيل، والقرآن المحفوظ'],
 ['🌟','الإيمان بالرسل','25 نبياً في القرآن، آخرهم محمد ﷺ'],
 ['⚖️','اليوم الآخر','يوم القيامة: الجنة للمؤمنين، والميزان للحساب'],
 ['🤲','القدر','4 مراتب: العلم، الكتابة، المشيئة، الخلق — ونتوكل على الله'],
];
document.getElementById('imanGrid').innerHTML=imanData.map(d=>`<div class="flip" onclick="this.classList.toggle('flipped')"><div class="flip-inner"><div class="face front"><div>${d[0]}</div>${d[1]}</div><div class="face back">${d[2]}<br>⭐</div></div></div>`).join('');

// Q&A
const qa=[
 ['من ربك؟','ربي الله، لا إله إلا هو'],
 ['ما دينك؟','ديني الإسلام'],
 ['من نبيك؟','محمد ﷺ'],
 ['ما كتابك؟','القرآن — كلام الله'],
 ['من هو المسلم؟','من لا يعبد إلا الله ويقيم الصلاة'],
 ['أين الله؟','في السماء، فوق عرشه فوق كل شيء'],
 ['لماذا خلقنا الله؟','لعبادته وحده'],
 ['من هم الملائكة؟','عباد الله خلقهم من نور'],
 ['ما هو القرآن؟','كلام الله المحفوظ الذي لا يُحرّف'],
 ['كم عدد الأنبياء في القرآن؟','25 نبياً'],
];
document.getElementById('qaList').innerHTML=qa.map(q=>`<div class="qa-item" onclick="this.classList.toggle('open')"><b>❓ ${q[0]}</b><div class="a">💡 ${q[1]}</div></div>`).join('');

// Names
const names=['الله','الرحمن','الرحيم','الملك','القدوس','السلام','المؤمن','المهيمن','العزيز','الجبار','المتكبر','الصمد','الخالق','البارئ','المصور','الغفار','القهار','الوهاب','الرزاق','الفتاح','العليم','الحليم','الحكيم','العظيم','الحي','القيوم','الولي','الحميد','اللطيف','الخبير','العلي','الكبير','السميع','البصير','الأول','الآخر','الظاهر','الباطن','البر','الودود','الكريم','الغفور','الواحد','الغني','المتعال','الأعلى','الشافي','الرب','المسعر','المقدم','المؤخر','الباسط','القابض','المتين','الشافي','الرؤوف'];
function renderNames(f=''){document.getElementById('namesGrid').innerHTML=names.filter(n=>n.includes(f)).map(n=>`<div>✨ ${n}</div>`).join('')||'لا نتائج';}
renderNames();
document.getElementById('namesSearch').addEventListener('input',e=>renderNames(e.target.value.trim()));

// Adab tabs
const adab={
 masjid:{e:'🕌',t:'آداب المسجد',h:'﴿خذوا زينتكم عند كل مسجد﴾ — أدخل باليمنى وقل: اللهم افتح لي أبواب رحمتك. صلّ ركعتين تحية المسجد. لا تمر أمام المصلي!'},
 salam:{e:'👋',t:'أدب السلام',h:'«أفشوا السلام بينكم» — الصغير يسلّم على الكبير، والقليل على الكثير. السلام: السلام عليكم — الرد: وعليكم السلام ورحمة الله!'},
 food:{e:'🍎',t:'آداب الطعام',h:'قل بسم الله • كل بيمينك • كل مما يليك • إذا نسيت قل: بسم الله أوله وآخره. لا تشرب قائماً. احمد الله بعد الأكل. الحلال: الخضار، الأنعام، السمك. الحرام: الخنزير، الميتة، ذوات الأنياب.'},
 sleep:{e:'😴',t:'آداب النوم والاستيقاظ',h:'نم باكراً لتستيقظ للفجر • انفض فراشك • توضأ ونم على جنبك الأيمن • اقرأ آية الكرسي والمعوذات • قل: باسمك اللهم أموت وأحيا. وعند الاستيقاظ: الحمد لله الذي أحيانا!'},
 atk:{e:'🤧',t:'العطاس',h:'إذا عطست قل: الحمد لله — فيقال لك: يرحمك الله — فقل: يهديكم الله ويصلح بالكم. وغطِّ فمك بكوعك!'},
 libas:{e:'👕',t:'آداب اللباس',h:'استر العورة • لا صور لذوات الأرواح • ابدأ باليمين • قل بسم الله • الثوب الجديد: الحمد لله الذي كسانيه. الأولاد لا يلبسون الذهب والحرير.'}
};
function renderAdab(k){const d=adab[k];document.getElementById('adabBody').innerHTML=`<div class="big">${d.e}</div><h3>${d.t}</h3><p>${d.h}</p>`;}
renderAdab('masjid');
document.querySelectorAll('#adabTabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#adabTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderAdab(b.dataset.t);});

// Adab checklist
const checks=['🕌 صليت الفجر في وقتها','👋 سلّمت على أهلي ومعلمي','🍎 قلت بسم الله قبل الأكل','😴 نمت على جنبي الأيمن','🤧 قلت الحمد لله عند العطاس','❤️ قلت إن شاء الله','😊 لم أغضب اليوم','📖 قرأت آية من القرآن'];
let done=JSON.parse(localStorage.getItem('adabDone')||'[]');
function renderChecks(){
 document.getElementById('adabChecks').innerHTML=checks.map((c,i)=>`<label><input type="checkbox" ${done.includes(i)?'checked':''} onchange="toggleCheck(${i})"> ${c}</label>`).join('');
 const p=Math.round(done.length/checks.length*100);document.getElementById('adabBar').style.width=p+'%';
 document.getElementById('adabMsg').textContent=done.length===checks.length?'ممتاز! كسبت نجمة اليوم 🌟':`أنجزت ${done.length} من ${checks.length} — واصل!`;
}
function toggleCheck(i){done=done.includes(i)?done.filter(x=>x!==i):[...done,i];if(done.length===checks.length){addStars(2);}localStorage.setItem('adabDone',JSON.stringify(done));renderChecks();}
renderChecks();

// Situation game
const sits=[
 {q:'رأيت صديقك يغضب ويصرخ، ماذا تفعل؟',opts:['أجادله وأصرخ مثله','لا أجادله وأدعو له 🤲','أضربه'],ok:1},
 {q:'أغضبك شخص، ماذا تقول؟',opts:['ألعنه','أدعو له بالهداية ❤️','أغتابه'],ok:1},
 {q:'ستفعل شيئاً غداً، ماذا تقول؟',opts:['سأفعل','سأفعل إن شاء الله ⭐','لن أفعل أبداً'],ok:1},
 {q:'وجدت طعاماً وقع على الأرض نظيفاً؟',opts:['أتركه للشيطان','أنظفه وآكله كما علمنا ﷺ','أرميه وأصرخ'],ok:1},
];
let sitI=0,sitS=0;
function renderSit(){const s=sits[sitI];document.getElementById('situationGame').innerHTML=`<div class="quiz-q"><b>${sitI+1}. ${s.q}</b><br>${s.opts.map((o,i)=>`<button onclick="answerSit(${i})">${o}</button>`).join('')}<p>نقاط المواقف: ${sitS} ⭐</p></div>`;}
function answerSit(i){if(i===sits[sitI].ok){sitS++;addStars(1);alert('أحسنت! +⭐');}else{alert('حاول مجدداً! الجواب الصحيح مختلف 💡');}sitI=(sitI+1)%sits.length;renderSit();}
renderSit();

// Wudu stepper
const wudu=[
 ['🙏','1. النية والتسمية','أقول: بسم الله، وأنوي الوضوء للصلاة'],
 ['🤲','2. غسل اليدين','أغسل يدي 3 مرات'],
 ['💧','3. المضمضة والاستنشاق','آخذ ماء بيدي اليمنى، أتمضمض وأستنشق 3 مرات'],
 ['😊','4. غسل الوجه','أغسل وجهي كله 3 مرات'],
 ['💪','5-6. غسل اليدين للمرفقين','اليمنى ثم اليسرى، 3 مرات'],
 ['✋','7-8. مسح الرأس والأذنين','أمسح رأسي وأذني مرة واحدة'],
 ['🦶','9-10. غسل الرجلين','اليمنى ثم اليسرى إلى الكعبين 3 مرات'],
 ['🤲','11. الدعاء بعد الوضوء','أشهد أن لا إله إلا الله وأن محمداً عبده ورسوله'],
];
let wI=0;
function renderWudu(){document.getElementById('wuduEmoji').textContent=wudu[wI][0];document.getElementById('wuduTitle').textContent=wudu[wI][1];document.getElementById('wuduDesc').textContent=wudu[wI][2];document.getElementById('wuduStepLabel').textContent=(wI+1)+' / '+wudu.length;document.getElementById('wuduDots').innerHTML=wudu.map((_,i)=>`<i class="${i===wI?'on':''}"></i>`).join('');}
function wuduMove(d){wI=(wI+d+wudu.length)%wudu.length;renderWudu();if(wI===wudu.length-1&&d>0)addStars(1);}
renderWudu();

// Hajj
const hajj=['الإحرام','طواف القدوم','السعي','المبيت بمنى','الوقوف بعرفة','المبيت بمزدلفة','رمي العقبة','ذبح الهدي','الحلق','طواف الإفاضة','رمي الجمرات','طواف الوداع'];
document.getElementById('hajjFlow').innerHTML=hajj.map((h,i)=>`<span>${i+1}. ${h}</span>`).join('');

// Zakat
function calcZakat(){const v=parseFloat(document.getElementById('zakatInput').value);if(!v||v<=0){document.getElementById('zakatOut').textContent='أدخل مبلغاً صحيحاً 💡';return;}const z=(v/40).toFixed(2);document.getElementById('zakatOut').textContent=`زكاتك = ${z} (من أصل ${v}) 🎉`;addStars(1);}

// Tafsir
const tafsir={
 fatiha:[['بسم الله الرحمن الرحيم','أبدأ بذكر اسم الله الرحمن الرحيم'],['الحمد لله رب العالمين','الثناء والشكر لله خالق كل شيء'],['الرحمن الرحيم','الله رحيم بعباده'],['مالك يوم الدين','الله مالك يوم القيامة'],['إياك نعبد وإياك نستعين','لا نعبد إلا الله ولا نستعين إلا به'],['اهدنا الصراط المستقيم','دلّنا على الطريق الصحيح'],['صراط الذين أنعمت عليهم','طريق الأنبياء والصالحين، لا اليهود ولا النصارى']],
 kursi:[['الله لا إله إلا هو الحي القيوم','لا معبود إلا الله الحي الذي يدير الكون'],['لا تأخذه سنة ولا نوم','الله لا يغفل ولا ينام أبداً'],['له ما في السماوات وما في الأرض','كل المخلوقات ملك له'],['من ذا الذي يشفع عنده إلا بإذنه','لا شفاعة يوم القيامة إلا بإذن الله'],['وسع كرسيه السماوات والأرض','كرسي الله أعظم من السماوات والأرض'],['وهو العلي العظيم','الله العالي العظيم فوق كل شيء']],
 duha:[['والضحى','يقسم الله بالنهار'],['ما ودعك ربك وما قلى','يا محمد، ما تركك ربك وما أبغضك'],['وللآخرة خير لك من الأولى','الجنة خير لك من الدنيا'],['ولسوف يعطيك ربك فترضى','سيعطيك الله حتى ترضى'],['ألم يجدك يتيما فآوى','كنت يتيماً فآواك الله'],['فأما اليتيم فلا تقهر','لا تقسُ على اليتيم'],['وأما السائل فلا تنهر','لا تطرد الفقير'],['وأما بنعمة ربك فحدث','حدّث الناس بنعم الله عليك']]
};
function renderTafsir(k){document.getElementById('tafsirBody').innerHTML=tafsir[k].map(a=>`<div class="aya" onclick="this.classList.toggle('open')"><div class="t">📜 ${a[0]}</div><div class="m">💡 ${a[1]} — اضغط للإخفاء</div></div>`).join('');}
renderTafsir('fatiha');
document.querySelectorAll('#tafsirTabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#tafsirTabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderTafsir(b.dataset.t);});

// Mini quizzes
const miniQ={
 iman:[['كم عدد أركان الإيمان؟',['5','6 ⭐','4'],1],['من هو الذي ينقل كلام الله للأنبياء؟',['ميكائيل','جبريل ⭐','إسرافيل'],1],['ما هو الكتاب الذي لا يُحرّف؟',['التوراة','الإنجيل','القرآن ⭐'],2]]
};
function startMiniQuiz(k){const box=document.getElementById('quiz-'+k);box.innerHTML=miniQ[k].map((q,i)=>`<div class="quiz-q"><b>${q[0]}</b><br>${q[1].map((o,j)=>`<button onclick="miniAns(this,${j===q[2]})">${o}</button>`).join('')}</div>`).join('');}
function miniAns(btn,ok){if(ok){btn.classList.add('ok');addStars(1);btn.textContent+=' ✅';}else{btn.classList.add('no');}}

// Big quiz
const bigQ=[
 ['ما هو أول أركان الإسلام؟',['الصلاة','الشهادتان','الزكاة'],1],
 ['كم عدد أركان الإيمان؟',['5','6','7'],1],
 ['من هو خليل الرحمن؟',['موسى','إبراهيم','عيسى'],1],
 ['أين الله؟',['في كل مكان','في السماء فوق عرشه','لا نعرف'],1],
 ['ماذا نقول عند العطاس؟',['الحمد لله','بسم الله','السلام عليكم'],0],
 ['ماذا نقول قبل الأكل؟',['الحمد لله','بسم الله','الله أكبر'],1],
 ['الصدق يهدي إلى...؟',['النار','الجنة','الفقر'],1],
 ['من أحق الناس بحسن صحابتي؟',['أبي','أمي','صديقي'],1],
 ['كم عدد الصلوات المفروضة؟',['4','5','6'],1],
 ['ما هي قبلة المسلمين؟',['المسجد النبوي','الكعبة','الأقصى'],1],
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
  let msg=window._score>=9?'🏆 ممتاز! أنت بطل الإسلام!':window._score>=6?'👏 أحسنت! واصل التعلم!':'💪 جيد! راجع الدروس وحاول مجدداً';
  document.getElementById('quizResult').innerHTML=`${msg}<br>نتيجتك: ${window._score} / ${bigQ.length} ⭐`;
 }
}
