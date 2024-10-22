// Example code on how normal TypeScript code can look similar to React code.

function formatTime(timeZone: string, date: Date) {
  return Intl.DateTimeFormat("sv-SE", {
    timeStyle: "medium",
    timeZone,
  }).format(date);
}

type Props = {
  city: string;
  timeZone: string;
};

function clock({ city, timeZone }: Props) {
  const time = formatTime(timeZone, new Date());

  return `${city}: ${time}`;
}

const clockConfigurations = [
  { city: "Stockholm", timeZone: "Europe/Stockholm" },
  { city: "Sydney", timeZone: "Australia/Sydney" },
];

setInterval(() => {
  clockConfigurations.map((clockConfiguration) => {
    console.log(clock(clockConfiguration));
  });
}, 1000);
