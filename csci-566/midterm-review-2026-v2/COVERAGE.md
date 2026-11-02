# V2 question coverage and answer audit

All 56 items are newly authored variations, not a historical key. The supplied archived exam and 250-page review provide the conceptual basis. Existing V1 content remains intact except for links to this new page.

| V2 item | Topic | V2 key | Supporting review context | Visible explanation |
|---|---|---|---|---|
| Q1 | Overfitting: reducing model capacity | C | 14–21, especially the model-complexity graph on p. 14; BatchNorm support on pp. 126–134 | Worked example + concept comparison + takeaway |
| Q2 | CNN learned spatial feature extraction | A | 73–85 (convolution and pooling calculations); 126–134 for BatchNorm arithmetic | Worked example + concept comparison + takeaway |
| Q3 | All-zero initialization in a specified multilayer network | D | 95–104, 122–125 | Worked example + concept comparison + takeaway |
| Q4 | Parameters in multiple 1×1 filters | B | 75–78 | Worked example + concept comparison + takeaway |
| Q5 | Gradient clipping versus vanishing gradients | C | 110–112, 158–159 | Worked example + concept comparison + takeaway |
| Q6 | Selecting decision-tree pruning strength | B | 14–21 | Worked example + concept comparison + takeaway |
| Q7 | RNN vanishing-gradient diagnosis | A | 108–112, 160–168 | Worked example + concept comparison + takeaway |
| Q8 | GNN oversmoothing versus weight penalties | D | 135–137, 218, 225–227 | Worked example + concept comparison + takeaway |
| Q9 | GNN graph-level readout | C | 206–215 | Worked example + concept comparison + takeaway |
| Q10 | CNN downsampling without pooling | A | 73–83 | Worked example + concept comparison + takeaway |
| Q11 | Testing average-pooling linearity | B | 48–56, 83 | Worked example + concept comparison + takeaway |
| Q12 | Depth without nonlinear activations | D | 41, 48–56 | Worked example + concept comparison + takeaway |
| Q13 | Forward computation with bias and ReLU | C | 51–54 | Worked example + concept comparison + takeaway |
| Q14 | Decision-tree prediction cost | A | 10–21 | Worked example + concept comparison + takeaway |
| Q15 | GNN feature compatibility | C | 225–236, 240, 247 | Worked example + concept comparison + takeaway |
| Q16 | Direction-preserving GNN messages | B | 206–219; directed-edge explanation added | Worked example + concept comparison + takeaway |
| Q17 | Supervision versus graph reconstruction | D | 206–230; autoencoder explanation added | Worked example + concept comparison + takeaway |
| Q18 | Label-preserving data augmentation | A | 122–125, 135–146 | Worked example + concept comparison + takeaway |
| Q19 | Activation recognition from range and midpoint | C | 55, 106–108 | Worked example + concept comparison + takeaway |
| Q20 | Leaky ReLU versus ELU | B | 55–56; ELU formula added | Worked example + concept comparison + takeaway |
| Q21 | Sigmoid saturation and gradient response | A | 55–56, 105–108 | Worked example + concept comparison + takeaway |
| Q22 | Preprocessing inside cross-validation | D | 4–9 | Worked example + concept comparison + takeaway |
| Q23 | BatchNorm evaluation arithmetic | B | 126–134, 156–157 | Worked example + concept comparison + takeaway |
| Q24 | Bias-inclusive dense parameter counting | C | 45–47 | Worked example + concept comparison + takeaway |
| Q25 | RNN parameter sharing across time | A | 108–112, 160–168 | Worked example + concept comparison + takeaway |
| Q26 | Convolution output shape with stride | D | 59–85 | Worked example + concept comparison + takeaway |
| Q27 | Sample-limited binary-tree leaves | B | 10–21; combinatorial derivation added | Worked example + concept comparison + takeaway |
| Q28 | Exact binary-attribute path length | C | 10–21; tree-depth derivation added | Worked example + concept comparison + takeaway |
| Q29 | Continuous-tree depth under balance | A | 10–21; combinatorial derivation added | Worked example + concept comparison + takeaway |
| Q30 | Tree growth with a minimum leaf size | D | 10–21; tree-depth derivation added | Worked example + concept comparison + takeaway |
| Q31 | Strict linearity versus affine transformations | B | 48, 81–83, 126–134 | Worked example + concept comparison + takeaway |
| Q32 | kNN hyperparameters versus learned weights | C | 28–32 | Worked example + concept comparison + takeaway |
| Q33 | Convolution parameter count without biases | A | 59–76 | Worked example + concept comparison + takeaway |
| Q34 | Neural-network inference versus training-set size | C | 28–32, 41–47 | Worked example + concept comparison + takeaway |
| Q35 | Ridge regression and smooth shrinkage | D | 135–137; L1 sparsity explanation added | Worked example + concept comparison + takeaway |
| Q36 | The half-squared-loss factor | B | 89, 95–104, 113–121 | Worked example + concept comparison + takeaway |
| Q37 | A nonlinear input feature changes the function class | A | 41, 48–50; function-class comparison added | Worked example + concept comparison + takeaway |
| Q38 | Optimization versus representational equivalence | C | 48–50; effective-slope derivation added | Worked example + concept comparison + takeaway |
| Q39 | A rare observation can be valid | B | 28–32; outlier explanation added | Worked example + concept comparison + takeaway |
| Q40 | Feature scaling and kNN distances | D | 28–32; outlier explanation added | Worked example + concept comparison + takeaway |
| Q41 | Convexity of a disk classifier | A | Supplemental geometric derivation; not directly taught in the supplied review | Worked example + concept comparison + takeaway |
| Q42 | Training MSE and residuals | C | 4–21, 147–150 | Worked example + concept comparison + takeaway |
| Q43 | Bias-inclusive MLP count | D | 41–47 | Worked example + concept comparison + takeaway |
| Q44 | Constructing absolute value with ReLU | B | 48–50 | Worked example + concept comparison + takeaway |
| Q45 | Differentiable surrogate losses | A | 87–89 | Worked example + concept comparison + takeaway |
| Q46 | Shuffling pixels before a spatial convolution | C | 77, 81–83, 246–247 | Worked example + concept comparison + takeaway |
| Q47 | Permutation equivariance versus invariance | D | 220–223, 241–249 | Worked example + concept comparison + takeaway |
| Q48 | A slot-dependent aggregation counterexample | B | 208–223, 234–249 | Worked example + concept comparison + takeaway |
| Q49 | Centroid arithmetic | C | 33–40 | Worked example + concept comparison + takeaway |
| Q50 | Comparing k-means restarts | A | 35–40 | Worked example + concept comparison + takeaway |
| Q51 | kNN classification instead of regression | D | 28–30 | Worked example + concept comparison + takeaway |
| Q52 | Residual-path gradient calculation | B | 109 | Worked example + concept comparison + takeaway |
| Q53 | Coordinate clipping versus global norm clipping | C | 110–112, 158–159 | Worked example + concept comparison + takeaway |
| Q54 | Exploding chain-rule products | A | 105–109, 160–168 | Worked example + concept comparison + takeaway |
| Q55 | CNN width versus depth | D | 59–80, 198, 247 | Worked example + concept comparison + takeaway |
| Q56 | Conditional statements and unsupported conclusions | C | Hypothetical logic exercise; no grading-policy source | Worked example + concept comparison + takeaway |

## Key design changes

- Q2 now asks about learned spatial feature extraction, so convolution is correct. It does not claim convolution is cheaper than max pooling.
- Q3 specifies a two-layer all-zero tanh network and simultaneous gradients.
- Q27 explicitly includes sample-count limits.
- Q28 asks for exact depth under a declared convention.
- Q31 uses strict linearity with fixed-window averaging and a nonzero convolution bias.
- Q41 specifies the collinear configuration.
- Q56 is an invented conditional statement, with no claim about current policy.

## Isolation

V2 browser storage prefix: `csci566-midterm-review-2026-v2:`. V1 answers, notes, and review status are not read or overwritten. All 56 V2 keys are scored and linked to their rewritten question.
