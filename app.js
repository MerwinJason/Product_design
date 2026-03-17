/* ============================================
   PRODUCT DESIGN HUB — APP.JS
   Core + Data + Rendering + Games
   ============================================ */

// ---- PROGRESS STATE ----
// Clear any old Cyber Security progress data if present
if(localStorage.getItem('csm_progress') && !localStorage.getItem('pd_progress')){
    localStorage.removeItem('csm_progress');
    localStorage.removeItem('csm_scores');
    localStorage.removeItem('csm_streak');
    localStorage.removeItem('csm_lastVisit');
}
const state = {
    currentSection: 'dashboard',
    progress: JSON.parse(localStorage.getItem('pd_progress') || '{}'),
    quizScores: JSON.parse(localStorage.getItem('pd_scores') || '{}'),
    streak: parseInt(localStorage.getItem('pd_streak') || '0'),
    lastVisit: localStorage.getItem('pd_lastVisit') || '',
    flashcardMastered: JSON.parse(localStorage.getItem('pd_flashcards') || '{}')
};
function saveState(){localStorage.setItem('pd_progress',JSON.stringify(state.progress));localStorage.setItem('pd_scores',JSON.stringify(state.quizScores));localStorage.setItem('pd_streak',state.streak);localStorage.setItem('pd_lastVisit',new Date().toDateString());localStorage.setItem('pd_flashcards',JSON.stringify(state.flashcardMastered));}
function getP(id){return state.progress[id]||0;}
function setP(id,v){state.progress[id]=Math.min(100,Math.max(getP(id),v));saveState();updateSidebarProgress();}

// Check streak
(function(){const today=new Date().toDateString();const last=state.lastVisit;if(last){const d1=new Date(last),d2=new Date(today),diff=Math.floor((d2-d1)/(1000*60*60*24));if(diff===1)state.streak++;else if(diff>1)state.streak=1;}else{state.streak=1;}saveState();})();

// ---- SESSION META ----
const sessions=[
{id:'session1',icon:'🎨',title:'Introduction to Product Design',subtitle:'Design Process, Types, and Characteristics'},
{id:'session2',icon:'📋',title:'Product Development & Planning',subtitle:'Org Structures, Concurrent Engineering, Planning'},
{id:'session3',icon:'👥',title:'Identifying Customer Needs',subtitle:'Ethnography, Kano Model, Benchmarking'},
{id:'session4',icon:'📏',title:'Target Specifications',subtitle:'Metrics, House of Quality, Final Specs'},
{id:'session5',icon:'💡',title:'Concept Generation',subtitle:'Brainstorming, 6-3-5, C-Sketch, Affinity'},
{id:'session6',icon:'⚙️',title:'Function Structures',subtitle:'Black Box, Morphological, TRIZ'},
{id:'session7',icon:'⚖️',title:'Concept Selection',subtitle:'Pugh Matrix, Scoring, AHP'},
{id:'session8',icon:'🏗️',title:'Product Architecture',subtitle:'Modular vs Integral, Delayed Differentiation'}
];

