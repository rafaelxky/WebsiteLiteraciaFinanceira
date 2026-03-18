import React, { useState } from 'react';
import '../styles/BudgetTracker.css';

export default function BudgetTracker() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseInput, setExpenseInput] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    if (expenseInput.trim() && expenseAmount) {
      setExpenses([
        ...expenses,
        { id: Date.now(), name: expenseInput, amount: Number(expenseAmount) }
      ]);
      setExpenseInput('');
      setExpenseAmount('');
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const balance = Number(income) - totalExpenses;

  return (
    <div className="budget-container">
      <div className="budget-content">
        <h1>Rastreador de Orçamento</h1>
        <p>Controla o teu rendimento e despesas de forma simples</p>

        <div className="budget-grid">
          {/* Seção de Rendimento */}
          <div className="budget-section income-section">
            <h2>Rendimento Mensal</h2>
            <div className="income-input-group">
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Insira o seu rendimento"
                className="large-input"
              />
              <p className="income-display">€{Number(income) || 0}</p>
            </div>
          </div>

          {/* Seção de Despesas */}
          <div className="budget-section expenses-section">
            <h2>Despesas</h2>
            <div className="expense-input-group">
              <input
                type="text"
                value={expenseInput}
                onChange={(e) => setExpenseInput(e.target.value)}
                placeholder="Nome da despesa"
                className="medium-input"
              />
              <input
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                placeholder="Montante (€)"
                className="medium-input"
              />
              <button onClick={handleAddExpense} className="btn-add">+</button>
            </div>

            <div className="expenses-list">
              {expenses.length === 0 ? (
                <p className="empty-message">Nenhuma despesa adicionada ainda</p>
              ) : (
                expenses.map((expense) => (
                  <div key={expense.id} className="expense-item">
                    <div className="expense-info">
                      <span className="expense-name">{expense.name}</span>
                      <span className="expense-amount">€{expense.amount.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteExpense(expense.id)}
                      className="btn-delete"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Resumo */}
          <div className="budget-section summary-section">
            <h2>Resumo</h2>
            <div className="summary-item">
              <span>Rendimento:</span>
              <span className="amount income">€{Number(income) || 0}</span>
            </div>
            <div className="summary-item">
              <span>Total Despesas:</span>
              <span className="amount expense">€{totalExpenses.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item balance">
              <span>Saldo:</span>
              <span className={`amount ${balance >= 0 ? 'positive' : 'negative'}`}>
                €{balance.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
