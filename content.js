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
                        <tr><td>Original Design</td><td>Innovative design completely new to the market</td></tr>
                        <tr><td>Adaptive Design</td><td>Adapting an existing solution to a new problem</td></tr>
                        <tr><td>Variant Design</td><td>Designing different sizes or versions of a product</td></tr>
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
                title: "Types of Product Development Processes",
                body: `<p>Depending on the context, different frameworks govern how a product is made:</p>
                <ul>
                    <li><strong>Stage-Gate Process:</strong> Linear sequence (Planning → Concept → System Level → Detail Design → Testing → Production). Each stage is separated by a 'gate' review.</li>
                    <li><strong>Spiral Process:</strong> Iterative loops. Build version 1, test, review, then start the next gate for version 2.</li>
                    <li><strong>Hybrid Process:</strong> Combines stage-gate rigor with agile/spiral iterations for software or high-tech items.</li>
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
            { front: "What is Industrial Design?", back: "Focusing heavily on the aesthetics, user interface, and physical ergonomics of the product." }
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
                    </table>
                </div>`
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
                    <li>Evaluate and prioritize projects (Competitive strategy)</li>
                    <li>Allocate resources and plan timing</li>
                    <li>Complete pre-project planning (Mission Statement)</li>
                </ol>`
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
            { front: "What is Market Pull?", back: "Designing a product explicitly to solve a recognized customer need." }
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
                    <li>Gather raw data from customers.</li>
                    <li>Interpret raw data in terms of customer needs (attribute phrasing, ignore the "how").</li>
                    <li>Organize needs into a hierarchy (primary, secondary).</li>
                    <li>Establish relative importance.</li>
                    <li>Reflect on the results.</li>
                </ol>
                <div style="background:rgba(255,100,150,0.1); padding:12px; border-radius:8px; margin-top:12px;">
                    <strong>Ethnographic Studies:</strong> Observing real users in their actual environment. High insight, but costly and time-consuming.
                </div>`
            },
            {
                title: "The Kano Model",
                body: `<p>A framework to classify customer requirements into distinct categories based on satisfaction:</p>
                <div class="info-table-wrap" style="margin-top:12px;">
                    <table class="info-table">
                        <tr><th>Type</th><th>Description</th></tr>
                        <tr><td>Expecters (Must-be)</td><td>Basic features; their absence causes massive dissatisfaction.</td></tr>
                        <tr><td>Spoken (One-dimensional)</td><td>More is better (e.g., fuel efficiency). Satisfaction scales linearly.</td></tr>
                        <tr><td>Exciters (Attractive)</td><td>Unexpected features that delight the customer.</td></tr>
                        <tr><td>Indifferent</td><td>Features the customer doesn't care about at all.</td></tr>
                    </table>
                </div>
                <p style="margin-top:12px; font-size:13px; color:var(--text-secondary);"><strong>Note:</strong> Over time, Exciters become Expecters (e.g., WiFi in hotels).</p>`
            },
            {
                title: "Benchmarking and Reverse Engineering",
                body: `<p><strong>Benchmarking:</strong> Comparing your metrics (cost, time, quality) against industry leaders. Allows you to identify "best practices".</p>
                <p><strong>Reverse Engineering:</strong> Tearing down competitor products to analyze components, costs, and functionality mechanism.</p>`
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
            { front: "What is a 'Qualitative' user persona?", back: "A fictional summary of typical user attributes used to guide empathy and design decisions." }
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
                body: `<p>While customer needs are expressed in their language ("easy to install"), specifications are <strong>precise, measurable details</strong> ("Takes < 75 seconds to assemble").</p>
                <p>Establishing specs takes 4 steps:</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Prepare the list of metrics</li>
                    <li>Collect competitive benchmarking info</li>
                    <li>Set ideal and marginally acceptable target values</li>
                    <li>Reflect on results</li>
                </ol>`
            },
            {
                title: "Quality Function Deployment (QFD) & House of Quality",
                body: `<p>QFD is a structured method to translate needs into specs. The <strong>House of Quality (HoQ)</strong> is its main visual matrix.</p>
                <ul style="margin-bottom:12px;">
                    <li><strong>Left Wall:</strong> WHATs (Customer needs and importance weights)</li>
                    <li><strong>Ceiling/Top:</strong> HOWs (Engineering characteristics/metrics)</li>
                    <li><strong>Main Matrix:</strong> Relationships (Strong=9, Medium=3, Weak=1)</li>
                    <li><strong>Roof:</strong> Correlation between different engineering metrics (Trade-offs)</li>
                    <li><strong>Basement:</strong> Target values and competitive analysis</li>
                </ul>`
            },
            {
                title: "Finalizing Specifications",
                body: `<p>Initial targets are often unrealistic. Final specs are set after conceptual design by:</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Developing technical models of the product (predicting performance)</li>
                    <li>Developing a cost model (Bill of Materials)</li>
                    <li>Refining specs and making technical vs cost trade-offs</li>
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
            { front: "What is step 1 of establishing specs?", back: "Prepare the list of measurable metrics derived from the needs." }
        ]
    },

    session5: {
        hero: {
            title: "Establishing Product Function",
            desc: "Tools for creative thinking, brainstorming, brainwriting, and concept mapping."
        },
        concepts: [
            {
                title: "Mental Blocks in Design",
                body: `<p>Creativity is often hindered by cognitive blocks:</p>
                <div class="info-table-wrap" style="margin-top:12px;">
                    <table class="info-table">
                        <tr><th>Type of Block</th><th>Description</th></tr>
                        <tr><td>Perceptual</td><td>Struggling to isolate the problem or seeing only expected details.</td></tr>
                        <tr><td>Emotional</td><td>Fear of making mistakes, fear of judgment.</td></tr>
                        <tr><td>Cultural</td><td>Believing reason/logic is always better than intuition/play.</td></tr>
                        <tr><td>Environmental</td><td>Distracting workplace, lack of support from management.</td></tr>
                    </table>
                </div>`
            },
            {
                title: "Concept Generation Methods",
                body: `<ul style="margin-bottom:12px;">
                    <li><strong>Brainstorming:</strong> Unstructured verbal idea dumping. No judgment allowed.</li>
                    <li><strong>6-3-5 Brainwriting:</strong> Silent. 6 people write 3 ideas in 5 minutes, pass paper, repeat. Reduces introversion barriers.</li>
                    <li><strong>C-Sketch:</strong> Collaborative sketching. Draw an idea, pass it to neighbor to add details.</li>
                    <li><strong>Affinity Diagram (KJ Method):</strong> Write ideas on sticky notes, continuously group them by natural relationships on a wall.</li>
                    <li><strong>Concept Maps:</strong> Visual nodes connected by arrows detailing relationships and sub-systems.</li>
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
            { front: "Why 'incubate' ideas?", back: "Taking a break allows the subconscious mind to process and connect disparate thoughts." }
        ]
    },

    session6: {
        hero: {
            title: "Concept Generation II",
            desc: "Structured methods: TRIZ, SCAMPER, Functional Analysis, and subtracting."
        },
        concepts: [
            {
                title: "Functional Decomposition (FAST Diagram)",
                body: `<p>Function Analysis System Technique (FAST). It breaks down a complex problem into measurable sub-functions using active verbs and nouns.</p>
                <p>Read from Left to Right answering "HOW?". Read from Right to Left answering "WHY?".</p>
                <div style="background:rgba(255,100,150,0.1); text-align:center; padding:16px; border:1px solid rgba(255,100,150,0.3); border-radius:8px;">
                    How? ➡️<br>
                    <strong>Washing Machine:</strong> Main = "Wash Clothes" → Sub = "Agitate Water", "Apply Detergent", "Spin Dry"<br>
                    ⬅️ Why?
                </div>`
            },
            {
                title: "SCAMPER Technique",
                body: `<p>A checklist for ideation:</p>
                <ul style="margin-bottom:12px;">
                    <li><strong>S</strong>ubstitute (components, materials)</li>
                    <li><strong>C</strong>ombine (functions together)</li>
                    <li><strong>A</strong>dapt (ideas from other fields)</li>
                    <li><strong>M</strong>odify/Magnify/Minify</li>
                    <li><strong>P</strong>ut to another use</li>
                    <li><strong>E</strong>liminate (unnecessary parts)</li>
                    <li><strong>R</strong>earrange / Reverse</li>
                </ul>`
            },
            {
                title: "TRIZ (Theory of Inventive Problem Solving)",
                body: `<p>Developed by Genrich Altshuller after analyzing thousands of patents. Premise: Someone, somewhere, has already solved your problem.</p>
                <p>TRIZ uses a Contradiction Matrix of 39 engineering parameters mapped to 40 Inventive Principles.</p>
                <ul style="color:var(--text-secondary); font-size:14px;">
                    <li><em>Example Contradiction:</em> I want a coffee cup to be insulated (Parameter: Temperature), but I don't want it to be heavy (Parameter: Weight).</li>
                    <li><em>TRIZ Suggestion:</em> Principle 1: Segmentation, or Principle 31: Porous Materials (Cardboard sleeve).</li>
                </ul>`
            }
        ],
        flashcards: [
            { front: "What does SCAMPER stand for?", back: "Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Rearrange." },
            { front: "What is TRIZ?", back: "Theory of Inventive Problem Solving based on universal principles found in patents." },
            { front: "How do you read a FAST diagram?", back: "Read Left to Right asking 'How?'. Read Right to Left asking 'Why?'." },
            { front: "According to TRIZ, what is a Contradiction?", back: "When improving one parameter causes another parameter to worsen." },
            { front: "What is Functional Decomposition?", back: "Breaking a complex product down into independent, simple sub-functions described via verb-noun pairs." },
            { front: "How many Inventive Principles does TRIZ have?", back: "40 inventive principles." },
            { front: "Give a SCAMPER 'Eliminate' example.", back: "Removing the headphone jack from a smartphone to save space." },
            { front: "Give a SCAMPER 'Put to other use' example.", back: "Using old shipping containers as modular home units." },
            { front: "What are the rules of formatting a function in FAST?", back: "It must be an active verb followed by a measurable noun (e.g., 'Generate Heat')." },
            { front: "Who developed TRIZ?", back: "Genrich Altshuller, a Russian engineer and patent investigator." }
        ]
    },

    session7: {
        hero: {
            title: "Concept Evaluation & Testing",
            desc: "Pugh matrices, AHP, and systematic ways to select the winning concept."
        },
        concepts: [
            {
                title: "Concept Selection Matrix (Pugh Matrix)",
                body: `<p>A qualitative method to narrow down generated concepts. You pick one concept as a <strong>Datum (Baseline)</strong> and compare the others to it against customer criteria.</p>
                <div class="info-table-wrap" style="color:white;">
                    <table class="info-table">
                        <tr><th>Criteria</th><th>Datum</th><th>Concept A</th><th>Concept B</th></tr>
                        <tr><td>Weight</td><td>0</td><td>+</td><td>-</td></tr>
                        <tr><td>Cost</td><td>0</td><td>-</td><td>+</td></tr>
                        <tr><td>Durability</td><td>0</td><td>+</td><td>+</td></tr>
                        <tr><th>Net Score</th><th>0</th><th>+1</th><th>+1</th></tr>
                    </table>
                </div>
                <p style="margin-top:8px; font-size:13px; color:var(--text-secondary);">Concepts with high net positive scores move forward; severe negatives are discarded or redesigned.</p>`
            },
            {
                title: "Analytic Hierarchy Process (AHP)",
                body: `<p>A quantitative method to establish the exact mathematical weights of selection criteria.</p>
                <ol style="margin-left:20px; color:var(--text-secondary);">
                    <li>Create a pairwise comparison matrix of criteria (1-9 scale).</li>
                    <li>Normalize the matrix.</li>
                    <li>Calculate the priority vector (weights).</li>
                    <li>Calculate Consistency Ratio (CR). If CR &gt; 0.10, judgments are too random and must be re-evaluated.</li>
                </ol>`
            },
            {
                title: "Concept Testing",
                body: `<p>Presenting physical/virtual mockups to real customers to estimate market size.</p>
                <p>Steps include: Define purpose, choose survey population, choose survey format (Face-to-Face vs Web), communicate concept (sketches, CAD, 3D printing), measure response, interpret results.</p>`
            }
        ],
        flashcards: [
            { front: "What is a Pugh Matrix used for?", back: "Concept generation and screening by comparing alternatives against a base 'Datum'." },
            { front: "What does the 1-9 scale in AHP represent?", back: "1=Equal importance, 9=Extreme importance representing intensity of preference." },
            { front: "What is a safe Consistency Ratio (CR) in AHP?", back: "CR must be less than or equal to 0.10. Above 0.1 means judgments are inconsistent." },
            { front: "What is the 'Datum' in Concept Screening?", back: "The benchmark concept (often an existing competitor) everything else is scored against as (+), (-), or (0)." },
            { front: "What is a Concept Prototype?", back: "A non-working physical or visual mock-up designed solely to elicit customer feedback." },
            { front: "Why use AHP over raw voting?", back: "AHP provides rigorous mathematical verification that human preferences are logically consistent." },
            { front: "What are the common scales in a Concept Testing survey?", back: "Definite buy, Probable buy, Might buy, Probably not buy, Definitely not buy." },
            { front: "How do you calculate Market Share from concept testing?", back: "Multiply the 'definitely buy' percentage by a reality factor, combined with distribution reach." },
            { front: "Can Pugh matrices combine concepts?", back: "Yes. Often a negative trait in a winning concept is fixed by borrowing parts of a losing concept." },
            { front: "What is 'Normalizing' in AHP?", back: "Dividing each matrix value by its column sum so the final derived weights add up to 1.0 (100%)." }
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
                title: "Platform Planning",
                body: `<p>A product family shares a common platform (core chunks) while varying specific modular chunks to target different market segments. E.g., Volkswagen building Golf, Audi A3, and Skoda Octavia all on the exact same MQB physical chassis platform to save costs.</p>`
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
            { front: "What is a drawback of Integral Architecture?", back: "If one component fails, the entire product might need replacing; very hard to upgrade." },
            { front: "What is Bus-Modularity?", back: "Different modules plug into a common spine/bus using a standardized interface (e.g., USB hub)." },
            { front: "What is 'Chunking'?", back: "Grouping related sub-functions together into a single physical block during the design process." }
        ]
    }
};

window.sessionContent = sessionContent;
