# NotesApp 🇺🇸

This is a README for the NotesApp project, which is a web application built with Node.js, Express.js, EJS, and MongoDB. The application allows users to create, read, update, and delete their notes after authenticating through Google OAuth 2.0.

## Table of Contents

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Features](#features)
- [Contribution](#contribution)

## Project Structure

The project is organized into several directories and files, each serving a specific purpose:

- `app.js`: The main entry point of the application. It configures Express.js, sets up sessions, initializes passport authentication, and defines routes.
- `config/db.js`: A module responsible for establishing the connection to the MongoDB database.
- `controllers/`: This folder contains various controllers that handle routes and different logic.
- `models/`: Contains Mongoose models for database schemas.
- `middleware/`: Custom middleware functions for authentication and authorization.
- `public/`: Static files such as CSS and images.
- `views/`: EJS templates for rendering web pages.
- `routes/`: Contains route files to divide different parts of the application.

## Dependencies

To run the NotesApp project, you need to have the following dependencies installed:

- Node.js and npm (Node Package Manager).
- MongoDB: The application uses MongoDB as the database to store user and note information.

The project also relies on several npm packages, which are listed in the `package.json` file. To install these dependencies, execute the following command in the project directory:

```bash
npm install dotenv connect-mongo ejs express express-ejs-layouts express-session method-override mongoose passport passport-google-oauth20
```

## Getting Started

To start NotesApp on localhost, follow these steps:

1. Clone the git repository:

```bash
git clone https://github.com/shpetimaliu/notesapp
```

2. Install the necessary dependencies:

```bash
cd NotesApp
npm install dotenv connect-mongo ejs express express-ejs-layouts express-session method-override mongoose passport passport-google-oauth20
```

3. Configure environment variables:

   - Create a `.env` file in the project root.
   - Add the environment variables with your actual values:

   ```plaintext
   GOOGLE_CLIENT_ID=<Your-Google-Client-ID>
   GOOGLE_CLIENT_SECRET=<Your-Google-Client-Secret>
   GOOGLE_CALLBACK_URL=<Your-Google-Callback-URL>
   MONGODB_URI=<Your-MongoDB-URI>
   SECRET_COOKIE=<Your-Secret-Cookie-String>
   PORT=<Your-Port-Number>
   ```

4. Start the application:

```bash
npm run dev
```

The application will be running at `http://localhost:<Your-Port-Number>`.

## Features

NotesApp has the following features:

1. **Google OAuth 2.0 Authentication:** Users can sign in to the application using their Google accounts.

2. **Dashboard:** Authenticated users have access to their personalized dashboard, where they can view, add, update, and delete their notes.

3. **Note Management:** Users can create new notes, view details of a specific note, update existing notes, and delete notes they no longer need.

4. **Search Functionality:** Users can search for notes based on the note title or its content.

5. **EJS Templating:** The application uses EJS templating engine to render dynamic web pages.

6. **Session Management:** The application uses express-session to manage user sessions and store session data in MongoDB.

## Contribution

If you wish to contribute to the project, you can submit a pull request. Bug fixes, improvements, and new features are welcome!

Before making significant changes, it's a good idea to open an issue to discuss the proposed changes and ensure they align with the project's goals.

#

# NotesApp 🇦🇱

Ky është një README për projektin NotesApp, i cili është një aplikacion web i ndërtuar me Node.js, Express.js, EJS dhe MongoDB. Aplikacioni lejon përdoruesit të krijon, shikojnë, përditësojnë dhe fshijnë shënimet e tyre pasi të kenë autentifikuar përmes Google OAuth 2.0.

## Tabela e Përmbajtjes

- [Struktura e Projektin](#struktura-e-projektit)
- [Dependencat](#dependencat)
- [Fillimi](#fillimi)
- [Veçoritë](#veçoritë)
- [Kontributi](#kontributi)


## Struktura e Projektin

Projekti është i organizuar në disa dosje dhe skedara, secili shërben për një qëllim të caktuar:

- `app.js`: Pikënisja kryesore e aplikacionit. Konfiguron Express.js, ndërton sesionin, inicjalizon autentifikimin e pasaportës dhe definon shtigjet (routes).
- `config/db.js`: Një modul që përgjegjësohet për lidhjen me bazën e të dhënave MongoDB.
- `controllers/`: Ky folder përmban kontrolluesit e ndryshëm që trajtojnë shtigjet (routes) dhe logjikën e ndryshme.
- `models/`: Permban modelet Mongoose për skemat e bazës së të dhënave.
- `middleware/`: Funksione middleware të personalizuara për autentifikim dhe autorizim.
- `public/`: Skedarët statikë si CSS dhe img.
- `views/`: Shabllonat EJS për të renderuar faqet e uebit.
- `routes/`: Permban dosjet e shtigjeve për të ndarë ndryshe pjesët e aplikacionit.

## Dependencat

Për të ekzekutuar projektin NotesApp, duhet të keni të instaluar këto dependenca:

- Node.js dhe npm (Node Package Manager).
- MongoDB: Aplikacioni përdor MongoDB si bazën e të dhënave për të ruajtur informacionin e përdoruesve dhe shënimeve.

Projekti gjithashtu varet nga shumë paketa npm, të cilat listohen në skedarin `package.json`. Për të instaluar këto dependenca, ekzekutoni komandën e mëposhtme në dosjen e projektit:

```bash
npm install dotenv connect-mongo ejs express express-ejs-layouts express-session method-override mongoose passport passport-google-oauth20
```

## Fillimi

Për të nisur NotesApp në localhost, ndiqni këto hapa:

1. Klononi git:

```bash
git clone https://github.com/shpetimaliu/notesapp
```

2. Instaloni dependencat e nevojshme:

```bash
cd NotesApp
npm install dotenv connect-mongo ejs express express-ejs-layouts express-session method-override mongoose passport passport-google-oauth20
```

3. Konfiguroni variablat e mjedisit:

   - Krijoni një skedar `.env` në rënien e projektit.
   - Shtoni variablat e mjedisit me vlerat tuaja reale:

   ```plaintext
   GOOGLE_CLIENT_ID=<Your-Google-Client-ID>
   GOOGLE_CLIENT_SECRET=<Your-Google-Client-Secret>
   GOOGLE_CALLBACK_URL=<Your-Google-Callback-URL>
   MONGODB_URI=<Your-MongoDB-URI>
   SECRET_COOKIE=<Your-Secret-Cookie-String>
   PORT=<Your-Port-Number>
   ```

4. Startoni aplikacionin:

```bash
npm run dev
```

Aplikacioni do të jetë i ekzekutuar në `http://localhost:<Your-Port-Number>`.

## Veçoritë

NotesApp ka këto veçori:

1. **Autentifikim me Google OAuth 2.0:** Përdoruesit mund të kyçen në aplikacion përmes llogarisë së tyre në Google.

2. **Paneli Kryesor:** Përdoruesit e autentifikuar kanë qasje në panelin e tyre të personalizuar, ku mund të shikojnë, shtojnë, përditësojnë dhe fshijnë shënimet e tyre.

3. **Menaxhimi i Shënimeve:** Përdoruesit mund të krijon shënimet e tyre të reja, të shikojnë detajet e një shënimi të caktuar, të përditësojnë shënimet ekzistuese dhe të fshijnë shënimet që nuk i nevojiten më.

4. **Funksionaliteti i Kërkimit:** Përdoruesit mund të kërkojnë shënimet sipas titullit të shënimit ose përmbajtjes së tij.

5. **Shablloni i Inxhinierisë EJS:** Aplikacioni përdor shabllonin e inxhinierisë EJS për të renduar faqet e uebit dinamik.

6. **Menaxhimi i Sesionit:** Aplikacioni përdor express-session për të menaxhuar sesionet e përdoruesit dhe për të ruajtur të dhënat e sesionit në MongoDB.

## Kontributi

Nëse dëshironi të kontribuoni në projekt, mund të paraqisni një kërkesë (pull request). Rregullimet e gabimeve, përmirësimet dhe veçoritë e reja janë të mirëpritura!

Para se të bëni ndryshime të mëdha, është një ide e mirë të hapni një çështje (issue) për të diskutuar ndryshimet e propozuara dhe për të siguruar që ato janë në përputhje me qëllimet e projektit.