// ---- QUIZ DATA ----
const quizData={
session1:[
{q:"What is Product Design?",opts:["Copying competitors","Only making things look good","Iterative process to meet requirements within constraints","Marketing a product"],ans:2,exp:"Design transforms requirements into a product performing desired functions within constraints."},
{q:"Which is NOT a characteristic of successful product development?",opts:["Product quality","Development time","Low employee turnover","Development cost"],ans:2,exp:"Employee turnover is an HR metric, not a core characteristic of successful product development."},
{q:"Original design is also known as:",opts:["Innovative design","Variant design","Adaptive design","Industrial design"],ans:0,exp:"Original design creates something entirely new, hence innovative."},
{q:"What is Variant Design?",opts:["Selection design","Redesign","Original design","Industrial design"],ans:1,exp:"Redesign or Variant Design modifies an existing design."},
{q:"Which process involves iterative loops of stage-gate processes?",opts:["Waterfall","Spiral","Linear","Sequential"],ans:1,exp:"Spiral product development involves iterative loops to refine the product."}
],
session2:[
{q:"Which organizational structure groups employees by specialty?",opts:["Project","Networked","Flat","Functional"],ans:3,exp:"Functional organizations group by technical specialty (e.g., all engineers together)."},
{q:"What characterizes a Project Organization?",opts:["Slow decision making","Employees assigned full-time to a project manager","Deep functional excellence","Centralized authority"],ans:1,exp:"Project organizations assign members full-time to a project manager."},
{q:"What replaces sequential engineering to increase speed?",opts:["Reverse engineering","Value engineering","Concurrent engineering","Software engineering"],ans:2,exp:"Concurrent engineering uses parallel design and cross-functional teams."},
{q:"Mission Statements should be:",opts:["Vague","SMART","Open-ended","Overly ambitious"],ans:1,exp:"SMART: Specific, Measurable, Achievable, Realistic, Time bound."}
],
session3:[
{q:"What does an Ethnographic study involve?",opts:["Surveying 1000 people","Observing customers in their regular environment","Reading competitor manuals","Cost analysis"],ans:1,exp:"Ethnography observes users interacting with products naturally."},
{q:"In Kano's Model, what are 'Expecters'?",opts:["Basic needs that cause dissatisfaction if absent","Unexpected exciting features","Performance features","Features users are indifferent to"],ans:0,exp:"Expecters are basic needs; they don't excite if present, but infuriate if missing."},
{q:"How should customer needs be phrased?",opts:["As what the product has to DO, not HOW","With 'must' and 'should'","Negatively","As specific engineering values"],ans:0,exp:"Express needs independently of a specific conceptual solution."},
{q:"What is Benchmarking?",opts:["Testing a prototype","Comparing a product against competitors","Setting a budget","Interviewing customers"],ans:1,exp:"Benchmarking identifies intra-company best practices."}
],
session4:[
{q:"Target Specifications are set:",opts:["After concept selection","Right after identifying customer needs","During manufacturing","Before product planning"],ans:1,exp:"Target specs are translations of customer needs into measurable goals, set before concept generation."},
{q:"What is the House of Quality?",opts:["A manufacturing facility","A matrix used in QFD mapping WHATs to HOWs","A sales channel","A design software"],ans:1,exp:"The HoQ maps customer requirements (What) to engineering characteristics (How)."},
{q:"Final specifications involve:",opts:["Ignoring cost","Making trade-offs based on technical and cost models","A random selection","Repeating customer interviews"],ans:1,exp:"Final specs are refined after concept selection to balance performance and cost."},
{q:"A product metric must be:",opts:["Expensive","Subjective","Precise and measurable","Vague"],ans:2,exp:"Specifications are precise, measurable details (e.g., time < 75 sec)."}
],
session5:[
{q:"Which block to creativity gets stuck on a past solution?",opts:["Emotional","Cultural","Perpetual","Environmental"],ans:2,exp:"Perpetual blocks occur when we cannot see the problem from a new perspective."},
{q:"What is a rule of Brainstorming?",opts:["Criticize bad ideas quickly","Defer judgment","Limit the number of ideas","Work individually"],ans:1,exp:"No judgment during the generation phase to allow free-flowing creativity."},
{q:"What does 6-3-5 Brainwriting stand for?",opts:["6 concepts, 3 people, 5 hours","6 participants, 3 ideas, 5 minutes","6 steps, 3 rules, 5 tools","6 inches, 3 pounds, 5 dollars"],ans:1,exp:"6 members each write 3 ideas in 5-minute rounds."},
{q:"Affinity Diagrams are also known as:",opts:["Gantt charts","KJ Method","Pugh Matrix","House of Quality"],ans:1,exp:"The KJ method organizes large numbers of ideas into natural groupings."},
{q:"C-Sketch involves:",opts:["CAD modeling","Collaborative sketching where teammates add to a drawing","Cost calculation","Customer surveys"],ans:1,exp:"Teammates progressively add features to a shared sketch."}
],
session6:[
{q:"A Black Box model shows:",opts:["All internal gears","Inputs (Material, Energy, Info) and Outputs","Only cost","The manufacturing process"],ans:1,exp:"Black box abstracts the product to a prime function with energy, material, and info flows."},
{q:"Subtract and Operate is a:",opts:["Top-down method","Bottom-up functional decomposition method","Sales technique","Testing process"],ans:1,exp:"By disassembling and operating without a part, we deduce its function bottom-up."},
{q:"A Morphological Matrix helps to:",opts:["Calculate budget","Explore all possible functional solution combinations","Interview users","Draw CAD models"],ans:1,exp:"It maps atomic functions to physical embodiments to generate complete concepts."},
{q:"TRIZ is based on:",opts:["Brainstorming","Accepting trade-offs","Resolving contradictions using inventive principles","Random guessing"],ans:2,exp:"TRIZ uses 39 parameters and 40 principles to resolve engineering contradictions without compromise."}
],
session7:[
{q:"What is a 'Datum' in Concept Selection?",opts:["A data point","The baseline concept used for comparison","A numerical score","An external consultant"],ans:1,exp:"In the Pugh method, the datum is the reference concept all others are compared against."},
{q:"Pugh Concept Selection uses what scoring system?",opts:["1 to 10","+, -, 0 (Better, Worse, Same)","A to F","Percentages"],ans:1,exp:"Pugh Screening is coarse, using +, -, and 0 relative to the datum."},
{q:"Concept Scoring (Weighted Matrix) improves on Pugh by:",opts:["Being faster","Using weighted criteria and finer scale (1-5)","Ignoring criteria","Using random selection"],ans:1,exp:"Concept Scoring applies weights to criteria for a more precise evaluation."},
{q:"AHP involves:",opts:["Guessing weights","Pairwise comparisons to determine weights mathematically","Building a prototype","Customer surveys"],ans:1,exp:"Analytic Hierarchy Process uses pairwise comparisons to calculate criteria weights systematically."},
{q:"Concept Testing aims to:",opts:["Test material strength","Gather direct feedback from target customers on a concept","Test software bugs","Measure manufacturing time"],ans:1,exp:"It presents the concept to customers to gauge market acceptance."}
],
session8:[
{q:"What defines Modular Architecture?",opts:["Functions map 1-to-1 to physical chunks","Components perform multiple functions","It is very difficult to upgrade","Everything is a single piece"],ans:0,exp:"Modular products have physical chunks that each implement one or few functional elements."},
{q:"An advantage of Integral Architecture is:",opts:["Easy upgrades","High performance and compactness","Decoupled teams","Standardization"],ans:1,exp:"Integral design allows part sharing and optimization for weight/volume (e.g., sports cars)."},
{q:"Delayed Differentiation (Postponement) strategy:",opts:["Delays product launch","Delays final product differentiation until demand is known","Delays payment","Delays design"],ans:1,exp:"Helps reduce inventory risk by painting/customizing at the last minute."},
{q:"Platform Planning determines:",opts:["Meeting schedules","Which components are shared across a family vs unique","Factory layout","Software architecture"],ans:1,exp:"Balances commonality (cost savings) with differentiation (market appeal)."}
]
};

