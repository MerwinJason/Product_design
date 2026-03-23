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
                title: "Opportunity Identification & Product Planning",
                body: `<p>Opportunities come from markets, technology, regulations, or partners. The planning process:</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Identify Opportunities</li>
                    <li>Evaluate and prioritize projects (Competitive strategy, Market Segmentation, Technological Trajectories, Platforms)</li>
                    <li>Allocate resources and plan timing (Resource Allocation, Project Timing)</li>
                    <li>Complete pre-project planning (Mission Statement)</li>
                </ol>`
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
                <div style="background:rgba(255,100,150,0.1); padding:12px; border-radius:8px; margin-top:12px;">
                    <strong>Ethnographic Studies:</strong> Observing real users in their actual environment. High insight, but costly and time-consuming. Examples: Video, Photography, Interviews.
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
                <p style="margin-top:12px; font-size:13px; color:var(--text-secondary);"><strong>Note:</strong> Over time, Exciters become Expecters (e.g., WiFi in hotels).</p>`
            },
            {
                title: "Kano Satisfaction Coefficients",
                body: `<div style="background:rgba(255,100,150,0.1); border-left:4px solid var(--accent); padding:12px;">
                    <p><strong>Extent of Satisfaction =</strong> (A + O) / (A + O + M + I)</p>
                    <p><strong>Extent of Dissatisfaction =</strong> (O + M) / (A + O + M + I) * (-1)</p>
                    <p style="font-size:12px;">A = Attractive, O = One-dimensional (Performance), M = Must-be, I = Indifferent.</p>
                </div>`
            },
            {
                title: "Key Rules for Survey Construction",
                body: `<ul>
                    <li>Do not lead the customer toward an answer.</li>
                    <li>Include "Other" options in multiple choice.</li>
                    <li>Always include open-ended questions.</li>
                    <li>Keep to 15-30 minutes max.</li>
                    <li>Needs should be expressed positively, stating WHAT the product does, avoiding 'must' and 'should'.</li>
                </ul>`
            },
            {
                title: "Benchmarking and Reverse Engineering",
                body: `<p><strong>Benchmarking:</strong> Comparing product/process metrics against industry leaders to identify best practices. Types include Competitive, Internal, Functional, Generic.</p>
                <p><strong>Reverse Engineering:</strong> Deconstructing competitor products to extract design, architecture, and cost data. Evaluates technical capabilities directly.</p>`
            }
        ],
        flashcards: [
            { front: "What are 'Expecter' needs in Kano?", back: "Must-have basic requirements. Do not increase satisfaction if present, but cause extreme anger if absent." },
            { front: "What is an Ethnographic Study?", back: "Observing customers interacting with a product in their natural environment." },
            { front: "Give an example of a One-Dimensional (Spoken) need.", back: "Battery life in a phone. The longer it is, the more satisfied the user is linearly." },
            { front: "What is the risk of asking leading questions in surveys?", back: "It biases the raw data, masking True customer needs." },
            { front: "What is a 'Reverse' requirement in Kano?", back: "A feature that causes dissatisfaction when present (e.g., overly complex software menus)." },
            { front: "Define Benchmarking.", back: "Comparing organizational processes and performance metrics to industry bests." },
            { front: "What is Reverse Engineering?", back: "Deconstructing a competitor's product to extract design, architecture, and cost data." },
            { front: "Why avoid the words 'must' and 'should' in need statements?", back: "Needs should state WHAT the product has to do, not set arbitrary rigid constraints." },
            { front: "What happens to 'Exciter' features over time?", back: "They migrate down to become 'Must-haves' as the market adapts (e.g., power windows in cars)." },
            { front: "What does M stand for in the Kano formula?", back: "Must-be (Expecters)." },
            { front: "What does A stand for in the Kano formula?", back: "Attractive (Exciters)." },
            { front: "What is an Indifferent feature?", back: "A feature the customer doesn't care about, and is unwilling to pay extra for." }
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
                body: `<p>QFD is a visual matrix method developed in Japan (1970s) to translate needs into specifications. The <strong>House of Quality (HoQ)</strong> is the core tool.</p>
                <ul style="margin-bottom:12px;">
                    <li><strong>Left Wall:</strong> WHATs (Customer needs and importance weights)</li>
                    <li><strong>Ceiling/Top:</strong> HOWs (Engineering characteristics/metrics)</li>
                    <li><strong>Main Matrix:</strong> Relationships between WHATs and HOWs (Strong=9, Medium=3, Weak=1)</li>
                    <li><strong>Roof:</strong> Correlation between different engineering metrics (exposing Trade-offs)</li>
                    <li><strong>Basement/Bottom:</strong> Target values, competitive analysis, and calculated priority scores.</li>
                </ul>`
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
                body: `<ul>
                    <li><strong>Brainstorming:</strong> Unstructured verbal idea dumping. Key rules: No judgment, encourage wild ideas, go for quantity. However, it can be dominated by loud voices.</li>
                    <li><strong>6-3-5 Brainwriting:</strong> Silent method. <strong>6</strong> people write <strong>3</strong> ideas in <strong>5</strong> minutes, pass paper, repeat. Reduces introversion barriers and prevents loud voices from dominating.</li>
                </ul>`
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
                </ul>`
            },
            {
                title: "Morphological Analysis",
                body: `<p>A highly structured way to generate thousands of concepts. Break down the prime function into sub-functions (Y-axis), and list physical mechanisms to achieve each function (X-axis). A concept is drawn by picking one mechanism from each row.</p>
                <p><em>Example:</em> "Convert Energy" can be Electric Motor, Gas Engine, or Human Pedal.</p>`
            },
            {
                title: "TRIZ (Theory of Inventive Problem Solving)",
                body: `<p>Developed by Genrich Altshuller after analyzing thousands of patents. Premise: Someone has already solved your problem. TRIZ focuses on breaking <strong>Contradictions</strong> instead of accepting compromises.</p>
                <ul style="color:var(--text-secondary); font-size:14px;">
                    <li><strong>39 Engineering Parameters:</strong> E.g., Weight, Volume, Speed.</li>
                    <li><strong>40 Inventive Principles:</strong> Universal problem solvers.</li>
                    <li><em>Example Contradiction:</em> I want a coffee cup to be insulated (Parameter: Temperature), but I don't want it to be heavy (Parameter: Weight).</li>
                    <li><em>TRIZ Suggestion:</em> Principle 1: Segmentation, or Principle 31: Porous Materials (Cardboard sleeve).</li>
                </ul>`
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
                body: `<p>After Pugh screening, the surviving concepts move to Concept Scoring. Criteria are assigned <strong>Weights (percentages)</strong> based on importance. Concepts are rated on a 1-5 scalar grid, multiplied by the weight, and summed for a high-fidelity final score.</p>`
            },
            {
                title: "Analytic Hierarchy Process (AHP)",
                body: `<p>A mathematically rigorous method to establish the exact weights of selection criteria.</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Create a pairwise comparison matrix of criteria (1-9 scale, where 1=Equal, 9=Extreme importance).</li>
                    <li>Normalize the matrix (divide by column sums).</li>
                    <li>Calculate priority vector averages (the weights).</li>
                    <li>Calculate Consistency Ratio (CR). If CR &gt; 0.10, human judgments are too contradictory and must be re-evaluated.</li>
                </ol>`
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
                </ul>`
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
                <p><strong>Delayed Differentiation (Postponement):</strong> Designing a supply chain and architecture strictly so distinguishing market features can be added at the very end of the line (e.g., painting a car at the final step, loading foreign language software right before shipping).</p>`
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
