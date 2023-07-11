export default function BookList() {
   let pageTitle = "My Favorite Books";
   let book1 = "https://m.media-amazon.com/images/I/91aF1JPyq5L._SY522_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71GTmHSmomL._SY522_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/911ZFJjYM0L._SY522_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
         <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
         <img src={book3} alt="The London Seance Society by Sarah Penner" />
      </div>      
   );
}