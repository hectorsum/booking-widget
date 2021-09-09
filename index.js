const url = new URL(window.location.href);
const aDate = url.searchParams.get("aDate");
const dDate = url.searchParams.get("dDate");
const checkin_hidden = document.getElementById('checkin-hidden');
const checkout_hidden = document.getElementById('checkout-hidden');

if(!aDate && !dDate){
  const setStartDate = moment(new Date()).format("ddd, MMM Do");
  const setEndDate = moment(new Date()).format("ddd, MMM Do");
  document.getElementById('check-in-out').innerText = `${setStartDate} - ${setEndDate}`;
  checkin_hidden.value = moment(new Date()).format("YYYY-MM-DD");
  checkout_hidden.value = moment(new Date()).format("YYYY-MM-DD");
}else{
  const setStartDate = moment(aDate).format("ddd, MMM Do");
  const setEndDate = moment(dDate).format("ddd, MMM Do");
  document.getElementById('check-in-out').innerText = `${setStartDate} - ${setEndDate}`;
  checkin_hidden.value = aDate;
  checkout_hidden.value = dDate;
}

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
      const setStartDate = moment(datestart).format("ddd, MMM Do");
      const setEndDate = moment(dateend).format("ddd, MMM Do");
      console.log({setStartDate,setEndDate});
      
      checkin_hidden.value = moment(datestart).format("YYYY-MM-DD");
      checkout_hidden.value = moment(dateend).format("YYYY-MM-DD");

      document.getElementById('check-in-out').innerText = `${setStartDate} - ${setEndDate}`;
    });
  },
});
