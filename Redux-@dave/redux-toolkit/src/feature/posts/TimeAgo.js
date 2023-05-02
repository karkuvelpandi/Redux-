import React from "react";
// import moment from "moment";
import { parseISO, formatDistanceToNow } from "date-fns";
const TimeAgo = ({ className,timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
    // const timePeriod = moment(timeStamp).fromNow();
    // timeAgo = timePeriod   // moment js not rerendering as of now need to look into Todo
  }
  return (
    <span className={className} title={timeStamp}>    
      <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
