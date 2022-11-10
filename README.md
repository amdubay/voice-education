# voice-education

This project is meant to help my child develop his speech.

To give a little background, my son is a late speaker.
He has greatly improved, but he can still be a bit stubborn. If I try to do learning games with him to get him to refine his speech, not only does he lose interest, but he often flat-out refuses to participate.

He loves cars and trucks, and I have used that to my advantage before. I have built racetracks on poster board with letters, numbers, pictures along the way, that he has to pronounce before he can proceed. However, it doesn't defeat his stubborness. When going through the alphabet (on the racetrack) there are certain parts of the alphabet that he refuses to deviate from the tempo of the alphabet song. For example, he refuses to go slowly through "L, M, N, O, and P". While he should be stopping at each letter and annunciating each, "L", "M", "N", "O", and "P", he will only speed through it like the song "lmnop". He does the same thing with "W and X". Additionally, he refuses to hold back when I tell him he has mis-pronounced a letter.

That's where this project comes in. The end goal is to create a cool voice recognition game that uses cars, trucks, racetracks, and other imagery as well to keep my son engaged, as well as accountable to accuracy.

The end product will likely be a mostly touch free experience (no mouse, keyboard, or touchscreen), with any touching solely to go to different sections, levels, or challenges. The final product flow has not fully been decided yet, however, the two competing ideas are: 1) Storyboard style. The 'game' is a story that progresses as each letter/number/word is said correctly. 2) Game-mode. For example, the user may be racing against another car. With every letter/number/word said correctly, the user's car will move ahead, with an incorrect answer, the opponent car may move ahead.
Additionally, the product will initially use text-to-speech to ask the questions ("what is this color?"), but it may later be decided to add actual human voice-over.

The product will start simple to get all the moving parts in place. This means no game or story aspect to it, will only initially ask for letters of the alphabet, will keep running score.

The flow of the initial product will be as follows:

1. page loads with button to start, user clicks start. (the running score also loads too, which will start at 0)
2. A random letter of the alphabet is displayed on the screen
3. A text-to-voice audio plays asking "what is this letter?"
4. A 'ding' sound is played to indicate that the computer microphone is now listening.
5. User (should) say the letter.
   5.1 - If audio is recorded, play alt "done-ding" sound to indicate recording stopped, but successfully heard. proceed to step 5.2 or 5.3
   5.2 - If speech to text matches the letter correctly, play text-to-voice "great job, you got it!" go to step 6. (score as correct)
   5.3 - If speech is incorrect, play text-to-voice, "I'm sorry, I didn't hear the correct answer". Then start back to step 3. Repeat max 3 or so times, if still not said correctly, go to step 6. (score as incorrect)
   5.4 - If no audio is detected, play alt 'bad-ding' sound to indicate recording stopped, nothing was heard. Same action as 5.3.
6. Score as determined, start back at step 2.
