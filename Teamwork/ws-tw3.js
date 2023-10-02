//? Kaç tür SQL dili vardır ve hangisi hangi tür komutları yürütmek içindir?
// SQL (Structured Query Language), veritabanı yönetim sistemleriyle etkileşimde bulunmak için kullanılan bir dilidir. SQL, veritabanlarına sorgular göndermek, veri eklemek, güncellemek, silmek ve sorgulamak için kullanılır. Temelde SQL'i iki kategoriye ayırabiliriz:

// DDL (Data Definition Language - Veri Tanımlama Dili):

// DDL, veritabanı yapısını tanımlamak için kullanılır.
// Veritabanı nesnelerini oluşturmak, değiştirmek ve silmek için kullanılır.
// DDL komutları, CREATE, ALTER, DROP gibi komutları içerir.
// Örnek komutlar: CREATE TABLE, ALTER TABLE, DROP TABLE.
// DML (Data Manipulation Language - Veri Manipülasyon Dili):

// DML, veritabanındaki verileri sorgulamak ve yönetmek için kullanılır.
// Veri ekleme, güncelleme, silme ve sorgulama işlemleri için kullanılır.
// DML komutları, SELECT, INSERT, UPDATE, DELETE gibi komutları içerir.
// Örnek komutlar: SELECT * FROM, INSERT INTO, UPDATE, DELETE FROM.
// SQL, bu iki ana kategori altında bir dizi komut içerir. Ayrıca, her veritabanı yönetim sistemi (DBMS) belirli SQL varyasyonlarını destekleyebilir ve bu nedenle SQL komutlarında bazı farklılıklar olabilir. En yaygın SQL varyasyonları şunlardır:

// MySQL SQL: MySQL veritabanı yönetim sistemi için özgün SQL komutlarını içerir.

// PostgreSQL SQL: PostgreSQL veritabanı yönetim sistemi için özgün SQL komutlarını içerir.

// Oracle SQL: Oracle veritabanı yönetim sistemi için özgün SQL komutlarını içerir.

// SQL Server SQL: Microsoft SQL Server veritabanı yönetim sistemi için özgün SQL komutlarını içerir.

// Bu SQL varyasyonları, temel SQL komutlarını içerir, ancak her biri farklı özellikler ve eklentiler ekleyebilir. Bu nedenle, belirli bir SQL türünü veya veritabanı yönetim sistemini kullanırken, o sistemin belgelendirmesine başvurmak önemlidir. Ancak temel SQL komutları (DDL ve DML) genellikle tüm SQL varyasyonlarında benzer şekilde çalışır.

// MongoDB, NoSQL (Not Only SQL) veritabanları arasında popüler olan ve belge tabanlı bir veritabanı yönetim sistemidir. İsmi "humongous" (muazzam) ve "DB" (veritabanı) kelimelerinin birleşiminden gelir ve bu, MongoDB'nin büyük miktarda veri ve yüksek performans gereksinimlerine yönelik tasarlandığını gösterir.

// MongoDB, ilişkisel veritabanlarına karşı farklı bir yaklaşım sunar. İşte MongoDB'nin temel özellikleri:

// Belge Tabanlı Veri Yapısı: MongoDB, JSON benzeri BSON (Binary JSON) belgelerini kullanır. Her bir veri öğesi bir belge olarak adlandırılır ve bu belgeler bir koleksiyon içinde gruplanır. Her belgenin yapısı farklı olabilir, bu da çok esnek bir veri modeli sağlar.

// Esnek Veri Modeli: Veri modeli, belgelerin farklı alanlarına sahip olmasına ve bu alanların veri tiplerinin farklı olmasına izin verir. Bu, uygulama gereksinimlerinize daha iyi uyarlanmış veri düzenlemesi sağlar.

// Yatay Ölçeklenebilirlik: MongoDB, veri tabanının yatay olarak ölçeklenmesini (sharding) destekler. Bu, büyük miktarda veriye sahip uygulamalar için performansı artırabilir.

// Yüksek Performans: MongoDB, hızlı sorgu yanıtları ve endeksleme özellikleri sayesinde yüksek performans sunar. Ayrıca, belgelerin denormalize edilmesine izin verir, bu da sorgu hızını artırabilir.

