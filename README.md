## Pasul 1 - Login form design + Establishing routes

Ca prim pas in familiarizarea cu Angular am inceput cu design-ul paginii de Login folosind **Angular Material**. Cu ajutorul acestuia am putut combina componenta de card cu diverse input-uri si butoane. Componentele au fost importate in **app.module.ts** si apoi folosite in **login.component.html** in cadrul unui form. Dupa aceea am stabilit rutele in **app-routing.module.ts** unde pentru fiecare ruta am asociat componentul care va fi incarcat pe ruta respectiva.

## Pasul 2 - Register form design + Dashboard design

Pe baza formularului de Login am facut si un formular de Register folosind din componentele deja utilizate. In continuare am construit si pagina de Dashboard tot cu ajutorul **Angular Material**, imbinand in **dashboard.component.html** urmatoarele componente: mat-toolbar (unde se afla butonul cu rolul ADD SPOT), google-maps (cu care am reusit sa implementez harta) si mat-table (tabel care urmeaza sa fie populat cu date despre locatiile din API). La aceasta etapa design-ul este finalizat si vor urma corectii in cazul in care necesita.

## Pasul 3 - GET request pentru tabelul cu spot-uri

Pentru a popula tabelul "Locations" am cret un service numit **spots.service.ts** unde am implementat functia getSpots utilizand un **GET REQUEST**. Pe langa acest service am creat si un model numit Spots pentru a avea un template al obiectelor din API. Revenind in dashboard.component.ts am definit coloanele tabelului si am stabilit ca dataSource va fi un array de Spots. In continuare injectam service-ul in constructor pentru a putea utiliza metoda definita in service si a crea un response in metoda publica getAllSpots. In final, metoda getAllSpots este apelata in hook-ul ngOnInit.
Dupa popularea tabelului am adaugat si un paginator, optiunea de a sorta coloane si un input cu rol de cautare a unor date specifice din tabel.

## Pasul 4 - Login + Register POST requests

Asemanator GET request-ului, am creat un service numit **login.service.ts** unde am facut doua functii separate, fiecare avand un POST specific pentru a loga un user sau a adauga un user in API. Acest service este injectat atat in constructorul din login component cat si in cel din register component. Singura diferenta este ca in **login.component.ts** in functia **HandleLogin()** vom si salva user-ul curent in local storage pentru a simula o sesiune de login. Din moment ce formularele de login si register sunt menite sa simuleze aceste functii folosind api-ul, nu a fost nevoie de a valida datele introduse in acestea.

## Pasul 5 - Add Spot button + POST spot request

Am asociat butonului **ADD SPOT** functia openDialog care are rolul de a deschide un popup la click pe buton. Am creat componenta de popup unde am introdus field-uri necesare si am asociat un POST request butonului "Confirm". In functia de POST am introdus si un reload pentru a updata datele din tabel automat cu noua locatie. Rezultatul este ca la apasarea butonului ADD SPOT se va deschide popup-ul, iar la confirm se executa POST-ul si se face reload pentru a updata tabelul. De asemenea la hover pe iconita de utilizator apare un tooltip cu textul "Logout" si la apasarea pe iconita se sterge utilizatorul curent din local storage si se revine pe pagina de login.
 