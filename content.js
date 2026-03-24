const sessionContent = {
    session1: {
        hero: {
            title: "Introduction & Product Planning",
            desc: "Learn about the product design process, measuring success, and the product vs process cycle."
        },
        concepts: [
            {
                title: "What is Design?",
                body: `<p>Design is the iterative decision-making process that transforms requirements into a product, system, or process that performs a desired function within given constraints such as cost, materials, safety, and sustainability.</p>
                <div class="info-table-wrap" style="margin-top:16px;">
                    <table class="info-table">
                        <tr><th>Type of Design</th><th>Description</th></tr>
                        <tr><td>Original Design (Innovative)</td><td>Innovative design completely new to the market</td></tr>
                        <tr><td>Adaptive Design</td><td>Adapting an existing solution to a new problem</td></tr>
                        <tr><td>Variant Design (Redesign)</td><td>Designing different sizes or versions of a product</td></tr>
                        <tr><td>Selection Design</td><td>Selecting standard components to meet constraints</td></tr>
                        <tr><td>Industrial Design</td><td>Focuses on aesthetics and ergonomics</td></tr>
                    </table>
                </div>`
            },
            {
                title: "Characteristics of Successful Product Development",
                body: `<p>To build a winning product, specific factors must be optimized:</p>
                <ul style="margin-bottom:12px;">
                    <li><strong>Product Quality:</strong> Features, performance, user satisfaction.</li>
                    <li><strong>Product Cost:</strong> Manufacturing and lifecycle costs.</li>
                    <li><strong>Development Time:</strong> Speed to market and cycle times.</li>
                    <li><strong>Development Cost:</strong> Capital spent on R&D.</li>
                    <li><strong>Development Capability:</strong> The team's ongoing ability to innovate.</li>
                </ul>
                <div style="background:rgba(255,100,150,0.1); border-left:4px solid var(--accent); padding:12px; margin-bottom:12px;">
                    <strong>Profit Equation:</strong> Profit = Product Price (P) - Product Cost (C)
                </div>`
            },
            {
                title: "Considerations of a Good Design",
                body: `<p>A good design must evaluate the following:</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li><strong>Achievement of performance requirements:</strong> Primary/Secondary performance, Environmental requirements (Green design), Aesthetic requirements.</li>
                    <li><strong>Life-cycle issues:</strong> Manufacturing, Distribution, Use, Retirement.</li>
                    <li><strong>Regulatory and Social Issues:</strong> Compliance with safety and emission standards.</li>
                </ol>`
            },
            {
                title: "Types of Product Development Processes",
                body: `<p>Depending on the context, different frameworks govern how a product is made:</p>
                <ul>
                    <li><strong>Stage-Gate Process:</strong> Linear sequence (Planning → Concept → System Level → Detail Design → Testing → Production). Each stage is separated by a 'gate' review.</li>
                    <li><strong>Spiral Process:</strong> Iterative loops. Build version 1, test, review, then start the next gate for version 2. Used heavily for software.</li>
                    <li><strong>Hybrid Process:</strong> Combines stage-gate rigor with agile/spiral iterations for high-tech items.</li>
                </ul>`
            },
            {
                title: "The Technology S-Curve",
                body: `<p>Technologies evolve through distinct phases characterized by an S-shaped curve plotting performance against time/effort:</p>
                <div style="background:rgba(255,100,150,0.1); border:1px solid rgba(255,100,150,0.3); padding:16px; text-align:center; border-radius:8px; margin:12px 0;">
                    <div style="font-weight:bold; color:var(--accent);">Phase 1: Emergence</div>
                    <div style="color:var(--text-secondary); font-size:12px; margin-bottom:8px;">Slow initial progress as the tech is explored.</div>
                    <div style="font-weight:bold; color:var(--accent);">Phase 2: Rapid Growth</div>
                    <div style="color:var(--text-secondary); font-size:12px; margin-bottom:8px;">Breakthroughs lead to exponential performance gains.</div>
                    <div style="font-weight:bold; color:var(--accent);">Phase 3: Maturity</div>
                    <div style="color:var(--text-secondary); font-size:12px;">Physical limits are reached; diminishing returns. Companies must jump to a new technology curve.</div>
                </div>`
            },
            {
                title: "Product and Process Cycle",
                body: `<p>Products go through four main stages in the market:</p>
                <ol>
                    <li>Introduction</li>
                    <li>Growth</li>
                    <li>Maturity</li>
                    <li>Decline</li>
                </ol>
                <p>The <strong>Challenges of Product Development</strong> include managing Trade-offs, Market Dynamics, Details, Time pressure, Economics, and Global competition.</p>`
            }
        ],
        caseStudies: [
            {
                name: "Late-to-Market Failure",
                detail: "A tech company released a superior product but missed the market window by 6 months.",
                impact: "Lost 40% of potential market share due to first-mover advantage of competitors.",
                lesson: "Development time is as critical as product quality."
            }
        ],
        flashcards: [
            { front: "What is Variant Design?", back: "Redesigning or scaling an existing product line (e.g., creating a 15-inch laptop from a 13-inch model)." },
            { front: "Define the 'Spiral' Process", back: "An iterative product development method focusing on rapid prototyping loops." },
            { front: "What are the axis on a Tech S-Curve?", back: "Y-axis: Product Performance. X-axis: Time or Engineering Effort." },
            { front: "What is Stage-Gate Phase 0?", back: "Planning. Identifying the opportunity before formal development begins." },
            { front: "What defines 'Development Capability'?", back: "The organization's accumulated knowledge and ability to execute future projects efficiently." },
            { front: "What is Adaptive Design?", back: "Adapting an established design principle to a new task or context." },
            { front: "What is the Profit equation?", back: "Profit = Product Price minus Product Cost." },
            { front: "Name the 4 stages of a Product Lifecycle", back: "Introduction, Growth, Maturity, Decline." },
            { front: "Why is 'Time to Market' critical?", back: "Late entry can severely limit market share and reduce the total profit window." },
            { front: "What is Industrial Design?", back: "Focusing heavily on the aesthetics, user interface, and physical ergonomics of the product." },
            { front: "What is Original Design?", back: "Innovative design completely new to the market." },
            { front: "What is a Hybrid Process?", back: "Combines stage-gate rigor with agile/spiral iterations for high-tech items." }
        ]
    },

    session2: {
        hero: {
            title: "Product Development Process & Planning",
            desc: "Understand organizational structures, concurrent engineering, and crafting a solid mission statement."
        },
        concepts: [
            {
                title: "Organizational Structures",
                body: `<p>How a company organizes its engineers dictates product success:</p>
                <div class="info-table-wrap" style="margin-top:16px;">
                    <table class="info-table">
                        <tr><th>Type</th><th>Key Characteristic</th><th>Best For</th></tr>
                        <tr><td>Functional</td><td>Grouped by specialty (e.g., all mechanical engineers together)</td><td>Deep expertise, slow cross-team talk</td></tr>
                        <tr><td>Project</td><td>Grouped by product (e.g., Team Alpha builds Product X)</td><td>Fast delivery, resource duplication</td></tr>
                        <tr><td>Matrix</td><td>Hybrid (Dual reporting to functional manager and project manager)</td><td>Balanced expertise and speed</td></tr>
                        <tr><td>Flat</td><td>Few management layers, wide span of control</td><td>Startups, high employee autonomy</td></tr>
                        <tr><td>Networked</td><td>Core org connects with external partners/suppliers</td><td>Heavy outsourcing, flexbility</td></tr>
                    </table>
                </div>`
            },
            {
                title: "Types of Matrix Organizations",
                body: `<ul>
                    <li><strong>Weak Matrix:</strong> Functional Manager has main power. PM is a coordinator.</li>
                    <li><strong>Balanced Matrix:</strong> Power is shared equally.</li>
                    <li><strong>Strong Matrix (Heavyweight):</strong> Project Manager has main power. Structure is closest to Projectized.</li>
                </ul>`
            },
            {
                title: "Concurrent Engineering",
                body: `<p>Instead of the "over the wall" conventional style (Design → Manufacturing → Test), <strong>Concurrent Engineering</strong> involves cross-functional teams working in parallel.</p>
                <div style="display:flex; gap:12px; margin-top:12px;">
                    <div style="flex:1; background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); padding:12px; border-radius:8px;">
                        <strong style="color:var(--success);">Advantages:</strong>
                        <ul style="font-size:13px; margin-top:8px;">
                            <li>Reduces cycle time</li>
                            <li>Reduces total cost</li>
                            <li>Catches mistakes early</li>
                        </ul>
                    </div>
                </div>`
            },
            {
                title: "Opportunity Identification & Development Horizons",
                body: `<p>Opportunities come from markets, technology, regulations, or partners. They evaluate opportunities using the Horizon model:</p>
                <ol style="margin-left:20px; color:var(--text-secondary); margin-bottom:12px;">
                    <li><strong>Horizon 1 (Core):</strong> Existing products for existing markets. (e.g., Cost reduction, adding a new color option). 70-80% of teams work here.</li>
                    <li><strong>Horizon 2 (Adjacent):</strong> Next-generation products or entering an adjacent market.</li>
                    <li><strong>Horizon 3 (Transformational):</strong> Completely new category or completely new market (e.g., Space research like Chandrayaan, or inventing the first Swiggy/Zepto app).</li>
                </ol>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: The 3 Horizons of Innovation
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        Think of a company like <em>Apple</em>:<br>
                        <strong>Horizon 1:</strong> Releasing the iPhone 15 when they already have the iPhone 14. Just making it a bit faster. Extremely safe.<br>
                        <strong>Horizon 2:</strong> Releasing the iPad for the first time. It uses similar tech to the iPhone, but targets a new 'tablet' market.<br>
                        <strong>Horizon 3:</strong> Developing the Apple Vision Pro. A completely radically new piece of hardware for a market that barely exists yet. Extremely risky, but "push" driven!
                    </p>
                </div>
                <p>The Planning Process involves filtering these opportunities like a <strong>tournament</strong> (64 ideas → 32 → 16 → 1 winner), evaluating based on tech leadership, customer focus, and cost.</p>`
            },
            {
                title: "Four Types of Product Development Projects",
                body: `<ul>
                    <li><strong>New product platforms:</strong> Major development effort to create a new family of products.</li>
                    <li><strong>Derivatives of existing platforms:</strong> Extend an existing platform to address familiar markets.</li>
                    <li><strong>Incremental improvements:</strong> Modifying some features to keep the product line current.</li>
                    <li><strong>Fundamentally new products:</strong> Radically different products for unfamiliar markets.</li>
                </ul>`
            },
            {
                title: "Mission Statement (SMART)",
                body: `<p>Before development begins, a team needs a <strong>Mission Statement</strong> that is Specific, Measurable, Achievable, Realistic, and Time-bound. It includes:</p>
                <ul>
                    <li>Product Description</li>
                    <li>Benefit Proposition</li>
                    <li>Key Business Goals</li>
                    <li>Primary / Secondary Markets</li>
                    <li>Assumptions & Constraints</li>
                </ul>`
            }
        ],
        flashcards: [
            { front: "What is a Functional Organization?", back: "Employees are grouped by their specialized functions (departments)." },
            { front: "What is a Heavyweight Project Matrix?", back: "A matrix organization where the Project Manager holds more power than the Functional Manager." },
            { front: "Define Concurrent Engineering", back: "Process where design, manufacturing, and other functions work in parallel rather than sequentially." },
            { front: "What does SMART stand for?", back: "Specific, Measurable, Achievable, Realistic, Time-bound." },
            { front: "Name 3 components of a Mission Statement", back: "Product Description, Benefit Proposition, Business Goals." },
            { front: "What is a Flat Organization?", back: "Few/no middle managers, wide span of control, highly autonomous employees." },
            { front: "What is a Derivative Product?", back: "An extension of an existing product platform tailored to familiar markets." },
            { front: "How is 'Market Size' calculated?", back: "Units per year multiply by average price." },
            { front: "What is Technology Push?", back: "Designing a product based on a new technology breakthrough rather than an explicit market need." },
            { front: "What is Market Pull?", back: "Designing a product explicitly to solve a recognized customer need." },
            { front: "What is a Networked Organization?", back: "Core organization connects with external partners and suppliers for heavy outsourcing." },
            { front: "What are the four types of development projects?", back: "New platforms, Derivatives, Incremental improvements, Fundamentally new products." }
        ]
    },

    session3: {
        hero: {
            title: "Identifying Customer Needs",
            desc: "Master ethnographic studies, the Kano Model, benchmarking, and reverse engineering."
        },
        concepts: [
            {
                title: "Customer Need Identification Steps",
                body: `<ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Gather raw data from customers (Ethnography, Surveys, Focus Groups).</li>
                    <li>Interpret raw data in terms of customer needs (attribute phrasing, ignore the "how").</li>
                    <li>Organize needs into a hierarchy (primary, secondary).</li>
                    <li>Establish relative importance.</li>
                    <li>Reflect on the results.</li>
                </ol>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: The "Jugaad" Factor in Ethnography
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        <strong>Think of it like this:</strong> Ethnographic studies are just watching real users in their natural habitat. But it's not just about how they use the product—it's about how they <em>misuse</em> it. In India, we call this <strong>Jugaad</strong>. For example, using a washing machine to churn bulk lassi, or using a tennis ball for a dog toy instead of tennis. Observing this real-world behavior uncovers deep, unexpressed needs that a standard questionnaire would never catch. Types of Ethnography include <strong>Field</strong> (on-site observation), <strong>Digital</strong> (tablet/community tracking), and <strong>Photo</strong> (capturing image logs of daily life).
                    </p>
                </div>`
            },
            {
                title: "The Kano Model",
                body: `<p>A framework by Noriaki Kano to classify customer requirements based on satisfaction:</p>
                <div class="info-table-wrap" style="margin-top:12px;">
                    <table class="info-table">
                        <tr><th>Type</th><th>Description</th></tr>
                        <tr><td>Expecters (Must-be)</td><td>Basic features; their absence causes massive dissatisfaction, but presence doesn't increase satisfaction.</td></tr>
                        <tr><td>Spoken (Performance)</td><td>More is better (linear relation). e.g., longer battery life.</td></tr>
                        <tr><td>Exciters (Attractive)</td><td>Unexpected features that delight the customer.</td></tr>
                        <tr><td>Indifferent</td><td>Customer does not care if present or absent.</td></tr>
                        <tr><td>Reverse</td><td>Causes dissatisfaction when present.</td></tr>
                    </table>
                </div>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: Kano Model in the Real World
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        To easily understand the Kano Model, look at <strong>Netflix</strong> and <strong>Swiggy</strong>.<br><br>
                        <strong>Netflix:</strong><br>
                        • <em>Must-Be:</em> Stable streaming without buffering (If it buffers, you're furious. If it plays normally, you just consider it normal).<br>
                        • <em>Performance (One-Dimensional):</em> Smart recommendations (The better the recommendations, the happier you are).<br>
                        • <em>Delighter (Exciter):</em> Interactive episodes like "Bandersnatch" (You didn't ask for it, but when you got it, it blew your mind).<br><br>
                        <strong>Swiggy / Zomato:</strong><br>
                        • <em>Must-Be:</em> On-time delivery.<br>
                        • <em>Performance:</em> Advanced regional food filters.<br>
                        • <em>Delighter:</em> Getting a surprise Diwali sweet box with your order.<br><br>
                        <em>Remember: Over time, today's Delighters ALWAYS become tomorrow's Must-Bes!</em>
                    </p>
                </div>`
            },
            {
                title: "Kano Satisfaction Formula & Quantification",
                body: `<p>How do we actually put numbers to these feelings? We ask <strong>Functional</strong> and <strong>Dysfunctional</strong> questions in surveys.</p>
                <ul>
                    <li><strong>Functional Question:</strong> "If the skis have good grip on hard snow, how do you feel?"</li>
                    <li><strong>Dysfunctional Question:</strong> "If the skis DO NOT have good grip, how do you feel?"</li>
                </ul>
                <p>Based on combinations of answers (Like, Must-be, Neutral, Live with, Dislike), we plot requirements on a grid to find out what category they fall into. Then we calculate indexes:</p>
                <div style="background:rgba(255,100,150,0.1); border-left:4px solid var(--accent); padding:12px; margin-top:12px;">
                    <p><strong>Customer Satisfaction Index (CSI) =</strong> (A + O) / (A + O + M + I)</p>
                    <p><strong>Customer Dissatisfaction Index (CDI) =</strong> (O + M) / (A + O + M + I) * (-1)</p>
                    <p style="font-size:12px;">A = Attractive, O = One-dimensional (Performance), M = Must-be, I = Indifferent.</p>
                </div>`
            },
            {
                title: "Key Rules for Survey Construction & AI Integration",
                body: `<ul>
                    <li><strong>Survey Length:</strong> Keep to 6-10 minutes max, or attention spans drop.</li>
                    <li><strong>Needs Statements:</strong> Must be expressed positively, stating WHAT the product does (attributes), avoiding the words 'must', 'should', or HOW it does it. Present tense only.</li>
                    <li><strong>Close-ended vs Open-ended:</strong> Most questions should be close-ended to allow easy data aggregation (e.g., in a Kano survey).</li>
                    <li><strong>Using AI Tools:</strong> Tools like Miro AI or custom prompt engineering (using the <em>5W1H Framework: Who, What, When, Where, Why, How</em>) can help aggregate raw data into needs. <em>Warning:</em> AI models often hallucinate technical numerical problems and lack real-time proprietary company data (NDAs), so they cannot completely replace human judgement.</li>
                </ul>`
            },
            {
                title: "Benchmarking and Reverse Engineering",
                body: `<p><strong>Benchmarking:</strong> Comparing product/process metrics against industry leaders to identify best practices. Types include Competitive, Internal, Functional, Generic.</p>
                <p><strong>Reverse Engineering:</strong> Deconstructing competitor products to extract design, architecture, and cost data. Evaluates technical capabilities directly.</p>`
            }
        ],
        flashcards: [
            { front: "What are 'Expecter' (Must-Be) needs in Kano?", back: "Basic requirements like stable streaming on Netflix. Their absence causes extreme anger, but their presence doesn't increase satisfaction." },
            { front: "What is an Ethnographic Study?", back: "Observing customers interacting with a product in their natural environment to spot unexpressed needs or 'Jugaad' misuses." },
            { front: "Give an example of a One-Dimensional (Performance) need.", back: "Battery life in a phone. The longer it is, the more proportionally satisfied the user is." },
            { front: "How do you calculate the Kano Customer Dissatisfaction Index?", back: "CDI = -1 * (O + M) / (A + O + M + I)" },
            { front: "What is the 5W1H framework used for in Product Design AI?", back: "Crafting specific prompts: Who, What, When, Where, Why, and How." },
            { front: "Define Benchmarking.", back: "Comparing organizational processes and performance metrics to industry bests." },
            { front: "What is the danger of using AI for Ethnographic synthesis?", back: "AI can hallucinate complex technical nuances and may violate company Non-Disclosure Agreements (NDAs)." },
            { front: "Why avoid the words 'must' and 'should' in need statements?", back: "Needs should objectively state WHAT the product has to do as an attribute in the present tense, without dictating constraints." },
            { front: "What happens to 'Exciter' features over time?", back: "They migrate down to become 'Must-haves' as the market adapts (e.g., WiFi in a hotel)." },
            { front: "How do Kano surveys quantify feelings?", back: "By asking paired questions: a Functional question (feature is present) and a Dysfunctional question (feature is absent)." },
            { front: "What does A stand for in the Kano formula?", back: "Attractive (Exciters / Delighters)." },
            { front: "What is an Indifferent feature?", back: "A feature the customer doesn't care about, and its presence or absence does not affect satisfaction." }
        ]
    },

    session4: {
        hero: {
            title: "Establishing Target Specifications",
            desc: "Translating customer needs into measurable engineering metrics using QFD."
        },
        concepts: [
            {
                title: "What are Specifications?",
                body: `<p>While customer needs are expressed in qualitative language ("easy to install"), specifications are <strong>precise, measurable details</strong> ("Takes < 75 seconds to assemble"). Specifications are also called product requirements or engineering characteristics.</p>
                <p>Establishing target specs takes 4 steps:</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Prepare the list of metrics (Must be measurable, dependent).</li>
                    <li>Collect competitive benchmarking info.</li>
                    <li>Set ideal and marginally acceptable target values.</li>
                    <li>Reflect on results.</li>
                </ol>`
            },
            {
                title: "Target Values",
                body: `<ul style="margin-bottom:12px;">
                    <li><strong>Ideal Value:</strong> The best mathematically possible result the team hopes for.</li>
                    <li><strong>Marginally Acceptable Value:</strong> The minimum value that barely makes the product commercially viable.</li>
                </ul>`
            },
            {
                title: "Quality Function Deployment (QFD) & House of Quality",
                body: `<p>QFD is a visual matrix method developed in Japan (1970s at Toyota) to translate qualitative customer needs into quantitative specifications. The <strong>House of Quality (HoQ)</strong> is the core tool.</p>
                <ul style="margin-bottom:12px;">
                    <li><strong>Left Wall (Room 1):</strong> WHATs (Voice of Customer / Needs) and their importance weights (usually 1-5 scale).</li>
                    <li><strong>Right Wall (Room 2):</strong> Competitive Assessment. How you vs. Competitors score on the WHATs.</li>
                    <li><strong>Ceiling/Top:</strong> HOWs (Engineering characteristics/metrics).</li>
                    <li><strong>Main Matrix (Center):</strong> Relationships between WHATs and HOWs (Strong=9, Medium=3, Weak=1).</li>
                    <li><strong>Roof:</strong> Co-relationships between different HOWs (exposing Trade-offs and Reinforcements).</li>
                    <li><strong>Basement/Bottom:</strong> Target values, competitive technical analysis, and calculated priority weights (Sum of: What Importance × Relationship Score).</li>
                </ul>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: House of Quality - Pressure Cooker Example
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        To understand how the 'Roof' works, think of designing a Pressure Cooker:<br><br>
                        <strong>The Trade-Off (Negative Co-relationship):</strong> You want it to <em>Cook Fast</em> (The WHAT). So you increase the <em>Internal Cooking Pressure</em> (The HOW). But wait! Increasing the pressure puts insane stress on the <em>Rubber Sealing Ring</em> (Another HOW), increasing the risk of it bursting. This is a <strong>Trade-off</strong>: improving one metric degrades another. The HOQ roof exposes this conflict so you don't build a fast, but explosive, cooker.<br><br>
                        <strong>The Reinforcement (Positive Co-relationship):</strong> If you change the <em>Material</em> to Aluminum instead of thick Steel, you increase the <em>Thermal Conductivity</em>. These two HOWs support each other positively. You get a lighter cooker that <em>also</em> cooks faster!
                    </p>
                </div>`
            },
            {
                title: "Finalizing Specifications",
                body: `<p>Final specs are set after conceptual design by:</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li><strong>Developing technical models:</strong> Analytical math/software models predicting performance without physical testing.</li>
                    <li><strong>Developing a cost model:</strong> Drafting a Bill of Materials (BOM) listing every part and its cost.</li>
                    <li><strong>Refining specs:</strong> Making hard trade-offs between technical performance and cost.</li>
                    <li><strong>Flow down specs:</strong> Allocating total system budgets down to subsystems.</li>
                </ol>`
            }
        ],
        caseStudies: [
            {
                name: "Toyota's QFD Implementation",
                detail: "Toyota employed QFD in the 1980s to align heavy truck design directly with customer weights.",
                impact: "Reduced new car development cost by 60% and time-to-market by 33%.",
                lesson: "Rigorous mapping of needs to metrics eliminates wasteful engineering features."
            }
        ],
        flashcards: [
            { front: "What is the difference between a Need and a Metric?", back: "A need is qualitative ('fast'). A metric is quantitative ('top speed in km/h')." },
            { front: "What goes in the 'Roof' of the House of Quality?", back: "Correlations between engineering characteristics (identifying technical trade-offs)." },
            { front: "What relationship scores are typically used in QFD matrix?", back: "Strong = 9, Moderate = 3, Weak = 1." },
            { front: "What is an 'Ideal' target value?", back: "The absolute best mathematical result the engineering team hopes to achieve." },
            { front: "What is a 'Marginally Acceptable' target?", back: "The minimum metric value required to make the product commercially viable." },
            { front: "What goes on the 'Left Wall' of the House of Quality?", back: "Customer Needs (The WHATs) and their importance ratings." },
            { front: "Why develop a Technical Model?", back: "To predict engineering metrics rapidly via software before building costly physical prototypes." },
            { front: "What is a Bill of Materials (BOM)?", back: "An exhaustive list of all physical parts and their costs needed to assemble the product." },
            { front: "Define a 'Trade-Off' in Product Design.", back: "Improving one specification inherently degrades another (e.g., increasing engine power usually reduces fuel efficiency)." },
            { front: "What goes in the Basement of the HoQ?", back: "Target values, competitive analysis, and calculated priority values." },
            { front: "What is step 1 of establishing specs?", back: "Prepare the list of measurable metrics derived from the needs." },
            { front: "When are target specs established?", back: "Immediately after identifying customer needs, before concept generation." }
        ]
    },

    session5: {
        hero: {
            title: "Concept Generation",
            desc: "Tools for creative thinking, brainstorming, brainwriting, and concept mapping."
        },
        concepts: [
            {
                title: "Mental Blocks in Design",
                body: `<p>Creativity is often hindered by cognitive blocks. Identifying them is the first step to overcoming them:</p>
                <div class="info-table-wrap" style="margin-top:12px;">
                    <table class="info-table">
                        <tr><th>Type of Block</th><th>Description</th></tr>
                        <tr><td>Perceptual</td><td>Struggling to isolate the problem or seeing only expected details. Inability to see new angles.</td></tr>
                        <tr><td>Emotional</td><td>Fear of making mistakes, fear of judgment, inability to tolerate ambiguity.</td></tr>
                        <tr><td>Cultural</td><td>Believing reason/logic/numbers are always better than intuition and play.</td></tr>
                        <tr><td>Environmental</td><td>Distracting workplace, lack of support from management, lack of resources.</td></tr>
                    </table>
                </div>`
            },
            {
                title: "Brainstorming vs Brainwriting",
                body: `<ul style="margin-bottom:12px;">
                    <li><strong>Brainstorming:</strong> Unstructured verbal idea dumping. Key rules: No judgment, encourage wild ideas, go for quantity. However, it can be dominated by loud voices.</li>
                    <li><strong>Checklist Method (SCAMPER):</strong> A structured brainstorming approach: <strong>S</strong>ubstitute, <strong>C</strong>ombine, <strong>A</strong>dapt, <strong>M</strong>odify/Magnify/Minify, <strong>P</strong>ut to other use, <strong>E</strong>liminate, <strong>R</strong>earrange/Reverse.</li>
                    <li><strong>6-3-5 Brainwriting:</strong> Silent method. <strong>6</strong> people write <strong>3</strong> ideas in <strong>5</strong> minutes, pass paper, repeat. Reduces introversion barriers and prevents loud voices from dominating.</li>
                </ul>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: SCAMPER & 6-3-5 in Action
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        <strong>SCAMPER Combine:</strong> Look at your smartphone. It <em>combined</em> a camera, GPS, calculator, clock, radio, and Yellow Pages into one device!<br><br>
                        <strong>Why 6-3-5 is brilliant:</strong> In a regular group, the smartest or loudest person (Intellectual Block) dominates, and others fear judgment (Emotional Block). Because 6-3-5 is non-verbal, you just pass papers. Introverts can safely contribute, and you generate exactly 108 ideas (6x3x6 rounds) in 30 minutes!
                    </p>
                </div>`
            },
            {
                title: "Visual Concept Generation",
                body: `<ul>
                    <li><strong>C-Sketch:</strong> Collaborative sketching. Draw an idea, pass it to neighbor to add details. Non-verbal.</li>
                    <li><strong>Affinity Diagram (KJ Method):</strong> Devised by Jiro Kawakita. Write ideas on sticky notes, continuously group them by natural relationships on a wall to establish categories.</li>
                    <li><strong>Concept Maps:</strong> Visual nodes connected by arrows detailing relationships and logic. Great for finding implicit ties.</li>
                </ul>`
            }
        ],
        flashcards: [
            { front: "What is a Perceptual mental block?", back: "An inability to see a problem from multiple angles or stereotyping solutions." },
            { front: "Explain the 6-3-5 method.", back: "6 participants formulate 3 ideas each in 5 minutes, then pass sheets to iterate." },
            { front: "What is C-Sketching?", back: "Collaborative sketching where members sequentially add to passing drawings." },
            { front: "What is the primary rule of brainstorming?", back: "Suspend judgment. No criticism of ideas during the generation phase." },
            { front: "What is an Affinity Diagram?", back: "Organizing large amounts of disorganized data/ideas into logical groups on a wall." },
            { front: "What is an Emotional Block?", back: "Fear of failure, fear of judgment, or inability to tolerate ambiguity." },
            { front: "What is a Concept Map?", back: "A visual diagram showing relationships between concepts via nodes and directed arrows." },
            { front: "What is the benefit of Brainwriting over Brainstorming?", back: "It prevents loud voices from dominating and encourages introverts to participate." },
            { front: "Who developed the Affinity Diagram?", back: "Jiro Kawakita (often called the KJ Method)." },
            { front: "What is an Environmental Block?", back: "A distracting physical workspace or a company culture that punishes mistakes." },
            { front: "Why 'incubate' ideas?", back: "Taking a break allows the subconscious mind to process and connect disparate thoughts." },
            { front: "What is a Cultural Block?", back: "The belief that logic is always better than intuition, or that 'playfulness' is for children." }
        ]
    },

    session6: {
        hero: {
            title: "Establishing Product Function",
            desc: "Structured modeling leveraging Black Box, FAST, Morphological Matrix, and TRIZ."
        },
        concepts: [
            {
                title: "Function and System Flows",
                body: `<p>A product must transform inputs to outputs. Functions are represented by an Active Verb + Noun. Systems process three main flows:</p>
                <ul>
                    <li><strong>Material:</strong> Solid, liquid, gas (e.g., green coffee beans).</li>
                    <li><strong>Energy:</strong> Electrical, human force, heat (e.g., electricity).</li>
                    <li><strong>Information:</strong> Signals, visual, control (e.g., start signal, status).</li>
                </ul>
                <p>The <strong>Black Box</strong> model diagrams these 3 flows passing through a single prime function (e.g., "Roast Coffee").</p>`
            },
            {
                title: "Functional Decomposition",
                body: `<ul style="margin-bottom:12px;">
                    <li><strong>FAST Diagram (Top-Down):</strong> Function Analysis System Technique. Read left-to-right asking "HOW?". Read right-to-left asking "WHY?". Establishes critical logical paths.</li>
                    <li><strong>Subtract and Operate (Bottom-Up):</strong> Reverse-engineer an existing physical product. Remove one component, operate the device, note the failure, and deduce the component's function.</li>
                </ul>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: The Iron Box FAST Diagram
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        Imagine you are designing an Iron Box. Your <strong>Higher-Order Function</strong> is "Iron Clothes".<br><br>
                        <strong>HOW</strong> do we iron clothes? (Move Left to Right)<br>
                        By heating the base (<strong>Basic Function</strong>).<br>
                        <strong>HOW</strong> do we heat the base?<br>
                        By converting electricity to heat (<strong>Secondary Required Function</strong>).<br><br>
                        <strong>WHY</strong> do we convert electricity? (Move Right to Left)<br>
                        To heat the base!<br><br>
                        Don't forget the <strong>Unwanted Function</strong>: Heating the base causes the handle to get hot, so we must add an aesthetic/safety function to insulate the grip so you don't burn your hand. This logic chain builds the FAST diagram!
                    </p>
                </div>`
            },
            {
                title: "Morphological Analysis",
                body: `<p>A highly structured way to generate thousands of concepts. Break down the prime function into sub-functions (Y-axis), and list physical mechanisms to achieve each function (X-axis). A concept is drawn by picking one mechanism from each row.</p>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: Mechanical Ventilation Unit Example
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        Suppose you are designing a Mechanical Ventilation Unit. You identify 4 sub-functions: <strong>(1) Send Signal</strong>, <strong>(2) Receive Signal</strong>, <strong>(3) Convert Signal</strong>, and <strong>(4) Open/Close Vent</strong>.<br><br>
                        Now, list all known physical ways to achieve each sub-function:<br>
                        • <strong>Send Signal:</strong> Wiring, radio transmitter, physical cable.<br>
                        • <strong>Convert Signal:</strong> Pneumatic, hydraulic, electromagnetic.<br>
                        • <strong>Open Vent:</strong> Gears, belts, impact plate.<br><br>
                        By picking <em>one option from every row</em> (e.g., Radio Transmitter + Electromagnetic + Gears), you generate a totally new product concept bridging existing technologies!
                    </p>
                </div>`
            },
            {
                title: "TRIZ (Theory of Inventive Problem Solving)",
                body: `<p>Developed by Genrich Altshuller after analyzing 40,000+ patents. Premise: Someone has already solved your problem. TRIZ focuses on breaking <strong>Contradictions</strong> instead of accepting compromises.</p>
                <ul style="color:var(--text-secondary); font-size:14px;">
                    <li><strong>39 Engineering Parameters:</strong> E.g., Weight of moving object, Strength, Speed.</li>
                    <li><strong>40 Inventive Principles:</strong> Universal problem solvers.</li>
                </ul>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: Solving Real-World Contradictions
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        <strong>1. The Bulletproof Vest:</strong><br>
                        <em>Contradiction:</em> It must have high <strong>Strength</strong> (Improving), but low <strong>Weight</strong> (Worsening).<br>
                        <em>TRIZ Matrix Output:</em> Principle #40 (Composite Materials) and Principle #1 (Segmentation). Result: Kevlar vests with segmented ceramic plates!<br><br>
                        <strong>2. The City Bus:</strong><br>
                        <em>Contradiction:</em> It needs more passenger <strong>Capacity</strong> (Improving), but cannot increase its <strong>Width</strong> due to narrow roads (Worsening).<br>
                        <em>TRIZ Matrix Output:</em> Principle #15 (Dynamics/Flexibility) and Principle #1 (Segmentation). Result: The articulated "Bendy" Bus that bends in the middle!
                    </p>
                </div>`
            }
        ],
        flashcards: [
            { front: "What are the 3 flows in a Black Box model?", back: "Material, Energy, and Information." },
            { front: "What is TRIZ?", back: "Theory of Inventive Problem Solving based on universal principles found in patents." },
            { front: "How do you read a FAST diagram?", back: "Read Left to Right asking 'How?'. Read Right to Left asking 'Why?'." },
            { front: "According to TRIZ, what is a Contradiction?", back: "When improving one parameter inherently causes another parameter to worsen." },
            { front: "What is Functional Decomposition?", back: "Breaking a complex product down into independent, simple sub-functions described via verb-noun pairs." },
            { front: "How many Inventive Principles does TRIZ have?", back: "40 inventive principles." },
            { front: "What is 'Subtract and Operate'?", back: "A bottom-up method where you physically remove pieces of a product to deduce what function that piece performed." },
            { front: "What is a Morphological Matrix?", back: "A grid mapping all required sub-functions to various physical mechanisms, generating thousands of concept combinations." },
            { front: "What are the rules of formatting a function string?", back: "It must be an active verb followed by a measurable noun (e.g., 'Generate Heat')." },
            { front: "Who developed TRIZ?", back: "Genrich Altshuller, a Russian engineer and patent investigator." },
            { front: "What is TRIZ Principle 1: Segmentation?", back: "Dividing an object into independent parts, making it easy to disassemble." },
            { front: "What is an 'Aesthetic' secondary function in FAST?", back: "Actions related to styling, appealing to human senses rather than strict mechanical operation." }
        ]
    },

    session7: {
        hero: {
            title: "Concept Selection & Testing",
            desc: "Pugh matrices, Concept Scoring, AHP, and systematic customer testing."
        },
        concepts: [
            {
                title: "Concept Selection Matrix (Pugh Matrix / Screening)",
                body: `<p>A qualitative method to quickly narrow down generated concepts. You pick one concept as a <strong>Datum (Baseline)</strong> and compare the others to it against customer criteria.</p>
                <div class="info-table-wrap" style="color:white; margin-top:8px;">
                    <table class="info-table">
                        <tr><th>Criteria</th><th>Datum</th><th>Concept A</th><th>Concept B</th></tr>
                        <tr><td>Weight</td><td>0</td><td>+ (Better)</td><td>- (Worse)</td></tr>
                        <tr><td>Cost</td><td>0</td><td>-</td><td>+</td></tr>
                        <tr><td>Durability</td><td>0</td><td>+</td><td>0 (Same)</td></tr>
                        <tr><th>Net Score</th><th>0</th><th>+1</th><th>0</th></tr>
                    </table>
                </div>
                <p style="margin-top:8px; font-size:13px; color:var(--text-secondary);">Concepts with high net positive scores move forward. It is a coarse, unweighted method.</p>`
            },
            {
                title: "Concept Scoring (Weighted Decision Matrix)",
                body: `<p>After Pugh screening, the surviving concepts move to Concept Scoring. Criteria are assigned <strong>Weights (percentages)</strong> based on importance. Concepts are rated on a 1-5 scalar grid, multiplied by the weight, and summed for a high-fidelity final score.</p>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: The SUV Decision Matrix
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        Imagine choosing an SUV design. You have three main criteria: <strong>Fuel (25%), Comfort (40%), and Utility (35%)</strong>.<br><br>
                        You can break these down further: "Fuel" becomes <em>Mileage (70% of 25%)</em> and <em>Range (30% of 25%)</em>.<br>
                        If Concept A has a Mileage score of 8/10, its weighted score is <code>8 × (0.25 × 0.70) = 1.4</code>.<br><br>
                        By summing these weighted scores across all criteria, you get a highly precise, math-backed decision rather than just "guessing" which SUV is best based on raw counts of pros and cons.
                    </p>
                </div>`
            },
            {
                title: "Analytic Hierarchy Process (AHP)",
                body: `<p>A mathematically rigorous method to establish the exact weights of selection criteria.</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Create a pairwise comparison matrix of criteria (1-9 scale, where 1=Equal, 9=Extreme importance).</li>
                    <li>Normalize the matrix (divide by column sums).</li>
                    <li>Calculate priority vector averages (the weights).</li>
                    <li>Calculate Consistency Ratio (CR). If CR &gt; 0.10, human judgments are too contradictory and must be re-evaluated.</li>
                </ol>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: The Mobile Phone AHP Example
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        Think of how <em>Amazon</em> compares phones. If you are comparing <strong>Price, Battery, Camera, and Looks</strong>, how do you decide the exact weight percentage of each?<br><br>
                        AHP forces you to compare them <em>in pairs</em>:<br>
                        1. Is <strong>Price</strong> more important than <strong>Battery</strong>? If yes, strongly (Score: 7).<br>
                        2. This means Battery vs Price is automatically its reciprocal (Score: 1/7).<br><br>
                        By building a matrix of all these pairs and doing some linear algebra (normalization), AHP spits out the perfect mathematical weight percentages for you to use in your Concept Scoring!
                    </p>
                </div>`
            },
            {
                title: "Concept Testing",
                body: `<p>Presenting mockups to real customers to estimate market size and collect feedback before mass manufacturing.</p>
                <p>Format: Define purpose → Choose population → Choose format (Face-to-Face vs Web) → Communicate concept (sketches, CAD) → Measure intent to purchase.</p>`
            }
        ],
        flashcards: [
            { front: "What is a Pugh Matrix used for?", back: "Concept generation and screening by comparing alternatives against a base 'Datum'." },
            { front: "What does the 1-9 scale in AHP represent?", back: "1=Equal importance, 9=Extreme importance representing intensity of preference." },
            { front: "What is a safe Consistency Ratio (CR) in AHP?", back: "CR must be less than or equal to 0.10. Above 0.1 means judgments are logically inconsistent." },
            { front: "What is the 'Datum' in Concept Screening?", back: "The benchmark concept (often an existing competitor) everything else is scored against as (+), (-), or (0)." },
            { front: "What is a Concept Prototype?", back: "A non-working physical or visual mock-up designed solely to elicit customer feedback." },
            { front: "Why use AHP over raw voting?", back: "AHP provides rigorous mathematical verification that human preferences are logically consistent across pairs." },
            { front: "How does Concept Scoring differ from Pugh Screening?", back: "Scoring uses weighted criteria and a 1-5 multiplier scale, making it much more mathematically precise." },
            { front: "How do you calculate Market Share from concept testing?", back: "Multiply the 'definitely buy' percentage by a reality factor, combined with distribution reach." },
            { front: "Can Pugh matrices combine concepts?", back: "Yes. Often a negative trait in a winning concept is fixed by borrowing parts of a losing concept." },
            { front: "What is 'Normalizing' in AHP?", back: "Dividing each matrix value by its column sum so the final derived weights add up to 1.0 (100%)." },
            { front: "What are the common scales in a Concept Testing intent survey?", back: "Definite buy, Probable buy, Might buy, Probably not buy, Definitely not buy." },
            { front: "What is Multi-voting?", back: "The simplest selection method where team members simply vote for their favorite concept using dots." }
        ]
    },

    session8: {
        hero: {
            title: "Product Architecture",
            desc: "Arranging functional elements into physical chunks via modular or integral architectures."
        },
        concepts: [
            {
                title: "What is Product Architecture?",
                body: `<p>It is the scheme by which the functional elements of a product are arranged into physical <strong>chunks</strong> and how they interact.</p>
                <ul style="margin-bottom:12px;">
                    <li><strong>Functional Elements:</strong> What it does (e.g., provide power, apply torque).</li>
                    <li><strong>Physical Elements:</strong> Parts, components, subassemblies (e.g., Battery, Motor).</li>
                </ul>`
            },
            {
                title: "Modular vs. Integral Architecture",
                body: `<div class="info-table-wrap" style="margin-top:12px;">
                    <table class="info-table">
                        <tr><th>Aspect</th><th>Modular Architecture</th><th>Integral Architecture</th></tr>
                        <tr><td>Mapping</td><td>One-to-One (1 chunk = 1 function)</td><td>Many-to-Many (1 block does 3 functions)</td></tr>
                        <tr><td>Interfaces</td><td>Standardized, well-defined (USB port)</td><td>Complex, coupled, tightly fitted</td></tr>
                        <tr><td>Pros</td><td>Upgradability, easy maintenance, variety</td><td>Max performance, low weight/volume</td></tr>
                        <tr><td>Example</td><td>Desktop PC, Swiss Army Knife</td><td>Fighter Jet, High-performance motorcycle</td></tr>
                    </table>
                </div>`
            },
            {
                title: "Types of Modularity",
                body: `<ul style="margin-bottom:12px;">
                    <li><strong>Slot-Modular:</strong> Interfaces differ. Chunks cannot be swapped (e.g., Car radio vs Speedometer slots).</li>
                    <li><strong>Bus-Modular:</strong> All chunks connect to a common bus via the same interface type (e.g., PCIe slots on a motherboard).</li>
                    <li><strong>Sectional-Modular:</strong> All interfaces are identical. Chunks connect to each other infinitely (e.g., LEGO bricks, piping systems).</li>
                </ul>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: Visualizing Modularity
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        <strong>Slot:</strong> Think of <em>Bosch power tools</em>. A single battery pack slots perfectly into a drill, a grinder, or a saw. You can't put a saw blade in the battery slot though!<br><br>
                        <strong>Bus:</strong> Think of a <em>Goods Train</em> or a <em>Computer Motherboard</em>. There is a main bus (the track/board) and you can keep adding wagons (RAM/GPUs) to increase overall capacity.<br><br>
                        <strong>Sectional:</strong> Think of a <em>Sectional Sofa</em> or <em>LEGO blocks</em>. There is no main "bus" or "base." You just snap identical interfaces together to build whatever shape you want.
                    </p>
                </div>`
            },
            {
                title: "Architecture Design Process",
                body: `<ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Create a schematic of the product.</li>
                    <li>Group elements into clusters based on geometric integration, function sharing, localization of change, and variety.</li>
                    <li>Create a rough geometric layout.</li>
                    <li>Identify fundamental (planned) and incidental (unplanned vibration/heat) interactions between chunks.</li>
                </ol>`
            },
            {
                title: "Platform Planning & Delayed Differentiation",
                body: `<p><strong>Platform Planning:</strong> A product family shares a common platform (core chunks) while varying specific modular chunks to target different market segments. Saves massive R&D costs.</p>
                <p><strong>Delayed Differentiation (Postponement):</strong> Designing a supply chain and architecture strictly so distinguishing market features can be added at the very end of the line (e.g., painting a car at the final step, loading foreign language software right before shipping).</p>
                <div class="feynman-note" style="background:rgba(168, 85, 247, 0.1); border-left:4px solid var(--accent); padding:16px; border-radius:8px; margin-top:16px; margin-bottom:16px;">
                    <h4 style="color:var(--accent); margin-top:0; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20m-7-7h14"></path></svg>
                        Feynman Note: The Postponement Trick
                    </h4>
                    <p style="font-size:14px; line-height:1.6; margin:0;">
                        Imagine you make sweaters (e.g., <em>United Colors of Benetton</em>). Do you knit 100 red, 100 blue, and 100 green sweaters? What if red doesn't sell? You have wasted inventory.<br><br>
                        Instead, you use <strong>Delayed Differentiation</strong>: You knit 300 <em>white</em> sweaters. You wait to see what customers buy. If everyone wants red, you rapidly dye them red at the very end of the supply chain!<br><br>
                        <em>Asian Paints</em> does the same: They ship white base paint to stores. The store mixes the exact color the customer wants on the spot. This drastically reduces inventory costs while maintaining infinite variety.
                    </p>
                </div>`
            }
        ],
        flashcards: [
            { front: "What is an Integral Architecture?", back: "Functions are highly coupled across multiple physical chunks to optimize performance/weight." },
            { front: "What is a Modular Architecture?", back: "Chunks implement exactly one function, connected via standardized interfaces." },
            { front: "What are the 3 types of modularity?", back: "Slot-Modular, Bus-Modular, Sectional-Modular." },
            { front: "Define Product Architecture.", back: "The arrangement of functional elements into physical building blocks (chunks)." },
            { front: "What is Delayed Differentiation (Postponement)?", back: "Designing the product so distinguishing features can be added at the very end of the supply chain." },
            { front: "Give an example of Sectional-Modular architecture.", back: "LEGO blocks or PVC plumbing pipes. Any piece connects to any other piece." },
            { front: "Why do companies use Product Platforms?", back: "To offer high market variety while keeping manufacturing and development R&D costs low." },
            { front: "What is a drawback of Integral Architecture?", back: "If one component fails, the entire product might need replacing; very hard to upgrade or repair." },
            { front: "What is Bus-Modularity?", back: "Different modules plug into a common spine/bus using a standardized interface (e.g., USB hub, Motherboard)." },
            { front: "What is 'Chunking'?", back: "Grouping related sub-functions together into a single physical block during the design process." },
            { front: "What are 'Incidental Interactions'?", back: "Unplanned physical interactions between chunks, like vibration leakage or heat transfer." },
            { front: "What is an advantage of Modular Architecture?", back: "Decouples teams, allows parallel design, and enables easy upgrades." }
        ]
    }
};

window.sessionContent = sessionContent;