// Açık Kaynak: MongoDB açık kaynaklı bir projedir ve ücretsiz olarak kullanılabilir. Ayrıca, topluluk sürümünün yanı sıra ticari bir sürümü de bulunmaktadır.

// Çeşitli Sorgu ve Veri İşleme Yetenekleri: MongoDB, karmaşık sorguları destekler, ayrıca metin araması, coğrafi sorgular ve daha fazlası gibi özellikleri içerir.

// MongoDB, özellikle büyük ve dağıtık veri tabanları gereksinimleri olan uygulamalar için tercih edilen bir veritabanı yönetim sistemidir. Web uygulamaları, büyük veri analitiği, IoT (Nesnelerin İnterneti) ve daha birçok uygulama türünde kullanılır.

//? NOSQL'in açılımı nedir?

// NoSQL, "Not Only SQL" kelimesinin kısaltmasıdır. NoSQL veritabanları, geleneksel SQL (Structured Query Language) tabanlı ilişkisel veritabanlarına alternatif olan bir veritabanı türüdür. Bu terim, ilişkisel veritabanlarından farklı veri saklama ve sorgulama yaklaşımlarını ifade eder.

// NoSQL veritabanları, SQL veritabanlarına göre daha esnek bir veri modeline sahiptir ve genellikle büyük miktarda yapılandırılmamış veya yarı yapılandırılmış veriyi depolamak ve işlemek için kullanılır. NoSQL veritabanları, yüksek ölçeklenebilirlik, hızlı sorgu yanıtları ve çeşitli veri tiplerini destekleme yetenekleri gibi avantajlar sunar.

// NoSQL veritabanları, aşağıdaki temel türlerde gelir:

// Belge Tabanlı Veritabanlar: Bu tür veritabanlarında, veriler JSON veya BSON gibi belge formatlarında saklanır. Her bir belge, bir anahtar-değer çiftleri koleksiyonunda bulunur. Örnekler arasında MongoDB ve Couchbase yer alır.

// Sütun Ailesi Veritabanları: Bu tür veritabanlarında veriler, sütunlar veya sütun aileleri şeklinde düzenlenir, bu da çok büyük veri kümelerini etkili bir şekilde depolamayı sağlar. Örnekler arasında Apache Cassandra ve HBase bulunur.

// Anahtar-Değer Mağazaları: Bu tür veritabanlarında her veri öğesi bir anahtarla ilişkilendirilir ve bu anahtarla depolanır. Anahtar-değer mağazaları, basit ve hızlı veri erişimi için kullanılır. Örnekler arasında Redis ve Riak bulunur.

// Grafolojik Veritabanlar: Bu tür veritabanları, verileri grafik yapılarda saklar ve bu yapılar arasındaki ilişkileri modellemek için kullanılır. Örnekler arasında Neo4j ve Amazon Neptune bulunur.

// NoSQL veritabanları, farklı veri saklama ihtiyaçlarına ve uygulama senaryolarına uygun çok çeşitli veri tabanları sunar. Bu nedenle, özellikle büyük veri, dağıtık sistemler ve çevik uygulama geliştirme projeleri için tercih edilen bir seçenektir.

//? Express.js neden mongoDB kullanıyor, nedenleri ne olabilir?

// Express.js ve MongoDB, web uygulamaları geliştirmek için sıkça bir arada kullanılan iki farklı teknolojidir ve birçok geliştirici tarafından tercih edilir. İşte Express.js'in neden MongoDB ile sıkça kullanıldığına dair bazı nedenler:

// JSON Formatına Uygunluk: Hem Express.js hem de MongoDB, JSON formatına uygun çalışır. Bu nedenle verilerin web uygulaması ve veritabanı arasında dönüştürülmesi gerekmez, doğrudan kullanılabilir. Bu, veri saklama ve iletişim süreçlerini basitleştirir.

// Veritabanı Esnekliği: MongoDB, şema gereksinimlerine sahip olmayan bir NoSQL veritabanıdır. Bu, veri modelini hızla değiştirmenizi ve uygulamanızın gereksinimlerine uygun olarak esnek bir şekilde ayarlamanızı sağlar. Express.js ile kullanıldığında, bu esneklik daha fazla özgürlük sağlar.

