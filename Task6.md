# API & JSON — Practical Tasks

Bu tapşırıqların məqsədi JavaScript vasitəsilə real API-lərlə işləməyi, serverdən məlumat əldə etməyi, məlumatları HTML səhifəsində göstərməyi və HTTP sorğularını idarə etməyi öyrənməkdir.

**Ümumi qaydalar:**
- HTML, CSS və Vanilla JavaScript istifadə edin.
- API sorğularını `fetch()` və `async/await` ilə yazın.
- Sorğularda `try/catch` və `response.ok` istifadə edin.
- Məlumatları DOM vasitəsilə dinamik göstərin.
- HTML daxilində API-dən gələn məlumatları əvvəlcədən yazmayın.

---

## Task 1 — User Directory

**Səviyyə:** Easy

**Məqsəd:** GET Request, Fetch API, Async/Await və DOM Manipulation.

### Tapşırıq

API-dən istifadəçilərin məlumatlarını əldə edən və onları səhifədə kartlar şəklində göstərən **User Directory** hazırlayın.

**API Endpoint:**

`GET https://jsonplaceholder.typicode.com/users`

### Tələblər

1. Səhifədə `Load Users` düyməsi yaradın.
2. Düyməyə klik edildikdə API-yə GET sorğusu göndərin.
3. Gələn istifadəçiləri dinamik kartlar şəklində göstərin.
4. Hər kartda aşağıdakı məlumatlar olmalıdır:
   - Name
   - Username
   - Email
   - Phone
   - Website
5. Məlumatlar yüklənərkən `Loading...` mesajı göstərin.
6. Sorğu uğursuz olarsa, xəta mesajı göstərin.
7. `Search Users` input-u yaradın. İstifadəçi adını yazdıqca kartları filtr edin.
8. Axtarışa uyğun istifadəçi tapılmadıqda `No users found` mesajı göstərin.

### Bonus

- İstifadəçiləri adlarına görə A–Z və Z–A sıralayın.
- `Show Details` düyməsi ilə istifadəçinin şirkət və ünvan məlumatlarını göstərin.

---

## Task 2 — Product Catalog

**Səviyyə:** Medium

**Məqsəd:** REST API, Query Parameters, JSON, Fetch və DOM Manipulation.

### Tapşırıq

API-dən məhsulları əldə edib göstərən, axtarış və kateqoriya filtri olan **Product Catalog** hazırlayın.

**API Endpoints:**

`GET https://dummyjson.com/products?limit=12`

`GET https://dummyjson.com/products/search?q=phone`

`GET https://dummyjson.com/products/categories`

`GET https://dummyjson.com/products/category/smartphones`

### Tələblər

1. Səhifədə məhsulların göstəriləcəyi bölmə yaradın.
2. API-dən ilk 12 məhsulu əldə edin.
3. Hər məhsul kartında aşağıdakı məlumatları göstərin:
   - Product Image
   - Title
   - Price
   - Category
   - Rating
   - Stock
4. Məhsulları adlarına görə axtarmaq üçün input yaradın.
5. Kateqoriyaları API-dən əldə edib `select` elementinə əlavə edin.
6. İstifadəçi kateqoriya seçdikdə həmin kateqoriyaya aid məhsulları göstərin.
7. `Load More` düyməsi yaradın. Hər klikdə növbəti 12 məhsulu yükləyin.
8. Loading, Error və Empty State vəziyyətlərini idarə edin.

**Qeyd:** Pagination üçün `limit` və `skip` query parametrlərindən istifadə edin. Axtarış və kateqoriya dəyişdikdə məhsul siyahısını və pagination vəziyyətini sıfırlayın.

### Bonus

- Məhsulları qiymətə görə artan və azalan ardıcıllıqla sıralayın.
- `View Details` düyməsi ilə məhsulun ətraflı məlumatlarını göstərin.
- Stokda olmayan məhsullara `Out of Stock` yazısı əlavə edin.

---

## Task 3 — Post Management Dashboard

**Səviyyə:** Medium / Hard

**Məqsəd:** GET, POST, PUT, DELETE, CRUD, JSON və Error Handling.

### Tapşırıq

İstifadəçilərin postları əldə edə, yeni post yarada, mövcud postu redaktə edə və silə bildiyi **Post Management Dashboard** hazırlayın.

**API Endpoints:**

`GET https://jsonplaceholder.typicode.com/posts`

`POST https://jsonplaceholder.typicode.com/posts`

`PUT https://jsonplaceholder.typicode.com/posts/1`

`DELETE https://jsonplaceholder.typicode.com/posts/1`

### Tələblər

**1. Read — GET**
- API-dən ilk 10 postu əldə edib səhifədə göstərin.
- Hər post üçün Title, Body, Edit və Delete düymələri yaradın.

**2. Create — POST**
- Yeni post yaratmaq üçün form hazırlayın.
- Formda `Title` və `Body` input-ları olsun.
- `Create Post` düyməsinə klik edildikdə POST sorğusu göndərin.
- Sorğu uğurlu olduqda yeni postu səhifədə göstərin.

**3. Update — PUT**
- Hər postun `Edit` düyməsi olsun.
- Düyməyə klik edildikdə postun məlumatları formda görünsün.
- İstifadəçi məlumatları dəyişib `Save Changes` düyməsinə klik etdikdə PUT sorğusu göndərin.
- Uğurlu cavabdan sonra səhifədəki post məlumatlarını yeniləyin.

**4. Delete — DELETE**
- Hər postun `Delete` düyməsi olsun.
- Düyməyə klik edildikdə istifadəçidən təsdiq alın.
- Təsdiqdən sonra DELETE sorğusu göndərin.
- Sorğu uğurlu olduqda postu səhifədən silin.

**5. Validation & Error Handling**
- Title və Body boş ola bilməz.
- Sorğular zamanı Loading vəziyyətini göstərin.
- `try/catch` və `response.ok` istifadə edin.
- Əməliyyatın uğurlu və ya uğursuz olduğunu istifadəçiyə bildirin.

### Vacib qeyd

JSONPlaceholder test üçün nəzərdə tutulmuş **Fake REST API**-dir. POST, PUT və DELETE sorğularına cavab qaytarır, lakin dəyişiklikləri serverdə daimi saxlamır.

Buna görə uğurlu API cavabından sonra yeni yaradılan, yenilənən və silinən postları JavaScript-də saxladığınız lokal array üzərində də dəyişin. Səhifəni yenilədikdə məlumatların əvvəlki vəziyyətə qayıtması normaldır.

### Bonus

- `PATCH` metodu ilə yalnız postun `title` məlumatını yeniləyin.
- Eyni sorğuları Axios istifadə edərək təkrar yazın.
- Fetch və Axios arasındakı fərqləri müqayisə edin.

---

## Submission Requirements

Hər tapşırıq üçün ayrıca qovluq yaradın:

```text
API-JSON-Tasks/
│
├── task-1-user-directory/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── task-2-product-catalog/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── task-3-post-management/
    ├── index.html
    ├── style.css
    └── script.js
```

**Təhvil qaydası:**

1. Bütün tapşırıqları GitHub repository-yə yükləyin.
2. Hər tapşırığın işlək olduğundan əmin olun.
3. Console-da JavaScript xətaları olmamalıdır.
4. GitHub repository linkini müəllimə göndərin.

**Qiymətləndirmə meyarları:** API sorğularının düzgün işləməsi, DOM Manipulation, Error Handling, kodun oxunaqlılığı və istifadəçi interfeysinin funksionallığı.