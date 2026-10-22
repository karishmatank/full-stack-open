sequenceDiagram
    participant browser
    participant server

    Note right of browser: Clicking the "Save" button triggers an event listener that creates a `note` object and adds to a `notes` array, resets the input field to be empty, re-renders all notes, and finally sends a request to the server as follows

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (incl note stringified object in body)
    activate server
    server-->>browser: 201 or 400 response based on outcome
    deactivate server

    Note right of server: The server creates a properly formatted `note` object with properties `content` and `date` and stores the new note in a `notes` array on the server