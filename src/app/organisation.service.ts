import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  dataArr: any[] = []
  constructor() { 
    const data = {
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
        },
        {
          id: 3,
          code: 'D1',
          name: 'Developer 1',
          icon: 'account_circle',
        },{
          id: 4,
          code: 'D2',
          name: 'Developer 2',
          icon: 'account_circle',
        }
      ]
    }
    this.createChildNodes(data)
    // console.log(this.dataArr)
  }

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

  createChildNodes(data){
    data.children.forEach(
      (childrenRow) =>{
        this.dataArr.push(
          [data.code, childrenRow.code]
        )
        if(childrenRow.children !== undefined){
          this.createChildNodes(childrenRow)
        }
      }
    )
    // console.log(dataArr)
    // for(let key in data ){
    //   let dataArr = []
    //   dataArr.push(
    //     [data[key].name, data[key].children.code]
    //   )
    // }
  }

  getChartData(){
    return [
      ['PMO', 'TM'],
      ['TM', 'D1'],
      ['TM', 'D2'],
      ['TM', 'D3'],
      ['D1', 'Intern'],
    ]
  }

}
