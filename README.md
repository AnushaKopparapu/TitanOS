## TitanOS frontend test task

### Objective
Create a horizontal list that can be navigated with left/right keyboards keys.

### Requirements
- Focused item always has to be in the first position.
- Use React state management library of your choice. Even though this application is quite basic, avoid using only the context API.
- Changing focus from one item to another should have a smooth transition.
- Use `images.artwork_portrait` as an item cover image.
- Do not use any libraries for list navigation.
- Implement the tests that you deem necessary (unit/e2e). 
- Feel free to use any react boilerplate you prefer for this project.
- The result should be shared as a git repository (private or public).

### Data

Use the following endpoint to retrieve the list contents:
https://acc01.titanos.tv/v1/genres/14/contents?market=es&device=tv&locale=es&page=1&per_page=50