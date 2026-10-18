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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
