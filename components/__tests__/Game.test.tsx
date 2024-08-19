import * as React from "react";
import { render, screen, userEvent } from "@testing-library/react-native";

import { Game } from "../Game";
import { RootSiblingParent } from "react-native-root-siblings";
jest.useFakeTimers();

describe("Board tests", () => {
  it(`renders proper rows and tiles on app load`, async () => {
    render(<Game />);
    const tileRows = await screen.findAllByLabelText("tileRow");
    const tiles = await screen.findAllByLabelText("tile");
    expect(tileRows.length).toBe(6);
    expect(tiles.length).toBe(30);
  });

  it(`renders proper rows and tiles after a guess`, async () => {
    render(<Game />);
    const guess = "ANIME";
    for (let i = 0; i < guess.length; i++) {
      const letter = await screen.findByTestId(guess[i]);
      userEvent.press(letter);
    }
    const enter = await screen.findByTestId("ENTER");
    userEvent.press(enter);
    const tileRows = await screen.findAllByLabelText("tileRow");
    const tiles = await screen.findAllByLabelText("tile");

    expect(tiles[0].props.children.props.children).toBe("A");
    expect(tiles[1].props.children.props.children).toBe("N");
    expect(tiles[2].props.children.props.children).toBe("I");
    expect(tiles[3].props.children.props.children).toBe("M");
    expect(tiles[4].props.children.props.children).toBe("E");
    expect(tileRows.length).toBe(6);
    expect(tiles.length).toBe(30);
  });
});

describe("Toast tests", () => {
  it(`should display toast with error message if not enough letters pressed`, async () => {
    render(
      <RootSiblingParent>
        <Game />
      </RootSiblingParent>
    );
    const q = await screen.findByTestId("Q");
    userEvent.press(q);
    const enter = await screen.findByTestId("ENTER");
    userEvent.press(enter);

    const toast = await screen.findByLabelText("not enough letters");
    expect(toast).toBeDefined();
  });

  it(`should display toast with error message if game lost`, async () => {
    render(
      <RootSiblingParent>
        <Game useWord="aback" />
      </RootSiblingParent>
    );
    const guesses = ["ANIME", "ANIME", "ANIME", "ANIME", "ANIME", "ANIME"];
    for (const guess of guesses) {
      for (let i = 0; i < guess.length; i++) {
        const letter = await screen.findByTestId(guess[i]);
        userEvent.press(letter);
      }
      const enter = await screen.findByTestId("ENTER");
      userEvent.press(enter);
    }
    const toast = await screen.findByLabelText("game lost");
    expect(toast).toBeDefined();
  });

  it(`should display toast message with error message if word not in list`, async () => {
    render(
      <RootSiblingParent>
        <Game />
      </RootSiblingParent>
    );
    const guess = "ABCDE";
    for (let i = 0; i < guess.length; i++) {
      const letter = await screen.findByTestId(guess[i]);
      userEvent.press(letter);
    }
    const enter = await screen.findByText("ENTER");
    userEvent.press(enter);
    const toast = await screen.findByLabelText("Not in word list");
    expect(toast).toBeDefined();
  });
});

describe("Confetti Tests", () => {
  it(`should render confetti if game is won`, async () => {
    render(<Game useWord={"ANIME"} />);
    const guess = "ANIME";
    for (let i = 0; i < guess.length; i++) {
      const letter = await screen.findByTestId(guess[i]);
      userEvent.press(letter);
    }
    const enter = await screen.findByTestId("ENTER");
    userEvent.press(enter);
    const confetti = await screen.findByTestId("confetti");
    expect(confetti).toBeDefined();
  });
});
