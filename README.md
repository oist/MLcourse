# Introduction to Machine Learning — Course Site (OIST, B46)

Static site for the course page, deployable via GitHub Pages.

## Structure

- `index.html` — page shell, has a year dropdown, renders content into `#course-content`.
- `js/course-data.js` — all syllabus content, keyed by year (`COURSE_DATA[2026]`, ...). This is the only file you need to touch to add a new year.
- `js/main.js` — reads `COURSE_DATA` and renders the selected year.
- `css/style.css` — styling.

## Adding next year (e.g. 2027)

1. Open `js/course-data.js`.
2. Copy the most recent year's object (e.g. `2026: { ... }`) and change the key to the new year.
3. Update whatever changed: instructor, meeting days/first class date, schedule, textbooks, grading, etc.
4. Update `DEFAULT_YEAR` at the bottom of the file to the new year.
5. Commit and push — no other files need to change. The dropdown and content picker pick up the new year automatically.

## Local preview

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
