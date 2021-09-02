const setStartDate = moment(new Date()).format("ddd, MMM Do");
const setEndDate = moment(new Date()).add(1, 'days').format("ddd, MMM Do");
document.getElementById('check-in-out').innerText = `${setStartDate} - ${setEndDate}`;

const picker = new Litepicker({
  element: document.getElementById('check-in-out'),
  singleMode: false,
  tooltipText: {
    one: 'night',
    other: 'nights'
  },
  numberOfColumns: 2,
  numberOfMonths: 2,
  tooltipNumber: (totalDays) => {
    return totalDays - 1;
  },
  setup: (picker) => {
    picker.on('selected', () => {
      const {
        dateInstance: datestart
      } = picker.getStartDate()
      const {
        dateInstance: dateend
      } = picker.getEndDate()
      // popup1.style.display = "none"; //closing popup
      const setStartDate = moment(datestart).format("ddd, MMM Do");
      const setEndDate = moment(dateend).format("ddd, MMM Do");
      console.log({setStartDate,setEndDate});
      const checkin_hidden = document.getElementById('checkin-hidden');
      const checkout_hidden = document.getElementById('checkout-hidden');
      checkin_hidden.value = moment(datestart).format("D-MMM-YY");
      checkout_hidden.value = moment(dateend).format("D-MMM-YY");;

      document.getElementById('check-in-out').innerText = `${setStartDate} - ${setEndDate}`;
      // document.getElementById('check-out-date-HA').innerHTML = setEndDate;
    });
  },
});