# NodeJS

- Official & Download: https://nodejs.org
- Documents: https://nodejs.org/api

### Check versions:

```sh
    $ node -v
    $ npm -v
```

### NPM

```sh

    $ npm help

    $ npm init -y # package.json kur Proje dosyası oluştur.
    $ npm list # başlangıçta boştur.


    $ npm install express
    # node_modules'i ekleyerek package.json içerisine
#    "dependencies": {
#     "express": "^4.18.2"
#   } Projeye express geliştirme bağımlılığı olarak kurdu. --save-dev yazmaya gerek yok.

 npm i dotenv #.env için

    $ npm i nodemon --save-dev # package/scripts -> "dev": "nodemon index.js"
    # --save-dev veya kısaltması olan -D, geliştirme bağımlılığı olarak paketi projenize eklediğinizi belirtir.
    $ npm run dev # yarn dev

    $ npm install # install packaces (at package.json)
    # Bağımlılıkları yüklemeden önce, projenizin kök dizininde bulunan package.json dosyası olmalıdır. Ayrıca, projenizin çalışması için gereken tüm bağımlılıkların bu dosyada doğru şekilde tanımlandığından emin olmalısınız. npm install, bu bağımlılıkları otomatik olarak İnternet üzerinden indirir ve node_modules adlı bir klasör altında saklar.
    $ npm install --production
    #  komutu, Node.js projenizin sadece üretim bağımlılıklarını yüklemek için kullanılan bir npm komutudur. Yani, projenizi canlı bir ortamda çalıştırırken ihtiyaç duyduğunuz paketleri yüklemek için kullanılır. Geliştirme sırasında kullanılan geliştirme bağımlılıkları (development dependencies) yüklenmez. Bu, projenizin gereksiz bağımlılıklarla şişmesini ve canlı ortamda daha hızlı ve güvenilir çalışmasını sağlar.
    $ npm i --omit=dev # install packaces with development modules

    # GLOBAL
    $ npm --global list
    $ npm -g list
    $ npm i -g nodemon  # nodemon u global'e kur.
    $ nodemon -v

    # NPX
    $ npx create-react-app newfolder # Ctrl+C
```

### NodeShell

```sh
    $ node
    > console.log('Hello World')
    > let moduleName = require("module")
    > moduleName.builtinModules // Show included modules.
    > .exit


nodemon dosyaAdı.js # her kod değişikliği sonrasında manuel olarak sunucunuzu yeniden başlatmanız gerekmez.
```
