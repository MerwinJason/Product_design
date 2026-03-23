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
{q:"Which is a characteristic of successful product development?",opts:["High employee turnover","Development time and cost","Ignoring competitors","Maximizing initial sales price only"],ans:1,exp:"Product quality, cost, development time, development cost, and capability define success."},
{q:"What is the Profit Equation?",opts:["Profit = Price + Cost","Profit = Cost - Price","Profit = Price / Cost","Profit = Price - Cost"],ans:3,exp:"Profit is calculated by subtracting product cost from its selling price."},
{q:"In the Technology S-Curve, what happens in Phase 3?",opts:["Slow initial progress","Rapid exponential growth","Product maturity and diminishing returns","Product launch"],ans:2,exp:"In Phase 3, physical limits are reached and returns on engineering effort diminish."},
{q:"What is Variant Design?",opts:["Selection design","Redesigning or scaling an existing product line","Original design","Industrial design"],ans:1,exp:"Redesign or Variant Design modifies an existing design, like making a 15-inch version of a 13-inch laptop."},
{q:"Which development process involves iterative development loops?",opts:["Waterfall","Stage-Gate","Spiral","Linear"],ans:2,exp:"Spiral product development involves iterative loops to refine the product quickly."},
{q:"According to good design, 'Green Design' falls under:",opts:["Performance Requirements (Environmental)","Regulatory Issues","Life-cycle issues","Aesthetic requirements"],ans:0,exp:"Green design ensures the product operates maintaining a safe and clean environment."},
{q:"Stage-Gate Phase 0 is called:",opts:["Detail Design","System-level Development","Concept Development","Planning"],ans:3,exp:"Phase 0 is Planning, where opportunities are identified before formal development begins."}
],
session2:[
{q:"Which organizational structure groups employees by specialty?",opts:["Project","Networked","Flat","Functional"],ans:3,exp:"Functional organizations group by technical specialty (e.g., all mechanical engineers together)."},
{q:"What is an advantage of a Project Organization?",opts:["Deep functional expertise","Fast product delivery and clear authority","No resource duplication","Slow decision making"],ans:1,exp:"Project organizations assign members full-time to a project manager, accelerating delivery."},
{q:"What characterizes a 'Heavyweight' Matrix structure?",opts:["Functional Manager has more power","Power is balanced","Project Manager has more power","No managers exist"],ans:2,exp:"A strong (heavyweight) matrix leans closer to a project structure where the PM leads."},
{q:"What defines Concurrent Engineering?",opts:["Sequential design steps","Cross-functional teams working in parallel","Reverse engineering","Outsourcing everything"],ans:1,exp:"Concurrent engineering uses parallel design across departments to save time and reduce errors."},
{q:"What is an example of a 'Derivative' product development project?",opts:["A completely new technology platform","A minor bug fix","Extending an existing platform for a familiar market","A radically new invention"],ans:2,exp:"Derivatives leverage existing platforms to quickly capture adjacent markets."},
{q:"How is 'Market Size' calculated?",opts:["Market growth * price","Units per year * average price","Number of competitors * price","Development cost * units"],ans:1,exp:"Market size equals expected units sold per year multiplied by the average price."},
{q:"Mission Statements should be:",opts:["Vague","SMART (Specific, Measurable, Achievable, Realistic, Time bound)","Open-ended","Overly ambitious"],ans:1,exp:"SMART goals provide clear constraints and timelines for the engineering team."},
{q:"A Flat Organization is best suited for:",opts:["Massive global corporations","Startups and creative agencies","Heavy manufacturing","Government agencies"],ans:1,exp:"Flat structures have few management layers, ideal for agile startups."}
],
session3:[
{q:"What does an Ethnographic study involve?",opts:["Surveying 1000 people","Observing customers in their real environment","Reading competitor manuals","Cost analysis"],ans:1,exp:"Ethnography observes users interacting with products naturally, revealing hidden insights."},
{q:"In Kano's Model, what are 'Expecters'?",opts:["Basic needs that cause massive dissatisfaction if absent","Unexpected exciting features","Performance features that scale linearly","Features users don't care about"],ans:0,exp:"Expecters are must-haves; their absence infurtiates buyers, but their presence doesn't add 'extra' joy."},
{q:"According to Kano, how do 'Exciters' evolve over time?",opts:["They disappear","They become Spoken Performance needs","They migrate down to become 'Expecters' (Must-haves)","They cost more to make"],ans:2,exp:"Over time, innovations (like WiFi in hotels) become basic market expectations."},
{q:"How should customer needs be phrased in a survey?",opts:["As what the product has to DO, not HOW","With 'must' and 'should'","Negatively","As specific engineering values"],ans:0,exp:"Needs state the 'WHAT', leaving the 'HOW' open for engineers to solve."},
{q:"What is the risk of using 'Leading Questions' in customer surveys?",opts:["It takes too long","It introduces bias and masks true customer needs","It makes the survey too short","It costs more money"],ans:1,exp:"Leading questions force the customer to confirm your assumptions rather than share their truth."},
{q:"What does 'M' stand for in the Kano Satisfaction equation?",opts:["Market","Multi-voting","Must-be (Expecters)","Machine"],ans:2,exp:"M = Must-be. (A+O) / (A+O+M+I) is the formula for satisfaction extent."},
{q:"What is Competitive Benchmarking?",opts:["Comparing your product's metrics against industry leaders","Setting an internal budget","Testing prototypes on customers","Brainstorming"],ans:0,exp:"Benchmarking identifies best practices by studying competing products."},
{q:"Deconstructing a competitor's product to analyze its cost and architecture is called:",opts:["Forward engineering","Reverse engineering","Value engineering","Ethnography"],ans:1,exp:"Reverse engineering breaks down physical rivals to extract technical secrets."}
],
session4:[
{q:"What is the difference between a Need and a Metric?",opts:["No difference","Needs are qualitative, Metrics are precise and measurable","Metrics are qualitative, Needs are measurable","Metrics are only used for software"],ans:1,exp:"A need is 'fast'; a metric is '0-60mph in 5 seconds'."},
{q:"In the House of Quality (QFD), what goes in the 'Ceiling/Top'?",opts:["Customer Needs (WHATs)","Engineering Characteristics (HOWs)","Target Values","Correlations"],ans:1,exp:"The engineering characteristics (HOWs) form the ceiling of the HoQ."},
{q:"What is the purpose of the 'Roof' in the House of Quality?",opts:["To look nice","To map the correlations and trade-offs between different engineering metrics","To list customer needs","To list competitors"],ans:1,exp:"The roof shows if improving one metric (engine power) hurts another (fuel economy)."},
{q:"What are 'Marginally Acceptable' target values?",opts:["The absolute best mathematical result","The minimum value that makes the product commercially viable","A random guess","The competitor's worst feature"],ans:1,exp:"It is the bare minimum threshold to sell the product successfully."},
{q:"Why do designers create 'Technical Models'?",opts:["To predict metric values via math/software without building costly physical prototypes","To show to marketers","To replace CAD drawing","To calculate employee salaries"],ans:0,exp:"Technical models (like simulations) let teams test trade-offs instantly and cheaply."},
{q:"What is a Bill of Materials (BOM)?",opts:["A list of customer complaints","An exhaustive list of all physical parts and their costs","A timeline chart","A list of competitors"],ans:1,exp:"A BOM is used to develop a primary cost model for the final product specifications."},
{q:"Target Specifications are set:",opts:["After concept selection","Right after identifying customer needs, before concept generation","During manufacturing","Before product planning"],ans:1,exp:"Target specs guide concept generation; final specs are set after concepts are selected."},
{q:"What value indicates a 'Strong' relationship in a QFD matrix?",opts:["1","3","5","9"],ans:3,exp:"Typically, 9 = Strong, 3 = Medium, 1 = Weak relationship between a need and a metric."}
],
session5:[
{q:"Which mental block is characterized by a fear of making mistakes or being judged?",opts:["Perceptual","Emotional","Cultural","Environmental"],ans:1,exp:"Emotional blocks relate to anxiety, fear of failure, and intolerance of ambiguity."},
{q:"What is a fundamental rule of Brainstorming?",opts:["Criticize bad ideas quickly to save time","Suspend and defer all judgment during the generation phase","Limit the number of ideas","Work individually"],ans:1,exp:"Criticism stifles creativity. Evaluate ideas only after the generation phase is complete."},
{q:"What does 6-3-5 Brainwriting stand for?",opts:["6 concepts, 3 people, 5 hours","6 participants write 3 ideas in 5-minute rounds","6 steps, 3 rules, 5 tools","6 inches, 3 pounds, 5 dollars"],ans:1,exp:"It's a silent method where 6 members pass papers to iterate on ideas without talking."},
{q:"What is a key advantage of Brainwriting over Brainstorming?",opts:["It is louder","It prevents loud or dominant voices from taking over, helping introverts","It requires no paper","It is slower"],ans:1,exp:"Silent generation ensures every participant contributes equally without social fear."},
{q:"Affinity Diagrams (KJ Method) are used to:",opts:["Calculate costs","Organize massive amounts of disjointed ideas into natural groupings on a wall","Create a 3D CAD model","Interview customers"],ans:1,exp:"By clustering sticky notes, natural themes and categories emerge visually."},
{q:"What is Collaborative Sketching (C-Sketch)?",opts:["Drawing a CAD model alone","Passing a sketch around a table where teammates progressively add features","Cost calculation","Customer surveys"],ans:1,exp:"C-Sketch is a non-verbal method where an idea evolves physically through team additions."},
{q:"Believing that 'logic and math are always better than intuition' is what type of block?",opts:["Perceptual","Cultural","Emotional","Environmental"],ans:1,exp:"Cultural blocks stem from societal conditioning about how professionals 'should' act."},
{q:"What is a Concept Map?",opts:["A geographical map","A visual flowchart of nodes and arrows showing logical relationships between concepts","A list of prices","A brainstorming timer"],ans:1,exp:"Concept maps diagram relationships, helping find implicit connections between ideas."}
],
session6:[
{q:"A Black Box model processes which three flows?",opts:["Solid, Liquid, Gas","Money, Time, Effort","Material, Energy, and Information","Revenue, Cost, Profit"],ans:2,exp:"All product prime functions transform material, energy, and information inputs into outputs."},
{q:"How do you read a FAST diagram?",opts:["Top to Bottom","Left to Right asking 'How?', Right to Left asking 'Why?'","Alphabetically","Inside Out"],ans:1,exp:"FAST diagrams establish logical critical paths testing How/Why relationships."},
{q:"Subtract and Operate is what kind of method?",opts:["Top-down","Bottom-up reverse engineering","A marketing tool","A software testing tool"],ans:1,exp:"You remove a physical part to see how the system fails, deducing the part's function bottom-up."},
{q:"What does a Morphological Matrix do?",opts:["Calculates budget","Maps sub-functions to physical mechanisms to combine thousands of concepts","Interviews users","Draws CAD models"],ans:1,exp:"It grids atomic functions against physical solutions (e.g., Energy Source -> Battery vs Gas)."},
{q:"TRIZ is focused on solving what?",opts:["Engineering Contradictions without accepting compromises","Marketing disputes","Budget overruns","Software bugs"],ans:0,exp:"TRIZ breaks contradictions (e.g., wanting it strong but light) using inventive principles."},
{q:"How many Inventive Principles does TRIZ have?",opts:["10","21","39","40"],ans:3,exp:"Genrich Altshuller identified 40 universal inventive principles by analyzing patents."},
{q:"According to TRIZ, what is 'Segmentation' (Principle 1)?",opts:["Combining two products","Dividing an object into independent or easily disassembled parts","Painting it a different color","Making it heavier"],ans:1,exp:"Segmentation breaks overwhelming physical problems down into modular solutions."},
{q:"When formatting a function string, you MUST use:",opts:["An adjective and a noun","An active verb and a measurable noun (e.g., 'Generate Heat')","A passive verb","A full sentence"],ans:1,exp:"Standardized verb-noun strings make functional decomposition clear and universal."}
],
session7:[
{q:"In Concept Screening (Pugh Matrix), what is a 'Datum'?",opts:["A data point","The baseline reference concept that all others are scored against","A numerical score","An external consultant"],ans:1,exp:"The Datum acts as the base 0. Other concepts score +, -, or 0 relative to it."},
{q:"Pugh Concept Selection uses what scoring scale?",opts:["1 to 10","+, -, 0 (Better, Worse, Same)","A to F","Percentages"],ans:1,exp:"Pugh Screening is a coarse filter, used to quickly eliminate bad concepts."},
{q:"Concept Scoring (Weighted Matrix) improves on Pugh Screening by:",opts:["Being faster","Using weighted criteria (percentages) and a finer scalar grid (1-5)","Ignoring criteria","Using random selection"],ans:1,exp:"Scoring is mathematically precise, prioritizing criteria based on customer importance."},
{q:"What is Analytic Hierarchy Process (AHP)?",opts:["Guessing weights","Using a 1-9 pairwise comparison matrix to mathematically derive criteria weights","Building a prototype","Customer surveys"],ans:1,exp:"AHP is a rigorous method to ensure human judgments regarding priorities are logically consistent."},
{q:"In AHP, if the Consistency Ratio (CR) is greater than 0.10, what does it mean?",opts:["The result is perfect","The human judgments are too contradictory and must be re-evaluated","The product is ready for market","The budget is exceeded"],ans:1,exp:"CR > 0.10 means A is better than B, B is better than C, but C was rated better than A (illogical)."},
{q:"What is 'Normalizing' a matrix value in AHP?",opts:["Making it normal","Dividing the cell value by its column sum so the final weights add to 1.0 (100%)","Multiplying by 100","Deleting negative numbers"],ans:1,exp:"Normalization turns abstract scores into strict percentage weights."},
{q:"What is Multi-voting?",opts:["A complex mathematical model","A simple selection method where team members vote with dots or tallies","A survey of 1000 customers","A software system"],ans:1,exp:"Multi-voting is the fastest, most intuitive (but least rigorous) method of selection."},
{q:"Concept Testing aims to:",opts:["Test material strength","Present non-working mockups to target customers to measure intent to purchase","Test software bugs","Measure manufacturing time"],ans:1,exp:"Testing validates market acceptance before spending millions on mass manufacturing."}
],
session8:[
{q:"What defines a Modular Architecture?",opts:["Functions map 1-to-1 to physical chunks with standard interfaces","Components perform multiple functions","It is very difficult to upgrade","Everything is cast as a single piece"],ans:0,exp:"Modular products separate functions into clean chunks (e.g., a Desktop PC motherboard)."},
{q:"An advantage of Integral Architecture is:",opts:["Easy upgrades","Maximized performance, compactness, and low weight","Decoupled design teams","High part standardization"],ans:1,exp:"Integral design (like a fighter jet) shares parts to save weight and maximize performance."},
{q:"What is 'Bus-Modular' architecture?",opts:["Chunks cannot be swapped","Different modules plug into a common spine via a standardized interface (e.g., USB)","All chunks are identical (e.g., LEGO)","Everything connects to the casing"],ans:1,exp:"A central bus allows multiple varied chunks to connect (like PCIe on a motherboard)."},
{q:"What is an 'Incidental Interaction' in product architecture?",opts:["A planned connection like a wire","An unplanned physical interaction like vibration, heat transfer, or magnetic interference","A customer review","A marketing strategy"],ans:1,exp:"Incidental interactions often cause integration failures and must be managed carefully."},
{q:"Delayed Differentiation (Postponement) strategy:",opts:["Delays product launch to save money","Delays final product differentiation (e.g., painting, localized software) until exact demand is known","Delays payment to suppliers","Delays the CAD design"],ans:1,exp:"This reduces inventory risk by keeping generic stock until the very last stage."},
{q:"What is Product Platform Planning?",opts:["Meeting schedules","Creating a common core of shared chunks to build a family of differentiated products cheaply","Factory floor layout","Software architecture"],ans:1,exp:"Platforms balance the cost savings of commonality with the market appeal of differentiation."},
{q:"What is 'Sectional-Modular' architecture?",opts:["Interfaces vary","All chunks have identical interfaces and can connect to each other infinitely (e.g., piping)","No standard interfaces","A single integrated block"],ans:1,exp:"Sectional pieces (like LEGO or PVC pipes) can construct endless sizes and shapes."},
{q:"Step 1 of the Architecture Design Process is to:",opts:["Identify incidental interactions","Create a schematic of the product's functional elements","Assign teams","Rent a factory"],ans:1,exp:"A schematic abstracts the product into its core functional blocks before chunking happens."}
]
};

