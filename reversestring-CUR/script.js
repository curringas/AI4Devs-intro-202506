document.addEventListener('DOMContentLoaded', () => {

    const input      = document.getElementById('inputText');
    const btn        = document.getElementById('reverseBtn');
    const resultBox  = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');
    const placeholder = document.getElementById('placeholder');
    const resultLabel = document.getElementById('resultLabel');
  
    // ── Core logic ──────────────────────────────────────────────
    const reverseString = str => [...str].reverse().join('');
  
    // ── Render result ────────────────────────────────────────────
    const showResult = () => {
      const value = input.value.trim();
  
      if (!value) {
        clearResult();
        input.focus();
        input.style.borderColor = '#ef4444';
        input.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.2)';
        setTimeout(() => {
          input.style.borderColor = '';
          input.style.boxShadow   = '';
        }, 1500);
        return;
      }
  
      const reversed = reverseString(value);
  
      // Forzar re-animación clonando el nodo
      resultText.style.display = 'none';
      resultText.textContent   = reversed;
      placeholder.style.display = 'none';
      resultText.style.display = 'inline';
  
      resultBox.classList.add('has-result');
      resultLabel.textContent = `${value.length} carácter${value.length !== 1 ? 'es' : ''}`;
    };
  
    const clearResult = () => {
      resultText.style.display  = 'none';
      placeholder.style.display = 'inline';
      resultBox.classList.remove('has-result');
      resultLabel.textContent   = '';
    };
  
    // ── Events ───────────────────────────────────────────────────
    btn.addEventListener('click', showResult);
  
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') showResult();
    });
  
    input.addEventListener('input', () => {
      if (!input.value) clearResult();
    });
  
  });