const gameData={
    session1:{title:`🎯 Design Concept Categorizer`,desc:`Drag each statement into the correct category`,categories: [`Types of Design`, `Design Process Types`],items:[{text:`Original (Innovative)`,cat:`Types of Design`},{text:`Adaptive`,cat:`Types of Design`},{text:`Stage-gate`,cat:`Design Process Types`},{text:`Redesign (Variant)`,cat:`Types of Design`},{text:`Spiral`,cat:`Design Process Types`},{text:`Hybrid`,cat:`Design Process Types`},{text:`Selection`,cat:`Types of Design`},{text:`Industrial`,cat:`Types of Design`}]},
    session2:{title:`⚡ Match the Structure`,desc:`Select a structure on the left, then click its feature on the right.`,leftLabel:`Structure`,rightLabel:`Feature`,pairs:[{left:`Functional`,right:`Groups by specialty`},{left:`Project`,right:`Full-time project manager`},{left:`Matrix`,right:`Dual reporting`},{left:`Flat`,right:`Few management layers`},{left:`Networked`,right:`External partners`},{left:`Concurrent Engineering`,right:`Parallel design`}]},
    session3:{title:`🛡️ Kano Model Sorter`,desc:`Drag features to their Kano category`,zones: [`Expecters`, `Spoken Performance`, `Exciters`],items:[{text:`Brakes working`,level:`Expecters`},{text:`Fuel efficiency`,level:`Spoken Performance`},{text:`Hidden vacuum`,level:`Exciters`},{text:`Makes calls`,level:`Expecters`},{text:`Battery life`,level:`Spoken Performance`},{text:`LED animations`,level:`Exciters`}]},
    session4:{title:`⚡ Match Needs to Metrics`,desc:`Select a customer need on the left, then click its measurable metric on the right.`,pairs:[{left:`Suspension easy to install`,right:`Time to assemble < 75s`},{left:`Fast acceleration`,right:`0-60 mph in < 5s`},{left:`Lightweight`,right:`Total mass < 2 kg`},{left:`Durable`,right:`Lifecycle > 10,000 uses`},{left:`Affordable`,right:`Unit cost < $50`}]},
    session5:{title:`⚡ Match Creative Methods`,desc:`Select a technique on the left, then click its key feature on the right.`,pairs:[{left:`Brainstorming`,right:`Defer judgment`},{left:`6-3-5 Brainwriting`,right:`6 people, 3 ideas, 5 min`},{left:`C-Sketch`,right:`Progressive drawing`},{left:`Affinity Diagram`,right:`Grouping by natural relation`},{left:`Concept Map`,right:`Visualizing relationships`}]},
    session6:{title:`🔍 Function Audit`,desc:`Flag the incorrect statements regarding functional modeling. Leave correct statements unflagged.`,configs:[{setting:`Black Box defines shape`,status:`Form`,isVuln:true},{setting:`Subtract and Operate is bottom-up`,status:`Correct`,isVuln:false},{setting:`TRIZ accepts trade-offs`,status:`Compromise`,isVuln:true},{setting:`FAST diagram is top-down`,status:`Correct`,isVuln:false},{setting:`Inputs include Energy, Material, Info`,status:`Correct`,isVuln:false},{setting:`Morphological matrix limits options`,status:`Restricting`,isVuln:true}]},
    session7:{title:`🏗️ Concept Selection Order`,desc:`Arrange the tools from coarsest (least precise) at the top, to most precise at the bottom.`,layers:[{name:`Intuition / Multi-voting`,order:1},{name:`Pugh Concept Screening (+, -, 0)`,order:2},{name:`Concept Scoring / Weighted Matrix`,order:3},{name:`Analytic Hierarchy Process (AHP)`,order:4}]},
    session8:{title:`🎯 Architecture Sorter`,desc:`Drag each trait to Modular or Integral`,categories: [`Modular`, `Integral`],items:[{text:`1-to-1 function mapping`,cat:`Modular`},{text:`Functions shared by components`,cat:`Integral`},{text:`Easy to upgrade`,cat:`Modular`},{text:`Changes propagate easily`,cat:`Integral`},{text:`High volume / Compact`,cat:`Integral`},{text:`Decouples teams`,cat:`Modular`}]}
};

// ============================================
//  PARTICLE BACKGROUND
// ============================================
(function(){
const c=document.getElementById('particleCanvas'),ctx=c.getContext('2d');
let w,h,particles=[];
function resize(){w=c.width=window.innerWidth;h=c.height=window.innerHeight;}
resize();window.addEventListener('resize',resize);
for(let i=0;i<60;i++)particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,r:Math.random()*2+0.5});
function draw(){ctx.clearRect(0,0,w,h);particles.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255,100,150,0.4)';ctx.fill();for(let j=i+1;j<particles.length;j++){const q=particles[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(255,100,150,${0.15*(1-dist/120)})`;ctx.stroke();}}});requestAnimationFrame(draw);}
draw();
})();

// ============================================
//  NAVIGATION
// ============================================
const contentArea=document.getElementById('contentArea');
const navLinks=document.querySelectorAll('.nav-link');
const pageTitle=document.getElementById('pageTitle');
const sidebar=document.getElementById('sidebar');

