# Midterm Review 2026: source-to-visible coverage ledger

Scope: all 56 archived questions, checked against both supplied PDFs. The review deck is supporting context, not a claim that its entire 2026 scope is covered by this older exam.

The exam filename says Fall 2025, but its title and document metadata identify Spring 2024. Preserve this discrepancy visibly. Source files remain local and are not published.

| Source anchor | Formal topic | Why it matters | Destination | Visible by default? |
|---|---|---|---|---|
| Exam Q1, PDF p. 2; review 14–18, 126–137, 147–150 | Overfitting and the generalization gap | B · Replacing tanh with sigmoid is not a standard overfitting remedy. | /csci-566/midterm-review-2026/#q1 | Yes |
| Exam Q2, PDF p. 2; review 59–82, 127–134 | Max pooling and computation | B · Max pooling mainly compares values. | /csci-566/midterm-review-2026/#q2 | Yes |
| Exam Q3, PDF p. 2; review 95–104, 122–125 | Zero initialization and gradient flow | Printed A is possible for some models; the question does not specify enough to make it universal. | /csci-566/midterm-review-2026/#q3 | Yes |
| Exam Q4, PDF p. 2; review 75–78 | Parameters in one 1×1 filter | 3 weights. | /csci-566/midterm-review-2026/#q4 | Yes |
| Exam Q5, PDF p. 2; review 110–112, 158–159 | Gradient norm clipping | D · Clip the gradient norm. | /csci-566/midterm-review-2026/#q5 | Yes |
| Exam Q6, PDF p. 2; review 14–21 | Decision-tree pruning | A · Reduce complexity to control overfitting. | /csci-566/midterm-review-2026/#q6 | Yes |
| Exam Q7, PDF p. 2; review 108–112, 160–168 | RNN parameters becoming NaN | B · Exploding gradients. | /csci-566/midterm-review-2026/#q7 | Yes |
| Exam Q8, PDF p. 2; review 135–137, 218, 225–227 | L2 regularization in GNNs | B · Yes, GNNs also learn weight parameters. | /csci-566/midterm-review-2026/#q8 | Yes |
| Exam Q9, PDF p. 3; review 206–215 | Neighborhood aggregation | A · Combine information from a node’s neighbors. | /csci-566/midterm-review-2026/#q9 | Yes |
| Exam Q10, PDF p. 3; review 73–83 | Are pooling layers required? | C · No; pooling is commonly used for spatial reduction. | /csci-566/midterm-review-2026/#q10 | Yes |
| Exam Q11, PDF p. 3; review 48–56, 83 | Why ReLU is nonlinear | C · Its slope changes at zero. | /csci-566/midterm-review-2026/#q11 | Yes |
| Exam Q12, PDF p. 3; review 41, 48–56 | Why hidden nonlinearities matter | C · They make nonlinear relationships representable. | /csci-566/midterm-review-2026/#q12 | Yes |
| Exam Q13, PDF p. 3; review 51–54 | Weighted sum and linear activation | B · 96. | /csci-566/midterm-review-2026/#q13 | Yes |
| Exam Q14, PDF p. 3; review 10–21 | Decision-tree overfitting | C · Decision trees are prone to overfitting. | /csci-566/midterm-review-2026/#q14 | Yes |
| Exam Q15, PDF p. 3; review 225–236, 240, 247 | Shared GNN parameters and graph size | B · Reuse a fixed set of shared parameters. | /csci-566/midterm-review-2026/#q15 | Yes |
| Exam Q16, PDF p. 4; review 206–219; directed-edge explanation added | Directed graphs in GNNs | C · Use only “out-degree nodes” information, as worded. | /csci-566/midterm-review-2026/#q16 | Yes |
| Exam Q17, PDF p. 4; review 206–230; autoencoder explanation added | Graph autoencoders | A · A network for unsupervised representation learning on graphs. | /csci-566/midterm-review-2026/#q17 | Yes |
| Exam Q18, PDF p. 4; review 122–125, 135–146 | Initialization versus regularization | C · Random weight initialization. | /csci-566/midterm-review-2026/#q18 | Yes |
| Exam Q19, PDF p. 4; review 55, 106–108 | Recognizing sigmoid | E · The S-shaped curve from 0 to 1. | /csci-566/midterm-review-2026/#q19 | Yes |
| Exam Q20, PDF p. 4; review 55–56; ELU formula added | Recognizing ELU | C · A curved negative branch and a linear positive branch. | /csci-566/midterm-review-2026/#q20 | Yes |
| Exam Q21, PDF p. 4; review 55–56, 105–108 | Activation range and derivative | A · Both output range and response rate (derivative). | /csci-566/midterm-review-2026/#q21 | Yes |
| Exam Q22, PDF p. 4; review 4–9 | Preprocessing without data leakage | A · Training data only. The archived answer B is incorrect for the stated protocol. | /csci-566/midterm-review-2026/#q22 | Yes |
| Exam Q23, PDF p. 5; review 126–134, 156–157 | BatchNorm in training and evaluation | A · Training normally uses current mini-batch statistics. | /csci-566/midterm-review-2026/#q23 | Yes |
| Exam Q24, PDF p. 5; review 45–47 | Doubling both hidden widths | C · 3 times as many parameters. | /csci-566/midterm-review-2026/#q24 | Yes |
| Exam Q25, PDF p. 5; review 108–112, 160–168 | RNNs can have both gradient problems | A · RNNs can suffer from both. | /csci-566/midterm-review-2026/#q25 | Yes |
| Exam Q26, PDF p. 5; review 59–85 | Recovering a convolution kernel shape | (3, 5, 5, 4). | /csci-566/midterm-review-2026/#q26 | Yes |
| Exam Q27, PDF p. 5; review 10–21; combinatorial derivation added | Binary attributes and tree leaves | A · 2ᵏ is the feature-pattern upper bound; nonempty training leaves are capped by N. | /csci-566/midterm-review-2026/#q27 | Yes |
| Exam Q28, PDF p. 6; review 10–21; tree-depth derivation added | Depth with binary attributes | Intended A · O(k); more precisely a nonredundant path uses at most k attribute tests. | /csci-566/midterm-review-2026/#q28 | Yes |
| Exam Q29, PDF p. 6; review 10–21; combinatorial derivation added | Continuous attributes and leaf count | D · N. | /csci-566/midterm-review-2026/#q29 | Yes |
| Exam Q30, PDF p. 6; review 10–21; tree-depth derivation added | Worst-case continuous-tree depth | C · N−1. | /csci-566/midterm-review-2026/#q30 | Yes |
| Exam Q31, PDF p. 6; review 48, 81–83, 126–134 | Which layers are nonlinear? | C · ReLU is definitely nonlinear, but the item is not uniquely correct as written. | /csci-566/midterm-review-2026/#q31 | Yes |
| Exam Q32, PDF p. 6; review 28–32 | Does basic kNN learn weights? | 0 learned model weights. | /csci-566/midterm-review-2026/#q32 | Yes |
| Exam Q33, PDF p. 6; review 59–76 | Convolution weights plus biases | 39 parameters. | /csci-566/midterm-review-2026/#q33 | Yes |
| Exam Q34, PDF p. 6; review 28–32, 41–47 | kNN inference on 100 billion images | A · A basic 10-nearest-neighbor classifier. | /csci-566/midterm-review-2026/#q34 | Yes |
| Exam Q35, PDF p. 6; review 135–137; L1 sparsity explanation added | Lasso and feature selection | B · Lasso (L1). | /csci-566/midterm-review-2026/#q35 | Yes |
| Exam Q36, PDF p. 6; review 89, 95–104, 113–121 | Deriving a squared-error update | A · wᵢ ← wᵢ + 2λxᵢ(y−wᵀx). | /csci-566/midterm-review-2026/#q36 | Yes |
| Exam Q37, PDF p. 7; review 41, 48–50; function-class comparison added | A squared parameter restricts slope | B · There are datasets where B performs better than A. | /csci-566/midterm-review-2026/#q37 | Yes |
| Exam Q38, PDF p. 7; review 48–50; effective-slope derivation added | Different parameterizations, same slopes | D · They have the same best-achievable predictions under ideal fitting. | /csci-566/midterm-review-2026/#q38 | Yes |
| Exam Q39, PDF p. 7; review 28–32; outlier explanation added | What is an outlier? | B · An observation that differs substantially from other observations. | /csci-566/midterm-review-2026/#q39 | Yes |
| Exam Q40, PDF p. 7; review 28–32; outlier explanation added | kNN outlier scores | B · They tend to have low local neighbor density. | /csci-566/midterm-review-2026/#q40 | Yes |
| Exam Q41, PDF p. 7; review Supplemental geometric derivation; not directly taught in the supplied review | Circular boundaries and VC dimension | Printed C · 4 for the intended VC-dimension threshold; literally, 3 collinear points already suffice. | /csci-566/midterm-review-2026/#q41 | Yes |
| Exam Q42, PDF p. 7; review 4–21, 147–150 | Zero training MSE is not a guarantee | D · Neither guarantee follows. | /csci-566/midterm-review-2026/#q42 | Yes |
| Exam Q43, PDF p. 8; review 41–47 | Counting a 4→8→2 MLP | A · 48 weights. | /csci-566/midterm-review-2026/#q43 | Yes |
| Exam Q44, PDF p. 8; review 48–50 | An MLP without activations | A · y=x. | /csci-566/midterm-review-2026/#q44 | Yes |
| Exam Q45, PDF p. 8; review 87–89 | Why hard 0/1 loss cannot guide ordinary SGD | B · The intended obstacle is zero gradient almost everywhere. | /csci-566/midterm-review-2026/#q45 | Yes |
| Exam Q46, PDF p. 8; review 77, 81–83, 246–247 | 1×1 convolution plus global max | B · No, under the stated shared pointwise-map setup. | /csci-566/midterm-review-2026/#q46 | Yes |
| Exam Q47, PDF p. 8; review 220–223, 241–249 | Permutation-invariant functions | C · Identical elementwise ReLU followed by a symmetric maximum. | /csci-566/midterm-review-2026/#q47 | Yes |
| Exam Q48, PDF p. 8; review 208–223, 234–249 | Distance-weighted invariant aggregation | A · Yes: shared pairwise scoring followed by a symmetric weighted sum works. | /csci-566/midterm-review-2026/#q48 | Yes |
| Exam Q49, PDF p. 9; review 33–40 | A k-means centroid is a mean | A · The center of a cluster, computed as the mean of its assigned points. | /csci-566/midterm-review-2026/#q49 | Yes |
| Exam Q50, PDF p. 9; review 35–40 | k-means initialization and local solutions | B · It may converge to a poor local solution. | /csci-566/midterm-review-2026/#q50 | Yes |
| Exam Q51, PDF p. 9; review 28–30 | kNN regression uses an average | A · Average the target values of the nearest neighbors. | /csci-566/midterm-review-2026/#q51 | Yes |
| Exam Q52, PDF p. 9; review 109 | Residual connections and the chain rule | A · They add an identity path alongside a learned transformation. | /csci-566/midterm-review-2026/#q52 | Yes |
| Exam Q53, PDF p. 9; review 110–112, 158–159 | Clipping does not fix vanishing gradients | D · Standard clipping is not a remedy for vanishing gradients. | /csci-566/midterm-review-2026/#q53 | Yes |
| Exam Q54, PDF p. 9; review 105–109, 160–168 | Why gradients can vanish with depth | C · Repeated derivatives can make their product exponentially small. | /csci-566/midterm-review-2026/#q54 | Yes |
| Exam Q55, PDF p. 10; review 59–80, 198, 247 | What “deep” means in a CNN | C · The number of stacked convolutional layers is the best listed answer. | /csci-566/midterm-review-2026/#q55 | Yes |
| Exam Q56, PDF p. 10; review No supporting policy in the 2026 review | Historical grading statement | C in the archived key · A possible curve depends on the final score distribution. | /csci-566/midterm-review-2026/#q56 | Yes |

