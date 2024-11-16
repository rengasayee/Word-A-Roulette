# Word-A-Roulette game

Rules : 
<br />
<br />

-- **Entering words:** <br />
      &ensp; -- user enters a letter & a square is filled with that letter<br />
      -- when a user hits delete it deletes the previous letter<br />
      -- when a user hits enter it submits the word<br />
      -- if all squares are not filled with letters then the word is not submitted <br />
      -- if that word has already been used in a prev guess then the word is not submitted <br />
-- **Checking submitted words:** <br />
  -- each letter is checked to see if it matches to the solution <br />
  -- each letter is assigned a color based on it's inclusion in the solution <br />
    -- exact matches (correct position in the solution) are green <br />
    -- partial matches (in the solution but not the correct position) are yellow <br />
    -- none-matches (not in the solution at all) are grey <br />
  -- the guess is added to the grid with the correct colors <br />
  -- the current guess moves to the next row <br />
  -- the keypad letters are updated (colors) <br />
-- **Ending the game:** <br />
  -- when the guessed word fully matches the solution <br />
    -- modal to say 'well done' <br />
  -- when the user runs out of guesses <br />
    -- modal to say 'unlucky'

