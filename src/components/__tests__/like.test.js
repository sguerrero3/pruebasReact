import {render, screen, fireEvent} from "@testing-library/react";
import Like from "../like";

test("Default to 0 likes", ()=>{
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Like up by one", ()=>{
    render(<Like />);
    fireEvent.click(screen.getByTestId("like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Like down by one", ()=>{
    render(<Like />);
    fireEvent.click(screen.getByTestId("dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})