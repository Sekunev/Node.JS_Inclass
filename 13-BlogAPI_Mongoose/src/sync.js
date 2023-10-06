"use strict";

const { BlogCategory, BlogPost } = require("./models/blogModel");

// !/* Bu Fonksiiyon blogPost'larda blogCategoryId'si olmayan objelere blogCategoryId vermek için tanımlandı. Bir kere çalıştırıp Pasif hale getirilebilir.*/

module.exports = async () => {
  /* BlogCategory */

  // Get first blogCategory:
  //   const blogCategory = await BlogCategory.findOne();
  const blogCategory = await BlogCategory.findOne({ name: "Katogori3" });
  console.log(blogCategory._id);

  if (blogCategory) {
    const isUpdated = await BlogPost.updateMany(
      {
        //? Filter:
        blogCategoryId: { $exists: false }, // field yok ise
      },
      {
        //? Update:
        blogCategoryId: blogCategory._id, // kaydı ata
        // $unset: { "blogCategoryId": 1 } // field sil
      }
    ).catch((err) => console.log(err));
    console.log(isUpdated);
  }

  // End:
  console.log("* Synchronised *");
  /* Finished */
};
