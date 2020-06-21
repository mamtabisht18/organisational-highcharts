import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor() { }

  getOrganisationData() {
    return [
      {
        id: 1,
        code: 'PMO',
        name: 'Project MAnager',
        icon: 'account_circle',
        children: [
          {
            id: 2,
            code: 'TM',
            name: 'Team Lead',
            icon: 'account_circle',
            children: [
              {
                id: 3,
                code: 'D1',
                name: 'Developer 1',
                icon: 'account_circle',
              },
              {
                id: 4,
                code: 'D2',
                name: 'Developer 2',
                icon: 'account_circle',
              },
              {
                id: 5,
                code: 'D3',
                name: 'Developer 2',
                icon: 'account_circle',
                children: [
                  {
                    id: 6,
                    code: 'I1',
                    name: 'Intern',
                    icon: 'account_circle',
                  }
                ]
              },
            ]
          }
        ]
      }
    ]
  }

}
