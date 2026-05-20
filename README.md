<!-- PROJECT HEADER -->
<div align="center" style="margin-bottom: 40px;">
  <!-- Accent Tag -->
  <code style="color: #CCFF00; background: rgba(204, 255, 0, 0.1); border: 1px solid rgba(204, 255, 0, 0.3); padding: 5px 12px; border-radius: 20px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">GenAI Architecture</code>
  
  <h1 style="font-size: 42px; font-weight: 800; margin: 15px 0 10px 0; letter-spacing: -1px; color: #ffffff;">Quantus AI <span style="color: #CCFF00;">(Lumina)</span></h1>
  
  <p style="font-size: 16px; color: #8a8a93; max-width: 600px; line-height: 1.6; margin: 0 auto 25px auto;">
    An automated, production-grade code auditing platform that intercepts bugs, diagnoses architectural flaws, and delivers optimized refactored alternatives in real time.
  </p>

  <!-- Tech Badges -->
  <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
    <img src="https://img.shields.io/badge/Gemini_API-Advanced_LLM-CCFF00?style=flat-square&logo=google-gemini&logoColor=black&labelColor=111111" alt="Gemini API">
    <img src="https://img.shields.io/badge/React-Interactive_UI-61DAFB?style=flat-square&logo=react&logoColor=61DAFB&labelColor=111111" alt="React">
    <img src="https://img.shields.io/badge/Tailwind_v4-Minimalist_Design-38BDF8?style=flat-square&logo=tailwindcss&logoColor=38BDF8&labelColor=111111" alt="Tailwind">
    <img src="https://img.shields.io/badge/Status-Production_Ready-emerald?style=flat-square&labelColor=111111" alt="Status">
  </div>
</div>

<hr style="border: 0; border-top: 1px solid #222225; margin: 40px 0;" />

<!-- VISUAL DIAGRAM / INTERACTIVE FEEL -->
<div style="background: #0d0d11; border: 1px solid #222225; border-radius: 8px; overflow: hidden; margin-bottom: 40px; font-family: monospace;">
  <!-- Terminal Top Bar -->
  <div style="background: #16161e; padding: 12px 20px; border-bottom: 1px solid #222225; display: flex; align-items: center; justify-content: space-between;">
    <div style="display: flex; gap: 6px;">
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #ff5f56; display: inline-block;"></span>
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e; display: inline-block;"></span>
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #27c93f; display: inline-block;"></span>
    </div>
    <span style="color: #6272a4; font-size: 11px; font-weight: bold; letter-spacing: 0.5px;">DIAGNOSTIC_PIPELINE.log</span>
  </div>
  
  <!-- Terminal Content -->
  <div style="padding: 24px; font-size: 13px; line-height: 1.6; color: #a9b1d6; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
    <!-- Left Column: Source Input -->
    <div style="border-right: 1px solid #222225; padding-right: 20px;">
      <span style="color: #ff2a6d; font-weight: bold;">⚡ USER SOURCE UPLOAD</span>
      <pre style="margin-top: 10px; background: transparent; padding: 0; color: #ff79c6;">
function processData(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // Hidden execution bottleneck
    if (arr.indexOf(arr[i]) === i) { 
      result.push(arr[i]);
    }
  }
  return result;
}</pre>
    </div>
    <!-- Right Column: AI Output -->
    <div>
      <span style="color: #CCFF00; font-weight: bold;">✨ QUANTUS AI REFRACTOR</span>
      <pre style="margin-top: 10px; background: transparent; padding: 0; color: #50fa7b;">
// Optimized to O(N) complexity
function processData(arr) {
  return [...new Set(arr)];
}

<span style="color: #ffb86c;">[!] Error Log:</span> Time complexity reduced 
    from quadratic O(N²) to linear O(N).</pre>
    </div>
  </div>
</div>

<!-- CORE VALUE PROPOSITION GRID -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 40px;">
  
  <!-- Feature 1 -->
  <div style="background: #0d0d11; border: 1px solid #222225; padding: 24px; border-radius: 6px;">
    <h3 style="color: #ffffff; margin: 0 0 8px 0; font-size: 16px; display: flex; align-items: center; gap: 8px;">
      <span style="color: #CCFF00;">01 /</span> Deep Diagnostics
    </h3>
    <p style="color: #8a8a93; margin: 0; font-size: 14px; line-height: 1.5;">
      Instantly isolates syntax anomalies, memory leaks, algorithmic inefficiencies, and structural anti-patterns before they hit production.
    </p>
  </div>

  <!-- Feature 2 -->
  <div style="background: #0d0d11; border: 1px solid #222225; padding: 24px; border-radius: 6px;">
    <h3 style="color: #ffffff; margin: 0 0 8px 0; font-size: 16px; display: flex; align-items: center; gap: 8px;">
      <span style="color: #CCFF00;">02 /</span> Intelligent Refactoring
    </h3>
    <p style="color: #8a8a93; margin: 0; font-size: 14px; line-height: 1.5;">
      Goes beyond simple bug flagging. It generates highly optimized, idiomatic, and clean alternative code blocks directly mapped to your logic.
    </p>
  </div>

  <!-- Feature 3 -->
  <div style="background: #0d0d11; border: 1px solid #222225; padding: 24px; border-radius: 6px;">
    <h3 style="color: #ffffff; margin: 0 0 8px 0; font-size: 16px; display: flex; align-items: center; gap: 8px;">
      <span style="color: #CCFF00;">03 /</span> Developer-Centric Logs
    </h3>
    <p style="color: #8a8a93; margin: 0; font-size: 14px; line-height: 1.5;">
      Provides concise explanations focusing on the *why* behind every correction, acting as an automated senior peer reviewer for faster onboarding.
    </p>
  </div>

  <!-- Feature 4 -->
  <div style="background: #0d0d11; border: 1px solid #222225; padding: 24px; border-radius: 6px;">
    <h3 style="color: #ffffff; margin: 0 0 8px 0; font-size: 16px; display: flex; align-items: center; gap: 8px;">
      <span style="color: #CCFF00;">04 /</span> Zero Pipeline Friction
    </h3>
    <p style="color: #8a8a93; margin: 0; font-size: 14px; line-height: 1.5;">
      Engineered for instantaneous compilation and review. Drop raw files or code snippets into the environment for a direct, low-latency layout diagnostic.
    </p>
  </div>

</div>

<hr style="border: 0; border-top: 1px solid #222225; margin: 40px 0;" />
