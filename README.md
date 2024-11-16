# Word-A-Roulette game

Rules : 
<br />
<br />

-- **Entering words:** <br />
      &ensp; -- user enters a letter & a square is filled with that letter<br />
      &ensp; -- when a user hits delete it deletes the previous letter<br />
      &ensp; -- when a user hits enter it submits the word<br />
      &emsp; -- if all squares are not filled with letters then the word is not submitted <br />
      &emsp; -- if that word has already been used in a prev guess then the word is not submitted <br />
-- **Checking submitted words:** <br />
  &ensp; -- each letter is checked to see if it matches to the solution <br />
  &ensp; -- each letter is assigned a color based on it's inclusion in the solution <br />
    &emsp; -- exact matches (correct position in the solution) are green <br />
    &emsp; -- partial matches (in the solution but not the correct position) are yellow <br />
    &emsp; -- none-matches (not in the solution at all) are grey <br />
  &ensp; -- the guess is added to the grid with the correct colors <br />
  &ensp; -- the current guess moves to the next row <br />
  &ensp; -- the keypad letters are updated (colors) <br />
-- **Ending the game:** <br />
  &ensp; -- when the guessed word fully matches the solution <br />
    &emsp; -- modal to say 'well done' <br />
  &ensp; -- when the user runs out of guesses <br />
    &emsp; -- modal to say 'unlucky'

