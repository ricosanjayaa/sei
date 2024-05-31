let teamName = "Paper Rex";
let teamLogo = "assets/prx.webp";
let teamBanner = "assets/prx_banner.png";

const datas = [
  {
    imageFile: "alecks.jpg",
    heading: "🇫🇷 ALECKS A.k.A Alexandre Sallé // COACH",
    birth: "Born August 8, 1989",
    contact: "alecks@pprx.team (+1 234 567 890)"
  },
  {
    imageFile: "d4v41.webp",
    heading: "🇲🇾 KHALISH “d4v41” RUSYAIDEE // PLAYER",
    birth: "Born October 14, 1998",
    contact: "d4v41@pprx.team (+1 234 567 890)"
  },
  {
    imageFile: "f0rsaken.jpg",
    heading: "🇮🇩 JASON “f0rsakeN” susanto // PLAYER",
    birth: "Born March 25, 2004",
    contact: "forsaken@pprx.team (+1 234 567 890)"
  },
  {
    imageFile: "mindfreak.jpg",
    heading: "🇮🇩 AARON “mindfreak” LEONHART // PLAYER",
    birth: "Born March 25, 2004",
    contact: "mindfreak@pprx.team (+1 234 567 890)"
  },
  {
    imageFile: "something.jpg",
    heading: "🇷🇺 ILYA “something” PETROV",
    birth: "Born February 11, 2002",
    contact: "something@pprx.team (+1 234 567 890)"
  },
  {
    imageFile: "jinggg.png",
    heading: "🇸🇬 WANG “Jinggg” JIE // PLAYER",
    birth: "Born July 29, 2003",
    contact: "jinggg@pprx.team (+1 234 567 890)"
  }
];

let membersHtmlData = "";
datas.forEach((data, index) => {
  const rowClass = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
  const textAlign = index % 2 === 0 ? "text-left" : "text-right";
  membersHtmlData += `<div class="flex ${rowClass} gap-4 items-center"><img class="h-32 aspect-video rounded-xl object-cover" src="assets/${data.imageFile}" alt="${data.imageFile}"><div class="flex flex-col gap-1"><h3 class="${textAlign} w-full text-xl md:text-2xl">${data.heading}</h3><div><p class="${textAlign} w-full text-xs md:text-base opacity-50">${data.birth}</p><p class="${textAlign} w-full text-xs md:text-base opacity-50">${data.contact}</p></div></div></div>`;
});

let description = `Paper Rex is a Southeast Asian esports organization based in Singapore. It was founded in January 2020 by legendary Counter-Strike player, Harley "dsn" Örwall, together with the founder and chief editor of CSGO2ASIA, Nikhil "nikH" Hathiramani.`;

let teamList = ["sentinels", "fnatic", "prx"];
let currentTeam = "prx";

const teamData = {
  sentinels: {
    name: "Sentinels",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque quibusdam aspernatur maiores reprehenderit quas.",
    imgSrc: "assets/sentinels.png",
    altText: "Sentinels Logo"
  },
  fnatic: {
    name: "Fnatic",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque quibusdam aspernatur maiores reprehenderit quas.",
    imgSrc: "assets/fnatic.png",
    altText: "Fnatic Logo"
  },
  prx: {
    name: "PRX",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque quibusdam aspernatur maiores reprehenderit quas.",
    imgSrc: "assets/prx.webp",
    altText: "PRX Logo"
  }
};

function generateTeamHtml(teamKey) {
  const team = teamData[teamKey];
  return `
    <div class="flex flex-col gap-2 md:gap-4 p-4 shadow-2xl rounded-xl">
      <div class="w-full aspect-video bg-neutral-200 rounded-xl flex items-center">
        <img class="w-full h-4/5 m-auto aspect-video object-contain" src="${team.imgSrc}" alt="${team.altText}">
      </div>
      <h3 class="text-xl md:text-2xl">${team.name}</h3>
      <p class="text-xs md:text-base">${team.description}</p>
      <button class="w-fit bg-neutral-800 text-neutral-100 py-1 px-4 rounded-lg text-xs md:text-base">View team</button>
    </div>
  `;
}

function generateOtherTeamsHtml(currentTeam) {
  let teamsHtml = "";
  for (const teamKey of teamList) {
    if (teamKey !== currentTeam) {
      teamsHtml += generateTeamHtml(teamKey);
    }
  }
  return teamsHtml;
}

const achievements = [
  "3rd on VCT 2024: Masters Madrid",
  "2nd on AfreecaTV VALORANT LEAGUE",
  "2nd on VALORANT Champions 2023",
  "3rd on VCT 2023: Masters Tokyo",
  "1st on VCT 2023: Pacific League",
  "1st on VCT 2023: Pacific League",
  "1st on VCT 2023: Pacific League",
  "1st on VCT 2023: Pacific League",
  "1st on Valorant India Invitational",
  "2nd on VCT 2022: Stage 2 Masters - Copenhagen",
  "1st on VCT 2022: APAC Stage 2 Challengers",
  "4th on VCT 2022: Stage 1 Masters - Reykjavík",
  "1st on VCT 2022: APAC Stage 1 Challengers"
];

let achievementsHtmlData = "";
achievements.forEach((achievement) => {
  achievementsHtmlData += `<li class="text-xs md:text-base">${achievement}</li>`;
});