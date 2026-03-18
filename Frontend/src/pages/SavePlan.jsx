import React, { useState } from 'react';
import '../styles/SavePlan.css';

export default function SavePlan() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [savingsGoal, setSavingsGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const savingsAmount = Number(monthlyIncome) - Number(monthlyExpenses);
    const monthsNeeded = savingsAmount > 0 ? Math.ceil(Number(savingsGoal) / savingsAmount) : 0;

    alert(`
      Renda Mensal: €${monthlyIncome}
      Despesas Mensais: €${monthlyExpenses}
      Poupança Mensal: €${savingsAmount}
      Meta de Poupança: €${savingsGoal}
      Tempo Estimado: ${monthsNeeded} meses
    `);
  };

  return (
    <div className="save-plan-container">
      <div className="save-plan-content">
        <h1>Planeador de Poupança</h1>
        <p>Calcula quanto tempo demora a poupar o seu objetivo financeiro</p>
        
        <form className="save-plan-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="monthlyIncome">Renda Mensal (€)</label>
            <input
              type="number"
              id="monthlyIncome"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="Ex: 2000"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="monthlyExpenses">Despesas Mensais (€)</label>
            <input
              type="number"
              id="monthlyExpenses"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(e.target.value)}
              placeholder="Ex: 1500"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="savingsGoal">Meta de Poupança (€)</label>
            <input
              type="number"
              id="savingsGoal"
              value={savingsGoal}
              onChange={(e) => setSavingsGoal(e.target.value)}
              placeholder="Ex: 5000"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Calcular Plano de Poupança
          </button>
        </form>

        <div className="info-section">
          <h2>Como funciona:</h2>
          <ul>
            <li>Insira a sua renda mensal</li>
            <li>Insira as suas despesas mensais</li>
            <li>Define a sua meta de poupança</li>
            <li>Obtém o tempo estimado para atingir o seu objetivo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
