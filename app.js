document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    // Function to update accessibility attributes
    const updateButtonAccessibility = (theme) => {
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro');
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro');
    };

    // Initialize button state based on current theme (set by head script)
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateButtonAccessibility(currentTheme);

    // Toggle theme on click
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('color-scheme', newTheme);
      
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) {
        meta.content = newTheme;
      }
      
      updateButtonAccessibility(newTheme);
    });
  }

  // Smooth scroll for footer link if there are anchors, or extra visual flourishes
  // We can add autofill or focus behaviors if needed.
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    // Optional focus on page load for search-oriented pages
    searchInput.focus();
  }
});
