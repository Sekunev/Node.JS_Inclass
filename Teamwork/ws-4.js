//? Ekspres nedir?

// "Express" veya "Express.js," Node.js tabanlı bir web uygulaması çerçevesidir. Express, Node.js tarafından desteklenen ve geliştiricilere web uygulamaları ve API'lar oluşturmak için temel altyapı sağlayan hafif ve esnek bir çerçevedir. İşte Express'in bazı temel özellikleri ve kullanım alanları:

// Hız ve Performans: Express, Node.js'in hız ve verimliliğiyle birleşerek hızlı ve yüksek performanslı web uygulamaları geliştirmenizi sağlar.

// Minimal ve Esnek Yapı: Express, temel HTTP işlevselliğini sunar, ancak geliştiricilere işlevselliği genişletmek veya özelleştirmek için geniş bir yelpaze sunar. Bu, kodunuzu ihtiyaçlarınıza göre şekillendirmenize olanak tanır.

// Yönlendirme (Routing): Express, istekleri belirli işlevlere yönlendirmenizi sağlayan güçlü bir yönlendirme sistemi sunar. Bu, farklı URL rotaları için farklı işlevleri atamanıza olanak tanır.

// Orta Katman (Middleware): Express, middleware kavramını benimseyerek işlem sırasında istekleri ve yanıtları işlemek için işlevler eklemenize olanak tanır. Örneğin, kimlik doğrulama, güvenlik denetimleri veya günlüğe kaydetme gibi işlevleri middleware olarak ekleyebilirsiniz.

// Şablon Motorları: Express, HTML veya diğer şablon dilleri kullanarak dinamik içerik oluşturmanıza olanak tanır. Bu, sunucu tarafında oluşturulan web sayfaları veya görünümler için kullanışlıdır.

// API Geliştirme: Express, RESTful API'lar oluşturmak için yaygın olarak kullanılır. JSON tabanlı API'lar oluşturmak ve yönetmek için iyi bir seçenektir.

// Topluluk Desteği: Express, büyük ve aktif bir geliştirici topluluğuna sahiptir ve bu, dokümantasyonunun zengin ve çevik olmasını sağlar.

// Modüler Yapı: Express, middleware ve eklentilerle genişletilebilir, bu da projenizin ihtiyaçlarına göre özelleştirilmesini kolaylaştırır.

// Express, web uygulamaları ve API'lar oluşturmak için çok popüler bir seçenektir ve genellikle başlangıç seviyesi ve orta düzey geliştiriciler tarafından tercih edilir. Ayrıca, büyük ölçekli uygulamaların geliştirilmesinde de kullanılmaktadır.

// ?Express'in popülaritesi nereden geliyor?

// Express.js'in popülerliği birkaç temel faktörden kaynaklanmaktadır:

// Basitlik ve Minimalizm: Express.js, basitlik ve minimalist tasarımıyla bilinir. Geliştiricilere gereksiz soyutlamaları dayatmadan web uygulamalarını oluşturmak için yeterli özellik sağlar. Geliştiriciler, bu minimalist yaklaşımı uygulamaları üzerinde ince ayar yapmalarına olanak tanıdığı için takdir ederler.

// Middleware Mimarisi: Express'in middleware mimarisi, geliştiricilerin uygulamalarına çeşitli işlevselliği kolayca entegre etmelerini sağlayan güçlü bir özelliktir. Middleware, kimlik doğrulama, günlükleme ve hata işleme gibi görevleri ele alabilir, bu da uygulama mantığını yönetmeyi daha kolay hale getirir.

// Büyük ve Aktif Topluluk: Express.js, büyük ve aktif bir geliştirici ve katkıda bulunan topluluğuna sahiptir. Bu, Express için birçok kaynak, öğreticiler ve açık kaynak paketlerin bulunmasını sağlar; bu da geliştiricilerin öğrenmelerini, sorunlarını gidermelerini ve uygulamalarını genişletmelerini kolaylaştırır.

