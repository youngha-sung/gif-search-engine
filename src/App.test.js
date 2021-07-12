import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders search form', () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Search GIPHY");
    expect(input).toBeInTheDocument();
});

xdescribe('On form submission', () => {
    test('should make api request', async () => {
        render(<App />);
        const input = screen.getByPlaceholderText("Search GIPHY");
        fireEvent.change(input, { target: { value: 'What Happened Something GIF by Lucifer' } })

        await waitFor(() => screen.getByRole('img'));
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});