document.getElementById('hamburger').addEventListener('click',()=>sidebar.classList.toggle('open'));
document.getElementById('sidebarClose').addEventListener('click',()=>sidebar.classList.remove('open'));

navLinks.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        const section=link.dataset.section;
        navLinks.forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
        state.currentSection=section;
        sidebar.classList.remove('open');
        renderSection(section);
    });
});

function renderSection(id){
    if(id==='dashboard') return renderDashboard();
    const idx=sessions.findIndex(s=>s.id===id);
    if(idx>=0) renderSession(sessions[idx]);
}

function updateSidebarProgress(){
    const total=sessions.reduce((a,s)=>a+getP(s.id),0);
    const pct=Math.round(total/(sessions.length*100)*100);
    const ring=document.getElementById('overallProgressRing');
    const circ=163.36;
    ring.style.strokeDashoffset=circ-(circ*pct/100);
    document.getElementById('overallProgressText').textContent=pct+'%';
    document.getElementById('streakBadge').textContent='🔥 '+state.streak;
}

// ============================================
//  DASHBOARD
// ============================================
function renderDashboard(){
    pageTitle.textContent='Dashboard';
    const totalQ=Object.values(state.quizScores).reduce((a,v)=>a+(v.total||0),0);
    const correctQ=Object.values(state.quizScores).reduce((a,v)=>a+(v.correct||0),0);
    const avgPct=totalQ?Math.round(correctQ/totalQ*100):0;
    const completedS=sessions.filter(s=>getP(s.id)>=100).length;

    let html=`<div class="stat-cards animate-in">
        <div class="stat-card"><div class="stat-value">${completedS}/${sessions.length}</div><div class="stat-label">Sessions Completed</div></div>
        <div class="stat-card"><div class="stat-value">${avgPct}%</div><div class="stat-label">Quiz Average</div></div>
        <div class="stat-card"><div class="stat-value">${totalQ}</div><div class="stat-label">Questions Answered</div></div>
        <div class="stat-card"><div class="stat-value">${state.streak}</div><div class="stat-label">Day Streak 🔥</div></div>
    </div>
    <h3 class="section-title">Sessions</h3>
    <div class="dashboard-grid">`;

    sessions.forEach((s,i)=>{
        const p=getP(s.id);
        const sc=state.quizScores[s.id];
        const qText=sc?`${sc.correct}/${sc.total} correct`:'Not attempted';
        html+=`<div class="session-card animate-in" onclick="navigateTo('${s.id}')">
            <div class="sc-header"><span class="sc-icon">${s.icon}</span><div><div class="sc-title">Session ${i+1}: ${s.title}</div><div class="sc-subtitle">${s.subtitle}</div></div></div>
            <div class="sc-progress-bar"><div class="sc-progress-fill" style="width:${p}%"></div></div>
            <div class="sc-stats"><span>${p}% complete</span><span>Quiz: ${qText}</span></div>
        </div>`;
    });
    html+='</div>';
    contentArea.innerHTML=html;
}

function navigateTo(id){
    navLinks.forEach(l=>{l.classList.remove('active');if(l.dataset.section===id)l.classList.add('active');});
    state.currentSection=id;
    renderSection(id);
}

// ============================================
//  SESSION RENDERER
// ============================================
function renderSession(s){
    const data=sessionContent[s.id];
    const idx=sessions.indexOf(s);
    pageTitle.textContent=`Session ${idx+1}: ${s.title}`;
    setP(s.id,10); // Mark as started

    let html=`<div class="session-hero animate-in"><h2>${s.icon} ${data.hero.title}</h2><p>${data.hero.desc}</p></div>`;

    // Tabs
    html+=`<div class="tab-bar">
        <button class="tab-btn active" onclick="switchTab(this,'concepts')">📖 Concepts</button>
        <button class="tab-btn" onclick="switchTab(this,'flashcards')">🃏 Flashcards</button>
        <button class="tab-btn" onclick="switchTab(this,'quiz')">❓ Quiz</button>
        <button class="tab-btn" onclick="switchTab(this,'game')">🎮 Game</button>
    </div>`;

    // Concepts tab
    html+='<div class="tab-content active" id="tab-concepts">';
    data.concepts.forEach(c=>{
        html+=`<div class="concept-card animate-in"><h4>${c.title}</h4>${c.body}</div>`;
    });
    if(data.caseStudies&&data.caseStudies.length){
        html+='<h3 class="section-title">📋 Real-World Case Studies</h3>';
        data.caseStudies.forEach(cs=>{
            html+=`<div class="case-study animate-in"><h4>⚠️ ${cs.name}</h4><p class="cs-detail">${cs.detail}</p><p class="cs-detail"><strong>Impact:</strong> ${cs.impact}</p><p class="cs-detail"><strong>Lesson:</strong> ${cs.lesson}</p></div>`;
        });
    }
    html+='<div class="key-takeaway"><h4>✅ Key Takeaway</h4><p>You\'ve reviewed all concepts for this session. Test your knowledge with the Quiz and Game tabs!</p></div>';
    html+='</div>';

    // Flashcards tab
    const masteredCount=(data.flashcards||[]).filter((_,i)=>state.flashcardMastered[s.id+'_'+i]).length;
    html+=`<div class="tab-content" id="tab-flashcards"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h3 class="section-title" style="margin:0">🃏 Flashcards — Click to Flip</h3><div style="font-weight:bold;color:var(--accent);"><span id="fc-count-${s.id}">${masteredCount}</span> / ${(data.flashcards||[]).length} mastered ✅</div></div><div class="flashcard-grid">`;
    (data.flashcards||[]).forEach((fc,fi)=>{
        const key=s.id+'_'+fi;
        const mastered=!!state.flashcardMastered[key];
        html+=`<div style="display:flex;flex-direction:column;gap:8px;">
            <div class="flashcard ${mastered?'fc-mastered':''}" id="fc-${key}" onclick="this.classList.toggle('flipped')"><div class="flashcard-inner"><div class="flashcard-front"><h5>📌 Term</h5><p>${fc.front}</p></div><div class="flashcard-back"><p>${fc.back}</p></div></div></div>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;background:rgba(255,255,255,0.05);padding:8px 12px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);user-select:none;font-size:0.9rem;">
                <input type="checkbox" style="width:16px;height:16px;accent-color:var(--accent);" ${mastered?'checked':''} onchange="toggleFlashcardMastered('${s.id}',${fi},this.checked)"> I know this! ✅
            </label>
        </div>`;
    });
    html+='</div></div>';

    // Quiz tab
    html+=`<div class="tab-content" id="tab-quiz"><h3 class="section-title">❓ Quiz — Test Your Knowledge</h3><div id="quizArea-${s.id}"></div></div>`;

    // Game tab
    html+=`<div class="tab-content" id="tab-game"><h3 class="section-title">🎮 Interactive Game</h3><div id="gameArea-${s.id}"></div></div>`;

    contentArea.innerHTML=html;
    renderQuiz(s.id);
    renderGame(s.id);
}

