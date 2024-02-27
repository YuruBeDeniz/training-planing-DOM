# training-planing-DOM

https://yurubedeniz.github.io/training-planing-DOM/


## Create Cards
To create the carts I wrote a createCard function which takes title, description, color, className arguments (depending on what will be shown in the card, this arguments can change)

The cards have a card class for general styling which I assigned it in createCard function and individual class names for individual styling which I added them additionally with the for loop

I wrapped the texts and the icon to be able to use flex box and appended them to the card div

To assign the cards their parameters, i.e., their colors, titles, descriptions and classnames I used getElementById() method and for loop

## Filter Cards
To filter the checked values to be able to filter cards, I assigned them names (goal and level) & to get all the cards I use querySelectorAll('.card') method

And to be able to easily filter them with their class names (and to be able to use card.style.display = 'flex' || 'none'), I created a goalCardMap object and sorted the class names in line with the input type check. 

Finally, I loop through the checkedValues and assign the value to goalCardMap to be able to return the classNames for the checked value. Once I assigned thoese values to relatedCardClasses, I could be able to filter them from relatedCardClasses and assign it to filteredCardClasses. 

## Style Cards
To be able to achieve the requested design, I used CSS grid. There are 9 cards -one spanning to the second row while the rest occupies 1 Fr. Therefore, the grid has three columns with 1 fr each. To make it responsive I used media queries; until 768 px the cards are stacked in one column.
