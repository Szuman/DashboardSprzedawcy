# DashboardSprzedawcy
Created with CodeSandbox - link 
Celem projektu jest stworzenie “Panelu Sprzedawcy” - strony będącej częścią portalu zakupowego, na której użytkownik może zobaczyć podsumowanie swojej sprzedaży.  
 
## Cechy portalu 
“Panel Sprzedawcy” zawiera następujące elementy 
* Widget “Zamówienia” 
* Widget “Jakość Sprzedaży” 
* Widget “Opinie kupujących” 
* Widget “Ranking Ofert” 
* Widget “Wykres sprzedaży”
* Widget “Porady sprzedażowe”

## Widget “Zamówienia” 
* Przedstawia liczbę zamówień w podziale na kategorie: 
  * nieopłacone, 
  * niewysłane, 
  * zwroty. 
* Po kliknięciu w kategorię użytkownik przekierowywany jest do strony “zamówienia” 
  * Strona powinna być uproszczona, nie musi prezentować danych, jednakże musi w jasny sposób wskazywać która kategoria zamówień została wybrana. 
* Jeśli użytkownik nie posiada żadnych zamówień wyświetlany jest komunikat zachęcający do skorzystania z usług zwiększających widoczność ofert (promowanie itp.) 

## Widget “Jakość Sprzedaży” 
* Sprzedawca jest oceniany w wielu “aspektach”. 
* Kazdy “aspekt” ma określoną maksymalna wartość punktową - wagę (nie muszą być takie same) 
* Suma punktów przyznanych sprzedawcy w poszczególnych “aspektach” daje “ocenę jakości”. 
* Na podstawie “oceny jakości” przydzielana jest jedna z pięciu “kategorii jakości”. 
* Widget powinien przedstawiać: 
  * “ocenę jakości” wraz z maksymalnym możliwym do uzyskania wynikiem, 
  * “kategorię jakości”, 
  * 3 “aspekty”, w których sprzedawca uzyskał najgorszy wynik. 
* Użytkownik powinien mieć możliwość przejścia do strony “jakość sprzedaży” 
* Strona powinna być uproszczona, nie musi prezentować danych. 
* Widget obsługuje przypadek gdy jakość sprzedaży nie została jeszcze wyznaczona (np. z powodu braku sprzedaży) 
## Widget “Opinie kupujących” 
* Prezentuje 5 najnowszych opinii kupujących (ocena + opcjonalny komentarz) 
* Użytkownik może wybrać jedną z trzech kategorii: 
  * wszystkie, 
  * pozytywne, 
  * negatywne. 
* Użytkownik powinien mieć możliwość przejścia do strony “opinie kupujących” 
  * Strona powinna być uproszczona, nie musi prezentować danych. 
* W przypadku braku opinii wyświetlany jest odpowiedni komunikat. 
## Widget “Ranking Ofert” 
* Prezentuje 5 ofert posortowanych według wybranego przez użytkownika kryterium: 
  * Najczęściej kupowane - malejąco według liczby sprzedanych sztuk, malejąco według obrotu 
  * Najrzadziej kupowane - rosnąco według liczby sprzedanych sztuk, malejąco według liczby wyświetleń 
* Cechy ofert prezentowane niezależnie od kryterium sortowania 
  * Nazwa 
  * Miniatura zdjęcia głównego 
* Cechy oferty dla kryterium “najczęściej kupowane” 
  * Liczba sprzedanych sztuk 
  * Obrót 
* Cechy oferty dla kryterium “najrzadziej kupowane” 
  * Liczba sprzedanych sztuk 
  * Liczba unikalnych wyświetleń 
* W przypadku braku ofert wyświetlany jest odpowiedni komunikat. 
## Widget “Wykres sprzedaży” 
* Użytkownik może wybrać jedną z dwóch miar prezentowanych na wykresie 
  * Obrót, 
  * Liczba sprzedanych sztuk. 
* Użytkownik może wybrać zakres czasu 
  * Dziś - oś czasu podzielona na godziny 
  * Obecny tydzień - oś czasu podzielona na dni 
  * Poprzedni tydzień - oś czasu podzielona na miesiące 
* Użytkownik może wybrać sposób prezentacji 
  * Wykres słupkowy 
  * Wykres liniowy 
* Użytkownik ma możliwość włączenia dodatkowej serii danych, prezentującej dane z poprzedniego okresu. 
* Punkt wykresu prezentujący dane z okresu, który jeszcze się nie zakończył powinien być wyróżniony, tak by użytkownik był świadom, że wartość może ulec zmianie. 
### Portal powinien być dostępny w 2 językach 
* Polskim 
* Angielskim 
### Portal powinien umożliwiać zmianę schematu kolorów 
* Tryb ciemny
* Tryb jasny
