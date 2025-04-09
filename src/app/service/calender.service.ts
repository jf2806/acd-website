import { Injectable } from "@angular/core";
import { EventInput } from "@fullcalendar/core/index.js";

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    events: EventInput[] = [
        {
          title: 'Training',
          start: '2025-04-10T17:30:00',
          end: '2025-04-10T19:00:00',
          ageClasses: ['Alle','U20'],
        },
        {
            title: 'Training',
            start: '2025-04-14T17:30:00',
            end: '2025-04-14T19:00:00',
            ageClasses: ['Alle','U20'],
          },
          {
            title: 'Training',
            start: '2025-04-17T17:30:00',
            end: '2025-04-17T19:00:00',
            ageClasses: ['Alle','U20'],
          },
          {
            title: 'Training',
            start: '2025-04-21T17:30:00',
            end: '2025-04-21T19:00:00',
            ageClasses: ['Alle','U20'],
          },
          {
            title: 'Training',
            start: '2025-04-24T17:30:00',
            end: '2025-04-24T19:00:00',
            ageClasses: ['Alle','U20'],
          },
          {
            title: 'Kreismeisterschaften U18',
            date: '2025-04-19',
            ageClasses: ['Alle', 'U18'],
            color: 'red',
            links: [
              {
                name: 'LADV',
                link: 'https://ladv.de/ausschreibung/detail/43651/Kreis-Mehrkampfmeisterschaften-Saarbr%C3%BCcken--Saar-Pfalz-P%C3%BCttlingen.htm'
              },
              {
                name: 'Ausschreibung',
                link: 'https://www.slb-saarland.com/fileadmin/user_upload/Termine/2025/05_Mai/kreise/20250503puettlingen.pdf'
              }
            ]
          },
          {
            title: 'Saarlandmeisterschaften U20',
            date: '2025-04-26',
            ageClasses: ['Alle', 'U20'],
            color: 'blue'
          },
          {
            title: 'Osterferien - kein Training',
            start: '2025-04-28',
            end: '2025-05-05',
            color: 'black',
            ageClasses: ['Alle']
          }
      ];

    constructor(
    ) {}
}
