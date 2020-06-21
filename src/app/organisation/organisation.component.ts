import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import networkgraph from 'highcharts/modules/networkgraph';
networkgraph(Highcharts);
import sankey from 'highcharts/modules/sankey';
sankey(Highcharts);
import organization from 'highcharts/modules/organization';
organization(Highcharts);
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);
import accessibility from 'highcharts/modules/accessibility';
accessibility(Highcharts);

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  public options: any = {
    chart: {
      height: 600,
      inverted: true
    },
    title: {
      text: 'Org Chart'
    },
    series: [{
      type: 'organization',
      name: 'Highsoft',
      keys: ['from', 'to'],
      cursor: 'pointer',
      events: {
        click: function (event) {
          event.point.linksFrom.forEach(element => {
            if(element.toNode){
              if(element.toNode.linksFrom){
                element.toNode.linksFrom.forEach(innerElement => {
                  innerElement.toNode.dataLabel.addClass('active');
                })
              }
            }
            element.toNode.dataLabel.addClass('active');
          });
        }
    },
      data: [
        ['PMO', 'TM'],
        ['TM', 'D1'],
        ['TM', 'D2'],
        ['TM', 'D3'],
        ['D1', 'Intern'],
      ],
      nodes: [
        {
          id: 'PMO',
          icon: 'account_circle',
          name: 'Project Manager'
        },
        {
          id: 'TM',
          icon: 'account_circle',
          name: 'Team Lead'
        },
        {
          id: 'D1',
          icon: 'account_circle',
          name: 'Developer 1'
        },
        {
          id: 'D2',
          icon: 'account_circle',
          name: 'Developer 2'
        },
        {
          id: 'D3',
          icon: 'account_circle',
          name: 'Developer 3'
        },
        {
          id: 'Intern',
          icon: 'account_circle',
          name: 'Intern'
        },
      ],
      dataLabels: {
        nodeFormat : `{point.name}`
      }
    }],

  };
  
  constructor() {}

  ngOnInit() {
    Highcharts.chart('container', this.options); // organization

  }

}
