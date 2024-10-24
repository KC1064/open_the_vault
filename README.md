# DigiCipher 🔐

DigiCipher is a logic-based puzzle game where players attempt to guess a secret 4-digit code. It offers two modes: **Classic** and **Challenger**, each with its own set of rules and challenges. The game is built using modern web technologies including React, Chakra UI, and GSAP for smooth animations and a responsive user interface.

## 🕹️ Demo

Check out the live demo of DigiCipher by visiting the following link:

👉 [**Click Here**](https://open-the-vault.vercel.app/) 👈

Feel free to try out both Classic and Challenger modes and see if you can crack the code!

---

## 🚀 Features

- **Two Game Modes**:
  - **Classic Mode**: Focuses on logical reasoning with a limited number of guesses.
  - **Challenger Mode**: Adds a timed element, pushing players to crack the code before the timer runs out.
  
- **LeaderBoard**: *(Under Development)* 🌟
  - A global leaderboard will be added soon to track top players and fastest times across both modes.

---

## 🎮 Game Modes

### 🎯 Classic Mode

In Classic Mode, the main goal is to guess the correct 4-digit number with **unique digits** within the given attempts. Players receive color-coded feedback to refine their guesses and crack the code.

#### 📝 Rules:
1. Guess the **4-digit** number using the **numpad**.
2. After each guess, feedback is given through background color changes:
   - **🟩 Green**: The digit is correct and in the correct position.
   - **🟨 Yellow**: The digit is correct but in the wrong position.
   - **🟥 Red**: The digit is not present in the number.
3. Use the **Del.** button to delete your input and **Ent.** to confirm your guess.
4. You have **4 chances** to guess the correct number.

### ⏳ Challenger Mode

In Challenger Mode, players must guess the 4-digit code before the timer runs out. This mode adds a time-pressured challenge, enhancing both speed and strategy.

#### 📝 Rules:
1. The computer selects a unique **4-digit number** with no repeating digits.
2. Your goal is to guess the code before the **timer** runs out.
3. After each guess, feedback is provided in a table:
   - **Position**: How many digits are in the correct position.
   - **Digits**: How many of your guessed digits are part of the code, regardless of position.
4. You can make multiple guesses until you either crack the code or the timer expires.
5. If you're stuck, use the **'Give Up'** button to reveal the code and restart the game.

---

## 🛠️ Tech Stack
- **React**
- **Tailwind CSS**
- **Chakra UI**
- **GSAP**

---

## 🚧 Getting Started 

1. Clone the repository:
   ```bash
   git clone https://github.com/PJyoti04/digicipher.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Visit `http://localhost:5173` in your browser to play DigiCipher.

---

# MIT License 📜✨

**Copyright (c) 2024 DigiCipher**

🌟 Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

---

**The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.**

---

🚫 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Made with ❤️ by the DigiCipher team! 🚀

---

Enjoy playing DigiCipher and test your code-cracking skills! 🎉🧠🔓