# Full Stack Quiz

A small browser quiz about frontend, backend, and database fundamentals. Built while practising JavaScript arrays, objects, functions, events, and DOM updates.

## Live demo

[Play the quiz](https://dannyevers83.github.io/full-stack-quiz/).

## Features

- Three multiple-choice questions with immediate feedback.
- Retry incorrect answers until the correct answer is chosen.
- Answer buttons lock after a correct response.
- Question progress, a completion message, and a restart button.
- Keyboard controls with visible focus and focus movement between questions.
- Screen-reader announcements for answer feedback.

This is a frontend learning project. It has no backend, database, or numerical score.

## Run locally

Open `index.html` in a browser. No installation or build step is required.

## Controls

Use Tab and Shift+Tab to navigate, and Enter or Space to activate a button. After a correct answer, focus moves to Next. After changing questions, focus moves to the question text. On completion, focus moves to Restart.

## Files

- `index.html`: page structure and controls.
- `style.css`: layout, colors, and focus styles.
- `app.js`: question data, answer checking, progress, and restart behavior.

## What I practised

Arrays of objects, zero-based indexes, function parameters, event listeners, conditions, dynamically created buttons, and accessible focus management.

## Manual checks

- An incorrect answer allows another attempt and leaves Next disabled.
- A correct answer locks the answers and enables Next.
- Each new question has three enabled answers and updated progress.
- Completion clears the answers and progress and shows Restart.
- Restart returns to question one with Next disabled.
- The quiz can be completed using the keyboard.