// Mongoose: Mongoose, MongoDB ile Express.js'in entegrasyonunu kolaylaştıran bir Object Data Modeling (ODM) kütüphanesidir. Mongoose, MongoDB'deki belgeleri JavaScript nesnelerine dönüştürmek ve bu nesneleri kullanmak için kullanılır. Bu, MongoDB ile çalışmayı daha kolay ve verimli hale getirir.

// Hız ve Performans: Express.js ve MongoDB, performans konusunda iyi bir uyum sağlar. Express.js, hızlı ve hafif bir web sunucusu çerçevesi olarak bilinirken, MongoDB'nin doküman tabanlı veri yapısı hızlı sorgu yanıtları sunar. Bu, kullanıcıların hızlı ve ölçeklenebilir web uygulamaları geliştirmelerine yardımcı olur.

// JavaScript Yığını Uyum: Hem Express.js hem de MongoDB, JavaScript tabanlı teknolojilerdir. Bu, bir uygulama geliştirme ekibi için tek bir dilde (JavaScript) çalışmanın avantajını sunar. Bu da ekip içi işbirliğini kolaylaştırabilir.

// Dağıtık ve Büyük Veri Projeleri: MongoDB, dağıtık sistemlerde ve büyük veri projelerinde etkili bir şekilde kullanılabilir. Bu tür projelerde Express.js ile birlikte kullanmak, ölçeklenebilir ve yüksek performanslı uygulamalar geliştirmek için idealdir.

// Sonuç olarak, Express.js ve MongoDB, farklı avantajlara sahip iki teknoloji olup, bir araya geldiklerinde modern ve esnek web uygulamalarının geliştirilmesini kolaylaştırır. JSON tabanlı veri taşıma, hız, esneklik ve JavaScript yığını uyumu gibi faktörler, bu ikiliyi bir arada kullanmayı cazip hale getirir. Ancak her proje farklıdır ve teknoloji seçimi projenin özel gereksinimlerine bağlı olmalıdır.

//? Aşağıdaki tablolardaki verileri MongoDb'de nasıl temsil edebiliriz?
//  Post Collection:
// {
//     "post_id": 1,
//     "title": "Amazing duo Express.js and MongoDB"
//     "comment": [{
//         "comment_id": 1,
//         "author": "Qadir",
//         "content": "I agree with you"
//       },
//       {
//         "comment_id": 2,
//         "author": "Victor",
//         "content": "Their communities are very good"
//       },
//       {
//         "comment_id": 4,
//         "author": "Cedric",
//         "content": "Good post"
//       }]
//   }
//   {
//     "post_id": 2,
//     "title": "MVC architecture"
//     "comment": [
//         {
//             "comment_id": 3,
//             "author": "Rafe",
//             "content": "Django uses MVT"
//           }
//     ]
//   }
// };
// Comment Collection:
// {
//     "comment_id": 1,
//     "post_id": 1,
//     "author": "Qadir",
//     "content": "I agree with you"
//   }
//   {
//     "comment_id": 2,
//     "post_id": 1,
//     "author": "Victor",
//     "content": "Their communities are very good"
//   }
//   {
//     "comment_id": 3,
//     "post_id": 2,
//     "author": "Rafe",
//     "content": "Django uses MVT"
//   }
//   {
//     "comment_id": 4,
//     "post_id": 1,
//     "author": "Cedric",
//     "content": "Good post"
//   }
// };

// 1-
// SELECT *
// FROM people
// db.people.find({})

// 2-
// SELECT id,
//  user_id,
//  status
// FROM people
// db.people.find({}, { _id: 0, id: 1, user_id: 1, status: 1 })

// 3-
// SELECT user_id, status
// FROM people
// db.people.find({}, { _id: 0, user_id: 1, status: 1 })

// 4-
// SELECT *
// FROM people
// WHERE status = "A"
// db.people.find({status : "A"})

