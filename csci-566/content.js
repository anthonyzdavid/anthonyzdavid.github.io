const lectures = [
  {
    "id": 0,
    "week": "START",
    "date": "Concept bridge",
    "unit": "Foundations",
    "title": "First: what are all these things?",
    "desc": "Connect the words before learning the machinery.",
    "source": "Week 1 and Week 4 course notebooks; supplemental architecture explanations linked below.",
    "boundary": "This is a beginner bridge, not an additional recorded lecture. It introduces relationships that earlier notebooks assumed. Simplified stories are teaching aids.",
    "map": "A transformer and an LLM can be the same model → The design is not the learned knowledge → A chat app has more parts than its model → Training is practice; inference is using the skill",
    "sections": [
      {
        "title": "A transformer and an LLM can be the same model",
        "body": "<p>Architecture, training objective, learned parameters, and application are different descriptions. The original transformer is an attention-based sequence architecture; language modeling is a task it can support. <a href=\"https://papers.neurips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html\">Original transformer paper</a>.</p>",
        "question": "If a large language model uses transformer blocks, is it a transformer or an LLM?",
        "answer": "Both. Those words describe different aspects of the same model.",
        "teaching": {
          "title": "A transformer and an LLM can be the same model",
          "story": "Think of a vehicle. “Electric” tells you about its machinery. “Delivery van” tells you its job. A van can be electric. These are not two competing objects.",
          "steps": [
            "A neural network is a model made of connected numerical operations with adjustable weights.",
            "An architecture is the design of those operations: what connects to what. Transformer is one architecture family.",
            "A language model learns patterns in language. An LLM is a large language model. That name describes its language-model role and scale.",
            "Many LLMs use transformer architecture. So one trained model can be BOTH a transformer and an LLM.",
            "Transformers can also be used for images and other data. Transformer does not automatically mean language model."
          ],
          "takeaway": "Transformer tells you how a model is built. LLM tells you it is a large model for language. The categories overlap.",
          "question": "If a large language model uses transformer blocks, is it a transformer or an LLM?",
          "answer": "Both. Those words describe different aspects of the same model."
        }
      },
      {
        "title": "The design is not the learned knowledge",
        "body": "<p>A model may refer to a parameterized function or a particular trained instance. Distinguish architecture from weights when comparing models.</p>",
        "question": "Two networks have identical layer shapes but were trained on different data. Must their predictions match?",
        "answer": "No. Their learned weights can differ even though their architecture matches.",
        "teaching": {
          "title": "The design is not the learned knowledge",
          "story": "Two students can use the same blank workbook and end up knowing different things. The workbook’s layout is not the learning inside it.",
          "steps": [
            "Architecture is the layout: layers, connections, and kinds of operations.",
            "Parameters are the numbers inside those operations. Weights and biases are common parameters.",
            "Training adjusts those numbers using examples and feedback.",
            "A checkpoint saves a particular set of learned numbers. Two models with the same architecture can have different checkpoints and abilities."
          ],
          "takeaway": "Same design does not mean same trained model. Training changes the parameter values.",
          "question": "Two networks have identical layer shapes but were trained on different data. Must their predictions match?",
          "answer": "No. Their learned weights can differ even though their architecture matches."
        }
      },
      {
        "title": "A chat app has more parts than its model",
        "body": "<p>The Week 1 notebook distinguishes a basic model, an aligned assistant, and an agent harness. Retrieval supplies context; it is not itself a weight update.</p>",
        "question": "If an app searches a database before answering, did the model’s weights necessarily change?",
        "answer": "No. The app can fetch information and place it in the input without retraining the model.",
        "teaching": {
          "title": "A chat app has more parts than its model",
          "story": "A kitchen contains a stove, but the whole restaurant is more than the stove. A chat product contains a model, but also things around it.",
          "steps": [
            "The model turns input representations into output predictions.",
            "A chat system prepares messages and uses the model to produce replies.",
            "An application may add instructions, retrieval, memory, tools, permissions, and a user interface.",
            "An agent system can repeat a loop: choose a step, use a tool, inspect the result, and choose again."
          ],
          "takeaway": "Model, assistant, and agent are related words, but they describe different layers of a system.",
          "question": "If an app searches a database before answering, did the model’s weights necessarily change?",
          "answer": "No. The app can fetch information and place it in the input without retraining the model."
        }
      },
      {
        "title": "Training is practice; inference is using the skill",
        "body": "<p>Forward propagation occurs during both training and inference. Backpropagation and parameter updates are part of ordinary gradient-based training, not ordinary prediction.</p>",
        "question": "A model answers your message. Does that single forward pass normally retrain its weights?",
        "answer": "No. Running the model is inference. Weight training is a separate operation.",
        "teaching": {
          "title": "Training is practice; inference is using the skill",
          "story": "You practice arithmetic with answers and corrections. Later, during a quiz, you use what you learned.",
          "steps": [
            "Training makes a prediction on an example.",
            "A loss measures how bad that prediction was.",
            "An optimizer changes trainable parameters using feedback.",
            "Inference uses the current learned parameters to predict. Ordinary inference does not update them."
          ],
          "takeaway": "Training changes the model’s learned numbers. Inference runs the model with the numbers it currently has.",
          "question": "A model answers your message. Does that single forward pass normally retrain its weights?",
          "answer": "No. Running the model is inference. Weight training is a separate operation."
        }
      },
      {
        "title": "Words become numbers before the network sees them",
        "body": "<p>A conceptual bridge beyond the introductory caption detail: tokenization maps text to discrete units; embeddings supply learned numerical representations. BERT demonstrates transformer-based language pretraining with a different objective from ordinary left-to-right next-token prediction. <a href=\"https://arxiv.org/abs/1810.04805\">BERT paper</a>.</p>",
        "question": "Must one token equal one whole word?",
        "answer": "No. A token can be a word piece, punctuation, or another unit defined by the tokenizer.",
        "teaching": {
          "title": "Words become numbers before the network sees them",
          "story": "A computer cannot multiply a word like “cat” directly. It needs a numerical representation.",
          "steps": [
            "A tokenizer breaks text into tokens, often word pieces rather than whole words.",
            "Token IDs identify those pieces. An embedding maps an ID into a vector: a list of numbers.",
            "The network transforms those vectors into new representations.",
            "An autoregressive language model scores possible next tokens, chooses one, appends it, and repeats.",
            "This describes a common generative setup. Not every transformer uses that same training objective; BERT uses masked-language pretraining."
          ],
          "takeaway": "Token, embedding, architecture, and training objective are different parts of the pipeline.",
          "question": "Must one token equal one whole word?",
          "answer": "No. A token can be a word piece, punctuation, or another unit defined by the tokenizer."
        }
      },
      {
        "title": "Attention means choosing which information to mix",
        "body": "<p>Supplemental intuition for the architecture relationship. Formal attention maps queries and keys to weights applied to values. Transformer architecture includes more than the attention operation. Detailed Q/K/V derivation is beyond the supplied early lecture scope. <a href=\"https://papers.neurips.cc/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf\">Architecture reference</a>.</p>",
        "question": "Is attention a separate person reading the sentence, or an operation on numbers?",
        "answer": "An operation on numbers. It creates weighted combinations of available representations.",
        "teaching": {
          "title": "Attention means choosing which information to mix",
          "story": "In “the dog chased the ball because it was excited,” understanding “it” benefits from information about the dog. A model needs a way to combine information from relevant positions.",
          "steps": [
            "Each position has a numerical representation.",
            "Attention computes scores between representations.",
            "Those scores become weights used to mix information from other positions.",
            "Transformer blocks combine attention with other operations, including feedforward transformations and normalization.",
            "Attention is a numerical operation, not conscious awareness. During ordinary next-token generation, future tokens are not available to look at."
          ],
          "takeaway": "Attention is one mechanism inside a transformer. A transformer is not just a synonym for an LLM.",
          "question": "Is attention a separate person reading the sentence, or an operation on numbers?",
          "answer": "An operation on numbers. It creates weighted combinations of available representations."
        }
      }
    ]
  },
  {
    "id": 1,
    "week": 1,
    "date": "Aug 24, 2026",
    "unit": "Foundations",
    "title": "What does it mean for a machine to learn?",
    "desc": "Inputs, guesses, weights, and the difference between a model and an agent.",
    "source": "August 24 captions and the existing Week 1 study notebook.",
    "boundary": "Modern agent topics are course context. The notebook reports that classical deep-learning foundations receive more midterm emphasis; check current course announcements for scope.",
    "map": "Learn a recipe instead of writing every answer → Labels are the answer key → Weights are adjustable importance knobs → Why more data and faster computers mattered",
    "sections": [
      {
        "title": "Learn a recipe instead of writing every answer",
        "body": "<p>The lecture frames machine learning as function approximation: learn f̂(x) that approximates the desired relationship f(x).</p>",
        "question": "If a model gets every practice picture right, has it proved it can recognize a new cat?",
        "answer": "No. You still need to evaluate unseen examples.",
        "teaching": {
          "title": "Learn a recipe instead of writing every answer",
          "story": "You show a machine many pictures of cats and dogs. You want it to handle a new picture you did not show it.",
          "steps": [
            "The picture is the input x.",
            "The correct category is the target y.",
            "The model is a recipe f that maps input to a prediction.",
            "Learning adjusts the recipe’s parameters to make useful predictions on examples and, hopefully, new cases."
          ],
          "takeaway": "Machine learning approximates a useful input-to-output relationship. Memorizing the examples is not the whole goal.",
          "question": "If a model gets every practice picture right, has it proved it can recognize a new cat?",
          "answer": "No. You still need to evaluate unseen examples."
        }
      },
      {
        "title": "Labels are the answer key",
        "body": "<p>Week 1 distinguishes supervised and unsupervised learning. The self-supervised connection explains why text can supply prediction targets without a person labeling each sentence.</p>",
        "question": "Grouping unlabeled customer records by similarity: is there a supplied category answer key?",
        "answer": "No. That is an example of unsupervised clustering.",
        "teaching": {
          "title": "Labels are the answer key",
          "story": "Some practice pages come with an answer key. Others ask you to discover groups without answers printed beside them.",
          "steps": [
            "Supervised learning uses input-and-target pairs.",
            "The target might be a category, a number, or another structured output.",
            "Unsupervised learning looks for structure without those task labels.",
            "Self-supervised language training creates targets from the data itself, such as hiding or predicting text pieces."
          ],
          "takeaway": "Ask where the training target comes from before naming the learning setup.",
          "question": "Grouping unlabeled customer records by similarity: is there a supplied category answer key?",
          "answer": "No. That is an example of unsupervised clustering."
        }
      },
      {
        "title": "Weights are adjustable importance knobs",
        "body": "<p>The lecture introduces the linear model y=Wx+b and one-hot class targets. A one-hot target marks one category with 1 and the others with 0.</p>",
        "question": "If x changes for each photo, do the trained weights also need to be replaced for every photo?",
        "answer": "No. One learned set of weights should work across examples.",
        "teaching": {
          "title": "Weights are adjustable importance knobs",
          "story": "A tiny predictor guesses a price using size and distance. It needs to decide how much each input matters.",
          "steps": [
            "Multiply each feature by a weight.",
            "Add the weighted features together.",
            "Add a bias: a baseline adjustment.",
            "Training chooses useful weights and biases. The same learned rule is applied to different examples."
          ],
          "takeaway": "In y=Wx+b, x is input, W contains weights, and b is the bias.",
          "question": "If x changes for each photo, do the trained weights also need to be replaced for every photo?",
          "answer": "No. One learned set of weights should work across examples."
        }
      },
      {
        "title": "Why more data and faster computers mattered",
        "body": "<p>The Week 1 framing is algorithms + data + compute. Transformer sequence training permits substantial parallelism, but autoregressive generation still produces dependent tokens step by step.</p>",
        "question": "Can a faster GPU fix a training set with the wrong labels by itself?",
        "answer": "No. It can run calculations faster, including learning the wrong pattern faster.",
        "teaching": {
          "title": "Why more data and faster computers mattered",
          "story": "A learner needs a useful method, examples to practice on, and enough time to practice. Deep learning needs the same three ingredients.",
          "steps": [
            "Algorithms give the learning procedure and model designs.",
            "Data provides examples.",
            "Compute performs the many numerical operations.",
            "GPUs help by doing many suitable tensor operations in parallel; they do not supply missing knowledge by themselves."
          ],
          "takeaway": "The lecture’s three ingredients are algorithms, data, and compute.",
          "question": "Can a faster GPU fix a training set with the wrong labels by itself?",
          "answer": "No. It can run calculations faster, including learning the wrong pattern faster."
        }
      },
      {
        "title": "A text continuer needs more work to become an assistant",
        "body": "<p>The notebook separates pretraining from assistant alignment and distinguishes the model from the agent harness.</p>",
        "question": "Is putting a new instruction into a prompt the same operation as updating weights?",
        "answer": "No. The prompt changes the input context. Training changes parameters.",
        "teaching": {
          "title": "A text continuer needs more work to become an assistant",
          "story": "A machine that finishes sentences may imitate text very well but still fail to follow your request helpfully.",
          "steps": [
            "Pretraining learns broad statistical patterns from data.",
            "Instruction and preference-based training can shape how it responds to requests.",
            "Prompts provide instructions at use time; they do not automatically rewrite the weights.",
            "An agent adds tools and a feedback loop around the model."
          ],
          "takeaway": "Pretraining, post-training, prompting, and tool use do different jobs.",
          "question": "Is putting a new instruction into a prompt the same operation as updating weights?",
          "answer": "No. The prompt changes the input context. Training changes parameters."
        }
      },
      {
        "title": "Learning the wrong clue can look successful",
        "body": "<p>Week 1 discusses shortcut learning, robustness, and trustworthy AI. Agent systems additionally need only the access their task requires.</p>",
        "question": "Why should you test cats on different backgrounds or without the border?",
        "answer": "To check whether the model learned the animal rather than an accidental shortcut.",
        "teaching": {
          "title": "Learning the wrong clue can look successful",
          "story": "Every cat photo in your practice folder has a blue border. The machine learns “blue border means cat.”",
          "steps": [
            "It scores well on similar practice photos.",
            "It fails when a real cat photo has no border.",
            "That is shortcut learning: a convenient correlation replaces the intended concept.",
            "Test different conditions and inspect failures rather than trusting one accuracy number."
          ],
          "takeaway": "A good score can hide a bad learned rule.",
          "question": "Why should you test cats on different backgrounds or without the border?",
          "answer": "To check whether the model learned the animal rather than an accidental shortcut."
        }
      }
    ]
  },
  {
    "id": 2,
    "week": 2,
    "date": "Week 2 · three caption parts",
    "unit": "Learning",
    "title": "How do we tell a model it is wrong?",
    "desc": "Loss, optimization, overfitting, evaluation, and basic learning methods.",
    "source": "All three supplied Week 2 caption files, reconstructed in the existing Week 2 notebook.",
    "boundary": "Cross-entropy and advanced optimizer details were not fully developed in this lecture. These lessons establish the mechanics and basic methods.",
    "map": "Loss is a score for how wrong a guess is → Turn the knobs a little downhill → Memorizing practice answers is not understanding → Practice, rehearsal, and the final exam",
    "sections": [
      {
        "title": "Loss is a score for how wrong a guess is",
        "body": "<p>Empirical risk is average per-example loss over observed samples. The full population distribution is unknown.</p>",
        "question": "Why does squaring an error make a big miss more expensive?",
        "answer": "An error of 2 becomes 4, but an error of 10 becomes 100. Large errors grow disproportionately.",
        "teaching": {
          "title": "Loss is a score for how wrong a guess is",
          "story": "You guess 7 when the answer is 10. We need a number that tells us how far off the guess was.",
          "steps": [
            "The prediction error is 3.",
            "Absolute loss counts 3. Squared loss counts 9.",
            "Average the chosen loss over training examples to score a parameter setting.",
            "Different loss rules care differently about large mistakes, so they can prefer different models."
          ],
          "takeaway": "Loss defines what the training process tries to reduce.",
          "question": "Why does squaring an error make a big miss more expensive?",
          "answer": "An error of 2 becomes 4, but an error of 10 becomes 100. Large errors grow disproportionately."
        }
      },
      {
        "title": "Turn the knobs a little downhill",
        "body": "<p>Gradient descent updates parameters using θ←θ−η∇θL. η is the learning rate.</p>",
        "question": "If the learning rate is huge, why might training get worse instead of better?",
        "answer": "A local downhill direction is only local. A huge step can jump past a good region and increase loss.",
        "teaching": {
          "title": "Turn the knobs a little downhill",
          "story": "Imagine standing on a hill in fog. You can feel which nearby direction slopes upward. To go down, take a small step the other way.",
          "steps": [
            "Parameters describe your current position. Loss is the height.",
            "A gradient tells how loss changes locally as parameters change.",
            "Gradient descent moves against that gradient.",
            "The learning rate controls step size. Too large can overshoot; too small can make slow progress."
          ],
          "takeaway": "Optimization uses local feedback to improve parameter values. It does not promise a perfect global answer for every neural network.",
          "question": "If the learning rate is huge, why might training get worse instead of better?",
          "answer": "A local downhill direction is only local. A huge step can jump past a good region and increase loss."
        }
      },
      {
        "title": "Memorizing practice answers is not understanding",
        "body": "<p>L1 penalizes absolute weight magnitude and may encourage sparsity. L2 penalizes squared weight magnitude. Regularization changes the objective or training behavior.</p>",
        "question": "Training performance improves while validation performance gets worse. What is one likely concern?",
        "answer": "Overfitting. Check whether the model is learning training-specific noise.",
        "teaching": {
          "title": "Memorizing practice answers is not understanding",
          "story": "A student memorizes the exact practice sheet and struggles when the teacher changes the numbers.",
          "steps": [
            "Underfitting means the model cannot capture even the main training pattern.",
            "Overfitting means it fits training details that do not carry over well.",
            "Regularization adds pressure against certain unnecessary complexity.",
            "A regularized objective balances fitting examples with a penalty or other constraint."
          ],
          "takeaway": "We want a pattern that works on new examples, not just perfect practice recall.",
          "question": "Training performance improves while validation performance gets worse. What is one likely concern?",
          "answer": "Overfitting. Check whether the model is learning training-specific noise."
        }
      },
      {
        "title": "Practice, rehearsal, and the final exam",
        "body": "<p>Week 2 covers generalization, data splits, and cross-validation. Fit preprocessing on training data to avoid leakage.</p>",
        "question": "Should you try ten settings and choose the one with the best test score?",
        "answer": "No. Choose settings using validation data, then evaluate the selected model on the test data.",
        "teaching": {
          "title": "Practice, rehearsal, and the final exam",
          "story": "You need separate data for learning the weights, choosing your setup, and measuring the final chosen model.",
          "steps": [
            "Training data fits parameters.",
            "Validation data helps choose settings and a model checkpoint.",
            "Test data evaluates the selected model.",
            "If you keep adjusting based on the test results, you are using the test as another validation set."
          ],
          "takeaway": "Keep the final evaluation separate from repeated development choices.",
          "question": "Should you try ten settings and choose the one with the best test score?",
          "answer": "No. Choose settings using validation data, then evaluate the selected model on the test data."
        }
      },
      {
        "title": "A decision tree asks a sequence of questions",
        "body": "<p>The lecture covers decision trees, model complexity, and tree ensembles. Tree-based reasoning around an LLM is a different use of tree structure from a trained decision-tree classifier.</p>",
        "question": "Why can a tree with one special rule for each training example be risky?",
        "answer": "It may memorize the examples and fail on new cases.",
        "teaching": {
          "title": "A decision tree asks a sequence of questions",
          "story": "To sort fruit, ask “is it yellow?” then perhaps “is it long?” Each answer sends you down a branch.",
          "steps": [
            "Each internal node asks a feature question.",
            "A branch follows the answer.",
            "A leaf supplies the prediction.",
            "A very deep tree can memorize tiny exceptions. Ensembles combine multiple trees to improve predictions."
          ],
          "takeaway": "Decision trees split examples with questions instead of building a neural network’s layered weighted transformations.",
          "question": "Why can a tree with one special rule for each training example be risky?",
          "answer": "It may memorize the examples and fail on new cases."
        }
      },
      {
        "title": "Ask the most similar examples",
        "body": "<p>k and the distance metric are design choices. Retrieval can supply relevant information to a language model, but retrieval is not itself weight training.</p>",
        "question": "If 3 nearest neighbors have labels cat, cat, dog, what does majority vote predict?",
        "answer": "Cat. Two of the three votes are cat.",
        "teaching": {
          "title": "Ask the most similar examples",
          "story": "You want to label a new fruit. Find the fruits most similar to it and look at their labels.",
          "steps": [
            "k-nearest neighbors stores labeled examples.",
            "Choose a distance measure and the number k of neighbors.",
            "For classification, the neighbors vote.",
            "Feature scaling matters: a large numeric range can dominate the distance."
          ],
          "takeaway": "k-NN predicts from nearby examples. It is not the same procedure as a neural network adjusting weights.",
          "question": "If 3 nearest neighbors have labels cat, cat, dog, what does majority vote predict?",
          "answer": "Cat. Two of the three votes are cat."
        }
      },
      {
        "title": "Make groups when nobody supplied labels",
        "body": "<p>K-means alternates assignments and centroid updates, optimizing within-cluster squared distance in the usual formulation.</p>",
        "question": "Does a K-means group automatically mean “fraud” or “not fraud”?",
        "answer": "No. The algorithm groups by geometry; people must interpret and evaluate those groups.",
        "teaching": {
          "title": "Make groups when nobody supplied labels",
          "story": "You have mixed buttons on a table and want piles of similar buttons without an answer key.",
          "steps": [
            "K-means begins with k candidate centers.",
            "Assign each point to its nearest center.",
            "Move each center to the mean of its assigned points.",
            "Repeat assignments and center updates until a stopping condition. Different initial centers can give different results."
          ],
          "takeaway": "Clustering discovers groups under a chosen similarity measure. Those groups do not automatically have human meanings.",
          "question": "Does a K-means group automatically mean “fraud” or “not fraud”?",
          "answer": "No. The algorithm groups by geometry; people must interpret and evaluate those groups."
        }
      },
      {
        "title": "A score needs to match the real job",
        "body": "<p>Week 2 discusses model evaluation metrics. The toy example demonstrates why class imbalance makes accuracy alone insufficient.</p>",
        "question": "A detector finds none of the real positive cases. Is its recall good?",
        "answer": "No. Recall is zero even if many negative predictions are correct.",
        "teaching": {
          "title": "A score needs to match the real job",
          "story": "A detector says “nothing is wrong” every time. If only one case in a hundred is dangerous, it is 99% accurate and still misses every danger.",
          "steps": [
            "Accuracy counts overall correct predictions.",
            "Precision asks how often positive predictions are correct.",
            "Recall asks how many actual positives were found.",
            "Choose metrics that reveal the mistakes that matter for the task."
          ],
          "takeaway": "A high accuracy number can conceal failure on rare but important cases.",
          "question": "A detector finds none of the real positive cases. Is its recall good?",
          "answer": "No. Recall is zero even if many negative predictions are correct."
        }
      }
    ]
  },
  {
    "id": 4,
    "week": 4,
    "date": "Sep 14, 2026",
    "unit": "Networks",
    "title": "How a neural network learns",
    "desc": "Forward passes, nonlinear layers, loss, and backward feedback.",
    "source": "September 14 captions and the Week 4 notebook. Original detailed notebook: week4/.",
    "boundary": "The lecture emphasizes nonlinear activations and forward/backward mechanics. Detailed transformer attention was deferred; the beginner bridge is supplemental.",
    "map": "Layers pass along useful descriptions → Why stacking straight rules is not enough → An activation changes the signal → Turn class scores into a probability distribution",
    "sections": [
      {
        "title": "Layers pass along useful descriptions",
        "body": "<p>A typical layer computes z=Wx+b then a=φ(z). Forward propagation evaluates the graph from inputs toward outputs.</p>",
        "question": "Does the last layer normally get the raw picture directly in a simple chain of layers?",
        "answer": "No. It receives the representation built by the previous layer.",
        "teaching": {
          "title": "Layers pass along useful descriptions",
          "story": "Imagine a picture moving through stations. Each station changes its numerical description before passing it on.",
          "steps": [
            "A layer combines its inputs with weights and biases.",
            "An activation transforms the result.",
            "The next layer uses that output as its input.",
            "The last layer produces the prediction. This trip from input to output is the forward pass."
          ],
          "takeaway": "A network is a composition of transformations. Deep means multiple representation layers.",
          "question": "Does the last layer normally get the raw picture directly in a simple chain of layers?",
          "answer": "No. It receives the representation built by the previous layer."
        }
      },
      {
        "title": "Why stacking straight rules is not enough",
        "body": "<p>The professor explicitly emphasizes this question. W₂(W₁x+b₁)+b₂=(W₂W₁)x+(W₂b₁+b₂).</p>",
        "question": "If you stack ten affine layers with no nonlinear activation, must the resulting mapping be nonlinear?",
        "answer": "No. They collapse into one affine mapping.",
        "teaching": {
          "title": "Why stacking straight rules is not enough",
          "story": "Two stretches of a rubber ruler can be combined into one stretch. Doing several linear transformations still produces one combined linear transformation.",
          "steps": [
            "A linear/affine layer stretches, mixes, and shifts inputs.",
            "A second such layer can be algebraically combined with the first.",
            "Nonlinear activations add bends that cannot be folded into one linear layer.",
            "Now additional layers can represent more complex patterns."
          ],
          "takeaway": "Depth needs nonlinearities to gain this kind of expressive power.",
          "question": "If you stack ten affine layers with no nonlinear activation, must the resulting mapping be nonlinear?",
          "answer": "No. They collapse into one affine mapping."
        }
      },
      {
        "title": "An activation changes the signal",
        "body": "<p>The lecture compares sigmoid, ReLU, and leaky ReLU. A ReLU can receive zero gradient on negative inputs, contributing to dead units.</p>",
        "question": "What does ReLU do to −2 and 5?",
        "answer": "It returns 0 and 5.",
        "teaching": {
          "title": "An activation changes the signal",
          "story": "A ReLU acts like a simple gate: positive numbers pass through; negative numbers become zero.",
          "steps": [
            "ReLU(x)=max(0,x). So −3 becomes 0 and 4 stays 4.",
            "Sigmoid squashes inputs into a range between 0 and 1.",
            "At extreme sigmoid inputs, changes have little effect; the learning signal can become tiny.",
            "Leaky ReLU allows a small negative-side slope so some signal remains there."
          ],
          "takeaway": "Activations are mathematical functions. Their shape affects both what can be represented and how gradients flow.",
          "question": "What does ReLU do to −2 and 5?",
          "answer": "It returns 0 and 5."
        }
      },
      {
        "title": "Turn class scores into a probability distribution",
        "body": "<p>Softmax pᵢ=exp(zᵢ)/Σⱼexp(zⱼ). For a one-hot target, cross-entropy is −log probability of the target class.</p>",
        "question": "If probabilities for three classes are 0.2, 0.5, and 0.3, which class is most probable?",
        "answer": "The second class. But 0.5 is a model probability, not a guarantee that the answer is correct.",
        "teaching": {
          "title": "Turn class scores into a probability distribution",
          "story": "A classifier gives cat a score of 3 and dog a score of 1. Those raw numbers are not yet probabilities.",
          "steps": [
            "Raw output scores are logits.",
            "Softmax transforms them into positive values that sum to one.",
            "A classification loss compares the distribution with the correct target.",
            "Cross-entropy rewards assigning high probability to the correct class. A high probability can still be wrong."
          ],
          "takeaway": "Scores, probabilities, and loss are different stages of the prediction-and-feedback process.",
          "question": "If probabilities for three classes are 0.2, 0.5, and 0.3, which class is most probable?",
          "answer": "The second class. But 0.5 is a model probability, not a guarantee that the answer is correct."
        }
      },
      {
        "title": "Send correction signals backward",
        "body": "<p>The chain rule combines local derivatives along the computation graph. Cached forward values can be needed during the backward pass.</p>",
        "question": "Are backpropagation and gradient descent exactly the same operation?",
        "answer": "No. Backprop computes gradients; gradient descent uses gradients to update parameters.",
        "teaching": {
          "title": "Send correction signals backward",
          "story": "A team makes an answer through several stations. The final answer is wrong. We need to know how each adjustable part affected the error.",
          "steps": [
            "Run forward to compute the prediction and loss.",
            "Backpropagation uses the chain rule to compute how loss changes with each parameter.",
            "Those derivatives are gradients, not the updated weights.",
            "An optimizer uses the gradients to change the parameters. Then another forward pass tests the changed model."
          ],
          "takeaway": "Backprop computes the correction information. The optimizer applies a parameter update.",
          "question": "Are backpropagation and gradient descent exactly the same operation?",
          "answer": "No. Backprop computes gradients; gradient descent uses gradients to update parameters."
        }
      },
      {
        "title": "Why learning signals can fade or blow up",
        "body": "<p>The lecture discusses gradient pathologies and why saturated activations can inhibit learning. Remedies depend on the architecture and training setup.</p>",
        "question": "What happens to 0.1 multiplied by itself many times?",
        "answer": "It becomes very small. This is the numerical intuition behind one source of vanishing gradients.",
        "teaching": {
          "title": "Why learning signals can fade or blow up",
          "story": "Imagine passing a message through ten people, each turning the volume down. By the end it may be inaudible. Turning it up at every step can be a problem too.",
          "steps": [
            "Backprop multiplies local derivatives along paths.",
            "Repeated small factors can make gradients tiny: vanishing gradients.",
            "Repeated large factors can make gradients huge: exploding gradients.",
            "Activation choices, initialization, normalization, skip connections, and gradient clipping can help in appropriate settings."
          ],
          "takeaway": "Training problems can come from the path the gradients take, not just from having too little data.",
          "question": "What happens to 0.1 multiplied by itself many times?",
          "answer": "It becomes very small. This is the numerical intuition behind one source of vanishing gradients."
        }
      },
      {
        "title": "Why pictures need spatial structure",
        "body": "<p>Week 4 introduces CNN motivation; Week 5 develops convolution, pooling, and shape calculations.</p>",
        "question": "Why reuse one edge detector in many image locations?",
        "answer": "The same kind of edge can appear anywhere. Sharing weights reduces parameters and lets one learned pattern be reused.",
        "teaching": {
          "title": "Why pictures need spatial structure",
          "story": "Nearby pixels often belong to the same edge or shape. Flattening every pixel into a huge dense layer ignores this useful arrangement.",
          "steps": [
            "A CNN examines local neighborhoods.",
            "It reuses the same detector at different positions.",
            "Early learned features may capture edges; later layers can combine them into larger patterns.",
            "This is an architectural choice suited to image structure, not a separate definition of learning."
          ],
          "takeaway": "CNN and transformer are architecture families. Neither word alone tells you everything about training data or task.",
          "question": "Why reuse one edge detector in many image locations?",
          "answer": "The same kind of edge can appear anywhere. Sharing weights reduces parameters and lets one learned pattern be reused."
        }
      }
    ]
  },
  {
    "id": 5,
    "week": 5,
    "date": "Sep 21, 2026",
    "unit": "Vision",
    "title": "How networks work with pictures",
    "desc": "Sliding filters, pooling, image-text matching, and robot learning.",
    "source": "September 21 captions and the Week 5 notebook. Original detailed notebook: week5/.",
    "boundary": "Robotics examples are lecture context; CNN mechanics are core foundations. CLIP paper details and diffusion internals were not fully derived.",
    "map": "A filter is a small sliding detector → Count where the window fits → Pooling keeps a summary of a patch → Normalization puts numbers on a manageable scale",
    "sections": [
      {
        "title": "A filter is a small sliding detector",
        "body": "<p>For K filters of size F×F across C input channels, a convolution has F²CK weights and commonly K biases.</p>",
        "question": "If you move the filter one pixel to the right, do you invent a whole new set of weights?",
        "answer": "No. The same filter weights are reused.",
        "teaching": {
          "title": "A filter is a small sliding detector",
          "story": "Hold a little window over a picture. At each position, ask how much the local patch matches a pattern.",
          "steps": [
            "Multiply the patch values by a small set of weights and add them.",
            "Slide the window and use those same weights again.",
            "The resulting grid is a feature map.",
            "Different learned filters can produce different maps. Each filter spans all input channels."
          ],
          "takeaway": "Convolution shares a learned local rule across spatial positions.",
          "question": "If you move the filter one pixel to the right, do you invent a whole new set of weights?",
          "answer": "No. The same filter weights are reused."
        }
      },
      {
        "title": "Count where the window fits",
        "body": "<p>For each spatial dimension: output=floor((input−F+2P)/S)+1 under the standard formula. Input 32×32×3 with six 5×5 filters, stride 1, no padding yields 28×28×6 and 456 parameters.</p>",
        "question": "A 7-cell row, a 3-cell window, stride 2, no padding: how many placements?",
        "answer": "3. The starts are 1, 3, and 5.",
        "teaching": {
          "title": "Count where the window fits",
          "story": "A 5-cell row and a 3-cell window give a small enough example to count with your finger.",
          "steps": [
            "With no border padding, the window starts at positions 1, 2, and 3. That makes 3 outputs.",
            "Stride says how far you move each time. Stride 2 gives starts at 1 and 3: 2 outputs.",
            "Padding adds border cells, allowing more window positions.",
            "For a 2D image, count along width and height. The number of filters gives output channels."
          ],
          "takeaway": "Output size comes from counting legal window placements. The formula is shorthand for that count.",
          "question": "A 7-cell row, a 3-cell window, stride 2, no padding: how many placements?",
          "answer": "3. The starts are 1, 3, and 5."
        }
      },
      {
        "title": "Pooling keeps a summary of a patch",
        "body": "<p>Pooling operates separately over channels in the examples taught. Window size and stride determine output shape.</p>",
        "question": "Does ordinary max pooling learn which number is largest by updating weights?",
        "answer": "No. The max operation is fixed.",
        "teaching": {
          "title": "Pooling keeps a summary of a patch",
          "story": "You have a small group of detector scores: 1, 7, 2, 4. Keep just one summary number.",
          "steps": [
            "Max pooling keeps 7, the strongest response.",
            "Average pooling keeps 3.5, the mean.",
            "Repeat across patches to make a smaller map.",
            "In these standard forms, pooling has no learned filter weights. It discards information to reduce spatial size."
          ],
          "takeaway": "Convolution learns what to detect. Pooling summarizes existing responses.",
          "question": "Does ordinary max pooling learn which number is largest by updating weights?",
          "answer": "No. The max operation is fixed."
        }
      },
      {
        "title": "Normalization puts numbers on a manageable scale",
        "body": "<p>The Week 5 lecture emphasizes normalization and train/evaluation handling. Learned affine scale/shift details are expanded in the supplied training slide deck.</p>",
        "question": "Should you casually recalculate training preprocessing statistics using the final test set?",
        "answer": "No. Fit preprocessing on training data and reuse it.",
        "teaching": {
          "title": "Normalization puts numbers on a manageable scale",
          "story": "One feature ranges around 1 and another around 1000. Their scales can make training awkward.",
          "steps": [
            "Centering subtracts a mean. Scaling divides by a measure of spread.",
            "Batch normalization normalizes hidden activations over defined batch/channel axes.",
            "It also has learnable scale and shift parameters.",
            "At evaluation, standard BatchNorm usually uses running statistics saved during training."
          ],
          "takeaway": "Normalization changes numerical scale and training behavior. It does not automatically turn the data into a bell curve.",
          "question": "Should you casually recalculate training preprocessing statistics using the final test set?",
          "answer": "No. Fit preprocessing on training data and reuse it."
        }
      },
      {
        "title": "Teach pictures and captions to line up",
        "body": "<p>The lecture introduces CLIP-style image-text contrastive learning. Matching pairs lie on the diagonal of the batch similarity matrix.</p>",
        "question": "What is a positive pair: a cat photo with its cat caption, or the same photo with an unrelated airplane caption?",
        "answer": "The matching cat photo and caption. The unrelated caption is a negative pairing in this example.",
        "teaching": {
          "title": "Teach pictures and captions to line up",
          "story": "Match a dog photo with “a dog running,” and separate it from “a bowl of soup.”",
          "steps": [
            "An image encoder produces a vector for each picture.",
            "A text encoder produces a vector for each caption.",
            "Training increases similarity for matching pairs relative to mismatches.",
            "Later, compare a picture with candidate text descriptions."
          ],
          "takeaway": "Contrastive learning teaches representations by comparing matches and mismatches. It is not simply next-token prediction.",
          "question": "What is a positive pair: a cat photo with its cat caption, or the same photo with an unrelated airplane caption?",
          "answer": "The matching cat photo and caption. The unrelated caption is a negative pairing in this example."
        }
      },
      {
        "title": "A robot needs more than realistic-looking video",
        "body": "<p>The guest lecture covers multimodal data, simulation, synthetic augmentation, VLA systems, edge latency, and safety. Reported experiment results are task-specific, not universal guarantees.</p>",
        "question": "Can beautiful simulated images guarantee a policy will handle real contact and friction correctly?",
        "answer": "No. Visual realism does not guarantee correct dynamics.",
        "teaching": {
          "title": "A robot needs more than realistic-looking video",
          "story": "A simulated robot learns to grab a cup. In the real world the cup slips because friction is different.",
          "steps": [
            "A policy chooses actions from observations or state.",
            "Imitation learning can use demonstrations; reinforcement learning uses experience and rewards.",
            "Simulation can generate lots of practice, but its physics and images may differ from reality.",
            "A vision-language-action system connects visual and language information with action outputs. It is broader than a text-only chat response."
          ],
          "takeaway": "The sim-to-real gap includes both physical behavior and what the cameras see.",
          "question": "Can beautiful simulated images guarantee a policy will handle real contact and friction correctly?",
          "answer": "No. Visual realism does not guarantee correct dynamics."
        }
      },
      {
        "title": "Different models can be pieces of one system",
        "body": "<p>The lecture distinguishes forward dynamics, inverse dynamics, world-action models, VLA policies, and slow/fast control systems.</p>",
        "question": "If a model predicts the next camera frame, is it necessarily a large language model?",
        "answer": "No. Predicting video is not the same task as modeling language.",
        "teaching": {
          "title": "Different models can be pieces of one system",
          "story": "A robot may have a slower planner and a faster controller, like deciding to catch a ball and then coordinating your hands.",
          "steps": [
            "A world model predicts what may happen.",
            "A policy chooses what to do.",
            "A high-level planner can set a goal while a fast controller handles rapid movements.",
            "A system may combine multiple architectures and objectives. Do not assume every component is an LLM just because language appears somewhere."
          ],
          "takeaway": "Prediction, planning, and action control are different jobs; one product can contain several models.",
          "question": "If a model predicts the next camera frame, is it necessarily a large language model?",
          "answer": "No. Predicting video is not the same task as modeling language."
        }
      }
    ]
  },
  {
    "id": 7,
    "week": "SLIDES",
    "date": "Training deck · supplement",
    "unit": "Training",
    "title": "Practice training and transfer",
    "desc": "A gentle companion to the supplied training-and-transfer PDF.",
    "source": "Selected introductory pages of F26-block7-training-transfer-432p.pdf: training step, batches/epochs, splits, normalization, and transfer overview.",
    "boundary": "This is a slide-based supplement, not a claimed Week 7 or Week 8 recording. The 432-page deck contains additional material beyond these selected beginner lessons.",
    "map": "One update is not an entire pass through the data → Keep the same measuring ruler for new examples → Reuse a model that already learned useful patterns → Frozen does not mean the model stops doing math",
    "sections": [
      {
        "title": "One update is not an entire pass through the data",
        "body": "<p>The slide deck illustrates mini-batches, optimizer updates, and epochs with a 320-photo training split.</p>",
        "question": "With 100 examples and batches of 10, how many batches cover one epoch?",
        "answer": "10, assuming all examples are used once and there is no extra sampling.",
        "teaching": {
          "title": "One update is not an entire pass through the data",
          "story": "You have 320 flower photos. You practice on groups of 32 rather than all photos at once.",
          "steps": [
            "A mini-batch is one group of examples.",
            "Compute loss and gradients using that group.",
            "An optimizer step updates trainable weights.",
            "Ten such groups cover the 320 photos once: one epoch in this simple example."
          ],
          "takeaway": "Batch size counts examples per group. An update changes parameters. An epoch counts a full data pass.",
          "question": "With 100 examples and batches of 10, how many batches cover one epoch?",
          "answer": "10, assuming all examples are used once and there is no extra sampling."
        }
      },
      {
        "title": "Keep the same measuring ruler for new examples",
        "body": "<p>The selected slides emphasize training-only fitting of preprocessing, consistent input conventions, and avoiding data leakage.</p>",
        "question": "If the test mean happens to be 140, should you replace the fitted training mean with it?",
        "answer": "No. Reuse the preprocessing fitted on the training data.",
        "teaching": {
          "title": "Keep the same measuring ruler for new examples",
          "story": "The training mean of a feature is 100. You subtract that mean before feeding numbers to the model.",
          "steps": [
            "A training value 120 becomes 20.",
            "A validation value 130 becomes 30 using that same training mean.",
            "Do not invent a new ruler from the validation or test set.",
            "Preprocessing is part of the pipeline, not a casual afterthought."
          ],
          "takeaway": "Fit preprocessing rules on training data and apply them consistently to new examples.",
          "question": "If the test mean happens to be 140, should you replace the fitted training mean with it?",
          "answer": "No. Reuse the preprocessing fitted on the training data."
        }
      },
      {
        "title": "Reuse a model that already learned useful patterns",
        "body": "<p>Training-and-transfer overview: feature extraction and fine-tuning differ in which parameters remain trainable. Expected input preprocessing must match the pretrained model.</p>",
        "question": "If you freeze the backbone and train a new head, which part’s weights are being updated?",
        "answer": "The new head’s weights. Frozen backbone parameters stay fixed.",
        "teaching": {
          "title": "Reuse a model that already learned useful patterns",
          "story": "Someone has learned to recognize many visual shapes. You want to adapt that ability to flower categories rather than start every numerical pattern from scratch.",
          "steps": [
            "Start with a pretrained model.",
            "Its backbone produces representations. A task head maps those representations to your desired output.",
            "You can freeze the backbone and train a new head.",
            "Or fine-tune selected parts, updating some or all pretrained weights for your task."
          ],
          "takeaway": "Transfer learning reuses prior training. Fine-tuning is additional training, not just asking the model a question.",
          "question": "If you freeze the backbone and train a new head, which part’s weights are being updated?",
          "answer": "The new head’s weights. Frozen backbone parameters stay fixed."
        }
      },
      {
        "title": "Frozen does not mean the model stops doing math",
        "body": "<p>Freezing concerns parameter updates. Layer mode affects certain operations independently, so transfer setups must choose both appropriately.</p>",
        "question": "Does “frozen weights” mean “skip the backbone’s forward computation”?",
        "answer": "No. The model still needs its features unless you precomputed and cached them.",
        "teaching": {
          "title": "Frozen does not mean the model stops doing math",
          "story": "You freeze a feature extractor. It still reads each image and produces a representation.",
          "steps": [
            "The forward pass still runs through the frozen part.",
            "Frozen parameters are not updated by the optimizer.",
            "Trainable downstream parts can use the resulting features.",
            "Training mode and evaluation mode are separate settings that can affect layers such as BatchNorm and dropout."
          ],
          "takeaway": "Whether a parameter updates and whether a layer behaves in training mode are different questions.",
          "question": "Does “frozen weights” mean “skip the backbone’s forward computation”?",
          "answer": "No. The model still needs its features unless you precomputed and cached them."
        }
      }
    ]
  }
];
