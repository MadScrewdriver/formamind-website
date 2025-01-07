# Formamind – Strona Firmowa (Docker)

Aplikacja składa się z trzech głównych komponentów:

### Komponenty
- **Frontend (Nuxt.js)** – warstwa wizualna i interfejs użytkownika.
- **Backend (Django)** – logika serwerowa, przetwarzanie danych i API.
- **Baza danych (MySQL)** – przechowywanie danych aplikacji.

##

### 1. Sklonuj repozytorium:
```bash
git clone https://github.com/yourusername/formamind-docker-website.git
cd formamind-docker-website
```

### 2. Uruchom kontenery:
```bash
docker-compose up --build
```

### 3. Otwórz w przeglądarce:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend (panel administratora)**: [http://localhost:8000](http://localhost:8000)

### Informacje o aplikacji:
- Adres serwera MySQL**: `localhost:3306`
- Nazwa użytkownika administratora Django: `admin`
- Hasło administratora Django: `admin`


