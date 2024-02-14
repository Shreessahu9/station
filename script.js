// Sample data for train stations
const stationData = [
    
 {
  "code": "BRGT",
  "name": "BHERA GHAT",
  "nextstation": "BHITONI",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BHTN",
  "name": "BHITONI",
  "nextstation": "BIKRAMPUR",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BMR",
  "name": "BIKRAMPUR",
  "nextstation": "SRIDHAM",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SRID ",
  "name": "SRIDHAM",
  "nextstation": "KARAKBEL",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KKB ",
  "name": "KARAKBEL",
  "nextstation": "BELKHEDA",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BELD",
  "name": "BELKHEDA",
  "nextstation": "GHATPINDARAI",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GPC ",
  "name": "GHATPINDARAI",
  "nextstation": "NARSINGHPUR",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "NU",
  "name": "NARSINGHPUR",
  "nextstation": "KARELI",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KY",
  "name": "KARELI",
  "nextstation": "KARAPGAON",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KBN",
  "name": "KARAPGAON",
  "nextstation": "BOHANI",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BNE",
  "name": "BOHANI",
  "nextstation": "GADARWARA",
  "aden": "NU",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GAR",
  "name": "GADARWARA",
  "nextstation": "SALICHOUKA RD",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SCKR",
  "name": "SALICHOUKA RD",
  "nextstation": "JUNEHTA",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "JHT",
  "name": "JUNEHTA",
  "nextstation": "BANKHEDI",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BKH",
  "name": "BANKHEDI",
  "nextstation": "PIPARIYA",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "PPI",
  "name": "PIPARIYA",
  "nextstation": "SUHAGPUR",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SGP",
  "name": "SUHAGPUR",
  "nextstation": "GURAMKHEDI",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GMD",
  "name": "GURAMKHEDI",
  "nextstation": "BAGRATAWA",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BGTA",
  "name": "BAGRATAWA",
  "nextstation": "SONTALALI",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SQL",
  "name": "SONTALALI",
  "nextstation": "GURRA",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GRO",
  "name": "GURRA",
  "nextstation": "ITARSI",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "ET",
  "name": "ITARSI",
  "nextstation": "-",
  "aden": "PPI",
  "route": " BHERA GHAT-ITARSI (BRGT -ET)",
  "den": "DEN(S)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KTE",
  "name": "KATNI JN.",
  "nextstation": "PATWARA",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "PTWA",
  "name": "PATWARA",
  "nextstation": "JUKEHI",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "JKE",
  "name": "JUKEHI",
  "nextstation": "PAKARIA ROAD ",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "PKRD",
  "name": "PAKARIA ROAD ",
  "nextstation": "AMDARA",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "UDR",
  "name": "AMDARA",
  "nextstation": "BHADANPUR",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BUU",
  "name": "BHADANPUR",
  "nextstation": "MAIHAR",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MYR",
  "name": "MAIHAR",
  "nextstation": "UNCHHERA",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "UHR",
  "name": "UNCHHERA",
  "nextstation": "LAGARGAWAN",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "LGLE",
  "name": "LAGARGAWAN",
  "nextstation": "SATANA JN.",
  "aden": "STA\/S",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "STA",
  "name": "SATANA JN.",
  "nextstation": "SAGMA ",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SAGM ",
  "name": "SAGMA ",
  "nextstation": "HATI ",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "HATI",
  "name": "HATI ",
  "nextstation": "JAITWARA",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "JTW",
  "name": "JAITWARA",
  "nextstation": "KHUTAHA ",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KTHA",
  "name": "KHUTAHA ",
  "nextstation": "CHITAHARA ",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "CTHR",
  "name": "CHITAHARA ",
  "nextstation": "MAJHAGAWAN",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MJG",
  "name": "MAJHAGAWAN",
  "nextstation": "TIKARIA",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "TKYR",
  "name": "TIKARIA",
  "nextstation": "MARKUNDI",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MKD",
  "name": "MARKUNDI",
  "nextstation": "BARAHA MUFI",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BQF",
  "name": "BARAHA MUFI",
  "nextstation": "BANSAPHAR",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BNPR",
  "name": "BANSAPHAR",
  "nextstation": "MANIKPUR",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MKP",
  "name": "MANIKPUR",
  "nextstation": "-",
  "aden": "STA\/N",
  "route": "KATNI -MANIKPUR  (KTE-MKP)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "STA",
  "name": "SATANA JN.",
  "nextstation": "KAIMA",
  "aden": "STA\/N",
  "route": "SATANA-REWA (STA - REW)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KMA",
  "name": "KAIMA",
  "nextstation": "SAKARIYA",
  "aden": "STA\/N",
  "route": "SATANA-REWA (STA - REW)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SKAR",
  "name": "SAKARIYA",
  "nextstation": "HINAUTA RAMBAN",
  "aden": "STA\/N",
  "route": "SATANA-REWA (STA - REW)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "HNM",
  "name": "HINAUTA RAMBAN",
  "nextstation": "BAGHAI RD",
  "aden": "STA\/N",
  "route": "SATANA-REWA (STA - REW)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BGHI",
  "name": "BAGHAI RD",
  "nextstation": "TRUKI RD",
  "aden": "STA\/N",
  "route": "SATANA-REWA (STA - REW)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "TZR",
  "name": "TRUKI RD",
  "nextstation": "REWA",
  "aden": "STA\/N",
  "route": "SATANA-REWA (STA - REW)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "REW",
  "name": "REWA",
  "nextstation": "-",
  "aden": "STA\/N",
  "route": "SATANA-REWA (STA - REW)",
  "den": "DEN(N)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KEQ",
  "name": "KACHHAPURA",
  "nextstation": "MADAN MAHAL",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MML",
  "name": "MADAN MAHAL",
  "nextstation": "JABALPUR JN.",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "JBP",
  "name": "JABALPUR JN.",
  "nextstation": "ADHARTAL ",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "ADTL",
  "name": "ADHARTAL ",
  "nextstation": "DEORI",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "DOE",
  "name": "DEORI",
  "nextstation": "GOSALAPUR",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GSPR",
  "name": "GOSALAPUR",
  "nextstation": "SIHORA ROAD",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SHR",
  "name": "SIHORA ROAD",
  "nextstation": "DUNDI",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "DDCE",
  "name": "DUNDI",
  "nextstation": "SLEEMANABAD RD",
  "aden": "JBP\/S",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SBD",
  "name": "SLEEMANABAD RD",
  "nextstation": "SANSARPUR ",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SNRR",
  "name": "SANSARPUR ",
  "nextstation": "NIWAR ",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "NWR",
  "name": "NIWAR ",
  "nextstation": "MADHAVNAGAR RD",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MDRR",
  "name": "MADHAVNAGAR RD",
  "nextstation": "KATNI SOUTH",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KTES",
  "name": "KATNI SOUTH",
  "nextstation": "KATNI MURWARA",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KMZ",
  "name": "KATNI MURWARA",
  "nextstation": "NEW KATNI JN.",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "NKJ",
  "name": "NEW KATNI JN.",
  "nextstation": "MAJHAGAWAN PHATAK",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MJGP",
  "name": "MAJHAGAWAN PHATAK",
  "nextstation": "HARDUA ",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "HDU",
  "name": "HARDUA ",
  "nextstation": "PATOHAN",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "PTHD",
  "name": "PATOHAN",
  "nextstation": "RITHI",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "REI",
  "name": "RITHI",
  "nextstation": "BAKHLETA ",
  "aden": "KTE",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BQQ",
  "name": "BAKHLETA ",
  "nextstation": "-",
  "aden": "DMO",
  "route": "(KACHHAPURA-BAKHLETA) KEQ-BQQ",
  "den": "DEN(C)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KTKD",
  "name": "KATANGI KHURD",
  "nextstation": "SALHANA",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SLHA",
  "name": "SALHANA",
  "nextstation": "PIPARIYAKALAN",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "PWK",
  "name": "PIPARIYAKALAN",
  "nextstation": "KHANNA BANJARI",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KHBJ",
  "name": "KHANNA BANJARI",
  "nextstation": "MAHROI ",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MFQ",
  "name": "MAHROI ",
  "nextstation": "DAMOY",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "DMYA",
  "name": "DAMOY",
  "nextstation": "VIJAYSOTA",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "VST",
  "name": "VIJAYSOTA",
  "nextstation": "CHHATENI",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "CTJ",
  "name": "CHHATENI",
  "nextstation": "BEOHARI",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BEHR",
  "name": "BEOHARI",
  "nextstation": "DURBRIKALAN",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BARD",
  "name": "DURBRIKALAN",
  "nextstation": "KANCHANPUR RD",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "CNC",
  "name": "KANCHANPUR RD",
  "nextstation": "JOBA",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "JOBA",
  "name": "JOBA",
  "nextstation": "MARWASGRAM",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MWJ",
  "name": "MARWASGRAM",
  "nextstation": "SHANKARPUR  \nBHANDOURA",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SKBR",
  "name": "SHANKARPUR  \nBHANDOURA",
  "nextstation": "NIWAS RD",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "NWB",
  "name": "NIWAS RD",
  "nextstation": "BHARSENDI",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BSDL",
  "name": "BHARSENDI",
  "nextstation": "SURASARAIGHAT  \nJHARA",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SSGJ",
  "name": "SURASARAIGHAT  \nJHARA",
  "nextstation": "SARAIGRAM",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SGAM",
  "name": "SARAIGRAM",
  "nextstation": "GAJARA BAHRA",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GAJB",
  "name": "GAJARA BAHRA",
  "nextstation": "DEORAGRAM",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "DRGM",
  "name": "DEORAGRAM",
  "nextstation": "MAJHOLI ",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MZHL",
  "name": "MAJHOLI ",
  "nextstation": "BARGAWAN",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BRGW",
  "name": "BARGAWAN",
  "nextstation": "GONDAWALI",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GNDI",
  "name": "GONDAWALI",
  "nextstation": "MAHDEIYA",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MHDA",
  "name": "MAHDEIYA",
  "nextstation": "SINGRAULI",
  "aden": "BEHR",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SGRL",
  "name": "SINGRAULI",
  "nextstation": "-",
  "aden": "KTE",
  "route": "KATANGI KHURD-SINGRAULI (KTKD-SGRL)",
  "den": "DEN(E)",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SYA",
  "name": "SALAIA",
  "nextstation": "RATANGAON",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "RTGN",
  "name": "RATANGAON",
  "nextstation": "SAGONI",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SAO",
  "name": "SAGONI",
  "nextstation": "GOLAPATTI",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GTY",
  "name": "GOLAPATTI",
  "nextstation": "GHATERA",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GEA",
  "name": "GHATERA",
  "nextstation": "BANDAKPUR",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BNU",
  "name": "BANDAKPUR",
  "nextstation": "KARHIYA BHADOLI",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KYX",
  "name": "KARHIYA BHADOLI",
  "nextstation": "DAMOH",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "DMO",
  "name": "DAMOH",
  "nextstation": "ASLANA",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "ANA",
  "name": "ASLANA",
  "nextstation": "PATHARIA",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "PHA",
  "name": "PATHARIA",
  "nextstation": "GANESHGANJ.",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GAJ",
  "name": "GANESHGANJ.",
  "nextstation": "DANGIDAHAR",
  "aden": "DMO",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "DGD",
  "name": "DANGIDAHAR",
  "nextstation": "GIRWAR",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "GW",
  "name": "GIRWAR",
  "nextstation": "LIDHORA KHURD",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "LDA",
  "name": "LIDHORA KHURD",
  "nextstation": "MAKRONIA",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MKRN",
  "name": "MAKRONIA",
  "nextstation": "SAUGOR",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SGO",
  "name": "SAUGOR",
  "nextstation": "RATONA",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "RTZ",
  "name": "RATONA",
  "nextstation": "NARIAOLI",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "NOI",
  "name": "NARIAOLI",
  "nextstation": "ISARWARA",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "ISH",
  "name": "ISARWARA",
  "nextstation": "JERUWAKHERA",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "JRK",
  "name": "JERUWAKHERA",
  "nextstation": "SUMRERI",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "SMRR",
  "name": "SUMRERI",
  "nextstation": "KHURAI",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "KYE",
  "name": "KHURAI",
  "nextstation": "BAGHORA",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BJQ",
  "name": "BAGHORA",
  "nextstation": "BINA MALKHEDI",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "MAKR",
  "name": "BINA MALKHEDI",
  "nextstation": "BINA  JN.",
  "aden": "SGO ",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 },
 {
  "code": "BINA",
  "name": "BINA  JN.",
  "nextstation": "-",
  "aden": "-",
  "route": "SALAIA-BINA (SYA-BINA)",
  "den": "DEN(W)    ",
  "betweenStations": "West Central Railway"
 }

    
    // Add more stations as needed
];

function displayResult(stationInfo) {
    // Display the result in the result section
    const resultSection = document.getElementById('result');

    // Create a table element
    const table = document.createElement('table');
    table.classList.add('station-table'); // Add a class for styling

    // Create table rows and cells for each property
    const properties = ['name', 'code', 'route', 'nextstation', 'aden', 'den', 'betweenStations'];

    properties.forEach(property => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = formatPropertyName(property);
        cell2.textContent = stationInfo[property];
    });

    // Append the table to the result section
    resultSection.innerHTML = '';
    resultSection.appendChild(table);
}

// Helper function to format property names (e.g., "nextstation" to "Next Station")
function formatPropertyName(propertyName) {
    return propertyName.charAt(0).toUpperCase() + propertyName.slice(1).replace(/([A-Z])/g, ' $1');
}
