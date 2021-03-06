# BaselHack_Product_Search
Product Search project for BaselHack 2021

## Important Notes
* Create a Google account with credit card / billing enabled. 
* Follow the instructions from the quick start guide of the Google Vision API Product Search: [https://cloud.google.com/vision/product-search/docs/quickstart]
* Upload the pictures into a Bucket on Google storage. 
* Upload the CSV describing the pictures into a Bucket on Google storage. 
** make sure the csv have enough rows, use empty rows
* Create a service principal, download the token, set the environment variable.  
* Make sure this service principal has access to the bucket with the CSV and the pictures.  
* Run the request to start the training. It will return a request to ask for the status. 
* It seems to be required to put all your products into one 'ProductSet' because you have to provide it in the request. 
* As soon as the training is finished, you can ask the API to search pictures. The results are acceptable.
* When you use one of the training pictures, it will most probably find the right one, but not with a match of 100%. Therefore we assume that Google uses the product category (e.g. _packagedgoods-v1_) to recogize the object itself (e.g. a package of chips) and then knows how to deal with angle and orientation and then maps the product itself. 
** hits under 0.5 score can be dismissed
* If something does not work, try it again after 30 minutes - only then Google updates the data. 
** changes in the product data is only loaded in 30 minutes bulks


## Details

### Technology stack
* Angular
* node.js
* Docker
* Vision API Product Search from Google Cloud


### Test deployment
<img src="./presentation/search-product.svg">


### Proxy
[https://levelup.gitconnected.com/fixing-cors-errors-with-angular-cli-proxy-e5e0ef143f85]

    npm install cors

    const cors = require('cors');
    app.use(cors({
        origin: ['https://www.section.io', 'https://www.google.com/']
    }));
