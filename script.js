
    function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }
    
    function calculate() {
      const displayValue = document.getElementById('display').value;
      try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
      } catch (error) {
        document.getElementById('display').value = 'Erro';
      }
    }
    
    function clearDisplay() {
      document.getElementById('display').value = '';
    }
    
    function calculateSin() {
      const displayValue = parseFloat(document.getElementById('display').value);
      const result = Math.sin(displayValue);
      document.getElementById('display').value = result;
    }
    
    function calculateCos() {
      const displayValue = parseFloat(document.getElementById('display').value);
      const result = Math.cos(displayValue);
      document.getElementById('display').value = result;
    }
    
    function calculateTan() {
      const displayValue = parseFloat(document.getElementById('display').value);
      const result = Math.tan(displayValue);
      document.getElementById('display').value = result;
    }
    
    function calculateSqrt() {
      const displayValue = parseFloat(document.getElementById('display').value);
      const result = Math.sqrt(displayValue);
      document.getElementById('display').value = result;
    }
