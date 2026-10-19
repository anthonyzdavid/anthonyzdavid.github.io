const lectures = [
  {
    "id": 1,
    "date": "Aug 25, 2026",
    "unit": "Foundations",
    "title": "Intelligence, agents & problems",
    "desc": "Build the vocabulary: rationality, PAGE, environments, and problem formulation.",
    "map": "intelligence → Turing tests → agents → PAGE → environments → problems → state spaces",
    "boundary": "This lecture establishes the problem and agent vocabulary. The simple and full Turing tests are behavioral tests, not definitions of intelligence. Detailed search strategy comparisons belong to Week 2.",
    "source": "Week 1 lecture captions · August 25, 2026 · cross-checked against the complete Week 1 study notebook",
    "sections": [
      {
        "title": "What makes an agent intelligent?",
        "body": "<p>An agent receives percepts through sensors and acts through effectors. The course loop is <strong>SEE → THINK → DO</strong>. Human-like behavior and rational behavior are different standards: rationality chooses an action with the best expected utility given available information.</p><p>A Turing-test performance is evidence of human-like interaction; it is not an objective mathematical definition of intelligence. A rational agent can still lose when outcomes are uncertain.</p>",
        "question": "Why can the best possible decision still lead to a bad result?",
        "answer": "A decision maximizes expected utility using the available evidence. It cannot guarantee a favorable outcome in every uncertain world.",
        "teaching": {
          "title": "A robot deciding what to do",
          "story": "Imagine a little robot looking for its charging station. It sees a wall and has to choose whether to turn.",
          "steps": [
            "It sees the wall. That incoming information is a percept.",
            "It uses what it knows to choose a turn. That is the thinking part.",
            "It turns its wheels. That is an action. Then it looks again."
          ],
          "takeaway": "An agent is something that takes in information and chooses actions. A rational agent chooses what seems best with the information it has. It can still get unlucky.",
          "question": "A robot chooses the safest path, but a falling branch blocks it. Does that automatically make its choice irrational?",
          "answer": "No. Judge the choice using what the robot could know when it chose. A good decision does not guarantee a good outcome."
        }
      },
      {
        "title": "Simple and full Turing tests",
        "body": "<p>The <strong>simple Turing test</strong> asks whether a text-only interrogator can reliably distinguish a machine from a human through conversation. The lecture’s <strong>full Turing test</strong> adds perceptual and physical interaction, requiring capabilities such as vision and robotics.</p><p>Passing either is evidence about observable behavior, not a proof that the system thinks like a human or a complete definition of intelligence. The lecture separates four viewpoints: acting humanly, thinking humanly, thinking rationally, and acting rationally.</p>",
        "question": "A chatbot fools a judge in a text conversation. What has it demonstrated, and what has it not demonstrated?",
        "answer": "It has demonstrated human-like conversational behavior under that test. It has not proved consciousness, human-like internal reasoning, or rational action in every environment.",
        "teaching": {
          "title": "A behavior test is not a mind reader",
          "story": "A judge exchanges messages with two hidden partners and guesses which one is a person.",
          "steps": [
            "The judge sees behavior, not the machinery or thought process behind it.",
            "If the machine is hard to distinguish from the person, it performs well on the text test.",
            "A full version also asks the machine to perceive and act in the physical world.",
            "Neither result by itself defines every kind of intelligence or reveals consciousness."
          ],
          "takeaway": "The Turing test evaluates human-like performance under specified interaction conditions; rational-agent design asks a different question about choosing effective actions.",
          "question": "Would a chess program that plays brilliantly but chats poorly necessarily fail to be useful AI?",
          "answer": "No. It may be highly capable at its task even though it does not imitate broad human conversation."
        }
      },
      {
        "title": "PAGE: specify the agent before coding",
        "body": "<p><strong>Percepts · Actions · Goal · Environment.</strong> Distinguish a device from the information or behavior it enables. A camera is a sensor; an observed obstacle is a percept. A motor is an effector; turning is an action.</p><p>Reflex agents react to current percepts. Internal-state agents retain history. Goal-based agents consider desired states; utility-based agents rank outcomes; learning agents improve from experience.</p>",
        "question": "Design PAGE for a robot that sorts recycling, then explain why it might need internal state.",
        "answer": "Percepts: observed objects and bin status. Actions: move, grasp, release. Goal: correctly sort items. Environment: conveyor and bins. State can track an item while it is temporarily occluded. This is a study example.",
        "teaching": {
          "title": "Give your robot a job description",
          "story": "Before building a robot helper, tell it what it can notice, what it can do, what it wants, and where it works.",
          "steps": [
            "Percepts: it sees a toy on the floor.",
            "Actions: it can move, pick up, and put down.",
            "Goal: put toys in the box. Environment: the room. These four pieces are PAGE.",
            "If it remembers which corner it already cleaned, it has internal state: a little memory of the past."
          ],
          "takeaway": "PAGE is a way to describe the robot’s job before choosing its brain. Sensors are the tools; percepts are the information those tools bring in.",
          "question": "For a toy-cleaning robot, is its camera a percept or a sensor?",
          "answer": "A sensor. The camera is the tool. The picture or detected toy is the percept."
        }
      },
      {
        "title": "Six dimensions of an environment",
        "body": "<p>Classify environments along six lecture dimensions: <strong>accessible/inaccessible, deterministic/nondeterministic, episodic/non-episodic, hostile/friendly, static/dynamic, discrete/continuous</strong>.</p><p>Accessible concerns observation; deterministic concerns transition outcomes. Static concerns whether the world changes during deliberation. Episodic concerns whether decisions depend on history.</p>",
        "question": "Can an environment be deterministic but inaccessible? Construct one.",
        "answer": "Yes. A fixed maze with hidden walls has deterministic moves but incomplete observation. Observation and transition uncertainty are separate dimensions.",
        "teaching": {
          "title": "What kind of world is the robot in?",
          "story": "Finding a toy in a quiet room is different from catching a ball in a busy playground. We describe the world so we can choose a sensible method.",
          "steps": [
            "Can it see all the important things? That is accessibility.",
            "Does the same move always have the same result? That is determinism.",
            "Does this choice affect later choices? Then the task is not episodic.",
            "Does an opponent try to stop it? That is hostility. Can things change while it thinks? That is a dynamic world.",
            "Are choices separate steps, like squares on a board, or smooth quantities, like steering angles? That is discrete versus continuous."
          ],
          "takeaway": "These are separate questions. A world can have predictable moves while still hiding information.",
          "question": "A maze has fixed walls, but the robot cannot see around corners. Are the moves predictable? Is all information visible?",
          "answer": "The moves can be predictable, so the world can be deterministic. The hidden walls make it inaccessible. Those are different properties."
        }
      },
      {
        "title": "Turn a wish into a search problem",
        "body": "<p>A problem specifies a <strong>state space, initial state, goal condition, actions/operators, and path-cost function</strong>. A solution is an action sequence leading from the initial state to a goal. An optimal solution minimizes the chosen cost.</p><p>A <strong>state</strong> describes the world. A <strong>search node</strong> records a state in an exploration, together with parent, generating action, depth, and path cost. The same state can appear in multiple nodes if reached by different paths; graph search detects repeated states.</p><p>Lecture examples include the three-water-bucket problem, Romania route finding, the two-room vacuum world, the eight puzzle, robot-arm motion, circuit layout, and Tower of Hanoi. Each forces you to choose a useful representation. A single-state problem assumes the agent knows its state; multiple-state or contingency problems represent uncertainty about state or outcomes.</p>",
        "question": "Formulate a route-planning problem. What changes when you minimize tolls rather than distance?",
        "answer": "States can be locations; the initial state is the departure point; the goal is the destination; actions follow roads. The cost function changes, so the optimal route may change even with the same states and actions.",
        "teaching": {
          "title": "Make “find the toy” precise",
          "story": "“Find my toy” is too vague for a computer. Think of drawing a little map for a treasure hunt.",
          "steps": [
            "List the possible places it can be. These are states.",
            "Mark where it starts: the initial state.",
            "Say what counts as success: the goal test.",
            "List legal moves and their costs. A solution is a sequence of moves that reaches the goal."
          ],
          "takeaway": "Search needs a clearly described starting point, choices, and finish line. “Best” only makes sense after you say what cost matters.",
          "question": "If two routes reach the toy, one in 3 steps and another in 5, must the 3-step route be cheaper?",
          "answer": "Only if the steps have equal cost. Three expensive steps could cost more than five cheap ones."
        }
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
    "map": "graph search → evaluation criteria → uninformed search → heuristics → A* → local search",
    "boundary": "The lecture introduces many search methods. Judge each by completeness, optimality, time, and space. Guarantees depend on assumptions; do not memorize “always” claims without those assumptions.",
    "source": "Week 2 lecture captions · September 1, 2026 · cross-checked against the complete Week 2 study notebook",
    "sections": [
      {
        "title": "One skeleton, different frontier rules",
        "body": "<p>The frontier contains generated nodes waiting to be expanded. The explored set records expanded states. A strategy decides which frontier node comes next. For cost-sensitive search, test a goal when selecting it for expansion, rather than accepting the first generated goal.</p><div class=\"table-wrap\"><table><tr><th>Method</th><th>Choose next</th><th>Main condition / tradeoff</th></tr><tr><td>BFS</td><td>Shallowest; FIFO</td><td>Optimal with equal step costs; exponential memory</td></tr><tr><td>UCS</td><td>Lowest g(n)</td><td>Least-cost solution; positive lower bound on step cost for standard completeness</td></tr><tr><td>DFS</td><td>Deepest; LIFO</td><td>Small memory; not generally optimal or complete on infinite-depth trees</td></tr><tr><td>DLS</td><td>DFS up to limit ℓ</td><td>Can miss solutions beyond cutoff</td></tr><tr><td>IDS</td><td>Repeated depth limits</td><td>Shallow solution with DFS-like memory; equal-cost optimality</td></tr><tr><td>Bidirectional</td><td>Search from both ends</td><td>Requires suitable reverse search and intersection detection</td></tr></table></div>",
        "question": "Give a graph where the shallowest goal is more expensive than a deeper one. Which strategy should you choose?",
        "answer": "Study example: S→G costs 10, S→A costs 1, A→G costs 1. BFS favors one edge; UCS finds cost 2.",
        "teaching": {
          "title": "Which unopened door should we try next?",
          "story": "Imagine searching rooms for a lost teddy. You keep a list of rooms you have discovered but have not checked yet. That waiting list is the frontier.",
          "steps": [
            "BFS checks all nearby rooms before going farther: first in, first out.",
            "DFS follows one route deeply before trying another: last in, first out.",
            "UCS chooses the route with the smallest cost so far. Cheap and nearby are not always the same.",
            "Depth-limited search stops at a chosen depth. Iterative deepening repeats with a larger limit. Bidirectional search tries to meet from both ends."
          ],
          "takeaway": "Many search algorithms share the same basic process. The big difference is which waiting possibility they choose next.",
          "question": "One route uses one move costing 10. Another uses two moves costing 1 each. Which does UCS prefer?",
          "answer": "The two-move route, with total cost 2. UCS compares cost, not number of moves."
        }
      },
      {
        "title": "Complexity: name your symbols",
        "body": "<p><strong>b</strong>: branching factor; <strong>d</strong>: shallowest solution depth; <strong>m</strong>: maximum depth; <strong>ℓ</strong>: imposed depth limit.</p><p>Lecture shorthand: BFS time and space are exponential in d; DFS time is O(b<sup>m</sup>) and space O(bm); IDS time O(b<sup>d</sup>) and space O(bd). Exact BFS exponent conventions can vary with goal testing and successor generation.</p><p>Lower space usage does not imply that DFS is faster on every problem.</p>",
        "question": "Why can iterative deepening repeat work yet remain useful?",
        "answer": "The deepest level dominates node count when b is greater than one. Repeating shallow levels is often a modest time overhead while retaining low memory.",
        "teaching": {
          "title": "Why the waiting list can get enormous",
          "story": "At each hallway you find 3 more doors. Behind each of those are another 3. The number of possibilities grows like a spreading tree.",
          "steps": [
            "One level has 3 possibilities. Two levels have 9. Three levels have 27.",
            "The branching factor b means how many children a node can have. Depth counts how many moves down the tree.",
            "BFS keeps many possibilities waiting at once. DFS mainly keeps the current route and remaining choices along it.",
            "Iterative deepening repeats some shallow work to avoid storing the whole wide frontier."
          ],
          "takeaway": "Time asks how much work you do. Space asks how much you must remember. Less memory does not automatically mean faster.",
          "question": "If every node has 2 children, how many nodes are at depth 3, starting with one root at depth 0?",
          "answer": "8: first 2, then 4, then 8. Each level doubles."
        }
      },
      {
        "title": "Heuristics: estimates with obligations",
        "body": "<div class=\"formula\">UCS: f=g &nbsp; · &nbsp; Greedy: f=h &nbsp; · &nbsp; A*: f=g+h</div><p>g(n) is cost so far; h(n) estimates cost to a goal. <strong>Admissible</strong> means h(n) ≤ h*(n). <strong>Consistent</strong> means h(n) ≤ c(n,n′)+h(n′).</p><p>For standard nonnegative-cost settings, admissibility supports optimal A* tree search; consistency supports standard graph search without reopening closed nodes. With an admissible but inconsistent heuristic, graph search may need to reopen states.</p><p>The professor’s terminology treats admissibility as a property of the heuristic. Do not turn “A*” into an unconditional optimality guarantee.</p>",
        "question": "If h is zero everywhere, what does A* become? Why?",
        "answer": "Uniform-cost search: f(n)=g(n), so priorities use only accumulated path cost.",
        "teaching": {
          "title": "Use a guess about how far is left",
          "story": "On a treasure map, you know how far you have walked. You also have a guess about how far remains. Search can use both.",
          "steps": [
            "Call the cost already paid g. Call the estimated cost left h.",
            "Greedy search looks only at h: “that looks close!” UCS looks only at g: “that has been cheap!”",
            "A* adds them: f = g + h. It chooses the smallest estimated total.",
            "An admissible guess never overestimates the cheapest remaining cost. A consistent guess also behaves sensibly across each move. These conditions matter for guarantees."
          ],
          "takeaway": "A heuristic is a useful estimate. A* is not magic: a misleading estimate or the wrong handling of repeated states can spoil its guarantees.",
          "question": "Route A has g=4 and h=3. Route B has g=2 and h=8. Which has smaller A* score?",
          "answer": "A scores 7. B scores 10. A* chooses A next if these are the only waiting options."
        }
      },
      {
        "title": "Local search: optimize a candidate",
        "body": "<p>Hill climbing moves toward a better neighboring candidate and can stall on local optima, plateaus, and ridges. Simulated annealing can accept worse moves, with acceptance controlled by temperature. Genetic algorithms evolve a population through selection, crossover, and mutation.</p><p>For a tour problem, a state can be a permutation of cities, a neighbor can swap cities, and the objective can be total length. These methods seek good configurations; the route through candidate configurations is usually not the answer.</p><p>Do not confuse asymptotic annealing results under special cooling assumptions with a guarantee of a global optimum in practical finite time.</p>",
        "question": "Why is the “path” treated differently in route search and tour optimization?",
        "answer": "In route search the action path is the solution. In local tour optimization the final candidate already encodes a complete tour; the history of swaps is usually incidental.",
        "teaching": {
          "title": "Improve a whole answer, little by little",
          "story": "You already have a complete seating plan, but you want a better one. Instead of searching for a route, you keep changing the plan itself.",
          "steps": [
            "Hill climbing tries a nearby change that improves the score.",
            "It can get stuck: every small change looks worse even though a much better plan exists farther away.",
            "Simulated annealing sometimes accepts a worse move so it can escape. Its temperature controls how willing it is to do that.",
            "A genetic algorithm keeps many candidate plans, combines parts, and makes small mutations."
          ],
          "takeaway": "Local search improves candidate answers. It often finds useful answers without proving they are the best possible.",
          "question": "Why might accepting one worse move help you find a better final answer?",
          "answer": "It can move you out of a local trap. From the new place, better moves may become available."
        }
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
    "boundary": "This notebook groups the Week 3 CSP and game-search material. Constraint propagation prunes possibilities but does not generally replace search. Cutoff evaluation is an estimate, not a terminal utility. Probabilistic decision-making continues in Week 4.",
    "source": "Week 3 lecture captions · September 8, 2026",
    "sections": [
      {
        "title": "CSP: complete and consistent",
        "body": "<p>A constraint-satisfaction problem consists of <strong>variables, domains, and constraints</strong>. An assignment is complete if every variable has a value, and consistent if it violates no constraint. A solution must be both.</p><p>Map coloring uses regions as variables, colors as domains, and inequality constraints for adjacent regions. Scheduling uses tasks or meetings as variables and permissible assignments as domains.</p>",
        "question": "A partial assignment violates no constraints. Is it a solution? Explain.",
        "answer": "No. Consistency is necessary, but a solution must also assign every variable.",
        "teaching": {
          "title": "Fill the boxes without breaking the rules",
          "story": "You are coloring a map. Every region needs a color, and neighbors cannot match.",
          "steps": [
            "Each region is a variable: a box to fill.",
            "Its allowed colors are its domain.",
            "“Neighbors must differ” is a constraint.",
            "A solution fills every box and obeys every rule. Half a legal map is not finished."
          ],
          "takeaway": "A CSP is a puzzle of variables, allowed values, and rules about which values can go together.",
          "question": "Three of five regions are colored legally. Is the puzzle solved?",
          "answer": "No. It is consistent so far, but incomplete. Every region still needs a color."
        }
      },
      {
        "title": "Prune values before branching further",
        "body": "<p>Backtracking assigns variables and retreats when constraints fail. Forward checking removes incompatible values from unassigned neighbors after an assignment. Arc consistency goes further: every remaining value of X must have support in Y for the constraint X→Y.</p><p>When a domain changes, neighboring arcs may need to be reconsidered. A domain wipeout proves that the current branch fails. Nonempty arc-consistent domains do not generally prove that a global solution exists.</p><p>MRV selects a variable with few remaining values; a degree heuristic can favor the most constraining variable; least-constraining-value ordering preserves options for other variables.</p>",
        "question": "X and Y must differ. D(X)={red,blue}, D(Y)={red}. Revise X→Y, then explain the deletion.",
        "answer": "Remove red from X because it has no different supporting value in Y. Keep blue, supported by red.",
        "teaching": {
          "title": "Cross out choices that cannot work",
          "story": "Two neighboring regions must differ. One can only be red. The other can be red or blue.",
          "steps": [
            "The first region is forced to red.",
            "Red now cannot work for the second region. Cross it out.",
            "Only blue remains there. A forced choice can force more choices.",
            "Forward checking looks at neighbors after an assignment. Arc consistency asks whether each remaining value has a compatible partner across a constraint."
          ],
          "takeaway": "Propagation removes impossible choices early. If a box has no choices left, that branch cannot work.",
          "question": "X and Y must differ. X can be red or blue. Y can only be blue. What remains for X?",
          "answer": "Red. Blue in X has no different color available in Y to support it."
        }
      },
      {
        "title": "Minimax: assume an opposing chooser",
        "body": "<p>At MAX nodes, back up the largest child value. At MIN nodes, back up the smallest. Terminal utilities or depth-limited evaluation scores travel upward to determine the root decision.</p><p>For deterministic minimax, preserving the ordering of leaf values preserves decisions. This does not automatically carry over to expectations at chance nodes.</p>",
        "question": "MAX has two MIN children with leaves [3,8] and [2,9]. What is the backed-up root value?",
        "answer": "The MIN values are 3 and 2. MAX selects 3.",
        "teaching": {
          "title": "Choose while expecting the other player to choose too",
          "story": "You pick one of two boxes. Then your opponent picks which prize inside that box you receive. Your opponent wants your prize to be small.",
          "steps": [
            "Box A holds prizes worth 3 and 8. Your opponent gives you 3.",
            "Box B holds 2 and 9. Your opponent gives you 2.",
            "You choose A because 3 is better than 2.",
            "That is minimax: your turns maximize your score; the opponent’s turns minimize it."
          ],
          "takeaway": "Do not choose the box with the most exciting prize. Choose using what the opponent can force you to receive.",
          "question": "A holds [4,10]. B holds [5,6]. Your opponent picks your prize. Which box should you choose?",
          "answer": "B. The opponent can force 4 from A but only 5 from B. You prefer 5."
        }
      },
      {
        "title": "Cut off deep games without confusing estimate and outcome",
        "body": "<p>Real game trees are often too large to reach every terminal state. A <strong>cutoff test</strong> stops search at a chosen depth or condition, and an <strong>evaluation function</strong> estimates the usefulness of the nonterminal position.</p><p>The backed-up value is then only as reliable as the evaluation and search depth. The <strong>horizon effect</strong> occurs when an important event lies just beyond the cutoff. Iterative deepening, good move ordering, and extending tactically unstable positions can help, but do not turn estimates into guaranteed terminal utilities.</p>",
        "question": "Why can a depth-limited minimax agent choose a move that full minimax would reject?",
        "answer": "It evaluates nonterminal cutoff states with estimates. A decisive consequence may be beyond the horizon, or the evaluation function may rank the position inaccurately.",
        "teaching": {
          "title": "Stop the forecast, then label the position",
          "story": "A chess player cannot calculate every move to the end of the game, so she looks several moves ahead and scores the positions she reaches.",
          "steps": [
            "Choose when the look-ahead stops: the cutoff test.",
            "Score each cutoff position with an evaluation function.",
            "Back those estimated values up through MIN and MAX layers.",
            "Remember that an estimated leaf is not the same as an actual win, loss, or draw."
          ],
          "takeaway": "Depth-limited minimax replaces unreachable terminal utilities with estimates; alpha–beta can reduce work on the same searched tree.",
          "question": "If a forced loss occurs one move beyond the cutoff, might the search miss it?",
          "answer": "Yes. That is a horizon problem: the crucial consequence was outside the searched depth."
        }
      },
      {
        "title": "Alpha–beta: same decision, less work",
        "body": "<p>α is the best bound MAX can already secure; β is the best bound MIN can already secure. Stop considering a branch when it cannot improve the relevant ancestor’s choice, typically when α ≥ β.</p><p>Alpha–beta pruning preserves the minimax value for the same tree and evaluation. Move ordering changes how much work can be pruned; it does not make the method an approximation.</p>",
        "question": "After MAX has a value of 5, a new MIN branch reveals a child of 3. Can you stop examining that MIN branch?",
        "answer": "Yes. Its final value is at most 3, so MAX already has a better alternative of 5. The unseen children cannot make that branch preferable.",
        "teaching": {
          "title": "Stop checking a branch that cannot win",
          "story": "You already found a box that guarantees you 5. In a new box, you discover a prize worth 3 that your opponent could choose.",
          "steps": [
            "The new box can guarantee you at most 3, because the opponent can hand you that prize.",
            "Other prizes in that box cannot rescue it: the opponent still has the 3 available.",
            "You already have 5 elsewhere, so stop exploring this box.",
            "Alpha–beta pruning keeps bounds to recognize these situations in larger game trees."
          ],
          "takeaway": "Pruning skips work whose outcome cannot improve the decision. For the same tree, it preserves the minimax result.",
          "question": "Does alpha–beta get speed by accepting a less accurate minimax answer?",
          "answer": "No. It skips branches that cannot change the minimax decision."
        }
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
    "boundary": "Use the reward convention specified in each problem. State-reward and transition-reward equations must not be mixed. Reinforcement learning also requires an exploration policy; a greedy value update alone does not say how experience is collected.",
    "source": "Week 4 lecture captions · September 15, 2026",
    "sections": [
      {
        "title": "Chance is not an adversary",
        "body": "<p>A chance node backs up a probability-weighted sum, not a minimum. Rational play optimizes expected utility and still permits losses on particular runs.</p><div class=\"formula\">Expected value = Σᵢ pᵢ vᵢ</div><p>With chance nodes, arbitrary order-preserving transformations of utilities can alter a decision because expectations depend on magnitudes as well as ordering.</p>",
        "question": "An action yields 10 with probability 0.3 and −2 otherwise. What is its expected payoff?",
        "answer": "0.3×10 + 0.7×(−2) = 1.6.",
        "teaching": {
          "title": "A coin is different from an opponent",
          "story": "One box gives you 3 coins for sure. Another gives you 10 coins half the time and nothing half the time. Nobody is choosing the worst result for you.",
          "steps": [
            "For the uncertain box, multiply each reward by its probability.",
            "Half of 10 plus half of 0 is 5. That is its expected value.",
            "If you care only about expected coins, 5 is better than 3.",
            "You can still receive 0 on one try. Expected value is not a promise about each try."
          ],
          "takeaway": "Chance nodes use weighted averages. Opponent nodes use the opponent’s choice. Do not mix them up.",
          "question": "A fair coin gives 8 points for heads and 2 for tails. What is the expected score?",
          "answer": "5: 0.5×8 + 0.5×2. It is possible never to receive exactly 5 on a single trial."
        }
      },
      {
        "title": "An MDP describes decisions over time",
        "body": "<p>Identify states, available actions, transition probabilities, rewards, and discount γ. The Markov assumption says the current state supplies the relevant information for the next transition.</p><p>A policy π maps states to actions. A utility/value measures expected discounted return, rather than immediate reward alone.</p><div class=\"formula\">U(s) = R(s) + γ maxₐ Σₛ′ P(s′|s,a) U(s′)</div><p>This is the state-reward convention. If the problem gives R(s,a,s′), place that reward inside the expectation instead.</p>",
        "question": "How can a negative immediate reward still be part of an optimal policy?",
        "answer": "It may enable sufficiently valuable later rewards. Utility includes the discounted future, not only the current reward.",
        "teaching": {
          "title": "Plan when a move might slip",
          "story": "A robot tries to step right on an icy floor. Usually it goes right, but sometimes it slips upward. It must plan for both outcomes.",
          "steps": [
            "Describe where it can be: states. Describe what it can try: actions.",
            "Give the probabilities of landing in each next state. These are transitions.",
            "Give rewards and costs. A policy says what action to choose in each state.",
            "Value combines reward now with expected rewards later. Gamma is a discount: it controls how much later rewards count."
          ],
          "takeaway": "An MDP is a recipe for repeated decisions with uncertain results. It lets us compare actions by their expected long-term value.",
          "question": "Why might a robot pay a small cost now to reach a charging station later?",
          "answer": "The future benefit can outweigh the immediate cost. A plan should consider the whole expected return."
        }
      },
      {
        "title": "Value iteration and policy iteration",
        "body": "<p>Value iteration repeatedly performs Bellman optimality backups. Policy iteration alternates evaluating a current policy and improving its actions. Track whether a worked problem updates synchronously from the old table or uses newly updated values in place.</p><p>For terminal states, apply the problem’s terminal convention; do not repeatedly accumulate a terminal payoff unless the model explicitly says to.</p>",
        "question": "With R(s)=−1, γ=0.9, and best expected successor utility 6, compute one backup.",
        "answer": "Unew(s)=−1+0.9×6=4.4 under the state-reward convention.",
        "teaching": {
          "title": "Improve your map of good and bad places",
          "story": "Write a number on each square of a board: how good is it to be here? At first you may only know the rewards near the finish.",
          "steps": [
            "Use neighboring squares’ current numbers to update a square’s estimated value.",
            "Repeat. Information about good outcomes spreads farther across the board. This is the idea of value iteration.",
            "Policy iteration starts with a plan, evaluates how good that plan is, and improves the plan.",
            "In a calculation, follow the question’s convention about when rewards arrive and whether updates use old or newly changed values."
          ],
          "takeaway": "Value iteration improves value estimates directly. Policy iteration alternates measuring a plan and improving it.",
          "question": "A square gives −1 now. Its best expected next value is 6, and gamma is 0.9. What is its new value under the state-reward formula?",
          "answer": "−1 + 0.9×6 = 4.4. Start with today’s reward, then add the discounted expected future."
        }
      },
      {
        "title": "Learn from experience with Q-learning",
        "body": "<div class=\"formula\">Q(s,a) ← Q(s,a) + α [r + γ maxₐ′ Q(s′,a′) − Q(s,a)]</div><p>α is the learning rate; γ discounts the future; r is the observed transition reward. The bracket is the temporal-difference error. Q-learning uses the best next action value, while SARSA uses the next action actually selected.</p><p>Model-based methods learn/use a transition model. Model-free methods can update values directly from experience. Exploration is needed to gather evidence beyond the currently preferred action.</p>",
        "question": "Q=2, α=0.5, r=1, γ=0.9, and max next Q=4. What is the updated Q?",
        "answer": "The target is 1+0.9×4=4.6. The error is 2.6. The new value is 2+0.5×2.6=3.3.",
        "teaching": {
          "title": "Learn from trying a move",
          "story": "You think a particular move is worth 2 points. You try it and receive evidence suggesting it is worth 4.6. You do not have to jump all the way to the new guess.",
          "steps": [
            "Q is your score for trying one action in one state.",
            "Build a target: reward just received plus the discounted best next Q value.",
            "Compare that target with your old Q. The difference is your prediction error.",
            "Move partway toward the target. Alpha, the learning rate, says how big that part is."
          ],
          "takeaway": "Q-learning is “old guess plus a fraction of the surprise.” It learns action values from experience.",
          "question": "Your old guess is 2, the target is 6, and alpha is one half. What is the new guess?",
          "answer": "4. The error is 6−2=4. Take half of that error, 2, and add it to the old guess."
        }
      },
      {
        "title": "Exploration changes the data you get",
        "body": "<p>Reinforcement-learning experience is generated by the agent’s own behavior. <strong>Exploitation</strong> chooses the action currently believed best; <strong>exploration</strong> tries alternatives that may reveal better rewards or improve uncertain estimates.</p><p>An ε-greedy behavior policy usually chooses a greedy action but chooses a random action with probability ε. Q-learning is <strong>off-policy</strong> because its target uses maxₐ′Q(s′,a′) even if the behavior policy explored. SARSA is <strong>on-policy</strong> because its target uses the next action actually selected. The update rule and the data-collection policy are related but distinct.</p>",
        "question": "Why can a purely greedy learner remain stuck with a poor action estimate?",
        "answer": "If it never tries alternatives, it receives no evidence that another action is better. Its own choices determine which transitions it observes.",
        "teaching": {
          "title": "Try the favorite, but sometimes test another door",
          "story": "A robot knows one route gives a small reward. It has barely tried the other routes.",
          "steps": [
            "Exploitation uses the best current guess.",
            "Exploration gathers information about less-tested actions.",
            "Epsilon-greedy balances the two with a simple probability.",
            "Q-learning learns toward the best next value; SARSA learns from the next action its current policy actually takes."
          ],
          "takeaway": "Learning an action value and choosing actions are separate design choices. Without exploration, important evidence may never be collected.",
          "question": "If epsilon is zero from the beginning, is the policy guaranteed to discover the best action?",
          "answer": "No. It may exploit an early mistaken estimate forever."
        }
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
    "map": "knowledge base → models → entailment → inference → truth tables → normal forms → limits",
    "boundary": "Midterm 1 review included CSP and reinforcement learning but excluded logic. Logic begins here and continues after the exam. The reused review PDF contains a 2025 exam date; check current course announcements for logistics.",
    "source": "Week 5 lecture captions · September 22, 2026 · 9-10-P-Logic.pptx · midterm review PDF",
    "sections": [
      {
        "title": "TELL and ASK: the knowledge-based agent",
        "body": "<p>A knowledge base stores sentences expressed in a knowledge representation language. <strong>TELL</strong> adds what the agent knows or perceives; <strong>ASK</strong> queries the knowledge base to support a decision.</p><p>The course uses Wumpus-world reasoning to distinguish observations from inferred facts. A local warning constrains possible hazards; it need not identify one unique hazard immediately.</p>",
        "question": "Why does observing a breeze fail to prove that one specific neighboring square has a pit?",
        "answer": "Several neighboring pit placements may explain the same observation. A claim must hold in all models compatible with the knowledge base before it is entailed.",
        "teaching": {
          "title": "Give the robot a notebook of facts",
          "story": "The robot writes down “the hallway is blocked” and “the kitchen connects to the hallway.” It can use those facts to decide where to go.",
          "steps": [
            "The notebook is the knowledge base, or KB.",
            "TELL means add a fact or sentence to it.",
            "ASK means query what follows from what is in it.",
            "An observation and a conclusion are different. A warning that a pit is nearby does not identify exactly which square contains it."
          ],
          "takeaway": "A knowledge-based agent uses stored descriptions and rules to reason about what it should do.",
          "question": "You hear a toy beeping somewhere in one of three drawers. Do you know which drawer contains it?",
          "answer": "No. The observation allows several explanations. You need more information to identify one drawer."
        }
      },
      {
        "title": "Entailment is a relationship between models",
        "body": "<div class=\"formula\">KB ⊨ α ⇔ M(KB) ⊆ M(α)</div><p>A model is an interpretation in which a sentence is true. Entailment means no interpretation makes KB true and α false. The professor emphasizes the distinction between meanings in possible worlds and operations on symbols.</p><p>A single countermodel refutes an entailment claim. Truth tables provide a finite model-checking method for propositional sentences.</p>",
        "question": "Does A↔B entail A∨B? Produce evidence rather than guessing.",
        "answer": "No. A=false and B=false makes A↔B true but A∨B false. This is a countermodel.",
        "teaching": {
          "title": "Must the conclusion be true?",
          "story": "A note says “the ball is in the red box or the blue box.” You have not opened either box. Can you say it must be in the red box?",
          "steps": [
            "Imagine a possible world where it is in red. The note is true there.",
            "Imagine another where it is in blue. The note is also true there.",
            "The second world makes “it is in red” false, so that conclusion is not guaranteed.",
            "Entailment means the conclusion is true in every possible world where your starting information is true."
          ],
          "takeaway": "One counterexample is enough to show a conclusion is not entailed. “Could be true” is much weaker than “must be true.”",
          "question": "The ball is in red or blue, and it is not in red. Must it be in blue?",
          "answer": "Yes. Every possibility that obeys both facts puts it in blue. That is entailment."
        }
      },
      {
        "title": "Inference, soundness, completeness",
        "body": "<p><strong>KB ⊢ᵢ α</strong> means procedure i derives α from KB. Soundness means every derivable conclusion is entailed. Completeness means every entailed conclusion can be derived.</p><p>Keep the directions straight: soundness prevents unjustified conclusions; completeness prevents missed consequences.</p>",
        "question": "A procedure never returns a false consequence but misses some entailed sentences. Which property does it lack?",
        "answer": "It lacks completeness. It may still be sound.",
        "teaching": {
          "title": "A trustworthy reasoning machine",
          "story": "Imagine a machine that prints conclusions from facts. We want it to avoid wrong conclusions and to be able to find all justified ones.",
          "steps": [
            "Inference is the procedure: the actual steps the machine performs.",
            "Entailment is the truth guarantee: what really follows from the starting information.",
            "Sound means its conclusions are always justified.",
            "Complete means it can derive every conclusion that follows, within the stated logic and assumptions."
          ],
          "takeaway": "Soundness is “no unjustified answers.” Completeness is “no justified answers forever out of reach.” They are different promises.",
          "question": "A machine prints only correct conclusions but misses some that follow. What is missing?",
          "answer": "Completeness. It can be sound while failing to find every justified conclusion."
        }
      },
      {
        "title": "Connectives, normal forms, and proof",
        "body": "<p>Implication P⇒Q is equivalent to ¬P∨Q; it is false only when P is true and Q is false. De Morgan’s laws move negation through conjunction/disjunction. DNF is an OR of AND terms; CNF is an AND of OR clauses.</p><p>From a truth table, construct DNF by taking a conjunction for each true row, negating variables that are false in that row, and disjoining those terms. A tautology is true in all models; a satisfiable sentence is true in at least one.</p><p>Modus ponens uses P and P⇒Q to derive Q. Resolution combines clauses with complementary literals. When writing a proof, name the rule and premises for every step.</p>",
        "question": "Convert ¬(P⇒Q) into a conjunction.",
        "answer": "P∧¬Q. Negate ¬P∨Q and apply De Morgan’s law.",
        "teaching": {
          "title": "Translate little words into logic",
          "story": "Logic uses compact signs for words such as not, and, or, and if. Learn the words first; the symbols are just shorthand.",
          "steps": [
            "NOT P flips P. P AND Q needs both. P OR Q needs at least one, including both.",
            "IF P THEN Q rules out one case: P happens but Q does not. It does not say Q can only happen because of P.",
            "If you know P and “if P then Q,” you can conclude Q. This step is modus ponens.",
            "CNF groups OR choices with AND between groups. DNF groups AND combinations with OR between them."
          ],
          "takeaway": "Read a formula aloud in ordinary language before manipulating it. This helps you catch mistakes in meaning.",
          "question": "“If it rains, the ground is wet.” The ground is wet. Must it have rained?",
          "answer": "No. A sprinkler might explain it. The rule lets you go from rain to wet ground, not automatically backward."
        }
      },
      {
        "title": "Why propositional logic does not scale gracefully",
        "body": "<p>The slide deck closes with two limitations. First, propositional logic has limited expressiveness: a general statement such as “a square without stench has no adjacent Wumpus” must be duplicated for every relevant square. The deck’s example expands one general idea into many location-specific rules.</p><p>Second, representing change requires time- or step-indexed copies of propositions. Multiplying many spatial rules by many time steps produces a large, difficult-to-maintain knowledge base and can make inference expensive. First-order logic addresses repeated object structure with variables and quantifiers; situation calculus later addresses actions and situations.</p>",
        "question": "Why is writing NoStench11⇒¬Wumpus12, NoStench21⇒¬Wumpus22, and so on a warning sign?",
        "answer": "The same relationship is being copied for individual locations. A quantified rule can express the shared structure more compactly.",
        "teaching": {
          "title": "One rule should not need hundreds of copies",
          "story": "A safety rule applies to every room in a building, but the language only lets you name one room at a time.",
          "steps": [
            "You write one proposition for room 1, another for room 2, and so on.",
            "To track time, you make another full copy for step 1, step 2, and every later step.",
            "The rule base grows even though the underlying idea has not changed.",
            "Variables, quantifiers, and situation arguments let later lessons state reusable patterns."
          ],
          "takeaway": "Propositional logic is precise but treats each atomic proposition separately. FOL adds reusable structure over objects and relations.",
          "question": "Does FOL remove every reasoning difficulty?",
          "answer": "No. It improves expressiveness, but inference becomes more complex and can be nonterminating for negative cases."
        }
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
    "map": "propositional recap → objects → predicates/functions → semantics → quantifiers → equality → translation → situations",
    "boundary": "This is the October 6 introductory first-order lecture (course Week 7). More complicated first-order inference is deferred to October 13. Coverage is cross-checked against both Week 7 discussion decks and the full 11-12 FO-Logic lecture deck.",
    "sections": [
      {
        "title": "Objects, predicates, functions",
        "body": "<p>First-order logic adds objects, variables, relations, functions, equality, and quantifiers. Variables range over objects, rather than predicates or relations.</p><p>A <strong>term</strong> denotes an object: a constant, variable, or function application. A <strong>predicate</strong> applied to terms forms an atomic sentence with a truth value. FatherOf(Mary) denotes an object; Parent(Bill,Mary) makes a claim.</p>",
        "question": "Explain why Smart(FatherOf(Mary)) can be a sentence while FatherOf(Mary) alone is a term.",
        "answer": "FatherOf maps an object to an object. Smart is a predicate asserting something true or false about that returned object.",
        "teaching": {
          "title": "Names, descriptions, and yes/no claims",
          "story": "Think about a family photo. “Mary” names a person. “Mary’s father” picks out another person. “Mary’s father is kind” makes a claim.",
          "steps": [
            "A term names or picks out an object. Mary and FatherOf(Mary) are terms.",
            "A function takes an object and returns an object, like FatherOf.",
            "A predicate asks a yes/no question about objects, like Kind or Parent.",
            "Kind(FatherOf(Mary)) says something true or false about the person the function picks out."
          ],
          "takeaway": "Functions return objects. Predicates form claims that can be true or false. A variable is a placeholder for an object.",
          "question": "Is FatherOf(Mary) by itself a true/false statement?",
          "answer": "No. It picks out an object. Kind(FatherOf(Mary)) would make a true/false claim about that object."
        }
      },
      {
        "title": "Syntax names symbols; semantics gives them a world",
        "body": "<p>FOL syntax tells you which strings are legal. A model supplies a <strong>domain of objects</strong> and an interpretation: each constant denotes an object, each function symbol maps objects to an object, and each predicate denotes a relation that is true of some object tuples.</p><p>Different models can interpret the same symbol differently. A predicate such as Above(x,y) is not automatically geometry; its argument order and extension come from the intended interpretation. A <strong>closed sentence</strong> has no free variables and receives a truth value in a model. A formula with free variables needs an assignment before it can be evaluated.</p>",
        "question": "Why can the same sentence Red(A) be true in one model and false in another?",
        "answer": "The models can assign A to different objects or interpret Red as containing different objects. Syntax alone does not fix those meanings.",
        "teaching": {
          "title": "A symbol needs a legend",
          "story": "A map uses the letter A and a red outline. Without a legend, you know the marks but not what place or property they represent.",
          "steps": [
            "Syntax is the allowed arrangement of marks.",
            "The domain is the collection of objects being discussed.",
            "An interpretation connects names, functions, and predicates to that domain.",
            "Truth is then evaluated under that interpretation, not from the spelling of the symbols."
          ],
          "takeaway": "FOL separates the formal language from the world that interprets it—the same semantic wall introduced in propositional logic.",
          "question": "Does naming a predicate Taller guarantee that Taller(A,B) matches physical height?",
          "answer": "No. The intended meaning must be supplied by the interpretation; the symbol’s name is only a mnemonic."
        }
      },
      {
        "title": "Quantifier scope changes the meaning",
        "body": "<div class=\"formula\">∀x ∃y A(x,y) &nbsp; ≠ &nbsp; ∃y ∀x A(x,y)</div><p>If A(x,y) means “x attracts y,” the first formula says everything attracts something, possibly a different object for each x. The second says one object is attracted by everything.</p><p>Likewise, “everything is attracted by something” is ∀y∃x A(x,y); “something attracts everything” is ∃x∀y A(x,y). Always check argument direction and quantifier scope separately.</p>",
        "question": "Everyone has a favorite book. Does that mean there is one book everyone favors?",
        "answer": "No. ∀x∃y Favorite(x,y) allows different choices. ∃y∀x Favorite(x,y) requires a shared book.",
        "teaching": {
          "title": "Everyone gets a snack versus one snack for everyone",
          "story": "“Every child has a favorite snack” is different from “there is one snack that every child favors.”",
          "steps": [
            "In the first sentence, ask each child separately. Ana may choose an apple and Ben a cracker.",
            "In the second, choose one snack first. That same snack must work for every child.",
            "For every is written ∀. There exists is written ∃. Their order controls who can depend on whom.",
            "Also check the direction of a relation: “x likes y” is not the same as “y likes x.”"
          ],
          "takeaway": "∀x∃y allows a different y for each x. ∃y∀x requires one y that works for all x.",
          "question": "Everyone has a parent. Does that mean one person is everyone’s parent?",
          "answer": "No. Different people can have different parents. The order of the quantifiers changes the claim."
        }
      },
      {
        "title": "Translate restrictions precisely",
        "body": "<p>“All students are clever”: <strong>∀x (Student(x)⇒Clever(x))</strong>. “Some student is clever”: <strong>∃x (Student(x)∧Clever(x))</strong>. Implication restricts a universal claim; conjunction supplies both required properties of an existential witness.</p><p>“Not all A are B”: <strong>∃x (A(x)∧¬B(x))</strong>. Negating a quantifier swaps ∀ and ∃ and negates its body.</p><p>“P and Q are not both true” means ¬(P∧Q), not ¬P∧¬Q. “Bert and Ernie are brothers” requires their relationship, not merely two independent unary claims.</p>",
        "question": "Translate “No person buys an expensive policy,” using Person, Policy, Expensive, and Buys.",
        "answer": "∀x∀y ((Person(x)∧Policy(y)∧Expensive(y))⇒¬Buys(x,y)). The universal restriction identifies the relevant people and policies.",
        "teaching": {
          "title": "All, some, and not all",
          "story": "Imagine a basket of fruit. “All apples are red” and “some apple is red” are different kinds of claims.",
          "steps": [
            "For “all apples are red,” inspect any object: if it is an apple, it must be red. Use implication.",
            "For “some apple is red,” find one object that is both an apple and red. Use AND.",
            "“Not all apples are red” means there is at least one apple that is not red.",
            "“Not both” means at least one fails. It does not require both to fail."
          ],
          "takeaway": "Universal restrictions usually read “if it belongs to this group, then…” Existential witnesses must actually have both required properties.",
          "question": "If not all apples are red, must every apple be non-red?",
          "answer": "No. You only need one non-red apple. Other apples may still be red."
        }
      },
      {
        "title": "Exactly one requires existence and uniqueness",
        "body": "<div class=\"formula\">∃x [P(x) ∧ ∀y(P(y)⇒y=x)]</div><p>Existence prevents zero witnesses; the universal equality condition prevents multiple distinct witnesses. For “exactly two,” require two distinct witnesses and state that every qualifying object equals one of them.</p><p>The lecture applies these ideas to enrollment and relational examples. Write the English meaning of each clause before trusting the final formula.</p>",
        "question": "Why does ∀x∀y ((P(x)∧P(y))⇒x=y) fail to say “exactly one P”?",
        "answer": "It says at most one. It is also true when no object satisfies P, so it does not assert existence.",
        "teaching": {
          "title": "Exactly one means two promises",
          "story": "You say there is exactly one cookie in the jar. What must be checked?",
          "steps": [
            "There is a cookie. This rules out an empty jar.",
            "There cannot be two different cookies. This rules out extras.",
            "Logic expresses the second promise by saying any qualifying object must be the same as the chosen one.",
            "For exactly two, name two different witnesses and rule out any third distinct one."
          ],
          "takeaway": "“At most one” allows zero. “Exactly one” needs existence and uniqueness.",
          "question": "A rule says no two different objects in the jar are cookies. Could the jar be empty?",
          "answer": "Yes. That rule says at most one cookie. You need an existence claim to say exactly one."
        }
      },
      {
        "title": "Equality and the first-order boundary",
        "body": "<p>Equality is a logical relation meaning two terms denote the same object. It supports uniqueness claims and definitions such as “there are exactly two.” It is stronger than two objects merely sharing one named property.</p><p><strong>First-order</strong> quantifiers range over objects. They do not range over predicate and function symbols. The lecture contrasts this with higher-order logic, which can quantify over properties or relations and is more expressive, but is harder to reason with effectively. Keep this boundary visible when translating English that says “every property” or “some relation.”</p>",
        "question": "Is ∀x∀y((Red(x)∧Red(y))⇒x=y) saying all red objects look alike or that there is at most one red object?",
        "answer": "It says there is at most one red object: any two red witnesses must denote the same object.",
        "teaching": {
          "title": "Same object is stronger than same feature",
          "story": "Two students may both wear red, but that does not make them the same student.",
          "steps": [
            "Predicates state properties or relations.",
            "Equality states that two terms point to one identical object.",
            "FOL lets x range over students, books, rooms, or other domain objects.",
            "Quantifying over the property Red itself would move beyond ordinary first-order quantification."
          ],
          "takeaway": "Use equality for identity and uniqueness. Know whether a variable ranges over objects or over properties before choosing a logic.",
          "question": "Can ordinary FOL write ∀P(P(A)⇔P(B)) with P treated as a quantified predicate variable?",
          "answer": "Not in the usual first-order syntax. Quantifying over predicates is a higher-order move."
        }
      },
      {
        "title": "Knowledge about changing situations",
        "body": "<p>The lecture introduces situations and action results to describe change. A fluent depends on a situation; an action takes an initial situation to a resulting one. The frame problem asks how to represent what stays unchanged.</p><p>Do not silently assume that absence from a knowledge base makes a proposition false. Closed-world reasoning is an extra modeling assumption; ordinary first-order semantics does not supply it automatically.</p><p><strong>Professor priority:</strong> the October 6 captions explicitly say to remember the seven propositional inference rules for the next exam rather than expect them to be supplied. Practice applying the course’s rule sheet.</p>",
        "question": "If a knowledge base does not contain Likes(Ana,Tea), can ordinary first-order logic conclude its negation?",
        "answer": "No. The relationship may be true in some compatible models and false in others. Missing knowledge is not automatically negative knowledge.",
        "teaching": {
          "title": "Keep track of what changes",
          "story": "A robot is holding a toy. It puts the toy down. You need to describe before and after without accidentally changing every other fact.",
          "steps": [
            "A situation represents a stage in the story.",
            "An action takes one situation to another.",
            "Some facts change, such as whether the robot holds the toy. Others stay the same.",
            "The frame problem asks how to describe what stays unchanged without writing an endless list."
          ],
          "takeaway": "Reasoning about actions needs time or situation information. Also, missing a fact in the notebook does not automatically make it false.",
          "question": "The notebook never says Ana likes tea. Can ordinary first-order logic conclude she does not like tea?",
          "answer": "No. It may simply be unknown. “Not recorded” and “false” are different."
        }
      },
      {
        "title": "Entailment checks: explain the set relationship",
        "body": "<p>False entails True because the empty model set is a subset of every model set. True does not entail False. A∧B entails A↔B, but the converse fails when both are false.</p><div class=\"formula\">KB ⊨ α ⇔ (KB⇒α) is valid ⇔ KB∧¬α is unsatisfiable</div><p>Use these equivalent tests to verify a conclusion. “Not valid” is different from “unsatisfiable”: a sentence may be true in some models and false in others.</p>",
        "question": "Give a formula that is satisfiable but not valid, and explain both properties.",
        "answer": "P is true in interpretations where P=true, so it is satisfiable. It is false where P=false, so it is not valid.",
        "teaching": {
          "title": "Try to find a world that breaks the claim",
          "story": "To test whether a conclusion must follow, try to make all the starting facts true and the conclusion false.",
          "steps": [
            "If you find such a case, the guarantee fails. That case is a countermodel.",
            "If no such case exists, the conclusion is entailed.",
            "A valid formula is true in every interpretation. A satisfiable formula only needs one interpretation where it is true.",
            "A formula can be satisfiable without being valid."
          ],
          "takeaway": "“True somewhere,” “true everywhere,” and “true whenever these premises are true” are three different ideas.",
          "question": "Is “the light is on” satisfiable? Is it automatically valid?",
          "answer": "It is satisfiable because the light could be on. It is not automatically valid because it could also be off."
        }
      }
    ],
    "week": 7,
    "source": "Week 7 lecture captions · October 6, 2026 · 11-12-FO-Logic.pptx · wk7-FOLogic.pptx · wk7-P-Logic.pptx"
  },
  {
    "id": 8,
    "week": 8,
    "date": "Oct 13, 2026",
    "unit": "Logic",
    "title": "First-order inference & resolution",
    "desc": "Build proofs with unification and resolution, then study Russell’s paradox and the limits of proof search.",
    "map": "proof → quantifier rules → unification → GMP → chaining → Russell’s paradox → completeness → resolution → CNF",
    "boundary": "Week 8 continues the October 6 first-order logic lecture. Coverage is cross-checked against the October 13 captions, the full 13-14 FOL-Inference deck, and the Week 8 discussion deck. Worked examples are reconstructed from the supplied sources, with formal clarifications labeled separately. The paradox slides are motivation about naive self-referential set formation; they are not a claim that ordinary FOL itself is inconsistent. No new exam date is supplied.",
    "source": "Week 8 lecture captions · October 13, 2026 · 13-14-FOL-Inference.pptx · wk8-inference.pptx",
    "sections": [
      {
        "title": "A proof is a path through legal inference steps",
        "body": "<p>Start with sentences in KB, apply valid inference rules, and reach the target α. The lecture compares this to search: KB is the starting point, rule applications are actions, and the derivation is the path.</p><p>Soundness means every derived sentence is entailed. Completeness means every entailed sentence has a derivation. Ten available rule types do not imply ten possible next steps: each rule may apply to many sentences and substitutions.</p><p><strong>Professor priority:</strong> memorize the seven propositional inference rules and practice the lecture examples as questions before inspecting solutions. For resolution answers, show the two parent clauses and their resolvent at each step.</p>",
        "question": "Why can proof search branch widely even when the rule inventory is small?",
        "answer": "Each rule can be applied to different premises and many different term substitutions. The number of rule types is not the branching factor.",
        "teaching": {
          "title": "Build a bridge from facts to an answer",
          "story": "A proof is like stepping across a stream on approved stepping stones. You cannot jump to a conclusion just because it feels right.",
          "steps": [
            "Start on the facts you were given.",
            "Each new line must follow from earlier lines using an allowed rule.",
            "Keep going until you reach the statement you wanted.",
            "Write why each step is allowed. That chain is the proof."
          ],
          "takeaway": "A proof is an explained route from premises to a conclusion. The lecture treats finding that route as a search problem.",
          "question": "If you write the right final answer but cannot justify the steps, have you shown a proof?",
          "answer": "No. The route matters. Each new claim needs support from the premises or a valid rule."
        }
      },
      {
        "title": "Three quantifier rules, with restrictions",
        "body": "<div class=\"formula\">Universal elimination: ∀x P(x) ⟹ P(t)<br>Existential witness: ∃x P(x) ⟹ P(k), with fresh k<br>Existential introduction: P(t) ⟹ ∃x P(x)</div><p>Universal elimination instantiates a universally quantified variable with an appropriate term. A fresh existential witness names an unspecified object; it does not identify that object with an already named individual. In a formal existential-elimination proof, the fresh witness must not escape into the final conclusion.</p><p><strong>Formal clarification:</strong> when existential witnesses depend on surrounding universal variables during clause conversion, use fresh Skolem functions. Do not replace every existential variable with one arbitrary old constant.</p>",
        "question": "From ∃x Student(x), can you conclude Student(Bob)? Explain how to name a witness safely.",
        "answer": "No. The student need not be Bob. Introduce a fresh witness k and reason with Student(k), respecting witness restrictions; do not assert that k is Bob.",
        "teaching": {
          "title": "Use “all” and “someone” carefully",
          "story": "“Every puppy is an animal” lets you talk about a particular puppy. “Someone ate a cookie” does not tell you that it was Ana.",
          "steps": [
            "From “all puppies are animals,” you may instantiate the rule for Fido.",
            "From “someone ate a cookie,” give the unknown eater a fresh temporary name. Do not secretly choose an already named person.",
            "From “Ana ate a cookie,” you can say “someone ate a cookie.”",
            "These are the ideas behind universal elimination, existential witnesses, and existential introduction."
          ],
          "takeaway": "All lets you choose an instance. Someone promises a witness without telling you who it is.",
          "question": "Someone has a red hat. Can you conclude Bob has a red hat?",
          "answer": "No. It could be someone else. You may name an unspecified witness, but you may not assume it is Bob."
        }
      },
      {
        "title": "Unification: one consistent substitution",
        "body": "<p>Unification finds a substitution θ that makes expressions identical so an inference rule can apply. Substitute variables, preserving predicate/function symbols, constants, argument order, and repeated-variable consistency.</p><div class=\"table-wrap\"><table><tr><th>Expressions</th><th>Result</th></tr><tr><td>Knows(John,x), Knows(John,Jane)</td><td>{x↦Jane}</td></tr><tr><td>Knows(John,x), Knows(y,Mother(y))</td><td>{y↦John, x↦Mother(John)}</td></tr><tr><td>Sells(Bob,x), Sells(x,Coke)</td><td>Fails if x is the same variable and Bob/Coke are distinct constant symbols</td></tr><tr><td>Sells(Bob,x), Sells(y,Coke)</td><td>{y↦Bob, x↦Coke}</td></tr></table></div><p>Standardize independent rule variables apart before matching. Two occurrences of one variable in the same expression must receive the same substitution.</p><p><strong>Formal clarification:</strong> the occurs check rejects x↦Father(x) for ordinary finite first-order terms. Unification is syntactic matching, not a claim that different constant symbols denote different objects in every interpretation.</p><p class=\"source-info\">Formal clarification reference: <a href=\"https://aima.eecs.berkeley.edu/4th-ed/pdfs/newchap09.pdf\">AIMA, Inference in First-Order Logic</a>.</p>",
        "question": "Unify P(x,x) with P(A,B), treating A and B as distinct constant symbols. Then try P(x,y).",
        "answer": "The first fails: x would need to be both A and B syntactically. The second succeeds with {x↦A,y↦B}.",
        "teaching": {
          "title": "Fill the blanks so two patterns match",
          "story": "One card says “John knows ___.” Another says “John knows Jane.” What belongs in the blank?",
          "steps": [
            "Put Jane in the blank. Now the two cards say exactly the same thing.",
            "A substitution is a list of these replacements, such as x ↦ Jane.",
            "Use one replacement consistently everywhere that variable appears.",
            "You may fill variable blanks, but cannot rewrite fixed names or the relation just to force a match."
          ],
          "takeaway": "Unification finds consistent replacements that make patterns identical. We need it so facts can fit a rule’s conditions.",
          "question": "Can “x likes x” match “Ana likes Ben” if Ana and Ben are different constant symbols?",
          "answer": "No. The same blank x would need two different replacements. “x likes y” can match with x ↦ Ana and y ↦ Ben."
        }
      },
      {
        "title": "Generalized modus ponens: match all premises together",
        "body": "<p>Given facts matching p₁,…,pₙ and a rule (p₁∧…∧pₙ)⇒q, find one compatible substitution θ for every premise. Then derive qθ. Do not select incompatible substitutions independently for different premises.</p><p>The lecture’s animal-speed example combines Buffalo(Bob), Pig(Pat), and a rule saying buffalo outrun pigs. Substituting x↦Bob and y↦Pat yields Faster(Bob,Pat).</p><p>Why is this sound? Instantiate the universally quantified rule, combine its satisfied premises, and apply ordinary modus ponens. Each step preserves entailment.</p>",
        "question": "Given Parent(Ana,Ben), Parent(Ben,Cara), and Parent(x,y)∧Parent(y,z)⇒Grandparent(x,z), give the substitution and conclusion.",
        "answer": "θ={x↦Ana,y↦Ben,z↦Cara}; derive Grandparent(Ana,Cara). Both premises must use the same binding for y. This is a constructed study example.",
        "teaching": {
          "title": "Make every piece of a rule fit",
          "story": "A rule says: if a creature is a buffalo and another is a pig, the buffalo is faster. You know Bob is a buffalo and Pat is a pig.",
          "steps": [
            "The first condition fits Bob. Replace its creature variable with Bob.",
            "The second condition fits Pat. Replace its variable with Pat.",
            "Apply those same replacements to the conclusion.",
            "Now the conclusion says Bob is faster than Pat. This is generalized modus ponens."
          ],
          "takeaway": "Match all conditions with one compatible set of replacements. Then carry those replacements into the answer.",
          "question": "The rule is Parent(x,y) AND Parent(y,z) → Grandparent(x,z). Why must the two y slots agree?",
          "answer": "They describe the same middle person. You cannot connect two unrelated parent facts by changing y halfway through."
        }
      },
      {
        "title": "Forward and backward chaining",
        "body": "<p><strong>Forward:</strong> begin with known facts and fire rules to derive new facts. <strong>Backward:</strong> begin with a query, find rule conclusions that unify with it, then try to establish those rules’ premises as subgoals. Backward chaining does not reverse an implication into a new factual rule.</p><p>Lecture reconstruction: Buffalo(Bob), Pig(Pat), Slug(Steve), buffalo-faster-than-pig and pig-faster-than-slug rules, plus transitivity, support Faster(Bob,Steve). Forward chaining derives intermediate speed facts. Backward chaining starts from the target and seeks supporting subgoals.</p><p>Backward search is goal-focused; this does not guarantee faster termination. Recursive rules and infinitely many terms can cause nontermination.</p>",
        "question": "If P⇒Q and your goal is Q, what does backward chaining ask? Does observing Q prove P?",
        "answer": "It asks whether P can be established as a sufficient route to Q. Q by itself does not prove P; other routes to Q may exist.",
        "teaching": {
          "title": "Walk forward from clues or backward from a question",
          "story": "You want to know whether Bob is faster than Steve. There are facts about buffalo, pigs, and slugs, plus speed rules.",
          "steps": [
            "Forward chaining starts with known facts and makes more facts: Bob is faster than Pat; Pat is faster than Steve; then Bob is faster than Steve.",
            "Backward chaining starts with the question: what rule could prove this?",
            "It turns the rule’s conditions into smaller questions and tries to answer those.",
            "Backward chaining seeks supporting premises. It does not claim a conclusion proves its own cause."
          ],
          "takeaway": "Forward asks “what can these facts give me?” Backward asks “what facts would be enough to prove this goal?”",
          "question": "To prove WetGround using Rain → WetGround, what subgoal would backward chaining try?",
          "answer": "Rain. If it can prove Rain, that rule proves WetGround. WetGround alone does not prove Rain."
        }
      },
      {
        "title": "Where Horn-rule chaining stops",
        "body": "<p>Definite clauses have an atomic conclusion and a conjunction of positive atomic premises. Generalized-modus-ponens chaining is suited to these knowledge bases; it is not a complete method for arbitrary first-order sentences.</p><p>Lecture case-analysis pattern: P⇒H, ¬P⇒E, H⇒R, E⇒R. Classically R follows because either P or ¬P holds. A positive-fact chaining engine with neither P nor ¬P initially established cannot simply fire its way to R.</p><p><strong>Formal clarification:</strong> a Horn clause has at most one positive literal; a definite clause has exactly one. The negative antecedent in ¬P⇒E becomes P∨E, which is not Horn. Fair search and the permitted query language matter when stating completeness for chaining.</p>",
        "question": "Why is “chaining is incomplete for arbitrary first-order logic” compatible with completeness results for definite-clause reasoning?",
        "answer": "The results concern different classes of knowledge bases and queries. A method can be complete on a restricted class without covering every first-order theory.",
        "teaching": {
          "title": "Some answers need “either way” reasoning",
          "story": "Suppose the rules say: if you have a PhD, one route makes you rich; if you do not, another route makes you rich. You do not know which starting case holds.",
          "steps": [
            "Imagine the PhD case. Following its rules reaches rich.",
            "Imagine the no-PhD case. Its rules also reach rich.",
            "So rich follows either way.",
            "A simple positive-fact rule engine may get stuck if it cannot establish either starting condition. Its usual rule format does not cover every kind of logic."
          ],
          "takeaway": "A method can be powerful within a limited rule format and still miss conclusions outside that format. This motivates resolution.",
          "question": "If both possible starting cases lead to R, do you need to know which case holds to conclude R?",
          "answer": "No, if the cases cover all possibilities and each implies R. This is reasoning by cases."
        }
      },
      {
        "title": "Russell’s paradox: self-reference plus negation",
        "body": "<p>The October 13 slide deck takes a field trip to <strong>Russell’s paradox</strong>. In naive set theory, define R as the set of every set that is <em>not</em> a member of itself:</p><div class=\"formula\">R = {x | x ∉ x}</div><p>Now ask whether R∈R. If R is a member of itself, then by its defining condition it must not be. If it is not a member of itself, then it satisfies the condition and must be included. Either assumption flips to its negation.</p><p>The slides’ librarian version is easier to picture: some library catalogs list themselves. A master catalog is supposed to list exactly those catalogs that do <em>not</em> list themselves. Should the master catalog list itself? Either answer produces the opposite answer.</p><p><strong>Boundary:</strong> this paradox exposes unrestricted set construction in naive set theory. Modern axiomatic set theories restrict comprehension to avoid forming R. It is a warning about self-reference and negation, not a demonstration that every ordinary FOL knowledge base is contradictory.</p>",
        "question": "In the librarian story, what happens if the master catalog lists itself, and what happens if it does not?",
        "answer": "If it lists itself, it violates its rule to list only catalogs that do not list themselves. If it does not, it meets that rule and therefore should list itself. Each choice reverses itself.",
        "teaching": {
          "title": "Russell’s paradox: the catalog that cannot classify itself",
          "story": "Russell’s paradox is the lecture’s example of how self-reference plus negation can create a contradiction. Picture a master catalog that lists every catalog that does not list itself. Now it must classify itself.",
          "steps": [
            "Formal version: let R contain exactly the sets that are not members of themselves. This unrestricted definition makes R talk about its own membership.",
            "Assume R contains itself. Then R fails its own entry rule, so R must not contain itself.",
            "Assume R does not contain itself. Then R satisfies its entry rule, so R must contain itself.",
            "The catalog story has the same structure: either answer forces the opposite answer.",
            "The lesson is not that every use of first-order logic is inconsistent. The problem is unrestricted self-referential set construction, which modern axiomatic set theories restrict."
          ],
          "takeaway": "Russell’s paradox combines unrestricted collection-building, self-reference, and negation: R∈R if and only if R∉R. The lecture uses it to motivate care about the foundations, expressiveness, and limits of logical systems.",
          "question": "What creates Russell’s paradox: the collection’s size, or the rule it uses to classify itself?",
          "answer": "The rule. It classifies objects by non-self-membership and then applies that same rule to the collection itself, making either answer reverse itself."
        }
      },
      {
        "title": "Completeness is not the same as decidability",
        "body": "<p>The deck distinguishes three claims. First, generalized modus ponens is incomplete for arbitrary FOL because not every sentence can be expressed as a definite Horn clause. Second, Gödel’s <strong>completeness theorem</strong> says that if a first-order sentence is semantically entailed, there is a formal proof in a complete proof system. Third, FOL entailment is only <strong>semi-decidable</strong>.</p><p>Operationally, a fair complete proof search will eventually find a proof when KB⊨α. When KB⊭α, however, a proof search is not guaranteed to halt and say “no”; it may continue exploring an infinite space of terms and derivations. Resolution is refutation-complete, but a particular naive search order can still starve the needed steps, so fairness matters.</p><p>Do not confuse the FOL completeness theorem with Gödel’s later incompleteness theorems about sufficiently strong, effectively axiomatized theories of arithmetic. They answer different questions.</p>",
        "question": "A complete resolution prover has searched for an hour without finding a contradiction. Has it proved that the query is not entailed?",
        "answer": "No. If the query is entailed, fair search will eventually find a refutation; if it is not entailed, the search may run forever. Time without a proof is not a countermodel.",
        "teaching": {
          "title": "Guaranteed to find yes does not mean guaranteed to finish on no",
          "story": "A maze-search procedure promises that if a marked room is reachable, it will eventually find a route. The maze may be infinite.",
          "steps": [
            "If a proof exists, completeness says the formal system has a route to it.",
            "A fair search must eventually explore the steps on that route.",
            "If no proof exists, an infinite search space may give the procedure endlessly more places to look.",
            "So proof existence and guaranteed yes/no termination are different properties."
          ],
          "takeaway": "Complete means no entailed conclusion is beyond proof. Decidable means every input receives a terminating yes/no answer. FOL entailment has the first property, not the second.",
          "question": "What evidence can decisively show non-entailment when you can construct it?",
          "answer": "A countermodel: an interpretation in which KB is true and the proposed conclusion is false."
        }
      },
      {
        "title": "Resolution refutation: add the negated goal",
        "body": "<div class=\"formula\">KB ⊨ α ⇔ KB ∧ ¬α is unsatisfiable<br>(L ∨ C), (¬L′ ∨ D) ⟹ (C ∨ D)θ when Lθ=L′θ</div><p>Negate the query, combine it with KB, convert to clauses, and resolve complementary literals using compatible substitutions. Deriving the empty clause □ proves contradiction and therefore the original entailment.</p><p><strong>Formal clarification:</strong> first-order resolution is refutation-complete with the required machinery, including factoring and a fair search strategy. A naive search may run forever when no refutation exists. Completeness does not mean every query has a terminating yes/no test.</p><p class=\"source-info\">Formal clarification reference: <a href=\"https://airr.mit.edu/_static/fall23/lectures/lec22/L22-FOL-Proof.pdf\">MIT, First-order Logic Proof</a>.</p>",
        "question": "What must you add to prove Parent(Art,Jon) by refutation? If no contradiction has appeared after five steps, is the query disproved?",
        "answer": "Add ¬Parent(Art,Jon). Five unsuccessful steps do not disprove entailment; the search may not yet have reached a refutation.",
        "teaching": {
          "title": "Try the opposite and see whether it breaks",
          "story": "You believe a conclusion must follow. Temporarily pretend the opposite is true. Can that pretend world obey all your facts?",
          "steps": [
            "Keep the original facts.",
            "Add the opposite of the conclusion. This is the negated goal.",
            "Use valid steps to look for a contradiction.",
            "If the facts force both a statement and its opposite, the pretend world cannot exist. So the original conclusion follows."
          ],
          "takeaway": "Resolution refutation proves a goal by showing that its opposite cannot coexist with the facts. It can take a long search; failure to finish is not proof of failure.",
          "question": "To prove “Josephine eats fish,” what do you temporarily add?",
          "answer": "“Josephine does not eat fish.” You then look for a contradiction using that assumption and the original facts."
        }
      },
      {
        "title": "Worked resolution: a cat eats fish",
        "body": "<p>The lecture uses a cat, a food preference, and an eating rule. This reconstruction makes the clauses and substitutions explicit:</p><ol><li>¬Cat(x) ∨ Likes(x,Fish)</li><li>¬Cat(y) ∨ ¬Likes(y,z) ∨ Eats(y,z)</li><li>Cat(Josephine)</li><li>¬Eats(Josephine,Fish) — negated query</li></ol><p>Resolve (2),(4), θ={y↦Josephine,z↦Fish}: <strong>¬Cat(Josephine)∨¬Likes(Josephine,Fish)</strong> (5). Resolve (5),(3): <strong>¬Likes(Josephine,Fish)</strong> (6). Resolve (1),(6), θ={x↦Josephine}: <strong>¬Cat(Josephine)</strong> (7). Resolve (7),(3): <strong>□</strong>.</p><p>Each line records two parents, complementary literals, and the remaining clause. This is the written format the professor recommends when drawing a proof tree is cumbersome.</p>",
        "question": "Rebuild the proof without looking. Which query was negated, and where does the final contradiction occur?",
        "answer": "The query is Eats(Josephine,Fish). Its negation is clause 4. The final pair is ¬Cat(Josephine) and Cat(Josephine), producing the empty clause.",
        "teaching": {
          "title": "Follow the cat story before reading the symbols",
          "story": "Here are three facts and rules: Josephine is a cat. Cats like fish. Cats eat what they like. We want to prove Josephine eats fish.",
          "steps": [
            "Josephine is a cat, so the first rule tells us she likes fish.",
            "She is a cat and likes fish, so the eating rule tells us she eats fish.",
            "For a refutation, temporarily add “Josephine does not eat fish.”",
            "Now the rules force “eats fish” while the temporary assumption says “does not eat fish.” That impossible pair proves the goal."
          ],
          "takeaway": "The symbols below tell the same story in clauses. An empty clause, written □, marks that the attempted opposite has hit a contradiction.",
          "question": "Without symbols: why does the temporary “does not eat fish” assumption fail?",
          "answer": "The original facts and rules already force Josephine to eat fish. The assumption cannot be true alongside them."
        }
      },
      {
        "title": "CNF conversion: preserve scope and dependencies",
        "body": "<ol><li>Eliminate ⇒ and ⇔.</li><li>Move negations inward, using De Morgan’s laws and swapping quantifiers under negation.</li><li>Standardize bound variables so independent quantifiers use different names.</li><li>Skolemize existential variables with fresh constants or functions of the universal variables in scope.</li><li>Drop remaining universal quantifiers, treating clause variables as implicitly universal.</li><li>Distribute ∨ over ∧.</li><li>Separate the conjunction into clauses; standardize variables apart when clauses are reused.</li></ol><p>The lecture emphasizes Skolem dependencies: ∀x∃y R(x,y) becomes R(x,f(x)), not R(x,k) with one fixed witness. In contrast, ∃y∀x R(x,y) uses a fresh constant k.</p><p><strong>Formal clarification:</strong> Skolemization preserves satisfiability with fresh symbols; it is not ordinary logical equivalence in the original vocabulary. This is sufficient for refutation.</p><p class=\"source-info\">Formal clarification reference: <a href=\"https://www.cs.cmu.edu/~mheule/15311-s26/slides/resolution.pdf\">CMU, Logic and Mechanized Reasoning</a>.</p>",
        "question": "Skolemize ∀x∀z∃y Helps(y,x,z). What are the arguments of the fresh function?",
        "answer": "Helps(f(x,z),x,z), with x and z implicitly universal afterward. The witness may depend on both universally quantified variables in its scope.",
        "teaching": {
          "title": "Put every sentence into the same box shape",
          "story": "Imagine a sorting machine that only accepts rows of OR choices, with AND between rows. Logic’s resolution machine wants sentences in that shape: CNF.",
          "steps": [
            "Replace “if P then Q” with “not P or Q.” They rule out the same bad case.",
            "Push NOT inward. “Not everyone” becomes “someone not”; “not someone” becomes “everyone not.”",
            "Give unrelated blanks different names so they do not accidentally become linked.",
            "Replace “someone” with a fresh witness name or a witness function when the choice can depend on other objects.",
            "Leave the remaining “for every” understood, distribute OR across AND, and separate the clauses."
          ],
          "takeaway": "CNF conversion prepares sentences for resolution. A witness function means “the chosen witness for this input,” not a known arithmetic formula.",
          "question": "Everyone has a helper. Why might the helper be written helperOf(x) rather than one fixed name?",
          "answer": "Different people may have different helpers. The witness can depend on the person x. One fixed name would impose a shared helper."
        }
      },
      {
        "title": "Worked CNF: everyone who loves all animals",
        "body": "<p>Lecture sentence: everyone who loves all animals is loved by someone. Let Loves(a,b) mean a loves b:</p><div class=\"formula\">∀x [(∀y (Animal(y)⇒Loves(x,y))) ⇒ ∃z Loves(z,x)]</div><p>Eliminate implications and push negation inward:</p><div class=\"formula\">∀x [(∃y (Animal(y)∧¬Loves(x,y))) ∨ ∃z Loves(z,x)]</div><p>Use independent fresh functions f(x), g(x), then distribute:</p><div class=\"formula\">Animal(f(x)) ∨ Loves(g(x),x)<br>¬Loves(x,f(x)) ∨ Loves(g(x),x)</div><p>These clauses form an equisatisfiable Skolemized representation. Keeping y and z distinct avoids conflating an animal with the person who loves x.</p>",
        "question": "Why does negating “x loves all animals” produce an existential claim with a conjunction?",
        "answer": "¬∀y(Animal(y)⇒Loves(x,y)) ≡ ∃y(Animal(y)∧¬Loves(x,y)): there is an animal x does not love.",
        "teaching": {
          "title": "Unpack a sentence inside a sentence",
          "story": "“Everyone who loves all animals is loved by someone.” Read it about one person, Ana, before trying to convert it.",
          "steps": [
            "The condition is: Ana loves every animal.",
            "The result is: at least one person loves Ana. The sentence does not tell us who.",
            "For Ana to fail the condition, there must be an animal Ana does not love.",
            "So the whole statement allows either an animal Ana does not love, or someone who loves Ana. The formal conversion organizes those possibilities into clauses."
          ],
          "takeaway": "First separate the condition and result. Then track which objects may vary from person to person. The animals and the admirers are different roles.",
          "question": "What would show that Ana does NOT love all animals?",
          "answer": "One animal Ana does not love. You do not need to show she dislikes every animal."
        }
      },
      {
        "title": "English stories: translate, then prove",
        "body": "<p>The lecture also discusses ancestry, animal lovers and a cat’s killer, and a ski/mountaineering club. The reusable method is: define predicate argument order, translate every premise and the target, negate the target for resolution, convert to clauses, then track substitutions through the proof.</p><p>Club reconstruction: every member is a skier or climber (possibly both); skiers like snow; Alan dislikes what Tony likes; Tony likes snow; Alan is a member. Alan therefore does not like snow. A skier would like snow, so Alan cannot be a skier; the member disjunction forces Alan to be a climber.</p><p>“Dislikes” is represented here as explicit ¬Likes, following the lecture exercise. It is not inferred from missing knowledge. To answer “who?”, retain the witness binding rather than reporting only that someone exists.</p>",
        "question": "Write the member rule and the skier/snow rule, then state the witness for “a climber who is not a skier.”",
        "answer": "∀x(Member(x)⇒(Skier(x)∨Climber(x))); ∀x(Skier(x)⇒Likes(x,Snow)). Together with the reconstructed facts and negative preference, Alan is a witness: Climber(Alan)∧¬Skier(Alan).",
        "teaching": {
          "title": "Solve the story with a short chain",
          "story": "Alan belongs to a club. Every member skis or climbs, or both. Skiers like snow. Tony likes snow, and Alan does not like what Tony likes.",
          "steps": [
            "Tony likes snow, so Alan does not like snow.",
            "If Alan were a skier, the skier rule would force him to like snow.",
            "That clashes with what we know, so Alan is not a skier.",
            "Alan is a member, so he must ski or climb. Skiing is ruled out; climbing remains."
          ],
          "takeaway": "Translate the story carefully, then connect one small conclusion at a time. Alan is the person who climbs but does not ski in this example.",
          "question": "Why does knowing Alan is not a skier help us conclude he climbs?",
          "answer": "Because he is a member, and every member is a skier or climber. Once one option is ruled out, the other must hold."
        }
      },
      {
        "title": "Why contradiction trivializes classical entailment",
        "body": "<p>If KB contains P and ¬P, no model satisfies all of KB. Thus M(KB)=∅, a subset of the model set of any sentence α. In classical logic an inconsistent knowledge base therefore entails every sentence.</p><p>The lecture closes with this warning about contradictory premises. Distinguish a contradiction already in KB from a contradiction obtained after deliberately adding ¬α to a consistent KB for a proof.</p><p><strong>Study boundary:</strong> the lecture’s paradox/completeness discussion provides motivation. It does not establish that every mathematical truth is decidable, or that every true arithmetic statement is provable in one fixed formal theory.</p>",
        "question": "Why is deriving □ from KB∪{¬α} useful, while deriving □ from KB alone is a problem?",
        "answer": "The first can show α follows from KB by refutation. The second shows KB itself is inconsistent; classically it then entails every query and cannot discriminate conclusions.",
        "teaching": {
          "title": "Why the original facts must fit together",
          "story": "Your rule book says a light is on and the same light is not on at the same time, in the same sense. No ordinary true/false world obeys both.",
          "steps": [
            "A contradiction inside the original facts means there is no possible world satisfying the whole rule book.",
            "Classical entailment checks all worlds satisfying those facts. Here there are none.",
            "That makes every conclusion follow in the technical classical sense, which stops the rule book from distinguishing useful answers.",
            "In a refutation, the contradiction is useful because you deliberately added the opposite of a goal. A contradiction already in the original notebook is a different problem."
          ],
          "takeaway": "Keep your starting facts consistent. For proof by contradiction, say exactly which temporary assumption created the impossible situation.",
          "question": "Why is a contradiction after adding “not the goal” useful, but one already in the starting facts troublesome?",
          "answer": "The first can rule out the temporary opposite and prove the goal. The second means the original facts already have no model, so classical entailment becomes uninformative."
        }
      }
    ]
  }
];
