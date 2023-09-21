-- Cevap 1
-- SELECT Name, Composer
-- FROM Track;

-- Cevap 2
-- SELECT *
-- FROM Track;

-- Cevap 3
-- SELECT DISTINCT Composer
-- FROM Track;

-- Cevap 3
-- SELECT DISTINCT AlbumId, MediaTypeId
-- FROM Track;

-- Cevap 4
-- SELECT DISTINCT AlbumId, MediaTypeId
-- FROM Track;

-- Cevap 5
-- SELECT Name, TrackId, Composer
-- FROM Track
-- WHERE Composer = "Jorge Be";

-- Cevap 6
-- SELECT *
-- FROM Invoice
-- WHERE total > 25;

-- Cevap 8
-- SELECT *
-- FROM Invoice
-- WHERE total > 10
-- ORDER BY total DESC
-- LIMIT 2;

-- Cevap 9
-- SELECT *
-- FROM Invoice
-- WHERE BillingCountry NOT IN ('CANADA')
-- ORDER BY total DESC
-- LIMIT 10;

-- Cevap 10
-- SELECT InvoiceId, CustomerId, total
-- FROM Invoice
-- ORDER BY CustomerId ASC, total DESC 

-- Cevap 11
-- SELECT Name
-- FROM Track
-- WHERE Name like 'B%S'

-- Cevap 12
-- SELECT MAX(InvoiceDate)
-- FROM Invoice
-- WHERE InvoiceDate >=  '2008-01-01' AND InvoiceDate <=  '2011-12-31';

-- Cevap 13
-- SELECT FirstName, LastName, Country
-- FROM Customer
-- WHERE Country = 'Norway' or Country = 'Belgium';

-- Cevap 14
-- SELECT FirstName, LastName, Country
-- FROM Customer
-- WHERE Country = 'Norway' or Country = 'Belgium';

-- Cevap 15
-- SELECT Composer
-- FROM Track
-- WHERE Composer like '%ZAPPA%';

-- Cevap 16
-- SELECT count (TrackId)
-- FROM Track;
-- SELECT count (InvoiceId)

-- Cevap 17
-- SELECT count (CustomerId)
-- FROM Customer;

-- Cevap 17
-- SELECT AlbumId, count(TrackId) as parca_sayisi
-- FROM Track
-- GROUP by AlbumId
-- ORDER by parca_sayisi DESC;

