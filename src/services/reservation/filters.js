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

export const mainFilter = (dateForReservation, mode, timeSelected) => {
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
   if (mode === 'time') {
      let timesOccupiedArray = [];
      for (let i = 0; i < CONSTANTS_RESTAURANT.timesArray.length; i++) {
         timesOccupiedArray.push(0);
      }
      CONSTANTS_RESTAURANT.timesArray.forEach((ta, i) => {
         let tempArray = tableJoin.filter((r) => {
            const hourOfReservation = new Date(r.dateAndHourFrom).getHours();
            return hourOfReservation === ta;
         });
         timesOccupiedArray[i] += tempArray.length;
      });
      const timeAvailableArray = timesOccupiedArray.map((r) => {
         if (r >= CONSTANTS_RESTAURANT.numberOfTables) {
            return 'No disponible';
         } else return r;
      });

      return timeAvailableArray;
   }
   if (mode === 'capacity') {
      let capacityOccupiedArray = [];

      for (let i = 0; i < CONSTANTS_RESTAURANT.tablesArray.length; i++) {
         capacityOccupiedArray.push(0);
      }

      CONSTANTS_RESTAURANT.capacityArray.forEach((ca, i) => {
         let tablesArray = tableJoin.filter((t) => {
            const hourOfReservation = new Date(t.dateAndHourFrom).getHours();
            return t.capacity === ca && timeSelected === hourOfReservation;
         });
         capacityOccupiedArray[i] += tablesArray.length;
      });

      const capacityAvailableArray = capacityOccupiedArray.map((t, i) => {
         if (t >= CONSTANTS_RESTAURANT.tablesArray[i]) {
            return 'No disponible';
         } else {
            return t;
         }
      });

      return capacityAvailableArray;
   }
};