// Performans: Express.js, mükemmel performansıyla bilinir. Node.js üzerine inşa edilmiştir ve olay yönlendirmeli, bloklamayan bir mimariye sahip olan Node.js, özellikle API'lar ve mikro hizmetler gibi yüksek performanslı uygulamaların geliştirilmesi için Express'i iyi bir seçenek haline getirir.

// Esneklik: Express.js, geliştiricilere ihtiyaçlarına göre mimari kararlar verme özgürlüğü sunan esnek ve tavsiyesiz bir çerçeve sağlar. Bu esneklik, küçük prototiplerden büyük ölçekli uygulamalara kadar birçok projeye uygun hale getirir.

// Yönlendirme: Express.js, rotaları tanımlamayı ve yönetmeyi kolaylaştırır. Yönlendirme, web uygulamalarının önemli bir parçasıdır ve Express, URL'leri belirli işleyicilere veya denetleyicilere eşlemek için basit bir yol sunar.

// Middleware Ekosistemi: Express, npm (Node Package Manager) aracılığıyla mevcut geniş bir middleware ve eklenti ekosistemine sahiptir. Geliştiriciler, uygulamalarına belirli işlevselliği eklemek için üçüncü taraf middleware'leri kolayca bulabilir ve entegre edebilirler.

// Olgun ve Kararlı: Express.js uzun bir süredir varlığını sürdürüyor ve istikrar ve güvenilirlik konusunda iyi bir geçmişe sahiptir. Birçok köklü şirket ve başlangıç Express'i üretim uygulamalarında kullanır.

// Geriye Dönük Uyumluluk: Express.js, geriye dönük uyumluluğu sürdürür, bu da eski sürümleri kullanılan uygulamaların genellikle daha yeni sürümlere kolayca yükseltilebileceği anlamına gelir, büyük kod değişiklikleri gerektirmez.

// Özetle, Express.js'in popülerliği, basitlik, esneklik, performans ve geliştirici topluluğundan aldığı geniş destek gibi faktörlerin bir sonucudur. Node.js ekosistemi içinde web uygulamaları ve API'ler oluşturmak için giderek daha fazla tercih edilen bir çerçeve haline gelmiştir.

//?4 Express ve Nodejs arasındaki farklar nelerdir?
// Express.js ve Node.js, her ikisi de JavaScript tabanlı ancak farklı amaçlara hizmet eden iki farklı teknolojidir. İşte Express.js ve Node.js arasındaki temel farklar:

// Node.js:

// Node.js, bir çalışma zamanı (runtime) ortamıdır. Bu ortam sayesinde JavaScript sunucu tarafında çalışabilir.
// Node.js, düşük seviyeli bir JavaScript platformudur ve geliştiricilere sunucu tarafı uygulamalar geliştirmelerine olanak tanır.
// Dosya sistemine erişim, ağ iletişimi gibi düşük seviyeli işlemleri kolayca gerçekleştirmenizi sağlar.
// Node.js, web sunucusu oluşturmak için kullanılabilir, ancak bu işlemi daha yüksek düzeyde çerçevelerle kolaylaştırmak için Express.js gibi çerçeveler kullanılabilir.
// Express.js:

// Express.js, Node.js tabanlı bir web uygulama çerçevesidir. Node.js'nin sunduğu olanakları daha yüksek seviyede kullanımı kolay bir şekilde sunar.
// Express, HTTP isteklerini kolayca yönlendirmenizi ve işlemenizi sağlar. Bu, web uygulamaları ve API'ler oluşturmak için idealdir.
// Middleware mimarisi sayesinde oturum yönetimi, kimlik doğrulama, güvenlik kontrolleri gibi yaygın işlevleri kolayca ekleyebilirsiniz.
// İşteki yükü azaltmak için hızlı ve ölçeklenebilir uygulamalar geliştirmenize yardımcı olur.
// Yani, ana fark şudur: Node.js, JavaScript'in sunucu tarafında çalışmasına izin veren bir çalışma zamanıdır ve düşük seviyeli işlemleri gerçekleştirmek için kullanılırken; Express.js, Node.js üzerine inşa edilmiş bir web uygulama çerçevesidir ve web uygulamaları ve API'ler oluşturmak için kullanılır. Express.js, Node.js'nin sunduğu yetenekleri daha yüksek seviyede kullanmaya olanak tanır ve geliştiricilere web uygulamaları oluşturmak için daha yüksek düzeyde bir araç sunar.

