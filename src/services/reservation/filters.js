let data = require('../../../data/mock.json');
let CONSTANTS_RESTAURANT = require('../../../data/constants.json');

const equijoin = (xs, ys, primary, foreign, sel) => {
   const ix = xs.reduce((ix, row) => ix.set(row[primary], row), new Map());
   return ys.map((row) => sel(ix.get(row[foreign]), row));
};

export const dateFilter = (dateForReservation) => {
   const dateAsking = new Date(dateForReservation);
   const dayReserved = data.reservations.filter((r) => {
      const dateReserved = new Date(r.dateAndHourFrom);
      return dateReserved.toDateString() === dateAsking.toDateString();
   });

   return dayReserved;
};

export const mainFilter = (dateForReservation) => {
   const dayForJoin = dateFilter(dateForReservation);
   const tableJoin = equijoin(
      data.tables,
      dayForJoin,
      'id',
      'idTable',
      ({ number, capacity }, { idTable, dateAndHourFrom }) => ({
         idTable,
         number,
         capacity,
         dateAndHourFrom,
      })
   );
   let timesOccupiedArray = [];
   let capacityOccupiedArray = [];
   for (let i = 0; i < CONSTANTS_RESTAURANT.timesArray.length; i++) {
      timesOccupiedArray.push(0);
   }
   for (let i = 0; i < CONSTANTS_RESTAURANT.tablesArray.length; i++) {
      capacityOccupiedArray.push(0);
   }
   CONSTANTS_RESTAURANT.timesArray.forEach((ta, i) => {
      let tempArray = tableJoin.filter((r) => {
         const hourOfReservation = new Date(r.dateAndHourFrom).getHours();
         return hourOfReservation === ta;
      });
      timesOccupiedArray[i] += tempArray.length;
   });
   CONSTANTS_RESTAURANT.capacityArray.forEach((ca, i) => {
      let tablesArray = tableJoin.filter((t) => {
         return t.capacity === ca;
      });
      capacityOccupiedArray[i] += tablesArray.length;
   });
   const timeAvailableArray = timesOccupiedArray.map((r) => {
      if (r >= CONSTANTS_RESTAURANT.numberOfTables) {
         return 'No disponible';
      } else return r;
   });
   const capacityAvailableArray = capacityOccupiedArray.map((t, i) => {
      if (t >= CONSTANTS_RESTAURANT.tablesArray[i]) {
         return 'No disponible';
      } else {
         return t;
      }
   });

   return { timeAvailableArray, capacityAvailableArray };
};
