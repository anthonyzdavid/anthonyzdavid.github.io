const lectures = [
  {
    "id": 1,
    "date": "Aug 25, 2026",
    "unit": "Foundations",
    "title": "Intelligence, agents & problems",
    "desc": "Build the vocabulary: rationality, PAGE, environments, and problem formulation.",
    "map": "intelligence → agents → PAGE → environments → problems",
    "boundary": "This lecture establishes the problem and agent vocabulary. Detailed search strategy comparisons belong to Week 2.",
    "sections": [
      {
        "title": "What makes an agent intelligent?",
        "body": "<p>An agent receives percepts through sensors and acts through effectors. The course loop is <strong>SEE → THINK → DO</strong>. Human-like behavior and rational behavior are different standards: rationality chooses an action with the best expected utility given available information.</p><p>A Turing-test performance is evidence of human-like interaction; it is not an objective mathematical definition of intelligence. A rational agent can still lose when outcomes are uncertain.</p>",
        "question": "Why can the best possible decision still lead to a bad result?",
        "answer": "A decision maximizes expected utility using the available evidence. It cannot guarantee a favorable outcome in every uncertain world."
      },
      {
        "title": "PAGE: specify the agent before coding",
        "body": "<p><strong>Percepts · Actions · Goal · Environment.</strong> Distinguish a device from the information or behavior it enables. A camera is a sensor; an observed obstacle is a percept. A motor is an effector; turning is an action.</p><p>Reflex agents react to current percepts. Internal-state agents retain history. Goal-based agents consider desired states; utility-based agents rank outcomes; learning agents improve from experience.</p>",
        "question": "Design PAGE for a robot that sorts recycling, then explain why it might need internal state.",
        "answer": "Percepts: observed objects and bin status. Actions: move, grasp, release. Goal: correctly sort items. Environment: conveyor and bins. State can track an item while it is temporarily occluded. This is a study example."
      },
      {
        "title": "Six dimensions of an environment",
        "body": "<p>Classify environments along six lecture dimensions: <strong>accessible/inaccessible, deterministic/nondeterministic, episodic/non-episodic, hostile/friendly, static/dynamic, discrete/continuous</strong>.</p><p>Accessible concerns observation; deterministic concerns transition outcomes. Static concerns whether the world changes during deliberation. Episodic concerns whether decisions depend on history.</p>",
        "question": "Can an environment be deterministic but inaccessible? Construct one.",
        "answer": "Yes. A fixed maze with hidden walls has deterministic moves but incomplete observation. Observation and transition uncertainty are separate dimensions."
      },
      {
        "title": "Turn a wish into a search problem",
        "body": "<p>A problem specifies a <strong>state space, initial state, goal condition, and actions/operators</strong>. A solution is an action sequence leading from the initial state to a goal. An optimal solution minimizes the chosen cost.</p><p>A state describes the world. A search node records a state in an exploration, together with information such as parent, action, depth, and path cost.</p>",
        "question": "Formulate a route-planning problem. What changes when you minimize tolls rather than distance?",
        "answer": "States can be locations; the initial state is the departure point; the goal is the destination; actions follow roads. The cost function changes, so the optimal route may change even with the same states and actions."
      }
    ],
    "week": 1
  },
  {
    "id": 2,
    "date": "Sep 1, 2026",
    "unit": "Search",
    "title": "Search strategies & heuristics",
    "desc": "Compare frontier rules, guarantees, memory, and local optimization.",
    "map": "graph search → uninformed search → heuristics → A* → local search",
    "boundary": "The lecture introduces many search methods. Guarantees depend on assumptions; do not memorize “always” claims without those assumptions.",
    "sections": [
      {
        "title": "One skeleton, different frontier rules",
        "body": "<p>The frontier contains generated nodes waiting to be expanded. The explored set records expanded states. A strategy decides which frontier node comes next. For cost-sensitive search, test a goal when selecting it for expansion, rather than accepting the first generated goal.</p><div class=\"table-wrap\"><table><tr><th>Method</th><th>Choose next</th><th>Main condition / tradeoff</th></tr><tr><td>BFS</td><td>Shallowest; FIFO</td><td>Optimal with equal step costs; exponential memory</td></tr><tr><td>UCS</td><td>Lowest g(n)</td><td>Least-cost solution; positive lower bound on step cost for standard completeness</td></tr><tr><td>DFS</td><td>Deepest; LIFO</td><td>Small memory; not generally optimal or complete on infinite-depth trees</td></tr><tr><td>DLS</td><td>DFS up to limit ℓ</td><td>Can miss solutions beyond cutoff</td></tr><tr><td>IDS</td><td>Repeated depth limits</td><td>Shallow solution with DFS-like memory; equal-cost optimality</td></tr><tr><td>Bidirectional</td><td>Search from both ends</td><td>Requires suitable reverse search and intersection detection</td></tr></table></div>",
        "question": "Give a graph where the shallowest goal is more expensive than a deeper one. Which strategy should you choose?",
        "answer": "Study example: S→G costs 10, S→A costs 1, A→G costs 1. BFS favors one edge; UCS finds cost 2."
      },
      {
        "title": "Complexity: name your symbols",
        "body": "<p><strong>b</strong>: branching factor; <strong>d</strong>: shallowest solution depth; <strong>m</strong>: maximum depth; <strong>ℓ</strong>: imposed depth limit.</p><p>Lecture shorthand: BFS time and space are exponential in d; DFS time is O(b<sup>m</sup>) and space O(bm); IDS time O(b<sup>d</sup>) and space O(bd). Exact BFS exponent conventions can vary with goal testing and successor generation.</p><p>Lower space usage does not imply that DFS is faster on every problem.</p>",
        "question": "Why can iterative deepening repeat work yet remain useful?",
        "answer": "The deepest level dominates node count when b is greater than one. Repeating shallow levels is often a modest time overhead while retaining low memory."
      },
      {
        "title": "Heuristics: estimates with obligations",
        "body": "<div class=\"formula\">UCS: f=g &nbsp; · &nbsp; Greedy: f=h &nbsp; · &nbsp; A*: f=g+h</div><p>g(n) is cost so far; h(n) estimates cost to a goal. <strong>Admissible</strong> means h(n) ≤ h*(n). <strong>Consistent</strong> means h(n) ≤ c(n,n′)+h(n′).</p><p>For standard nonnegative-cost settings, admissibility supports optimal A* tree search; consistency supports standard graph search without reopening closed nodes. With an admissible but inconsistent heuristic, graph search may need to reopen states.</p><p>The professor’s terminology treats admissibility as a property of the heuristic. Do not turn “A*” into an unconditional optimality guarantee.</p>",
        "question": "If h is zero everywhere, what does A* become? Why?",
        "answer": "Uniform-cost search: f(n)=g(n), so priorities use only accumulated path cost."
      },
      {
        "title": "Local search: optimize a candidate",
        "body": "<p>Hill climbing moves toward a better neighboring candidate and can stall on local optima, plateaus, and ridges. Simulated annealing can accept worse moves, with acceptance controlled by temperature. Genetic algorithms evolve a population through selection, crossover, and mutation.</p><p>For a tour problem, a state can be a permutation of cities, a neighbor can swap cities, and the objective can be total length. These methods seek good configurations; the route through candidate configurations is usually not the answer.</p><p>Do not confuse asymptotic annealing results under special cooling assumptions with a guarantee of a global optimum in practical finite time.</p>",
        "question": "Why is the “path” treated differently in route search and tour optimization?",
        "answer": "In route search the action path is the solution. In local tour optimization the final candidate already encodes a complete tour; the history of swaps is usually incidental."
      }
    ],
    "week": 2
  },
  {
    "id": 3,
    "date": "Sep 8, 2026",
    "unit": "Search",
    "title": "Constraints & adversarial decisions",
    "desc": "Reason with domains, propagate restrictions, and back up game trees.",
    "map": "CSP formulation → backtracking → propagation → minimax → α–β",
    "boundary": "This notebook groups the Week 3 CSP and game-search material. Probabilistic decision-making continues in Week 4.",
    "sections": [
      {
        "title": "CSP: complete and consistent",
        "body": "<p>A constraint-satisfaction problem consists of <strong>variables, domains, and constraints</strong>. An assignment is complete if every variable has a value, and consistent if it violates no constraint. A solution must be both.</p><p>Map coloring uses regions as variables, colors as domains, and inequality constraints for adjacent regions. Scheduling uses tasks or meetings as variables and permissible assignments as domains.</p>",
        "question": "A partial assignment violates no constraints. Is it a solution? Explain.",
        "answer": "No. Consistency is necessary, but a solution must also assign every variable."
      },
      {
        "title": "Prune values before branching further",
        "body": "<p>Backtracking assigns variables and retreats when constraints fail. Forward checking removes incompatible values from unassigned neighbors after an assignment. Arc consistency goes further: every remaining value of X must have support in Y for the constraint X→Y.</p><p>When a domain changes, neighboring arcs may need to be reconsidered. A domain wipeout proves that the current branch fails. Nonempty arc-consistent domains do not generally prove that a global solution exists.</p><p>MRV selects a variable with few remaining values; a degree heuristic can favor the most constraining variable; least-constraining-value ordering preserves options for other variables.</p>",
        "question": "X and Y must differ. D(X)={red,blue}, D(Y)={red}. Revise X→Y, then explain the deletion.",
        "answer": "Remove red from X because it has no different supporting value in Y. Keep blue, supported by red."
      },
      {
        "title": "Minimax: assume an opposing chooser",
        "body": "<p>At MAX nodes, back up the largest child value. At MIN nodes, back up the smallest. Terminal utilities or depth-limited evaluation scores travel upward to determine the root decision.</p><p>For deterministic minimax, preserving the ordering of leaf values preserves decisions. This does not automatically carry over to expectations at chance nodes.</p>",
        "question": "MAX has two MIN children with leaves [3,8] and [2,9]. What is the backed-up root value?",
        "answer": "The MIN values are 3 and 2. MAX selects 3."
      },
      {
        "title": "Alpha–beta: same decision, less work",
        "body": "<p>α is the best bound MAX can already secure; β is the best bound MIN can already secure. Stop considering a branch when it cannot improve the relevant ancestor’s choice, typically when α ≥ β.</p><p>Alpha–beta pruning preserves the minimax value for the same tree and evaluation. Move ordering changes how much work can be pruned; it does not make the method an approximation.</p>",
        "question": "After MAX has a value of 5, a new MIN branch reveals a child of 3. Can you stop examining that MIN branch?",
        "answer": "Yes. Its final value is at most 3, so MAX already has a better alternative of 5. The unseen children cannot make that branch preferable."
      }
    ],
    "week": 3
  },
  {
    "id": 4,
    "date": "Sep 15, 2026",
    "unit": "Decisions",
    "title": "Uncertainty, MDPs & learning",
    "desc": "Connect transitions, rewards, policies, Bellman backups, and Q updates.",
    "map": "chance → MDP → utility → policy → reinforcement learning",
    "boundary": "Use the reward convention specified in each problem. State-reward and transition-reward equations must not be mixed.",
    "sections": [
      {
        "title": "Chance is not an adversary",
        "body": "<p>A chance node backs up a probability-weighted sum, not a minimum. Rational play optimizes expected utility and still permits losses on particular runs.</p><div class=\"formula\">Expected value = Σᵢ pᵢ vᵢ</div><p>With chance nodes, arbitrary order-preserving transformations of utilities can alter a decision because expectations depend on magnitudes as well as ordering.</p>",
        "question": "An action yields 10 with probability 0.3 and −2 otherwise. What is its expected payoff?",
        "answer": "0.3×10 + 0.7×(−2) = 1.6."
      },
      {
        "title": "An MDP describes decisions over time",
        "body": "<p>Identify states, available actions, transition probabilities, rewards, and discount γ. The Markov assumption says the current state supplies the relevant information for the next transition.</p><p>A policy π maps states to actions. A utility/value measures expected discounted return, rather than immediate reward alone.</p><div class=\"formula\">U(s) = R(s) + γ maxₐ Σₛ′ P(s′|s,a) U(s′)</div><p>This is the state-reward convention. If the problem gives R(s,a,s′), place that reward inside the expectation instead.</p>",
        "question": "How can a negative immediate reward still be part of an optimal policy?",
        "answer": "It may enable sufficiently valuable later rewards. Utility includes the discounted future, not only the current reward."
      },
      {
        "title": "Value iteration and policy iteration",
        "body": "<p>Value iteration repeatedly performs Bellman optimality backups. Policy iteration alternates evaluating a current policy and improving its actions. Track whether a worked problem updates synchronously from the old table or uses newly updated values in place.</p><p>For terminal states, apply the problem’s terminal convention; do not repeatedly accumulate a terminal payoff unless the model explicitly says to.</p>",
        "question": "With R(s)=−1, γ=0.9, and best expected successor utility 6, compute one backup.",
        "answer": "Unew(s)=−1+0.9×6=4.4 under the state-reward convention."
      },
      {
        "title": "Learn from experience with Q-learning",
        "body": "<div class=\"formula\">Q(s,a) ← Q(s,a) + α [r + γ maxₐ′ Q(s′,a′) − Q(s,a)]</div><p>α is the learning rate; γ discounts the future; r is the observed transition reward. The bracket is the temporal-difference error. Q-learning uses the best next action value, while SARSA uses the next action actually selected.</p><p>Model-based methods learn/use a transition model. Model-free methods can update values directly from experience. Exploration is needed to gather evidence beyond the currently preferred action.</p>",
        "question": "Q=2, α=0.5, r=1, γ=0.9, and max next Q=4. What is the updated Q?",
        "answer": "The target is 1+0.9×4=4.6. The error is 2.6. The new value is 2+0.5×2.6=3.3."
      }
    ],
    "week": 4
  },
  {
    "id": 5,
    "date": "Sep 22, 2026",
    "unit": "Logic",
    "title": "Knowledge & propositional logic",
    "desc": "Separate semantic truth from symbolic proof, then practice representations.",
    "map": "knowledge base → models → entailment → inference → truth tables",
    "boundary": "Midterm 1 review included CSP and reinforcement learning but excluded logic. Logic begins here and continues in Week 6. The reused review PDF contains a 2025 exam date; check current course announcements for logistics.",
    "sections": [
      {
        "title": "TELL and ASK: the knowledge-based agent",
        "body": "<p>A knowledge base stores sentences expressed in a knowledge representation language. <strong>TELL</strong> adds what the agent knows or perceives; <strong>ASK</strong> queries the knowledge base to support a decision.</p><p>The course uses Wumpus-world reasoning to distinguish observations from inferred facts. A local warning constrains possible hazards; it need not identify one unique hazard immediately.</p>",
        "question": "Why does observing a breeze fail to prove that one specific neighboring square has a pit?",
        "answer": "Several neighboring pit placements may explain the same observation. A claim must hold in all models compatible with the knowledge base before it is entailed."
      },
      {
        "title": "Entailment is a relationship between models",
        "body": "<div class=\"formula\">KB ⊨ α ⇔ M(KB) ⊆ M(α)</div><p>A model is an interpretation in which a sentence is true. Entailment means no interpretation makes KB true and α false. The professor emphasizes the distinction between meanings in possible worlds and operations on symbols.</p><p>A single countermodel refutes an entailment claim. Truth tables provide a finite model-checking method for propositional sentences.</p>",
        "question": "Does A↔B entail A∨B? Produce evidence rather than guessing.",
        "answer": "No. A=false and B=false makes A↔B true but A∨B false. This is a countermodel."
      },
      {
        "title": "Inference, soundness, completeness",
        "body": "<p><strong>KB ⊢ᵢ α</strong> means procedure i derives α from KB. Soundness means every derivable conclusion is entailed. Completeness means every entailed conclusion can be derived.</p><p>Keep the directions straight: soundness prevents unjustified conclusions; completeness prevents missed consequences.</p>",
        "question": "A procedure never returns a false consequence but misses some entailed sentences. Which property does it lack?",
        "answer": "It lacks completeness. It may still be sound."
      },
      {
        "title": "Connectives, normal forms, and proof",
        "body": "<p>Implication P⇒Q is equivalent to ¬P∨Q; it is false only when P is true and Q is false. De Morgan’s laws move negation through conjunction/disjunction. DNF is an OR of AND terms; CNF is an AND of OR clauses.</p><p>From a truth table, construct DNF by taking a conjunction for each true row, negating variables that are false in that row, and disjoining those terms. A tautology is true in all models; a satisfiable sentence is true in at least one.</p><p>Modus ponens uses P and P⇒Q to derive Q. Resolution combines clauses with complementary literals. When writing a proof, name the rule and premises for every step.</p>",
        "question": "Convert ¬(P⇒Q) into a conjunction.",
        "answer": "P∧¬Q. Negate ¬P∨Q and apply De Morgan’s law."
      }
    ],
    "week": 5
  },
  {
    "id": 6,
    "date": "Oct 6, 2026",
    "unit": "Logic",
    "title": "First-order logic & translation",
    "desc": "Represent objects and relations, control quantifiers, and test your claims.",
    "map": "propositional recap → objects → predicates → quantifiers → translation → situations",
    "boundary": "This is the introductory first-order lecture. More complicated first-order inference is deferred. The provided slides are the Week 5 propositional deck; Week 6 is grounded in captions.",
    "sections": [
      {
        "title": "Objects, predicates, functions",
        "body": "<p>First-order logic adds objects, variables, relations, functions, equality, and quantifiers. Variables range over objects, rather than predicates or relations.</p><p>A <strong>term</strong> denotes an object: a constant, variable, or function application. A <strong>predicate</strong> applied to terms forms an atomic sentence with a truth value. FatherOf(Mary) denotes an object; Parent(Bill,Mary) makes a claim.</p>",
        "question": "Explain why Smart(FatherOf(Mary)) can be a sentence while FatherOf(Mary) alone is a term.",
        "answer": "FatherOf maps an object to an object. Smart is a predicate asserting something true or false about that returned object."
      },
      {
        "title": "Quantifier scope changes the meaning",
        "body": "<div class=\"formula\">∀x ∃y A(x,y) &nbsp; ≠ &nbsp; ∃y ∀x A(x,y)</div><p>If A(x,y) means “x attracts y,” the first formula says everything attracts something, possibly a different object for each x. The second says one object is attracted by everything.</p><p>Likewise, “everything is attracted by something” is ∀y∃x A(x,y); “something attracts everything” is ∃x∀y A(x,y). Always check argument direction and quantifier scope separately.</p>",
        "question": "Everyone has a favorite book. Does that mean there is one book everyone favors?",
        "answer": "No. ∀x∃y Favorite(x,y) allows different choices. ∃y∀x Favorite(x,y) requires a shared book."
      },
      {
        "title": "Translate restrictions precisely",
        "body": "<p>“All students are clever”: <strong>∀x (Student(x)⇒Clever(x))</strong>. “Some student is clever”: <strong>∃x (Student(x)∧Clever(x))</strong>. Implication restricts a universal claim; conjunction supplies both required properties of an existential witness.</p><p>“Not all A are B”: <strong>∃x (A(x)∧¬B(x))</strong>. Negating a quantifier swaps ∀ and ∃ and negates its body.</p><p>“P and Q are not both true” means ¬(P∧Q), not ¬P∧¬Q. “Bert and Ernie are brothers” requires their relationship, not merely two independent unary claims.</p>",
        "question": "Translate “No person buys an expensive policy,” using Person, Policy, Expensive, and Buys.",
        "answer": "∀x∀y ((Person(x)∧Policy(y)∧Expensive(y))⇒¬Buys(x,y)). The universal restriction identifies the relevant people and policies."
      },
      {
        "title": "Exactly one requires existence and uniqueness",
        "body": "<div class=\"formula\">∃x [P(x) ∧ ∀y(P(y)⇒y=x)]</div><p>Existence prevents zero witnesses; the universal equality condition prevents multiple distinct witnesses. For “exactly two,” require two distinct witnesses and state that every qualifying object equals one of them.</p><p>The lecture applies these ideas to enrollment and relational examples. Write the English meaning of each clause before trusting the final formula.</p>",
        "question": "Why does ∀x∀y ((P(x)∧P(y))⇒x=y) fail to say “exactly one P”?",
        "answer": "It says at most one. It is also true when no object satisfies P, so it does not assert existence."
      },
      {
        "title": "Knowledge about changing situations",
        "body": "<p>The lecture introduces situations and action results to describe change. A fluent depends on a situation; an action takes an initial situation to a resulting one. The frame problem asks how to represent what stays unchanged.</p><p>Do not silently assume that absence from a knowledge base makes a proposition false. Closed-world reasoning is an extra modeling assumption; ordinary first-order semantics does not supply it automatically.</p><p><strong>Professor priority:</strong> the October 6 captions explicitly say to remember the seven propositional inference rules for the next exam rather than expect them to be supplied. Practice applying the course’s rule sheet.</p>",
        "question": "If a knowledge base does not contain Likes(Ana,Tea), can ordinary first-order logic conclude its negation?",
        "answer": "No. The relationship may be true in some compatible models and false in others. Missing knowledge is not automatically negative knowledge."
      },
      {
        "title": "Entailment checks: explain the set relationship",
        "body": "<p>False entails True because the empty model set is a subset of every model set. True does not entail False. A∧B entails A↔B, but the converse fails when both are false.</p><div class=\"formula\">KB ⊨ α ⇔ (KB⇒α) is valid ⇔ KB∧¬α is unsatisfiable</div><p>Use these equivalent tests to verify a conclusion. “Not valid” is different from “unsatisfiable”: a sentence may be true in some models and false in others.</p>",
        "question": "Give a formula that is satisfiable but not valid, and explain both properties.",
        "answer": "P is true in interpretations where P=true, so it is satisfiable. It is false where P=false, so it is not valid."
      }
    ],
    "week": 7,
    "source": "Week 7 lecture captions · October 6, 2026 · No accompanying slide deck supplied"
  },
  {
    "id": 8,
    "week": 8,
    "date": "Oct 13, 2026",
    "unit": "Logic",
    "title": "First-order inference & resolution",
    "desc": "Build proofs with unification, chaining, clause conversion, and resolution refutation.",
    "map": "proof → quantifier rules → unification → GMP → chaining → resolution → CNF",
    "boundary": "Week 8 continues the introductory first-order logic lecture from October 6 (Week 7). Source: October 13 captions only; no Week 8 slides supplied. Worked examples are reconstructed from the spoken descriptions, with formal clarifications labeled separately. The professor emphasizes reproducing examples without their solutions. No new exam date is supplied.",
    "source": "Week 8 lecture captions · October 13, 2026 · No accompanying slide deck supplied",
    "sections": [
      {
        "title": "A proof is a path through legal inference steps",
        "body": "<p>Start with sentences in KB, apply valid inference rules, and reach the target α. The lecture compares this to search: KB is the starting point, rule applications are actions, and the derivation is the path.</p><p>Soundness means every derived sentence is entailed. Completeness means every entailed sentence has a derivation. Ten available rule types do not imply ten possible next steps: each rule may apply to many sentences and substitutions.</p><p><strong>Professor priority:</strong> memorize the seven propositional inference rules and practice the lecture examples as questions before inspecting solutions. For resolution answers, show the two parent clauses and their resolvent at each step.</p>",
        "question": "Why can proof search branch widely even when the rule inventory is small?",
        "answer": "Each rule can be applied to different premises and many different term substitutions. The number of rule types is not the branching factor."
      },
      {
        "title": "Three quantifier rules, with restrictions",
        "body": "<div class=\"formula\">Universal elimination: ∀x P(x) ⟹ P(t)<br>Existential witness: ∃x P(x) ⟹ P(k), with fresh k<br>Existential introduction: P(t) ⟹ ∃x P(x)</div><p>Universal elimination instantiates a universally quantified variable with an appropriate term. A fresh existential witness names an unspecified object; it does not identify that object with an already named individual. In a formal existential-elimination proof, the fresh witness must not escape into the final conclusion.</p><p><strong>Formal clarification:</strong> when existential witnesses depend on surrounding universal variables during clause conversion, use fresh Skolem functions. Do not replace every existential variable with one arbitrary old constant.</p>",
        "question": "From ∃x Student(x), can you conclude Student(Bob)? Explain how to name a witness safely.",
        "answer": "No. The student need not be Bob. Introduce a fresh witness k and reason with Student(k), respecting witness restrictions; do not assert that k is Bob."
      },
      {
        "title": "Unification: one consistent substitution",
        "body": "<p>Unification finds a substitution θ that makes expressions identical so an inference rule can apply. Substitute variables, preserving predicate/function symbols, constants, argument order, and repeated-variable consistency.</p><div class=\"table-wrap\"><table><tr><th>Expressions</th><th>Result</th></tr><tr><td>Knows(John,x), Knows(John,Jane)</td><td>{x↦Jane}</td></tr><tr><td>Knows(John,x), Knows(y,Mother(y))</td><td>{y↦John, x↦Mother(John)}</td></tr><tr><td>Sells(Bob,x), Sells(x,Coke)</td><td>Fails if x is the same variable and Bob/Coke are distinct constant symbols</td></tr><tr><td>Sells(Bob,x), Sells(y,Coke)</td><td>{y↦Bob, x↦Coke}</td></tr></table></div><p>Standardize independent rule variables apart before matching. Two occurrences of one variable in the same expression must receive the same substitution.</p><p><strong>Formal clarification:</strong> the occurs check rejects x↦Father(x) for ordinary finite first-order terms. Unification is syntactic matching, not a claim that different constant symbols denote different objects in every interpretation.</p><p class=\"source-info\">Formal clarification reference: <a href=\"https://aima.eecs.berkeley.edu/4th-ed/pdfs/newchap09.pdf\">AIMA, Inference in First-Order Logic</a>.</p>",
        "question": "Unify P(x,x) with P(A,B), treating A and B as distinct constant symbols. Then try P(x,y).",
        "answer": "The first fails: x would need to be both A and B syntactically. The second succeeds with {x↦A,y↦B}."
      },
      {
        "title": "Generalized modus ponens: match all premises together",
        "body": "<p>Given facts matching p₁,…,pₙ and a rule (p₁∧…∧pₙ)⇒q, find one compatible substitution θ for every premise. Then derive qθ. Do not select incompatible substitutions independently for different premises.</p><p>The lecture’s animal-speed example combines Buffalo(Bob), Pig(Pat), and a rule saying buffalo outrun pigs. Substituting x↦Bob and y↦Pat yields Faster(Bob,Pat).</p><p>Why is this sound? Instantiate the universally quantified rule, combine its satisfied premises, and apply ordinary modus ponens. Each step preserves entailment.</p>",
        "question": "Given Parent(Ana,Ben), Parent(Ben,Cara), and Parent(x,y)∧Parent(y,z)⇒Grandparent(x,z), give the substitution and conclusion.",
        "answer": "θ={x↦Ana,y↦Ben,z↦Cara}; derive Grandparent(Ana,Cara). Both premises must use the same binding for y. This is a constructed study example."
      },
      {
        "title": "Forward and backward chaining",
        "body": "<p><strong>Forward:</strong> begin with known facts and fire rules to derive new facts. <strong>Backward:</strong> begin with a query, find rule conclusions that unify with it, then try to establish those rules’ premises as subgoals. Backward chaining does not reverse an implication into a new factual rule.</p><p>Lecture reconstruction: Buffalo(Bob), Pig(Pat), Slug(Steve), buffalo-faster-than-pig and pig-faster-than-slug rules, plus transitivity, support Faster(Bob,Steve). Forward chaining derives intermediate speed facts. Backward chaining starts from the target and seeks supporting subgoals.</p><p>Backward search is goal-focused; this does not guarantee faster termination. Recursive rules and infinitely many terms can cause nontermination.</p>",
        "question": "If P⇒Q and your goal is Q, what does backward chaining ask? Does observing Q prove P?",
        "answer": "It asks whether P can be established as a sufficient route to Q. Q by itself does not prove P; other routes to Q may exist."
      },
      {
        "title": "Where Horn-rule chaining stops",
        "body": "<p>Definite clauses have an atomic conclusion and a conjunction of positive atomic premises. Generalized-modus-ponens chaining is suited to these knowledge bases; it is not a complete method for arbitrary first-order sentences.</p><p>Lecture case-analysis pattern: P⇒H, ¬P⇒E, H⇒R, E⇒R. Classically R follows because either P or ¬P holds. A positive-fact chaining engine with neither P nor ¬P initially established cannot simply fire its way to R.</p><p><strong>Formal clarification:</strong> a Horn clause has at most one positive literal; a definite clause has exactly one. The negative antecedent in ¬P⇒E becomes P∨E, which is not Horn. Fair search and the permitted query language matter when stating completeness for chaining.</p>",
        "question": "Why is “chaining is incomplete for arbitrary first-order logic” compatible with completeness results for definite-clause reasoning?",
        "answer": "The results concern different classes of knowledge bases and queries. A method can be complete on a restricted class without covering every first-order theory."
      },
      {
        "title": "Resolution refutation: add the negated goal",
        "body": "<div class=\"formula\">KB ⊨ α ⇔ KB ∧ ¬α is unsatisfiable<br>(L ∨ C), (¬L′ ∨ D) ⟹ (C ∨ D)θ when Lθ=L′θ</div><p>Negate the query, combine it with KB, convert to clauses, and resolve complementary literals using compatible substitutions. Deriving the empty clause □ proves contradiction and therefore the original entailment.</p><p><strong>Formal clarification:</strong> first-order resolution is refutation-complete with the required machinery, including factoring and a fair search strategy. A naive search may run forever when no refutation exists. Completeness does not mean every query has a terminating yes/no test.</p><p class=\"source-info\">Formal clarification reference: <a href=\"https://airr.mit.edu/_static/fall23/lectures/lec22/L22-FOL-Proof.pdf\">MIT, First-order Logic Proof</a>.</p>",
        "question": "What must you add to prove Parent(Art,Jon) by refutation? If no contradiction has appeared after five steps, is the query disproved?",
        "answer": "Add ¬Parent(Art,Jon). Five unsuccessful steps do not disprove entailment; the search may not yet have reached a refutation."
      },
      {
        "title": "Worked resolution: a cat eats fish",
        "body": "<p>The lecture uses a cat, a food preference, and an eating rule. This reconstruction makes the clauses and substitutions explicit:</p><ol><li>¬Cat(x) ∨ Likes(x,Fish)</li><li>¬Cat(y) ∨ ¬Likes(y,z) ∨ Eats(y,z)</li><li>Cat(Josephine)</li><li>¬Eats(Josephine,Fish) — negated query</li></ol><p>Resolve (2),(4), θ={y↦Josephine,z↦Fish}: <strong>¬Cat(Josephine)∨¬Likes(Josephine,Fish)</strong> (5). Resolve (5),(3): <strong>¬Likes(Josephine,Fish)</strong> (6). Resolve (1),(6), θ={x↦Josephine}: <strong>¬Cat(Josephine)</strong> (7). Resolve (7),(3): <strong>□</strong>.</p><p>Each line records two parents, complementary literals, and the remaining clause. This is the written format the professor recommends when drawing a proof tree is cumbersome.</p>",
        "question": "Rebuild the proof without looking. Which query was negated, and where does the final contradiction occur?",
        "answer": "The query is Eats(Josephine,Fish). Its negation is clause 4. The final pair is ¬Cat(Josephine) and Cat(Josephine), producing the empty clause."
      },
      {
        "title": "CNF conversion: preserve scope and dependencies",
        "body": "<ol><li>Eliminate ⇒ and ⇔.</li><li>Move negations inward, using De Morgan’s laws and swapping quantifiers under negation.</li><li>Standardize bound variables so independent quantifiers use different names.</li><li>Skolemize existential variables with fresh constants or functions of the universal variables in scope.</li><li>Drop remaining universal quantifiers, treating clause variables as implicitly universal.</li><li>Distribute ∨ over ∧.</li><li>Separate the conjunction into clauses; standardize variables apart when clauses are reused.</li></ol><p>The lecture emphasizes Skolem dependencies: ∀x∃y R(x,y) becomes R(x,f(x)), not R(x,k) with one fixed witness. In contrast, ∃y∀x R(x,y) uses a fresh constant k.</p><p><strong>Formal clarification:</strong> Skolemization preserves satisfiability with fresh symbols; it is not ordinary logical equivalence in the original vocabulary. This is sufficient for refutation.</p><p class=\"source-info\">Formal clarification reference: <a href=\"https://www.cs.cmu.edu/~mheule/15311-s26/slides/resolution.pdf\">CMU, Logic and Mechanized Reasoning</a>.</p>",
        "question": "Skolemize ∀x∀z∃y Helps(y,x,z). What are the arguments of the fresh function?",
        "answer": "Helps(f(x,z),x,z), with x and z implicitly universal afterward. The witness may depend on both universally quantified variables in its scope."
      },
      {
        "title": "Worked CNF: everyone who loves all animals",
        "body": "<p>Lecture sentence: everyone who loves all animals is loved by someone. Let Loves(a,b) mean a loves b:</p><div class=\"formula\">∀x [(∀y (Animal(y)⇒Loves(x,y))) ⇒ ∃z Loves(z,x)]</div><p>Eliminate implications and push negation inward:</p><div class=\"formula\">∀x [(∃y (Animal(y)∧¬Loves(x,y))) ∨ ∃z Loves(z,x)]</div><p>Use independent fresh functions f(x), g(x), then distribute:</p><div class=\"formula\">Animal(f(x)) ∨ Loves(g(x),x)<br>¬Loves(x,f(x)) ∨ Loves(g(x),x)</div><p>These clauses form an equisatisfiable Skolemized representation. Keeping y and z distinct avoids conflating an animal with the person who loves x.</p>",
        "question": "Why does negating “x loves all animals” produce an existential claim with a conjunction?",
        "answer": "¬∀y(Animal(y)⇒Loves(x,y)) ≡ ∃y(Animal(y)∧¬Loves(x,y)): there is an animal x does not love."
      },
      {
        "title": "English stories: translate, then prove",
        "body": "<p>The lecture also discusses ancestry, animal lovers and a cat’s killer, and a ski/mountaineering club. The reusable method is: define predicate argument order, translate every premise and the target, negate the target for resolution, convert to clauses, then track substitutions through the proof.</p><p>Club reconstruction: every member is a skier or climber (possibly both); skiers like snow; Alan dislikes what Tony likes; Tony likes snow; Alan is a member. Alan therefore does not like snow. A skier would like snow, so Alan cannot be a skier; the member disjunction forces Alan to be a climber.</p><p>“Dislikes” is represented here as explicit ¬Likes, following the lecture exercise. It is not inferred from missing knowledge. To answer “who?”, retain the witness binding rather than reporting only that someone exists.</p>",
        "question": "Write the member rule and the skier/snow rule, then state the witness for “a climber who is not a skier.”",
        "answer": "∀x(Member(x)⇒(Skier(x)∨Climber(x))); ∀x(Skier(x)⇒Likes(x,Snow)). Together with the reconstructed facts and negative preference, Alan is a witness: Climber(Alan)∧¬Skier(Alan)."
      },
      {
        "title": "Why contradiction trivializes classical entailment",
        "body": "<p>If KB contains P and ¬P, no model satisfies all of KB. Thus M(KB)=∅, a subset of the model set of any sentence α. In classical logic an inconsistent knowledge base therefore entails every sentence.</p><p>The lecture closes with this warning about contradictory premises. Distinguish a contradiction already in KB from a contradiction obtained after deliberately adding ¬α to a consistent KB for a proof.</p><p><strong>Study boundary:</strong> the lecture’s paradox/completeness discussion provides motivation. It does not establish that every mathematical truth is decidable, or that every true arithmetic statement is provable in one fixed formal theory.</p>",
        "question": "Why is deriving □ from KB∪{¬α} useful, while deriving □ from KB alone is a problem?",
        "answer": "The first can show α follows from KB by refutation. The second shows KB itself is inconsistent; classically it then entails every query and cannot discriminate conclusions."
      }
    ]
  }
];
