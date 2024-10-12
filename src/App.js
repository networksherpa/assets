import React, { useState } from 'react';

const App = () => {
  const [socialAccounts, setSocialAccounts] = useState([
    { name: '', shared: false, passwordSafe: false, mfaEnabled: false, strongPassword: false }
  ]);

  // Function to add a new account entry
  const addAccount = () => {
    setSocialAccounts([
      ...socialAccounts,
      { name: '', shared: false, passwordSafe: false, mfaEnabled: false, strongPassword: false }
    ]);
  };

  // Function to handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedAccounts = socialAccounts.map((account, idx) =>
      index === idx ? { ...account, [field]: value } : account
    );
    setSocialAccounts(updatedAccounts);
  };

  // Function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', socialAccounts);
    alert('Survey submitted! Check console for data.');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Survey: What Social Media Accounts Do You Use?</h2>
      <form onSubmit={handleSubmit}>
        {socialAccounts.map((account, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <label>
              Account Name:
              <input
                type="text"
                value={account.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
              />
            </label>
            <br />
            <label>
              Shared?
              <input
                type="checkbox"
                checked={account.shared}
                onChange={(e) => handleInputChange(index, 'shared', e.target.checked)}
              />
            </label>
            <br />
            <label>
              Stored in Password Safe?
              <input
                type="checkbox"
                checked={account.passwordSafe}
                onChange={(e) => handleInputChange(index, 'passwordSafe', e.target.checked)}
              />
            </label>
            <br />
            <label>
              MFA Enabled?
              <input
                type="checkbox"
                checked={account.mfaEnabled}
                onChange={(e) => handleInputChange(index, 'mfaEnabled', e.target.checked)}
              />
            </label>
            <br />
            <label>
              Strong Password?
              <input
                type="checkbox"
                checked={account.strongPassword}
                onChange={(e) => handleInputChange(index, 'strongPassword', e.target.checked)}
              />
            </label>
            <hr />
          </div>
        ))}
        <button type="button" onClick={addAccount}>
          Add Another Account
        </button>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;