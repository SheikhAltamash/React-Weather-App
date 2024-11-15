function convertUnixTimestampTo12HourFormat(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const minutesStr = String(minutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  const timeString = `${hours}:${minutesStr} ${ampm}`;

  return timeString;
}
 function convertTo12HourFormat(hour, min) {
   if (hour < 0 || hour > 23 || isNaN(hour)) {
     throw new Error("Invalid hour. Please provide an hour between 0 and 23.");
   }
   const period = hour >= 12 ? "PM" : "AM";
   let hour12 = hour % 12;
   if (hour12 === 0) {
     hour12 = 12;
   }

   return `${hour12}:${min} ${period}`;
 }
export { convertUnixTimestampTo12HourFormat , convertTo12HourFormat };