## Inputs

- `/Users/anthonymartinez/Downloads/midtermcsci566fall2025.pdf`: all 10 pages, all question stems and printed answers; activation and architecture figures visually checked.
- `/Users/anthonymartinez/Downloads/F26-midterm-review-250p.pdf`: all 250 pages extracted and reviewed, including the explicit preprocessing and max-pooling corrections.
- Existing CSCI 566 site shell and course landing page; no existing lesson IDs, note keys, content assets, or routes modified.

## Primary references for supplemental explanations

- https://cs231n.github.io/neural-networks-2/ — initialization and symmetry.
- https://scikit-learn.org/stable/common_pitfalls.html#data-leakage — training-only preprocessing.
- https://arxiv.org/abs/1611.07308 — graph autoencoder reconstruction.
- https://docs.jax.dev/en/latest/_autosummary/jax.nn.elu.html — ELU definition.
- https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_vc.html — VC dimension and the collinear-points caveat.

## Boundaries

Q3 is architecture dependent. Q22 has a printed-key error. Q27 needs the sample-count bound. Q28 has equivalent Big-O choices. Q31 is not unique for max pooling and mode-dependent BatchNorm. Q41 has a literal three-collinear-point counterexample to the intended four-point VC reading. Q45 depends on retaining hard loss plateaus. Q48 is resolved by shared order-independent scoring plus symmetric reduction. Q56 is not a verified 2026 grading policy.