// ?Middleware nedir ve işlevleri nelerdir?

// Middleware, yazılım geliştirmede kullanılan bir terimdir ve bir yazılım uygulamasının farklı bileşenlerinin (örneğin, web uygulamaları) istekleri işlemek ve yanıtları oluşturmak için kullanılan ara yazılımları ifade eder. Middleware, istek ve yanıtların işlenmesini kontrol etmek ve düzenlemek için kullanılır ve birçok programlama dilinde ve çerçevede bulunabilir.

// Middleware'in temel işlevleri şunlar olabilir:

// İstekleri Dönüştürme (Request Transformation): Middleware, gelen istekleri değiştirebilir veya dönüştürebilir. Örneğin, gelen isteği analiz edip belirli parametreleri çıkarabilir veya ekleyebilir.

// Kimlik Doğrulama ve Yetkilendirme (Authentication and Authorization): Middleware, kullanıcı kimlik doğrulama ve yetkilendirme işlemlerini gerçekleştirebilir. İstekleri kullanıcı oturumu bilgileriyle eşleştirebilir ve kullanıcının erişim izinlerini kontrol edebilir.

// Güvenlik Kontrolleri (Security Checks): Middleware, gelen verileri denetleyebilir ve güvenlik kontrolleri yapabilir. Örneğin, gelen verileri doğrulamak veya veri güvenliği önlemlerini uygulamak için kullanılabilir.

// Veri İşleme (Data Processing): Middleware, gelen verileri işleyebilir, dönüştürebilir veya filtreleyebilir. Örneğin, gelen veriyi veritabanına kaydetmek veya belirli bir formatta yanıt oluşturmak için kullanılabilir.

// Hata İşleme (Error Handling): Middleware, uygulama içinde oluşan hataları yakalayabilir ve uygun bir şekilde işleyebilir. Hataları loglayabilir, istemciye hata mesajları gönderebilir veya alternatif işlemler yapabilir.

// İzleme ve Günlükleme (Logging and Monitoring): Middleware, uygulamanın çalışma durumunu izleyebilir ve günlükleme işlemleri gerçekleştirebilir. Bu, uygulamanın performansını ve sorunlarını izlemek için kullanılır.

// Önbellekleme (Caching): Middleware, verileri önbelleğe alabilir ve tekrarlayan istekler için önbellekten yanıtlar sağlayabilir. Bu, uygulamanın performansını artırabilir.

// Sıkıştırma (Compression): Middleware, yanıtları sıkıştırarak veri transferini optimize edebilir.

// Yönlendirme (Routing): Middleware, istekleri belirli rotalara (routes) yönlendirebilir ve ilgili işleyicilere iletebilir.

// Zamanlama (Timing): Middleware, isteklerin işlenme süresini hesaplayabilir ve bu verileri performans izleme amaçlarıyla kullanabilir.

// Middleware, uygulamaları modüler hale getirir ve istekleri işlemek için bir dizi işlevi bir araya getirir. Bu, uygulamaların daha organize, bakımı daha kolay ve genişletilmesi daha mümkün olmasını sağlar. Express.js gibi web çerçeveleri, middleware kullanımını kolaylaştırır ve geliştiricilere işlevsellik eklemek için özelleştirilebilir bir yapı sunar.

//?6 package.json dosyasında gördüğümüz anahtarların ne anlama geldiğini açıklayın.

// ChatGPT
// package.json dosyası, bir Node.js projesinin kök dizininde bulunan ve projenin bağımlılıklarını, yapılandırmasını ve diğer önemli bilgilerini içeren bir JSON (JavaScript Object Notation) dosyasıdır. Bu dosyanın içerdiği anahtarlar ve değerleri şunları ifade eder:

