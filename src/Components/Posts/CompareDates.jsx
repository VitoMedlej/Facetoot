import datetimeDifference from "datetime-difference";
import date from 'date-and-time';

const compareDates = (e) => {
    const now = new Date()
    let a = new Date(date.format(now, ' YYYY/MM/DD , HH:mm:ss '))
    let b = new Date(e)
     const result = datetimeDifference(a, b);
    const {years, month, days, hours, minutes} =  result
    let final = `${years ? `${years} years` : '' || month ? `${month} month` : '' || days ? `${days} days` : '' || hours ? `${hours} hrs` : '' || minutes ? `${minutes} min` : ''}`
    final =  final.trim();
    return final
}
export default compareDates;