function switchTab(btn,tab){
    btn.parentElement.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
    document.getElementById('tab-'+tab).classList.add('active');
    const sid=state.currentSection;
    if(tab==='concepts')setP(sid,Math.max(getP(sid),30));
    if(tab==='flashcards')setP(sid,Math.max(getP(sid),50));
}

window.toggleFlashcardMastered = function(sid, idx, isChecked) {
    const key = sid + '_' + idx;
    if(isChecked) state.flashcardMastered[key] = true;
    else delete state.flashcardMastered[key];
    saveState();
    
    // Update count UI
    const total = (sessionContent[sid].flashcards || []).length;
    const count = (sessionContent[sid].flashcards || []).filter((_,i)=>state.flashcardMastered[sid+'_'+i]).length;
    document.getElementById('fc-count-'+sid).textContent = count;
    
    // Update card styling
    const fc = document.getElementById('fc-'+key);
    if(fc) {
        if(isChecked) fc.style.opacity = '0.6';
        else fc.style.opacity = '1';
    }
};

// ============================================
//  QUIZ ENGINE
// ============================================
function renderQuiz(sid){
    const questions=quizData[sid];if(!questions)return;
    const area=document.getElementById('quizArea-'+sid);if(!area)return;
    let answered=new Array(questions.length).fill(null);
    let html='';
    questions.forEach((q,i)=>{
        html+=`<div class="quiz-question" id="qq-${sid}-${i}"><div class="qq-text"><span class="qq-num">Q${i+1}.</span> ${q.q}</div>`;
        const letters='ABCD';
        q.opts.forEach((o,j)=>{
            html+=`<div class="quiz-option" data-qi="${i}" data-oi="${j}" onclick="selectQuizOption('${sid}',${i},${j})"><span class="opt-letter">${letters[j]}</span><span>${o}</span></div>`;
        });
        html+=`<div class="quiz-feedback" id="qf-${sid}-${i}"></div></div>`;
    });
    html+=`<div class="quiz-actions"><button class="btn btn-primary" onclick="submitQuiz('${sid}')">Submit All</button><button class="btn btn-secondary" onclick="resetQuiz('${sid}')">Reset</button></div><div id="quizScore-${sid}"></div>`;
    area.innerHTML=html;
    window['quizAnswered_'+sid]=answered;
}

window.selectQuizOption=function(sid,qi,oi){
    const opts=document.querySelectorAll(`#qq-${sid}-${qi} .quiz-option`);
    opts.forEach(o=>o.classList.remove('selected'));
    opts[oi].classList.add('selected');
    window['quizAnswered_'+sid][qi]=oi;
};

window.submitQuiz=function(sid){
    const questions=quizData[sid];
    const answered=window['quizAnswered_'+sid];
    let correct=0;
    questions.forEach((q,i)=>{
        const opts=document.querySelectorAll(`#qq-${sid}-${i} .quiz-option`);
        const fb=document.getElementById(`qf-${sid}-${i}`);
        opts.forEach(o=>o.style.pointerEvents='none');
        if(answered[i]===q.ans){
            correct++;opts[q.ans].classList.add('correct');
            fb.className='quiz-feedback show correct';fb.textContent='✅ Correct! '+q.exp;
        }else{
            if(answered[i]!==null)opts[answered[i]].classList.add('wrong');
            opts[q.ans].classList.add('correct');
            fb.className='quiz-feedback show wrong';fb.textContent='❌ Incorrect. '+q.exp;
        }
    });
    state.quizScores[sid]={correct,total:questions.length};saveState();
    const pct=Math.round(correct/questions.length*100);
    document.getElementById('quizScore-'+sid).innerHTML=`<div class="score-display"><div class="score-value">${correct}/${questions.length}</div><div class="score-label">Score: ${pct}%</div></div>`;
    setP(sid,Math.max(getP(sid),70+(pct>=80?30:0)));
    updateSidebarProgress();
};

