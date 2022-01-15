# Task
Create e web-app with order window to buy some goods.

## Stack
### Backend
The data were getting from (https://fakestoreapi.com/products/)
### Frontend
JavaScript, React, Redux, localStorage via redux-persist, Sass (SCSS)

## Description
A basic React-app was created with Create React App. The following pages were developed with the 'react-router-dom': products page, order page.

On the main (product) page, were implemented cards of goods using SASS (SCSS) with functional 'BUY' buttons. In the Header component a Counter was implemented. It counts positions which were added to the order. It changes after click on button 'BUY' without duplicate the positions in order.

On the order page, a block of chosen positions with summary data there was created.
The followings options in the order window were implemented using native JavaScript and Redux:
1)	click buttons to manually change count of items (+ \ -);
2)	function to auto change of amount while changing the count;
3)	delete button to delete the position from store, localStorage and the order of course.

Local storage is synchronized with the redux-store via redux-persist library for managing order's data.
The following functional options were implemented:
-	add position to order via 'BUY' button from the main page;
-	delete position from order in two ways (delete button and count of position === 0)
-	change count and amount of items in order.

Also, as a required parameter, the preload of the list of product was added. You can see the gif with snail if the list is loading. If it takes more than one minute, because the work of api – please, update the page.


## Views

![image](https://user-images.githubusercontent.com/46706194/148768179-8dc92f1a-979c-4325-8b71-18780b46c976.png)
![image](https://user-images.githubusercontent.com/46706194/148299119-2ef45ca8-57a1-4a42-a7bf-00d976696880.png)

