# List of ADR's
This document contains the reasoning for decisions I made about implementing and developing this app. I didn't want too many ADR's for
small decisions, but any decisions that has a lot of factors will have it's own separate ADR.

# Storage
### All user storage will be kept in localStorage
- It is easy to use and is already implemented

### Clothing
- Each piece of clothing will be it's own item containing a JSON type structure containing:
  - Name
  - Tags
  - Date
  - Number of Fits
  - Frequency Worn
- Each item will be accessed with a key: NameNumber
  - Name = lowercase, no spaces
  - Number = based on the current itemNumber value

### Fits
- Each fit will be it's own item containing a JSON type structure containing:
  - Name
  - Tags
  - Date
  - Frequency Worn
  - List of item keys that are in the fit
- Each fit will be accessed with a key: "fit"NameNumber
  - "fit" = string literal
  - Name = lowercase, no spaces
  - Number = based on the current itemNumber value 

### Variables
- itemNumber
  - Increments everytime an item is added
  - Used to give each item a unique number

- allItems
  - array of all of the currently used keys
  - used to populate gallery

# Style
- I really like a minimalist, modern look and since this is an app I actually want to use for myself
I based the style off of my own interests
- The colors lean more towards neutral choices so that they don't conflict with the colors of any of the clothing

# Program Flow

### Clothing Gallery View
- Each item is a button, when created set:
  - id = itemNumber
  - img = clothing picture

- When item is pressed:
  - use id value as key to look up clothing information
  - use that info to populate the pop up menu

### Outfit View
- first draft: multiple pics of each individual piece of clothing
- second draft: one pic of entire outfit together
- Looks more organized and is more helpful in picking an outfit
- ![image](https://user-images.githubusercontent.com/114447806/209722495-90b18b85-17b8-4e4e-87ee-b0151337fbc3.png)