window.resetQuiz=function(sid){renderQuiz(sid);};

// ============================================
//  GAME ENGINES
// ============================================
function renderGame(sid){
    const area=document.getElementById('gameArea-'+sid);if(!area)return;
    const g=gameData[sid];if(!g)return;

    if(sid==='session1') renderDragDropGame(area,g,sid);
    else if(sid==='session2') renderPortGame(area,g,sid);
    else if(sid==='session3') renderPurdueGame(area,g,sid);
    else if(sid==='session4') renderPortGame(area,g,sid);
    else if(sid==='session5') renderMatchGame(area,g,sid);
    else if(sid==='session6') renderAuditGame(area,g,sid);
    else if(sid==='session7') renderDefenseGame(area,g,sid);
    else if(sid==='session8') renderDragDropGame(area,g,sid);
}

// S1: CIA drag-and-drop
function renderDragDropGame(area,g,sid){
    const shuffled=[...g.items].sort(()=>Math.random()-0.5);
    let html=`<div class="game-container"><div class="game-header"><h4>${g.title}</h4><span class="game-score" id="gs-${sid}">0/${g.items.length}</span></div><p style="color:var(--text-secondary);margin-bottom:16px">${g.desc}</p>`;
    html+='<div class="drag-zone" id="dragzone-'+sid+'">';
    shuffled.forEach((item,i)=>{html+=`<div class="drag-item" draggable="true" data-cat="${item.cat}" data-idx="${i}" id="di-${sid}-${i}">${item.text}</div>`;});
    html+='</div><div class="drop-zones">';
    (g.categories||[]).forEach(cat=>{
        html+=`<div class="drop-zone" data-cat="${cat}" id="dz-${sid}-${cat.replace(/[^a-zA-Z0-9]/g,'')}"><h5>📌 ${cat}</h5></div>`;
    });
    html+='</div><button class="btn btn-secondary" style="margin-top:16px" onclick="renderGame(\''+sid+'\')">🔄 Reset</button></div>';
    area.innerHTML=html;

    let score=0;
    area.querySelectorAll('.drag-item').forEach(el=>{
        el.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',el.id));
    });
    area.querySelectorAll('.drop-zone').forEach(zone=>{
        zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('drag-over');});
        zone.addEventListener('dragleave',()=>zone.classList.remove('drag-over'));
        zone.addEventListener('drop',e=>{
            e.preventDefault();zone.classList.remove('drag-over');
            const id=e.dataTransfer.getData('text/plain');
            const item=document.getElementById(id);if(!item||item.classList.contains('placed'))return;
            if(item.dataset.cat===zone.dataset.cat){
                score++;item.classList.add('placed');item.style.background='rgba(34,197,94,0.2)';item.style.borderColor='#22c55e';
                zone.appendChild(item);item.draggable=false;
                document.getElementById('gs-'+sid).textContent=score+'/'+g.items.length;
                if(score===g.items.length)setP(sid,100);
            }else{item.style.animation='wrongShake 0.5s ease';setTimeout(()=>item.style.animation='',500);}
        });
    });
}

// S2: Port Scanner timer game
function renderPortGame(area,g,sid){
    const shuffled=[...g.pairs].sort(()=>Math.random()-0.5);
    let qi=0,score=0,timeLeft=60;
    let html=`<div class="game-container"><div class="game-header"><h4>${g.title}</h4><div><span class="game-score" id="gs-${sid}">${score}/${g.pairs.length}</span> &nbsp; <span class="game-timer" id="gt-${sid}">${timeLeft}s</span></div></div><p style="color:var(--text-secondary);margin-bottom:16px">${g.desc}</p>`;
    html+=`<div class="game-prompt" id="gp-${sid}">Match: <strong>${shuffled[0].left}</strong></div>`;
    const allRights=[...new Set(g.pairs.map(p=>p.right))].sort(()=>Math.random()-0.5);
    html+='<div class="port-game-grid">';
    allRights.forEach((r,i)=>{html+=`<button class="port-btn" data-right="${r}" id="pb-${sid}-${i}">${r}</button>`;});
    html+='</div><div id="gr-'+sid+'" class="game-result" style="display:none"></div></div>';
    area.innerHTML=html;

    const timer=setInterval(()=>{timeLeft--;document.getElementById('gt-'+sid).textContent=timeLeft+'s';if(timeLeft<=0){clearInterval(timer);endPortGame();}},1000);

    area.querySelectorAll('.port-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
            if(qi>=shuffled.length)return;
            const correct=shuffled[qi].right;
            if(btn.dataset.right===correct){
                score++;btn.classList.add('correct-pick');setTimeout(()=>btn.classList.remove('correct-pick'),400);
            }else{
                btn.classList.add('wrong-pick');setTimeout(()=>btn.classList.remove('wrong-pick'),400);
                const correctBtn = Array.from(area.querySelectorAll('.port-btn')).find(b=>b.dataset.right===correct);
                if(correctBtn){ correctBtn.classList.add('correct-pick');setTimeout(()=>correctBtn.classList.remove('correct-pick'),600); }
            }
            qi++;
            document.getElementById('gs-'+sid).textContent=score+'/'+shuffled.length;
            if(qi<shuffled.length){document.getElementById('gp-'+sid).innerHTML='Match: <strong>'+shuffled[qi].left+'</strong>';}
            else{clearInterval(timer);endPortGame();}
        });
    });

    function endPortGame(){
        document.getElementById('gr-'+sid).style.display='block';
        document.getElementById('gr-'+sid).innerHTML=`<div class="result-score">${score}/${shuffled.length}</div><p>Time: ${60-timeLeft}s</p><button class="btn btn-primary" style="margin-top:12px" onclick="renderGame('${sid}')">🔄 Play Again</button>`;
        if(score>=shuffled.length*0.7)setP(sid,100);
    }
}

