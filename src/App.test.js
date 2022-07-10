import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// • tasks submitted are displayed
// • submission button adds task (fireEvent)
// • deletion of an item removed the element so it is no longer displayed to the user


test('renders add button', () => {
  render(<App />);
  let addBtn = screen.getByRole("button");
  expect(addBtn).toBeInTheDocument();
});

test("submission button adds and displays task", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  userEvent.type(input, "Wash")
  const button = screen.getByText("Add");
  fireEvent.click(button);

  const text = screen.getByText("Wash");
  expect(text).toBeInTheDocument();
});

test("Deleted tasks are no longer displayed", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  userEvent.type(input, "Wash")
  const button = screen.getByText("Add");
  fireEvent.click(button);
  const text = screen.getByText("Wash");
  const deleteBtn = screen.getByText("Delete")
  fireEvent.click(deleteBtn);
  expect(text).not.toBeInTheDocument();
});
