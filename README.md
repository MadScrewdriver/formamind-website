
![formamind](https://i.ibb.co/4tGvK1f/card.png)
# Formamind – Strona Firmowa (Docker)
[Formamind.com](https://formamind.com) 

Aplikacja składa się z trzech komponentów:

### Komponenty
- **Frontend (Nuxt.js)** – warstwa wizualna i interfejs użytkownika.
- **Backend (Django)** – logika serwerowa, przetwarzanie danych i API.
- **Baza danych (MySQL)** – przechowywanie danych aplikacji.

##

### 1. Klonowanie repozytorium:
```bash
git clone https://github.com/MadScrewdriver/formamind-website.git
cd formamind-website
```

### 2. Uruchomienie aplikacji:
```bash
docker-compose up --build
```

### 3. Frontend i Backend:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend (panel administratora)**: [http://localhost:8000](http://localhost:8000)

### Informacje o aplikacji:
- Adres serwera MySQL: `localhost:3306`
- Nazwa użytkownika administratora Django: `admin`
- Hasło administratora Django: `admin`


