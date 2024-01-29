
## General Considerations

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Invest some time in styling it up.
    - [ ] Research cards for your movie posters on the list page.
    - [ ] Research grid for your movie posters on the Movie List page.
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update the `README` to include a description of the project in your own words.

---

## Stretch Goals

### 1. Add Movie Page

This should show:

- an input field (for the movie title)
- an input field (for the movie poster image URL)
- a textarea (for the movie description)
- a dropdown (to choose a **single** genres)
    - being able to select **multiple** genres would be neat, but only attempt that if you get this stretch goal working with choosing a single genre

The add movie page should have these buttons:

- `Cancel` button, which should bring the user to the Home/List Page.
- `Save` button, which should save these inputs in the database and bring the user back to the Home/List Page (which now includes the new movie).

**Note: Some stuff for this stretch goal already exists!**

- Look at the `POST /api/movies` route. It's been made already! It will perform two queries: one to store the movie information and another to store its associated genre in the junction table.
- You'll want to use the genres that are in the database, along with the `genres` reducer, to populate your dropdown.

### 2. Refresh-able Details Page w/ `useParams`

Allow the app to still work when the details page gets refreshed.

- The React Router route for the details page would be something like `/#/details/1` for the movie with an id of `1`. Research the `useParams` hook for React Router. (Be sure to look for **version 5**, or **v5**.)

### 3. Edit Page

On the details page, add an edit button that brings the user to the edit page.

This new page should show:

- an input field (for changing the movie title), for the selected movie
- a textarea (for changing the movie description)

The edit page should have these buttons:

- `Cancel` button, which should bring the user to the Details Page.
- `Save` button, which should update the title and description in the database and bring the user back to the Details Page.

### Other Ideas

- [ ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Move sagas and reducers out of your `store.js` and into separate files (ideally in `src/redux/reducers/` and `src/redux/sagas/` folders).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
