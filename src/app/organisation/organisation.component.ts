import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { OrganisationService } from '../organisation.service'

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
  chartData: any[]
  @Output() itemSelectedEvent = new EventEmitter()
  public options: any = {
    chart: {
      height: 200,
      width: 500,
      inverted: true,
      events: {
        load: function(){
          var renderer = this.renderer;
          console.log(renderer)
        }
      }
    },
    title: {
      text: ''
    },
    series: [{
      type: 'organization',
      name: 'Highsoft updated',
      keys: ['from', 'to'],
      cursor: 'pointer',
      events: {
        click: (event) => {
          this.itemSelectedEvent.emit(event.point.id)
          if(event.point.dataLabel.hasClass('active')){
            event.point.dataLabel.removeClass('active')
            event.point.linksFrom.forEach(element => {
              removeActiveClass(element);
              element.toNode.dataLabel.removeClass('active');
            });
          } else {
            event.point.dataLabel.addClass('active')
            event.point.linksFrom.forEach(element => {
              highlightPoints(element);
              element.toNode.dataLabel.addClass('active');
            });
          }
          function highlightPoints(element) {
            if (element.toNode) {
              if (element.toNode.linksFrom) {
                element.toNode.linksFrom.forEach(innerElement => {
                  highlightPoints(innerElement);
                  innerElement.toNode.dataLabel.addClass('active');
                })
              }
            }
          }

          function removeActiveClass(element) {
            if (element.toNode) {
              if (element.toNode.linksFrom) {
                element.toNode.linksFrom.forEach(innerElement => {
                  removeActiveClass(innerElement);
                  innerElement.toNode.dataLabel.removeClass('active');
                })
              }
            }
          }
        },
      },
      data: [],
      nodes: [
        {
          id: 'PMO',
          icon: 'account_circle',
          name: 'Project Manager',
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
          id: 'I1',
          icon: 'account_circle',
          name: 'Intern'
        },
      ],
      dataLabels: {
        nodeFormat: `{point.name}`,
      },
    }],
    tooltip: {
      enabled: false,
      crosshairs: true,
      formatter: function() {
        return this.point.icon;
      }
    },
  };

  constructor( 
    private organisationService: OrganisationService
  ) { }

  getChartData(){
    // this.chartData = this.organisationService.getChartData()
    this.options.series[0].data = this.organisationService.dataArr
    
  }
  ngOnInit() {
    this.getChartData()
    Highcharts.chart('container', this.options); // organization
  }

  

  // showChart(){
  //   setTimeout(
  //     ()=>{
  //       Highcharts.chart('container', this.options); // organization
  //     }, 0
  //   )
  // }
}