// name: Projenin adını belirtir. Bu ad benzersiz olmalıdır ve bir paket yöneticisi (örneğin, npm) tarafından kullanılır. Diğer projelerle çakışmaması önemlidir.

// version: Proje sürümünü belirtir. Genellikle Semantik Sürümleme (Semantic Versioning) kurallarına uygun bir sürüm numarasıdır (örneğin, "1.2.3").

// description: Projenin kısa bir açıklamasını içerir. Projenin ne yaptığını veya amaçlandığını özetler.

// main: Projede ana JavaScript dosyasının adını belirtir. Bu, projenin ana giriş noktasıdır.

// scripts: Projeyi çalıştırmak veya farklı görevleri otomatikleştirmek için kullanılan komutları içerir. Örneğin, "start" komutu projeyi başlatırken, "test" komutu testleri çalıştırabilir.

// keywords: Projenin anahtar kelimelerini içerir. Bu, projenin daha kolay bulunmasına yardımcı olabilir.

// author: Projenin yazarını veya yazarlarını belirtir.

// license: Projenin lisansını belirtir. Lisans, projenin kullanım koşullarını ve dağıtım hakkını düzenler.

// dependencies: Projenin çalışması için gereken bağımlılıkları (dependencies) ve sürümlerini içerir. Bu bağımlılıklar, npm install veya yarn install komutuyla yüklenir.

// devDependencies: Yalnızca geliştirme aşamasında kullanılan bağımlılıkları ve sürümlerini içerir. Bu bağımlılıklar, genellikle test, hata ayıklama veya proje yapılandırması için kullanılır.

// repository: Projenin kaynak kodunun barındırıldığı depo (repository) bilgilerini içerir. Genellikle bir GitHub veya GitLab URL'sini içer.

// scripts: Proje ile ilgili otomatikleştirilmiş işlemleri ve komutları içerir. Örneğin, "start" komutu projeyi başlatır, "test" komutu testleri çalıştırır.

// engines: Projenin çalıştırılabilmesi için gerekli Node.js sürümünü veya uyumlu olduğu Node.js sürümlerini belirtir.

// Bu anahtarlar, bir Node.js projesinin yapılandırmasını, bağımlılıklarını ve özelliklerini tanımlamak için kullanılır. package.json dosyası, projenin üzerinde çalışan geliştiricilere ve paket yöneticisine (npm veya yarn gibi) projenin nasıl çalıştırılacağı, hangi bağımlılıkların yüklenmesi gerektiği ve daha fazlası hakkında bilgi sağlar. Bu nedenle, herhangi bir Node.js projesi için temel bir yapılandırma dosyasıdır.

//? 7Express.js'de res.send() ve res.json() arasındaki fark nedir?

// Express.js'de res.send() ve res.json() işlevleri HTTP yanıtları oluşturmak için kullanılır ve istemcilere veri göndermek için kullanılırlar. İşte bu iki yöntem arasındaki temel farklar:

// res.send():

// res.send() yöntemi, farklı veri türlerini kabul edebilen çok yönlü bir yöntemdir. JSON, HTML, metin, resimler ve daha fazlası gibi çeşitli veri türlerini gönderebilirsiniz.
// İçine veriyi yerleştirirken, Express otomatik olarak içerik türünü algılar ve uygun başlıkları ayarlar.
// Örnek kullanım:
// javascript
// Copy code
// res.send("Merhaba dünya"); // Metin gönderme
// res.send({ message: "JSON verisi" }); // JSON gönderme
// res.json():

// res.json() yöntemi, JavaScript Nesne Notasyonu (JSON) biçiminde veri göndermek için özelleştirilmiştir. Bu yöntem, otomatik olarak içerik türünü "application/json" olarak ayarlar.
// Veri gönderilirken, JavaScript nesnesi JSON biçimine dönüştürülür ve JSON verisi olarak istemcilere iletilir.
// Örnek kullanım:
// javascript
// Copy code
// res.json({ message: "JSON verisi" });
// Özetle, res.send() yöntemi farklı veri türlerini göndermek için kullanılabilirken, res.json() yöntemi özellikle JSON verisi göndermek için tasarlanmıştır ve içerik türünü otomatik olarak ayarlar. Hangi yöntemi kullanmanız gerektiği, göndermek istediğiniz veri türüne ve HTTP yanıtınıza bağlıdır. Eğer JSON verisi gönderiyorsanız, res.json() daha uygun bir seçenek olabilir, çünkü bu yöntem JSON biçimini otomatik olarak işler.

