USE mercadoliebre;
SELECT products.name as productName, categories.name as categoryName
from products INNER JOIN 
categories ON products.categoryId = categories.id;

USE mercadoliebre;
SELECT products.name as productName, categories.name as categoryName
from products INNER JOIN 
categories ON products.categoryId = categories.id
where categories.name = "Computers"