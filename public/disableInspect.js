document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
  });
  
  document.onkeydown = function (e) {
    
    if (
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
      (e.key === 'F12' || e.keyCode === 123)
    ) {
      e.preventDefault();
    }
  };
  