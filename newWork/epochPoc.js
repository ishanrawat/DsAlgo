const moment = require('moment-timezone');
const checkEpoch = ()=>{
    const istTimeZone = 'Asia/Kolkata';
    const istDate = moment.tz({ hour: 12, minute: 0, second: 0, millisecond: 0 }, istTimeZone);
    const epochTimestamp = istDate.valueOf();
    console.log(epochTimestamp,istDate)
}
checkEpoch()