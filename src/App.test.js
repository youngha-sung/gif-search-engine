import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders search form', () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Search GIPHY");
    expect(input).toBeInTheDocument();
});

describe('Navigation', () => {
    test('Search link should link to search page', () => {
        render(<App />);
        const link = screen.getByText("Search GIFs");
        fireEvent.click(link);
        const currentPath = window.location.pathname;
        expect(currentPath).toEqual("/");
    });

    test('Favorites link should link to favorites page', () => {
        render(<App />);
        const link = screen.getByText("My Favorites");
        fireEvent.click(link);
        const currentPath = window.location.pathname;
        expect(currentPath).toEqual("/favorites");
    });
});