// S3: Defense Builder ordering
function renderDefenseGame(area,g,sid){
    const shuffled=[...g.layers].sort(()=>Math.random()-0.5);
    let html=`<div class="game-container"><div class="game-header"><h4>${g.title}</h4><span class="game-score" id="gs-${sid}">Arrange layers</span></div><p style="color:var(--text-secondary);margin-bottom:16px">${g.desc}</p>`;
    html+='<div class="drag-zone" id="srczone-'+sid+'">';
    shuffled.forEach((l,i)=>{html+=`<div class="drag-item" draggable="true" data-order="${l.order}" id="dl-${sid}-${i}">${l.name}</div>`;});
    html+='</div><div class="defense-slots">';
    for(let i=0;i<g.layers.length;i++){html+=`<div class="defense-slot" data-slot="${i+1}" id="ds-${sid}-${i}"></div>`;}
    html+=`</div><button class="btn btn-primary" style="margin-top:12px" onclick="checkDefense('${sid}',${g.layers.length})">Check Order</button><button class="btn btn-secondary" style="margin-top:12px;margin-left:8px" onclick="renderGame('${sid}')">🔄 Reset</button><div id="gr-${sid}" class="game-result" style="display:none"></div></div>`;
    area.innerHTML=html;

    area.querySelectorAll('.drag-item').forEach(el=>{el.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',el.id));});
    area.querySelectorAll('.defense-slot').forEach(slot=>{
        slot.addEventListener('dragover',e=>{e.preventDefault();slot.classList.add('drag-over');});
        slot.addEventListener('dragleave',()=>slot.classList.remove('drag-over'));
        slot.addEventListener('drop',e=>{
            e.preventDefault();slot.classList.remove('drag-over');
            const id=e.dataTransfer.getData('text/plain');const el=document.getElementById(id);
            if(slot.children.length>0){const prev=slot.children[0];document.getElementById('srczone-'+sid).appendChild(prev);}
            slot.appendChild(el);slot.classList.add('filled');
        });
    });
}

window.checkDefense=function(sid,total){
    const slots=document.querySelectorAll(`[id^="ds-${sid}-"]`);
    let correct=0;
    slots.forEach((slot,i)=>{
        const child=slot.querySelector('.drag-item');
        if(child&&parseInt(child.dataset.order)===i+1){correct++;slot.style.borderColor='#22c55e';child.style.background='rgba(34,197,94,0.2)';}
        else if(child){slot.style.borderColor='#ef4444';child.style.background='rgba(239,68,68,0.2)';}
    });
    document.getElementById('gr-'+sid).style.display='block';
    document.getElementById('gr-'+sid).innerHTML=`<div class="result-score">${correct}/${total}</div><p>${correct===total?'🎉 Perfect! All layers correctly ordered!':'Try again — arrange from Perimeter (outermost) to User (innermost).'}</p>`;
    if(correct===total)setP(sid,100);
};

// S4: Purdue Sorter
function renderPurdueGame(area,g,sid){
    const shuffled=[...g.items].sort(()=>Math.random()-0.5);
    let html=`<div class="game-container"><div class="game-header"><h4>${g.title}</h4><span class="game-score" id="gs-${sid}">0/${g.items.length}</span></div><p style="color:var(--text-secondary);margin-bottom:16px">${g.desc}</p>`;
    html+='<div class="drag-zone" id="pdragzone-'+sid+'">';
    shuffled.forEach((item,i)=>{html+=`<div class="drag-item" draggable="true" data-level="${item.level}" id="pi-${sid}-${i}">${item.text}</div>`;});
    html+='</div><div class="drop-zones">';
    g.zones.forEach(z=>{html+=`<div class="drop-zone" data-cat="${z}" id="pz-${sid}-${z.replace(' ','')}"><h5>🔹 ${z}</h5></div>`;});
    html+='</div><button class="btn btn-secondary" style="margin-top:16px" onclick="renderGame(\''+sid+'\')">🔄 Reset</button></div>';
    area.innerHTML=html;

    let score=0;
    area.querySelectorAll('.drag-item').forEach(el=>{el.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',el.id));});
    area.querySelectorAll('.drop-zone').forEach(zone=>{
        zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('drag-over');});
        zone.addEventListener('dragleave',()=>zone.classList.remove('drag-over'));
        zone.addEventListener('drop',e=>{
            e.preventDefault();zone.classList.remove('drag-over');
            const id=e.dataTransfer.getData('text/plain');const item=document.getElementById(id);if(!item||item.classList.contains('placed'))return;
            if(item.dataset.level===zone.dataset.cat){score++;item.classList.add('placed');item.style.background='rgba(34,197,94,0.2)';item.style.borderColor='#22c55e';zone.appendChild(item);item.draggable=false;document.getElementById('gs-'+sid).textContent=score+'/'+g.items.length;if(score===g.items.length)setP(sid,100);}
            else{item.style.animation='wrongShake 0.5s ease';setTimeout(()=>item.style.animation='',500);}
        });
    });
}

// S5: Match Game
function renderMatchGame(area,g,sid){
    const lefts=[...g.pairs].sort(()=>Math.random()-0.5);
    const rights=[...new Set(g.pairs.map(p=>p.right))];
    let html=`<div class="game-container"><div class="game-header"><h4>${g.title}</h4><span class="game-score" id="gs-${sid}">0/${g.pairs.length}</span></div><p style="color:var(--text-secondary);margin-bottom:16px">${g.desc}</p>`;
    html+=`<div style="margin-bottom:12px"><strong style="color:var(--text-muted)">Select a term on the left, then click its match on the right:</strong></div>`;
    html+='<div style="margin-bottom:16px">';
    lefts.forEach((p,i)=>{html+=`<div class="match-item" data-right="${p.right}" data-idx="${i}" id="ml-${sid}-${i}" onclick="selectMatchLeft('${sid}',${i})" style="margin-bottom:8px">${p.left}</div>`;});
    html+='</div><div style="display:flex;gap:12px;flex-wrap:wrap">';
    rights.forEach(r=>{html+=`<div class="match-item" data-val="${r}" onclick="selectMatchRight('${sid}','${r}')" style="padding:16px 24px;font-weight:700;color:var(--accent)">${r}</div>`;});
    html+=`</div><div id="gr-${sid}" class="game-result" style="display:none"></div><button class="btn btn-secondary" style="margin-top:16px" onclick="renderGame('${sid}')">🔄 Reset</button></div>`;
    area.innerHTML=html;
    window['matchState_'+sid]={selectedLeft:null,score:0,total:g.pairs.length};
}

window.selectMatchLeft=function(sid,idx){
    const el=document.getElementById('ml-'+sid+'-'+idx);
    if(el.classList.contains('matched'))return;
    document.querySelectorAll(`[id^="ml-${sid}-"]`).forEach(e=>e.classList.remove('selected'));
    el.classList.add('selected');
    window['matchState_'+sid].selectedLeft=idx;
};

window.selectMatchRight=function(sid,val){
    const ms=window['matchState_'+sid];if(ms.selectedLeft===null)return;
    const el=document.getElementById('ml-'+sid+'-'+ms.selectedLeft);
    if(el.dataset.right===val){
        ms.score++;el.classList.remove('selected');el.classList.add('matched');
        document.getElementById('gs-'+sid).textContent=ms.score+'/'+ms.total;
        if(ms.score===ms.total){setP(sid,100);document.getElementById('gr-'+sid).style.display='block';document.getElementById('gr-'+sid).innerHTML='<div class="result-score">🎉 All Matched!</div>';}
    }else{el.classList.add('wrong-flash');setTimeout(()=>el.classList.remove('wrong-flash'),500);}
    ms.selectedLeft=null;
};

// S6: Cloud Audit
function renderAuditGame(area,g,sid){
    let html=`<div class="game-container"><div class="game-header"><h4>${g.title}</h4><span class="game-score" id="gs-${sid}">Flag misconfigurations</span></div><p style="color:var(--text-secondary);margin-bottom:16px">${g.desc}</p>`;
    g.configs.forEach((c,i)=>{
        html+=`<div class="audit-card" id="ac-${sid}-${i}"><div><div class="audit-label">${c.setting}</div><span class="audit-status ${c.isVuln?'insecure':'secure'}">${c.status}</span></div><button onclick="flagAudit('${sid}',${i},${c.isVuln})">🚩 Flag</button></div>`;
    });
    html+=`<button class="btn btn-primary" style="margin-top:16px" onclick="checkAudit('${sid}')">Check Results</button><button class="btn btn-secondary" style="margin-top:16px;margin-left:8px" onclick="renderGame('${sid}')">🔄 Reset</button><div id="gr-${sid}" class="game-result" style="display:none"></div></div>`;
    area.innerHTML=html;
    window['auditFlags_'+sid]=new Set();
}

window.flagAudit=function(sid,idx,isVuln){
    const card=document.getElementById('ac-'+sid+'-'+idx);
    const flags=window['auditFlags_'+sid];
    if(flags.has(idx)){flags.delete(idx);card.classList.remove('flagged');}
    else{flags.add(idx);card.classList.add('flagged');}
};

window.checkAudit=function(sid){
    const g=gameData[sid];const flags=window['auditFlags_'+sid];
    let correct=0;
    g.configs.forEach((c,i)=>{
        const card=document.getElementById('ac-'+sid+'-'+i);
        const flagged=flags.has(i);
        if(flagged===c.isVuln){correct++;card.classList.add('correct-flag');card.classList.remove('wrong-flag');}
        else{card.classList.add('wrong-flag');card.classList.remove('correct-flag');}
        card.querySelector('button').disabled=true;
    });
    document.getElementById('gr-'+sid).style.display='block';
    document.getElementById('gr-'+sid).innerHTML=`<div class="result-score">${correct}/${g.configs.length}</div><p>${correct===g.configs.length?'🎉 Perfect audit!':'Review: flag items that are misconfigured, leave secure ones unflagged.'}</p>`;
    if(correct>=g.configs.length*0.8)setP(sid,100);
};




// ============================================
//  INIT
// ============================================
updateSidebarProgress();
renderDashboard();