//?8 Express.js'de app.use() ve app.get() arasındaki fark nedir?

// ChatGPT
// Express.js'de app.use() ve app.get() farklı amaçlara hizmet eden iki farklı yöntemdir ve HTTP isteklerini ele almak için kullanılırlar. İşte bu iki yöntem arasındaki temel farklar:

// app.use():

// app.use() yöntemi, Express uygulamanızda belirtilen bir ara yazılımı (middleware) veya işlevi tüm istekler için kullanmak için kullanılır.
// Bu yöntemi kullanarak, belirli bir rotaya veya isteğe bağlı olarak tüm isteklere işlemler uygulayabilirsiniz. Özellikle genel işlemler veya güvenlik kontrolleri gibi tüm istekler için geçerli olan işlemleri tanımlamak için kullanışlıdır.
// Örnek kullanım:
// javascript
// Copy code
// app.use(express.json()); // Tüm istekler için JSON verilerini işle
// app.use(authMiddleware); // Tüm istekler için kimlik doğrulama
// app.get():

// app.get() yöntemi, Express uygulamanızda belirli bir HTTP GET isteği için bir işlevi tanımlamak için kullanılır.
// Bu yöntemi kullanarak, belirli bir URL rotası ve HTTP GET isteği için bir yanıt oluşturabilirsiniz. Bu, belirli bir sayfa veya kaynağa erişim gerektiren durumlarda kullanılır.
// Örnek kullanım:
// javascript
// Copy code
// app.get("/sayfa", (req, res) => {
//   res.send("Bu sayfaya GET isteği geldi.");
// });
// Özetle, app.use() genellikle ara yazılımları (middleware) uygulamak veya tüm istekler için ortak işlemler gerçekleştirmek için kullanılırken, app.get() belirli bir HTTP GET isteği için özel bir işlevi tanımlamak için kullanılır. Her iki yöntem de Express.js uygulamanızda kullanılabilecek güçlü araçlardır ve isteğe bağlı olarak birlikte kullanılabilirler.

//?  9 Gelen istek yöntemini ve URL'yi konsola kaydetmek için bir ara yazılım yazın
const express = require("express");
const app = express();

// Özel middleware işlevi
const logRequest = (req, res, next) => {
  const requestMethod = req.method;
  const requestUrl = req.originalUrl;

  console.log(`Gelen istek: ${requestMethod} ${requestUrl}`);

  // Diğer middleware veya işlevlere devam etmek için next() kullanılır.
  next();
};

// Middleware'i uygula
app.use(logRequest);

// Route tanımlama
app.get("/", (req, res) => {
  res.send("Ana sayfa");
});

// Express uygulamasını dinlemeye başla
app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor");
});

//? 10 Express.js kullanarak sorgu parametreleri aracılığıyla iletilen iki sayının toplamını hesaplayan bir işlev (route) örneği aşağıda verilmiştir:
const express = require("express");
const app = express();

// Toplama işlemini gerçekleştiren route
app.get("/topla", (req, res) => {
  // Sorgu parametrelerini al
  const { sayi1, sayi2 } = req.query;

  // Sorgu parametrelerini sayıya dönüştür (query string olarak gelen veriler genellikle metin olarak gelir)
  const num1 = parseInt(sayi1);
  const num2 = parseInt(sayi2);

  // Hatalı giriş kontrolü
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Geçersiz sayılar" });
  }

  // Toplama işlemi
  const toplam = num1 + num2;

  // Sonucu yanıt olarak gönder
  res.json({ sonuc: toplam });
});

// Express uygulamasını dinlemeye başla
app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor");
});
