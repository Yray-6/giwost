"use client";
import React from "react";
import Partners from "../components/Partners";
import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/Floating";

const Page = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("all");

  const hospitalData = {
    "RIVERS STATE": [
      {
        name: "ATLANTIC HOSPITAL",
        address: "76C Emekuku Street, Dline Port Harcourt",
      },
      {
        name: "BENDFARE HOSPITAL",
        address:
          "Km2 East-West Road, off eleme junction, Opp silver Lodge, Rumukrushi new Layout, Port Harcourt",
      },
      {
        name: "HARRYLAND MEDICAL CENTRE",
        address: "126 Rumuosi, farm Road",
      },
      {
        name: "ABUNDANT HEALTH SPECIALIST HOSPITAL",
        address: "9 Aleruchi close off 5 Ada George Rd Mgbuoba",
      },
      {
        name: "EXPLOIT HOSPITAL",
        address: "58 Ada George road Rumeme Port Harcourt",
      },
      {
        name: "PAIYEBOR HOSPITAL",
        address: "11b Prof akure gobo avenue, abuloma, PH, Rivers state",
      },
      {
        name: "CASTLE HOSPITAL",
        address:
          "No.42 Rumuola road, by people's club, opp total filling station, Rumuola PH",
      },
      {
        name: "RISEN GOOD SHEPHERD HOSPITAL",
        address:
          "No 27 Lucky street, Road 24 ext, Agip housing Estate Rumueme Port Harcourt",
      },
      {
        name: "GBEYE HOSPITAL AND MATERNITY",
        address: "16 Ahoada Road Omoku, Rivers State",
      },
      {
        name: "DOMINION LIFE MEDICAL SERVICES",
        address: "Rumudara, Port Harcourt",
      },
      {
        name: "TRUVINE SPECIALIST HOSPITAL",
        address:
          "No 3 Omuokpor Farm Road, Airport Road, Igwuruta, Port Harcourt",
      },
      {
        name: "PRESTIGE HOSPITAL AND MATERNITY",
        address:
          "No 3 Elijiji Street, Airport Road, Opp. Shining Light Rukpokwu, Port Harcourt",
      },
      {
        name: "ST MARY MOTHER OF MERCY HOSPITAL",
        address: "No. 68 Ogbatai road, Woji Port Harcourt",
      },
      {
        name: "EASY MOTHERHOOD HOSPITAL AND MATERNITY LTD",
        address:
          "12 shedrack Avenue by Rock word Bus stop off old refinery road Elelewon port Harcourt",
      },
      {
        name: "SHALVINAT HEALTHCARE LTD",
        address:
          "Walter finpiri street, off wilbros pipeline road Bonny Island Rivers State",
      },
    ],
    "LAGOS STATE": [
      {
        name: "HOVA'S PLACE HOSPITAL AND CLINIC",
        address: "Plot 122AX close 21 road, Festac town, Lagos Nigeria",
      },
      {
        name: "AWOLIYI MEMORIAL HOSPITAL AND MATERNITY",
        address: "183 Bamgbose street, Lekki",
      },
      {
        name: "JJANED SPECIALIST HOSPITALS",
        address:
          "3 Jerry Nwakobi street, Beside Lekki garden phase 2 road, AJa Lagos",
      },
      {
        name: "ELVIR GREEN HOSPITAL",
        address: "8 odunsi street, Amosun Iyana Ishashi, Lagos",
      },
      {
        name: "BLESSING CONVALESCENT AND NURSING HOME",
        address: "15 Akinsanya street, off Ori Okuta Agric, Ikorodu",
      },
      {
        name: "ABSOLUTE CARE HOSPITAL",
        address: "2 Musari Apena Street Airport Road off local Ikeja, Lagos",
      },
      {
        name: "DOTMED CARE HOSPITAL",
        address: "gbetu, awoyaya, ibeju-lekki, lagos",
      },
      {
        name: "MAINFRAME HOSPITAL",
        address: "Iyana, ishashi, lagos",
      },
      {
        name: "TRIUMPH MEDICAL CENTER",
        address: "32, UNITY ROAD,OFF TOYIN STREET, IKEJA, LAGOS",
      },
      {
        name: "SERENE HOSPITAL",
        address:
          "No. 5 Amusa Ajoro street, Lagasa phase II, Ibeju-Lekki, Lagos State",
      },
      {
        name: "EMMANUELLE HOSPITAL",
        address: "22 Ikotun-Idimu Road, Egbe",
      },
      {
        name: "PASSION CARE HOSPITAL LTD",
        address: "50 Ago Palace Way, Oshodi- Isolo",
      },
      {
        name: "AJARA MEDICAL CENTER",
        address: "Dr. Dauda Bioku Street, Badagary",
      },
      {
        name: "ELVIRGREEN HOSPITAL",
        address: "81 Anibaba Street opp. Mountain of Fire Miracles Min., Ojo",
      },
      {
        name: "ALASCO HOSPITAL",
        address: "48 Ijebu Ode Road, Odomole -Epe",
      },
      {
        name: "CARNAMED CLINICS LIMITED",
        address: "9/11, Coker Street, Mulero bus stop, Orile Lagos",
      },
      {
        name: "CARNAMED CLINICS LIMITED",
        address: "137, Ogudu road, Ogudu, Lagos",
      },
      {
        name: "KINGDOM HEALTH HOSPITAL",
        address: "205 Olaniyi Abule-Egba, Lagos State",
      },
      {
        name: "IDIMU PRIME HOSPITAL",
        address:
          "Church bus stop, 8 Shaibu Adeolu street, along Idimu Ejigbo Road, Idimu Lagos",
      },
      {
        name: "BUDO SPECIALIST HOSPITAL",
        address: "Lekki Epe express way, Ajah Lagos",
      },
      {
        name: "DE LAKED LAND IMPERIAL MEDICAL CENTER",
        address: "No. 180 awolowo way, itamaga, ikorodu Lagos",
      },
      {
        name: "CRUSAINTS HOSPITAL LAGOS",
        address: "NO. 54 BAYO ADESHIYAN AVENUE LAGOS",
      },
      {
        name: "BETTA HOSPITAL LIMITED",
        address: "9/11 COKER STREET, ORILE AGEGE, LAGOS",
      },
      {
        name: "MEDI SERVICES COMMUNITY HOSPITAL",
        address: "28 David ogundele street, Ipaja, Lagos",
      },
      {
        name: "HAMKAD HOSPITAL AND MATERNITY HOME",
        address: "39 olawale Cole street, U turn Bus stop Abule Egba Lagos",
      },
      {
        name: "THE EXCELLENCE HOSPITAL",
        address:
          "Alogba Estate road, off Ibeshe road, 5 Alh .M .A alogba street Ikorodu Lagos",
      },
      {
        name: "HOUSE OF JULIUS HOSPITAL",
        address: "57 Murtala Muhammed Int'l airport road isolo Lagos",
      },
      {
        name: "OLU ADEYEMI HOSPITAL",
        address: "Nusiratu Lasisi street, Isolo Lagos",
      },
      {
        name: "PACIFIC HOSPITAL",
        address: "No. 4 shoboyejo street off iju road iju-ishaga Lagos",
      },
      {
        name: "MIRACULOUS GRACE MEDICAL CENTER",
        address: "No 19 pipeline off cele bus stop Alagbole Lagos",
      },
    ],
    "FCT, ABUJA": [
      {
        name: "JETHRONE HOSPITAL AND DIAGNOSTIC CENTER",
        address: "Plot 44, NYSC CAMP road, Kubkwa, Abuja - FCT",
      },
      {
        name: "EL HUSSAIN SPECIALIST HOSPITAL",
        address: "5 Imam Abubakar street Dakwa Tafa, Abuja",
      },
      {
        name: "PAN-RAF HOSPITAL LTD",
        address: "Plot B 65, Road 3, phase 4 Nyanya Abuja",
      },
      {
        name: "PAN-RAF HOSPITAL LTD",
        address: "Km 12 Kurudu (Azhata) off Karashi Expressway, FACT Abuja",
      },
      {
        name: "DIVINE WINNERS MEDICAL CENTER & MATERNITY",
        address: "No.85 zone 2, First gate, Dutse Fct Abuja",
      },
      {
        name: "TAHMARIS MEDICAL CENTRE LTD",
        address: "ACO/AMAC housing Estate, airport Road, Abuja",
      },
      {
        name: "LEGEND HOSPITAL AND DIAGNOSTIC LIMITED",
        address: "4 Ambrose Umaru street, opposite shaira Court, Gwagwalada",
      },
      {
        name: "MEENAT HOSPITAL AND MATERNITY LTD",
        address: "Off old zuba Rd, Angwa makeri Tunga-maje",
      },
      {
        name: "WELL POINT CLINICS LTD",
        address: "PLOT 751 JUSTICE MISTAPH AKANBI CRESENT GWARIMPA, ABUJA",
      },
      {
        name: "GOPHER ARK HOSPITAL ABUJA",
        address:
          "PLOT 139 BEHIND HAPPY HALL AND SHUT KADO LIFE CAMP EXTENSION GWARINPA ABUJA",
      },
      {
        name: "YABISAM HOSPITAL LTD",
        address: "House 3, F Close, F H A Lugbe, Fct Abuja",
      },
      {
        name: "GRABBO FERTILITY CLINIC",
        address:
          "PLOT C83 ADETUNJI ALASHE STREET IST AVENUE GWARIMPA ESTATE ABUJA",
      },
      {
        name: "HOSPIMED CLINIC AND CHILDREN HOSPITAL",
        address: "APO LEGISLATIVE QUARTERS 1294 BAMANGA TUKUR GUDU ABUJA",
      },
    ],
    "DELTA STATE": [
      {
        name: "KENCREST PRIVATE HOSPITAL",
        address:
          "9 Joe Asim street, off Okpanam road behind Ada Anioma event center, GRA Asaba",
      },
      {
        name: "TRIUMPH HOSPITRAL AND MATERNITY",
        address: "Asaba-Benin Express road, behind no wayo filling station",
      },
      {
        name: "RAPHA SPECIALIST CLINIC",
        address: "85 Airport road, Effurun warri Delta State",
      },
      {
        name: "TWINS CLINICS AND HOSPITAL",
        address: "No. 1 Twins clinic drive off Deco Road",
      },
      {
        name: "OUR REDEEMER ORTHOPEDIC HOSPITAL",
        address: "convent by Ajuebor street, AGBOR, Delta State",
      },
      {
        name: "KINGS CLINIC",
        address: "16/36 cemetery road, Odion Warri Delta State",
      },
      {
        name: "CENTRE CARE HOSPITAL",
        address: "Opposite ugbomoro secondary school ugbomoro warri",
      },
      {
        name: "DIVINE MISSION MEDICAL CENTER",
        address: "NO. 3 LEXDIETE STREET OFFOO EKEREDJEBOR ROAD UGHELLI",
      },
      {
        name: "OKPARAVERO MEMORIAL HOSPITAL",
        address: "No.159 Sapele - Warri road, Amukpe, Sapele Delta State",
      },
      {
        name: "CHOICE CLINIC ABAROGHO",
        address: "Uruhughelli Road near wood market Agbarho",
      },
      {
        name: "CPM NURSING HOME AND MATERNITY",
        address: "Abarogho town, Delta state",
      },
      {
        name: "TRINITY HOSPITAL",
        address: "Ughelli, Delta state",
      },
      {
        name: "ODERA SPECIALIST HOSPITAL ASABA",
        address: "NO. 30 JESUS SAVES STREET, UMUAGU ASABA",
      },
    ],
    "ENUGU STATE": [
      {
        name: "DISOM SPECIALIST HOSPITAL",
        address: "1A Idemili, Dr. Independence layout, Enugu",
      },
      {
        name: "DE OZOEMENA HOSPITAL AND MATERNITY",
        address: "No.9b old obollo road, ohom - orba",
      },
      {
        name: "VIRGO PROTENS HOSPITAL",
        address: "Plot 16, Republic layout, independence layout ENUGU",
      },
      {
        name: "BRIDGE VIEW MULTI SPECIALIST HOSPITAL",
        address: "21a Nwodo street GRA ENUGU",
      },
    ],
    "IMO STATE": [
      {
        name: "AKARUGO HOSPITAL",
        address: "3 Eze Egbukole street, Ikenebu owerri",
      },
      {
        name: "ST. MICHAEL HOSPITAL",
        address: "Behind Bonifide filling station, Okigwe Imo State",
      },
      {
        name: "CLARETIAN UNIVERSITY HOSPITAL",
        address: "No.8 Old road, Nekede Owerri",
      },
      {
        name: "HUMAN RACE MEDICAL CENTER",
        address: "Plot 111/113 Industrial clusters, LGA owerri",
      },
    ],
    "ONDO STATE": [
      {
        name: "MIDAS HOSPITALS",
        address: "65 Oke Ijebu street, Akure",
      },
      {
        name: "UNITY CLINIC",
        address: "Road 12, FUTA Satellite Estate, Akure",
      },
      {
        name: "ROHI SPECIALIST HOSPITAL",
        address: "9, Iwanike street, Oshinle, Akure",
      },
      {
        name: "ST. MICHAEL HOSPITAL LTD",
        address: "40 Danjuma Street office Ondo Road Akure",
      },
      {
        name: "OGO-OLUWA MEDICAL CLINIC AND MATERNITY",
        address: "Benin Lagos Expressway, ore-odigbo lga Ondo State",
      },
    ],
    "OGUN STATE": [
      {
        name: "GODS PROMISE MEDICAL CENTER",
        address: "19 Plaza Road, Off Ijoko Road Ota, Ogun State",
      },
      {
        name: "DAVEROSE HOSPITAL",
        address: "Federal housing Estate, Olomore, Abeokuta",
      },
      {
        name: "PRINCE AND PRINCESS ROYAL HOSPITAL",
        address: "11, Road C, God's grace estate, yakoyo Mowe, Ogun state",
      },
      {
        name: "Caring Heart Clinics and Maternity Centre",
        address:
          "1, Wole-Iredele street, off Abiola Way, Asero, Abeokuta, Ogun state",
      },
      {
        name: "SKYLARK HOSPITAL AND MOLECULAR DIAGNOSTICS CENTRE",
        address: "11/13 Skylark Road, Agura, Sagamu",
      },
      {
        name: "Merit Clinics and Maternity LTD",
        address: "2 Solademi Street, Ifo, Ogun state",
      },
      {
        name: "ARRIVE MEDICAL CENTRE",
        address: "8 ALLIAJI Mutainu, Abeokuta",
      },
      {
        name: "HARMONY CLINIC AND MATERNITY HOME",
        address: "2 Harmony Close, Ejigbo Tuntun, Ilo Awela, Ota",
      },
      {
        name: "Riverside Medical Centre",
        address:
          "KM 14 Lagos-Ibadan Expressway, 12 Molaja Odunbaku Street, Off Oremeji, Ibafo, Ogun state",
      },
      {
        name: "OBJ Hospital and Maternity Home LTD",
        address: "39 Orilowo Street, by Irede Market, Kashia, Ogun state",
      },
      {
        name: "BESH LIFE CARE HOSPITAL ABEOKUTA",
        address: "Abiola Way, Abeokuta, 8 Penta Street",
      },
    ],
    "EDO STATE": [
      {
        name: "ADIZA HOSPITAL",
        address: "Jattu, Auchi Edo State",
      },
      {
        name: "BOSEDE SPECIALIST HOSPITAL LTD",
        address: "3 Adeyan Crescent, off Aikhionbare Road, GRA, Benin City",
      },
      {
        name: "CITY OF HOPE MEDICAL CENTRE",
        address: "KM 7 Benin-Sapele Road",
      },
      {
        name: "PRIME DEW HOSPITAL",
        address: "Ugbor Village Road, Oka, Benin City",
      },
    ],
    "ABIA STATE": [
      {
        name: "MADONNA CATHOLIC HOSPITAL",
        address: "Umuahia Aba Road, Umuahia, Abia State",
      },
      {
        name: "PRO-QUICK HEALTH INTELLIGENCE LTD",
        address:
          "Quick Health House, 2 Nwadinobi Crescent, off BCA Road, Umuahia",
      },
      {
        name: "BALM OF GOD MEDICAL CENTER LTD",
        address: "#9 Nwaogu Street, off 108 Osusu",
      },
    ],
    "ANAMBRA STATE": [
      {
        name: "EL-SHADDAI HOSPITAL & MATERNITY",
        address: "23 Ezeiweka Road, Awada Layout, Onitsha",
      },
      {
        name: "REDEMPTION HOSPITAL",
        address: "No. 15b Milikwe Road, Nnewi, Anambra",
      },
      {
        name: "Crystal Specialist Hospital and Maternity Nnewi",
        address: "Ogbufor Road, opposite St. Mary's Catholic Church, Nnewi",
      },
      {
        name: "RESTORATION SPECIALIST HOSPITAL, AWKA",
        address: "Plot 88/89 Odera Estate, Local Agua",
      },
      {
        name: "PIETA HOSPITAL",
        address:
          "No 4 Nwaziki Street, Awada Obosi, near People's Club, Onitsha-Owerri Expressway, Anambra State",
      },
    ],
    "OYO STATE": [
      {
        name: "WEST WIND HOSPITAL AND MATERNITY",
        address: "No. 6 Segun Oriola Street, Ologuneru Road, Eleyele, Ibadan",
      },
      {
        name: "BETHEL LAND HOSPITAL",
        address: "No. 2 Akhrameh Street, behind First Bank PLC, Ojo, Ibadan",
      },
      {
        name: "TELLEMED HOSPITAL",
        address:
          "#15 Irepodum Street, off Akala Expressway, New Garage Road, Ibadan",
      },
    ],
    "CROSS RIVER STATE": [
      {
        name: "JIL SPECIALIST HOSPITAL",
        address: "3 ETA Ephraim Street, Calabar",
      },
      {
        name: "ENE MEDICAL CENTRE",
        address: "Obudu, Cross Rivers",
      },
      {
        name: "AMBLUS MEDICALS",
        address: "77 Nelson Mandela Street, Calabar",
      },
      {
        name: "JOHNMARK COTTAGE HOSPITAL LTD",
        address: "7 Mbube Road, Ndok Junction, Ogoja",
      },
      {
        name: "TESTIMONY HEALTHCARE AND SURGERIES",
        address: "Plot 392/394 Eta-Agbor Layout, Calabar",
      },
      {
        name: "COUNTY SPECIALIST HOSPITAL",
        address: "77 Calabar Road, Ikom",
      },
    ],
    "AKWA IBOM STATE": [
      {
        name: "ST ANTHANASIUS HOSPITAL LTD",
        address: "No. 1 Ufeh Street, Federal Housing Estate, Uyo",
      },
      {
        name: "HERITAGE MEDICAL SERVICES",
        address: "Plot 18 C Line, Ewet Housing Estate, Uyo",
      },
      {
        name: "DAMMY MEMORIAL HOSPITAL LTD",
        address: "No. 34 Ukana Offit Street, Uyo, Akwa Ibom",
      },
    ],
    "BAYELSA STATE": [
      {
        name: "Ripus Hospital Limited",
        address: "5 Dikebi Lott Street, Ekeki, Yenagoa",
      },
      {
        name: "Grandcare Hospital",
        address: "No. 30 Tenacious Street, Edepie, Yenagoa, Bayelsa State",
      },
      {
        name: "FRANKWEST SPECIALIST HOSPITAL",
        address: "21 Mgbi Road, Amarata by Salvation Ministries, Yenagoa",
      },
    ],
    "KADUNA STATE": [
      {
        name: "SENGYURO MEMORIAL HOSPITAL",
        address: "No. 14 Challawa Crescent, Barnawa, Kaduna South",
      },
      {
        name: "NEW ERA HOSPITAL",
        address: "No. 8 Funtia Street, Kafanchan, Kaduna",
      },
    ],
    "NASARAWA STATE": [
      {
        name: "PAN-RAF HOSPITAL LTD",
        address: "Masaka, Opp Central Mosque, along Keffi Road, Nasarawa State",
      },
      {
        name: "SPECIAL CARE SPECIALIST HOSPITAL",
        address: "Kabayi before bridge, Mararaba",
      },
      {
        name: "MAY DAY SPECIALIST HOSPITAL & MATERNITY",
        address:
          "Abacha Road, opposite Polaris Bank before back road, Mararaba, Abuja/Nasarawa State",
      },
    ],
    " BENUE STATE": [
      {
        name: "PHILADELPHIA HOSPITAL",
        address: "Along Judge Akume Way, Makurdi",
      },
      {
        name: "BENONIL HOSPITAL",
        address: "7 Zion Street, Wurukum, Makurdi",
      },
      {
        name: "EMMANUEL CLINIC AND MATERNITY",
        address: "118 God's Time Street, Gboko",
      },
    ],
    "OSUN STATE": [
      {
        name: "GLORYLAND SPECIALIST HOSPITAL",
        address: "5 Adeyemi Street, Ogoluwa, Osogbo",
      },
      {
        name: "SAKO IGBALA CHRIST EMBASSY HOSPITAL",
        address: "Ayelabowo Street, More Area, Ile-Ife, Osun",
      },
    ],
    " PLATEAU STATE": [
      {
        name: "JANIK SPECIALIST HOSPITAL",
        address: "No. 78 Tudun-W ADP Ring Road, Jos",
      },
    ],
    "BAUCHI STATE": [
      {
        name: "EXTREME HOSPITAL",
        address: "No. 403 State Loui-Court Bye-pass, Azare, Bauchi State",
      },
      {
        name: "APPLE CLINIC AND MATERNITY",
        address: "3 Lame Close, New GRA, Bauchi",
      },
      {
        name: "AL-MANZOOR DIAGNOSTIC AND CLINICAL SERVICE LTD",
        address: "10 Pijayan, Bauchi",
      },
      {
        name: "AS-SALAAM HOSPITAL",
        address: "6 Tanki Junction, Bubi Dam Road, Bauchi",
      },
    ],
    "SOKOTO STATE": [
      {
        name: "SPECIALIST HOSPITAL",
        address: "45 Suitan Abubakar Road"
      }
    ],
    "KWARA STATE": [ {
      name: "FATIMA HOSPITAL",
      address: "Along Specialist Hospital Road, Alagbado, Kwara, Ilorin"
    },
    {
      name: "OLALOMI HOSPITAL",
      address: "Olalomi Street, Dr. Tunji Olagunji, Offa, Kwara State"
    },
  ],
  "EKITI STATE": [
    {
      name: "SUPREME FAITH HOSPITAL",
      address: "Opposite Eco Bank, Ajilosun Street, Ado Ekiti"
    },
    {
      name: "PRECIOUS LIFE SPECIALIST CLINICS",
      address: "1 Kate Afolalu Close, Adjacent Tinuola Maximum School, Federal Housing Estate, Ado-Ekiti"
    }
  ],
  " EBONYI STATE" : [
    {
      name: "CHITOM RAPHA HOSPITAL AND MATERNITY",
      address: "No. 19 Urochukwu Street, Abakaliki"
    }
  ],
  "KANO STATE": [
    {
      name: "SPECIALIST HOSPITAL",
      address: "No. 1 Hospital Road, Kano"
    },
    {
      name: "AL-AMIN HOSPITAL",
      address: "No. 2 Kofar Nassarawa Road, Kano"
    }
  ],
  };

  const states = Object.keys(hospitalData);

  const filteredHospitals = React.useMemo(() => {
    if (selectedState === "all" && !searchTerm)
      return Object.entries(hospitalData);

    if (selectedState !== "all") {
      const stateData = [[selectedState, hospitalData[selectedState]]];
      if (!searchTerm) return stateData;

      return stateData
        .map(([state, hospitals]) => [
          state,
          hospitals.filter(
            (h) =>
              h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              h.address.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        ])
        .filter(([_, hospitals]) => hospitals.length > 0);
    }

    return Object.entries(hospitalData)
      .map(([state, hospitals]) => [
        state,
        hospitals.filter(
          (h) =>
            h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            h.address.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      ])
      .filter(([_, hospitals]) => hospitals.length > 0);
  }, [searchTerm, selectedState]);

  return (
    <div>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="text-center text-white pt-12 flex-col flex items-center justify-center bghero h-96 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-mono">
              Hospital Partners
            </h1>

            <div className="flex justify-center gap-2 items-center">
              <hr className="w-12 border-2 border-red-500" />
              <p className="text-sm uppercase tracking-wider">
                Find Your Location
              </p>
              <hr className="w-12 border-2 border-red-500" />
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-lg md:text-xl max-w-2xl text-center font-bold mx-auto">
            Over 150 hospitals across different states in Nigeria for your
            practical internship/clinical training
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search hospitals or locations..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
              <select
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="all">All States</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Hospital Listings */}
          <div className="space-y-8">
            {filteredHospitals.map(([state, hospitals]) => (
              <div
                key={state}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <h2 className="bg-blue-600 text-white px-6 py-4 text-xl font-semibold">
                  {state}
                </h2>
                <div className="p-6">
                  <ul className="space-y-4">
                    {hospitals.map((hospital, idx) => (
                      <li
                        key={idx}
                        className="border-b last:border-b-0 pb-4 last:pb-0"
                      >
                        <h3 className="font-semibold text-lg text-gray-800">
                          {hospital.name}
                        </h3>
                        <p className="text-gray-600 mt-1">{hospital.address}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For all inquiries, please call our office line to speak with Mr.
              Isaac, the program coordinator:
            </p>
            <p className="text-blue-600 font-semibold mt-2">
              08135100764, 08138270424
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700 italic">
                Note: You can visit any of these hospitals in your location for
                verification if you're in doubt before registration, but No
                registration and payment is made in the hospital
              </p>
            </div>
          </div>
        </div>
      </main>

      <Partners />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Page;
