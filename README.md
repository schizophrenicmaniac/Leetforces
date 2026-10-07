# LeetForces

A LeetCode-style workspace for Codeforces problems: statement on the left, C++ editor on the right,
testcase console underneath, one-click Run and Submit.

## Install (Chrome / Edge / Brave)
1. Unzip this folder somewhere permanent.
2. Open `chrome://extensions` and turn on **Developer mode** (top right).
3. Click **Load unpacked** and pick the unzipped `cf-code-mode` folder.
4. Open any problem, e.g. https://codeforces.com/problemset/problem/1950/E

You must be logged in to Codeforces; Run and Submit use your own session.

## Features
- Resizable split view (drag the gutters; double-click the horizontal one to collapse the console)
- CodeMirror 6 C++ editor: syntax highlighting, bracket matching, autocomplete + snippets
  (`fori`, `forr`, `fore`, `testcases`, `readvec`, `fastio`…), search (Ctrl+F), optional Vim mode
- Code autosaves per problem; default template is editable in Settings
- **Run** (Ctrl+'): runs every testcase on Codeforces Custom Invocation and compares output token-by-token
  (floats with 1e-6 tolerance, YES/NO case-insensitive), highlighting mismatched lines
- Sample tests are loaded automatically; add/edit your own cases (saved per problem)
- **Submit** (Ctrl+Enter): submits to Codeforces and shows the live verdict ("Running on test 7" → Accepted)
- Submissions tab (your attempts for this problem), Editorial tab (contest tutorial links)
- Difficulty rating, limits, hidden-by-default topic tags, stopwatch, dark/light theme
- Compilers: C++20 (GCC 13), C++23 (GCC 14), C++17 (GCC 7.3)
- **Classic** button returns to the normal Codeforces page; a floating "LeetForces" button brings it back

## Notes
- Problems with multiple valid answers can show "Wrong Answer" on Run even when correct; Submit is the judge.
- Interactive problems: Run only feeds your stdin, the interactor isn't simulated.
- If Codeforces ever blocks a programmatic submit, the panel offers "Copy code & open classic submit page".
