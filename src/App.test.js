// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RareForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RareForge/i);
    expect(titleElement).toBeInTheDocument();
});
