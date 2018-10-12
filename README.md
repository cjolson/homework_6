# Assignment #6:

## 05-430 / 05-630 Fall 2018 – Programming Usable Interfaces
### Assignment 6 – Adding Functionality to a Website with JS Assigned: Wed Oct 10 2018
**Due: Fri Oct 26 2018 11:59 pm**

### Learning Goals/To Do
- Practice JavaScript/JQuery by adding functionality to your web site from Assignment 5.
- Practice with Objects and Storage in JavaScript.

### Requirements:
Building off of the web store that you designed and implemented for Assignment 5, add the following:
1. Required: Create a NEW page.
    1. The page should be a Shopping cart page where users can view items in their cart. Include the following prototypes.
        1. A low fidelity prototype
        2. A high fidelity prototype
        3. Implement your new shopping cart page design in HTML + CSS. Modify your existing web store files as needed.
2. Required: Create NEW features for your site.
    1. The user can modify options on the Product Detail page (the size, quantity, etc.).
    2. The Product Detail page should change according to the user’s selection. For example, if a user selected a ​Tiny​​ ​Fire Orange​​ Cat Harness, the page should update with the details of that product (i.e. update size, color and image). This should NOT be a new HTML file. Use JavaScript/jQuery to implement this functionality.
    3. The user can add products to their shopping cart. There should be some visual indication to the user of how many items they have in their shopping cart.
    4. The user should be able to view their shopping cart on a Shopping Cart page, see the items they selected, and remove the items they no longer want.
    5. The shopping cart page should reflect the user’s actual product selections.
    6. **You do NOT need to implement the checkout process.**
3. Required: Write a one (or more) paragraph reflection
    1. What challenges or bugs did you encounter?
    2. How did you overcome these challenges?
    
### Other notes:
1. You will need things we will learn in week 7 and week 8 labs to fully complete this homework assignment. I suggest you start with the JavaScript we learn in Week 7 first.
2. Do NOT use any existing JavaScript libraries for this assignment (jQuery is acceptable). You are not required to use jQuery. You can use plain JavaScript. Either is fine.
3. Note: You can use plain HTML/CSS code only. DO NOT use frameworks like Bootstrap or other libraries (you can “look at it” means you can look at how they do the HTML and CSS and format your code in a similar way, but DO NOT import Bootstrap or other libraries).
4. Please cite any external resources you use.
5. Your website does not have to be responsive to screen size changes. However, please test your website for a 1366 x 768 screen ratio using the (https://developers.google.com/web/tools/chrome-devtools/device-mode/) [Developer Tools Device Mode].
6. Please follow Google’s (https://google.github.io/styleguide/htmlcssguide.html)[HTML, CSS], and (https://google.github.io/styleguide/jsguide.html)[JavaScript Style Guidelines].

### Deliverables (27 pts total)
1. (4 pts total) Low & High-Fidelity Prototypes:
    1. A low-fidelity rough sketch for the required new page and features. You can add to your sketch for the previous assignment, but please explain how your sketch changed. Otherwise simply explain your design choice.
    2. A high-fidelity digital mockup for the required new pages and features. You can add to your mockup for the previous assignment, but please explain how your mockup changed. Otherwise, simply explain your design choice.
2. (21 pts total) Web Prototype w/JavaScript:
    1. At least 1 JavaScript file
        1. Page updates when selecting product details
        2. Adding to cart + visual indication of items in cart
        3. Removing items from shopping cart
    2. All HTML/CSS files from Assignment 4
    3. A new HTML file for the required new page linked to the main page
    4. For HTML files:
        1. Make sure each of the pages renders without error. Use the Developer Tools in Chrome to do this, and also use the (https://validator.w3.org)[HTML validator] to validate your HTML file.
        2. Indent and comment your code; follow the HTML style guides.
    5. For CSS files:
        1. Make sure the CSS file is well formatted and use the (https://jigsaw.w3.org/css-validator/)[CSS validator] to validate your CSS file.
        2. Indent, comment and follow the CSS style guides.
    6. For JavaScript Files:
        1. Interactions should work without error. Use the Developer Tools in Chrome to help you with this.
        2. Indent and comment your code; follow the JavaScript style guides. (see above)
3. (2 pts total) Reflection:
    1. Writing should use appropriate style and clearly convey the writer’s concepts.
    2. Writing should demonstrate reflection on actual events and analyze these events to draw appropriate conclusions.
     
### Submission:
1. Include all the files required in this write up in a new folder called assignment_6 under your main Github folder. You should include,
    1. Your reflection in pdf or MS Word format. Include your name, section, and the assignment number in the document.
    2. All files for the homework.
    3. Your CSS, js and image files (and other font files etc. you are using) should be kept in their respective directories (typically font sets, icons, or images are stored in an Assets directory). It is a good way to keep your code organized.
2. Make sure you do a ```git pull``` before you start working.
3. Always (for every change, big or small) do a:
4. The deadline for the Assignment is Fri October 26 2018 11:59 pm. We will count as your final submission the last ```git push``` before that time. Anything pushed after that date and time will be counted as a late submission.

★ Bonus (8 pts total) ★
1. Add a “wishlist” functionality. For this feature, users can add products to their wishlist
and view their wishlist (either on the shopping cart page or a separate page). (max 3pts)
2. Add a carousel on at least 1 Product Detail page that shows similar products. The
carousel should be able to scroll left and right. See an (https://drive.google.com/file/d/0B2esDnMdnTGLZ3NkVk9DbTNTcTQ/view)[example here] taken from Amazon.com. (max 5pts)
```    
    1. git add *
    2. git commit -m “Please write a message that makes sense here; it is good practice”
    3. git push
```   