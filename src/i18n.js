import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          widgets: {
            part1: "Selling stats and charts",
            part2: "Selling quality",
            part3: "Orders",
            part4: "Advices for sellers",
            part5: "Top offers",
            part6: "Recent reviews"
          },
          quality: {
            part1: "Avg. product rank:",
            part2: "Avg. client satisfaction:",
            part3: "Avg. communication satisfaction:",
            part4: "Your rank:",
            part5: "Your rating: ",
            none: "No data",

            userRank1: "Private",
            userRank2: "Corporal",
            userRank3: "Sergeant",
            userRank4: "Major",
            userRank5: "General",
            userRank0: "No rank"
          },
          orders: {
            part1: "Not yet paid",
            part2: "Unsent",
            part3: "Returns",
            part4: "GO TO",
            noOrders:
              "You don't have any orders yet. Go ahead and use some of our advertising methods!"
          },
          advices: {
            part1: "You should attach high-resolution images to your products.",
            part2:
              "You should send your products in time. The faster the client gets the product, the higher the satisfaction."
          },
          offers: {
            part1: "avg. price",
            part2: "sold",
            part3: "income",
            part4: "SORT BY:",
            part5: "current price",
            part6: "unique views",
            sortby1: "MOST SOLD",
            sortby2: "LEAST SOLD",
            noOffers: "You don't have any offers."
          },
          reviews: {
            part1: "added a review",
            part2: "SHOW MORE",
            part3: "SHOWING:",
            showing1: "ALL",
            showing2: "POSITIVE",
            showing3: "NEGATIVE"
          },
          pages: {
            seemore: "Customers' reviews",
            returns: "Order returns",
            unsent: "Orders unsent",
            notyetpaid: "Orders not yet paid",
            goback: "Back to the home page",
            quality: "Selling quality"
          }
        }
      },
      pl: {
        translation: {
          widgets: {
            part1: "Dane sprzeda??y i wykresy",
            part2: "Jako???? sprzeda??y",
            part3: "Zam??wienia",
            part4: "Wskaz??wki dla sprzedawc??w",
            part5: "Ranking ofert",
            part6: "Ostatnie opinie"
          },
          quality: {
            part1: "??r. ocena produktu:",
            part2: "??r. ocena satysfakcji klienta:",
            part3: "??r. ocena komunikacji:",
            part4: "Twoja ranga:",
            part5: "Twoja ocena: ",
            none: "Brak danych.",

            userRank1: "Szeregowy",
            userRank2: "kapral",
            userRank3: "Sier??ant",
            userRank4: "Major",
            userRank5: "Genera??",
            userRank0: "brak"
          },
          orders: {
            part1: "Nieop??acone",
            part2: "Niewys??ane",
            part3: "Zwroty",
            part4: "ID?? DO",
            noOrders:
              "Nie masz jeszcze ??adnych zam??wie??. U??yj naszych metod reklamy, aby przyci??gn???? wi??cej klient??w."
          },
          advices: {
            part1:
              "Powiniene?? do????czy?? zdj??cia w wysokiej rozdzielczo??ci do swoich produkt??w.",
            part2:
              "Powiniene?? wys??a?? swoje produkty na czas. Im szybciej klient otrzyma produkt, tym wi??ksza satysfakcja."
          },
          offers: {
            part1: "??r. cena",
            part2: "sprzedane",
            part3: "przych??d",
            part4: "SORTUJ WG:",
            part5: "obecna cena",
            part6: "wy??wietle??",
            sortby1: "NAJWI??CEJ SPRZEDANYCH",
            sortby2: "NAJMNIEJ SPRZEDANYCH",
            noOffers: "Nie posiadasz ??adnych ofert."
          },
          reviews: {
            part1: "doda?? opini??",
            part2: "POKA?? WI??CEJ",
            part3: "POKA??:",
            showing1: "WSZYSTKIE",
            showing2: "POZYTYWNE",
            showing3: "NEGATYWNE"
          },
          pages: {
            seemore: "Opinie kupuj??cych",
            returns: "Zwroty zam??wie??",
            unsent: "Zam??wienia niewys??ane",
            notyetpaid: "Zam??wienia nieop??acone",
            goback: "Powr??t na stron?? g????wn??",
            quality: "Jako???? sprzeda??y"
          }
        }
      }
    }
  });

export default i18n;
