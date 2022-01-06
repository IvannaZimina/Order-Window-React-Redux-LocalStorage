# Task
Create e web-app with order window to buy some goods.

## Stack
### Backend
The data were getting from (https://fakestoreapi.com/products/)
### Frontend
JavaScript, React, Redux, localStorage via redux-persist, Sass (SCSS)

## Description
There was created basic React-app with [Create React App](https://github.com/facebook/create-react-app).
There were created two pages with the 'react-router-dom': products page, order page.

On the main (product) page there were created cards of goods using SASS (SCSS) with functional 'BUY' buttons.
In the Header component there was implemented a Counter which is count of positions in order list.
It changed after click on buttons 'BUY' without duplicate the positions in order.

On the order page there was created a block of chosen positions with summary data.
There were implemented followings options in the order window using native JavaScript and Redux:
1) click buttons to manually change count of items (+ \ -);
2) function to auto change of amount while changing the count;
3) delete button to delete the position from store, localStorage and the order of course.

The Redux and localStorage via Redux-persist were used as storages for order's data.
There were implemented the following transactions:
- add position to store via 'BUY' buttons;
- delete position from order in two ways (delete button and count of position === 0)
- change count and amount of item in store.

## Views

![image](https://user-images.githubusercontent.com/46706194/148299075-76d71f64-c5c2-40b8-9a0f-13d9c120d1b5.png)
![image](https://user-images.githubusercontent.com/46706194/148299119-2ef45ca8-57a1-4a42-a7bf-00d976696880.png)