5 -
  // SELECT user_id, status
  // FROM people
  // WHERE status = "A"
  // db.people.find(
  //     { status: "A" },
  //     { _id: 0, user_id: 1, status: 1 }
  //   )

  // 6-
  // SELECT *
  // FROM people
  // WHERE status != "A"
  // dd.people.find({status: { $ne:'A' }})

  // 7-
  // SELECT *
  // FROM people
  // WHERE status = "A"
  // AND age = 50
  // db.people.find(
  //     { status: "A", age: 50 }
  //   )

  // 8-
  // SELECT *
  // FROM people
  // WHERE status = "A"
  // AND age = 50
  // db.people.find(
  //     { status: "A", age: 50 }
  //   )

  // 9-
  // SELECT *
  // FROM people
  // WHERE age > 25
  // db.people.find(
  //     { age: {$gt:25}}
  //   )

  // 10-
  // SELECT *
  // FROM people
  // WHERE age < 25
  // db.people.find(
  //     { age: {$lt:25}}
  //   )

  // 11-
  // SELECT *
  // FROM people
  // WHERE age > 25
  // AND age <= 50
  // db.people.find({age:{$gt:25, $lte:50}})

  // 12-
  // SELECT *
  // FROM people
  // WHERE user_id like "%bc%"
  // db.people.find({user_id:/bc/ })

  // db.people.find(
  //     { user_id: { $regex: /bc/ } }
  //   )

  // 13-
  // SELECT *
  // FROM people
  // WHERE status = "A"
  // ORDER BY user_id ASC
  // db.people.find(
  //     { status: "A" }
  //   ).sort(
  //     { user_id: 1 } // 1 for ascending order, -1 for descending order
  //   )

  // 14-
  // SELECT *
  // FROM people
  // WHERE status = "A"
  // ORDER BY user_id DESC
  // db.people.find(
  //     { status: "A" }
  //   ).sort(
  //     { user_id: -1 } // -1 for descending order, 1 for ascending order
  //   )

  // 15-
  // SELECT COUNT(*)
  // FROM people
  // db.people.countDocuments({})
  // db.coll.find().count();

  // 16-
  // SELECT COUNT(user_id)
  // FROM people
  // db.people.countDocuments({ user_id: { $exists: true } })
  // "user_id" alanının mevcut olduğu (yani boş veya tanımsız olmadığı) koleksiyondaki tüm belgeleri saymak için kullanılır.(i.e., is not null or undefined).

  // 17-
  // SELECT COUNT(*)
  // FROM people
  // WHERE age > 30
  // db.people.countDocuments({age:{$gt:30}})

  // 18-
  // SELECT DISTINCT(status)
  // FROM people
  // db.people.DISTINCT("status")

  // 19-
  // SELECT *
  // FROM people
  // LIMIT 1
db.people.find({}).limit(1);
db.coll.findOne({})

// 20-
// SELECT *
// FROM people
// LIMIT 5
// SKIP 10
db.coll.find({}).skip(2).limit(2)

// 21-
CREATE TABLE people (
    id MEDIUMINT NOT NULL
    AUTO_INCREMENT,
    user_id Varchar(30),
    age Number,
    status char(1),
    PRIMARY KEY (id)
   )
   db.createCollection("people");

   // people koleksiyonunun şeması
const peopleSchema = {
    user_id: {
      type: "string",
      required: true,
      maxLength: 30,
    },
    age: {
      type: "number",
    },
    status: {
      type: "string",
      maxLength: 1,
    },
  };

   db.people.createIndex({ user_id: 1 }, { unique: true }); // user_id alanını benzersiz yapar
   db.people.createIndex({ age: 1 }); // age alanına indeks ekler




// Örnek bir belge ekleyelim
db.people.insertOne({
    user_id: "abc123",
    age: 25,
    status: "A",
  });

22-
ALTER TABLE people
ADD join_date DATETIME

db.people.updateMany({}, { $set: { join_date: new Date() } });

23-
DROP TABLE people
db.people.drop()


24-
INSERT INTO people(user_id,age,status)
VALUES ("bcd001",45,"A")
db.people.insertOne({
    user_id: "bcd001",
    age: 45,
    status: "A"
  })

25-
UPDATE people
SET status = "C"
WHERE age > 25
db.people.updateMany(
    { age: { $gt: 25 } }, // Filtre: age alanı 25'ten büyük olanları seç
    { $set: { status: "C" } } // Güncelleme: status alanını "C" olarak ayarla
  )

26-
UPDATE people
SET age = age + 3
WHERE status = "A"
db.people.updateMany(
    { status: "A" }, // Filtre: status alanı "A" olanları seç
    { $inc: { age: 3 } } // Güncelleme: age alanını 3 artır
  )

27-
DELETE FROM people
WHERE status = "D"
DELETE FROM people
db.people.deleteMany({ status: "D" })

28-
DELETE FROM people
db.people.deleteMany({})