const gameData={
    session1:{title:`🎯 Design Concept Categorizer`,desc:`Drag each statement into the correct category`,categories: [`Types of Design`, `Design Process Types`],items:[{text:`Original (Innovative)`,cat:`Types of Design`},{text:`Adaptive`,cat:`Types of Design`},{text:`Stage-gate`,cat:`Design Process Types`},{text:`Redesign (Variant)`,cat:`Types of Design`},{text:`Spiral`,cat:`Design Process Types`},{text:`Hybrid`,cat:`Design Process Types`},{text:`Selection`,cat:`Types of Design`},{text:`Industrial`,cat:`Types of Design`}]},
    session2:{title:`⚡ Match the Structure`,desc:`Select a structure on the left, then click its feature on the right.`,leftLabel:`Structure`,rightLabel:`Feature`,pairs:[{left:`Functional`,right:`Groups by specialty`},{left:`Project`,right:`Full-time project manager`},{left:`Heavyweight Matrix`,right:`PM has main power`},{left:`Flat`,right:`Few management layers`},{left:`Networked`,right:`External partners`},{left:`Concurrent Engineering`,right:`Parallel design`}]},
    session3:{title:`🛡️ Kano Model Sorter`,desc:`Drag features to their Kano category`,zones: [`Expecters (Must-be)`, `Spoken Performance`, `Exciters`],items:[{text:`Brakes working`,level:`Expecters (Must-be)`},{text:`Fuel efficiency`,level:`Spoken Performance`},{text:`Hidden vacuum in car`,level:`Exciters`},{text:`Makes phone calls`,level:`Expecters (Must-be)`},{text:`Battery life length`,level:`Spoken Performance`},{text:`Custom LED animations`,level:`Exciters`}]},
    session4:{title:`⚡ Match Needs to Metrics`,desc:`Select a qualitative customer need on the left, then click its measurable metric on the right.`,pairs:[{left:`Suspension easy to install`,right:`Time to assemble < 75s`},{left:`Fast acceleration`,right:`0-60 mph in < 5s`},{left:`Lightweight`,right:`Total mass < 2 kg`},{left:`Durable`,right:`Lifecycle > 10,000 uses`},{left:`Affordable`,right:`Unit BOM cost < $50`}]},
    session5:{title:`⚡ Match Creative Methods`,desc:`Select a technique on the left, then click its key feature on the right.`,pairs:[{left:`Brainstorming`,right:`Defer all judgment`},{left:`6-3-5 Brainwriting`,right:`6 people, 3 ideas, 5 min`},{left:`C-Sketch`,right:`Progressive collaborative drawing`},{left:`Affinity Diagram (KJ)`,right:`Grouping sticky notes logically`},{left:`Concept Map`,right:`Visualizing explicit relationships`}]},
    session6:{title:`🔍 Function Audit`,desc:`Flag the incorrect statements regarding functional modeling. Leave correct statements unflagged.`,configs:[{setting:`Black Box flows only include Money`,status:`Form`,isVuln:true},{setting:`Subtract and Operate is bottom-up`,status:`Correct`,isVuln:false},{setting:`TRIZ accepts design trade-offs`,status:`Compromise`,isVuln:true},{setting:`FAST diagram is read Left-to-Right for 'How?'`,status:`Correct`,isVuln:false},{setting:`Inputs include Energy, Material, Info`,status:`Correct`,isVuln:false},{setting:`TRIZ has exactly 10 parameters`,status:`Restricting`,isVuln:true}]},
    session7:{title:`🏗️ Concept Selection Order`,desc:`Arrange the tools from coarsest (least precise) at the top, to most precise mathematically at the bottom.`,layers:[{name:`Intuition / Multi-voting`,order:1},{name:`Pugh Concept Screening (+, -, 0)`,order:2},{name:`Concept Scoring / Weighted Matrix (1-5)`,order:3},{name:`Analytic Hierarchy Process (AHP)`,order:4}]},
    session8:{title:`🎯 Architecture Sorter`,desc:`Drag each trait to Modular or Integral`,categories: [`Modular`, `Integral`],items:[{text:`1-to-1 mapping of function to chunks`,cat:`Modular`},{text:`Functions shared by highly coupled parts`,cat:`Integral`},{text:`Easy to upgrade and repair`,cat:`Modular`},{text:`Changes propagate easily causing systemic failure`,cat:`Integral`},{text:`Optimized for high performance / low weight`,cat:`Integral`},{text:`Standardized interfaces (e.g. USB)`,cat:`Modular`}]}
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
